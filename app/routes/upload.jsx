
import {useLoaderData, useActionData}  from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect, json, unstable_createFileUploadHandler, unstable_composeUploadHandlers,
    unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node"

import { Title, Text, List, Button, Space, Image } from '@mantine/core';

import { s3UploaderHandler, getUrl } from "~/services/uploader.server";

export const action = async ({ request }) => {

    const formData = await unstable_parseMultipartFormData(request, s3UploaderHandler);
    const filePath = formData.get('user.upload');
    const filePath2 = formData.get('user.upload2');
    
    const signedUrl = await getUrl(filePath);
    const signedUrl2 = await getUrl(filePath2);

    return {
        filePath: filePath,
        signedUrl: signedUrl,
        filePath2: filePath2,
        signedUrl2: signedUrl2
    }
};


export default function Upload() {
    const loaderData = useLoaderData();
    const actionData = useActionData();

    return (<>
        <form method="post" encType="multipart/form-data">
            <input type="file" name="user.upload" />
            <input type="file" name="user.upload2" />
            <input type="submit" value="Upload"></input>
        </form>
       {actionData && <>
            <Text>{actionData.filePath}</Text><Image src={actionData.signedUrl} />
            <Text>{actionData.filePath2}</Text><Image src={actionData.signedUrl2} />
        </>}
    </>)
}