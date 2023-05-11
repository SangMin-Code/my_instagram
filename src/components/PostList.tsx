'use client'

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostsListCard from "./PostsListCard";
import GridSpinner from "./ui/GridSpinner";

const PostList = ()=>{
    const {data:posts, isLoading:loading} = useSWR<SimplePost[]>('/api/post');
    return(
        <div>
            {loading && 
            <div className="text-center mt-10">
                <GridSpinner color="red"/>
            </div>}
            {posts && 
            <ul>{
                posts && posts.map((post,index)=> 
                <li key={post.id} className="mb-4">
                    <PostsListCard post={post} priority={index<2}/>
                </li>)
            }
            </ul>}
        </div>
    )
}

export default PostList