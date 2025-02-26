import Link from "next/link";
import LocalSwitcher from "../local-switcher/local-switcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex justify-center max-w-fit mx-auto p-2 text-stone-200 border border-zinc-500 rounded-lg mt-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center items-center gap-6 font-bold">
          <li><Link href={""}>{t("home")}</Link></li>
          <li><Link href={""}>{t("projects")}</Link></li>
          <li><Link href={""}>{t("about")}</Link></li>
          <li><Link href={""}>{t("contact")}</Link></li>
          <li><LocalSwitcher /></li>
        </ul>
      </nav>
    </header>
  );
}
