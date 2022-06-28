import {Link}  from "@remix-run/react";

import { Container, MantineProvider, Button, Title } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import {HeaderResponsive} from './components/HeaderResponsive/HeaderResponsive'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({children, title}){
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider><ModalsProvider>
      <html lang="en">
        <head>
          <title>{title}</title>
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development'?<LiveReload />:null}
        </body>
      </html>
      </ModalsProvider></NotificationsProvider>
    </MantineProvider>
  )
}

function Layout({children})
{
  const links = [
    { "link": "/mantine", "label": "Mantine" },
  ];

  const logo = <Link to="/"><Button variant="gradient" gradient={{ from: 'purple', to: 'red' }}>REMIX Kitchensink</Button></Link>

  return (
    <>
    <HeaderResponsive links={links} logo={logo} mb={10}></HeaderResponsive>
    <Container>{children}</Container>
    </>
  )
}

// @ys: somehow this does not work with mantine
export function ErrorBoundary({ error }) {
  return (
    <Document title="Error">
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </Document>
  );
}