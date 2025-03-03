import { Question } from "../types";

type QuestionCardProps = {
  faq: Question;
};

export default function QuestionCard({ faq }: QuestionCardProps) {
  const { id, question, answer } = faq;
  return (
    <div className="flex font-Karla text-base md:text-xl lg:text-2xl col-span-full text-secondary">
      <div className="flex flex-col desktop:flex-card flex-wrapper text-center col-span-2">
        <span className="flex-1 border-b-2 border-r-2 border-black font-playfairDisplay text-[64px] content-center">
          {id}
        </span>
        <div className="flex-1 border-b-2 border-l-2 border-black"></div>
      </div>
      <div className="border-y-2 border-black flex justify-between basis-auto desktop:p-10 p-5 md:p-[30px] border-r-2 md:border-r-0">
        <h3 className="uppercase font-medium desktop:basis-[14%] basis-[50%] pr-[30px]">
          {question}
        </h3>
        <p className="desktop:basis-[80%] pl-[30px]">{answer}</p>
      </div>
      <div className="tablet:flex hidden flex-col desktop:flex-card flex-wrapper text-center col-span-2 ">
        <div className="flex-1 border-y-2 border-r-2 border-black font-playfairDisplay  text-[64px]">
          {" "}
        </div>
        <div className="flex-1 border-l-2 border-black"></div>
      </div>
    </div>
  );
}
