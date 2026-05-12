'use client'
import { FaPlay } from "react-icons/fa";

export default function TopBar(){
    return(
        <div className = 'text-background flex items-center justify-between h-18 w-420 px-4 border-b-2 border-neutral-200'>
            <h1 className = 'text-2xl text-primary ml-4 font-semibold'>Dashboard</h1>
            <div className = 'flex items-center justify-center gap-2 mr-40'>
                <div className = 'w-40 h-10 bg-transparent rounded-md border border-black flex items-center justify-center cursor-pointer gap-4'>
                    <FaPlay size={16} className = 'text-primary '/>
                    <h1 className = 'text-primary text-sm font-bold'>Watch Tutorial</h1>
                </div>
                
            </div>
        </div>
    )
}