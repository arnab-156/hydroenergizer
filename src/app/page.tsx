import Image from "next/image";
import Link from 'next/link';
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import OutlinedButton from "./components/button/outlineButton";

export default function Home() {
  return (
    <div className={`
      font-mono flex flex-col w-full relative space-y-4 max-w-8xl 
      px-2 mx-auto px-4 px-0 md:px-8`}>
      {/* Outer Blk line wrapper */}
      <div
        className={
          `group flex flex-col items-center
            justify-between border-2 border-black
            fixed top-0 left-0 right-0 bottom-0
            sm:mx-0 sm:mt-0 h-[calc(100%)]  
            md:mx-2 md:rounded-2xl md:mt-4 md:h-[calc(95%)]   
          `
        }>
        <Navigation />
        {/* Inner Blk line wrapper */}
        <div className={
          `border border-5 border-black overflow-y-auto 
          mt-16 h-[calc(95%-3rem)] 
          sm:w-full
          md:w-[calc(100%-2rem)] md:rounded-2xl
          `
        }>

          {/* hero */}
          <div className="sticky top-0 rounded-2xl">
            <Image
              className="w-full h-full"
              src="/images/home/HydroVid.png"
              alt="Hydrogen world"
              priority
              unoptimized
            />



            {/* <video
              controls autoPlay
              className="w-full h-full"
              loop
            >
              <source src="/images/home/HydroVid.mp4" type="video/mp4" />
            </video> */}



            {/* <div className="absolute top-1/4 left-1/2 transform -translate-x-[50%] flex flex-col justify-center fixed">
              <Image
                className="rounded-2xl"
                src="/images/home/hydro_name.svg"
                alt="logo of hydro's palace"
                priority
                unoptimized
              />

              <div className="flex justify-center m-auto mt-6">
                <OutlinedButton title="Contact us" url="/" backgroundColor="background" />
              </div>
            </div> */}
          </div>

          <main className={`
            flexflex-col items-center bg-background rounded-b-2xl h-full 
            overflow-y-auto w-screen px-4 pt-8 
            sticky top-0 z-30 content-center`}>
            <section className={`h-48 overflow-y-auto flex flex-col`}>
              {/* Div is some text and a styled button, desktop has two images */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

              <div className={`rounded-lg border border-2 border-black w-64`}>
                <Link className={
                  `uppercase flex justify-center items-center rounded-md 
                text-background bg-black
                scale-x-95 scale-y-90 
                p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out`}
                  href={"/"}>
                  Learn About Hydro Energizer
                </Link>
              </div>
            </section>


            <section className={`h-48 overflow-y-auto`}>
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


            <section className={`h-48 overflow-y-auto`}>
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
