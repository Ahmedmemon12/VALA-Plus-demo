"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useChatEnabled() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [chatActive, setChatActive] = useState(searchParams?.get("chat"));

  // Sync query value with the search parameter
  useEffect(() => {
    setChatActive(searchParams?.get("chat"));
  }, [searchParams]);

  // Toggle the `chat` query parameter
  const toggleChat = () => {
    const newValue = chatActive === "true" ? "false" : "true";
    router.push(`?chat=${newValue}`);
    setChatActive(newValue);
  };

  return { chatActive, toggleChat };
}
