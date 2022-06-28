import {Link, Form, useLoaderData} from '@remix-run/react'
import { redirect, json } from "@remix-run/node";

import { Grid, Group, Title, List, Button, Space, TextInput, Textarea } from '@mantine/core';
//import { useForm } from '@mantine/form';

import {db} from '~/utils/db.server'

export const action = async ({request}) =>{
    const form = await request.formData();
    
    const title = form.get('title');
    const body = form.get('body');

    const fields = {title, body}

    const post = await db.post.create({data: fields})

    return redirect(`/posts/${post.id}`);
}

function NewPost(){
    return (<>
        <Grid>
        
            <Grid.Col span={8}>
                <Title order={1}>New Post</Title>
            </Grid.Col>
            <Grid.Col span={4}>
                <Group  position="right">
                    <Link to="/posts"><Button variant="outline">Back</Button></Link>
                </Group>
            </Grid.Col>
        
        </Grid>

        <Space h="lg" />

        <Form method="POST">
        <TextInput
            name="title"
            placeholder="Post Title"
            label="Title"
            required
        />
        <Space h="md" />
        <Textarea
            name="body"
            placeholder="Post Body Content"
            label="Post Body"
            required
        />
        <Space h="lg" />
        
          
        <Group position="right" mt="md">
            <Button type="submit" color="lime">Add Post</Button>
        </Group>
        </Form>
    </>)
}

export default NewPost