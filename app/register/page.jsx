"use client"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const StaffRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    phone: '',
    qualification: ''
  });

  const roles = [
    "Lead Teacher",
    "Assistant Teacher",
    "Administrator",
    "Director",
    "Support Staff"
  ];

  const qualifications = [
    "Early Childhood Education Degree",
    "Teaching Certificate",
    "First Aid Certification",
    "Child Development Associate (CDA)",
    "Other"
  ];

  return (
    <div className="bg-white p-4" style={{ maxWidth: '425px', margin: '0 auto' }}>
      <Card className="w-full border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-[#333333]">
            Staff Registration
          </CardTitle>
          <p className="text-sm text-center text-[#6C7A89]">
            Create your account to join our childcare team
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#333333]">First Name</Label>
              <Input
                id="firstName"
                placeholder="Jane"
                className="bg-white border-[#6C7A89] focus:border-[#A3E4D7]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#333333]">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                className="bg-white border-[#6C7A89] focus:border-[#A3E4D7]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#333333]">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jane.doe@example.com"
              className="bg-white border-[#6C7A89] focus:border-[#A3E4D7]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#333333]">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="bg-white border-[#6C7A89] focus:border-[#A3E4D7]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-[#333333]">Role</Label>
            <Select>
              <SelectTrigger className="bg-white border-[#6C7A89] focus:border-[#A3E4D7]">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role.toLowerCase()}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="qualification" className="text-[#333333]">Qualification</Label>
            <Select>
              <SelectTrigger className="bg-white border-[#6C7A89] focus:border-[#A3E4D7]">
                <SelectValue placeholder="Select your qualification" />
              </SelectTrigger>
              <SelectContent>
                {qualifications.map((qual) => (
                  <SelectItem key={qual} value={qual.toLowerCase()}>
                    {qual}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#333333]">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="bg-white border-[#6C7A89] focus:border-[#A3E4D7] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-[#6C7A89] hover:text-[#333333]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-xs text-[#6C7A89]">
              Password must be at least 8 characters long
            </p>
          </div>

          <Button 
            className="w-full bg-zinc-900 text-white"
          >
            Create Account
          </Button>

          <div className="text-center text-sm">
            <span className="text-[#6C7A89]">Already have an account? </span>
            <a href="/login" className="text-zinc-900 hover:underline">Sign in</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffRegistration;