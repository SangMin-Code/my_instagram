
'use client'

import { AuthUser, ProfileUser } from "@/model/user"
import useSWR from "swr"
import Button from "./Button"

type Props = {
    user:ProfileUser
}

const FollowButton=({user}:Props)=>{

    const{username} =user
    const {data:loggedInUser} = useSWR('/api/me');
    const showButton = loggedInUser && loggedInUser.username !== username;
    const following = loggedInUser && loggedInUser.following.find((item:AuthUser)=> item.username === username);
    const text = following ? 'UnFollow' : 'Follow';

    return(
        <>
            {showButton &&
            <Button 
                text={text} 
                onClick={()=>{}} 
                red={text==='UnFollow'}
            />
            }
        </>
    )
}

export default FollowButton