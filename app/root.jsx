import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

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
    <MantineProvider>
      <NotificationsProvider><ModalsProvider>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
      </ModalsProvider></NotificationsProvider>
    </MantineProvider>
  );
}
