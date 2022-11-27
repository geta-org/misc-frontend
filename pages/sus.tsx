import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.png";
import LogoGETA from "../public/Outros/logoGETA.png";
import LogoSUS from "../public/TelaSUS/susTela.png";
import Imagem1 from "../public/TelaSUS/familiafluvial.png";
import Imagem2 from "../public/TelaSUS/familiaribeirinha.jpg";
import Imagem3 from "../public/TelaSUS/consultorionarua.jpg";
import Imagem4 from "../public/TelaSUS/basicaprisional1.png";
import Imagem5 from "../public/TelaSUS/basicaprisional2.jpg";
import Imagem6 from "../public/TelaSUS/basicadesaude.jpg";
import Imagem7 from "../public/TelaSUS/UPA.jpg";
import Imagem8 from "../public/TelaSUS/unidadehospitalar.png";
import Imagem9 from "../public/TelaSUS/CAPS.jpg";
import Imagem10 from "../public/TelaSUS/CRAS.jpg";
import Imagem11 from "../public/TelaSUS/NASF.jpg";
import Usuarioft from "../public/Outros/usuarioft.jpg";
import questions from "../questions.json";
import MiscWebColaboracoes from "../public/TelaHome/miscwebColaboracoes.png";
import SusColaboracoes from "../public/TelaHome/susColaboracoes.png";
import CesupaColaboracoes from "../public/TelaHome/cesupaColaboracoes.png";
import GetaColaboracoes from "../public/TelaHome/getaColaboracoes.png";

