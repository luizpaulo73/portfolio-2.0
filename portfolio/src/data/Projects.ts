import { StaticImageData } from "next/image";

import java from "@/img/logos/java.png";
import next from "@/img/logos/next.png";
import oracle from "@/img/logos/oracle.png";
import python from "@/img/logos/python.png";
import react from "@/img/logos/react.png";
import tailwind from "@/img/logos/tailwind.png";
import ts from "@/img/logos/ts.png";
import polipratik from "@/img/projects/polipratik.png";
import verdi from "@/img/projects/verdi.png";

type Technology = {
    name: string;
    image: string | StaticImageData;
};

type TypeProjects = {
    id: number;
    name: string;
    urlName: string;
    image: string | StaticImageData;
    descriptionPt: string;
    descriptionEn: string;
    technologies: Technology[];
    link: string;
};

export const projects: TypeProjects[] = [
    {
        id: 1,
        name: "Verdí",
        urlName: "verdi",
        image: verdi,
        descriptionPt: "Site desenvolvido para o Trabalho semestral da FIAP",
        descriptionEn: "Website developed for the FIAP semester project",
        technologies: [
            { name: "Next.js", image: next },
            { name: "TypeScript", image: ts },
            { name: "Tailwind", image: tailwind },
            { name: "Oracle SQL", image: oracle },
            { name: "Python", image: python }
        ],
        link: "https://verdi-tau.vercel.app/",
    },
    {
        id: 2,
        name: "PolipratiK",
        urlName: "polipratik",
        image: polipratik,
        descriptionPt: "Site desenvolvido para a empresa PolipratiK.",
        descriptionEn: "Website developed for PolipratiK company.",
        technologies: [
            { name: "React", image: react },
            { name: "TypeScript", image: ts },
            { name: "Tailwind", image: tailwind }
        ],
        link: "https://polipratik.com.br/",
    }
];
