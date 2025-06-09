"use client";

import { useEffect, useRef, useState } from "react";

// Mock chat data for now
const mockChats = [
	{ id: 1, message: "Hello! How can I help you?" },
	{ id: 2, message: "Show me my last project." },
	{ id: 3, message: "Generate a todo app." },
];

export default function Sidebar() {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const sidebarRef = useRef<HTMLDivElement>(null);

	// Hide Bolty when sidebar is open
	useEffect(() => {
		const bolty = document.getElementById("bolty-logo");
		if (bolty) {
			bolty.style.visibility = open ? "hidden" : "visible";
		}
	}, [open]);

	// Detect mouse near left edge
	useEffect(() => {
		function handleMouseMove(e: MouseEvent) {
			if (e.clientX < 32) {
				setOpen(true);
			} else if (open && e.clientX > 300) {
				setOpen(false);
			}
		}
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [open]);

	return (
		<div
			ref={sidebarRef}
			className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800 w-72 ${
				open ? "translate-x-0" : "-translate-x-full"
			}`}
			style={{ willChange: "transform" }}
		>
			{open && (
				<>
					<div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 font-bold text-lg border-b border-gray-200 dark:border-gray-800">
						Previous Chats
					</div>
					<div className="sticky top-14 z-10 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800">
						<input
							type="text"
							placeholder="Search chats..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-104px)]">
						{mockChats
							.filter((chat) =>
								chat.message.toLowerCase().includes(search.toLowerCase())
							)
							.map((chat) => (
								<div
									key={chat.id}
									className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
								>
									{chat.message}
								</div>
							))}
					</div>
				</>
			)}
		</div>
	);
}
