import {Link}  from "@remix-run/react";
import { Title, List, Button, Space } from '@mantine/core';

export default function Index() {
  return (
    <>
      <Title order={1}>Index</Title>
      <Space h="lg" />

      <List spacing="md" listStyleType="none">
        <List.Item><Link to="/mantine"><Button size="xs">Mantine</Button></Link> Demo all mantine core components</List.Item>
        <List.Item><Link to="/mantine/appShell"><Button size="xs">Mantine App Shell</Button></Link> Demo all mantine core components</List.Item>
        <List.Item><Link to="/tailwind"><Button size="xs">Tailwind</Button></Link> I still like to use tailwind, lets see can it work nicely along with Mantine or not?</List.Item>
        <List.Item><Link to="/api/sum?num1=100&num2=99"><Button size="xs">Sum (GET)</Button></Link> Demo for API that sum 2 numbers thru GET request</List.Item>
        <List.Item><Link to="/posts"><Button size="xs">Blog</Button></Link> Blog Demo</List.Item>
        <List.Item><Link to="/login"><Button size="xs">Login</Button></Link> Traditional login form (hardcoded for now)</List.Item>
        <List.Item><Link to="/dashboard"><Button size="xs">Dashboard</Button></Link> Protected page</List.Item>
        <List.Item><Link to="/sendMail"><Button size="xs">Sendmail</Button></Link> Send email with sendMail() function (env configurable to go thru SMTP or mailgun API)</List.Item>
        <List.Item><Link to="/mailgun"><Button size="xs">Mailgun</Button></Link> Send email with mailgun API</List.Item>
        <List.Item><Link to="/loaderData"><Button size="xs">Loader Data</Button></Link> Test &amp; demo how loader data works</List.Item>
        <List.Item><Link to="/actionData"><Button size="xs">Action Data</Button></Link> Test &amp; demo how action data works</List.Item>
        <List.Item><Link to="/paginationView"><Button size="xs">Pagination</Button></Link> with <a href="https://mantine.dev/core/pagination/">mantine pagination</a> &amp; mock api from <a href="https://reqres.in/">Reqres.in</a></List.Item>
      </List>
    </>
  );
}
