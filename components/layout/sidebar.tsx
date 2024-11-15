"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  School,
  MessageSquare,
  Settings,
  Mic,
  Users,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";

const recentChats = [
  { name: "John's mother", id: "1" },
  { name: "Adam's father", id: "2" },
  { name: "Administrator", id: "3" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {!isExpanded ? (
        <div className="fixed h-full flex items-end pb-32 w-0">
          <span
            className="h-10 aspect-square rounded-lg bg-zinc-900 text-white flex items-center justify-center opacity-60 m-3"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <PanelRightClose />
          </span>
        </div>
      ) : (
        <></>
      )}
      <div
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-[#F0EFEF] transition-all duration-300 pb-16",
          !isExpanded && "w-0"
        )}
      >
        <ScrollArea className="h-full py-6">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-4 py-4 h-[75vh]">
              <div className="px-3 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mb-4 h-12 w-12 rounded-full bg-zinc-900 hover:bg-zinc-900/90 mx-auto flex"
                >
                  <Mic className="h-6 w-6 text-white" />
                </Button>
                <div className="space-y-1">
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 text-black",
                        pathname === "/" && "bg-zinc-900 text-white"
                      )}
                    >
                      <Home className="h-4 w-4" />
                      {isExpanded && "Home"}
                    </Button>
                  </Link>
                  <Link href="/rooms">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 text-black hover:text-white",
                        pathname === "/rooms" && "bg-zinc-900 text-white"
                      )}
                    >
                      <School className="h-4 w-4" />
                      {isExpanded && "Rooms"}
                    </Button>
                  </Link>
                  <Link href="/chat/all">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 text-black hover:text-white",
                        pathname === "/chat" && "bg-zinc-900 text-white"
                      )}
                    >
                      <MessageSquare className="h-4 w-4" />
                      {isExpanded && "Chats"}
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 text-black hover:text-white",
                        pathname === "/settings" && "bg-zinc-900 text-white"
                      )}
                    >
                      <Settings className="h-4 w-4" />
                      {isExpanded && "Settings"}
                    </Button>
                  </Link>
                </div>
              </div>
              {isExpanded && (
                <>
                  <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold">
                      Recent Chats
                    </h2>
                    <div className="space-y-1">
                      {recentChats.map((chat) => (
                        <Link key={chat.id} href={`/chat/${chat.id}`}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start"
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            {chat.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <div className="flex items-center gap-2 px-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.jpg" />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">Sarah Thompson</span>
                        <span className="text-sm text-muted-foreground">
                          Staff
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-end pr-4">
              <span onClick={() => setIsExpanded(!isExpanded)}>
                <PanelRightOpen />
              </span>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
