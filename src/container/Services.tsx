import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import data from "../constants/data";

export default function Services() {
  const services = data.services;
  const [gridStyles, setGridStyles] = useState({});

  useEffect(() => {
    const updateGridStyles = () => {
      if (window.innerWidth <= 767) {
        setGridStyles({
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateAreas: `
            "title"
            "service1"
            "service2"
            "service3"
          `,
        });
      } else if (window.innerWidth <= 1024) {
        setGridStyles({
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: `
            "title service1"
            "service2 ."
            ". service3"
          `,
        });
      } else {
        setGridStyles({
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateAreas: `
            "title . service1 ."
            ". service2 . service3"
          `,
        });
      }
    };

    updateGridStyles();

    window.addEventListener("resize", updateGridStyles);

    return () => window.removeEventListener("resize", updateGridStyles);
  }, []);

  // const style = {
  //   display: "grid",
  //   gridTemplateAreas: isDesktop
  //     ? `
  //         "title . service1 ."
  //         ". service2 . service3"
  //       `
  //     : `
  //         "title service1"
  //         "service2 ."
  //         ". service3"
  //       `,
  //   gridTemplateColumns: isDesktop
  //     ? "repeat(4, minmax(0, 1fr))"
  //     : "repeat(2, minmax(0, 1fr))",
  // };

  const styleTitle = {
    gridArea: "title",
  };

  return (
    <section
      style={gridStyles}
      className="gap-10 order-1 desktop:py-36 mobile:grid-cols-1 gap-x-10 mt-20 py-[104px] desktop:px-10 tablet:px-[30px] px-5"
    >
      <h2
        style={styleTitle}
        className="font-playfairDisplay text-4xl md:text-5xl lg:text-6xl leading-[100%] text-start text-secondary"
      >
        Explore Our Luxe Treats
      </h2>

      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
}
