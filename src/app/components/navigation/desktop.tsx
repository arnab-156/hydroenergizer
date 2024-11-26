import Link from 'next/link';

const DesktopNav = () => {
    const $className = "hidden md:flex justify-center space-around items-center px-2 m-2 h-10 hover:underline";

    return (
        <nav className="hidden md:flex flex-row-reverse md:flex-row flex-grow w-[calc(100%-2rem)] fixed z-10 justify-evenly dark:invert">
            <Link className={$className} href="/">
                Home
            </Link>
            <Link className={$className} href="#about-me">
                About
            </Link>
            <Link className={$className} href="#social">
                Social
            </Link>
            <Link className={$className} href="/">
                Shop
            </Link>
            <Link className={$className} href="#contact">
                Contact
            </Link>
        </nav>
    )
}

export default DesktopNav;