"use client";

import { useLocale } from "next-intl";

export default function DescProject(props: {pt: string, en:string}) {

    const locale = useLocale();

  return (
    <p className="text-stone-200/70 text-sm md:text-base my-4">{locale == 'en' ? props.en : props.pt}</p>
  )
}
