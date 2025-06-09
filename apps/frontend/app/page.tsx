import { Appbar } from "@/components/Appbar";
import {Prompt} from "@/components/Prompt";
// import { TemplateButtons } from "@/components/TemplateButtons";

export default function Home() {
    return (
        <div className="min-h-screen bg-background p-4 flex flex-col items-center">
            <Appbar />
            <div className="w-full max-w-xl mt-12">
                <div className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 px-8 py-10 flex flex-col items-center">
                    <div className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
                        What do you want to build?
                    </div>
                    <div className="text-base text-gray-500 dark:text-gray-300 text-center mb-6">
                        Enter your prompt, click generate, and watch your app come to life.
                    </div>
                    <Prompt />
                </div>
            </div>
            {/* <div className="max-w-2xl mx-auto pt-4">
                <TemplateButtons />
            </div> */}
        </div>
    )
}