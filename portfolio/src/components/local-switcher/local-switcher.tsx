"use client";

import { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import brazil from "@/img/flags/brazil.jpg";
import usa from "@/img/flags/usa.png";

export default function LocalSwitcher() {
  const t = useTranslations("LangSwitch");

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="relative inline-block my-auto font-semibold">
      <label className="rounded flex items-center py-1 bg-zinc-950">
        <Image
          src={localActive === "pt-br" ? brazil : usa}
          alt="Bandeira"
          width={24}
          height={16}
          className="rounded mr-2"
        />
        <select
          defaultValue={localActive}
          className="bg-zinc-950 py-1 focus:outline-none"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="pt-br">{t("portuguese")}</option>
          <option value="en">{t("english")}</option>
        </select>
      </label>
    </div>
  );
}

