"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Zap,
  Map,
  Leaf,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Reveal, Container, Section, AnimatedImageFrame } from "../ui-kit";

export default function OceanoAboutPage({
  onBack,
  onRequestBudget,
}: {
  onBack: () => void;
  onRequestBudget: () => void;
}) {
  const handleBudgetClick = () => {
    onRequestBudget();
  };

  const missionVisionValues = [
    {
      title: "Missão",
      description:
        "Entregar soluções com drones que tornem operações mais precisas, seguras e eficientes para nossos clientes.",
      icon: ShieldCheck,
    },
    {
      title: "Visão",
      description:
        "Ser referência em tecnologia aplicada com drones, conectando inovação, inteligência operacional e impacto positivo.",
      icon: Zap,
    },
    {
      title: "Valores",
      description:
        "Atuar com segurança, qualidade, sustentabilidade, compromisso com o cliente e valorização das pessoas.",
      icon: Leaf,
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* NAVBAR SIMPLIFICADA */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="relative h-12 w-36 cursor-pointer sm:w-40"
              onClick={onBack}
              aria-label="Voltar para início"
            >
              <Image
                src="/images/oceano-azul-logo-sem-fundo.png"
                alt="Oceano Azul"
                fill
                className="object-contain object-left"
              />
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600"
            >
              <ArrowRight className="rotate-180" size={16} /> Voltar para Início
            </button>
          </div>
        </Container>
      </nav>

      {/* HEADER INSTITUCIONAL */}
      <section className="bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_58%,#ffffff_100%)] pb-16 pt-32 md:pb-20 md:pt-40">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <Reveal width="100%">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 border border-blue-100 uppercase tracking-wider mx-auto">
                <ShieldCheck size={12} /> Quem Somos
              </span>
            </Reveal>
            <Reveal delay={0.1} width="100%">
              <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-6xl">
                Tecnologia com drones para <br />
                <span className="text-blue-600">operações complexas</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A Oceano Azul atua desde 2019 desenvolvendo e operando soluções
                com drones para agricultura, cidades, energia e infraestrutura,
                conectando planejamento, execução em campo e inteligência de
                dados.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ESTATÍSTICAS & HISTÓRIA */}
      <Section className="bg-white border-t border-slate-200/70">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Da operação ao dado final
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Somos uma empresa de tecnologia aplicada a serviços com drones.
                Nossa atuação combina equipes de campo, equipamentos
                especializados e processos de análise para entregar soluções
                precisas em ambientes agrícolas, urbanos e industriais.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Nossa proposta é full stack: participamos do{" "}
                <strong>
                  planejamento, operação, tratamento dos dados, relatórios
                  técnicos e capacitação
                </strong>{" "}
                das equipes envolvidas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">2019</div>
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Início das atividades
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">
                    Barueri
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Sede em SP
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">
                    Itajubá
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Base de PDI em MG
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
              <AnimatedImageFrame className="h-full shadow-2xl bg-slate-200">
                <Image
                  src="/images/drones_empresa.jpeg"
                  alt="Drones da Oceano Azul"
                  fill
                  className="object-cover"
                />
              </AnimatedImageFrame>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section
        id="missao-visao-valores"
        className="border-t border-blue-100/70 bg-[linear-gradient(180deg,#ffffff_0%,#f3f8ff_100%)] py-16 md:py-20"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-14 flex flex-col items-center">
            <Reveal width="100%">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-blue-600 text-xs font-bold mb-6 border border-blue-100 uppercase tracking-wider mx-auto">
                <ShieldCheck size={12} /> Missão, Visão e Valores
              </span>
            </Reveal>
            <Reveal delay={0.1} width="100%">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Princípios que orientam <br />
                <span className="text-blue-600">nossa atuação</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Esta base institucional resume a forma como a Oceano Azul pensa,
                opera e constrói relações com clientes, parceiros e equipes.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {missionVisionValues.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} width="100%">
                <article className="h-full cursor-default rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-slate-300 hover:bg-slate-50/70">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <item.icon size={22} />
                  </div>
                  <h3 className="mb-4 text-xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="border-t border-slate-800 bg-slate-900 py-16 text-white md:py-20">
        <Container>
          <div className="text-center mb-16 flex flex-col items-center">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Onde Atuamos
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Atuamos em projetos que exigem precisão operacional, segurança
                em campo e leitura técnica dos dados capturados por drones.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Leaf, label: "Agricultura" },
              { icon: Users, label: "Cidades" },
              { icon: Zap, label: "Energia" },
              { icon: Map, label: "Infraestrutura" },
            ].map((area, i) => (
              <Reveal key={i} delay={i * 0.1} width="100%">
                <div className="flex cursor-default flex-col items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/50 p-5 transition-colors duration-300 hover:border-slate-600 hover:bg-slate-800/80 sm:p-6">
                  <area.icon size={24} className="text-blue-400" />
                  <span className="font-bold text-sm">{area.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVIÇOS DETALHADOS */}
      <Section className="border-t border-blue-100/70 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                  Soluções completas com drones
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-slate-600 mb-6">
                  Estruturamos cada projeto de ponta a ponta, do diagnóstico da
                  demanda até a entrega dos relatórios. Isso permite que o
                  cliente tenha mais controle sobre prazos, qualidade,
                  rastreabilidade e tomada de decisão.
                </p>
              </Reveal>
              <ul className="space-y-4">
                {[
                  "Planejamento técnico da missão",
                  "Operação com drones e equipes especializadas",
                  "Processamento, análise e organização dos dados",
                  "Relatórios técnicos e capacitação operacional",
                ].map((item, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <AnimatedImageFrame className="aspect-square bg-slate-100 rounded-2xl">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/pulverizacao_dengue.png"
                    alt="Pulverização contra o mosquito da dengue"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedImageFrame>
              <AnimatedImageFrame className="aspect-square bg-slate-100 rounded-2xl mt-8">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/pulverizacao_agricola.jpeg"
                    alt="Operação agrícola com drone em campo"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedImageFrame>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA CONTATO */}
      <section className="border-t border-blue-400/30 bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_55%,#0f3fa8_100%)] py-16 text-white md:py-20">
        <Container>
          <div className="flex flex-col items-stretch justify-between gap-8 text-center md:flex-row md:items-center md:text-left">
            <div>
              <h2 className="text-3xl font-extrabold mb-2">
                Pronto para inovar?
              </h2>
              <p className="text-blue-100 text-lg">
                Fale com nossa equipe técnica hoje mesmo.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3 rounded-xl border border-blue-500 bg-blue-700 px-5 py-3 sm:px-6">
                <Phone size={20} />
                <div>
                  <div className="text-xs text-blue-200 uppercase font-bold">
                    Ligue agora
                  </div>
                  <div className="font-bold">+55 (16) 3947-4613</div>
                </div>
              </div>
              <button
                onClick={handleBudgetClick}
                className="rounded-xl bg-white px-8 py-3 font-bold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
