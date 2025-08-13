import { StaticImageData } from "next/image";

import linkedin from "@/img/logos/linkedin.webp";
import github from "@/img/logos/github.webp";
import email from "@/img/logos/email.webp";

type TypeContact = {
    id: number;
    name: string;
    alt: string;
    link: string;
    image: string | StaticImageData;
};

export const contacts: TypeContact[] = [
    {
        id: 1,
        name: "LinkedIn",
        alt: "Luiz Paulo's LinkedIn profile",
        link: "https://www.linkedin.com/in/luizpaulo73",
        image: linkedin,
    },
    {
        id: 2,
        name: "GitHub",
        alt: "Luiz Paulo's GitHub repositories",
        link: "https://github.com/luizpaulo73",
        image: github,
    },
    {
        id: 3,
        name: "Email",
        alt: "Send an email to Luiz Paulo",
        link: "mailto:luiz.paulo2005@hotmail.com",
        image: email,
    }
]