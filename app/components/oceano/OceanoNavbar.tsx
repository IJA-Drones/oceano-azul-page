"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { Container } from "../ui-kit";

type NavigationItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export default function OceanoNavbar({
  isDarkMode,
  onToggleTheme,
  onNavigateToAboutOceano,
}: {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onNavigateToAboutOceano: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const groupButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const closeNavigation = () => {
    setMobileMenuOpen(false);
    setOpenGroup(null);
  };

  React.useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!navbarRef.current?.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setOpenGroup(null);
      }
    };
    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    const closeOnLayoutChange = () => {
      setMobileMenuOpen(false);
      setOpenGroup(null);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    desktopMedia.addEventListener("change", closeOnLayoutChange);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      desktopMedia.removeEventListener("change", closeOnLayoutChange);
    };
  }, []);

  const navigationGroups: {
    id: string;
    label: string;
    items: NavigationItem[];
  }[] = [
    {
      id: "empresa",
      label: "Empresa",
      items: [
        { label: "Sobre Nós", onClick: onNavigateToAboutOceano },
        { label: "Ficha Técnica", href: "#ficha-tecnica" },
        { label: "Diferenciais", href: "#diferenciais" },
      ],
    },
    {
      id: "servicos",
      label: "Serviços",
      items: [
        { label: "Nossos Serviços", href: "#servicos" },
        { label: "Benefícios", href: "#beneficios" },
        // Reativar junto da seção de pagamentos após validação comercial.
        // { label: "Formas de Pagamento", href: "#recebimento" },
      ],
    },
  ];
  const themeLabel = isDarkMode
    ? "Alternar para modo claro"
    : "Alternar para modo escuro";
  const itemClassName =
    "block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600";

  return (
    <motion.nav
      ref={navbarRef}
      aria-label="Navegação principal"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white shadow-sm"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeNavigation();
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (openGroup) {
          groupButtonRefs.current[openGroup]?.focus();
          setOpenGroup(null);
        } else if (mobileMenuOpen) {
          mobileButtonRef.current?.focus();
          setMobileMenuOpen(false);
        }
      }}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-3">
          <a
            href="#inicio"
            onClick={closeNavigation}
            aria-label="Oceano Azul — início"
            className="relative block h-10 w-36 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:h-12 sm:w-40"
          >
            <Image
              src="/images/oceano-azul-logo-sem-fundo.png"
              alt="Oceano Azul"
              fill
              priority
              sizes="(min-width: 640px) 160px, 144px"
              className="object-contain object-left"
            />
          </a>

          <div
            id="oceano-navigation-links"
            className={`${mobileMenuOpen ? "block" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-slate-100 bg-white p-4 shadow-lg lg:static lg:ml-auto lg:block lg:max-h-none lg:overflow-visible lg:border-0 lg:p-0 lg:shadow-none`}
          >
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
              {navigationGroups.map((group) => (
                <li
                  key={group.id}
                  className="relative"
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenGroup((current) => current === group.id ? null : current);
                    }
                  }}
                >
                  <button
                    ref={(element) => { groupButtonRefs.current[group.id] = element; }}
                    type="button"
                    aria-expanded={openGroup === group.id}
                    aria-controls={`oceano-navigation-${group.id}`}
                    onClick={() => setOpenGroup((current) => current === group.id ? null : group.id)}
                    className={`flex min-h-11 w-full items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:w-auto ${openGroup === group.id ? "bg-blue-50 text-blue-700" : "text-slate-600"}`}
                  >
                    {group.label}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform ${openGroup === group.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  <ul
                    id={`oceano-navigation-${group.id}`}
                    hidden={openGroup !== group.id}
                    className="mt-2 space-y-1 rounded-2xl border border-slate-100 bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-64 lg:shadow-xl lg:shadow-blue-950/10"
                  >
                    {group.items.map((item) => (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href} onClick={closeNavigation} className={itemClassName}>
                            {item.label}
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              closeNavigation();
                              item.onClick?.();
                            }}
                            className={itemClassName}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <a href="#cursos" onClick={closeNavigation} className={itemClassName}>
                  Cursos
                </a>
              </li>
              <li className="mt-2 lg:ml-2 lg:mt-0">
                <a
                  href="#contato-oceano"
                  onClick={closeNavigation}
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={themeLabel}
              aria-pressed={isDarkMode}
              title={themeLabel}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              ref={mobileButtonRef}
              type="button"
              onClick={() => {
                const shouldOpen = !mobileMenuOpen;
                setMobileMenuOpen(shouldOpen);
                setOpenGroup(null);
                if (shouldOpen) {
                  window.requestAnimationFrame(() => {
                    groupButtonRefs.current.empresa?.focus();
                  });
                }
              }}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="oceano-navigation-links"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
}
