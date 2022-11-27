import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.png";
import LogoGETA from "../public/Outros/logoGETA.png";
import LogoAcoes from "../public/TelaHome/Acoes.png";
import Usuarioft from "../public/Outros/usuarioft.jpg";
import AtencaoPrisional from "../public/TelaAcoes/atencaoprisional.png";
import MiscWebColaboracoes from "../public/TelaHome/miscwebColaboracoes.png";
import SusColaboracoes from "../public/TelaHome/susColaboracoes.png";
import CesupaColaboracoes from "../public/TelaHome/cesupaColaboracoes.png";
import GetaColaboracoes from "../public/TelaHome/getaColaboracoes.png";

export default function Acoes() {
  return (
    <>
      <Head>
        <title>Ações Desenvolvidas</title>
        <link rel="icon" href="/Outros/favicon.ico" />
      </Head>

      <main className="main">
        <span className="navbar">
          <a href="/sus">
            <span className="susnav">SUS</span>
          </a>
          <a href="/esf">
            <span className="esfnav">Estratégia Saúde da Família</span>
          </a>
          <a href="/acoes">
            <span className="acoesnav">Ações Desenvolvidas</span>
          </a>
        </span>

        <span className="cadastrobar">
          <Button className="btcastatro">Cadastro</Button>
          <Button className="btentrar">Entrar</Button>
        </span>

        <header className="header">
          <span
            style={{
              display: "flex",
              width: "47%",
              height: "auto",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <a href="/home">
              <Image alt="Logo MiscWeb" src={LogoMisc} />
            </a>
          </span>
          <span
            style={{
              position: "absolute",
              width: "180px",
              height: "auto",
              left: "15px",
              top: "10px",
            }}
          >
            <Image alt="Logo GETA" src={LogoGETA} />
          </span>
          <span
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
          </span>

          <span className="titulo">
            Sua plataforma de aprendizado digital, para o<br />
            <span className="letracor"> M</span>
            <span className="titulocor">ódulo de</span>
            <span className="letracor"> I</span>
            <span className="titulocor">nteração em</span>
            <span className="letracor"> S</span>
            <span className="titulocor">aúde na</span>
            <span className="letracor"> C</span>
            <span className="titulocor">omunidade</span>
          </span>
        </header>
        <span
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "650px",
          }}
        >
          <Image alt="Logo MiscWeb" src={LogoAcoes} />
        </span>
        <span className="tituloacoes">
          Ações Desenvolvidas junto à Comunidade
        </span>

        <span className="introducao">Médico na Atenção Primária:</span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            O médico generalista ou especialista em Medicina de Família e
            Comunidade realiza consultas clínicas na Unidade Básica de Saúde,
            domicílios e/ou demais espaços comunitários (escolas,
            associações,entre outros).
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Em conformidade com protocolos, diretrizes clínicas e terapêuticas,
            bem como outras normativas técnicas estabelecidas pelos gestores
            (federal, estadual, municipal), observadas as disposições legais da
            profissão.
          </span>
        </div>

        <span className="titulo1">Equipe de Atenção Básica Prisional</span>
        <div className="card1">
          <span
            style={{
              display: "flex",
              position: "relative",
              width: "85%",
              height: "auto",
              marginLeft: "30px",
              marginTop: "7.5px",
            }}
          >
            <a href="/sus">
              <Image alt="Logo SUS" src={AtencaoPrisional} />
            </a>
          </span>
        </div>

        <span className="titulo2">Equipe de Atenção Básica Prisional</span>
        <div className="card2">
          <span
            style={{
              display: "flex",
              position: "relative",
              width: "85%",
              height: "auto",
              marginLeft: "27px",
              marginTop: "7.5px",
            }}
          >
            <Image alt="Logo ESF" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo3">Equipe de Atenção Básica Prisional</span>
        <div className="card3">
          <span
            style={{
              display: "flex",
              position: "relative",
              width: "85%",
              height: "auto",
              marginTop: "7.5px",
              marginLeft: "30px",
            }}
          >
            <Image alt="Logo Acoes" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo4"></span>
        <div className="card4">
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "25%",
              height: "auto",
              marginLeft: "70px",
              marginTop: "573px",
            }}
          >
            <Image alt="Logo SUS" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo5"></span>
        <div className="card5">
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "25%",
              height: "auto",
              marginLeft: "490px",
              marginTop: "553px",
            }}
          >
            <Image alt="Logo ESF" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo6"></span>
        <div className="card6">
          <span
            style={{
              display: "flex",
              position: "relative",
              width: "25%",
              height: "auto",
              marginTop: "533px",
              marginLeft: "930px",
            }}
          >
            <Image alt="Logo Acoes" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo7"></span>
        <div className="card7">
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "25%",
              height: "auto",
              marginLeft: "70px",
              marginTop: "85px",
            }}
          >
            <Image alt="Logo SUS" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo8"></span>
        <div className="card8">
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "25%",
              height: "auto",
              marginLeft: "490px",
              marginTop: "68px",
            }}
          >
            <Image alt="Logo ESF" src={AtencaoPrisional} />
          </span>
        </div>

        <span className="titulo9"></span>
        <div className="card9">
          <span
            style={{
              display: "flex",
              position: "absolute",
              width: "25%",
              height: "auto",
              marginTop: "48px",
              marginLeft: "930px",
            }}
          >
            <Image alt="Logo Acoes" src={AtencaoPrisional} />
          </span>
        </div>
      </main>

      <div>
        <hr
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "3000px",
            color: "#000",
          }}
        />

        <span className="textocolaboracoes">Colaborações</span>

        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "314px",
            height: "154px",
            marginTop: "3100px",
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
            marginTop: "3100px",
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
            marginTop: "3100px",
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
            marginTop: "3100px",
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
          height: 3300px;
          background-color: #f0ffff;
        }
        .navbar {
          position: fixed;
          width: 100%;
          height: 9.9%;
          z-index: 2;
          background-color: #d0ffff;
        }
        .cadastrobar {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: #aff4c6;
        }
        .btcastatro {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: lightGreen;
        }
        .btentrar {
          position: absolute;
          width: 100%;
          height: 10%;
          top: 61px;
          background-color: lightGreen;
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
          color: #720DB0;
          text-decoration: underline;
        }
        .header {
          position: absolute;
          width: 100%;
          height: 477.5px;
          top: 122px;
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
        .tituloacoes {
          position: absolute;
          left: 360px;
          top: 1250px;
          font-family: "Arial";
          font-weight: bold;
          text-decoration: underline;
          font-size: 30px;
          color: #7C2929;
        }
        .introducao {
          position: absolute;
          left: 200px;
          top: 1450px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #7C2929;
        }
        .resumoacoes{
          position: relative;
          left: 200px;
          top: 250px;
          width: 30%;
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635D5D;
        }
        .blocotxt{
          width: 65%;
        } 
        .card1 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 1825px;
          left: 40px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .card2 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 1825px;
          left: 459px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .card3 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 1825px;
          left: 877px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .titulo1 {
          position: relative;
          width: 100%;
          left: 57px;
          top: 520px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .titulo2 {
          text-align: center;
          left: 100px;
          position: relative;
          width: 100%;
          top: 520px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .titulo3 {
          position: relative;
          width: 100%;
          left: 150px;
          top: 520px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
      } .card4 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 200px;
          left: 40px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .card5 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 2000px;
          left: 459px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .card6 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 2000px;
          left: 877px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .titulo4 {
          position: absolute;
          width: 100%;
          left: 57px;
          top: 2250px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .titulo5 {
          position: absolute;
          text-align: center;
          Right: 10px;
          width: 100%;
          top: 2250px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .titulo6 {
          position: absolute;
          left: 895px;
          top: 2250px;
          font-family: "Arial";
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .card7 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 3000px;
          left: 40px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .card8 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 3000px;
          left: 1459px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .card9 {
          position: absolute;
          width: 400px;
          height: 200px;
          top: 3000x;
          left: 1877px;
          background: #f0ffff;
          border-radius: 6px;
          border-style: groove;
          border-color: #7C2929;
          border-width: 3px;
        }
        .titulo7 {
          position: relative;
          width: 100%;
          left: 57px;
          top: 2050px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .titulo8 {
          position: relative;
          text-align: center;
          Right: 10px;
          width: 100%;
          top: 2050px;
          font-family: "Arial";
          font-style: normal;
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .titulo9 {
          position: relative;
          left: 895px;
          top: 2050px;
          font-family: "Arial";
          font-weight: bold;
          text-decoration: underline;
          font-size: 22px;
          color: #635D5D;
        }
        .textocolaboracoes {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 3050px;
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
