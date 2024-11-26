"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Mic, MoveUpRight } from "lucide-react";
import { useChatEnabled } from "@/hooks/useChatEnabled"; // Import the custom hook
import { useRouter } from "next/navigation";
import Link from "next/link";

export function VoiceModal() {
  const { chatActive } = useChatEnabled();
  const commands = [
    { text: "Recent incidents", url: "/incident" },
      { text: "Finished", url: "/" },
    { text: "Jack", url: "/child?child=jack" },
    { text: "Ava's food activity", url: "/room/children/baby?child=ava&mode=activities&activity=food" },
    { text: "Emma's room activity logs", url: "/room/children/baby?child=emma&mode=logs" }, 
    { text: "Chat with administrator", url: "/chat/admin" },
    { text: "Chat with Jack's parents", url: "/chat/new?child=jack" },
  ]
  const route = useRouter()

  return (
    <>
      {chatActive === "true" ? (
        <div className="h-full w-full fixed bg-white/70 z-30 flex justify-center" onClick={() => route.push("?")}>
          <div className="w-[80%] max-h-[70vh] rounded-md bg-gray-100 z-40 mx-auto my-20 shadow-xl flex items-center flex-col p-10 gap-10" onClick={(e) => e.stopPropagation()}>
            <Card className="w-40 h-40 flex items-center justify-center flex-col gap-4 p-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-20 w-20 rounded-3xl bg-black/90 hover:bg-black text-white"
                aria-label="Toggle voice input"
              >
                <Mic className="h-6 w-6" />
                <span className="sr-only">Toggle voice input</span>
              </Button>
              <span>Tap to Speak</span>
            </Card>
            <Card className="w-full h-32 p-5">
              <span>|</span>
            </Card>
            <Card className="overflow-y-scroll w-full flex flex-col gap-4 p-2">
              {commands.map((command, ind) => <Link href={command.url} key={ind}><Card className="bg-zinc-300 flex justify-between items-center p-2"><span>{command.text}</span><MoveUpRight className="w-4 h-4" /></Card></Link>)}
            </Card>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
