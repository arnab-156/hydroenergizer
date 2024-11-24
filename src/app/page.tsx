import Image from "next/image";
import Link from 'next/link';
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import OutlinedButton from "./components/button/outlineButton";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-2 relative space-y-4 max-w-8xl mx-auto px-4 sm:px-6 md:px-8">

      <div className="group flex flex-col items-center justify-between border-2 border-red rounded-2xl mx-2 mt-4 h-[calc(95%)] fixed top-0 left-0 right-0 bottom-0">
        <Navigation />
        {/* Blue line wrapper */}
        <div className="border border-5 border-black rounded-2xl overflow-y-auto w-[calc(100%-2rem)] h-[calc(95%-3rem)] mt-16 ">

          {/* hero */}
          <div className="sticky top-0 rounded-2xl">
            <Image
              className="object-none object-center rounded-2xl w-full h-200 z-10 md:object-cover"
              src="/images/home/mountains.jpg"
              alt="Hydrogen world"
              priority
              unoptimized
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-[50%] flex flex-col justify-center fixed">
              <Image
                className="rounded-2xl"
                src="/videos/Hydro.png"
                alt="logo of commander's palace"
                priority
                unoptimized
              />

              <div className="flex justify-center m-auto mt-6">
                <OutlinedButton title="Make a Reservation" url="/" backgroundColor="background" />
              </div>
            </div>
          </div>

          <main className="flexflex-col items-center bg-background rounded-b-2xl h-full overflow-y-auto w-[calc(100%)] px-0 pt-8 sticky top-0 z-30">
            <section className="h-48 overflow-y-auto">
              {/* Div is some text and a styled button, desktop has two images */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <div className={`border rounded-md border-leaf`}>
                <Link className={
                  `uppercase flex justify-center items-center rounded-md 
                text-background bg-leaf
                scale-x-95 scale-y-90 
                p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out`}
                  href={"/"}>
                  View Menu
                </Link>
              </div>
            </section>


            <section className="h-96 border border-1">
              {/* Div is background image with flush card with double outline (headline, title, para, button) */}
              <div>
                Paragraph 1:

                Welcome to our website!
                [Briefly describe your company or organization and what you offer.]edicated to [your mission or values]. Our team of experts has years of experience in [relevant field] and is committed to providing exceptional service to our customers.

                Paragraph 3:

                We invite you to explore our website and learn more about what we do. Feel free to contact us if you have any questions or would like to schedule a consultation. We look forward to helping you [achieve your goals or solve your problems].
              </div>
              <div>
                Paragraph 1:

                Welcome to our website!
                [Briefly describe your company or organization and what you offer.]edicated to [your mission or values]. Our team of experts has years of experience in [relevant field] and is committed to providing exceptional service to our customers.

                Paragraph 3:

                We invite you to explore our website and learn more about what we do. Feel free to contact us if you have any questions or would like to schedule a consultation. We look forward to helping you [achieve your goals or solve your problems].
              </div>
            </section>


            <section className="h-48 overflow-y-auto">
              {/* Div is some text, a styled button, and two images */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <div className={`border rounded-md border-leaf`}>
                <Link className={
                  `uppercase flex justify-center items-center rounded-md 
                text-background bg-leaf
                scale-x-95 scale-y-90 
                p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out`}
                  href={"/"}>
                  View Menu
                </Link>
              </div>
            </section>






            <Footer />
          </main>
        </div>
        {/* End of Blue line wrapper */}
      </div>

    </div>
  );
}
