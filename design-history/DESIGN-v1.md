# PetConnect — kierunek i specyfikacja

## Synteza artystyczna

Rozważone interpretacje tych samych ustaleń:

1. **Album wspólnego życia** — kolejne fotografie opiekunów i zwierząt stają się ramami dla funkcji, a przestrzenny telefon wyłania się z albumu.
2. **Świat, który się zbliża** — duża fotografia wprowadza relację; przy przewijaniu plany rozchodzą się, a telefon trafia na pierwszy plan jako łącznik między potrzebą a społecznością.
3. **Dziennik odkryć** — szerokie fotograficzne rozdziały przeplatane powiększeniami konkretnych fragmentów aplikacji, z telefonem jako ruchomą zakładką.

Wybrano 2: daje fotografii pierwszeństwo, uzasadnia przestrzeń i zmianę perspektywy oraz pozwala zachować dużo oddechu. To decyzja projektowa autora wykonania, nie dodatkowa odpowiedź użytkowniczki.

**Teza:** fotografie prawdziwych relacji zajmują duże, spokojne pola; przy naturalnym przewijaniu rozdzielają się na plany, z których wychodzi telefon. Widz przechodzi od znajomego życia ze zwierzęciem do konkretnych sposobów łączenia się w PetConnect. Jeden dominujący element naraz, przestrzeń wokół tekstu i rytmiczne zatrzymania do czytania.

## Baseline → zmiana → cel

- Góra polskiej strony: wysoki śliwkowy pasek, tekst z lewej, dwa mało czytelne telefony z prawej → lekka nawigacja, duży nagłówek i dominująca fotografia → relacja i szybkie zrozumienie marki.
- Środek: powtarzające się telefony, ikony i podobne opisy → jedna ciągła scena z fotografią i przestrzennym telefonem oraz wyborem Connect / Learn / Discover → czytelny dowód działania bez katalogu sześciu równorzędnych kart.
- Koniec: wielkie podobne bloki pobrania i kontaktu → oddzielone role statusu językowego, pobrania PL i spokojnego kontaktu → jasne oczekiwania i jedna główna ścieżka.

## Storyboard

| Scena             | Znaczenie i treść                                                                      | Kompozycja, wejście → rozwój → wyjście                                                                                                                                                                      | Akcja / warianty                                                                               |
| ----------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Otwarcie          | „Their world. Better connected.” Społeczność dla różnych opiekunów; EN w przygotowaniu | Duża skala liter naprzeciw wysokiego fotograficznego kadru kobiety z psem. Białe pole; fotografia w miękkim łukowym kadrze. Przy scrollu kadr lekko się otwiera i zmienia punkt widzenia                    | Explore the app, pobranie PL dostępne od początku. Mobile: tekst, przyciski, fotografia        |
| Relacja           | „Life with pets is better shared.” Pytania, małe odkrycia, codzienna bliskość          | Szeroki kadr kobiety z królikiem; krótszy blok tekstu na przeciwnej osi. Kadr przemieszcza się w masce w innym tempie niż tekst, a przestrzeń prowadzi do sceny aplikacji                                   | Bez dodatkowego gadżetu; obraz pokazuje, że marka nie jest tylko dla psów                      |
| Poznanie produktu | „A little look. A lot to discover.” Społeczność / wiedza / miejsca                     | W ograniczonym obszarze sticky zdjęcie jest tylnym planem, a realistyczna bryła telefonu wychodzi do przodu, obraca się i prostuje do czytania. Tekst i trzy wybory pozostają stabilne; jeden ekran aktywny | Klawiatura / dotyk wybiera funkcję; lokalne akcje pokazują stan. Wyraźna etykieta koncepcji EN |
| Usługodawcy       | „Your passion. Their next favourite place.”                                            | Śliwkowe pole, biała typografia i duża fotografia rodziny z psem. Inny rozkład gęstości, bez siatki fikcyjnych firm                                                                                         | Let's talk prowadzi do kontaktu i wybiera temat biznesowy                                      |
| Status i pobranie | „Good things are on their way.” EN: in development. PL: available now                  | Powrót do bieli; dwa otwarte wiersze języków zamiast kart planów. Wyraźne dwa sklepy w części PL. Logo wraca jako podpis                                                                                    | Prawdziwe linki sklepów; żadnego nieistniejącego zapisu na premierę                            |
| Kontakt / stopka  | „Good things start with a hello.”                                                      | Krótka sekcja, tekst i formularz o czytelnych etykietach, dużo bieli. Mała stopka z prawdziwymi linkami                                                                                                     | Walidacja i otwarcie szkicu wiadomości; brak fałszywego potwierdzenia wysyłki                  |

