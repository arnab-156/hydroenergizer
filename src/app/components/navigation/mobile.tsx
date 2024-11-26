import Link from 'next/link';

const MobileNav = () => {
    const $className = "flex md:hidden justify-center space-around items-center px-2 m-2  h-10 hover:underline";
    return (
        <nav className="flex md:hidden flex-row-reverse flex-grow w-full justify-evenly dark:invert">
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

export default MobileNav;