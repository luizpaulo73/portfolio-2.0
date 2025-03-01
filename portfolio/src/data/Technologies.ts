import git from "@/img/logos/git.webp";
import java from "@/img/logos/java.webp";
import next from "@/img/logos/next.webp";
import oracle from "@/img/logos/oracle.webp";
import python from "@/img/logos/python.webp";
import react from "@/img/logos/react.webp";
import tailwind from "@/img/logos/tailwind.webp";
import ts from "@/img/logos/ts.webp";
import { StaticImageData } from "next/image";

type TypeTechnologies = {
    id: number;
    name: string;
    image: string | StaticImageData;
}

export const technologies: TypeTechnologies[] = [
    {
        id: 6,
        name: "React.js",
        image: react,
    },
    {
        id: 3,
        name: "Next.js",
        image: next,
    },
    {
        id: 7,
        name: "TypeScript",
        image: ts,
    },
    {
        id: 8,
        name: "Tailwind",
        image: tailwind,
    } ,
    {
        id: 2,
        name: "Java",
        image: java,
    },
    {
        id: 5,
        name: "Python",
        image: python,
    },
    {
        id: 4,
        name: "Oracle SQL",
        image: oracle,
    },
    {
        id: 1,
        name: "Git",
        image: git,
    }
]