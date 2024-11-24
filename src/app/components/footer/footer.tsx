import Image from "next/image";
// import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={
            `group w-[calc(100%)] bottom-0 bg-commanderBlue flex flex-col items-center justify-center rounded-b-2xl h-50
            `
        }>
            <Image
                aria-hidden
                src="/images/footer_name.png"
                alt="stylized logo of commander's"
                className="mt-24 px-24"
                unoptimized
            />

            <section className=" h-96 flex">
                <div className="grid grid-cols-3 grid-rows-2 gap-x-16 gap-y-4 mt-12 m-2 text-commanderLight">
                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Company</h3>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Le Petit Bleu</p>
                    </div>
                    <div className="">
                        <h3 className="text-2xl  text-chartreuse underline">Shop</h3>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Restaurant</h3>
                        <p>Menus</p>
                        <p>Private Dining</p>
                        <p>Reservations</p>
                        <p>FAQ</p>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Social</h3>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Contact Us</h3>
                        <p>info@commanderspalace.com</p>
                        <p>+1(504) 899-8221</p>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-chartreuse underline">Location</h3>
                        <p>1403 Washinton Ave</p>
                        <p>New Orleans, LA 70130</p>
                    </div>
                </div>
                <Image
                    aria-hidden
                    src="/images/footer_frame.png"
                    alt="stylized graphic"
                    className="mt-24"
                    unoptimized
                />
            </section>
        </footer>
    )
}

export default Footer;