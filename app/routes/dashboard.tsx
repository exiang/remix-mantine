import {Link, Form, useLoaderData}  from "@remix-run/react";
import { Title, List, Button, Space } from '@mantine/core';
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node"
import { authenticator } from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

export let loader: LoaderFunction = async ({ request }) => {
    // If the user is already authenticated redirect to /dashboard directly
    return await authenticator.isAuthenticated(request, {
      failureRedirect: "/login",
    });
};

export let action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, {redirectTo: "/login"});
};

export default function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Title order={1}>Dashboard</Title>
      <Space h="lg" />
      <p>This is a protected page, {data?.name}</p>
      <Form method="post">
        <button>Logout</button>
      </Form>
    </>
  );
}
