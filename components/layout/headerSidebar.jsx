"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  School,
  MessageSquare,
  Settings,
  Mic,
  Menu,
  X,
  CircleHelp,
  CircleAlert,
  NotepadText,
  Search,
  ArrowUpDown,
  Bell,
} from "lucide-react";
import { useChatEnabled } from "@/hooks/useChatEnabled";

const recentChats = [
  { name: "John's mother", id: "1", url: "/chat/new" },
  { name: "Adam's father", id: "2", url: "/chat/new" },
  { name: "Administrator", id: "3", url: "/chat/new" },
];

export function HeaderSidebar() {
  const { toggleChat } = useChatEnabled();
  const [isExpanded, setIsExpanded] = useState(false);
  const [orgSidebar, setOrgSidebar] = useState(false);
  const [currentOrg, setCurrentOrg] = useState(0)
  const [orgSelector, setOrgSelector] = useState(false)

  const organization = {
    name: "Wattle Tree Childcare",
    shortName: "WT Childcare",
    icon: "https://cdn.shopify.com/s/files/1/0630/4143/7774/files/image_7_9614b325-4b76-4430-806d-c0dc0d955442.png?v=1732902336"
  }
  const groups = ["0-1 years", "1-2 years", "2-3 years", "3-4 years", "4-5 years"]
  const pathname = usePathname();

  const toggleSidebar = () => setIsExpanded((prev) => !prev);

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-zinc-900 shadow-sm">
        <div className="flex h-16 items-center w-full gap-2 px-4">
          <Link href={"/"} className="flex gap-2 items-center">
            <span className="max-w-[40px]">
              <img className="grayscale" src={organization.icon} width={"100%"} />
            </span>
            <span className="flex flex-col ">
              <h3 className="text-white">{organization.shortName}</h3>
              <span className="text-white text-xs">{groups[currentOrg]}</span>
            </span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 w-[60vw] bg-white/90"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full bg-white/90 hover:bg-white hover:text-black"
              aria-label="Toggle voice input"
              onClick={toggleChat}
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Toggle voice input</span>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-md font-bold text-white">
              <a href="#" onClick={toggleSidebar}>
                {!isExpanded ? <Menu /> : <X />}
              </a>
            </span>
          </div>
        </div>
      </header>

      {/* Organization's Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-[50%] border-r bg-[#F0EFEF] transition-all duration-300 pb-16",
          !orgSidebar && "w-0"
        )}
      >
        <ScrollArea className="h-full pb-6">
          <div className="h-full flex flex-col p-4">
            <div className="flex items-center justify-center flex-col py-8 gap-4 relative">
              <span className="max-w-[100px] grayscale"><img className="invert" src={organization.icon} /></span>
              <h1 className="text-lg text-center">{organization.name}</h1>
              <Button onClick={() => setOrgSelector(!orgSelector)} className={`aspect-square p-1 rounded-full absolute top-0 right-0 bg-white hover:bg-white ${orgSelector ? "invert" : "invert-0"}`}><ArrowUpDown /></Button>
            </div>
            <div className={`${orgSelector ? "h-full" : "h-0"} overflow-hidden transition-all duration-300`}>
              <span className="text-xl font-bold mb-6 block">Select Group</span>
              <div className="flex flex-col gap-3">
                {
                  groups.map((grp, ind) => <span key={ind} className={`flex gap-2 items-center justify-start p-2 rounded-md ${ind == currentOrg ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => setCurrentOrg(ind)}><span className="text-sm">{grp}</span></span>)
                }
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>


      {/* Actions Sidebar */}
      <div
        className={cn(
          "fixed right-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-[#F0EFEF] transition-all duration-300 pb-16",
          !isExpanded && "w-0"
        )}
      >
        <ScrollArea className="h-full pb-6">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-4 py-4 h-[75vh]">
              <div className="px-3 py-2">
                <div className="flex items-center justify-center py-8">
                  <h1 className="text-lg font-black">Vala Plus</h1>
                </div>
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
                  <Link href="/incident">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 text-black hover:text-white",
                        pathname === "/incident" && "bg-zinc-900 text-white"
                      )}
                    >
                      <CircleAlert className="h-4 w-4" />
                      {isExpanded && "Log incidents"}
                    </Button>
                  </Link>
                  <Link href="/quality-compliance">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 text-black hover:text-white",
                        pathname === "/quality-compliance" && "bg-zinc-900 text-white"
                      )}
                    >
                      <NotepadText className="h-4 w-4" />
                      {isExpanded && "Compliance Management"}
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
                        <Link key={chat.id} href={chat.url}>
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
            <div className="flex justify-between px-4 items-center">
              <Link href={"/feedback"} className="bg-zinc-900 text-white rounded-full p-2">
                <CircleHelp />
              </Link>
              <span></span>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
