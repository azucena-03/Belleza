import Button from "../components/Button";
import images from "../constants/images";

export default function Header() {
  return (
    <header className="bg-header bg-no-repeat isolate bg-cover w-fit desktop:w-auto">
      <div>
        <div className="relative after:absolute after:inset-0 after:z-[-1] after:bg-rose-100 after:mix-blend-multiply">
          <div className="relative after:absolute after:inset-0 after:z-[-1] after:bg-gray-400 after:mix-blend-multiply grid desktop:grid-cols-4 tablet:grid-cols-2 gap-y-60 desktop:p-10 tablet:p-[30px] p-5">
            <img
              src={images.logo}
              alt="Belleza logo"
              className="desktop:col-start-2 col-span-2 justify-self-center"
            />
            <h1 className="col-span-full text-center text-primary font-playfairDisplay fonfont-bold text-7xl md:text-8xl lg:text-9xl capitalize">
              Women's wellness haven
            </h1>
            <Button>Let's Chat</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
