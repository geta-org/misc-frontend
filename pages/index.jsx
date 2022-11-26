import Head from "next/head"
import Image from "next/future/image"
import LogoMisc from "../public/MiscLogos/MiscWebLogoPreta.jpg"
import lgMisc from "./home"

export default function Index() {
  return (
    <>
      <Head>
        <title>MiscWeb</title>
        <link rel="icon" href="/Outros/favicon.ico" />
      </Head>
      <main className="container">
        <nav>
          <ul>
            <a className="pagina">Pressione a imagem para entrar:</a>
            <div>
              <a href="/home">
                <Image
                  src={LogoMisc}
                  style={lgMisc}
                  alt="Logo do MiscWeb"
                  sizes="100%"
                />
              </a>
            </div>
          </ul>
        </nav>
      </main>

      <style jsx>{`
        .container {
          background: #000;
        }
        .pagina {
          width: auto;
          height: auto;
          position: center;
          left: 350px;
          font-size: 70px;
          font-weight: 700;
          background: #ffffffff;
          top: 1155px;
        }
      `}</style>
    </>
  )
}