# SEO plan

Reference for anyone adding a page, writing a post, or changing on-page markup on
tunelingo.app. Derived from keyword research completed August 2026: 434 keywords mined,
301 kept, grouped into 30 SERP-sharing sets, each labelled by observing what actually
ranks.

Companion file: `UTM_CONVENTIONS.md` for campaign strings and tracked events.

---

## 1. The finding everything rests on

**Generic and app-qualified queries return app landing pages. Language-specific music
queries return media (YouTube, Spotify, Reddit).**

Adding the word "app" to a query flips intent from informational to commercial.

**But the commercial terms have almost no search volume.** The SERPs that admit an app
landing page are the ones nobody searches:

| Query | SERP admits apps | Monthly volume |
|---|---|---|
| language learning app with music | yes | 0 |
| app to understand foreign song lyrics | yes | 0 |
| learn vocabulary from songs | yes | 0 |
| translate song lyrics app | yes | 40 |
| learn a language through music | yes | 110 |
| duolingo alternatives | no, blog posts | **1,900** |
| learn spanish free | no, forums | 18,100 |

People search for brands they know, not for a product category that has no name yet.
`lingoclip` gets 390 and `lyricstraining` gets 2,900 while the category term gets 0.

**Consequence:** traffic comes from competitor comparison and from Spanish informational
content. The money pages exist to convert that traffic, not to attract it.

---

## 2. URL architecture

```
MONEY PAGES
/                        Category terms, brand, primary conversion destination
/pricing                 Cost queries, AEO target

CLUSTER CONTENT
/blog/                   Index
/blog/{slug}             Posts

UNCHANGED
/about  /contact  /privacy  /terms  /delete-account
```

Rules:

- **One page, one primary keyword.** Two pages chasing the same query means neither ranks.
- How it works, Features and FAQ stay as homepage anchors. No independent search demand.
- No per-language money pages. Cancelled after intent research, see §5.
- English only. No translated site versions.
- New pages auto-append to `sitemap.xml`. Each needs a unique title, meta description,
  single H1 and self-referencing canonical.
- Every new page needs a `utm_campaign` string added to `UTM_CONVENTIONS.md`.

---

## 3. Page inventory

### Money pages

| URL | Primary target | Volume | Notes |
|---|---|---|---|
| `/` | learn a language with music, language learning app with music | ~110 | Reworked Aug 2026 |
| `/pricing` | is tunelingo free, tunelingo pricing | low | Conversion + AEO. Real pricing now on the homepage; a dedicated page is still worth building |

### Comparison posts (commercial intent, article format)

These keywords are commercial but the pages that rank are listicles. **Match the format
Google shows or do not rank.** They live in `/blog/` and link down to the money pages.

| URL | Target | Volume | Difficulty |
|---|---|---|---|
| `/blog/duolingo-alternatives` | duolingo alternatives | **1,900** | Winnable. Top 5 is Reddit, Android Authority, and three small sites |
| `/blog/lingopie-alternatives` | lingopie alternative, is lingopie worth it | ~410 | Medium. Mostly competitor apps' own posts |

**Do not build a Lingoclip page.** All four top slots are brand-owned (lingoclip.com,
lingoclip.app, their Play listing, their Instagram). Unwinnable.

### Cluster A: music and memory (informational, feeds the homepage)

| URL | Target | Keywords |
|---|---|---|
| `/blog/does-music-help-language-learning` | does music help, can you learn from music | 14 |
| `/blog/best-way-to-learn-vocabulary` | best way to learn vocabulary | 15 |
| `/blog/learn-a-language-by-listening` | learn a language by listening | 9 |
| `/blog/why-song-lyrics-stick-in-your-head` | melody and memory, why lyrics stick | 4 |

The last one is the **linkable asset**. Its SERP returns research and university pages,
which makes it the best citation candidate on the site for both backlinks and AEO.

### Cluster B: Spanish (informational, long term)

| URL | Target | Keywords |
|---|---|---|
| `/blog/learn-spanish-with-music` | learn spanish with music and with songs | 31 |
| `/blog/spanish-songs-with-lyrics-and-translation` | spanish songs with lyrics and translation | 13 |
| `/blog/spanish-songs-for-beginners` | spanish songs for beginners | 12 |
| `/blog/learn-spanish-by-listening` | learn spanish by listening | 9 |

Largest keyword count, hardest SERP. YouTube, Spotify and Reddit hold three of five slots.
Long-term asset, not an early win.

Note: a Play Store listing (LyricFluent) ranks on this SERP. **The store listing can
compete here even when a blog post cannot.** That is an ASO play, not an SEO one.

### Later

`/blog/karaoke-with-translation`, `/blog/understand-song-lyrics-another-language`,
`/blog/learn-japanese-with-music`. Japanese returned blog posts and Reddit rather than
YouTube and Spotify, so it may be materially easier than Spanish.

---

## 4. Build order

