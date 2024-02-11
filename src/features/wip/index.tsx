import { Stack } from "react-bootstrap";

export default function WorkInProgress() {
    return (
        <Stack className="py-5 bg-dark text-light align-items-center">
            <h1 className="text-decoration-underline">Website under development...</h1>
            <iframe src="https://giphy.com/embed/2AF5KbIaGVA36ZkiAm" width="480" height="341"></iframe>
        </Stack>
    );
}