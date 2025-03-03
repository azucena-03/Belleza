import images from "../constants/images";
import { Testimonials } from "../types";

type TestimonialCardProps = {
  testimonial: Testimonials;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, testimonial: story } = testimonial;

  const renderStarts = () => {
    const starts = [];
    for (let i = 0; i < 5; i++) {
      starts.push(<img src={images.smallStar} />);
    }
    return starts;
  };

  return (
    <div className="flex flex-col font-Karla text-base md:text-xl lg:text-2xl col-span-2 border-2 border-black">
      <div className="flex gap-x-2 justify-end border-b-2 border-black p-5">
        {renderStarts()}
      </div>
      <h3 className="uppercase p-5 border-t-2 border-black order-1">{name}</h3>
      <p className="text-primary bg-secondary py-10 px-5 grow">{story}</p>
    </div>
  );
}
