import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import About from "../components/About";
import Promotion from "../components/Promotion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hard Web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="HardWeb, IT xizmatlari, Sayt yasash, Saytga zakaz berish"
        />
        <meta
          name="description"
          content="Hardweb IT xizmatlarini taklif qiladi. Sayt yasash dizayn yasash,seo optimization.Hardweb предлагает ИТ-услуги.Создание сайта, дизайн,seo оптимизация."
        />
        <meta
          name="keywords"
          content="Site,sites, sayt yasash, IT, IT xizmatlari, Telegram bot yasash, Bot, Dizayn chizish, HardWeb, Сайт, сайты, создание сайтов, ИТ, ИТ услуги, Создание Telegram бота, Бот, Дизайн-чертеж, HardWeb,Site, sites, site creation, IT, IT services, Telegram bot creation, Bot, Design drawing, HardWeb,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="0.1 days" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <About />
        <Promotion />
      </main>
    </>
  );
}
