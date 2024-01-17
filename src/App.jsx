import Card from "./Components/Card";
import Banner from "./Components/Banner";
import Projects from "./Content/Projects.json";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Banner />
      <Element name="Scroll here"></Element>
      <div className="grid-container main">
        {Projects.map((project) => {
          return (
            <div class="grid-item">
              <Card
                className="card"
                title={project.title}
                link={project.link}
                imgLink={project.imgLink}
              >
                <p>{project.text}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
