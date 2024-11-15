"use client";

import { Search, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChatEnabled } from "@/hooks/useChatEnabled"; // Import the custom hook

export function Header() {
  const { toggleChat } = useChatEnabled(); // Use the custom hook to get the state and function

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-zinc-900 shadow-sm">
      <div className="flex h-16 items-center w-full gap-2 px-4">
        <div className="flex items-center space-x-4">
          <span className="text-md font-bold text-white">
            <a href="/">VALA Plus</a>
          </span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 w-[60vw] bg-white/90" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-white/90 hover:bg-white hover:text-black"
            onClick={toggleChat} // Call toggleChat from the hook
            aria-label="Toggle voice input"
          >
            <Mic className="h-4 w-4" />
            <span className="sr-only">Toggle voice input</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
