
import {useLoaderData, useActionData}  from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"
import { Title, Text, List, Button, Space } from '@mantine/core';

import sendMail from "~/services/sendmail.server";


export let loader = async ({ request }) => {

    console.log('loader() called');
    
    return {sendmailMethod: process.env.SENDMAIL_METHOD};
};

export let action = async ({ request }) => {
    console.log('action() called');

    const formData = await request.formData();
    const action = formData.get('action');
    console.log('action: ', action);
    
    let returnData = await sendMail({from:`Admin <${process.env.ADMIN_EMAIL}>`, to:'exiang83@yahoo.com', subject:`Test sendMail() using ${process.env.SENDMAIL_METHOD} from remix-mantine`, htmlBody:'<b>Hello</b> World'});

    return json({data: returnData});
};

export default function Nodemailer() {
    console.log('frontend start');
    const loaderData = useLoaderData();
    const actionData = useActionData();

    console.log('frontend end');

    return (<>
        <form method="post">
            <input type="text" name="action" defaultValue="sendEmail"></input>
            <input type="submit" value="Send Email"></input>
        </form>

        <Text>Method: {loaderData.sendmailMethod}</Text>
        {actionData? `Message ID: ${actionData.data.messageId}` : ''}
    </>)
}