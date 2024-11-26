// import Image from "next/image";
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="flex flex-row-reverse md:flex-row flex-grow w-[calc(100%-2rem)] fixed z-10 justify-evenly dark:invert">
            <Link className="hidden md:flex justify-center space-around items-center px-2 m-2  h-10 hover:underline" href="/">
                Home
            </Link>
            <Link className="hidden md:flex justify-center items-center px-2 m-2 h-10 hover:underline" href="#about-me">
                About
            </Link>
            <Link className="hidden md:flex justify-center items-center px-2 m-2 h-10 hover:underline" href="/">
                Social
            </Link>
            <Link className="hidden md:flex justify-center items-center px-2 m-2 h-10 hover:underline" href="/">
                Shop
            </Link>
            <Link className="hidden md:flex justify-center items-center px-2 m-2 h-10 hover:underline" href="/">
                Contact
            </Link>

        </nav>
    )
}

export default Navigation;