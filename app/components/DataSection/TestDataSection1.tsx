
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"

// this is not working
export let loader : LoaderFunction = async ({ request }) => {
    return json({message: "Hello World from loader in the component"})
};

  
export function TestDataSection1(){
    const loaderData1 = useLoaderData();
    return (
        <>
           {loaderData1.message}
        </>
    );

}