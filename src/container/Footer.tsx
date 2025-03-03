import times from "lodash/times";
import images from "../constants/images";
import Marquee from "react-marquee-slider";

export default function Footer() {
  const handleInit = () => {
    console.log("Marquee initialized");
  };

  const handleFinish = () => {
    console.log("Marquee finished");
  };

  return (
    <section className="bg-secondary text-primary desktop:p-10 tablet:p-[30px] p-5">
      <div className="border-2 border-black">
        <div className="grid desktop:grid-cols-4 md:grid-cols-2 place-content-center desktop:gap-10 gap-[30px] border-b-2 border-black p-5">
          <div className="font-playfairDisplay text-base text-center md:text-start md:text-xl lg:text-2xl space-y-[10px] ">
            <p>806-853-4257</p>
            <p>connect@belleza.com</p>
            <p>665 Austen Place Apt. 071</p>
          </div>
          <p className="font-Karla text-base md:text-xl lg:text-2xl md:text-end text-center desktop:col-start-4">
            Copyright © 2024 Belleza <br /> Women's Wellness Center. All rights
            reserved.
          </p>
        </div>
        <div className="py-8">
          <Marquee
            direction={"rtl"}
            velocity={20}
            scatterRandomly={false}
            resetAfterTries={0}
            onInit={handleInit}
            onFinish={handleFinish}
          >
            {times(5, Number).map((id) => (
              <div key={id} className="flex gap-x-9 w-full pl-9">
                <img
                  src={images.whiteStar}
                  alt="start"
                  className="w-10 h-10 my-auto mx-0"
                />
                <img
                  src={images.logo}
                  alt="Belleza's logo"
                  className="max-w-max"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
