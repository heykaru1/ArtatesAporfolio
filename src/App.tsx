import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Sidebar />
        <main className="col-md-9 p-4">
          <Experience />
          <Education />
          <Projects />
          <Certifications />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
