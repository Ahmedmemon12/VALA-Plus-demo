"use client"

import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, KeyRound, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const StaffLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-white flex flex-col items-center justify-center p-4" style={{ maxWidth: '425px', margin: '0 auto' }}>
            {/* Logo/Title Area */}
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-[#6C7A89] mb-2">Vala Plus</h1>
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-2">
                    <KeyRound className="w-8 h-8 text-white" />
                </div>
            </div>

            <Card className="w-full bg-gray-100 border-none shadow-lg">
                <CardHeader className="space-y-1 pb-4">
                    <CardTitle className="text-xl text-center text-[#333333]">Welcome Back</CardTitle>
                    <p className="text-sm text-center text-[#6C7A89]">Sign in to your account</p>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#333333] text-sm">Email Address</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[#6C7A89]" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@valaplusapp.com"
                                className="bg-white pl-10 border-[#6C7A89] focus:border-[#A3E4D7]"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-[#333333] text-sm">Password</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="bg-white pr-10 border-[#6C7A89] focus:border-[#A3E4D7]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-[#6C7A89] hover:text-[#333333]"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" className="border-[#6C7A89] data-[state=checked]:bg-[#A3E4D7] data-[state=checked]:border-[#A3E4D7]" />
                            <label htmlFor="remember" className="text-sm text-[#6C7A89] cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-[#6C7A89] hover:text-[#A3E4D7] hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-900/70 transition-colors">
                        <LogIn className="w-4 h-4 mr-2" />
                        <Link href={"/"}>
                            Sign In
                        </Link>
                    </Button>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4 mt-2">
                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-[#6C7A89] opacity-20" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#F0EFEF] px-2 text-[#6C7A89]">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="bg-white hover:bg-[#FAD4C0] border-[#6C7A89] hover:border-[#FAD4C0] text-[#333333]">
                            Google
                        </Button>
                        <Button variant="outline" className="bg-white hover:bg-[#FAD4C0] border-[#6C7A89] hover:border-[#FAD4C0] text-[#333333]">
                            Microsoft
                        </Button>
                    </div>

                    <div className="text-center text-sm">
                        <span className="text-[#6C7A89]">New to Vala Plus? </span>
                        <a href="/register" className="text-inc-900 hover:underline">
                            Create an account
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default StaffLogin;