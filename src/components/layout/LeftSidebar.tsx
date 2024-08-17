import Link from "next/link";
import Nav from "./Nav";

export default function LeftSidebar() {
    return <div className="hidden w-1/4 overscroll-y-auto border-r border-gray-200 p-6 md:sticky md:block h-screen xl:w-1/5">
        <Link className="mb-8" href="/">
            <p className="h-8 w-8 text-gray-800">
            𝕏
            </p>
            <Nav/>
        </Link>
    </div>
}

