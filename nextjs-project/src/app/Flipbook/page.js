"use client"

import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import jungle from "../../../public/assets/images/jungle.png";
import space from "../../../public/assets/images/space.png";
import man from "../../../public/assets/images/man.png";
import tree from "../../../public/assets/images/tree.png";
import ImageView from "../components/ImageView";
import { useMediaQuery } from "react-responsive";

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="box-border z-20 flex flex-col justify-between w-full h-full p-3 sm:p-12 md:p-4 xl:p-12 2xl:p-14 transition-opacity duration-300 ease-out rounded-lg shadow-2xl opacity-100 demoPage bg-custom-gradient"
      ref={ref}
      style={{ paddingTop: '20px', paddingBottom: '20px' }}
    >
      {props.children}
    </div>
  );
});
Page.displayName = "Page";
function FlipBook() {
    const [size, setSize] = useState({ height: 600, width: 550 });
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1536px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1536px) and (max-width: 2500px)" });

      useEffect(() => {
    if (isMobile) {
      setSize({ height: 200, width: 150 }); // Adjusted for mobile
    } else if (isTablet) {
      setSize({ height: 600, width: 400 }); // Adjusted for tablet
    } else if (isDesktop) {
      setSize({ height: 1000, width: 900 }); // Adjusted for desktop
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <>
     <div className="w-full overflow-x-hidden 2xl:w-[3000px] mx-auto">
      <HTMLFlipBook
        width={size.width || 550}
        height={size.height || 600}
        maxShadowOpacity={0.8}
        flippingTime={1000}
        // showCover={true}
        className="shadow-2xl "
        style={{
          boxShadow: "0 15px 15px rgba(0, 0, 0, 0.5)",
          perspective: "1500px",
          margin: "50px auto",
          background: "linear-gradient(to right, #ffffff, #f0f0f0)",
          borderRadius: "10px",
        }}
      >
        {/* Page 1 */}
        <Page number="1">
          <p className="text-[#101828] font-semibold text-left text-[6px] md:text-[30px] lg:md:text-[20px] mt-2 md:mt-0 leading-2 sm:leading-9 font-book-antiqua">
            Context before currency,{" "}
            <span className="text-[#EC8000]">Planet before profits</span>
          </p>
          <div>
            <p className="text-[#475467] text-left font-normal text-[4.3px] md:text-[15px] md:text-[15px] leading-2 sm:leading-7 md:leading-5 xl:leading-7 2xl:leading-8 font-inknutAntiqua mt-4">
              A cosmic satellite observing Sapiens on Earth would certainly
              admit we have progressed leaps and bounds in eliminating
              existential threats and pushing the envelope of our consciousness.
              From developing language to communicate mythical tales of imagined
              orders now known as culture to establishing settled societies
              because of agriculture, we have propelled ourselves to the top of
              the food chain like a rocket on a geological time scale. Our
              neocortical abilities have enabled us to take complex actions in
              large-scale cooperation frameworks (religion, economy, and
              politics), decode phenomena around us, and harness the power of
              resources due to which we have largely bypassed our biological
              limitations and succeeded in hosting over 7 billion of us on
              Earth. The sapiens design coupled with Earth&apos;s resources and
              its presence in the goldilocks zone has created a realm of endless
              possibilities where we are only{" "}
              <span className="text-[#EC8000] font-semibold">
                limited by our imagination and boundaries of science.
              </span>
            </p>
          </div>
        </Page>

        {/* Page 2 - Image Content */}
        <Page number="2">
  <div className="p-2 mb-1 sm:mb-6 sm:p-3">
    <div className="h-[200px] sm:h-[200px] lg:h-[300px] sm:mb-4 mt-2 sm:mt-2 md:mt-8 h-auto mb-2 overflow-hidden">
      <ImageView
        src={jungle}
        alt="Jungle"
        width={1060}
        height={200} 
        className="object-cover"
      />
    </div>
    <div className="mt-4 sm:mt-2 md:mt-0 h-auto overflow-hidden">
      <ImageView
        src={space}
        alt="Space"
        width={1060}
        height={300} 
        className="object-cover"
      />
    </div>
  </div>
</Page>


        {/* Page 3 */}
        <Page number="3">
          <p className="text-[#101828] font-semibold text-left text-[6px] md:text-[28px] leading-2 md:leading-7 font-book-antiqua" style={{ lineHeight: '1.2' }}>
            The recently experienced exponential advances although are not{" "}
            <span className="text-[#EC8000]">decoupled</span> from its{" "} <br />
            <span className="text-[#EC8000]">tradeoffs</span> -
          </p>
          <div className="pt-2">
            <p className="text-[#475467] text-left font-normal mt-0 md:mt-4 text-[5px] md:text-[15px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
              We have sacrificed our connection to the natural world, perceiving
              it as something that can be domesticated by human will (fairly
              succeeded at that too). <br /> <br />
              · Accepted incessant planning for the future as a given since the
              advent of the agricultural revolution. <br /> <br />· Assumed
              invincibility of our species which has been in existence for over
              a couple million years on this earth. The same earth which has had
              5 mass extinctions from 450 million yrs back till date that has
              wiped out between 75-90 percent of species every time. 4 of those
              have been climate change
              <br/> induced.
            </p>
          </div>
        </Page>

        {/* Page 4 - Image Content */}
        <Page number="4">
          <div className="p-0 sm:p-3">
            <div className="md:h-[260px] h-auto rounded-lg ">
              <ImageView
                src={man}
                alt="Man"
                width={960}
                height={260}
                className="object-cover"
              />
            </div>
            <p className="text-[#475467] text-left font-normal md:text-[15px] text-[4.5px] leading-2 sm:leading-7 md:leading-5 mt-2 sm:mt-16 md:mt-8 font-inknutAntiqua">
              The dissonance amongst humanity in recognizing the
              interconnectedness of life and that{" "}
              <b>we are all simply matter processing information differently</b>{" "}
              (whether we got the better bargain in this only time can tell).
              What began with our departure from the hunter/gatherer lifestyle
              has meandered its way to the pervasion of neoliberal thought that
              is assumed for &rsquo;reality&rsquo; in today&rsquo;s time. The
              quote that says it is easier to imagine the end of world than
            </p>
          </div>
        </Page>

        {/* Page 5 */}
        <Page number="5">
          <p className="text-[#475467] text-left font-normal md:text-[15px] text-[5px] leading-2 sm:leading-7 md:leading-5 md:leading-5 font-inknutAntiqua">
            Capitalism has never been more true. It is essential we understand
            that{" "}
            <span className="text-[#EC8000]">
              our current superiority is small parts our effort and in large
              parts serendipity.
            </span>{" "}
            Our perpetual superiority will be large parts effort and small parts
            luck. Hence tread carefully we must as we are yet to find a sign of
            intelligent life absolutely anywhere across the enormously chaotic
            universe we exist in. Even if we do, life as we know it is a
            planetary phenomenon, we will never feel completely at home anywhere
            else in the universe.
          </p>
          {/* <br /> */}
          {/* <br /> */}
          <p className="font-semibold md:text-[28px] mt-2 md:mt-8 text-[6px] leading-2 md:leading-7 font-book-antiqua text-black" style={{ lineHeight: '1.2' }}>
            The aforementioned tradeoffs or shifts in perception have now come
            seeking reparations. The Anthropocene era characterized by -
            {/* <br /> */}
            {/* <br /> */}
          </p>
          <p className="text-[#475467] text-left font-normal mt-2 md:mt-8 md:text-[15px] text-[5px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
            · Our unrestrained extraction of the decayed plant and animal matter
            converted to fuel over hundreds of millions of years being exposed
            to the atmosphere in a matter of mere centuries.
          </p>
        </Page>

        {/* Page 6 - Image Content */}
        <Page number="6">
          <div className="p-3">
            <p className="text-[#475467] text-left font-normal md:text-[15px] text-[5px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
              · Our unhindered destruction of thriving natural ecosystems for
              raw materials, grazing and agriculture. 
              <p className="mt-1 md:mt-4"> · Our infusion of deadly chemicals into the soil, air and water
                for intensifying agricultural output. </p>
             <p className="mt-1 md:mt-4"> · Our toxic use and
                throw consumerism for exponential growth. </p>
            </p>
            <div className="md:h-[430px] mt-2 md:mt-6 h-auto  overflow-hidden">
              <ImageView
                src={tree}
                alt="Tree"
                width={960}
                height={290}
                className="object-cover"
              />
            </div>
          </div>
        </Page>

        {/* Page 7 */}
        <Page number="7">
          <p className="text-[#475467] text-left font-normal md:text-[15px] text-[4.5px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
            The massive rise in our standards of living at nature&rsquo;s
            expense has now come claiming the debt in the face of climate
            change. 
            <b>
            {" "} A debt for which we are unable to come up with the necessary
              accounting standards to restructure it as we have done so for our
              economies.{" "}
            </b>
            A debt that is topped with air pollution, land degradation,
            plastification of oceans, biodiversity loss, mounting landfills and
            freshwater depletion.
            <p className="mt-2 md:mt-4">
            The onslaught of major environmental issues is a reflection of the
            deep systemic fault lines that exist within our ideology of
            sustaining life currently and it is nature&rsquo;s way of returning
            the favor we have so dearly bestowed upon it in recent times.
            </p>
            <p className="mt-2 md:mt-4">
            Climate change is more of an umbrella term to describe the various
            repercussions that a warming earth can have. From raging wildfires,
            rising sea levels, floods and droughts, intensified cyclones,
            widespread hunger, unbearable temperatures to unbreathable air.
            These elements of chaos are fully capable of making the COVID
            pandemic feel like a ripple in a tsunami. Waves of which we have
            already
            </p>
          </p>
        </Page>

        {/* Page 8 */}
        <Page number="8">
          <p className="text-[#475467] text-left font-normal md:text-[15px] text-[5px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
            Begun witnessing and these consequences are still simply what is
            within our scope of comprehension, <b> unforeseen feedback loops are the
            icing on the proverbial multi-layered climate change cake.</b>
          </p>{" "}
          <p className="font-semibold mt-2 md:mt-6 md:text-[28px] text-[5px] leading-2 sm:leading-7 md:leading-5 font-book-antiqua text-black" style={{ lineHeight: '1.2' }}>
            The onslaught of major environmental issues is a <br /> reflection of the
            deep systemic <br /> fault lines that exist within our ideology of
            sustaining life currently.
            <br />
            <br />
          </p>
          <p className="text-[#475467] text-left font-normal md:text-[15px] text-[5px] leading-2 sm:leading-7 md:leading-5 md:leading-5font-inknutAntiqua">
            Also before we begin to rationalize climate changes on geological
            timelines it behooves us to keep in mind that there weren&rsquo;t
            over 7 going to 9 billion humans breathing on this planet to face
            its aftermath in the past. While the fruits of development have been
            unevenly distributed, the perils of climate change too are unevenly
            distributed. 
          </p>{" "}
          <p className="text-[#475467] text-left mt-1 sm:mt-4 font-normal md:text-[15px] text-[5px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">It is now a commonly accepted premise that section</p> 
        </Page>

        {/* Page 9 */}
        <Page number="9">
          <p className="text-[#475467] text-left font-normal md:text-[15px] text-[4.5px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
            The part of humanity that is largely responsible for the predicament
            at hand is also better equipped to deal with the problem while the
            lower rungs of society will be left gasping as usual. Un/Fortunately
            cyclones, fires, viruses, and floods don&rsquo;t comprehend rich and
            poor neighborhoods, all are equally eligible for the trials and
            tribulations served by the natural world.
            <br />
            Since we all (some more than others) have our un/conscious
            contributions towards the creation of this climate disaster, we need
            to address the climate disaster collectively (some more than
            others). Surely in retrospect we don&rsquo;t want to realize that
            all the while we were{" "}
            <b>
              {" "}
              focused on aiming for the sky that we were actually digging our
              graves.{" "}
            </b>{" "}
            Earth has provided more than our wildest dreams could ask for and
            continues to do so, but progress of humanity on earth with deeper
            strides in technological innovation, higher standards of living, and
            becoming a multi-planetary species is truly only possible when the
            environment is conducive towards it. Not when every action
            undertaken to date by 21st-century humans is in direct detriment of
            the planet we inhabit.
          </p>
        </Page>

        {/* Page 10 */}
        <Page number="10">
          <p className="text-[#475467] text-left font-normal md:text-[15px] text-[4.8px] leading-2 sm:leading-7 md:leading-5 font-inknutAntiqua">
            Although we see governments and corporates try to take
            &rsquo;bold&rsquo; action to ward off the worst of climate change,
            it&rsquo;s like Einstein said - it is not possible to solve a
            problem from the same level of frequency that created it. Just like
            a web3 world cannot be created with a web2 business model, the
            Solarpunk paradigm cannot be established with the current
            socio-economic framework. <br />
            <p className="mt-1 md:mt-4">
              It is in the spirit of addressing the concerns holistically that
              SolarpunkDAO has conceptualized{" "}
              <span className="text-[#EC8000]">$Earth. </span>
              Recognizing that the problems have come from the separation of
              environment and economy and that for Sapiens to thrive, a
              <span className="text-[#EC8000]">
                synergistic relationship between ecology and economy is essential.{" "}
              </span>
              Given the systemic nature of the climate change problem, addressing
              them also addresses several other problems in our society. <br />
            </p>
            <p className="text-[#EC8000] mt-1 md:mt-5">
              While the economy is futile without ecology, ecology is absolutely
              fine without the economy.{" "}
            </p>
            <b> Creating resonance between the two is the only way forward.</b>
          </p>
        </Page>
      </HTMLFlipBook>
      </div>
    </>
  );
}

export default FlipBook;
