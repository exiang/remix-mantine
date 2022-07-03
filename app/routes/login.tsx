import { Form, useLoaderData } from "@remix-run/react"
import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node"
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Alert,
    Space
  } from '@mantine/core';
  
import { authenticator } from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export let loader: LoaderFunction = async ({ request }) => {
    return await authenticator.isAuthenticated(request, {
        successRedirect: "/dashboard",
      });

    // If the user is already authenticated redirect to /dashboard directly
    const session = await sessionStorage.getSession(
        request.headers.get("Cookie")
    );

    const error = session.get("sessionErrorKey");
    return json<any>({error});
    /*return await authenticator.isAuthenticated(request, {
        successRedirect: "/dashboard",
    });*/
};

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate method`
export let action: ActionFunction = async ({ request, context }) => {
    // we call the method with the name of the strategy we want to use and the
    // request object, optionally we pass an object with the URLs we want the user
    // to be redirected to after a success or a failure
    return await authenticator.authenticate("form", request, {
      successRedirect: "/dashboard",
      failureRedirect: "/login",
      throwOnError: true,
      context,
    });
  };
  

// First we create our UI with the form doing a POST and the inputs with the
// names we are going to use in the strategy
export default function Login() {
    const loaderData = useLoaderData();
    return (
        <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <Form method="post">
        {(loaderData?.error?.message?.length)?<Alert color="red" mb="lg">{loaderData?.error?.message}</Alert>:''}

        <TextInput name="email" label="Email" placeholder="exiang83@yahoo.com" required />
        <PasswordInput name="password" label="Password" placeholder="123456" required mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth type="submit" color="lime" mt="xl">
          Sign in
        </Button>
        </Form>
      </Paper>
    </Container>
    )
}

