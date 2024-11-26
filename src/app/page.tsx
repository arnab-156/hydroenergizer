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
            justify-between border-2 border-black dark:invert
            fixed top-0 left-0 right-0 bottom-0
            sm:mx-0 sm:mt-0 h-[calc(100%)]  
            md:mx-2 md:rounded-2xl md:mt-4 md:h-[calc(95%)]   
          `
        }>
        <Navigation />
        {/* Inner Blk line wrapper */}
        <div className={
          `border border-5 border-black overflow-y-auto overflow-x-hidden
          mt-16 h-[calc(95%-3rem)] 
          sm:w-full
          md:w-[calc(100%-2rem)] md:rounded-2xl
          `
        }>

          {/* hero vids */}
          <div className="sticky top-0 rounded-2xl dark:invert">
            <video
              controls autoPlay
              className="hidden w-full h-full md:block"
              loop
            >
              <source className="hidden md:block" src="/videos/HydroVids.mp4" type="video/mp4" />
            </video>


            <video
              controls autoPlay
              className="w-full h-full md:hidden dark:invert"
              loop
            >
              <source className="" src="/videos/mobile_hero.mp4" type="video/mp4" />
            </video>
          </div>

          <main className={`
            flexflex-col items-center bg-background rounded-b-2xl h-screen md:h-full px-4 mt-8 overflow-visible md:overflow-y-auto
            sticky top-0 z-30 content-center mt-[calc(-4rem)] dark:invert`}>
            <section className={`h-48 flex flex-col`}>
              {/* Div is some text and a styled button, desktop has two images */}
              <p className={`my-4`} id="about-me">
                Hydrogen is Life envisions a future powered by clean, efficient hydrogen energy.
                We delve into the science, technology, and societal implications of this transformative element.
              </p>

              <div className={`rounded-lg border border-2 border-black w-64 m-auto dark:invert`}>
                <Link className={
                  `uppercase flex justify-center items-center rounded-md 
                  text-background bg-black
                  scale-x-95 scale-y-90 py-3 md:px-4 
                  hover:scale-100 transition delay-100 duration-700 ease-in-out dark:invert dark:bg-white`}
                  href={"/"}>
                  Learn More...
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
