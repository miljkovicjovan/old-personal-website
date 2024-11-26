import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "react-bootstrap";

export default function Contact() {
    return (
        <Stack id="contact" className="py-5 bg-dark text-light px-5 justify-content-around align-items-center">
            <h1>Contact Me</h1>
            <Stack direction="horizontal" gap={5} className="align-self-center mt-2">
                <a href="https://www.linkedin.com/in/miljkovicj/" target="_blank" rel="noreferrer"><FontAwesomeIcon color="#0072b1" size="2x" icon={faLinkedin} /></a>
                <a href="https://github.com/miljkovicjovan" target="_blank" rel="noreferrer"><FontAwesomeIcon color="#967bb6" size="2x" icon={faGithub} /></a>
                <a href="https://twitter.com/miljkoviccjovan" target="_blank" rel="noreferrer"><FontAwesomeIcon color="#1DA1F2" size="2x" icon={faXTwitter} /></a>
            </Stack>
        </Stack>
    );
}