import {
  AboutUs,
  Faqs,
  Footer,
  Header,
  JoinUs,
  Message,
  Services,
  Testimonials,
} from "./container";
import Marquee from "./container/Marquee";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <AboutUs />
      <div className="flex flex-col">
        <Marquee />
        <Services />
      </div>
      <JoinUs />
      <Testimonials />
      <Faqs />
      <Message />
      <Footer />
    </main>
  );
}

export default App;
