import Image from "next/image";

import { contacts } from "@/data/Contact";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations("Footer")

  return (
    <footer className="z-10 relative bg-zinc-950 pt-20 flex flex-col items-center">
        <div className="container border flex flex-col sm:flex-row sm:items-center gap-5 justify-between border-t-zinc-600 border-r-zinc-600 border-l-zinc-600 border-b-transparent py-4 px-2 sm:px-4 rounded-lg max-w-5xl">
            <div>
              <h1 className="text-stone-200 text-2xl font-bold">{t("contact")}</h1>
              <div className="flex flex-col gap-5 mt-5">
                {contacts.map((info) => (
                  <Link href={info.link} key={info.id} className="flex items-center gap-2 ">
                    <Image src={info.image} alt={info.name} className="w-7 h-auto"/>
                    <h2 className="text-stone-200 text-sm font-semibold hover:text-blue-500 duration-300">{info.name}</h2>
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-stone-300/70">
              <h2>Luiz Paulo</h2>
              <p>&copy; {new Date().getFullYear()} | {t("rights")}</p>
            </div>
        </div>
    </footer>
  )
}
