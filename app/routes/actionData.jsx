import { useState, useEffect } from "react";
import {Link, Form, useTransition, useLoaderData, useActionData, useFetcher, Outlet, useLocation}  from "@remix-run/react";
import { Title, List, Button, Space, TextInput, Group, Text, Loader } from '@mantine/core';
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"

export let action = async ({ request }) => {
    const formData = await request.formData();
    const method = formData.get('_method');

    if(method === "sum1")
    {
        const result = parseInt(formData.get('num1')) + parseInt(formData.get('num2'));
        return json({'status':'success', 'msg':'', 'meta':{'input':{'_method':method}}, 'data':{'total': result}});
    }
    else if(method === "sum2")
    {
        const result = parseInt(formData.get('num1')) * parseInt(formData.get('num2'));
        return json({'status':'success', 'msg':'', 'meta':{'input':{'_method':method}}, 'data':{'total': result}});
    }
    else if(method === "sum3")
    {
        const url = `${process.env.BASE_URL}/api/sum?num1=${parseInt(formData.get('num1'))}&num2=${parseInt(formData.get('num2'))}`;
        console.log('url:', url);
        const result = await fetch(url,  {method: 'GET'}).then(result => result.json());
        result.meta = {'input':{'_method':method}};
        return result;
    }
    else if(method === "sum4")
    {
        const url = `${process.env.BASE_URL}/api/sum1`;
        
        // https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
        let formData2 = new FormData();
        formData2.append('num1', parseInt(formData.get('num1')));
        formData2.append('num2', parseInt(formData.get('num2')));

        const result = await fetch(url, {
            method: 'POST', 
            body: formData2
        }).then(result => result.json());
        result.meta = {'input':{'_method':method}};
        return result;
    }
    return null;
};

function ActionData(){
    const actionData = useActionData();
    const transition1 = useTransition();
    const transition2 = useTransition();
    const transition3 = useTransition();
    const transition4 = useTransition();
    const transition5 = useTransition();
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.type === "init") {
          fetcher.load("/api/sum?num1=99&num2=1");
        }
    }, [fetcher]);

    return (
        <>
            <Title order={1}>Action Data</Title>
            <Space h="lg" />
            <Title order={2}>Sum 2 numbers</Title>
            <Text>Call Action from same route</Text>
            <Form method="post">
                <fieldset disabled={transition1.state === "submitting" || transition1.state === 'loading'} style={{border:'none'}}>
                    <TextInput name="num1" placeholder="Insert a number here" mb="md"></TextInput>
                    <TextInput name="num2" placeholder="Insert a number here" mb="md"></TextInput>
                    <Group position="right" mt={9}>
                        <input type="hidden" name="_method" value="sum1" />
                        {(transition1.state==="submitting") ? <Loader /> : <Button type="submit" color="lime">Submit</Button>}
                  </Group>
                </fieldset>
            </Form>
            {actionData?.meta?.input?._method === 'sum1' &&
                <Text>Result: {actionData?.data?.total}</Text>
            }

            <Space h="lg" />
            <Title order={2}>Multiple 2 numbers</Title>
            <Text>Multiple form in same page can work by using different `_method` value in hidden field.</Text>
            <Form method="post">
                <fieldset disabled={transition2.state === "submitting" || transition2.state === 'loading'} style={{border:'none'}}>
                    <TextInput name="num1" placeholder="Insert a number here" mb="md"></TextInput>
                    <TextInput name="num2" placeholder="Insert a number here" mb="md"></TextInput>
                    <Group position="right" mt={9}>
                        <input type="hidden" name="_method" value="sum2" />
                        {(transition2.state==="submitting") ? <Loader /> : <Button type="submit" color="lime">Submit</Button>}
                  </Group>
                </fieldset>
            </Form>
            {actionData?.meta?.input?._method === 'sum2' &&
                <Text>Result: {actionData?.data?.total}</Text>
            }

            <Space h="lg" />
            <Title order={2}>Sum with proxied API (GET)</Title>
            <Text>Using `_method`='sum3' to proxy call an internal GET API: `api/sum`. </Text>
            <Text>used process.env.Base_URL, eg: https://3000-exiang-remixmantine-t6bkzxdz0hf.ws-us54.gitpod.io/</Text>
            <Form method="post">
                <fieldset disabled={transition3.state === "submitting" || transition3.state === 'loading'} style={{border:'none'}}>
                    <TextInput name="num1" placeholder="Insert a number here" mb="md"></TextInput>
                    <TextInput name="num2" placeholder="Insert a number here" mb="md"></TextInput>
                    <Group position="right" mt={9}>
                        <input type="hidden" name="_method" value="sum3" />
                        {(transition3.state==="submitting") ? <Loader /> : <Button type="submit" color="lime">Submit</Button>}
                  </Group>
                </fieldset>
            </Form>
            {actionData?.meta?.input?._method === 'sum3' &&
                <Text>Result: {actionData?.data?.total}</Text>
            }

            <Space h="lg" />
            <Title order={2}>Sum with proxied API (POST)</Title>
            <Text>Using `_method`='sum4' to proxy call an internal POST API: `api/sum1`. </Text>
            <Text>used process.env.Base_URL, eg: https://3000-exiang-remixmantine-t6bkzxdz0hf.ws-us54.gitpod.io/</Text>
            <Form method="post">
                <fieldset disabled={transition4.state === "submitting" || transition4.state === 'loading'} style={{border:'none'}}>
                    <TextInput name="num1" placeholder="Insert a number here" mb="md"></TextInput>
                    <TextInput name="num2" placeholder="Insert a number here" mb="md"></TextInput>
                    <Group position="right" mt={9}>
                        <input type="hidden" name="_method" value="sum4" />
                        {(transition4.state==="submitting") ? <Loader /> : <Button type="submit" color="lime">Submit</Button>}
                  </Group>
                </fieldset>
            </Form>
            {actionData?.meta?.input?._method === 'sum4' &&
                <Text>Result: {actionData?.data?.total}</Text>
            }

            <Space h="lg" />
            <Title order={2}>Sum with direct API (GET & POST)</Title>
            <Text>Call an internal POST API: `api/sum1` without using proxied action function. This has to use the `fetcher` feature in REMIX.</Text>
            <Text>It also demo how to use fetcher to call loader data of an internal GET API: `api/sum` upon initialization.</Text>
            <Text>used process.env.Base_URL, eg: https://3000-exiang-remixmantine-t6bkzxdz0hf.ws-us54.gitpod.io/</Text>
            <fetcher.Form  method="post" action="/api/sum1">
                <fieldset disabled={transition5.state === "submitting" || transition5.state === 'loading'} style={{border:'none'}}>
                    <TextInput name="num1" placeholder="Insert a number here" mb="md"></TextInput>
                    <TextInput name="num2" placeholder="Insert a number here" mb="md"></TextInput>
                    <Group position="right" mt={9}>
                        {(transition5.state==="submitting") ? <Loader /> : <Button type="submit" color="lime">Submit</Button>}
                  </Group>
                </fieldset>
            </fetcher.Form>

            <Text>Result: {fetcher?.data?.data?.total}</Text>
            
        </>
    )
}

export default ActionData