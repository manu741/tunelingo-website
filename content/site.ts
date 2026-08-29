export const SITE = {
  name: "Tunelingo",
  company: "Dombyte Studio",
  url: "https://tunelingo.app",
  title: "Tunelingo: Learn a Language with Music",
  description:
    "Learn a language with music. Tunelingo writes original songs at your level, or turns YouTube songs you love into karaoke lessons with translations.",
  tagline:
    "Learn languages through music. Original AI songs, real songs from YouTube, karaoke lyrics, flashcards that stick.",
};

// Real app screenshot at public/screenshots/hero.png
export const HAS_HERO_SCREENSHOT = true;

export const NAV_LINKS = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const LANGUAGES = [
  { name: "English", cc: "gb" },
  { name: "Spanish", cc: "es" },
  { name: "French", cc: "fr" },
  { name: "German", cc: "de" },
  { name: "Japanese", cc: "jp" },
  { name: "Italian", cc: "it" },
  { name: "Arabic", cc: "sa" },
  { name: "Chinese", cc: "cn" },
  { name: "Croatian", cc: "hr" },
  { name: "Greek", cc: "gr" },
  { name: "Portuguese", cc: "pt" },
  { name: "Russian", cc: "ru" },
  { name: "Dutch", cc: "nl" },
];

export const STEPS = [
  {
    n: "1",
    title: "Pick your song",
    body: "Spanish reggaetón? Japanese city pop? Choose what you’re learning and what you love, and the AI writes an original track at your level. Or import a song you already love from YouTube.",
  },
  {
    n: "2",
    title: "Sing it karaoke-style",
    body: "Karaoke mode shows every line as it’s sung, whether the AI wrote the song or you brought it. Tap any word for an instant translation without leaving the music.",
  },
  {
    n: "3",
    title: "Make it stick",
    body: "Save the words you want into your vocab. Spaced repetition flashcards bring each one back right when you’re about to forget it.",
  },
];

export const FEATURES: {
  glyph: string;
  title: string;
  body: string;
  /** Renders the official YouTube icon in place of the text glyph. */
  brand?: "youtube";
}[] = [
  {
    glyph: "♪",
    title: "Original songs, made for you",
    body: "Not someone else’s playlist, every song is composed for you, in your genre, about things worth singing about.",
  },
  {
    glyph: "▶",
    brand: "youtube",
    title: "Real songs from YouTube",
    body: "Already have a favorite? Import songs from YouTube, search or paste a link, and study them with the same synced lyrics, translations and flashcards. Included with your subscription at no extra cost.",
  },
  {
    glyph: "🎤",
    title: "Karaoke mode",
    body: "Line-by-line lyrics that follow the music, so your ears, eyes and voice learn together.",
  },
  {
    glyph: "⇄",
    title: "Tap any word",
    body: "Instant translation into your native language, 13 supported, without leaving the song.",
  },
  {
    glyph: "⚡",
    title: "Flashcards that stick",
    body: "Save any word to your vocab and it becomes a flashcard, reviewed with spaced repetition right when you’re about to forget it.",
  },
  {
    glyph: "◐",
    title: "You set the level",
    body: "Choose your difficulty from A1 to C2 before each song, so lyrics are simple when you start and grow as you do.",
  },
  {
    glyph: "13",
    title: "Thirteen languages",
    body: "From Spanish to Japanese to Croatian, learn any of them, understand everything in your own.",
  },
];

export const PRICING = [
  {
    step: "Step 1",
    title: "Try a sample song",
    price: "Free",
    priceAccent: true,
    body: "Open the app and hear one instantly. No account, no email, no card.",
    highlighted: false,
    hasEmailLink: false,
  },
  {
    step: "Step 2",
    title: "Sign up, get a credit",
    price: "1 song free",
    priceAccent: false,
    body: "Create an account and your first full song, your language, your genre, your level, is free. Still no card.",
    highlighted: true,
    hasEmailLink: false,
  },
  {
    step: "Step 3",
    title: "Keep the music going",
    price: "From $4.99/mo",
    priceAccent: false,
    body: "Subscribe for new songs every month: Starter is $4.99 a month, Plus is $9.99, and yearly plans cost less. Or buy song credit bundles, starting at $4.99 for five.",
    highlighted: false,
    hasEmailLink: false,
  },
];

export const FAQS = [
  {
    q: "Do I need an account to try it?",
    a: "Nope. Open the app and you get a free sample song immediately, no account, no email, no credit card. Sign up when you want a song made just for you.",
  },
  {
    q: "Which languages can I learn?",
    a: "Thirteen and counting: English, Spanish, French, German, Japanese, Italian, Arabic, Chinese, Croatian, Greek, Portuguese, Russian and Dutch. Every lyric is also translated into your own language, all 13 are supported as native languages too.",
  },
  {
    q: "What if the lyrics are too hard (or too easy)?",
    a: "You set the difficulty yourself before generating a song, anywhere from A1 (complete beginner) to C2 (near-native). Pick A1 for simple, catchy lines or push up to C2 for real wordplay, and change it any time you generate a new song.",
  },
  {
    q: "Do I get to pick the music style?",
    a: "Yes, that’s the point! Pick from genres like pop, indie, rap, R&B, jazz or reggaetón, or just type in your own if it’s not on the list. The AI composes an original song in that style, in your target language.",
  },
  {
    q: "How does the learning part work?",
    a: "Sing along karaoke-style with line-by-line lyrics. Tap any word to see what it means in your language, then save the ones you want to your vocab, where spaced repetition flashcards make sure they stick.",
  },
  {
    q: "What does it cost?",
    a: "A sample song is free instantly, and signing up gets you one full song credit free, no card needed. After that, subscribe for new songs every month: Starter is $4.99 a month, Plus is $9.99 a month, and both cost less on yearly plans. Prefer one-offs? Song credit bundles start at $4.99 for five songs. Importing songs from YouTube is included with your subscription at no extra cost.",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact & support", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Delete your account", href: "/delete-account" },
    ],
  },
];
