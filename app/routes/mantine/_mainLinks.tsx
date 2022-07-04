import {Link}  from "@remix-run/react";
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { GitPullRequest, AlertCircle, Messages, Database, Dashboard } from 'tabler-icons-react';


interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  return (
    <Link to={to}>
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
    </Link>
  );
}

const data = [
  { icon: <Dashboard size={16} />, color: 'red', label: 'Dashboard', 'to': './' },
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests', 'to': './pullRequest' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues', 'to': './openIssue' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Discussions', 'to': './discussion' },
  { icon: <Database size={16} />, color: 'grape', label: 'Databases', 'to': './database' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} to={link.to} />);
  return <div>{links}</div>;
}