import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.png";
import LogoGETA from "../public/Outros/logoGETA.png";
import Usuarioft from "../public/Outros/usuarioft.jpg";
import LogoSUS from "../public/TelaHome/susHome.png";
import LogoESF from "../public/TelaHome/esfHome.png";
import Acoes from "../public/TelaHome/Acoes.png";
import LogoDrive from "../public/TelaHome/drive.png";
import MiscWebColaboracoes from "../public/TelaHome/miscwebColaboracoes.png";
import SusColaboracoes from "../public/TelaHome/susColaboracoes.png";
import CesupaColaboracoes from "../public/TelaHome/cesupaColaboracoes.png";
import GetaColaboracoes from "../public/TelaHome/getaColaboracoes.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/Outros/favicon.ico" />
      </Head>
      <main className="main">
        <div className="navbar">
          <a href="/sus">
            <div className="susnav">SUS</div>
          </a>
          <a href="/esf">
            <div className="esfnav">Estratégia Saúde da Família</div>
          </a>
          <a href="/acoes">
            <div className="acoesnav">Ações Desenvolvidas</div>
          </a>
        </div>

        <div className="cadastrobar">
          <Button className="btcastatro">Cadastro</Button>
          <Button className="btentrar">Entrar</Button>
        </div>

        <header className="header">
          <div
            style={{
              display: "flex",
              width: "47.1%",
              height: "auto",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <a href="/home">
              <Image alt="Logo MiscWeb" src={LogoMisc} />
            </a>
          </div>
          <div
            style={{
              position: "absolute",
              width: "180px",
              height: "auto",
              left: "15px",
              top: "10px",
            }}
          >
            <Image alt="Logo GETA" src={LogoGETA} />
          </div>
          <div
            style={{
              width: "7%",
              height: "auto",
              position: "absolute",
              left: "1200px",
              top: "10px",
              borderRadius: "8%",
              border: "4px solid white",
            }}
          >
            <Image alt="Imagem Usuário" src={Usuarioft} />
          </div>

          <div className="titulo">
            Sua plataforma de aprendizado digital, para o<br />
            <span className="letracor"> M</span>
            <span className="titulocor">ódulo de</span>
            <span className="letracor"> I</span>
            <span className="titulocor">nteração em</span>
            <span className="letracor"> S</span>
            <span className="titulocor">aúde na</span>
            <span className="letracor"> C</span>
            <span className="titulocor">omunidade</span>
          </div>
        </header>

        <div className="subtitulo">
          Selecione uma das
          <span className="palavrabold"> páginas</span> de educação
          <span className="palavrabold"> médica</span>, disponíveis abaixo:
        </div>

        <div className="titulosus">Sistema Único de Saúde</div>
        <a href="/sus">
          <div className="cardsus">
            <div
              style={{
                display: "flex",
                position: "relative",
                width: "85%",
                height: "auto",
                marginLeft: "25px",
                marginTop: "40px",
              }}
            >
              <a href="/sus">
                <Image alt="Logo SUS" src={LogoSUS} />
              </a>
            </div>

            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <div className="resumosus">
              <a href="/sus">
                É um dos maiores e mais complexos sistemas de saúde pública do
                mundo, abrangendo desde o simples atendimento para aferição da
                pressão arterial, por meio da Atenção Primária, até o
                transplante de órgãos.
              </a>
            </div>
          </div>
        </a>

        <a href="/esf">
          <div className="tituloesf">Estratégia Saúde da Família</div>
          <div className="cardesf">
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "65%",
                height: "auto",
                marginLeft: "55px",
                marginTop: "25px",
              }}
            >
              <a href="/esf">
                <Image alt="Logo ESF" src={LogoESF} />
              </a>
            </div>

            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <div className="resumoesf">
              <a href="/esf">
                Visa à reorganização da atenção primária no País, de acordo com
                os preceitos do SUS. É uma estratégia de expansão, qualificação
                e consolidação da atenção primária.
              </a>
            </div>
          </div>
        </a>

        <a href="/acoes">
          <div className="tituloacoes">Ações Desenvolvidas</div>
          <div className="cardacoes">
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "63%",
                height: "auto",
                marginTop: "10px",
                marginLeft: "60px",
              }}
            >
              <a href="/acoes">
                <Image alt="Logo Acoes" src={Acoes} />
              </a>
            </div>

            <div className="resumoacoes">
              <a href="/acoes">
                O médico generalista ou especialista em Medicina de Família e
                Comunidade realiza consultas clínicas na Unidade Básica de
                Saúde, domicílios e/ou demais espaços comunitários (escolas,
                associações, entre outros).
              </a>
            </div>
          </div>
        </a>

        <span className="cardDrive1">
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "63%",
              height: "auto",
              marginTop: "170px",
              marginLeft: "60px",
              borderRadius: "100%",
            }}
          >
            <a href="https://conectesus-paciente.saude.gov.br/">
              <Image alt="Logo Acoes" src={LogoDrive} />
            </a>
          </div>

          <div className="titulodrive1">
            Artigos para se aprofundar em
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "red" }}>SUS:</span>
          </div>
        </span>

        <div className="cardDrive2">
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "63%",
              height: "auto",
              marginTop: "170px",
              marginLeft: "60px",
            }}
          >
            <a href="https://aps.saude.gov.br/ape/esf/">
              <Image alt="Logo Acoes" src={LogoDrive} />
            </a>
          </div>

          <div className="titulodrive2">
            Artigos para se aprofundar em
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#E07612" }}>ESF:</span>
          </div>
        </div>

        <div className="cardDrive3">
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "63%",
              height: "auto",
              marginTop: "170px",
              marginLeft: "60px",
            }}
          >
            <a href="https://slideplayer.com.br/slide/381330/">
              <Image alt="Logo Acoes" src={LogoDrive} />
            </a>
          </div>

          <div className="titulodrive3">
            Artigos para se aprofundar em
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#7C2929" }}>Ações à Comunidade:</span>
          </div>
        </div>
      </main>

      <div>
        <hr
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "1900px",
            color: "#000",
          }}
        />

        <div className="textocolaboracoes">Colaborações</div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "314px",
            height: "154px",
            marginTop: "2036px",
            marginLeft: "40px",
          }}
        >
          <a href="">
            <Image alt="Logo MiscWeb" src={MiscWebColaboracoes} />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "261px",
            height: "144px",
            marginTop: "2036px",
            marginLeft: "405px",
          }}
        >
          <a href="https://conectesus.saude.gov.br/">
            <Image alt="Logo SUS" src={SusColaboracoes} />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "334px",
            height: "117px",
            marginTop: "2036px",
            marginLeft: "715px",
          }}
        >
          <a href="https://www.cesupa.br/#">
            <Image alt="Logo Cesupa" src={CesupaColaboracoes} />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "163px",
            height: "176px",
            marginTop: "2036px",
            marginLeft: "1100px",
          }}
        >
          <a href="https://geta.omnicesupa.com/">
            <Image alt="Logo GETA" src={GetaColaboracoes} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .main {
          position: absolute;
          width: 100%;
          height: 2250px;
          background-color: #f0ffff;
        }
        .navbar {
          position: fixed;
          width: 100%;
          z-index: 2;
          height: 9.9%;
          background-color: #d0ffff;
        }
        .cadastrobar {
          position: absolute;
          width: 100%;
          height: 3%;
          top: 61px;
          background-color: #aff4c6;
        }
        .btcastatro {
          position: absolute;
          width: 100%;
          height: auto;
          top: 61px;
          background-color: lightGreen;
          cursor: pointer;
        }
        .btentrar {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: lightGreen;
          cursor: pointer;
        }
        .susnav {
          position: absolute;
          left: 640px;
          top: 14px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.019em;
          color: #0d99ff;
          cursor: pointer;
        }
        .esfnav {
          position: absolute;
          left: 750px;
          top: 14px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.019em;
          color: #0d99ff;
          cursor: pointer;
        }
        .acoesnav {
          position: absolute;
          left: 1100px;
          top: 14px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.019em;
          color: #0d99ff;
          cursor: pointer;
        }
        .header {
          position: absolute;
          width: 100%;
          height: 477.5px;
          top: 110px;
          background: #0d99ff;
        }
        .titulo {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 300px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 900;
          font-size: 30px;
          text-align: center;
          color: #c0fc91;
        }
        .letracor {
          color: #fff;
          font-style: italic;
        }
        .titulocor {
          position: static;
          color: #c0fc91;
          font-style: italic;
          font-weight: 700;
        }
        .letrabold {
          font-weight: bold;
        }
        .palavrabold {
          font-weight: bold;
        }
        .subtitulo {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 650px;
          font-family: "Arial";
          font-style: normal;
          font-weight: medium;
          font-size: 22px;
          text-align: center;
          color: #635d5d;
        }
        .titulosus {
          position: absolute;
          width: 100%;
          left: 185px;
          top: 750px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          color: #000;
        }
        .tituloesf {
          position: absolute;
          text-align: center;
          width: 100%;
          top: 750px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          color: #000;
        }
        .tituloacoes {
          position: absolute;
          left: 925px;
          top: 750px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 22px;
          color: #000;
        }
        .cardsus {
          position: absolute;
          width: 330px;
          height: 484px;
          top: 800px;
          left: 147px;
          background: #bde3ff;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
          cursor: pointer;
        }
        .cardesf {
          position: absolute;
          width: 330px;
          height: 484px;
          top: 800px;
          left: 512px;
          background: #bde3ff;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
          cursor: pointer;
        }
        .cardacoes {
          position: absolute;
          width: 330px;
          height: 484px;
          top: 800px;
          left: 877px;
          background: #bde3ff;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
          cursor: pointer;
        }
        .cardDrive1 {
          position: absolute;
          width: 330px;
          height: 400px;
          top: 1400px;
          left: 147px;
          background: #d3f5f1;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
          cursor: pointer;
        }
        .cardDrive2 {
          position: absolute;
          width: 330px;
          height: 400px;
          top: 1400px;
          left: 512px;
          background: #d3f5f1;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
          cursor: pointer;
        }
        .cardDrive3 {
          position: absolute;
          width: 330px;
          height: 400px;
          top: 1400px;
          left: 877px;
          background: #d3f5f1;
          border-radius: 6px;
          border-style: groove;
          border-color: #c4c4c4;
          border-width: 3px;
          cursor: pointer;
        }
        .titulodrive1 {
          position: relative;
          left: 23px;
          top: 25px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
          cursor: pointer;
        }
        .titulodrive2 {
          position: relative;
          left: 23px;
          top: 25px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
          cursor: pointer;
        }
        .titulodrive3 {
          position: relative;
          left: 23px;
          top: 25px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
          cursor: pointer;
        }
        .resumosus {
          position: relative;
          left: 5px;
          top: 35px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          text-decoration: underline;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
          cursor: pointer;
        }
        .resumoesf {
          position: relative;
          left: 5px;
          top: 220px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 19px;
          text-decoration: underline;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
          cursor: pointer;
        }
        .resumoacoes {
          position: relative;
          left: 5px;
          top: 220px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          text-decoration: underline;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
          cursor: pointer;
        }
        .textocolaboracoes {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 1950px;
          font-family: "Arial";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          text-align: center;
          color: #635d5d;
        }
        .linha {
          color: #635d5d;
          background: #000;
        }
      `}</style>
    </>
  );
}
