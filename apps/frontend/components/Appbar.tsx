import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function Appbar() {
  return (
    <>
      {/* Bolty logo top left */}
      <div id="bolty-logo" className="fixed top-4 left-6 z-50 text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 select-none drop-shadow-lg">
        Bolty
      </div>
      {/* Account/User top right */}
      <div className="fixed top-4 right-6 z-50 flex items-center gap-3">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded bg-white/80 dark:bg-gray-900/80 border border-gray-300 dark:border-gray-700 text-sm font-medium shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition">Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" appearance={{
            elements: {
              avatarBox: "ring-2 ring-blue-500 dark:ring-blue-400",
            },
          }} />
        </SignedIn>
      </div>
    </>
  );
}
