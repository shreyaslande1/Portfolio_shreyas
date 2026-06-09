import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="section-page">
        <About />
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
