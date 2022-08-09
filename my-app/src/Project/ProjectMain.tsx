import ProjectNav from "./ProjectNav";
import ProjectBackimage from "./ProjectBackimage";
import ProjectBoxes from "./ProjectBoxes";
import ProjectSlider from "./ProjectSlider";
import ProjectFooter from "./ProjectFooter";

export default function ProjectMain() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface|Poppins" />
    </head>
    <header>
      <ProjectNav />
      <h2><span className="font1">Recipe</span><span className="font2">App</span></h2>
    </header>
    <body>
      <ProjectBackimage />
      <ProjectBoxes />
      <ProjectSlider />
      <ProjectFooter />
    </body>
    </>
  );
}
