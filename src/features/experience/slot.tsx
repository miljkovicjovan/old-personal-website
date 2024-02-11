import { Stack } from "react-bootstrap";

type info = {
    title: string, 
    place: string, 
    start: string, 
    end: string,
    img: string
}

export default function Slot({title, place, start, end, img}: info) {
    return (
        <Stack direction="horizontal" className="my-3 p-1 py-3 px-md-4 border border-light rounded">
            <img width="40" height="40" className="rounded-circle align-self-center ms-md-0 ms-3 me-3" 
                src={img} alt="Profile of Jovan Miljkovic"/>
            <Stack className="flex-md-row">
                <Stack>
                    <h5>{title}</h5>
                    <h5 className="fw-bold m-0">{place}</h5>
                </Stack>
                <Stack className="align-self-md-center text-md-end">
                    <p className="m-0 text-nowrap">{start} - {end}</p>
                </Stack>
            </Stack>
        </Stack>
    );
}