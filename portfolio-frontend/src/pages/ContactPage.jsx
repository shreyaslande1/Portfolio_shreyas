import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="section-page">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
