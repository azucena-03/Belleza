import QuestionCard from "../components/QuestionCard";
import data from "../constants/data";

export default function Faqs() {
  const faqs = data.questions;
  return (
    <section className="grid desktop:grid-cols-4 tablet:grid-cols-2 desktop:gap-10 gap-[30px] desktop:py-36 py-[104px] desktop:px-10 tablet:px-[30px] px-5">
      <h2 className="font-playfairDisplay text-secondary text-4xl md:text-5xl lg:text-6xl leading-[100%] text-end col-span-full">
        Got <br /> Questions?
      </h2>

      {faqs.map((faq) => (
        <QuestionCard key={faq.id} faq={faq} />
      ))}
    </section>
  );
}
