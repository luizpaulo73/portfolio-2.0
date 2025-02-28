"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export default function LinkProject(props: {link: string}) {

    const t = useTranslations("ProjectPage");

  return (
    <Link href={props.link} target="_blank" className="text-stone-200 mt-5 sm:text-lg md:text-xl underline hover:text-blue-500 duration-300 text-center">{t("link")}</Link>
  )
}
