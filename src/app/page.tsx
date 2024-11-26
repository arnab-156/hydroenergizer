import Link from 'next/link';
import DesktopNav from "./components/navigation/desktop";
import MobileNav from "./components/navigation/mobile";
import Loading from './components/loading/loading';
import Footer from "./components/footer/footer";
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className={`
      font-mono flex flex-col w-full relative space-y-4 max-w-8xl 
      px-2 mx-auto px-4 px-0 md:px-8`}>
      {/* Outer Blk line wrapper */}
      <div
        className={
          `group flex flex-col items-center
            justify-between dark:invert
            fixed top-0 left-0 right-0 bottom-0
            sm:mx-0 sm:mt-0 h-[calc(100%)]  
            md:mx-2 md:rounded-2xl md:mt-4 md:h-[calc(95%)] md:border-2 md:border-black 
          `
        }>
        <DesktopNav />
        {/* Inner Blk line wrapper */}
        <div className={
          `border border-5 border-black overflow-y-auto overflow-x-hidden
          sm:w-full md:mt-16 h-[calc(95%-3rem)] 
          md:w-[calc(100%-2rem)] md:rounded-2xl
          `
        }>

          {/* hero vids */}
          <div className="sticky top-0 rounded-2xl dark:invert" id="home">
            {/* Desktop ratio */}
            <video
              controls autoPlay muted loop playsInline
              className="hidden w-full h-full md:block"
            >
              <source className="hidden md:block" src="/videos/HydroVids.mp4" type="video/mp4" />
            </video>

            {/* Mobile Ratio*/}
            <video
              controls autoPlay muted loop playsInline
              className="w-full h-full md:hidden dark:invert"
            >
              <source className="" src="/videos/mobile_hero.mp4" type="video/mp4" />
            </video>

          </div>

          <main className={`
            flex flex-col items-center bg-background px-4 mt-8 overflow-visible pb-16
            md:h-full md:overflow-y-auto md:rounded-b-2xl mt-[calc(-4rem)] md:pb-0
            sticky top-0 z-30 content-center dark:invert`}>
            <section className={`flex flex-col`}>
              <p className={`block my-4 w-96`} id="about-me">
                Hydrogen is Life envisions a future powered by clean, efficient hydrogen energy.
                We delve into the science, technology, and societal implications of this transformative element.
              </p>

              <div className={`block rounded-lg border border-2 border-black w-64 m-auto dark:invert`}>
                <Link className={
                  `uppercase flex justify-center items-center rounded-md 
                  text-background bg-black
                  scale-x-95 scale-y-90 py-3 md:px-4 
                  hover:scale-100 transition delay-100 duration-700 ease-in-out dark:invert dark:bg-white`}
                  href={"/"}>
                  Learn More...
                </Link>
              </div>

              <p className={`block my-4 w-96`}>
              In the realm of energy, hydrogen offers a clean and efficient alternative to fossil fuels. 
              Through processes like electrolysis, hydrogen can be produced from water using renewable energy sources. 
              This "green hydrogen" can then be used to power fuel cells, generating electricity without harmful emissions. 
              Additionally, hydrogen can be stored and transported, making it a versatile energy carrier.
              </p>

              <p className={`block my-4 w-96`}>
              Beyond energy, hydrogen's potential extends to other areas. Some scientists speculate that life forms based on hydrogen
               could exist in extreme environments, such as deep-sea hydrothermal vents or extraterrestrial planets. 
               These hypothetical "hydrogen-based life" forms would use hydrogen as a source of energy and building blocks, 
               fundamentally different from carbon-based life on Earth.
              </p>
            </section>


            <Footer />
          </main>
        </div>
        {/* End of Blue line wrapper */}
        <MobileNav />
      </div>
    </div>
  );
}
