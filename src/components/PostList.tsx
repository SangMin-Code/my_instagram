'use client'

import PostsListCard from "./PostsListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/app/hooks/posts";

const PostList = ()=>{
    const {posts, isLoading:loading} = usePosts();
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