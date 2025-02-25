export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  return <html>
        <body>
            {children}
        </body>
      </html>
}
