import {Link, useLoaderData}  from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"
import { Title, List, Button, Space } from '@mantine/core';
import {TestDataSection1} from '~/components/DataSection/TestDataSection1'

export let loader = async ({ request }) => {

  return json({message: "Hello World from loader in the route"})
};


export default function LoaderData() {
  const loaderData = useLoaderData();

  return (
    <>
        <Title order={1}>Loader Data</Title>
        <Space h="lg" />

        <Title order={2}>Loader from Route</Title>
        Data: {loaderData.message}
        <Space h="lg" />


        <Title order={2}>Component with loader</Title>
        <p>This is not working as expected. A component will auto get loaderData from the route page, but not from component's internal.</p>
        Data: <TestDataSection1 />
        <Space h="lg" />
    </>
  );
}