1. ~~**Homepage rework.**~~ Done August 2026. Not a traffic driver, there is little traffic
   to drive. It is the conversion destination for everything the blog earns, and the AEO
   anchor.
2. **`/blog/duolingo-alternatives`.** Biggest winnable term on the site.
3. **`/pricing`.** Small, fast, removes a live contradiction.
4. **Cluster A.** Generic rather than language specific, so it feeds the homepage.
   Contains the linkable asset.
5. **`/blog/lingopie-alternatives`.**
6. **Cluster B, Spanish.** Slow compounding.

Finish one cluster before starting the next. Scattering across topics delays results.

---

## 5. Clusters and internal linking

### Why this matters

Google does not evaluate a page alone. When someone searches "does music help language
learning", it checks whether the site also covers how to learn vocabulary from songs, why
lyrics stick, learning by listening. Cover the whole journey and every keyword in the
cluster becomes easier to rank for, including the competitive ones. That is topical
authority, and it is also what makes AI assistants treat the site as a source worth
citing.

Internal linking is what turns four separate articles into a cluster. It has the best
effort-to-value ratio of any SEO tactic here. **Do not skip it and do not defer it.**

### Rules

1. **Finish one cluster before starting the next.** Scattering across topics delays
   results everywhere. Cluster A is four posts; all four ship before Cluster B starts.
2. **Every post links down to a money page.** Usually `/`, sometimes `/pricing`.
3. **Every post links across to the other posts in its cluster.**
4. **Links are decided here, not inferred.** `relatedPosts` in a post's frontmatter is
   filled from the map below. No tag-based or algorithmic relations.
5. **Anchor text carries the target keyword** of the page being linked to, not "click
   here" or "read more".
6. **When a new post ships, update the posts that should link to it.** Links are
   bidirectional by intent even though the markup is not.

### Cluster A: music and memory

```
does-music-help-language-learning  <──┐
        │                             │
        ├──> best-way-to-learn-vocabulary
        ├──> learn-a-language-by-listening
        └──> why-song-lyrics-stick-in-your-head
                     all four link down to  /
```

| Post | relatedPosts | Links down to |
|---|---|---|
| `does-music-help-language-learning` | `why-song-lyrics-stick-in-your-head`, `learn-a-language-by-listening` | `/` |
| `why-song-lyrics-stick-in-your-head` | `does-music-help-language-learning`, `best-way-to-learn-vocabulary` | `/` |
| `best-way-to-learn-vocabulary` | `why-song-lyrics-stick-in-your-head`, `does-music-help-language-learning` | `/` |
| `learn-a-language-by-listening` | `does-music-help-language-learning`, `best-way-to-learn-vocabulary` | `/` |

`does-music-help-language-learning` is the cluster hub. It has the most keywords (14) and
the clearest question intent, so it takes the most inbound links.

### Comparison posts

These sit outside the informational clusters. They are mid-funnel and convert better, so
they link down harder.

| Post | relatedPosts | Links down to |
|---|---|---|
| `duolingo-alternatives` | `lingopie-alternatives`, `does-music-help-language-learning` | `/`, `/pricing` |
| `lingopie-alternatives` | `duolingo-alternatives`, `does-music-help-language-learning` | `/`, `/pricing` |

Comparison posts link to `/pricing` as well as `/`, because a visitor comparing apps is
already asking what things cost.

### Cluster B: Spanish

Build later. `learn-spanish-with-music` is the hub.

| Post | relatedPosts | Links down to |
|---|---|---|
| `learn-spanish-with-music` | `spanish-songs-for-beginners`, `spanish-songs-with-lyrics-and-translation` | `/` |
| `spanish-songs-for-beginners` | `learn-spanish-with-music`, `learn-spanish-by-listening` | `/` |
| `spanish-songs-with-lyrics-and-translation` | `learn-spanish-with-music`, `spanish-songs-for-beginners` | `/` |
| `learn-spanish-by-listening` | `learn-spanish-with-music`, `spanish-songs-for-beginners` | `/` |

Cluster B links across to Cluster A where relevant, for example from
`learn-spanish-with-music` to `does-music-help-language-learning`. Cluster A does not need
to link into Cluster B, since the generic posts should not be narrowed to one language.

### Where keywords come from

Each post's keyword set is a group from the Pass B research. `Tunelingo_Step5_PassB_Intent.xlsx`,
Group members sheet, filtered by group id:

| Post | Group | Keywords |
|---|---|---|
| `does-music-help-language-learning` | A5 | 14 |
| `best-way-to-learn-vocabulary` | A7 | 15 |
| `learn-a-language-by-listening` | A6 | 9 |
| `why-song-lyrics-stick-in-your-head` | B13 | 4 |
| `duolingo-alternatives` | A14 | 16 |
| `lingopie-alternatives` | A13 | 15 |
| `learn-spanish-with-music` | A8 + A9 | 31 |
| `spanish-songs-for-beginners` | A10 | 12 |
| `spanish-songs-with-lyrics-and-translation` | B2 | 13 |
| `learn-spanish-by-listening` | A11 | 9 |

