import images from "../constants/images";

export default function MarqueeText() {
  return (
    <div className="h-14 flex flex-nowrap">
      <p
        className={`font-playfairDisplay text-5xl text-secondary whitespace-nowrap overflow-visible px-10`}
      >
        Dive into Mindfulness, Stress Management, and Self-Care at Belleza
      </p>
      <img src={images.star} />
    </div>
  );
}
