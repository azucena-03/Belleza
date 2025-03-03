import images from "../constants/images";

export default function JoinUs() {
  return (
    <section className="grid desktop:grid-cols-4 tablet:grid-cols-2 gap-10 gap-y-[30px] desktop:px-10 tablet:px-[30px] px-5 desktop:py-36 py-[144px]">
      <h2 className="font-playfairDisplay text-4xl md:text-5xl lg:text-6xl leading-[100%] text-secondary desktop:order-3 tablet:col-start-2 text-end desktop:col-start-4 desktop:text-start">
        Join Our <br /> Inspiring <br /> Sisterhood
      </h2>
      <img
        src={images.joinUs}
        className="desktop:col-start-2 desktop:col-end-4 border-2 justify-self-center border-black desktop:order-2 col-span-full w-fill-available"
      />
      <p className="font-Karla text-base md:text-xl lg:text-2xl desktop:text-end self-end desktop:order-1 col-span-full desktop:col-span-1">
        Come join our empowering community of women. While we don't have an
        online crew, swing by our center to dive into a world of shared tips,
        experiences, and heaps of encouragement
      </p>
    </section>
  );
}