One page owns one group. Two pages must never target the same group.

---

## 6. Reversed decisions, do not reintroduce

- **Per-language money pages are cancelled.** `/learn-spanish-with-music` is a blog post,
  not a landing page, because that SERP is informational and media-owned.
- **The 13 language pages plan is dropped.** No evidence any of them can rank.
- **`/translate-song-lyrics` is not a standalone page.** 40 searches a month does not
  justify a URL. The content belongs on the homepage.
- **Spanish is not cluster 1.** Most keywords, hardest SERP.

---

## 7. On-page checklist

Every page, before it ships:

- **Title tag.** Target keyword front-loaded, under 60 characters, compelling enough to
  click. On the homepage, Tunelingo must stay the first word for OAuth brand
  verification.
- **H1.** One per page, mirrors the title tag.
- **H2 / H3.** Real hierarchy. Both Google and LLMs read it to understand structure.
- **URL.** Short, descriptive, includes the keyword. No auto-generated slugs.
- **Meta description.** 150 to 160 characters, written like ad copy. Not a ranking factor,
  but it decides the click.
- **Internal links.** Every post links to at least one money page and to related posts.
  Best effort-to-value ratio of any SEO tactic. Do not skip it.
- **Images.** Descriptive filenames, alt text that describes the image to someone who
  cannot see it, WebP, compressed.
- **UTM.** Store links via `lib/storeLinks.ts` with the page's campaign string.

---

## 8. AEO rules

AI assistants (ChatGPT, Perplexity, Gemini, AI Overviews) cite content they can parse.
The same work that ranks in Google also earns citations, plus:

- **Answer the question directly, near the top**, before the context and the caveats.
- **Use question-shaped H2s** that match how people actually ask.
- **Include an FAQ block** on every substantial page. The research surfaced 58 real
  question keywords from People Also Ask, plus forum questions. Use their wording, not
  a marketer's paraphrase.
- **Bing matters.** ChatGPT searches against Bing's index and Perplexity leans on it.
  Bing Webmaster Tools is set up; keep the sitemap submitted there too.
- **Keep server-side rendering.** Several AI crawlers do not execute JavaScript. All
  current routes are SSR and new ones must be.

Zero-volume conversational queries ("what is the best app to learn a language with
music") are invisible to keyword tools but are exactly what people ask assistants. Do not
judge that content by search volume.

---

## 9. Product facts that constrain copy

From `PRODUCT_BRIEF.md`, which is the source of truth. The ones that bite most often:

- No em-dashes in marketing copy.
- Subscriptions grant "songs per month". Bundles grant "credits". Never call the
  subscription allowance credits.
- The free hook is exactly one free song, and it is a **generated** song. Real songs
  require an active subscription. Any page targeting the translation space brings visitors
  who hit a paywall on the thing they came for. Design the CTA accordingly.
- **Never say "unlimited" imports.** The approved phrasing is "included with your
  subscription at no extra cost".
- Imported real songs are subscription access, not owned. Never "yours to keep",
  "yours forever", "permanent" or "downloaded". Those apply to generated songs and saved
  vocabulary only.
- No background or lock-screen playback for real songs. Lock-screen copy applies to
  generated songs only.
- The no-ads claim is scoped to the app. The embedded YouTube player can show YouTube's
  own ads. Never promise ad-free playback for real songs.
- Sync is word-level for most tracks, line-level for some. Do not promise perfect sync.
- Songs are private per account. No social features, no sharing, no feed.
- The app is 13+ and deliberately does not target children. Kids keywords were cut.

---

## 10. Measurement

- **Google Search Console** is the reporting layer: queries, impressions, clicks,
  positions. Check monthly.
- **Umami** for pageviews (automatic) and two events: `store_click`, `email_signup`.
  Do not add a pageview event, it would double count.
- **Conversion rate** = Umami pageviews per URL against event counts. Supabase holds the
  actual signups and is the source of truth for who, not how many.
- **Email is the top-funnel conversion.** Informational posts should lead with the email
  capture, not the store link. Many readers will not install on the spot even though both
  stores are now live.
- **AI visibility**: monthly manual check. Ask the target questions in ChatGPT, Perplexity
  and Google in an incognito window, log whether Tunelingo appears and who does.

Early signals to expect, in order: impressions rising before clicks, new keywords
appearing, positions drifting from page five toward page three. Conversions stay near
zero for months. That is the shape of the curve, not failure.

---

## 11. Open items

- Store listings still say "not a catalog of real songs you have to search through",
  which contradicts the Real songs feature.
- App Store Content Rights answer needs revisiting given third-party lyrics and embedded
  video.
- Cross-check three zero-volume terms in Google Keyword Planner. Keyword Surfer reports 0
  below its measurement floor, so "0" means very small, not none.
- Play Install Referrer is backlogged in the app repo. Trigger: ~100 web-driven store
  clicks a month, or iOS launch.