## Materiał, typografia i kolory

Fotografia prowadzi również w środku i finale: kadr psa i opiekunki → królik i opiekunka → zdjęcie w tle sceny produktu → rodzina z psem. Telefon jest wspierającym medium przestrzennym, nie stałym bohaterem każdego rozdziału.

Satoshi Variable oraz Variable Italic z repo aplikacji: dostępne pliki lokalne TTF, łacińskie znaki i polskie znaki dokumentacyjne. Body 16–18 px / 1.6, nagłówki 44–100 px / 1.02, maksymalnie ok. 55 znaków w akapicie. Wagi 400–700; fallback Arial/sans-serif. Font-display swap; priorytet pliku podstawowego. Źródło plików jest znane, osobna licencja nie została dołączona do repo.

| Token     | Kolor   | Rola                                                                                              |
| --------- | ------- | ------------------------------------------------------------------------------------------------- |
| plum      | #8B346F | Przybliżenie dominującego śliwkowego tonu z dostarczonych screenów strony, główne CTA i duże pola |
| berry     | #A12A70 | Dokładny primary-600 aplikacji, akcenty i stany                                                   |
| deep-plum | #781566 | Dokładny primary-700 aplikacji, mocne detale                                                      |
| raspberry | #DF0D54 | Dokładny primary-500 aplikacji, logo i oszczędne akcenty                                          |
| ink       | #2D1B28 | Tekst ciemny o śliwkowym charakterze                                                              |
| muted     | #71636D | Tekst pomocniczy na bieli, sprawdzany kontrastem                                                  |
| mist      | #F8F1F6 | Bardzo jasny odcień rodziny śliwkowej, tło prezentacji                                            |
| white     | #FFFFFF | Główna powierzchnia, tekst na śliwce                                                              |

Pierwsze rozdziały prawie białe; śliwka w dużym polu usługodawców; powrót do bieli przy pobraniu i kontakcie. Cienie neutralno-śliwkowe. Naturalne kolory istniejących fotografii są dopuszczone; nie przemalowujemy osób ani nie dodajemy obcych kolorów do UI. Gradient wyłącznie wewnątrz istniejącego znaku marki i delikatnego materiału telefonu. Mobile i reduced motion zachowują te same tokeny.

## Geometria i język detalu

Maksymalna szerokość treści ok. 1240 px, boczne marginesy 5–7 vw, pionowy oddech 100–160 px desktop / 64–90 px mobile. Nie stosować tej samej ramki nagłówka do każdej sekcji. Miękki łuk zdjęcia otwierającego wraca tylko w fotograficznej odpowiedzi końcowej; zdjęcie królika ma szerszą, spokojną ramę.

- **Znak serca z łapką → tożsamość i rozpoznanie →** nawigacja, ekran telefonu i stopka. Nie rozsypywać ozdobnych łapek po każdym akapicie.
- **Małe podpisy → orientacja i status →** wyłącznie etykiety języka, status koncepcji oraz krótkie wejścia w rozdziały. Żadnych wymyślonych numerów użytkowników, współrzędnych ani pseudotechnicznych podpisów.
- **Linie → grupowanie funkcjonalne →** wiersze wyboru funkcji, statusy języków i stopka. Nie narzucać dekoracyjnych separatorów każdej scenie.
- **Rama telefonu → związek z aplikacją mobilną →** tylko centralna prezentacja; aparat, krawędź i światło dają czytelną bryłę 3D. Obrót ma doprowadzić do czytelnego ekranu.

