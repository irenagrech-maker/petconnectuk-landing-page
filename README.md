# PetConnect English

Angielskojęzyczny landing page PetConnect — pojedynczy plik HTML (bez build procesu, bez zależności npm).

## Status

To **koncepcja strony**, nie gotowa angielska aplikacja. Appka jest dziś dostępna tylko po polsku (App Store/Google Play), dlatego strona nie oferuje jej pobrania — zamiast tego formularz "Notify me" (na razie wyłącznie wizualny, nic nie zapisuje — patrz niżej). Zdjęcia i filmik to przykładowa, ilustracyjna treść, nie prawdziwe dane użytkowników appki.

## Uruchomienie

Zwykły statyczny HTML — wystarczy otworzyć `index.html` w przeglądarce, albo wrzucić cały katalog na dowolny hosting statyczny (Netlify, Cloudflare Pages, GitHub Pages).

```bash
# podgląd lokalny, dowolnym serwerem statycznym, np.:
npx serve .
```

## Struktura

- `index.html` — cała strona (HTML + CSS + JS w jednym pliku).
- `assets/` — logo (tło wycięte, biała łapka w środku zachowana), zdjęcie i filmik użyte na stronie.

## Co już działa

- Responsywny układ (header, hero, "How it works", "What you get", dwie sekcje CTA z zapisem na powiadomienie, kontakt, stopka).
- Autorski efekt "parowania" w hero — zdania formują się i rozpuszczają falą od lewej do prawej, plus lokalna reakcja na mysz (dotknięcie tekstu kursorem rozsypuje go w tym miejscu w kolorach marki).
- Wideo w tle sekcji "What you get" — bez dźwięku, odtwarza się raz i zatrzymuje na końcu; kliknięcie odtwarza od nowa.
- Formularze (notify-me, kontakt) mają gotowy UI i walidację, ale **nie są jeszcze podłączone do żadnego backendu** — kliknięcie pokazuje tylko lokalny stan "sukcesu" w przeglądarce, nic nie jest zapisywane ani wysyłane.

## Do zrobienia przed publikacją

- Podłączyć realne zbieranie e-maili z formularza "Notify me" (MailerLite / Tally / własna infrastruktura — decyzja otwarta, patrz `Brain/NEXT_STEPS.md` w głównym repo).
- Podłączyć formularz kontaktowy do faktycznej wysyłki (dziś tylko UI).
- Strony Regulaminu i Polityki Prywatności linkują na razie do polskich wersji (`petconnectapp.eu/regulamin`, `/politykaprywatnosci`) — nie ma jeszcze angielskich odpowiedników.
- Ustalić hosting i domenę docelową.
