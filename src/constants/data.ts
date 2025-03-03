import { Question, Service, Testimonials } from "../types";
import images from "./images";

const services: Service[] = [
  {
    id: 1,
    title: "Natural Beauty Facials",
    image: images.service01,
    description:
      "Indulge in our organic facials, crafted to nourish your skin and leave you with a radiant, healthy glow.",
  },
  {
    id: 2,
    title: "Holistic Skincare Therapies",
    image: images.service02,
    description:
      "Experience personalized skincare treatments blending ancient wisdom with modern techniques, ensuring your skin feels and looks amazing.",
  },
  {
    id: 3,
    title: "Wellness Workshops",
    image: images.service03,
    description:
      "Educational workshops on various wellness topics, such as mindfulness, stress management, and self-care.",
  },
];

const testimonials: Testimonials[] = [
  {
    id: 1,
    name: "Sarah",
    testimonial:
      "Belleza is my haven for self-care. Their skincare treatments are pure magic, and the vibe is always so uplifting.",
  },
  {
    id: 2,
    name: "Jessica",
    testimonial:
      "Such a gem for wellness! The skincare treatments are top-notch, and the vibe is always so positive",
  },
  {
    id: 3,
    name: "Emily",
    testimonial:
      "Belleza's workshops are a game-changer! They've empowered me to embrace my skin and feel unstoppable.",
  },
  {
    id: 4,
    name: "Lily",
    testimonial:
      "Absolutely love the workshops! They've not only improved my skin but also boosted my self-esteem.",
  },
];

const questions: Question[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a range of luxurious services including natural beauty facials,  holistic skincare therapies, and mindful beauty rituals designed to  rejuvenate and pamper you.",
  },
  {
    id: 2,
    question: "What are your opening hours?",
    answer:
      "Our opening hours are Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM.",
  },
  {
    id: 3,
    question: "Do you accept walk-ins or appointments only?",
    answer:
      "We recommend booking an appointment to ensure you receive the full  Belleza experience, but we do welcome walk-ins subject to availability.",
  },
  {
    id: 4,
    question: "Do you have parking available?",
    answer:
      "Yes, we have parking available for our clients to use during their visit.",
  },
];

export default { services, testimonials, questions };
