# Aktualizacja 5 — słowa wyłaniające się z mgiełki

Rozważono pełną animację h1, osobny duży blok i pojedynczy interaktywny wiersz pod h1. Wybrano wiersz: zachowuje zaakceptowaną hierarchię, a odbiorca odkrywa konkretne możliwości aplikacji. Nie animujemy informacji o dostępności ani pobrania. Statyczny opis nadal wyjaśnia zakres bez wymagania interakcji.

Komunikaty: Meet fellow pet people. / Share happy moments. / Learn about pet care. / Discover places nearby. Jeden wiersz Satoshi semibold w #A12A70, strzałka sugerująca następną treść i mała instrukcja Hover or tap to explore. Obszar tekstu ma stałą wysokość w danym układzie; słowa nie dzielą się wewnątrz i nie zmieniają położenia CTA.

Score: wejście myszą lub aktywacja przyciskiem → krótki rozrzut liter w górę i na boki, rozmycie i zanik → niskokontrastowa smuga w kolorze marki → następne litery kondensują do ostrego tekstu → bezruch do kolejnego gestu. Całość około 1,3 s. Brak pętli i autonomicznej zmiany podczas czytania; kolejne zdarzenia w trakcie sekwencji są ignorowane. Hover oraz następujący klik nie powodują podwójnej zmiany. Dotyk i Enter/Space wykonują jedną zmianę. Reduced motion przełącza natychmiast; zmiana preferencji podczas trwania efektu kończy go w czytelnym stanie.

Autorski moduł JS + GSAP, bez płótna i WebGL. Dostępna nazwa przycisku i osobny żywy komunikat dla czytników; animowane litery ukryte semantycznie. Satoshi, paleta, statusy i reszta strony pozostają wiążące. QA (wykonano, wyniki w VERIFICATION.md i artifacts/v5-vapor-qa-results.json): wszystkie cztery treści, mysz/touch/klawiatura, szybkie gesty, stabilne wymiary, preferencje ruchu w trakcie, 320/390/640/768/1024/1440 px, kadry przed/w trakcie/po i zapis animacji.

---

# Aktualizacja 3 — realizacja relacji, nie zmiana zaakceptowanej czytelności

Wersja 2 pozostaje bazą po pozytywnym feedbacku. Nowy zakres użytkowniczki: ciepłe generowane fotografie, ciekawszy ruch i angielskie przykłady na podstawie rzeczywistego UI. Typografia, kolory, zapis marki i sekcyjne menu pozostają wiążące.

Alternatywy: (1) wymienić wyłącznie zdjęcie przy firmach — zbyt mała zmiana; (2) zastąpić hero fotografią — naruszałoby poprawioną czytelność; (3) zachować hero produktu i dodać jeden mocny rozdział relacji, którego zdjęcie wraca w podglądzie społeczności. Wybrano 3.

Score: telefony wchodzą jako grupa w 0,8 s, przy stale widocznym nagłówku i CTA. Rozdział community odsłania szeroki kadr spaceru przez niewielką zmianę maski, z równoczesnym spokojnym przesunięciem zdjęcia. Przy naturalnym scrollu między krokami desktop rysuje się linia wskazująca kolejność pobranie → profil → społeczność; mobile zachowuje pionowe, czytelne kroki bez tej linii. Telefon w demonstracji nadal prostuje się, a wybór funkcji wywołuje krótką reakcję całej bryły. Reduced motion: pełne zdjęcia i informacje, kompletna linia, bez ruchu.

Własne angielskie UI ma teraz strukturę bliższą screenom: logo i ikony nagłówka, prosty feed ze zdjęciem i reakcjami, wyszukiwarka edukacji, mapa z nagłówkiem Near you i cztery pozycje dolnej nawigacji Home / Map / Education / Profile. Wymyślone posty i miejsca są podpisane jako sample content. Interakcje muszą faktycznie działać lokalnie; nie łączymy ich z produkcją.

QA rozszerzenia: desktop/mobile, wszystkie panele i wyszukiwarka, like i rozwijane komentarze, filtry mapy, kontrasty i font bez zmian, kadry animacji w przód/wstecz, reduced motion, brak starych widocznych fotografii i błędów zasobów. Wykonano: 15 grup sprawdzeń w Chromium, sześć szerokości 1440/1024/768/640/390/320, brak overflow, błędów JavaScript i requestów. Maska i fotografia zmieniają się przy scrollu i wracają do tej samej macierzy; linia kroków przechodzi 0 → 1 → 0. Obejrzano kadry wejście/środek/wyjście/powrót oraz panele aplikacji. Reduced motion usuwa transformację i maskę, zachowując działanie. Dowody: artifacts/v3-qa-results.json, artifacts/v3-community-motion-*.png oraz VERIFICATION.md.

---

# PetConnect UK — wersja 2: czytelność i spójność z aplikacją

## Powód zmiany

