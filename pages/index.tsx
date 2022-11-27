import Head from "next/head";
import Image from "next/future/image";
import LogoMisc from "../public/MiscLogos/MiscWebLogoPreta.jpg";

export default function Index() {
  return (
    <>
      <Head>
        <title>MiscWeb</title>
        <link rel="icon" href="/Outros/favicon.ico" />
      </Head>

      <main className="container">
        <Image
          src={LogoMisc}
          alt="Picture of the author"
          width="100%"
          height="100%"
        />
      </main>

      <style jsx>{`
        .container {
        }
      `}</style>
    </>
  );
}

setTimeout(function () {
  window.location.href = "/home";
});
