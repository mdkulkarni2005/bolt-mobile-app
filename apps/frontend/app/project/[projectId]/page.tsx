"use client"
import { Appbar } from "@/components/Appbar";
import { Prompt } from "@/components/Prompt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WORKER_URL } from "@/config";
import { usePrompts } from "@/hooks/usePrompts";
import { Send } from "lucide-react";

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { prompts } = usePrompts(params.projectId);
  return (
    <div>
      {/* <Appbar /> */}
      <div className="flex h-screen">
        <div className="w-1/4 h-screen flex flex-col justify-between p-4">
          <div>
            Chat history 
            {prompts.map((prompts) => (
              <div key={prompt.id}>{prompts.content}</div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input />
            <Button>
              <Send />
            </Button>
          </div>
        </div>
        <div className="w-3/4 p-8">
          <iframe src={`${WORKER_URL}`} width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
}
