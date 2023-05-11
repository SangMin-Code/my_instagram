import { FullPost, SimplePost } from "@/model/post"
import useSWR from 'swr';

type Props = {
    post:SimplePost;
}

export default function PostDetail({post}:Props){
    
    const {id, userImage, username, image, createdAt, likes} =post;

    const {data} = useSWR<FullPost>(`/api/post/${id}`);
    const comments = data?.comments;

    console.log(data);
    return(
        <></>
    )
}