Użytkowniczka odrzuciła pierwszą estetykę: polska strona jest czytelniejsza i ładniejsza, a w wersji 1 kolory oraz typografia nie odpowiadały aplikacji. Najnowszy feedback jest nadrzędny wobec pierwszej interpretacji. `design-history/` przechowuje poprzedni projekt; nowa wersja jest propozycją do oceny, nie zatwierdzonym wyborem użytkowniczki.

## Synteza

Rozważone warianty: (1) drobna korekta kursywy i kontrastów przy fotograficznym otwarciu; (2) uporządkowana interpretacja polskiej strony z produktem od pierwszego ekranu; (3) niemal dosłowne tłumaczenie polskiego układu. Wybrano 2: odpowiada zgłoszonemu problemowi, zachowując własną responsywną kompozycję i aktualny zakres produktu.

Teza: czytelne ekrany aplikacji i bezpośrednie zdania prowadzą od wyjaśnienia produktu do konkretnych korzyści. Kolor oznacza markę i działania, a jeden system pisma porządkuje całość. Zdjęcia są częścią prezentacji aplikacji i spokojną ilustracją sekcji biznesowej. Przestrzeń wynika z marginesów i odstępów między logicznymi blokami, bez długiej pustej sceny sticky.

## Wiążące fakty

Strona po angielsku; PL dostępne, EN w przygotowaniu bez daty. Głównie opiekunowie różnych zwierząt; druga ścieżka dla usługodawców związanych ze zwierzętami. Marketplace niewdrożony. Kontakt contact@petconnectapp.eu. Podgląd EN jest koncepcją, nie gotową wersją aplikacji. Brak opinii, statystyk, cennika UK i obietnic dostępności katalogu partnerów UK.

## Kolory i pismo

Kolory pochodzą bezpośrednio z `appColors.js`, `GradientButton.tsx` oraz sekcji Design dostarczonej specyfikacji:

| Rola                                               | Wartość                            |
| -------------------------------------------------- | ---------------------------------- |
| Nawigacja, nagłówki sekcji, aktywne wybory         | #A12A70                            |
| Główne działanie, poziomy gradient jak w aplikacji | #DF0D54 → #781566                  |
| Tekst główny                                       | #171717 (neutralny, bliski czerni) |
| Opisy                                              | #565656                            |
| Tło i tekst na kolorze                             | #FFFFFF                            |
| Tło rozdzielające sekcje                           | #F8F8F8 — steel-300 aplikacji      |

Jedna rodzina Satoshi Variable z repo mobilnego. Najnowsza instrukcja użytkowniczki: zachować styl czcionki; zapis marki PetConnect bez kropki. Bez kursywy w interfejsie strony. Desktop: h1 ok. 60 px / 700, h2 40 px / 700, h3 23–24 px / 600, tekst 17–19 px / 400, etykiety 16 px / 500, tekst pomocniczy 14 px. Mobile: h1 34–42 px, wszystkie h2 32 px, opisy 17–18 px. Skala zmienia się responsywnie, a nie losowo pomiędzy sekcjami. Niewielkie etykiety wewnątrz podglądu telefonu są częścią samej prezentacji UI, nie tekstem nawigacyjnym strony.

## Kompozycja od początku do końca

1. **Nawigacja:** jednolity pasek w kolorze aplikacji, biały znak i nazwa, czytelne linki How it works / Features / For businesses / Contact. Menu prowadzi do sekcji. Mobile: nazwa i hamburger, bez ściskania wielu przycisków.
2. **Hero:** „Your place for pets / and pet people.” Jedna część czarna, druga w kolorze aplikacji; ten sam font i grubość. Pod spodem opis konkretnych możliwości, czytelny status EN i informacja o PL, dwa prawdziwe przyciski sklepów. Obok dwa czytelne telefony, bez ozdobnych podpisów i dominującej fotografii. Podpis wskazuje koncepcyjny charakter EN.
3. **How it works:** trzy otwarte kolumny: pobranie PL, profil, korzystanie ze społeczności / artykułów / mapy. Każdy krok ma jeden numer, nagłówek i opis. Mobile: logiczna kolejność pionowa.
4. **Features:** trzy widoczne korzyści — kontakty z opiekunami, wiedza, miejsca i usługi. Ikony mają jednoznaczną rolę; wszystkie opisy dostępne bez klikania i przewijania karuzeli.
5. **Explore:** zachowana dodatkowa prezentacja Connect / Learn / Discover. Czytelny tekst, dostępne zakładki i jeden przestrzenny telefon. Bez wielokrotnej wysokości viewportu i bez sticky. Ta sekcja rozwija już wyjaśnione funkcje, zamiast ukrywać podstawowe informacje.
6. **Firmy:** rzeczowe „Do you work with animals?”, krótki zakres i kontakt. Jedna fotografia z aplikacji jako wsparcie; nie zestaw nieistniejących partnerów.
7. **Download:** kolor marki, biały spójny nagłówek, jasne rozdzielenie English / in development oraz Polish / available now. Linki sklepów dotyczą PL.
8. **Kontakt:** proste „Contact us”, większe etykiety i pola; przygotowanie szkicu mailto, bez pozorowania wysyłki. Stopka z czytelnymi linkami do istniejących dokumentów po polsku.

