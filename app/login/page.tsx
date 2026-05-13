'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdEmail } from "react-icons/md";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Login() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/dashboard');
    };

    return (
        <div className='bg-white min-h-screen w-full flex flex-col items-center justify-center px-6'>
            <div className='w-full max-w-[400px] flex flex-col items-center'>
                <h1 className='text-3xl font-bold mb-12 text-black'>Login</h1>
                
                <form onSubmit={handleLogin} className='w-full flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium text-black ml-1'>Email</label>
                        <div className='relative flex items-center'>
                            <MdEmail className='absolute left-4 text-neutral-400' size={20} />
                            <input 
                                type="email" 
                                placeholder="Example@email.com" 
                                className='w-full h-14 pl-12 pr-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-300'
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium text-black ml-1'>Password</label>
                        <div className='relative flex items-center'>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="********" 
                                className='w-full h-14 px-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-300'
                                required
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-4 text-neutral-400 hover:text-neutral-600'
                            >
                                {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                            </button>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className='w-full h-14 bg-black text-white font-bold rounded-xl mt-4 hover:bg-neutral-800 transition-all active:scale-[0.98]'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}