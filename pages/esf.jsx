import Head from "next/head"
import Image from "next/image"
import { Button } from "react-bootstrap"
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.png"
import LogoGETA from "../public/Outros/logoGETA.png"
import LogoESF from "../public/TelaHome/esfHome.png"
import Usuarioft from "../public/Outros/usuarioft.jpg"
import MiscWebColaboracoes from "../public/TelaHome/miscwebColaboracoes.png"
import SusColaboracoes from "../public/TelaHome/susColaboracoes.png"
import CesupaColaboracoes from "../public/TelaHome/cesupaColaboracoes.png"
import GetaColaboracoes from "../public/TelaHome/getaColaboracoes.png"


export default function ESF() {
  return (
    <>
      <Head>
        <title>ESF</title>
        <link rel="icon" href="/Outros/favicon.ico"/>
      </Head>
      <main className="main">
        <navbar className="navbar">
          <a href="/sus">
            <sus className="susnav">SUS</sus>
          </a>
          <a href="/esf">
           <esf className="esfnav">Estratégia Saúde da Família</esf>
          </a>
          <a href="/acoes">
            <acoes className="acoesnav">Ações Desenvolvidas</acoes>
          </a>
        </navbar>

        <cadastrobar className="cadastrobar">
          <Button className="btcastatro">Cadastro</Button>
          <Button className="btentrar">Entrar</Button>
        </cadastrobar>

        <header className="header">
          <logomisc
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
          </logomisc>
          <logogeta
            style={{
              position: "absolute",
              width: "180px",
              height: "auto",
              left: "15px",
              top: "10px",
            }}
          >
            <Image alt="Logo GETA" src={LogoGETA} />
          </logogeta>
          <usuarioft
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
          </usuarioft>

          <titulo className="titulo">
            Sua plataforma de aprendizado digital, para o<br />
            <span className="letracor"> M</span>
            <span className="titulocor">ódulo de</span>
            <span className="letracor"> I</span>
            <span className="titulocor">nteração em</span>
            <span className="letracor"> S</span>
            <span className="titulocor">aúde na</span>
            <span className="letracor"> C</span>
            <span className="titulocor">omunidade</span>
          </titulo>
        </header>
        <logoesf
            style={{
              display: "flex",
              width: "47%",
              height: "auto",
              margin: "auto",
              marginTop: "650px",
            }}
          >
            <Image alt="Logo MiscWeb" src={LogoESF} />
          </logoesf>
          
          <tituloacoes className="tituloacoes">
          Estratégia Saúde da Família (ESF)
          </tituloacoes>

          <introducao className="introducao">
          Introdução:
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Visa à reorganização da atenção primária no País, de acordo com os preceitos do SUS. 
            É uma estratégia de expansão, qualificação e consolidação da atenção primária por favorecer uma 
            reorientação do processo de trabalho com maior potencial de aprofundar os princípios, diretrizes e 
            fundamentos da atenção primária, ampliando a resolutividade e impacto na situação de saúde das pessoas e 
            coletividades, além de propiciar uma importante relação custo-efetividade.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="introducao1">
          1 -  Atenção primária a saúde
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="introducao2">
          2 -  Tipos de equipes de saúde
          </introducao>

          <introducao className="subintroducao1">
          Equipe de saúde da família fluvial
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </resumoacoes>
          </div>

          <introducao className="subintroducao2">
          Equipe de saúde da família ribeirinha
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="subintroducao3">
          Equipe de Consultório na Rua
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="subintroducao4">
          Equipe de Atenção Básica Prisional
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </resumoacoes>
          </div>

          <introducao className="subintroducao5">
          Modalidades:
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </resumoacoes>
          </div>

          <introducao className="introducao3">
          3 -  Redes de atenção à saúde
          </introducao>

          <introducao className="subintroducao6">
          Unidade básica de saúde (UBS)
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </resumoacoes>
          </div>

          <introducao className="subintroducao7">
          Unidade de pronto-atendimento (UPA)
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="subintroducao8">
          Unidade Hospitalar (UH)
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="subintroducao9">
          Centro de atenção pisicossocial (CAPS)
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            <br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;</span>
            Lorem ipsum dolor sit amet. Et numquam expedita ut vero vitae qui impedit omnis est beatae dolores aut 
            modi voluptatem aut dolor veniam? In iure molestiae aut quidem aspernatur a illum impedit aut cumque corrupti.
            Aut repellat rerum aut officia rerum rem sunt labore ut placeat quasi id dolorem quia sed ipsam error 
            ut rerum accusantium. Ut beatae quia ut nesciunt sint aut fugit doloribus a voluptas nesciunt hic libero 
            aperiam ut quia perspiciatis. Et nulla odio ut unde quos et internos expedita est commodi incidunt 
            At praesentium optio quo saepe deleniti.
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="subintroducao10">
          Centro de referência da assistência social (CRAS)
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
            Ea eius autem ut maxime perferendis eos necessitatibus labore et corrupti ducimus quo officia officia. 
            Eos omnis beatae id dolorem similique id voluptatibus sapiente ut dignissimos voluptatum. 
            Ea sint similique aut velit laborum et enim fugiat est totam illo. Et minima laudantium ut minima beatae 
            qui omnis quod est soluta exercitationem rem totam vitae.
            </resumoacoes>
          </div>

          <introducao className="subintroducao11">
          Núcleo de atendimento familiar sistêmico (NASF)
          </introducao>

          <div className="blocotxt">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <resumoacoes className="resumoacoes">
           
            </resumoacoes>
          </div>

      </main>

      <colaboracoes>
        <hr
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "16800px",
            color: "#000",
          }}
        />

        <textocolaboracoes className="textocolaboracoes">
          Colaborações
        </textocolaboracoes>

        <misclogo
          style={{
            display: "flex",
            position: "absolute",
            width: "314px",
            height: "154px",
            marginTop: "16900px",
            marginLeft: "40px",
          }}
        >
          <a href="">
            <Image alt="Logo MiscWeb" src={MiscWebColaboracoes} />
          </a>
        </misclogo>

        <suslogo
          style={{
            display: "flex",
            position: "absolute",
            width: "261px",
            height: "144px",
            marginTop: "16900px",
            marginLeft: "405px",
          }}
        >
          <a href="https://conectesus.saude.gov.br/">
            <Image alt="Logo SUS" src={SusColaboracoes} />
          </a>
        </suslogo>

        <cesupalogo
          style={{
            display: "flex",
            position: "absolute",
            width: "334px",
            height: "117px",
            marginTop: "16900px",
            marginLeft: "715px",
          }}
        >
          <a href="https://www.cesupa.br/#">
            <Image alt="Logo Cesupa" src={CesupaColaboracoes} />
          </a>
        </cesupalogo>

        <getalogo
          style={{
            display: "flex",
            position: "absolute",
            width: "163px",
            height: "176px",
            marginTop: "16900px",
            marginLeft: "1100px",
          }}
        >
          <a href="https://geta.omnicesupa.com/">
            <Image alt="Logo GETA" src={GetaColaboracoes} />
          </a>
        </getalogo>
      </colaboracoes>

      <style jsx>{`
        .main {
          position: absolute;
          width: 100%;
          height: 17125px;
          background-color: #f0ffff;
        }
        .navbar {
          position: fixed;
          display: flex;
          z-index: 2;
          width: 100%;
          height: 0.355%;
          background-color: #d0ffff;
        }
        .cadastrobar {
          position: absolute;
          width: 100%;
          height: 1%;
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
          color: #720DB0;
          text-decoration: underline;
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
          left: 430px;
          top: 1200px;
          font-family: "Arial";
          font-weight: bold;
          text-decoration: underline;
          font-size: 30px;
          color: #E07612;
        }
        .introducao {
          position: absolute;
          left: 200px;
          top: 1300px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .introducao1 {
          position: absolute;
          left: 200px;
          top: 1365px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .introducao2 {
          position: absolute;
          left: 200px;
          top: 2150px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .introducao3 {
          position: absolute;
          left: 200px;
          top: 7650px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao1 {
          position: absolute;
          left: 200px;
          top: 2200px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao2 {
          position: absolute;
          left: 200px;
          top: 3350px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao3 {
          position: absolute;
          left: 200px;
          top: 4450px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao4 {
          position: absolute;
          left: 200px;
          top: 5550px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao5 {
          position: absolute;
          left: 200px;
          top: 6150px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao6 {
          position: absolute;
          left: 200px;
          top: 7730px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao7 {
          position: absolute;
          left: 200px;
          top: 9750px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao8 {
          position: absolute;
          left: 200px;
          top: 10840px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao9 {
          position: absolute;
          left: 200px;
          top: 11440px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao10 {
          position: absolute;
          left: 200px;
          top: 12520px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
        }
        .subintroducao11 {
          position: absolute;
          left: 200px;
          top: 14070px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #E07612;
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
        .textocolaboracoes {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 16850px;
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
  )
}