Szerokość maks. 1200 px; zwykle 85 px pionowego oddechu desktop / 55 px mobile. Tła białe lub neutralne #F8F8F8. Jeden zasadniczy punkt uwagi w sekcji. Ozdobne kursywy i pionowe podpisy usunięte.

## Ruch

Ruch jest lżejszą propozycją wykonawczą wynikającą z uwag o czytelności. Zachowany akcent 3D, bez przejmowania scrolla. Dwa telefony w hero delikatnie zmieniają kąt i położenie przy naturalnym przewijaniu; nie ruszają się nagłówki ani opisy. Dodatkowy przestrzenny telefon prostuje się podczas wejścia do widoku. Wybór funkcji daje krótki pionowy akcent całej bryły, nie obrót samej powierzchni ekranu. Przy powrocie scrolla transformacje są odwracalne. Reduced motion usuwa ruch i zachowuje funkcje. Nie ma długiej sceny sticky, automatycznej karuzeli ani animacji blokujących czytanie.

## Materiały

Oryginalne logo SVG, Satoshi i fotografie z repo aplikacji. Dwa nowe PNG w hero to przechwycone w Chromium własne ekrany koncepcyjne, z aktualną paletą i bez kursywy. Nie udają screenshotów ukończonego EN. Dostarczona specyfikacja potwierdza kolory i brand voice; osadzone materiały App Store stanowią referencję, ale zawierają starszą nawigację z marketplace. Pełnego HTML i danych wewnętrznych nie publikujemy.

## Funkcje i dostępność

Stos: Vite + vanilla JS + CSS + GSAP. Nadal działają trzy tryby, lokalny zapis przykładu, opis Learn, filtr mapy, klawiatura, menu, wybór tematu biznesowego i walidowany szkic email. Prawdziwe linki sklepów z konfiguracji aplikacji. Bez backendu, sekretów, CRM, analityki i symulacji wysłania. Zakładki mają kierunek zgodny z układem: pionowy desktop, poziomy do 640 px. Minimum etykiet strony jest większe niż w v1. Fonty i obrazy lokalne; nagłówki i istotne treści nigdy nie czekają na animację.

## Macierz weryfikacji v2

| Wymaganie                        | Źródło                                               | Realizacja                                                   | Dowód / wynik                                                         |
| -------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Kolory zgodne z aplikacją        | Najnowszy feedback + kod + specyfikacja              | Dokładne tokeny i poziomy gradient                           | Przeszło: computed styles, v2-contrast.json, obrazy v2                |
| Spójne pismo i marka bez kropki  | Najnowszy feedback                                   | Satoshi, brak kursywy, h2 desktop 40 px / 700, większe opisy | Przeszło: v2-qa-results.json; końcowa kontrola nazwy w DOM            |
| Czytelna oferta od początku      | Preferencja polskiej strony                          | Produkt i konkretny nagłówek w hero                          | Obejrzano desktop i mobile, v2-desktop-hero.png                       |
| Korzyści bez klikania            | Interpretacja zgłoszonej czytelności                 | 3 kroki + 3 widoczne korzyści                                | Przeszło: sześć widocznych opisów                                     |
| EN w przygotowaniu, PL dostępne  | Użytkowniczka                                        | Hero i pobranie                                              | Przeszło: tekst i prawdziwe linki sklepów                             |
| Brak obietnic marketplace        | Użytkowniczka, nadrzędnie wobec starszych materiałów | Brak w treści strony                                         | Przeszło: kontrola tekstu w przeglądarce                              |
| Interaktywna prezentacja         | Wcześniejszy wybór, zachowany                        | Lokalne akcje i klawiatura                                   | Przeszło: trzy tryby, zapis, rozwinięcie, filtry, strzałki, Home/End  |
| Responsywność i ograniczony ruch | Standard wykonania                                   | 320 / 390 / 640 / 768 / 1024 / 1440 px                       | Przeszło: brak overflow, reduced motion, prawidłowy kierunek zakładek |
| Kontakt                          | Potwierdzony adres                                   | Walidacja i szkic mailto                                     | Przeszło: temat biznesowy, odbiorca i kodowanie znaków                |

Aktualny raport jest na początku VERIFICATION.md. Pierwsza pełna kontrola v2 ujawniła nieuruchamianie animacji przy domyślnym ustawieniu ruchu; poprawiono warunki matchMedia i ponowiono cały przebieg. Po przeglądzie wizualnym poprawiono też obramowanie drugiego przycisku sklepu oraz układ dwóch przycisków i łamanie nagłówka na 320 px. Są to faktycznie zaobserwowane korekty, nie deklaracja akceptacji estetycznej przez użytkowniczkę.
