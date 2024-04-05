import React from "react";
import Link from "next/link";

function Header(){
    return(<div className="bg-gray-400 flex px-4 py-4 space-x-6">
        <p className="font-bold text-blue-500 hover:text-black"><Link href={'/'}>Home</Link></p>
        <p className="font-bold text-blue-500 hover:text-black"><Link href={'/Dashboard'}>Dashboard</Link></p>
        <p className="font-bold text-blue-500 hover:text-black"><Link href={'/About'}>About</Link></p>
        <p className="font-bold text-blue-500 hover:text-black"><Link href={'/Dashboard/Settings'}>Settings</Link></p>
        <p className="font-bold text-blue-500 hover:text-black"><Link href={'/Dashboard/profile'}>profile</Link></p>
        <p className="font-bold text-blue-500 hover:text-black"><Link href={'/Blog'}>Blog</Link></p>
    </div>)
}

export default Header;