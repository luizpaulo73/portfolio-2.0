"use client";

import { ChangeEvent, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

import brazil from "@/img/flags/brazil.webp";
import usa from "@/img/flags/usa.webp";

export default function LocaleSwitcher() {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    const newPath = `/${nextLocale}${pathname.replace(/^\/(en|pt-br)/, "")}`;

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
      <div className="relative inline-block my-auto font-semibold">
        <label className="rounded flex items-center py-1 bg-zinc-950">
          <Image
            src={localActive === "pt-br" ? brazil : usa}
            alt={localActive === "pt-br" ? "Lingua portuguesa" : "Lingua inglesa"}
            width={24}
            height={16}
            className="rounded mr-2"
          />
          <select
            defaultValue={localActive}
            className="bg-zinc-950 py-1 focus:outline-none cursor-pointer"
            onChange={onSelectChange}
            disabled={isPending}
          >
            <option value="pt-br">Português</option>
            <option value="en">English</option>
          </select>
        </label>
      </div>
  );
}
