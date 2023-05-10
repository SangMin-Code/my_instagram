
'use client'

import Link from 'next/link';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import {usePathname} from 'next/navigation';
import ColorButton from './ui/ColorButton';

const HOME_PATH = '/'
const SEARCH_PATH ='/search'
const NEW_PATH = '/new'

const menu = [
    {
        'href':HOME_PATH,
        'icon':<HomeIcon/>,
        'clickedIcon' : <HomeFillIcon/>
    },
    {
        'href':SEARCH_PATH,
        'icon':<SearchIcon/>,
        'clickedIcon' : <SearchFillIcon/>
    },
    {
        'href':NEW_PATH,
        'icon':<NewIcon/>,
        'clickedIcon' : <NewFillIcon/>
    },

]
import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from './Avatar';

const Header=()=>{
    const pathname = usePathname();
    const { data: session } = useSession();
    const user = session?.user;


    return(
        <div className='flex justify-between items-center px-6'>
            <Link href="/">
                <h1 className='text-3xl font-bold'>Instantgram</h1>
            </Link>
            <nav>
                <ul className='flex gap-4 items-center p-4'>
                    {menu.map((item)=>
                        <li key = {item.href}>
                            <Link href={item.href} >
                                {pathname===item.href ? item.clickedIcon : item.icon}
                            </Link>
                        </li>
                    )}
                    {user && 
                    <li>
                        <Link href={`/user/${user.username}`}>
                            <Avatar image={user.image} highlight={true} size='sm'/>
                        </Link>
                    </li>}    
                    <li>
                    {
                        session ?   <ColorButton text='SignOut' onClick={()=>signOut()}/>
                                :   <ColorButton text='SignIn' onClick={()=>signIn()}/>
                    }
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header