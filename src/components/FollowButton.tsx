
'use client'

import { ProfileUser } from "@/model/user"
import Button from "./Button"
import useMe from "@/app/hooks/me"

type Props = {
    user:ProfileUser
}

const FollowButton=({user}:Props)=>{

    const{username} =user
    const {user:loggedInUser} =useMe();
    const showButton = loggedInUser && loggedInUser.username !== username;
    const following = loggedInUser && loggedInUser.following.find((item)=> item.username === username);
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