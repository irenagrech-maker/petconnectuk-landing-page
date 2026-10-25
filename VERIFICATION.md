# Wersja 3 — ciepłe fotografie, ruch i podglądy aplikacji

Wprowadzono dwie wygenerowane sceny: wspólny spacer trojga znajomych z psami oraz spokojną relację kobiety z kotem i psem. Zaktualizowano też oba obrazy telefonów w hero. Pochodzenie w [GENERATED_IMAGES.md](public/assets/GENERATED_IMAGES.md). Dostarczone screeny są referencją układu; prawdziwych rozmów i danych profili nie opublikowano.

`npm run check` i `npm run build` przeszły. Build: JS 143,33 kB / 53,76 kB gzip, CSS 32,15 kB / 7,23 kB gzip. To rozmiary bundlera, nie pomiar Core Web Vitals.

15 grup sprawdzeń Chromium na produkcyjnym buildzie: [zapis wyników](artifacts/v3-qa-results.json). Szerokości 1440, 1024, 768, 640, 390 i 320 px; brak poziomego przepełnienia. Nie testowano fizycznego telefonu ani natywnego Safari.

- Zachowany Satoshi bez kursywy, jednolita hierarchia nagłówków, dokładne #A12A70 i gradient #DF0D54 → #781566. Oznaczenia marki zawierają dokładnie PetConnect, bez kropki.
- Nowe zdjęcia lokalnie załadowane; brak starszych fotografii w aktywnym DOM. Status EN w przygotowaniu, PL dostępne i prawdziwe linki sklepów bez zmian.
- Connect: odwracalne polubienie i otwieranie przykładowego komentarza. Learn: wyszukiwanie walk / care, stan bez wyników i przywrócenie po wyczyszczeniu, rozwijana notatka. Discover: Places / Services z opisem przykładowego miejsca lub biznesu. Cztery pozycje dolnej nawigacji odpowiadają referencji aplikacji; Profile jest ilustracyjne.
- Działające zakładki, strzałki i Home/End; zgodny kierunek aria desktop/mobile. Menu mobilne, Escape i kotwice sprawdzone.
- Formularz odrzuca puste dane, ustawia temat biznesowy, poprawnie koduje mailto i unieważnia szkic po edycji. Nic nie wysłano.
- Maskowanie i delikatny ruch zdjęcia obejrzano w czterech kadrach: [wejście](artifacts/v3-community-motion-entry.png), [środek](artifacts/v3-community-motion-middle.png), [wyjście](artifacts/v3-community-motion-exit.png), [powrót](artifacts/v3-community-motion-reverse.png). Macierze zdjęcia i maska wracają do stanu wejściowego. Linia kroków zmienia skalę 0 → 1 → 0. Perspektywa telefonu również odwracalna, bez sticky i przejmowania scrolla.
- Reduced motion usuwa maskę i ruch, zachowując funkcje. Zero błędów JavaScript i nieudanych requestów w pełnym przebiegu.

Dodatkowo nagrano naturalne przewijanie przez zdarzenia wheel: [animowany fragment](artifacts/v3-motion-preview.gif). GIF pokazuje wygląd w czasie, nie jest pomiarem płynności ani publicznym hostingiem.

Aktualne obrazy: [cała strona](artifacts/v3-desktop-full.png), [hero](artifacts/v3-desktop-hero.png), [relacje](artifacts/v3-desktop-community.png), [mobile](artifacts/v3-mobile-390-full.png). Zrzuty dostawy wykonano w nowej sesji, bez danych testowych w formularzu.

Angielskie UI jest oznaczoną koncepcją. Fotografie i przykładowe treści nie stanowią dowodu prawdziwego spotkania lub partnerstwa. Kontakt przygotowuje szkic email. Nie uruchomiono backendu ani nie opublikowano strony na hostingu. Poniżej zachowano raporty historyczne poprzednich wersji.

---

# Wersja 2 — aktualna weryfikacja po uwagach o czytelności

Wersja 2 zastępuje odrzuconą pierwszą propozycję. Obejrzano nowe otwarcie, całą stronę, kroki, korzyści, prezentację, kontakt i widoki mobilne. Zastosowano dokładne kolory aplikacji, jej poziomy gradient i Satoshi bez kursywy. Zachowano nazwę PetConnect bez kropki. Układ nie ma już długiej sceny sticky, a podstawowe korzyści są widoczne bez klikania.

- `npm run check` i `npm run build`: kod 0.
- [artifacts/v2-qa-results.json](artifacts/v2-qa-results.json): **13 grup sprawdzeń**, wszystkie przeszły. Obejmują treść, fonty, kolory, kroki i korzyści, kotwice/sklepy, wszystkie interakcje demonstracji i klawiaturę, kontakt, odwracalny ruch, sześć szerokości, menu, media, reduced motion oraz błędy JS/requestów.
- [artifacts/v2-contrast.json](artifacts/v2-contrast.json): siedem zmierzonych par kolorów. Nawigacja 6,82:1, nagłówki/status na jasnym tle 6,42:1, opis 7,34:1; biały tekst na krańcach autentycznego gradientu 4,86:1 i 10,01:1. Wszystkie sprawdzone pary przekraczają 4,5:1.
- [artifacts/v2-final-check.json](artifacts/v2-final-check.json): dodatkowo poprawiony kontur drugiego przycisku, świeże screenshoty z pustym formularzem, przyciski w jednym rzędzie i brak overflow na 640/390/320 px. Pierwsza fraza nagłówka mieści się w jednym wierszu na tych szerokościach.
- [artifacts/v2-brand-check.json](artifacts/v2-brand-check.json): nazwa w każdym oznaczeniu marki dokładnie PetConnect, zero elementów brand-dot, zachowany Satoshi i brak kursywy.
- Faktycznie sprawdzone w Chromium: 1440, 1024, 768, 640, 390 i 320 px. Brak błędów JavaScript i błędnych requestów. Nie jest to test natywnego Safari ani fizycznych telefonów.

Weryfikacja wykryła i doprowadziła do poprawy warunków matchMedia (przy no-preference nie startowała animacja), brakującego konturu przycisku po wprowadzeniu gradientu i ułożenia przycisków na 320 px. Po poprawkach powtórzono właściwe kontrole. Nazwa bez kropki jest sprawdzona również jako tekst w DOM, a nie tylko przez ukrycie znaku w CSS.

Podglądy: [cała strona](artifacts/v2-desktop-full.png), [otwarcie](artifacts/v2-desktop-hero.png), [mobile](artifacts/v2-mobile-390-hero.png). Poprzednie obrazy zachowano do porównania. Wersja 2 pozostaje propozycją do oceny użytkowniczki.

Dostarczony HTML specyfikacji wykorzystano jako materiał referencyjny; jego pełnej zawartości i danych wewnętrznych nie umieszczono w repo. Starsze wzmianki o marketplace nie zastępują aktualnego ustalenia użytkowniczki. Podglądy EN pozostają oznaczoną koncepcją. Nie wysłano email, nie uruchomiono backendu ani aplikacji mobilnej i nie opublikowano witryny.

Instrukcję start_skill w szkicu środowiska zaktualizowano do aktualnego nagłówka i stanu podglądu testowego. Zapis szkicu jest potwierdzony; jego utrwalenie nadal wymaga przejrzenia i zapisania zmian w ustawieniach oraz publikacji środowiska. Nie oznacza to publikacji strony.

---

## Historia sprawdzeń pierwszej wersji

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
