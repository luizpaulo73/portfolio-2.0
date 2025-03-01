/* eslint-disable */

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Header from "@/components/Header/Header";
import ParticlesComponent from "@/components/Particles/Particles";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Luiz Paulo - Portfolio",
  description: "Desenvolvedor Full Stack com experiência em Next.js, React, TypeScript, Java, Python e SQL. Portfólio com projetos modernos, interfaces responsivas e foco em desempenho. Confira meus trabalhos!",
  icons: {
    icon: "/favicon.ico"
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="font-raleway antialiased bg-zinc-950">
        <NextIntlClientProvider messages={messages}>
          <ParticlesComponent id="particles" />
          <Header />
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}