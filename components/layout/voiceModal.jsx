"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Mic } from "lucide-react";
import { useChatEnabled } from "@/hooks/useChatEnabled"; // Import the custom hook

export function VoiceModal() {
  const { chatActive } = useChatEnabled();
  
  return (
    <>
      {chatActive === "true" ? (
        <div className="h-full w-full fixed bg-white/70 z-30 flex justify-center">
          <div className="w-72 h-96 rounded-md bg-gray-100 z-40 mx-auto my-20 shadow-xl flex items-center flex-col p-10 gap-10">
            <Card className="w-40 h-40 flex items-center justify-center flex-col gap-4">
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
