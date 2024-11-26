import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={
            `group w-[calc(100%)] bottom-0 bg-commanderBlue flex flex-col items-center justify-center rounded-b-2xl h-50
            `
        }>
            <Image
                aria-hidden
                src="/images/hydrologo.gif"
                alt="stylized logo"
                className="mt-12 px-24 dark:invert"
                unoptimized
            />

            <section className=" w-full h-96 flex m-auto">
                <div className={`
                    grid grid-cols-1 md:grid-cols-2 md:grid-rows-3
                    lg:grid-cols-3 lg:grid-rows-2 gap-x-16 gap-y-4 mt-12 m-2 text-white
                    `}>
                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Company</h3>
                        <p>About</p>
                        <p>Contact</p>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Shop</h3>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Social</h3>
                        <Link href={'https://www.instagram.com/hydro_energizer/'}>Instagram</Link>
                    </div>

                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Contact Us</h3>
                        <p>info@hydroenergizer.com</p>
                        <p>+1(401) 871-1111</p>
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