export default function SUS() {
  return (
    <>
      <Head>
        <title>SUS</title>
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
              width: "47%",
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
        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "650px",
          }}
        >
          <Image alt="Logo MiscWeb" src={LogoSUS} />
        </div>

        <div className="tituloacoes">Sistema Único de Saúde (SUS)</div>

        <div className="introducao">Introdução:</div>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            É um dos maiores e mais complexos sistemas de saúde pública do
            mundo, abrangendo desde o simples atendimento para aferição da
            pressão arterial, por meio da Atenção Primária, até o transplante de
            órgãos, garantindo acesso integral, universal e gratuito para toda a
            população do país.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A atenção integral à saúde passou a ser um direito de todos os
            brasileiros, desde a gestação e por toda a vida, com foco na saúde
            com qualidade de vida, visando a prevenção e a promoção da saúde.
          </span>
        </div>

        <div className="introducao1">1 - Atenção primária a saúde</div>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A Atenção Primária à Saúde (APS) é o conjunto de ações de saúde
            individuais, familiares e coletivas que envolvem promoção,
            prevenção, proteção, diagnóstico, tratamento, reabilitação, redução
            de danos, cuidados paliativos e vigilância em saúde, desenvolvida
            por meio de práticas de cuidado integrado e gestão qualificada,
            realizada com equipe multiprofissional e dirigida à população em
            território definido, sobre as quais as equipes assumem
            responsabilidade sanitária.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Trata-se da principal porta de entrada do SUS e do centro de
            comunicação com toda a Rede de Atenção à Saúde (RAS), devendo
            orientar-se pelos princípios da universalidade, da acessibilidade,
            da continuidade do cuidado, da integralidade da atenção, da
            responsabilização, da humanização e da equidade.
          </span>
        </div>

        <div className="introducao2">2 - Tipos de equipes de saúde</div>

        <div className="subintroducao1">Equipe de saúde da família fluvial</div>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A equipe que atua na embarcação (UBSF) é composta, minimamente, por
            um médico, um enfermeiro, um técnico de saúde bucal e um bioquímico
            ou técnico de laboratório. Para garantir a maior qualidade do
            cuidado e resolutividade, considerando a especificidade territorial
            da população ribeirinha que a torna singular, o município pode
            solicitar a ampliação da equipe com profissionais. Além disso, há a
            possibilidade de solicitar custeio para apoio logístico (unidade de
            apoio/satélites e embarcações de pequeno porte para transporte
            exclusivo de profissionais), conforme figura abaixo:
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem1} />
        </div>

        <span className="subintroducao2">
          Equipe de saúde da família ribeirinha
        </span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            As equipes de Saúde da Família Ribeirinhas e as Unidades Básicas de
            Saúde Fluviais estão direcionadas para o atendimento da população
            ribeirinha da Amazônia Legal e Pantanal Sul-Mato-Grossense,
            respectivamente. Considerando as especificidades locais, os
            municípios podem optar entre dois arranjos organizacionais para
            equipes de Saúde da Família, além dos existentes para o restante do
            País:
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            As Equipes de Saúde da Família Ribeirinhas (eSFR): desempenham a
            maior parte de suas funções em Unidades Básicas de Saúde (UBS)
            construídas/localizadas nas comunidades pertencentes a regiões à
            beira de rios e lagos cujo acesso se dá por meio fluvial.Em função
            dessa particularidade, as eSFRs devem ser compostas por, no mínimo:
            um médico, um enfermeiro e um auxiliar ou técnico de enfermagem.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Entretanto, uma equipe de Saúde da Família Ribeirinha também pode
            contar com profissionais de saúde bucal, e outros profissionais de
            nível superior, além de profissionais de nível médio. O número
            máximo de Agentes Comunitários de Saúde é de 24. Nas regiões
            endêmicas, por exemplo, ainda é possível incorporar o microscopista
            à equipe.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem2} />
        </div>

        <span className="subintroducao3">Equipe de Consultório na Rua</span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            Chamamos de Consultório na Rua equipes multiprofissionais que
            desenvolvem ações integrais de saúde frente às necessidades dessa
            população. Elas devem realizar suas atividades de forma itinerante
            e, quando necessário, desenvolver ações em parceria com as equipes
            das Unidades Básicas de Saúde do território.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Formada minimamente por quatro profissionais, a equipe é composta
            por agente social, técnico ou auxiliar de enfermagem, técnico em
            saúde bucal, cirurgião dentista, educador físico e graduados nas
            áreas de arte e educação, enfermeiro, psicólogo, assistente social,
            médico e terapeuta ocupacional.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A carga horária mínima semanal é de 30 horas, porém seu horário de
            funcionamento deverá ser adequado às demandas das pessoas em
            situação de rua, podendo ocorrer em período diurno e/ou noturno, em
            todos os dias da semana.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem3} />
        </div>

        <span className="subintroducao4">
          Equipe de Atenção Básica Prisional
        </span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            As Equipes de Atenção Básica Prisional (EABP) são equipes da Atenção
            Básica, de composição multiprofissional, com responsabilidade
            exclusiva de prestar atenção básica às pessoas privadas de liberdade
            que se encontram no sistema prisional, de forma a integrá-las aos
            serviços de saúde na Rede de Atenção à Saúde, promovendo assim o
            acesso da população em privação de liberdade à atenção integral à
            saúde. Essas equipes deverão realizar suas atividades nas unidades
            prisionais ou nas unidades básicas de saúde às quais as Equipes de
            Atenção Básica Prisional estiverem vinculadas. A realização nas
            atividades dessas equipes dependerá da existência de estrutura de
            saúde das unidades e da quantidade de custodiados existentes.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        </div>

        <span className="subintroducao5">Modalidades:</span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            As equipes podem se organizar em cinco modalidades, e o repasse de
            recursos financeiros é definido conforme cada uma:
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Equipe de Atenção Básica Prisional Tipo I (EABP-I) (classificação
            CNES 50) – formada por 5 profissionais, com as mesmas categorias
            profissionais da Estratégia de Saúde da Família (técnico ou auxiliar
            de enfermagem, cirurgião-dentista e técnico ou auxiliar de saúde
            bucal) e carga horária de 6 horas semanais.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Equipe de Atenção Básica Prisional Tipo I com Saúde Mental (EABP-I
            com Saúde Mental) (classificação CNES 51) – formada por 8
            profissionais: 5 profissionais das mesmas categorias que compõem a
            Estratégia de Saúde da Família, somados a 1 psiquiatra ou médico com
            experiência em Saúde Mental e 2 profissionais escolhidos entre as
            seguintes categorias: terapeuta ocupacional, fisioterapeuta,
            psicólogo, assistente social, farmacêutico ou enfermeiro. Esta
            modalidade de equipe cumprirá carga horária de 6 horas semanais.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Equipe de Atenção Básica Prisional Tipo II (EABP-II) (classificação
            CNES 52) – formada por 8 profissionais: 5 profissionais das mesmas
            categorias que compõem a Estratégia de Saúde da Família, somados a 1
            psicólogo, 1 assistente social e 1 profissional escolhido entre as
            seguintes categorias: terapeuta ocupacional, psicólogo,
            fisioterapeuta, nutricionista, farmacêutico, assistente social ou
            enfermeiro. Esta modalidade de equipe cumprirá carga horária de 20
            horas semanais.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Equipe de Atenção Básica Prisional Tipo II com Saúde Mental (EABP-II
            com Saúde Mental) (classificação CNES 53) – formada por 11
            profissionais: 5 profissionais das mesmas categorias que compõem a
            Estratégia de Saúde da Família, somados a 1 psiquiatra ou médico com
            experiência em Saúde Mental, 1 psicólogo, 1 assistente social e 3
            profissionais escolhidos entre as seguintes categorias: terapeuta
            ocupacional, psicólogo, fisioterapeuta, nutricionista, farmacêutico,
            assistente social ou enfermeiro. Esta modalidade de equipe cumprirá
            a carga horária de 20 horas semanais.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Equipe de Atenção Básica Prisional Tipo III (EABP-III)
            (classificação CNES 54) – formada por 11 profissionais, sendo 5 das
            mesmas categorias profissionais da Estratégia de Saúde da Família,
            somados a 1 psiquiatra ou médico com experiência em Saúde Mental, 1
            psicólogo, 1 assistente social e 3 profissionais escolhidos entre as
            seguintes categorias: terapeuta ocupacional, psicólogo,
            fisioterapeuta, nutricionista, farmacêutico, assistente social ou
            enfermeiro. Esta modalidade de equipe cumprirá a carga horária de 30
            horas semanais.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem4} />
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem5} />
        </div>

        <span className="introducao3">3 - Redes de atenção à saúde</span>

        <span className="subintroducao6">Unidade básica de saúde (UBS)</span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            As Unidades Básicas de Saúde (UBS), conhecidas antigamente como
            Centros de Saúde, Postos de Saúde, Clínicas da Família, são a porta
            de entrada do usuário no Sistema Único de Saúde (SUS). É ali onde se
            inicia o cuidado com a saúde da população. Cada UBS é responsável
            pela assistência à saúde de uma população definida.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            As UBSs contam com equipes de Saúde da Família (eSF) compostas por
            médico, enfermeiro, técnico de enfermagem e agentes comunitários de
            saúde e por equipes de saúde bucal, composta por odontólogo e
            técnico em saúde bucal.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Por meio desse modelo, a população local conta sempre com uma equipe
            de referência para cuidar de sua saúde. As equipes estão aptas a
            atender e acompanhar a saúde dos indivíduos ao longo das diferentes
            fases da vida.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem6} />
        </div>

        <span className="subintroducao7">
          Unidade de pronto-atendimento (UPA)
        </span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            A Unidade de Pronto Atendimento (UPA 24h) faz parte da Rede de
            Atenção às Urgências. O objetivo é concentrar os atendimentos de
            saúde de complexidade intermediária, compondo uma rede organizada em
            conjunto com a atenção básica, atenção hospitalar, atenção
            domiciliar e o Serviço de Atendimento Móvel de Urgência - SAMU 192.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Desta forma, a população terá uma melhoria no acesso, um aumento da
            capacidade de atendimento do Sistema Único de Saúde (SUS).
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A UPA 24h oferece estrutura simplificada, com raio-X,
            eletrocardiografia, pediatria, laboratório de exames e leitos de
            observação.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Se necessário o paciente poderá ser encaminhado para um hospital da
            rede de saúde, para realização de procedimento de alta complexidade.
            As UPAs funcionam 24 horas por dia, sete dias por semana, e podem
            atender grande parte das urgências e emergências.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem7} />
        </div>

        <span className="subintroducao8">Unidade Hospitalar (UH)</span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            Consiste em um estabelecimento de saúde dotado de internação, meios
            diagnósticos e terapêuticos, com o objetivo de prestar assistência
            médica curativa e de reabilitação, podendo dispor de atividades de
            prevenção, assistência ambulatorial, atendimento de
            urgência/emergência e de ensino/pesquisa.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A Divisão de Vigilância Sanitária fiscaliza os estabelecimentos de
            alta complexidade e os de pequeno, médio e grande porte, que não
            foram descentralizados para os municípios, monitora e supervisiona
            com o objetivo de eliminar, diminuir ou prevenir riscos à saúde e de
            intervir nos problemas sanitários decorrentes da prestação de
            serviços de interesse da saúde, aplicando as legislações em vigor.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem8} />
        </div>

        <span className="subintroducao9">
          Centro de atenção pisicossocial (CAPS)
        </span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            Os Centros de Atenção Psicossocial - Caps são serviços de saúde de
            caráter aberto e comunitário voltados aos atendimentos de pessoas
            com sofrimento psíquico ou transtorno mental, incluindo aquelas com
            necessidades decorrentes do uso de álcool, crack e outras
            substâncias, que se encontram em situações de crise ou em processos
            de reabilitação psicossocial.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Nos estabelecimentos atuam equipes multiprofissionais, que empregam
            diferentes intervenções e estratégias de acolhimento, como
            psicoterapia, seguimento clínico em psiquiatria, terapia
            ocupacional, reabilitação neuropsicológica, oficinas terapêuticas,
            medicação assistida, atendimentos familiares e domiciliares, entre
            outros.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem9} />
        </div>

        <span className="subintroducao10">
          Centro de referência da assistência social (CRAS)
        </span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            O Centro de Referência de Assistência Social (Cras) é a porta de
            entrada da Assistência Social. É um local público, localizado
            prioritariamente em áreas de maior vulnerabilidade social, onde são
            oferecidos os serviços de Assistência Social, com o objetivo de
            fortalecer a convivência com a família e com a comunidade.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            A partir do adequado conhecimento do território, o Cras promove a
            organização e articulação das unidades da rede socioassistencial e
            de outras políticas. Assim, possibilita o acesso da população aos
            serviços, benefícios e projetos de assistência social, se tornando
            uma referência para a população local e para os serviços setoriais.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Conhecendo o território, a equipe do Cras pode apoiar ações
            comunitárias, por meio de palestras, campanhas e eventos, atuando
            junto à comunidade na construção de soluções para o enfrentamento de
            problemas comuns, como falta de acessibilidade, violência no bairro,
            trabalho infantil, falta de transporte, baixa qualidade na oferta de
            serviços, ausência de espaços de lazer, cultural, entre outros.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            O Cras oferta o Serviço de Proteção e Atendimento Integral à Família
            (Paif) e o Serviço de Convivência e Fortalecimento de Vínculos
            (SCFV). No Cras, os cidadãos também são orientados sobre os
            benefícios assistenciais e podem ser inscritos no Cadastro Único
            para Programas Sociais do Governo Federal.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Famílias e indivíduos em situação grave desproteção, pessoas com
            deficiência, idosos, crianças retiradas do trabalho infantil,
            pessoas inseridas no Cadastro Único, beneficiários do Programa Bolsa
            Família e do Benefício de Prestação Continuada (BPC), entre outros.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Nas regiões de difícil acesso, como no caso das comunidades
            ribeirinhas, indígenas, rurais, quilombolas, e outras, o Cras tem as
            chamadas “Equipes Volantes”, que realizam a busca ativa. O
            deslocamento destas equipes é realizado por meio de carros ou das
            Lanchas da Assistência Social.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem10} />
        </div>

        <span className="subintroducao11">
          Núcleo de atendimento familiar sistêmico (NASF)
        </span>

        <div className="blocotxt">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="resumoacoes">
            O Núcleo de Apoio à Saúde da Família (NASF) foi criado em 2008 pela
            Portaria GM/ MS nº 154 de 24 de junho de 2008 (revogada pela
            Portaria GM/ MS nº 2.488 de 21 de outubro de 2011), com o objetivo
            de aumentar a resolutividade e capacidade de resposta das equipes de
            saúde da família aos problemas da população.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Esse núcleo é composto por profissionais de diferentes áreas do
            conhecimento que, atuando de maneira integrada às equipes de saúde
            da família nelas incluídas as equipes de saúde bucal, qualificam o
            atendimento às pessoas. Espera-se que a inserção desses
            profissionais ampliem o olhar e as ações do cuidado, trazendo como
            consequência a diminuição do número de encaminhamentos a outros
            serviços e maior satisfação aos usuários.
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            O NASF não se configura em um serviço de especialidades na Atenção
            Básica e deve realizar ações compartilhadas com as equipes de saúde
            da família, visando à ampliação da clínica e mudança das práticas,
            contribuindo para uma melhor qualidade de vida para as comunidades.
            Conforme a Portaria GM/MS nº 3.124 de 28 de dezembro de 2012, há 03
            (três) modalidades de NASF:
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            NASF 1 – Deve realizar suas atividades vinculado a, no mínimo, 5 e
            no máximo 9 equipes Saúde da Família e/ou equipes de Atenção Básica
            para populações específicas (consultórios na rua, equipes
            ribeirinhas e fluviais).
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            NASF 2 – Deve realizar suas atividades vinculado a, no mínimo, 3 e
            no máximo 4 equipes Saúde da Família e/ou equipes de Atenção Básica
            para populações específicas (consultórios na rua, equipes
            ribeirinhas e fluviais).
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            NASF 3 – Deve realizar suas atividades vinculado a, no mínimo, 1 e
            no máximo 2 equipes Saúde da Família e/ou equipes de Atenção Básica
            para populações específicas (consultórios na rua, equipes
            ribeirinhas e fluviais), agregando-se de modo específico ao processo
            de trabalho das mesmas, configurando-se como uma equipe ampliada.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "47%",
            height: "auto",
            margin: "auto",
            marginTop: "300px",
          }}
        >
          <Image alt="Logo MiscWeb" src={Imagem11} />
        </div>

        <span className="questaonumero">
          <span className="questao">
            <h4 className="questao1">Questão 1 de 5</h4>
            <span className="questaotexto">
              Ao dar entrada em uma unidade pública de saúde, uma paciente foi
              atendida preferencialmente, passando à frente de pacientes que
              estavam aguardando atendimento e que tinham uma classificação de
              risco mais grave. Após reclamações, soube-se que o privilégio no
              atendimento se deu por tratar-se de amiga de um deputado influente
              na cidade. De acordo com a Lei Orgânica da Saúde, a conduta feriu
              diretamente o seguinte princípio do SUS:
            </span>
          </span>
        </span>

        <div className="questaocard">
          {questions[0].answerOptions.map((answer, index) => (
            <div key={index} className="">
              <input type="radio" className="input" />
              <p className="alternativas">{answer.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full mt-4 text-white">
          <button className="w-[49%] py-3 bg-indigo-600 rounded-lg">
            Anterior
          </button>
          <button className="w-[49%] py-3 bg-indigo-600 question-lg">
            Proximo
          </button>
        </div>
      </main>

      <div>
        <hr
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "16000px",
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
            marginTop: "16100px",
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
            marginTop: "16100px",
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
            marginTop: "16100px",
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
            marginTop: "16100px",
            marginLeft: "1100px",
          }}
        >
          <a href="https://geta.omnicesupa.com/">
            <Image alt="Logo GETA" src={GetaColaboracoes} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        .main {
          position: absolute;
          width: 100%;
          height: 16350px;
          background-color: #f0ffff;
        }
        .navbar {
          position: fixed;
          display: flex;
          width: 100%;
          height: 9.9%;
          z-index: 2;
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
          color: #720db0;
          text-decoration: underline;
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
          left: 360px;
          top: 1000px;
          font-family: "Arial";
          font-weight: bold;
          text-decoration: underline;
          font-size: 30px;
          color: #336699;
        }
        .introducao {
          position: absolute;
          left: 200px;
          top: 1150px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .introducao1 {
          position: absolute;
          left: 200px;
          top: 1550px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .introducao2 {
          position: absolute;
          left: 200px;
          top: 2050px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .introducao3 {
          position: absolute;
          left: 200px;
          top: 8000px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao1 {
          position: absolute;
          left: 200px;
          top: 2150px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao2 {
          position: absolute;
          left: 200px;
          top: 3000px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao3 {
          position: absolute;
          left: 200px;
          top: 4350px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao4 {
          position: absolute;
          left: 200px;
          top: 5200px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao5 {
          position: absolute;
          left: 200px;
          top: 5750px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao6 {
          position: absolute;
          left: 200px;
          top: 8100px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao7 {
          position: absolute;
          left: 200px;
          top: 9200px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao8 {
          position: absolute;
          left: 200px;
          top: 10200px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao9 {
          position: absolute;
          left: 200px;
          top: 11150px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao10 {
          position: absolute;
          left: 200px;
          top: 12200px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .subintroducao11 {
          position: absolute;
          left: 200px;
          top: 13800px;
          font-family: "Arial";
          font-weight: bold;
          font-size: 27px;
          color: #336699;
        }
        .resumoacoes {
          position: relative;
          left: 200px;
          top: 250px;
          width: 30%;
          font-family: "Arial";
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 181.53%;
          letter-spacing: -0.019em;
          color: #635d5d;
        }
        .blocotxt {
          width: 65%;
        }
        .input {
          width: 24px;
          height: 24px;
          border-radius: 24px;
          cursor: pointer;
          position: relative;
          background-color: red;
          display: inline-block;
          visibility: visible;
          border: 2px solid black;
        }
        .questaonumero {
          width: 100px;
          height: 30px;
          position: relative;
        }
        .questao {
          background-color: ;
        }
        .questaocard {
          position: relative;
          background-color: #c3c1c1;
          border: 2px solid black;
        }
        .questaotexto {
          color: #000;
          font-weight: bold;
        }
        .alternativas {
        }
        .textocolaboracoes {
          position: absolute;
          width: 100%;
          height: 281px;
          top: 16050px;
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
