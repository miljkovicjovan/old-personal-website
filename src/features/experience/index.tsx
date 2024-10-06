import { Stack } from "react-bootstrap";
import Slot from "./slot";

export default function Experience() {
    return (
        <Stack className="py-5 bg-dark text-light px-5 flex-xl-row justify-content-around">
            <Stack className="px-0 px-md-5 col-xl-6 col-12">
                <h2 className="m-0">Work Experience</h2>
                <Slot title="Full-Stack Developer & Product Owner" place="Adera (Oslo, Norway)" start="Feb 2024" end="May 2024"
                img="https://media.licdn.com/dms/image/v2/C4D0BAQF9VPE6kvzbsA/company-logo_200_200/company-logo_200_200/0/1631357619540/aderaas_logo?e=1736380800&v=beta&t=d6ocuyEeVgwT_k2HG1zV8vwGYzT-N4Z2erSTBJE5a0M"/>
                <Slot title="Full-Stack Developer" place="Adera (Oslo, Norway)" start="Jan 2023" end="Feb 2024"
                img="https://media.licdn.com/dms/image/v2/C4D0BAQF9VPE6kvzbsA/company-logo_200_200/company-logo_200_200/0/1631357619540/aderaas_logo?e=1736380800&v=beta&t=d6ocuyEeVgwT_k2HG1zV8vwGYzT-N4Z2erSTBJE5a0M"/>
            </Stack>
            <Stack className="px-0 px-md-5 mt-5 mt-xl-0 col-xl-6 col-12">
                <h2 className="m-0">Education</h2>
                <Slot title="Bachelor's of Software and Data Engineering" place="Singidunum University (Belgrade, Serbia)" start="2020" end="2024"
                img="https://pbs.twimg.com/profile_images/1267809191/SINGIDUNUM_400x400.png"/>
            </Stack>
        </Stack>
    );
}