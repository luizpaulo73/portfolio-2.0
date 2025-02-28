import { projects } from "@/data/Projects"
import Image from "next/image";
import Link from "next/link";
import TitleProject from "../TitleProject/TitleProject";
import LinkProject from "../LinkProject/LinkProject";
import DescProject from "../DescProject/DescProject";

export default async function ProjectComponent(props: {project: string}) {

  const project = (await props).project

  const projectData = projects.find(p => p.urlName === project);
  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <section className="relative z-10 overflow-x-hidden pt-28 flex flex-col items-center px-2 container mx-auto max-w-5xl">
      <div>
        <h1 className="text-stone-200 text-[40px] lg:text-6xl text-center font-extrabold md:mt-8">{projectData.name}</h1>
      </div>
        <div className="bg-[#1A1A1A] p-4 border border-zinc-600 rounded-lg mt-4 w-full flex flex-col items-center">
          <Link href={projectData.link} target="_blank">
            <Image src={projectData.pcImage} alt="Projeto Pc"/>
          </Link>
          <TitleProject />
          <DescProject pt={projectData.longDescPt} en={projectData.longDescEn}/>
          <div className="flex flex-wrap gap-1">
            {projectData.technologies.map((tech) => (
              <p key={tech.name} className="text-xs xl:text-base 2xl:text-lg text-black bg-zinc-500 max-w-fit p-1 rounded-lg hover:text-blue-500 hover:bg-zinc-900 duration-300">{tech.name}</p>
            ))}
          </div>
            <LinkProject link={projectData.link}/>
        </div>
    </section>
  )
} 