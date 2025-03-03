import Image from "next/image";
import { technologies } from "@/data/Technologies";
import { useTranslations } from "next-intl";

export default function Technologies() {
  const t = useTranslations("Technologies");

  return (
    <section className="relative bg-zinc-950 pt-5 pb-10" id="about">
      <div className="container mx-auto">
          <div className="mx-3 lg:mx-0 xl:max-w-5xl xl:mx-auto">
          <h2 className="text-stone-200 font-bold text-2xl md:text-3xl xl:text-4xl my-4">{t("title")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:max-w-5xl mx-auto">
            {technologies.map((tech) => (
              <div key={tech.id} className="bg-[#1A1A1A] p-2 xl:p-3 flex flex-col sm:flex-row items-center gap-3 xl:gap-4 rounded-md border border-zinc-600 xl:max-w-64 hover:border-blue-500 duration-300">
                <Image src={tech.image} alt={tech.name} className="h-10 w-auto lg:h-12"/>
                <p className="text-stone-200 font-semibold lg:text-lg">{tech.name}</p>
              </div>
            ))}
            </div>
          </div>
      </div>
    </section>
  )
}
