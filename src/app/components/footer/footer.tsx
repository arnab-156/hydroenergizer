import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={
            `group w-[calc(100%)] bottom-0 bg-gray flex flex-col items-center justify-center rounded-b-2xl h-full md:h-50
            `
        }>
            <Image
                aria-hidden
                src="/images/hydrologo.gif"
                alt="stylized logo"
                className="my-12 w-48 dark:invert lg:w-36"
                unoptimized
            />

            <section className="w-full h-96 flex m-auto">
                <div className={`
                    grid grid-cols-1 md:grid-cols-2 md:grid-rows-3
                    lg:grid-cols-3 lg:grid-rows-2 gap-x-16 gap-y-4 my-3 md:my-0 md:mx-auto text-white
                    `}>
                    <div className="">
                        <h3 className="text-2xl text-white underline">Company</h3>
                        <Link href={'/#about-me'}>About</Link>
                        <p>Contact</p>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-white underline">Shop</h3>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-white underline">Social</h3>
                        <Link href={'https://www.instagram.com/hydro_energizer/'} id='social'>Instagram</Link>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Contact Us</h3>
                        <p>info@hydroenergizer.com</p>
                        <p>+1(479) HYD-ROGEN</p>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Location</h3>
                        <p>Washington DC</p>
                        <p>Mountain View AR</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;