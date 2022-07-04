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
        <List.Item><Link to="/dataLoader"><Button size="xs">Data Loader</Button></Link> Test &amp; demo how data loader works</List.Item>
      </List>
    </>
  );
}
