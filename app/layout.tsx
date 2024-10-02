import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ZKvote",
  description: "A zero-knowledge voting platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={atkinson.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
