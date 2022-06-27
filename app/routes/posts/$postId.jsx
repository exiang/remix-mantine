import { Title, List, Button, Space } from '@mantine/core';

import {useParams} from '@remix-run/react'

function Post(){
    const params = useParams()

    return (
        <>
        <Title>Post #{params.postId}</Title>
        </>
    )
}

export default Post