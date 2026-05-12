'use client'
import { RxHamburgerMenu , RxCross1 } from "react-icons/rx";
import { MdCall ,MdDescription } from "react-icons/md";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IoIosNuclear } from "react-icons/io";
import { PiBoxArrowUpDuotone } from "react-icons/pi";
import { FaGift } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import React from "react";
import { useState} from "react";
export default function SideBar(){
    const links = [
        {icon : BsFillGrid1X2Fill , label : "Dashboard"},
        {icon : MdCall , label : "Call Insights"},
        {icon : MdDescription , label : "Knowledge Base"},
        {icon : BsFillChatLeftTextFill , label : "Prompts"},
        {icon : IoIosNuclear , label : "Boxy Controls"},   
    ];
    const bottomLinks = [
        {icon : PiBoxArrowUpDuotone , label : "Feedback History"},
        {icon : FaGift , label : "Feedback"}
    ]
    const [isOpen , setIsOpen] = useState<boolean>(false);
    return(
        <div className = 'flex flex-col items-center justify-start gap-6 py-8 px-4 bg-color-background text-color-primary h-screen w-60 border-r-3 border-neutral-200 relative'>
          <div className = 'w-60 h-10 flex items-center justify-start  border-b-2 border-neutral-200'>
             <h1 className = 'text-2xl tracking-wide font-semibold mb-8 ml-8'>Hintro</h1>
          </div>
          <div className = 'w-60 h-140  border-b-2 border-neutral-200 flex flex-col items-start justify-start pl-4 gap-2'>
             <div className = 'flex items-start justify-start gap-4 cursor-pointer group bg-secondary rounded-md p-2  w-55 transition-colors duration-200 ease-in-out'>
                <BsFillGrid1X2Fill size={20} className = 'text-tertiary'/>
                <span className = 'text-sm font-bold text-tertiary'>Dashboard</span>
             </div>
              <div className = 'flex items-start justify-start gap-4 cursor-pointer group hover:bg-secondary rounded-md p-2  w-55 transition-colors duration-200 ease-in-out'>
                <MdCall size={20} className = 'group-hover:text-tertiary'/>
                <span className = 'text-sm font-bold group-hover:text-tertiary'>Call Insights</span>
             </div>
             <div className = 'flex items-start justify-between gap-2 cursor-pointer group hover:bg-secondary rounded-md p-2  w-55 transition-colors duration-200 ease-in-out'>
                <MdDescription size={20} className = 'group-hover:text-tertiary'/>
                <span className = 'text-sm font-bold group-hover:text-tertiary '>Knowledge Base</span>
                <IoAlertCircleOutline size={20} className = 'text-black mr-4 group-hover:text-tertiary'/>
             </div>
             <div className = 'flex items-start justify-between gap-2 cursor-pointer group hover:bg-secondary rounded-md p-2  w-55 transition-colors duration-200 ease-in-out'>
                <BsFillChatLeftTextFill size={16} className = 'group-hover:text-tertiary'/>
                <span className = 'text-sm font-semibold group-hover:text-tertiary mr-12'>Prompts</span>
                <IoAlertCircleOutline size={20} className = 'text-black mr-4 group-hover:text-tertiary'/>
             </div>
             <div className = 'flex items-start justify-between gap-2 cursor-pointer group hover:bg-secondary rounded-md p-2  w-55 transition-colors duration-200 ease-in-out'>
                <IoIosNuclear size={20} className = 'group-hover:text-tertiary'/>
                <span className = 'text-sm font-semibold group-hover:text-tertiary mr-4'>Boxy Controls</span>
                <IoAlertCircleOutline size={20} className = 'text-black mr-4 group-hover:text-tertiary'/>
             </div>
          </div>
          <div className = 'flex flex-col items-start justify-start gap-2 pl-4 w-55 h-60'>
             <div className = 'flex items-start justify-start gap-4 cursor-pointer group hover:bg-secondary rounded-md p-2  w-50 transition-colors duration-200 ease-in-out'>
                <PiBoxArrowUpDuotone size={20} className = 'group-hover:text-tertiary'/>
                <span className = 'text-sm font-bold group-hover:text-tertiary'>Call Insights</span>
             </div>
             <div className = 'flex items-start justify-start gap-4 cursor-pointer group hover:bg-secondary rounded-md p-2  w-50 transition-colors duration-200 ease-in-out'>
                <FaGift size={20} className = 'group-hover:text-tertiary'/>
                <span className = 'text-sm font-bold group-hover:text-tertiary'>Call Insights</span>
             </div>
             <button className = 'w-45 rounded-lg cursor-pointer h-10 bg-neutral-500 text-white mt-10'>Upgrade</button>
          </div>
        </div>
    )
}