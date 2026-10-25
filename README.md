# PetConnect UK

Angielskojęzyczny landing page PetConnect. Fotografia, przestronna kompozycja i przestrzenna prezentacja aplikacji. Projekt lokalny, bez publikacji i bez połączenia z backendem aplikacji.

## Podgląd projektu

Zrzuty otwierają się bezpośrednio w GitHubie:

- [Cała strona](artifacts/desktop-full.png)
- [Pierwszy ekran](artifacts/desktop-hero.png)
- [Telefon i prezentacja aplikacji](artifacts/motion-middle.png)
- [Wersja mobilna](artifacts/mobile-390-hero.png)

To obrazy gotowej strony. Animacje i interakcje działają po uruchomieniu projektu; publiczny adres strony nie został jeszcze utworzony.

## Uruchomienie

Node.js **22.12+** lub aktualne LTS (sprawdzone na 24.19.0), npm.

```bash
cd /workspace/petconnectuk-landing-page
npm ci
npm run dev
```

Po sklonowaniu w innym miejscu przejdź do własnego katalogu repozytorium. Używaj istniejącego checkoutu; nie ma potrzeby tworzenia worktree. Jeżeli port jest zajęty, można wskazać inny przez `npm run dev -- --port 5174`.

```bash
npm run check
npm run build
npm run preview
```

`dist/` zawiera gotową statyczną stronę. `base: './'` umożliwia późniejsze wdrożenie także pod ścieżką. Hosting, domena i publikacja pozostają do osobnego ustalenia. Nie są potrzebne zmienne środowiskowe ani klucze API.

## Co działa

- Menu sekcyjne oraz mobilne menu z obsługą Escape.
- Rytmiczne, odwracalne animacje przy naturalnym przewijaniu: fotografie oraz osobne plany przestrzennego telefonu.
- Interaktywne zakładki **Connect / Learn / Discover** z obsługą klawiatury, lokalnym zapisem przykładu, rozwijanym opisem i zmianą przykładowego filtra mapy.
- Oddzielny status **English: in development / Polish: available now** i prawdziwe linki sklepów.
- Ścieżka usługodawcy ustawia odpowiedni temat kontaktu.
- Formularz waliduje dane i przygotowuje szkic na **contact@petconnectapp.eu**. Następnie użytkownik otwiera program pocztowy, sprawdza i sam wysyła wiadomość. Strona nie wysyła jej automatycznie ani nie zapisuje danych.
- Wariant `prefers-reduced-motion`, lokalne fonty, zoptymalizowane fotografie WebP.

## Ważny status produktu

Angielski podgląd jest oznaczoną **koncepcją interfejsu**, nie gotową angielską aplikacją. Treści demonstracji i mapa są przykładowe. Nie ma połączenia z produkcyjnymi profilami lub usługami UK. Autentyczne screeny polskiej aplikacji mogą zostać dostarczone i włączone do kolejnej iteracji.

Marketplace nie jest wdrożony i nie jest reklamowany na stronie. Brak fikcyjnych opinii, wyników i liczników użytkowników. Nie dodano płatności, newslettera, analityki ani CRM.

## Dokumentacja

- [LANDING_BRIEF.md](LANDING_BRIEF.md) — fakty, decyzje z całego wywiadu, źródła, zależności.
- [DESIGN.md](DESIGN.md) — koncepcja, storyboard, paleta, score ruchu i macierz wymagań.
- [LANDING_PROMPT.md](LANDING_PROMPT.md) — pełny, samodzielny prompt wykonawczy.
- [public/assets/SOURCES.md](public/assets/SOURCES.md) — pochodzenie fotografii, logo i fontu.
- [VERIFICATION.md](VERIFICATION.md) — wyniki rzeczywistych sprawdzeń, screenshoty i ograniczenia.

Przed publiczną publikacją: ustalić hosting i domenę, potwierdzić prawa do fotografii/fontu oraz docelowe dokumenty prawne, sprawdzić dostępność sklepów dla docelowego regionu. Linki prawne prowadzą obecnie do istniejących dokumentów polskich i są tak podpisane.

## Struktura

`src/main.js` — treść, demonstracja, kontakt i ruch; `src/style.css` — system wizualny i responsywność; `public/assets/` — lokalne materiały; `artifacts/` — dowody przeglądu w Chromium. Dokumentacja pozostaje po polsku, interfejs po angielsku.
