"use client"

import { Send } from "lucide-react"
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
			<div className="flex items-center gap-2 w-full">
				<input
					type="text"
					placeholder="Create a chess application"
					value={prompt}
					onChange={e => setPrompt(e.target.value)}
					className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<Button
					className="h-10 px-4"
					onClick={async () => {
						const token = await getToken()
						const response = await axios.post(
							`${BACKEND_URL}/project`,
							{
								prompt: prompt,
							},
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							}
						)
						console.log(response.data)
					}}
				>
					<Send />
				</Button>
			</div>
		</div>
	)
}