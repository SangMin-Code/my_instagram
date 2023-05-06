import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import SignIn from "@/components/SingIn";


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
        <section className="flex justify-center mt-[30%]">
            <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'} />
        </section>
    )
}