## Score ruchu

1. **Otwarcie, naturalny scroll 0–75% wysokości hero:** zdjęcie startuje w bliskim kadrze; obraz powiększa się i przemieszcza wewnątrz stabilnej maski. Tekst pozostaje stabilnym punktem odniesienia. Relacja pozostaje głównym motywem. Powrót scrolla odwraca transformacje. Mobile: mniejszy zakres, bez przemieszczania tekstu poza ekran. Reduced motion: nieruchomy kadr.
2. **Zdjęcie królika, przejście przez viewport:** obraz ma zapas na pionowe przemieszczenie, ramka zostaje stabilna. Zbliżenie utrzymuje relację twarzy i zwierzęcia. Tekst zawsze czytelny. Kierunek odwracalny.
3. **Scena prezentacji, ograniczony sticky przy naturalnym scrollu:** wejście — fotograficzny tylny plan i telefon obrócony w bok; rozwój — zdjęcie odsuwa się w lewo i w głąb, telefon przesuwa na przedni plan, obraca i zwiększa czytelność; środek — ekran i wybory stabilne, można badać funkcje; wyjście — bryła uspokaja się i prowadzi do szerokiego pola usługodawców. Odwrócenie scrolla odtwarza relację planów, bez resetowania wybranej funkcji. Nie przechwytujemy kółka ani dotyku. Desktop: perspektywa i pełen rozdział sticky. Mobile: krótszy zakres, mniejszy obrót, interakcja bez sticky blokującego ekran. Reduced motion: nieruchomy czytelny telefon, bez pinowania.
4. **Wybór Connect / Learn / Discover:** kliknięcie / strzałki zmieniają aktywny wybór, treść objaśnienia i rzeczywisty lokalny stan ekranu. Krótki ruch telefonu podkreśla przełączenie, bez ukrywania tekstu na długi czas. Własne akcje demonstracji mają wyraźnie lokalny zakres.
5. **Fotografia usługodawców:** powolne reframing w ograniczonym kadrze równoważy zmianę koloru tła. Finał uspokaja rytm przed decyzją.

Technika po ustaleniu zachowania: GSAP + ScrollTrigger do odwracalnych transformacji, CSS perspective / transform-style do fizycznej bryły telefonu. Bez WebGL i ciężkich modeli: przestrzeń wynika z prawdziwych osobno transformowanych planów, grubości, obrotu i światła. Animowane transform i opacity, nie animacja layoutu na każdej klatce. Bez nieustannego obracania telefonu.

## Interakcje, dostępność i wydajność

Semantyczne sekcje, skip link, pojedynczy h1, prawdziwe przyciski i linki. Sticky nagłówek z scroll-margin, mobilna nawigacja z aria-expanded, Escape i zamknięciem po wyborze. Wybór funkcji to dostępne zakładki, ze strzałkami, Home/End, aria-selected i roving tabindex. Widoczny focus, dotyk bez hover. Kontakt: prawdziwe etykiety, wymagane pola, walidacja; użytkownik otwiera szkic email i sam wysyła. Brak danych w localStorage, analytics i formularza udającego backend.

Vite + vanilla JavaScript + CSS + GSAP. Mały zakres nie wymaga Reacta ani backendu. Zoptymalizowane WebP z oryginałów, ustalone wymiary, responsive srcset, lazy poza hero, lokalne fonty. Czysty npm lockfile. Pliki źródłowe repo mobilnego i backendu pozostają bez zmian. Brak publicznej publikacji.

