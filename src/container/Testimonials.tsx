import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";
import data from "../constants/data";

export default function Testimonials() {
  const testimonials = data.testimonials;
  return (
    <section className="grid desktop:grid-cols-4 grid-cols-2 gap-10 desktop:py-36 py-[104px] desktop:px-10 tablet:px-[30px] px-5">
      <h2 className="font-playfairDisplay text-secondary text-4xl md:text-5xl lg:text-6xl leading-[100%] col-span-2">
        Client <br /> Stories
      </h2>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
      <Button>Tell Us Your Story</Button>
    </section>
  );
}
