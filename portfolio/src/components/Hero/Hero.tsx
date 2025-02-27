import Image from "next/image";
import Link from "next/link";

import download from "@/img/icons/download.png";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");

  return (
    <section className="h-[100vh] relative flex items-center justify-center text-center">
      <div className="flex flex-col max-w-5xl gap-5 items-center z-10 rounded-full">
        <p className="text-stone-200 font-bold text-sm md:text-xl">📍 {t("local")}</p>
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold flex flex-col">
          <span>{t("title")}{" "}</span>
          <span className="text-blue-500">{"<Luiz><Paulo />"}</span>
        </h1>
        <p className="text-stone-200/70 text-sm md:text-base">{t("description")}</p>
        <nav>
            <ul className="flex text-stone-200 font-bold items-center gap-2 sm:gap-5">
                <li><Link href={""} className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 duration-300 text-sm sm:text-base">LinkedIn</Link></li>
                <li><Link href={""} className="bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 duration-300 text-sm sm:text-base">GitHub</Link></li>
                <li>
                    <a href="/docs/cv.pdf" download={t("archiveName")} className="flex items-center gap-1 sm:gap-2 hover:scale-105 duration-300 text-sm sm:text-base">
                        <Image src={download} alt="Download CV" className="w-6 sm:w-8"/><p>{t("downloadButton")}</p>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    </section>
  );
}