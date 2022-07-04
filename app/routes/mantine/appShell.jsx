import { Outlet } from "@remix-run/react";

import { AppShell, Navbar, Header, Group, ActionIcon,  UnstyledButton, Avatar, Text, Box, useMantineTheme } from '@mantine/core';

import { UserAvatar } from './_userAvatar';
import { MainLinks } from './_mainLinks';

export default function MantineAppShell() {
    const theme = useMantineTheme();
    return(
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <UserAvatar />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            
            <ActionIcon variant="default">
            Logo
            </ActionIcon>

          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
     )
}