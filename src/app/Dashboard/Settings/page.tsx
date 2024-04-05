'use client'
import React from "react";
import { useRouter } from "next/navigation";
function Settings(){
    const router = useRouter();
    return(
        <div className="bg-blue-500 h-96"><p className="text-3xl text-center p-40">This is Setting page</p>
        <button type="button" onClick={()=>router.back()} className="rounded-full px-4 py-2 bg-green-600 font-bold hover:bg-amber-200 ">Back</button>
        
        </div>
        
        )
}

export default Settings;