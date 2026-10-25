# Weryfikacja wykonania — 25 października 2026

## Wynik

Strona została zbudowana i uruchomiona lokalnie. Przeszły instalacja z lockfile, kontrola składni, build produkcyjny i 14 grup sprawdzeń przeglądarkowych. Zbudowaną wersję dodatkowo uruchomiono przez Vite preview i sprawdzono po końcowych poprawkach. Nie opublikowano witryny. Kod i podglądy są przygotowane do zapisu we wskazanym repozytorium GitHub.

Stos faktycznie zainstalowany: Node 24.19.0, npm 11.9.0, Vite 7.3.7, GSAP 3.15.0. Lockfile jest dołączony. `npm ci --cache /tmp/petconnect-npm-cache --no-audit --no-fund`, `npm run check` i `npm run build` zakończyły się kodem 0. Produkcyjny JavaScript ok. 139 kB / 53 kB gzip, CSS ok. 32 kB / 7,4 kB gzip. To wielkości bundlera, nie pomiary Core Web Vitals.

## Rzeczywiście wykonane sprawdzenia

Chromium dostępne w środowisku, sterowane przez Playwright. Widoki 1440×1000, 1024×1000, 768×844, 390×844 i 320×844. To testy przeglądarkowe przy tych wymiarach, nie testy na fizycznych telefonach.

| Obszar | Wynik i dowód |
|---|---|
| Otwarcie i status | Pojedynczy h1, `lang=en-GB`, widoczny status przygotowania EN, jasna informacja o PL. Brak obietnic marketplace |
| Zasoby | Załadowało się 14 elementów img oraz Satoshi; brak nieudanych requestów w pełnym przebiegu |
| Nawigacja | Każda kotwica ma cel; mobilne menu otwiera się, zamyka po wyborze i Escape, przywraca focus. Cel sekcji nie chowa się pod nagłówkiem |
| Connect | Zapis przykładu zmienia stan aria-pressed i widoczny tekst, a ponowne kliknięcie go cofa; komunikat zaznacza lokalny zakres podglądu |
| Learn | Wybór zmienia panel; rozwijany opis funkcji otwiera się i zamyka |
| Discover | Wybór pokazuje mapę; Places / Services zmienia aktywny filtr, położenie przykładowych markerów i opis wyniku |
| Klawiatura | Strzałki, Home/End oraz pojedynczy aktywny tabindex. Po końcowej poprawce sprawdzono poziomą semantykę zakładek mobile i pionową desktop |
| Kontakt | Puste dane i sama spacja w nazwie są odrzucane. Ścieżka biznesowa ustawia temat. Poprawna treść generuje `mailto:contact@petconnectapp.eu` z prawidłowo zakodowanym tematem, email z plusem, znakami `&`, polskimi znakami i nową linią. Edycja unieważnia poprzedni szkic. Nic nie zostało wysłane |
| Sklepy | Adresy identyczne z konfiguracją aplikacji i podpisane jako pobranie PL. Nie dokonano instalacji ani sprawdzenia sklepów dla konta UK |
| Responsywność | Brak poziomego przepełnienia we wszystkich sześciu scenach na pięciu szerokościach. Demonstracja działa także przy rozmiarze telefonu |
| Ograniczony ruch | Emulacja reduced motion usuwa sticky i transform telefonu, zachowując wszystkie panele i wybory |
| JavaScript i sieć | W pełnym przebiegu: 0 błędów JavaScript i 0 nieudanych requestów. Zbudowana wersja również bez błędów |

Maszynowy zapis 14 grup: [artifacts/qa-results.json](artifacts/qa-results.json). Sprawdzenia builda: [artifacts/production-check.json](artifacts/production-check.json). Końcowa kontrola reakcji telefonu i reduced motion po poprawkach: [artifacts/interaction-recheck.json](artifacts/interaction-recheck.json).

## Kompozycja i doświadczenie w czasie

Zbudowano i obejrzano pierwszy pionowy fragment (hero, przejście fotograficzne, działająca scena produktu) przed rozszerzeniem pozostałych scen. Screenshoty `first-slice-*` zachowują ten etap.

Następnie obejrzano hero, relację z królikiem, środkową scenę, usługodawców, pobranie, kontakt, warianty mobilne i reduced motion. Fotografia prowadzi zarówno opening, jak i kolejne rozdziały. Środkowa scena nie jest powtórzeniem hero: osobne plany zdjęcia i bryły telefonu zmieniają pozycję, skalę i perspektywę, prowadząc do czytelnego ekranu.

