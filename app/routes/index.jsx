import {Link}  from "@remix-run/react";
import { Title, List, Button, Space } from '@mantine/core';

export default function Index() {
  return (
    <>
      <Title order={1}>Index</Title>
      <Space h="lg" />

      <List spacing="md" listStyleType="none">
        <List.Item><Link to="/mantine"><Button size="xs">Mantine</Button></Link> Demo all mantine core components</List.Item>
        <List.Item><Link to="/tailwind"><Button size="xs">Tailwind</Button></Link> I still like to use tailwind, lets see can it work nicely along with Mantine or not?</List.Item>
        <List.Item><Link to="/api/sum?num1=100&num2=99"><Button size="xs">Sum (GET)</Button></Link> Demo for API that sum 2 numbers thru GET request</List.Item>
        <List.Item><Link to="/posts"><Button size="xs">Blog</Button></Link> Blog Demo</List.Item>
      </List>
    </>
  );
}
