
import {useLoaderData, useActionData}  from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"

import mailer from "~/utils/nodemailer.server";
import { envVal } from 'env-bool';
import {convert as convertHtml2Text} from 'html-to-text';

export let loader = async ({ request }) => {

    console.log('loader() called');
    return null;
};

export let action = async ({ request }) => {
    console.log('action() called');

    const formData = await request.formData();
    const action = formData.get('action');
    console.log('action: ', action);
    
    const from = process.env.ADMIN_EMAIL;
    const to = 'exiang83@yahoo.com';
    const subject = 'Test SMTP from remix-mantine';
    const htmlBody = '<b>Hello</b> World';
    let textBody;

    const transporter = mailer.createTransport({
        port: process.env.SMTP_PORT,
        host: process.env.SMTP_HOST,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
        secure: envVal(process.env.SMTP_SECURE),
        //requireTLS: true
    });

    if(textBody === undefined)
    {
      textBody = convertHtml2Text(htmlBody, {wordwrap: 200});
    }

    let result = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        text: textBody,
        html: htmlBody
    });
    
    console.log('send email result:', result.messageId);

    return json({data: result});
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

        {actionData? `Message ID: ${actionData.data.messageId}` : ''}
    </>)
}