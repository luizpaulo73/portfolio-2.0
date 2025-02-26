import Link from "next/link";
import LocalSwitcher from "../LocalSwitcher/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="bg-zinc-950 absolute right-1/2 translate-x-1/2 flex justify-center max-w-fit mx-auto p-2 sm:p-4 text-sm text-stone-200 border border-zinc-500 rounded-lg mt-5 sm:mt-10 z-10">
      <nav className="container mx-auto">
        <ul className="flex flex-col-reverse sm:flex-row sm:gap-6 justify-center items-center">
          <div className="flex justify-center items-center gap-6 font-semibold">
            <li><Link href={""}>{t("home")}</Link></li>
            <li><Link href={""}>{t("projects")}</Link></li>
            <li><Link href={""}>{t("about")}</Link></li>
            <li><Link href={""}>{t("contact")}</Link></li>
          </div>
          <li><LocalSwitcher /></li>
        </ul>
      </nav>
    </header>
  );
}
