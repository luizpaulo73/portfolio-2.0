import git from "@/img/icons/git.png";
import java from "@/img/icons/java.png";
import next from "@/img/icons/next.png";
import oracle from "@/img/icons/oracle.png";
import python from "@/img/icons/python.png";
import react from "@/img/icons/react.png";
import tailwind from "@/img/icons/tailwind.png";
import ts from "@/img/icons/ts.png";
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