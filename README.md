# PetConnect UK

Angielskojęzyczny landing page PetConnect, wersja 3 z ciepłymi generowanymi zdjęciami i rozwiniętą animacją. Ekrany aplikacji w otwarciu, dokładna paleta marki, jeden spójny system Satoshi i widoczne korzyści. Projekt lokalny, bez publikacji i bez połączenia z backendem aplikacji.

## Podgląd projektu

Zrzuty otwierają się bezpośrednio w GitHubie:

- [Krótka animowana prezentacja](artifacts/v3-motion-preview.gif)
- [Cała strona](artifacts/v3-desktop-full.png)
- [Pierwszy ekran](artifacts/v3-desktop-hero.png)
- [Telefon i prezentacja aplikacji](artifacts/v3-desktop-preview.png)
- [Wersja mobilna](artifacts/v3-mobile-390-hero.png)

To obrazy gotowej strony. Animacje i interakcje działają po uruchomieniu projektu; publiczny adres strony nie został jeszcze utworzony.

## Podgląd internetowy z gotowej paczki

Instrukcja i gotowy build do przeciągnięcia na Netlify: [preview/README.md](preview/README.md). W tej sesji nie ma narzędzia publikacji ani własnego hostingu; sam zapis plików nie tworzy publicznego adresu.

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

## Przygotowanie Vapor Type

Na prośbę użytkowniczki dodano obsługę React/TSX i Tailwind pod komponent React Bits Pro. **Vapor Type nie został jeszcze pobrany ani zamontowany**: brak klucza w środowisku i dostępu do dokumentacji/rejestru. Bieżący wygląd strony pozostaje bez zmian. Szczegóły: [REACTBITS_SETUP.md](REACTBITS_SETUP.md).

## Co działa

- Menu sekcyjne oraz mobilne menu z obsługą Escape.
- Szeroka scena wspólnego spaceru, odsłanianie fotografii przy scrollu i rysowana linia trzech kroków.
- Lekkie, odwracalne zmiany perspektywy telefonów przy naturalnym przewijaniu, bez długiej sekcji sticky.
- Interaktywne zakładki **Connect / Learn / Discover** z obsługą klawiatury, lokalnym polubieniem, komentarzem, wyszukiwarką przykładowych artykułów i filtrem mapy.
- Oddzielny status **English: in development / Polish: available now** i prawdziwe linki sklepów.
- Ścieżka usługodawcy ustawia odpowiedni temat kontaktu.
- Formularz waliduje dane i przygotowuje szkic na **contact@petconnectapp.eu**. Następnie użytkownik otwiera program pocztowy, sprawdza i sam wysyła wiadomość. Strona nie wysyła jej automatycznie ani nie zapisuje danych.
- Wariant `prefers-reduced-motion`, lokalne fonty, zoptymalizowane fotografie WebP.

## Ważny status produktu

Angielski podgląd jest oznaczoną **koncepcją interfejsu**, nie gotową angielską aplikacją. Treści demonstracji i mapa są przykładowe. Nie ma połączenia z produkcyjnymi profilami lub usługami UK. Dostarczone screeny polskiej aplikacji posłużyły jako referencja struktury UI. Źródłowe rozmowy i profile nie zostały opublikowane; demonstracja używa własnych przykładowych tekstów i wygenerowanych zdjęć.

Marketplace nie jest wdrożony i nie jest reklamowany na stronie. Brak fikcyjnych opinii, wyników i liczników użytkowników. Nie dodano płatności, newslettera, analityki ani CRM.

## Dokumentacja

- [LANDING_BRIEF.md](LANDING_BRIEF.md) — fakty, decyzje z całego wywiadu, źródła, zależności.
- [DESIGN.md](DESIGN.md) — koncepcja, storyboard, paleta, score ruchu i macierz wymagań.
- [LANDING_PROMPT.md](LANDING_PROMPT.md) — pełny, samodzielny prompt wykonawczy.
- [public/assets/GENERATED_IMAGES.md](public/assets/GENERATED_IMAGES.md) — pochodzenie i prompty nowych fotografii.
- [public/assets/SOURCES.md](public/assets/SOURCES.md) — pochodzenie fotografii, logo i fontu.
- [VERIFICATION.md](VERIFICATION.md) — wyniki rzeczywistych sprawdzeń, screenshoty i ograniczenia.

Przed publiczną publikacją: ustalić hosting i domenę, potwierdzić prawa do fotografii/fontu oraz docelowe dokumenty prawne, sprawdzić dostępność sklepów dla docelowego regionu. Linki prawne prowadzą obecnie do istniejących dokumentów polskich i są tak podpisane.

## Struktura

`src/main.js` — treść, demonstracja, kontakt i ruch; `src/style.css` — system wizualny i responsywność; `public/assets/` — lokalne materiały; `artifacts/` — dowody przeglądu w Chromium. Dokumentacja pozostaje po polsku, interfejs po angielsku.

Pierwsza, odrzucona propozycja pozostaje w historii Git i w `design-history/`. Wersja 2 otrzymała pozytywny feedback; dodatki wersji 3 pozostają do oceny użytkowniczki. Dostarczona specyfikacja była materiałem referencyjnym; jej wewnętrznych danych nie dołączono do repozytorium.
