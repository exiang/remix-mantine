import {useLoaderData, useActionData}  from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"
import mailgun from "~/utils/mailgun.server";

export let loader = async ({ request }) => {

    console.log('loader() called');
    return null;
};

export let action = async ({ request }) => {
    console.log('action() called');

    const formData = await request.formData();
    const action = formData.get('action');
    console.log('action: ', action);

    const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});
    let result;
    try{
        result = await mg.messages.create('mailgun.emanyan.com', {
            from: `Admin <${process.env.ADMIN_EMAIL}>`,
            to: ["exiang83@yahoo.com"],
            subject: "Test Mailgun() from remix-mantine",
            text: "Testing some Mailgun awesomness from remix-mantine!",
            html: "<h1>Testing some Mailgun awesomness!</h1>"
        })
    }
    catch(err)
    {
        console.error(err)
    }

    return json({data: {messageId: result?.id}});
};

export default function Mailgun(){
   
    console.log('frontend start');
    const loaderData = useLoaderData();
    const actionData = useActionData();

    console.log('frontend end');

    return (<>
        <form method="post">
            <input type="text" name="action" defaultValue="sendEmail"></input>
            <input type="submit" value="Send Email"></input>
        </form>

        {actionData? `Message ID: ${actionData.data.messageId}` : ''}
    </>)
}