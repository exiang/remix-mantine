import {Link, useLoaderData} from '@remix-run/react'

import { Grid, Group, Title, List, Button, Space, Text, Paper } from '@mantine/core';

import {db} from '~/utils/db.server'

export const loader = async () =>{
    const data = {
        posts: await db.post.findMany({
            take: 20, 
            select: {id:true, title: true, createdAt: true},
            orderBy: {createdAt: 'desc'}
        })
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

        <List spacing="md" listStyleType="none">
        {posts.map(post => (
            <List.Item key={post.id}>
                <Paper shadow="lg" p="md" withBorder>
                <Link to={post.id}>
                    <Title order={3}>{post.title}</Title>
                </Link>
                <Text>{new Date(post.createdAt).toLocaleString()}</Text>
                </Paper>
            </List.Item>
        ))}
        </List>
        </>
    )
}

export default PostItems