import Close from "./Close/page";
import Customer from "./Customer/page";
import Features from "./Features/page";
import Hero from "./Hero/page";
import Pricing from "./Pricing/page";
import Testimonial from "./Testimonial/page";
import SuscriptionPage from "./suscription/page";

export default function Main() {
  return (
    <main role="main">
      <Hero />
      <Customer />
      <Features />
      <Pricing />
      <Testimonial />
      <Close />
      <SuscriptionPage />
    </main>
  );
}
