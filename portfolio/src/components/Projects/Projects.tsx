import { projects } from "@/data/Projects";
import Image from "next/image";
import Link from "next/link";

import externalLink from "@/img/icons/external-link.png";

export default function Projects() {
  return (
    <section className='bg-zinc-950 relative pt-10'>
        <div className="container mx-auto">
            <div className="mx-3 lg:mx-0 xl:max-w-5xl xl:mx-auto">
                <h1 className='text-stone-200 font-bold text-2xl md:text-3xl xl:text-4xl my-4'>Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                    {projects.map((info) => (
                        <div key={info.id} className="mx-auto bg-[#1A1A1A] flex flex-col items-center w-full p-4 rounded-lg border border-zinc-600 hover:border-blue-500 duration-300">
                            <Image src={info.image} alt={info.name} className="w-11/12 max-w-72 mb-4"/>
                            <Link href={info.link} className='text-stone-200 text-left w-full font-bold text-lg md:text-2xl flex gap-2 items-center'><p>{info.name}</p><Image src={externalLink} alt="Link" className="h-4 md:h-5 w-auto"/></Link>
                            <p className="text-stone-200/70 text-left w-full text-sm md:text-base">{info.descriptionEn}</p>
                            <div className="grid grid-cols-3 sm:grid-cols-5 w-full gap-4 mt-4">
                                {info.technologies.map((tech, index) => (
                                    <div key={index} className="flex flex-col items-center gap-1">
                                        <Image src={tech.image} alt={tech.name} className="w-8 md:w-12 lg:w-11"/>
                                        <p className="text-stone-200 text-xs md:text-sm">{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href={info.link}></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