## QA i macierz zgodności

Weryfikacja w Chromium przez Playwright dostępny w środowisku: desktop 1440×1000, mobile 390×844, wąski 320 px i wariant reduced motion. Sprawdzić nawigację, każdą zakładkę, lokalne akcje, walidację i treść mailto, linki sklepów, zdjęcia, fonty, konsolę i przepełnienie. Obejrzeć stan wejściowy, środkowy i końcowy sceny przewijania, również wstecz. Wykonać screenshoty oraz porównać kadry. Build i kontrola składni. Wyniki dopisać dopiero po wykonaniu.

| Wymaganie | Źródło / status | Realizacja | Dowód QA | Wynik |
|---|---|---|---|---|
| Angielski + jawny status EN/PL | Użytkowniczka | Hero, oznaczona koncepcja, pobranie PL | qa-results.json; desktop-hero.png; mobile-320-download.png | Przeszło |
| Kolory marki | Użytkowniczka + kod + screenshoty | Tokeny i oryginalny znak | Ogląd wszystkich scen; 8 zmierzonych par kontrastu | Przeszło; główny ton screenshotu jest przybliżeniem |
| Fotografia prowadzi, 3D wspiera | 6: 2+10 | Hero, królik, plan zdjęcia, bryła telefonu, usługodawcy | Desktop/mobile; motion-entry/middle/exit.png | Przeszło |
| Przestronność | Dosłowna prośba + etap 8 | Jeden dominant i duże odstępy | Pięć szerokości; przegląd kadrów; porównanie bez pionowego podpisu | Przeszło |
| Rytmiczna choreografia | 10A: 3 | Reframing i odwracalny sticky z rozdzieleniem planów | Kadry i różne macierze planów, dokładny powrót; wheel-scroll-check.json | Przeszło dla obserwowanych stanów i scrolla; bez pomiaru FPS |
| Connect / Learn / Discover | 10B | Dostępny wybór, zmiana ekranu i lokalne akcje | Kliknięcia, strzałki, Home/End, panel, opis i filtry | Przeszło |
| Kontakt i prawdziwe sklepy | 4: 2+4; src/config.ts | Walidowany szkic mailto i oryginalne linki sklepów | Odbiorca, temat, kodowanie znaków; porównanie linków ze źródłem | Przeszło w zakresie strony; dostarczenie email i region sklepów niebadane |
| Marketplace później | Doprecyzowanie użytkowniczki | Brak obietnic marketplace na stronie | Wyszukanie w treści przeglądarki | Przeszło |
| Reduced motion i mobile | Standard wykonania | Bez sticky w reduced motion; warianty kompozycji | 1440 / 1024 / 768 / 390 / 320 px; reduced-motion-preview.png | Przeszło w Chromium |
| Brak publikacji | Etap 12 | Kod i lokalne procesy dev / preview | Brak deploy witryny; osobno zapis kodu w repo i szkic konfiguracji środowiska | Zachowane |

## Wyniki przeglądu

Pełny raport: [VERIFICATION.md](VERIFICATION.md). Dane kontroli: `artifacts/qa-results.json` (14 grup), `artifacts/production-check.json` (końcowy build), `artifacts/wheel-scroll-check.json` (naturalny scroll). Zrzuty przedstawiają rzeczywisty render w Chromium, nie makiety graficzne.

Po przeglądzie poprawiono rozdzielczość zdjęcia otwierającego, kontrast części detali i pól formularza, wielkość statusu EN oraz semantyczny kierunek zakładek mobile. Usunięto pionowy podpis po porównaniu wariantów; pozostawiono lokalną notatkę fotograficzną jako element głosu marki. Wersja produkcyjna została ponownie uruchomiona i sprawdzona. Istotne ograniczenia i materiały do późniejszego dostarczenia są jawnie opisane w briefie i raporcie; nie oznaczono ich jako wykonanych.
