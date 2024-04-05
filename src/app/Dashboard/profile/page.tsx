'use client'
import React from "react";
import { useRouter } from "next/navigation";

function Profile(){
    const router = useRouter();
     function handleback(){
    router.back();
    
    }
    return(
        <div className="bg-blue-500 h-96"><p className="text-3xl text-center pt-40">This is profile page</p>
        <button type="button" onClick={handleback} className="rounded-full bg-gray-400 px-4 py-2 text-center align-middle hover:bg-white ">Back</button>
        <p className="pt-5">To go to blog page click on the button below</p>
        <button type="button" onClick={()=>router.push('/Blog')} className="mt-5 rounded-full bg-gray-400 px-4 py-2 text-center align-middle hover:bg-white">Blog</button>
        </div>
    )
    }
    

    export default Profile;


