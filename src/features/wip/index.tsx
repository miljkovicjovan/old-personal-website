import { Stack } from "react-bootstrap";

export default function WorkInProgress() {
    return (
        <Stack id="wip" className="py-5 bg-dark text-light align-items-center">
            <h3 className="text-decoration-underline">Website under development...</h3>
            <iframe src="https://giphy.com/embed/2AF5KbIaGVA36ZkiAm" width="240" height="170"></iframe>
        </Stack>
    );
}