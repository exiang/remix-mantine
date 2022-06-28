const {PrismaClient} = require('@prisma/client')
const db = new PrismaClient()

async function seed()
{
    await Promise.all(getPosts().map(post=>{
        return db.post.create({data: post})
    }))
}

// execute this with command `node `
seed();

function getPosts(){
    return [
        {
            title: 'Today is a good day for outdoor activities',
            body: `We will look at 10 simple way to spend time at outdoor.`
        },
        {
            title: 'It is not in the star to hold our destiny',
            body: `Do you know how many stars are there in the universe? Now, get a telescope and I will teach you how to count them.`
        },
        {
            title: 'Tailwind vs Bootstrap',
            body: `Both tailwind and bootstrap are popular css framework. In this article, we will compare them.`
        },
        
    ]
}