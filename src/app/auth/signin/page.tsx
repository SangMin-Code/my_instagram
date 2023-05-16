import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import SignIn from "@/components/SingIn";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:'Signin',
    description:'Sign in Instagram'
}

type Props = {
    searchParams:{
        callbackUrl:string
    }
}

export default async function SignInpage({searchParams :{callbackUrl}}:Props){

    const session = await getServerSession(authOptions);

    if(session){
        redirect('/')
    }

    const providers =  (await getProviders()) ?? {};
    
    return (
        <section className="flex justify-center mt-24">
            <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'} />
        </section>
    )
}



