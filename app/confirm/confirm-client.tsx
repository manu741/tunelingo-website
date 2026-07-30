"use client";

import { useEffect, useState } from "react";

const STRINGS = {
  en: {
    title: "You're all set!",
    body: "Your email is confirmed. Head back to the TuneLingo app on your phone to continue.",
    tip: "App not opening? Just open TuneLingo on your phone and log in — you're already confirmed.",
    button: "Open TuneLingo",
    resetTitle: "Open this on your phone",
    resetBody:
      "Password reset links only work in the TuneLingo app, on the phone where you requested the reset.",
    resetTip:
      "Opened it somewhere else? The link is single-use — request a new one in the app and open it on your phone.",
  },
  es: {
    title: "¡Todo listo!",
    body: "Tu correo está confirmado. Vuelve a la app de TuneLingo en tu móvil para continuar.",
    tip: "¿No se abre la app? Abre TuneLingo en tu móvil e inicia sesión: ya estás confirmado.",
    button: "Abrir TuneLingo",
    resetTitle: "Ábrelo en tu móvil",
    resetBody:
      "Los enlaces para restablecer la contraseña solo funcionan en la app de TuneLingo, en el móvil desde el que pediste el cambio.",
    resetTip:
      "¿Lo abriste en otro sitio? El enlace es de un solo uso: pide uno nuevo en la app y ábrelo en tu móvil.",
  },
  fr: {
    title: "C'est tout bon !",
    body: "Ton e-mail est confirmé. Retourne dans l'app TuneLingo sur ton téléphone pour continuer.",
    tip: "L'app ne s'ouvre pas ? Ouvre TuneLingo sur ton téléphone et connecte-toi : ton compte est déjà confirmé.",
    button: "Ouvrir TuneLingo",
    resetTitle: "Ouvre ce lien sur ton téléphone",
    resetBody:
      "Les liens de réinitialisation ne fonctionnent que dans l'app TuneLingo, sur le téléphone depuis lequel tu as fait la demande.",
    resetTip:
      "Ouvert ailleurs ? Le lien est à usage unique : demande-en un nouveau dans l'app et ouvre-le sur ton téléphone.",
  },
  de: {
    title: "Alles erledigt!",
    body: "Deine E-Mail ist bestätigt. Geh zurück in die TuneLingo-App auf deinem Handy, um weiterzumachen.",
    tip: "App öffnet sich nicht? Öffne TuneLingo auf deinem Handy und melde dich an – du bist schon bestätigt.",
    button: "TuneLingo öffnen",
    resetTitle: "Öffne den Link auf deinem Handy",
    resetBody:
      "Links zum Zurücksetzen des Passworts funktionieren nur in der TuneLingo-App – auf dem Handy, von dem aus du die Anfrage gestellt hast.",
    resetTip:
      "Woanders geöffnet? Der Link ist nur einmal gültig – fordere in der App einen neuen an und öffne ihn auf deinem Handy.",
  },
  nl: {
    title: "Helemaal klaar!",
    body: "Je e-mailadres is bevestigd. Ga terug naar de TuneLingo-app op je telefoon om verder te gaan.",
    tip: "Opent de app niet? Open TuneLingo op je telefoon en log in – je bent al bevestigd.",
    button: "TuneLingo openen",
    resetTitle: "Open dit op je telefoon",
    resetBody:
      "Wachtwoord-resetlinks werken alleen in de TuneLingo-app, op de telefoon waarop je de reset hebt aangevraagd.",
    resetTip:
      "Ergens anders geopend? De link werkt maar één keer – vraag een nieuwe aan in de app en open die op je telefoon.",
  },
} as const;

type Locale = keyof typeof STRINGS;

const SCHEME_URL = "tunelingo://confirm";

export function ConfirmClient() {
  const [search, setSearch] = useState("");
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    // ?code= is a single-use, device-bound Supabase PKCE code: it must only
    // pass through to the app scheme untouched — never sent to any API,
    // never logged.
    const query = window.location.search;
    setSearch(query);

    const lang = navigator.language.split("-")[0].toLowerCase();
    if (lang in STRINGS) setLocale(lang as Locale);

    // Mail apps' in-app browsers can swallow universal links, so bounce
    // phones to the custom scheme (a silent no-op if the app isn't
    // installed). Desktop is excluded — unknown protocols error there.
    if (/android|iphone|ipad/i.test(navigator.userAgent)) {
      window.location.href = SCHEME_URL + query;
    }
  }, []);

  const isReset = new URLSearchParams(search).get("next") === "reset-password";
  const t = STRINGS[locale];

  return (
    <div className="mx-auto max-w-[620px] px-7 pb-24 pt-24" lang={locale}>
      <div className="rounded-[22px] border border-surface-border bg-surface px-[26px] py-10 text-center sm:px-10">
        <h1 className="font-serif text-[clamp(30px,7vw,40px)] font-bold leading-[1.15]">
          {isReset ? t.resetTitle : t.title}
        </h1>
        <p className="mt-4 text-[17px] leading-[1.7] text-text-2">
          {isReset ? t.resetBody : t.body}
        </p>
        <p className="mt-3 text-sm leading-[1.6] text-text-3">
          {isReset ? t.resetTip : t.tip}
        </p>
        <a
          href={SCHEME_URL + search}
          className="bg-cta mt-8 inline-block rounded-pill px-[26px] py-3.5 text-[15px] font-bold text-cta-text transition-[filter] hover:brightness-110"
        >
          {t.button}
        </a>
      </div>
    </div>
  );
}
