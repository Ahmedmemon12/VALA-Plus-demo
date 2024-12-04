"use client";

import {
  Home,
  School,
  MessageSquare,
  Settings,
  BotMessageSquare,
  Mic,
  BellDot,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t bg-white">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-around px-4">
        <Link href="/incident">
          <Button variant="ghost" size="icon">
            <ShieldAlert className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="/chat/ai">
          <Button variant="ghost" size="icon">
            <BotMessageSquare className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="?chat=true">
          <Button variant="ghost" size="icon">
            <Mic className="h-6 w-6" />
          </Button>
        </Link>
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
