import { Service } from "../types";
type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const { id, title, image, description } = service;

  const styleService = {
    gridArea: `service${id}`,
  };

  return (
    <div style={styleService} className="flex flex-col font-Karla text-base md:text-xl lg:text-2xl ">
      {" "}
      <h3 className="uppercase font-medium">{title}</h3>
      <img src={image} alt="service" className="my-3 border-2 border-black" />
      <p>{description}</p>
    </div>
  );
}
