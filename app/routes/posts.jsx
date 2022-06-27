import { Title, List, Button, Space } from '@mantine/core';
import { Outlet } from '@remix-run/react';

function Posts(){
    return (
        <>
        <Outlet />
        </>
    )
}

export default Posts