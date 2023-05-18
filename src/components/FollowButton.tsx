
'use client'

import { ProfileUser } from "@/model/user"
import Button from "./Button"
import useMe from "@/app/hooks/me"
import { useRouter } from 'next/navigation';
import { useState, useTransition } from "react";
import { PulseLoader } from "react-spinners";

type Props = {
    user:ProfileUser
}

const FollowButton=({user}:Props)=>{
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isUpdating = isPending || isFetching;

    const{username} =user
    const {user:loggedInUser, toggleFollow} =useMe();
    const showButton = loggedInUser && loggedInUser.username !== username;
    const following = 
        Boolean(loggedInUser && 
        loggedInUser.following.find((item)=> item.username === username));
    const text = following ? 'UnFollow' : 'Follow';

    const handleFollow = async ()=>{
        setIsFetching(true);
        await toggleFollow(user.id, !following)
        setIsFetching(false);

        startTransition(()=>{
            router.refresh();
        });
    }

    return(
        <>
            {showButton &&(
                <div className="relative">
                {isUpdating && <div className="absolute z-10 inset-0 flex justify-center items-center" ><PulseLoader size={6}/></div>}
                <Button 
                    disabled = {isUpdating}
                    text={text} 
                    onClick={handleFollow} 
                    red={text==='UnFollow'}
                />
                </div>
            )
            }
        </>
    )
}

export default FollowButton