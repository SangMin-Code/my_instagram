'use client'

import { SimplePost } from "@/model/post"
import Avatar from "./Avatar";
import Image from "next/image";

import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostUSerAvatar from "./PostUSerAvatar";

type Props = {
    post:SimplePost
    priority?:boolean;
}

const PostsListCard = ({post,priority=false}:Props) =>{
    
    const {userImage, username, image, createdAt, likes, text} = post;
    const [openModal, setOpenModal] = useState(false);

    return(
        <article className="rounded-lg shadow-md border border-gray-200">
            <PostUSerAvatar image={userImage} username={username}/>
            <Image 
                className="w-full object-cover aspect-square"
                src={image} alt={`photo by ${username}`} width={500} height={500}
                priority={priority}
                onClick={()=>setOpenModal(true)}
                />
            <ActionBar likes={likes} username={username} text={text} createdAt={createdAt}/>
            <CommentForm/>
            {
                openModal && 
                <ModalPortal>
                    <PostModal onClose={()=>setOpenModal(false)}>
                        <PostDetail post={post}/>
                    </PostModal>
                </ModalPortal>
            }
        </article>
    )
}

export default PostsListCard;