import Navigation from "../features/navigation";
import About from "../features/about";
import Experience from "../features/experience";
import WorkInProgress from "../features/wip";
import Contact from "../features/contact";

export default function App() {
  return (
    <>
      <Navigation/>
      <About/>
      <Experience/>
      <WorkInProgress/>
      <Contact/>
    </>
  );
}