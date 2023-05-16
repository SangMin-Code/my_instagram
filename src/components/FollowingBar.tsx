
'use client'

import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';
import useMe from '@/app/hooks/me';

 const FollowingBar = ()=>{
    const {user,isLoading:loading, error} = useMe();
    const users = user?.following;

    
    return(
        <section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-1'>
            {
            loading ? <PropagateLoader size={8} color='red'/> :
            (!users || users.length ===0) && <p>{`You don't have following`}</p>
            }
            {
            users && users.length>0 && 
                <ScrollableBar containerClass='w-full flex gap-2'>
                    {users.map(({image,username})=>
                        <Link 
                             key={username}
                            className='flex flex-col items-center w-20'
                            href={`/user/${username}`}>
                            <Avatar image={image} highlight/>
                            <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>{username}</p>
                        </Link>
                    )}
                </ScrollableBar>
            }
        </section>
    )
}


export default FollowingBar