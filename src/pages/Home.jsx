import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import appwriteService from "../appwrite/post"
import { Container, PostCard } from '../components'

export default function Home() {
    const authStatus = useSelector(state => state.auth.status)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then(posts => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {authStatus ? "No posts available" : "Login to read posts"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8">
            <Container>
                <span className="text-sm text-red-600 px-3 py-1 rounded-md inline-block">** Image preview is unavailable due to Appwrite plan limitations.</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
