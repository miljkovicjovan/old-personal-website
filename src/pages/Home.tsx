import Navigation from "../features/navigation";
import About from "../features/about";
import Experience from "../features/experience";
import WorkInProgress from "../features/wip";
import Contact from "../features/contact";
import { Accordion, Button } from "react-bootstrap";

export default function App() {
  const message = (
    <>
      It’s currently under development, but you can be the first to know when it goes live!
      <br />
      Click the button below to subscribe for notifications and stay updated on the launch!
    </>
  );
  return (
    <>
      <Navigation/>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>I’m working on a brand-new website that will feature my latest blog posts, projects, and more.</Accordion.Header>
        <Accordion.Body>
          <p>{message}</p>
          <a href="https://miljkovicjovan.substack.com" target="_blank" className="btn btn-dark" role="button">Get Notified</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      <About/>
      <Experience/>
      <WorkInProgress/>
      <Contact/>
    </>
  );
}