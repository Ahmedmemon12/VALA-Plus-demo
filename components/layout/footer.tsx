"use client";

import { Home, School, MessageSquare, Settings, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t bg-white">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-around px-4">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/rooms">
          <Button variant="ghost" size="icon">
            <School className="h-6 w-6" />
          </Button>
        </Link>
        <Button
          variant="default"
          size="icon"
          className="h-14 w-14 rounded-full bg-zinc-900 hover:bg-zinc-900/90 -mt-8 text-white"
        >
          <Link href="/chat/ai">
            <Mic className="h-6 w-6" />
          </Link>
        </Button>
        <Link href="/chat/all">
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