Obejrzano i porównano rzeczywiste kadry wejście / rozwój / wyjście. Test transformacji wykazał różne macierze dla telefonu i fotografii; po cofnięciu obie wróciły dokładnie do stanu wejściowego. To dowód stanów i odwracalności sekwencji, nie pomiar FPS. Dodatkowy test rzeczywistych zdarzeń wheel sprawdza wolniejsze kroki, szybkie przewinięcie i powrót; zapis w `artifacts/wheel-scroll-check.json`.

- [Wejście](artifacts/motion-entry.png)
- [Środek](artifacts/motion-middle.png)
- [Wyjście](artifacts/motion-exit.png)
- [Powrót](artifacts/motion-reverse.png)
- [Cała strona desktop](artifacts/desktop-full.png)
- [Mobile — opening](artifacts/mobile-390-hero.png)
- [Mobile — prezentacja](artifacts/mobile-390-preview.png)
- [Reduced motion](artifacts/reduced-motion-preview.png)

## Poprawki wynikające z przeglądu

1. Początkowo hero wybierało zbyt mały wariant szerokiej fotografii do wysokiego kadru. Dodano wariant 2400 px i poprawiono sizes, zachowując optymalizację WebP. Obejrzano poprawiony kadr.
2. Wzmocniono kontrast obramowań formularza i pomocniczych etykiet telefonu.
3. Porównano opening z pionowym podpisem „Better, together.” i bez niego (`hero-detail-comparison.png`). Usunięto podpis jako zbędny; kadr jest spokojniejszy. Zachowano pojedynczą notatkę fotograficzną, która wnosi głos marki bez powtarzania tego zabiegu w każdym rozdziale.
4. Powiększono status przygotowania EN i dopasowano aria-orientation zakładek do rzeczywistego układu. Końcowa wersja produkcyjna przeszła ponowną kontrolę klawiatury i szerokości 390/320 px.
5. Konwersja fontów początkowo wymagała brakującego kodera Brotli. Dodano narzędzie w katalogu tymczasowym, wykonano konwersję i zweryfikowano załadowanie wynikowych WOFF2. Nie wyłączano weryfikacji TLS ani integralności instalacji.
6. Końcowy screenshot całej strony ujawnił artefakt warstwowania podczas krótkiego obrotu samej powierzchni ekranu po wyborze zakładki. Reakcję przeniesiono na całą bryłę telefonu jako krótki ruch pionowy; perspektywa głównej sekwencji scroll pozostaje bez zmian. Sprawdzono kadry w trakcie reakcji i po jej zakończeniu (`interaction-during.png`, `interaction-after.png`). Usunięto też pozostający po reakcji transform i sprawdzono natychmiastowe zatrzymanie reakcji po włączeniu reduced motion.

## Zmierzone kontrasty

Sprawdzono osiem rzeczywistych par kolorów odczytanych ze stylów przeglądarki. Tekst podstawowy: 5,66:1 na bieli i 5,10:1 na jasnym śliwkowym. CTA białe/śliwka: 7,45:1. Tekst sekcji biznesowej: 6,09:1; jej mały nagłówek: 5,58:1. Podpis koncepcji: 5,02:1. Wszystkie te pary przekraczają 4,5:1. To sprawdzenie wybranych istotnych par, nie pełny audyt WCAG ani czytnika ekranu.

## Konfiguracja środowiska i granice dostawy

Zapisano z potwierdzeniem `status: saved` pola **install_script** i **start_skill** w szkicu konfiguracji cloud. Skrypt odtwarza instalację, kontrolę składni i build. Instrukcja startowa zawiera katalog, uruchomienie, kontrolę funkcjonalną i zasadę używania istniejącego checkoutu bez tworzenia worktree. Nie zmieniano sieci, sekretów ani listy repozytoriów.

Szkic wymaga przejrzenia i zapisania w ustawieniach środowiska, a następnie publikacji **środowiska**, aby utrwalić konfigurację/snapshot. Nie wykonano tego kroku i nie sprawdzono odtworzenia w nowym zadaniu. To osobny mechanizm od publicznego hostingu strony; witryna pozostaje lokalna.

Ograniczenia: nie uruchamiano mobilnej aplikacji i backendu; nie testowano Safari/Firefox, fizycznych urządzeń, rzeczywistego klienta pocztowego, dostarczenia email ani regionu sklepów UK. Podgląd EN jest oznaczoną koncepcją, a autentyczne screenshoty pozostają do dostarczenia. Prawa do źródłowych fotografii/fontu oraz docelowe dokumenty prawne są pozycjami przed publikacją, opisanymi w briefie i SOURCES.md. Nie wymyślono brakujących treści ani dowodów.
