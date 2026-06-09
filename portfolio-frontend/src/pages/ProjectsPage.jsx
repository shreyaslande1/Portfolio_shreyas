import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <section className="section-page">
        <Projects />
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
