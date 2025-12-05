import { useState, useEffect } from "react"
import appwriteService from "../appwrite/post"
import { Container, PostCard } from "../components"

export default function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then(posts => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // Curly braces can be avoided if nothing is going to return
    const postsData = posts.map(post => (
        <div
            key={post.$id}
            className="py-2 w-1/4"
        >
            <PostCard post={post} />
        </div>
    ))

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {postsData}
                </div>
            </Container>
        </div>
    )
}
