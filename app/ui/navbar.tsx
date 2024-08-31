import Image from "next/image";

export default function Navbar () {
    return (
        <div className="px-14 py-5 flex justify-between shadow-sm">
            <Image src="/eco-logo.svg" width={168} height={44} alt="eco-patriot logo"/>
            <div className="flex space-x-4 items-center">
                <p className="font-medium">Login</p>
                <p className="font-medium">Sign Up</p>
            </div>
        </div>
    )
}