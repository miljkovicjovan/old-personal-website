import { Button, Stack } from "react-bootstrap";

function About() {
    return (
        <Stack id="about" className="mt-5 px-5 flex-lg-row justify-content-around">
            <Stack className="px-0 px-sm-5 col-lg-3 col-12">
                <img width="200" height="200" className="rounded-circle mb-3" 
                src="https://avatars.githubusercontent.com/u/77690201?v=4" alt="Profile of Jovan Miljkovic"/>
                <h2>I'm Jovan Miljkovic</h2>
                <h5>Full-Stack Developer, based in Serbia</h5>
            </Stack>
            <Stack className="px-0 px-sm-5 col-lg-6 col-12 mt-5 mt-lg-0 align-self-center">
                <h1>Learner, developer, and enthusiast immersed in the realms of both timeless and cutting-edge technologies.</h1>
                <Stack direction="horizontal" gap={2}>
                    <Button variant="dark">My Work</Button>
                    <Button variant="dark">My Blog</Button>
                    <Button variant="secondary">Contact Me</Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
  
export default About;