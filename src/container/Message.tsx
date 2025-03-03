import images from "../constants/images";

export default function Message() {
  return (
    <section className="grid grid-cols-4 gap-10 desktop:py-36 py-[104px] desktop:px-10 tablet:px-[30px] px-5">
      <img
        src={images.star}
        alt="start"
        className="col-span-2 col-start-2 justify-self-center"
      />
      <h3 className="font-playfairDisplay text-5xl md:text-6xl lg:text-8xl leading-[100%] text-secondary col-span-full text-center">
        Come experience the uplifting spirit of Belleza, where women support
        each other every day. Join our welcoming community and let's shine
        together.
      </h3>
      <img
        src={images.star}
        alt="start"
        className="col-span-2 col-start-2 justify-self-center"
      />
    </section>
  );
}
