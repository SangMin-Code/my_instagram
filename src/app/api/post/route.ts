import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { createPost, getFollowingPostsof } from "@/service/posts";
import { withSessionUser } from "@/util/session";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(){
    return withSessionUser(async (user)=>{
        return getFollowingPostsof(user.username).then((data)=>NextResponse.json(data));
    })
}

export async function POST(req:NextRequest){
    return withSessionUser(async (user)=>{
        const form = await req.formData();
        const text =form.get('text')?.toString();
        const file = form.get('file') as Blob;
    
        if(!text || !file){
            return new Response('Authentication Error',{status:400});
        }
    
        return createPost(user.id,text,file).then((data)=>NextResponse.json(data));
    })

}