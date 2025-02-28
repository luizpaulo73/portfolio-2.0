"use client"

import { useTranslations } from "next-intl"

export default function TitleProject() {
    const t = useTranslations("ProjectPage");

  return (
    <h2 className="text-stone-200 text-2xl md:text-3xl xl:text-4xl pt-4">{t("title")}</h2>
  )
}
