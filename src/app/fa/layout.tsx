import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "WP Statistics - آنالیز وردپرس با حفظ حریم خصوصی",
  description:
    "آمار بازدیدکنندگان سایت وردپرسی خود را بدون اشتراک‌گذاری داده با سرویس‌های خارجی مشاهده کنید. متن‌باز، رایگان و سازگار با GDPR.",
  keywords: [
    "آنالیز وردپرس",
    "افزونه آمار وردپرس",
    "WP Statistics فارسی",
    "آمار بازدید سایت",
    "افزونه رایگان وردپرس",
    "آنالیز بدون کوکی",
  ],
  openGraph: {
    title: "WP Statistics - آنالیز وردپرس با حفظ حریم خصوصی",
    description:
      "آمار بازدیدکنندگان سایت وردپرسی خود را بدون نگرانی از حریم خصوصی ببینید.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function FaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={`${vazirmatn.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-vazirmatn), Vazirmatn, Tahoma, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
