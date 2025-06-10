import { BACKEND_URL } from "@/config";
import axios from "axios";
import { get } from "http";
import { type } from "os";
import { useEffect, useState } from "react";

interface Prompt {
  type: "USER" | "SYSTEM";
  createdAt: Date;
}

export function usePrompts(projectId: string) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    function getPrompts() {
        axios.get(`${BACKEND_URL}/prompts/${projectId}`).then((res) => {
            setPrompts(res.data)
        })
    }
    getPrompts();
    let interval = setInterval(getPrompts, 1000)
    return () => clearInterval(interval)
  }, []);

  return {
    prompts,
  };
}
