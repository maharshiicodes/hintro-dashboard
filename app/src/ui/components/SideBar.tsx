'use client'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdCall, MdDescription } from "react-icons/md";
import { BsFillGrid1X2Fill, BsFillChatLeftTextFill } from "react-icons/bs";
import { IoIosNuclear } from "react-icons/io";
import { PiBoxArrowUpDuotone } from "react-icons/pi";
import { FaGift } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useState } from "react";
import FeedbackModal from "./FeedBackModal";
import { usePathname, useRouter } from "next/navigation";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const links = [
    { icon: BsFillGrid1X2Fill, label: "Dashboard", href: "/dashboard" },
    { icon: MdCall, label: "Call Insights", href: "/dashboard/call-insights" },
    { icon: MdDescription, label: "Knowledge Base", href: "/dashboard/knowledge-base" },
    { icon: BsFillChatLeftTextFill, label: "Prompts", href: "/dashboard/prompts" },
    { icon: IoIosNuclear, label: "Boxy Controls", href: "/dashboard/boxy-controls" },
  ];

  const bottomLinks = [
    { icon: PiBoxArrowUpDuotone, label: "Feedback History", href: "/dashboard/feedback-history" },
    { icon: FaGift, label: "Feedback", action: () => setShowFeedbackModal(true) }
  ]

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href
  }

  const sidebarContent = (
    <div className='flex flex-col items-center justify-start gap-6 py-8 px-4 bg-color-background text-color-primary h-screen w-60 md:border-r-3 border-neutral-200 relative flex-shrink-0'>
      <div className='hidden w-60 h-10 md:flex items-center justify-start border-b-2 border-neutral-200'>
        <h1 className='text-2xl tracking-wide font-semibold mb-8 ml-8'>Hintro</h1>
      </div>

      <div className='w-60 h-140 mt-10 md:mt-0 border-b-2 border-neutral-200 flex flex-col items-start justify-start pl-4 gap-2'>
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => {
              router.push(link.href)
              setIsOpen(false)
            }}
            className={`flex items-start justify-start gap-4 cursor-pointer group rounded-md p-2 w-55 transition-colors duration-200 ease-in-out ${
              isActive(link.href)
                ? 'bg-blue-100'
                : 'hover:bg-secondary'
            }`}
          >
            <link.icon 
              size={20} 
              className={isActive(link.href) ? 'text-blue-600' : 'group-hover:text-tertiary'}
            />
            <span className={`text-sm font-bold ${isActive(link.href) ? 'text-blue-600' : 'group-hover:text-tertiary'}`}>
              {link.label}
            </span>
          </button>
        ))}
      </div>

      <div className='flex flex-col items-start justify-start gap-2 pl-4 w-55 h-60'>
        <button
          onClick={() => setShowFeedbackModal(true)}
          className='flex items-start justify-start gap-4 cursor-pointer group hover:bg-secondary rounded-md p-2 w-50 transition-colors duration-200 ease-in-out'
        >
          <PiBoxArrowUpDuotone size={20} className='group-hover:text-tertiary' />
          <span className='text-sm font-bold group-hover:text-tertiary'>Feedback</span>
        </button>

        <button
          onClick={() => {
            router.push('/dashboard/feedback-history')
            setIsOpen(false)
          }}
          className={`flex items-start justify-start gap-4 cursor-pointer group rounded-md p-2 w-50 transition-colors duration-200 ease-in-out ${
            isActive('/dashboard/feedback-history')
              ? 'bg-blue-100'
              : 'hover:bg-secondary'
          }`}
        >
          <FaGift 
            size={20} 
            className={isActive('/dashboard/feedback-history') ? 'text-blue-600' : 'group-hover:text-tertiary'}
          />
          <span className={`text-sm font-bold ${isActive('/dashboard/feedback-history') ? 'text-blue-600' : 'group-hover:text-tertiary'}`}>
            Feedback History
          </span>
        </button>

        <button className='w-45 rounded-lg cursor-pointer h-10 bg-neutral-500 text-white mt-10'>
          Upgrade
        </button>
      </div>

      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
      />
    </div>
  );

  return (
    <>
      <div className='hidden md:flex h-screen'>
        {sidebarContent}
      </div>
      {isOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          <div className='absolute inset-0 bg-black/40' onClick={() => setIsOpen(false)} />
          <div className='absolute top-0 left-0 h-full w-60 bg-white z-50'>
            <button
              className='absolute top-8 right-4 z-10'
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 size={20} />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  )
}