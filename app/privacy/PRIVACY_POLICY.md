# TuneLingo Privacy Policy

**Effective date:** 25 July 2026
**Last updated:** 25 July 2026

TuneLingo is a language-learning app that generates personalized songs to help you learn languages. It is operated by **Dombyte Studio**, established in the Netherlands and registered with the Dutch Chamber of Commerce (KvK) under number 42083302 ("TuneLingo", "we", "us", "our"). Dombyte Studio is the data controller for the personal data described in this policy.

This policy explains what data we collect when you use the TuneLingo mobile app and website, why we collect it, who we share it with, how long we keep it, and the rights you have over it.

**Contact:** [legal@tunelingo.app](mailto:legal@tunelingo.app)

---

## 1. Summary

- We collect the data needed to run your account, generate your songs, sync your learning progress, and process your purchases.
- Song generation uses third-party AI services. Your song request (language, level, genre, topic text, duration) is sent to those services **without your name, email, or any account identifier**.
- Your data is stored on servers located in the **European Union**.
- We use analytics (Amplitude, EU servers) and crash reporting (Firebase Crashlytics) to improve the app. Analytics events **never contain your prompts, lyrics, or any text you type**.
- We do **not** show ads, we do **not** sell your personal data, and we do **not** track you across other companies' apps or websites.
- You can delete your account at any time in the app (Settings → Delete account). Deletion becomes permanent after a 14-day recovery window.

---

## 2. Data we collect

### 2.1 Account data

When you create an account we collect:

- **Email address** — used to sign in, confirm your account, and send service emails (email confirmation, password reset, email-change confirmation).
- **Password** — stored only as a secure cryptographic hash by our authentication provider (Supabase). We never see or store your plain-text password.
- **Display name** — the name you choose at sign-up (optional for Apple sign-in).

If you sign in with **Google**, we receive your Google account email address and basic profile information from Google. If you sign in with **Apple**, we receive the email address you choose to share — Apple lets you hide your real address and share a private relay address instead — and, on first sign-in only, the name you approve.

### 2.2 Learning profile

- Your **native language** (the language songs are translated into).
- The **languages you are learning**, each with your chosen proficiency level (A1–C2).
- App settings and preferences.

### 2.3 Content you create and learning activity

- **Song requests** — the choices and text you enter when generating a song: target language, level, genre/mood, topic or custom idea text, and requested duration.
- **Generated songs** — the resulting audio, cover image, lyrics, phonetics, and translations, saved to your library.
- **Saved vocabulary** — words you save from song lyrics, together with your flashcard study history (ratings and review schedule).
- **Learning activity** — listening time, songs generated, study sessions completed, favorites, daily activity, and streaks.

