import images from "../constants/images";

export default function AboutUs() {
  return (
    <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 gap-x-10 desktop:px-10 tablet:px-[30px] px-5 gap-y-[30px]  desktop:py-36 py-[104px]">
      <h2 className="font-playfairDisplay text-4xl md:text-5xl lg:text-6xl leading-[100%] desktop:text-end text-secondary col-span-full desktop:col-span-1">
        Our <br />
        Story
      </h2>
      <img
        src={images.aboutUs}
        className="desktop:col-start-2 desktop:col-end-4 border-2 border-black justify-self-center col-span-full w-fill-available"
      />
      <p className="font-Karla text-base md:text-xl lg:text-2xl desktop:text-start text-end self-end col-span-full desktop:col-start-4">
        At Belleza, we're more than a wellness center; we're a sanctuary for
        holistic beauty and well-being. Founded with a mission to help you feel
        radiant inside and out, we offer a range of luxurious services and
        workshops tailored to rejuvenate and uplift you.
      </p>
    </div>
  );
}
