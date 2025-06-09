"use client"

import { Send } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"
import { useAuth } from "@clerk/nextjs"
import { BACKEND_URL } from "@/config"

export function Prompt() {
  const [prompt, setPrompt] = useState("")
  const { getToken } = useAuth()
  return (
    <div>
      <Textarea placeholder="Create a chess application" />
      <div className="flex justify-end pt-2">
        <Button onClick={async() => {
          const token = await getToken()
          const response = await axios.post(`${BACKEND_URL}/project`, {
            prompt: prompt
          }, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          console.log(response.data)
        }}>
          <Send />
        </Button>
      </div>
    </div>
  )
}