**Songs are shared content.** To avoid generating the same song twice, identical song requests (same language, level, genre, text, and settings) resolve to one shared song. A song row itself is not linked to your identity for other users — only your own library records which songs belong to you. Because song requests can produce shared content, **do not include personal information (yours or anyone else's) in your song idea text**.

### 2.4 Purchases and subscription data

- Your subscription plan and status, credit balance, and a ledger of credit transactions (purchases, spends, refunds).
- Payment is processed entirely by **Apple (App Store)** or **Google (Google Play)**. We never receive or store your card number or full payment details. We receive confirmation of what you bought so we can unlock it.
- We use **RevenueCat** to manage in-app purchases and subscription status. RevenueCat processes your purchase history and an app user ID (your account's internal user ID) — see Section 5.

### 2.5 Device and technical data

- **Push notification token** — if you allow notifications, your device's push token and platform (iOS/Android) are stored so we can notify you when a generated song is ready. The token is deleted when you sign out.
- **Device locale and language** — read on-device to display the app in an appropriate language.
- **Crash data** — if the app crashes or hits an error, Firebase Crashlytics collects a crash report including device model, operating system version, app version, the technical stack trace, and your internal user ID (so we can investigate issues you report). Crash reports do not contain your prompts or lyrics.
- **Analytics events** — see Section 4.
- **Server logs** — like almost every online service, our backend records technical request logs (which include your IP address) when the app communicates with our servers. These logs are used for security, abuse prevention, and troubleshooting, and are kept only for a limited period.

### 2.6 Account deletion data

If you delete your account, you may optionally tell us why (a reason category and free-text comment). At the moment of your request we also compute an aggregate statistics snapshot (e.g. number of songs, words saved, listening time, account age, subscription tier). After the deletion is completed, this record is retained **without any link to your identity** and is used only to understand why people leave. Do not include personal information in the free-text comment.

### 2.7 Support communications

If you email us, we receive your email address and the contents of your message, and keep them as long as needed to resolve your request.

### 2.8 What we deliberately do not collect

- **No microphone access.** The app never records audio; the microphone permission is explicitly removed from the app.
- **No location data, no contacts, no photos.**
- **No advertising identifiers, no ads, no cross-app tracking.**
- **No user-generated text in analytics.** Analytics events contain only predefined choices, counts, and flags — never your prompt text, lyrics, or search input.
- We do **not sell** personal data and never have.

---

## 3. Why we process your data (purposes and legal bases)

Under the EU General Data Protection Regulation (GDPR), we process your personal data on the following legal bases:

| Purpose | Data used | Legal basis |
|---|---|---|
| Creating and operating your account; signing you in | Account data | Performance of a contract (Art. 6(1)(b)) |
| Generating songs and building your library | Song requests, generated content | Performance of a contract |
| Syncing your vocabulary, study progress, streaks, and settings across sessions and devices | Learning profile, content, activity | Performance of a contract |
| Processing purchases, subscriptions, and credits | Purchase data | Performance of a contract |
| Sending you a push notification when your song is ready | Push token | Performance of a contract (and your OS-level notification permission) |
| Service emails (confirmation, password reset) | Email address | Performance of a contract |
| Understanding how the app is used and improving it | Analytics events (Section 4) | Legitimate interest (Art. 6(1)(f)) — improving our product |
| Diagnosing crashes and errors | Crash data | Legitimate interest — keeping the app working |
| Preventing fraud and abuse (e.g. duplicate refunds, quota enforcement) | Account, purchase, and generation records | Legitimate interest — protecting the service |
| Understanding account deletions | Anonymized deletion snapshot, optional exit reason | Legitimate interest — improving the product |
| Complying with legal obligations (e.g. tax and bookkeeping rules for purchases) | Transaction records | Legal obligation (Art. 6(1)(c)) |

Where we rely on legitimate interest, you have the right to object — see Section 9.

---

## 4. Analytics

We use **Amplitude** for product analytics, configured to store data exclusively on **Amplitude's EU servers**.

What Amplitude receives:

- Usage events such as "song generation started", "song opened", "study session completed", "paywall viewed", and screen views — each with only predefined properties (e.g. the selected language, level, genre, counts, and durations).
- An internal user ID (your account's ID — not your email or name) and user properties limited to: native language, learning language and level, and subscription tier.
- A device identifier generated by the analytics SDK. This identifier is reset when you sign out, so activity after sign-out cannot be linked to your previous identity.

What Amplitude never receives: your email, your name, your prompt text, lyrics, translations, search queries, or any other text you type. Screen tracking records only route patterns (e.g. `/song/[id]`), never actual content identifiers.

---

## 5. Who we share data with (processors and recipients)

We share personal data only with the service providers below, only to the extent needed for the stated purpose. We do not sell personal data or share it for advertising.

### 5.1 Infrastructure and operations

| Provider | Purpose | Data involved | Location |
|---|---|---|---|
| **Supabase** | Database, authentication, file storage, and server-side functions — the core backend of TuneLingo | All account, profile, content, activity, and purchase-state data | Hosted in the **EU** |
| **Amplitude** | Product analytics | Usage events, internal user ID, limited user properties (Section 4) | **EU** data residency |
| **Google Firebase (Crashlytics)** | Crash and error reporting | Crash reports, device/OS/app version, internal user ID | Google infrastructure (may include the US) |
| **RevenueCat** | In-app purchase and subscription management | Internal user ID, purchase history, subscription status | US |
| **Expo (Expo Application Services)** | Delivering push notifications | Push token, notification content ("your song is ready") | US |
| **Apple / Google** | Sign-in (optional) and payment processing | Sign-in identity; all payment details (handled entirely by them under their own privacy policies) | Per their policies |

### 5.2 AI generation services

When you generate a song, our servers (not your device) call the following services. They receive **only the content needed to generate the song — never your name, email, or account identifier**:

| Provider | Purpose | Data sent |
|---|---|---|
| **DeepSeek** | Writing the lyrics, translations, phonetics, and vocabulary annotations | Your song request content: target language, native language, level, genre, topic/idea text, requested duration |
| **kie.ai (Suno)** | Generating the music and cover art from the lyrics | The generated lyrics and style/genre description |
| **ElevenLabs** | Aligning word-level timestamps to the finished audio | The generated audio file and lyric lines |

The generated audio and images are then stored on our own EU-hosted storage; the app never communicates with these providers directly. Because your idea text is sent to these providers as generation content, **treat song prompts as public-ish content and keep personal details out of them** (Section 2.3).

### 5.3 Other disclosures

We may disclose personal data if required by law, court order, or governmental authority, or where necessary to establish, exercise, or defend legal claims, or to protect the security of the service and its users. If Dombyte Studio is involved in a merger, acquisition, or asset sale, personal data may be transferred as part of that transaction; this policy would continue to apply until a new one takes effect.

---

## 6. International transfers

Your data is primarily stored and processed in the **European Union** (Supabase EU hosting, Amplitude EU data residency).

Some of the providers listed above are located outside the European Economic Area, including the United States (RevenueCat, Expo, Google/Firebase, ElevenLabs) and other jurisdictions (DeepSeek, kie.ai). Where personal data is transferred outside the EEA, we rely on appropriate safeguards, such as the European Commission's Standard Contractual Clauses or the provider's certification under the EU–US Data Privacy Framework, where applicable. The AI generation services in Section 5.2 receive song content only, not data linked to your account identity.

---

## 7. Data retention

| Data | Retention |
|---|---|
| Account, profile, content, and activity data | Kept while your account exists; deleted when your account deletion completes (see Section 8) |
| Push notification token | Deleted when you sign out (and with your account) |
| Analytics data (Amplitude) | Retained per our analytics configuration; identity is keyed to your internal user ID, and the device identifier is rotated on sign-out |
| Crash reports (Crashlytics) | Retained for the limited period Firebase Crashlytics keeps crash data |
| Purchase and transaction records | Retained as required by Dutch tax and bookkeeping law (in general, seven years), and by Apple, Google, and RevenueCat under their own policies |
| Technical generation logs | Server-side logs of song-generation pipeline calls, used for debugging; the link to your account is removed when your account is deleted |
| Anonymized deletion snapshot and exit reason | Retained without any link to your identity (Section 2.6) |
| Support emails | Kept as long as needed to resolve your request and for a reasonable period afterwards |

**Shared songs:** because generated songs are shared, deduplicated content not owned by any single account (Section 2.3), the audio, lyrics, and cover of a song may remain in the catalog after you delete your account. Your personal link to the song — your library entry, favorites, and vocabulary — is deleted with your account.

**On your device:** the app stores your session tokens in your device's secure storage, and caches song audio and app data locally so playback works smoothly. This local data never leaves your device and is removed when you uninstall the app.

---

## 8. Deleting your account

You can delete your account at any time in the app: **Settings → Delete account**.

1. Your deletion request is registered and you are signed out.
2. A **14-day recovery window** follows. If you sign back in during this window, your account and all your data are fully restored and the deletion is cancelled.
3. After 14 days, your account and all data linked to it — profile, library links, saved vocabulary, study history, activity, settings, credit ledger, and push tokens — are **permanently deleted**. This cannot be undone.

What is not deleted: the items listed in Section 7 as retained (legally required transaction records, anonymized logs and deletion statistics, and shared song content that is not linked to your identity). Data held by Apple, Google, and RevenueCat about your purchases is governed by their own policies; you can also request deletion from them directly.

If you cannot access the app, you can request deletion by emailing [legal@tunelingo.app](mailto:legal@tunelingo.app) from your account's email address.

---

## 9. Your rights

Under the GDPR you have the right to:

- **Access** — obtain a copy of the personal data we hold about you.
- **Rectification** — correct inaccurate data (email, display name, password, and languages can be changed directly in the app under Settings).
- **Erasure** — delete your data (Section 8, or by email).
- **Restriction** — ask us to restrict processing in certain circumstances.
- **Data portability** — receive the data you provided in a structured, commonly used, machine-readable format.
- **Objection** — object to processing based on our legitimate interests, including analytics and crash reporting.
- **Withdraw consent** — where processing is based on consent (e.g. OS-level notification permission), withdraw it at any time; for notifications, disable them in your device settings.

To exercise any of these rights, email [legal@tunelingo.app](mailto:legal@tunelingo.app). We will respond within one month as required by the GDPR. We may need to verify your identity (normally by confirming control of your account's email address) before acting on a request.

You also have the right to lodge a complaint with a supervisory authority — in the Netherlands, the **Autoriteit Persoonsgegevens** ([autoriteitpersoonsgegevens.nl](https://www.autoriteitpersoonsgegevens.nl)) — or with the authority in your own EU member state.

---

## 10. Security

We take appropriate technical and organizational measures to protect your data, including:

- All traffic between the app and our servers is encrypted with HTTPS/TLS.
- Passwords are stored only as secure hashes; sign-in sessions on your device are kept in the operating system's secure storage (Keychain on iOS, Keystore-backed storage on Android).
- Database access is protected by row-level security: your records are readable and writable only by your own authenticated account.
- API keys for the AI and infrastructure services exist only on our servers — they are never embedded in the app.
- Access to production data is limited to what is necessary to operate the service.

No system is perfectly secure. If we become aware of a data breach affecting your personal data, we will notify the relevant supervisory authority and affected users as required by law.

---

## 11. Children

TuneLingo is not directed at children under 13, and you must be at least **13 years old** (or older where your country sets a higher minimum age for digital consent) to create an account. We do not knowingly collect personal data from children under 13. If you believe a child under 13 has created an account, contact [legal@tunelingo.app](mailto:legal@tunelingo.app) and we will delete it.

---

## 12. Push notifications

Notifications are optional and controlled by your operating system's permission. If enabled, we send:

- A **"your song is ready"** notification when a song you requested finishes generating (this uses the stored push token, Section 2.5).
- Local reminders scheduled on your device (e.g. study reminders), which do not involve our servers.

You can turn notifications off at any time in your device settings; the app works fully without them.

---

## 13. Marketing

We currently send only transactional and service emails (account confirmation, password reset, email-change confirmation). We do not send marketing emails. If we ever introduce them, they will be opt-in and every message will include an unsubscribe link.

---

## 14. Changes to this policy

We may update this policy as the app evolves — for example, if we add features or change providers. The "Last updated" date at the top always reflects the current version. For material changes, we will notify you in the app or by email before the changes take effect. Continued use of TuneLingo after a change takes effect constitutes acceptance of the updated policy.

---

## 15. Governing law

This policy and any disputes arising from it are governed by the laws of the **Netherlands**, without prejudice to the mandatory data-protection rights you hold under the GDPR or the consumer-protection laws of your country of residence.

---

## 16. Contact

**Dombyte Studio**
Netherlands
KvK (Dutch Chamber of Commerce) no. 42083302

Data protection and privacy inquiries: [legal@tunelingo.app](mailto:legal@tunelingo.app)
