import {Link, Form, useLoaderData, useParams} from '@remix-run/react'
import { redirect, json } from "@remix-run/node";

import { Grid, Group, Title, List, Button, Space, TextInput, Textarea, Text, Paper } from '@mantine/core';

import {db} from '~/utils/db.server'

export const loader = async ({params}) => {
    
    const post = await db.post.findUnique({where: {id: params.postId}});
    if(!post) throw new Error('Post not found');

    const data = {
        post
    }
    return data
}

export const action = async({request, params}) => {
    const form = await request.formData()
    if(form.get('_method') === 'delete')
    {
        const post = await db.post.findUnique({where: {id: params.postId}});
        if(!post) throw new Error('Post not found');

        await db.post.delete({where: {id:post.id}});
        return redirect('/posts');
    }
}

function Post(){
    
    const {post} = useLoaderData()
    return (
        <>
            <Grid>
            
                <Grid.Col span={8}>
                    <Title order={1}>{post.title}</Title>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Group  position="right">
                        <Link to="/posts"><Button variant="outline">Back</Button></Link>
                    </Group>
                </Grid.Col>
            
            </Grid>

            <Space h="lg" />
        
            <Text>{post.body}</Text>

            <Space h="lg" />

            <Form method="post">
                <TextInput type="hidden" name="_method" value="delete" />
                <Button type="submit" color="red" variant="outline" size="xs">Delete</Button>
            </Form>
        </>
    )
}

export default Post