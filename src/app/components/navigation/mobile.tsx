import Link from 'next/link';

const MobileNav = () => {
    return (
        <nav className="flex md:hidden flex-row-reverse flex-grow w-full justify-evenly dark:invert">
            <Link className="flex md:hidden justify-center space-around items-center px-2 m-2  h-10 hover:underline" href="/">
                Home
            </Link>
            <Link className="flex md:hidden justify-center items-center px-2 m-2 h-10 hover:underline" href="#about-me">
                About
            </Link>
            <Link className="flex md:hidden justify-center items-center px-2 m-2 h-10 hover:underline" href="/">
                Social
            </Link>
            <Link className="flex md:hidden justify-center items-center px-2 m-2 h-10 hover:underline" href="/">
                Shop
            </Link>
            <Link className="flex md:hidden justify-center items-center px-2 m-2 h-10 hover:underline" href="/">
                Contact
            </Link>

        </nav>
    )
}

export default MobileNav;