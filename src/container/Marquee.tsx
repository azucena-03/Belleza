import MarqueeSlider from "react-marquee-slider";
import times from "lodash/times";
import MarqueeText from "../components/MarqueeText";

export default function Marquee() {
  const handleInit = () => {
    console.log("Marquee initialized");
  };

  const handleFinish = () => {
    console.log("Marquee finished");
  };
  return (
    <div className="col-span-full order-2 md:order-1 border-2 border-secondary py-5 desktop:mx-10 tablet:mx-[30px] mx-5">
      <MarqueeSlider
        direction={"rtl"}
        velocity={15}
        scatterRandomly={false}
        resetAfterTries={0}
        onInit={handleInit}
        onFinish={handleFinish}
      >
        {times(2, Number).map((id) => (
          <MarqueeText key={id} />
        ))}
      </MarqueeSlider>
    </div>
  );
}
