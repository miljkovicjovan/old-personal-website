import { Stack } from "react-bootstrap";

function Hero() {
    return (
        <Stack className="mt-5 ms-5">
            <img width="200" height="200" className="rounded mb-4" 
            src="https://avatars.githubusercontent.com/u/77690201?v=4" alt="Profile of Jovan Miljkovic"/>
            <h1>I'm Jovan Miljkovic</h1>
            <h5>Full-Stack Developer, based in Serbia</h5>
        </Stack>
    );
}
  
export default Hero;