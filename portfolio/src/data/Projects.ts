import { StaticImageData } from "next/image";

import next from "@/img/logos/next.png";
import oracle from "@/img/logos/oracle.png";
import python from "@/img/logos/python.png";
import react from "@/img/logos/react.png";
import tailwind from "@/img/logos/tailwind.png";
import ts from "@/img/logos/ts.png";
import polipratik from "@/img/projects/polipratik.png";
import verdi from "@/img/projects/verdi.png";
import polipratikPc from "@/img/projects/polipratik-pc.png";
import verdiPc from "@/img/projects/verdi-pc.png";

type Technology = {
    name: string;
    image: string | StaticImageData;
};

type TypeProjects = {
    id: number;
    name: string;
    urlName: string;
    image: string | StaticImageData;
    pcImage: string | StaticImageData
    descriptionPt: string;
    descriptionEn: string;
    longDescPt: string;
    longDescEn: string;
    technologies: Technology[];
    link: string;
};

export const projects: TypeProjects[] = [
    {
        id: 1,
        name: "Verdí",
        urlName: "verdi",
        image: verdi,
        pcImage: verdiPc,
        descriptionPt: "Site desenvolvido para o Trabalho semestral da FIAP",
        descriptionEn: "Website developed for the FIAP semester project",
        longDescPt: "Uma plataforma digital que incentiva deslocamentos sustentáveis, convertendo quilômetros percorridos em    pontos trocáveis por créditos de carbono. Os usuários podem usar esses créditos para obter descontos em empresas parceiras, promovendo um ciclo de benefícios entre consumidores e empresas.",
        longDescEn: "A digital platform that promotes sustainable transportation by converting traveled kilometers into carbon credits. Users can redeem these credits for discounts at partner companies, creating a cycle of benefits between consumers and businesses.",
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
        pcImage: polipratikPc,
        descriptionPt: "Site desenvolvido para a empresa PolipratiK.",
        descriptionEn: "Website developed for PolipratiK company.",
        longDescPt: "A PolipratiK oferece soluções leves e resistentes para portões e grades, unindo segurança, privacidade e estética. Com mais de 1.200 instalações na Grande São Paulo, se destaca pela inovação em revestimentos de polímero alveolar. Fui responsável pelo desenvolvimento do site oficial, criando uma plataforma moderna e funcional.",
        longDescEn: "PolipratiK offers lightweight and durable solutions for gates and fences, combining security, privacy, and aesthetics. With over 1,200 installations in Greater São Paulo, it stands out for its innovation in alveolar polymer coverings. I was responsible for developing the official website, creating a modern and functional platform.",
        technologies: [
            { name: "React", image: react },
            { name: "TypeScript", image: ts },
            { name: "Tailwind", image: tailwind }
        ],
        link: "https://polipratik.com.br/",
    }
];
