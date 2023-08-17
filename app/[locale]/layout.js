import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {Rubik} from 'next/font/google'

export const rubik = Rubik({
  weight: ['400' , '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Esteban Horn",
  description: "Full Stack developer",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={rubik.className} >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
