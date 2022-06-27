import {Link}  from "@remix-run/react";
import { Title, List, Button, Space } from '@mantine/core';

export default function Index() {
  return (
    <>
      <Title order={1}>Index</Title>
      <Space h="lg" />

      <List spacing="md" listStyleType="none">
        <List.Item><Link to="/mantine"><Button size="xs">Mantine</Button></Link> Demo all mantine core components</List.Item>
        <List.Item><Link to="/posts"><Button size="xs">Blog</Button></Link> Blog Demo</List.Item>
      </List>
    </>
  );
}
