import {Link, useLoaderData} from '@remix-run/react'

import { Grid, Group, Title, List, Button, Space } from '@mantine/core';

export const loader = () =>{
    const data = {
        posts: [
            {id: 1, title: 'Post 1', body: 'This is a test post'},
            {id: 2, title: 'Post 2', body: 'This is a test post'},
            {id: 3, title: 'Post 3', body: 'This is a test post'},
        ]
    }
    return data
}

function PostItems(){
    const {posts} = useLoaderData()

    return (
        <>
        <Grid>
        
            <Grid.Col span={8}>
                <Title order={1}>Posts</Title>
            </Grid.Col>
            <Grid.Col span={4}>
                <Group  position="right">
                    <Link to="new"><Button>New Post</Button></Link>
                </Group>
            </Grid.Col>
        
        </Grid>

        <Space h="lg" />

        <List listStyleType="none">
        {posts.map(post => (
            <List.Item key={post.id}>
                <Link to={post.id}>
                    <Title order={3}>{post.title}</Title>
                </Link>
                {post.body}
            </List.Item>
        ))}
        </List>
        </>
    )
}

export default PostItems