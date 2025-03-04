import Link from "next/link";
import LocalSwitcher from "../LocalSwitcher/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="bg-zinc-950 absolute right-1/2 translate-x-1/2 flex justify-center max-w-fit mx-auto p-2 sm:p-4 text-sm text-stone-200 border border-zinc-500 rounded-lg mt-5 sm:mt-10 z-20">
      <nav className="container mx-auto flex justify-center items-center gap-6">
          <ul className="flex justify-center items-center gap-6 font-semibold">
            <li><Link className="hover:text-blue-500 duration-300" href={"/"}>{t("home")}</Link></li>
            <li><Link className="hover:text-blue-500 duration-300" href={"/#projects"}>{t("projects")}</Link></li>
            <li><Link className="hover:text-blue-500 duration-300" href={"/#about"}>{t("about")}</Link></li>
            <li><Link className="hover:text-blue-500 duration-300" href={"/#contact"}>{t("contact")}</Link></li>
          </ul>
          <LocalSwitcher />
      </nav>
    </header>
  );
}
