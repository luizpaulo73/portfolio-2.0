import { StaticImageData } from "next/image";

import linkedin from "@/img/logos/linkedin.png";
import github from "@/img/logos/github.png";
import email from "@/img/logos/email.png";

type TypeContact = {
    id: number;
    name: string;
    link: string;
    image: string | StaticImageData;
};

export const contacts: TypeContact[] = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/luizpaulo73",
        image: linkedin,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/luizpaulo73",
        image: github,
    },
    {
        id: 3,
        name: "Email",
        link: "mailto:luiz.paulo2005@hotmail.com",
        image: email,
    }
]