# UTM conventions

Reference for anyone adding a store link, a marketing page, or an outbound campaign link.

Analytics tools treat `Spanish-Page` and `spanish-page` as two unrelated campaigns.
Inconsistency does not throw an error, it silently splits the data. Follow this exactly.

## Rules

1. Lowercase only.
2. Hyphens as separators. Never underscores, never spaces.
3. Name the source, not the audience. `blog-does-music-help` describes where the click
   came from and is verifiable. `spanish-learners` describes who you hope clicked and is
   not.
4. No dates or version numbers in campaign strings. Timestamps already exist.
5. **Once a string is live, never rename it.** Renaming does not migrate history, it forks
   it. You end up with `spanish-page` covering the first four months and `spanish`
   covering everything after, with no way to join them.

---

## Outbound: tunelingo.app to the app stores

Implemented in `lib/storeLinks.ts`. Never hand write a store URL, always use the helper.

Two parameters are fixed and never vary:

| Parameter | Value |
|---|---|
| `utm_source` | `tunelingo.app` |
| `utm_medium` | `web` |

`utm_campaign` varies per page:

| Page | `utm_campaign` |
|---|---|
| `/` | `homepage` |
| `/pricing` | `pricing` |
| `/learn-spanish-with-music` | `spanish-page` |
| `/learn-japanese-with-music` | `japanese-page` |
| `/learn-{language}-with-music` | `{language}-page` |
| `/blog/{slug}` | `blog-{slug}` |

### Google Play

The three pairs are joined into one string and then URL encoded into a single `referrer`
parameter:

```
utm_source=tunelingo.app&utm_medium=web&utm_campaign=homepage
```

becomes

```
https://play.google.com/store/apps/details?id=<PACKAGE_ID>&referrer=utm_source%3Dtunelingo.app%26utm_medium%3Dweb%26utm_campaign%3Dhomepage
```

The encoding is not cosmetic. An unencoded `&` splits the referrer value and the app
receives only the first pair. Play stores this value at install time and hands it to the
app on first launch via the Install Referrer API, so a referrer that was wrong at install
time can never be corrected afterwards.

### App Store

The campaign value goes in the `ct` parameter and surfaces in App Store Connect
acquisition reports:

```
https://apps.apple.com/app/id6793957173?ct=homepage&mt=8
```

---

## Inbound: other channels to tunelingo.app

Not in use yet. Required from the first newsletter send or social post. Umami captures
inbound `utm_*` parameters from the URL automatically, no code needed.

| Parameter | Meaning | Examples |
|---|---|---|
| `utm_source` | The platform | `resend`, `reddit`, `producthunt`, `x` |
| `utm_medium` | The channel | `email`, `social`, `referral` |
| `utm_campaign` | The specific send or post | `ios-launch`, `beta-announcement` |

Inbound and outbound are separate systems. Do not reuse an outbound campaign string for
an inbound link or the two will merge in reporting.

---

## Tracked events

Fired through `lib/analytics.ts`. Keep this list short, every extra event is noise.

| Event | Properties | Fires on |
|---|---|---|
| `store_click` | `page`, `utm_campaign`, `platform` | Click on any store link |
| `email_signup` | `page`, `utm_campaign` | Successful waitlist submission |

Do **not** add a `page_visit` event. Umami tracks pageviews automatically and a custom
event would double count every view.
