# Pełne zlecenie wykonawcze — PetConnect UK

## Mandat twórczy

Zaprojektuj i zbuduj oryginalny, wyjątkowo dopracowany, responsywny landing page PetConnect w języku angielskim. Głównym tworzywem są naturalne fotografie relacji ludzi ze zwierzętami; przestrzeń i bryła telefonu 3D wspierają opowieść o społeczności. Fotografia ma organizować przestrzeń, hierarchię, rytm i atmosferę całego przewijania, nie jedynie wypełniać prostokąt obok tekstu. Stwórz jedną autorską kompozycję, od pierwszego kontaktu z marką do pobrania istniejącej polskiej aplikacji lub kontaktu. Nie kończ na powtarzalnym schemacie marketingowym, siatce kart i przypadkowych ikonach. Użytkowniczka szczególnie wymaga przestronności: „nie chcę żeby było naciupane”.

Ruch jest rytmiczny i fundamentalny dla doświadczenia. Rozwijaj fotografie przez zmianę kadru, maskę i relacje między planami, a telefon przez perspektywę, kontrolowany obrót i przejście od tła do czytelnego narzędzia. Skonstruuj przynajmniej jedną ciągłą sekwencję, której sens wynika z upływu czasu lub działania użytkownika, nie z pojedynczego screenshotu. Ograniczony sticky może reagować na naturalny scroll; nie wolno przejmować kółka, blokować dotyku lub wymuszać tempa przewijania. Zwykłe fade-in sekcji i crossfade zakładek nie realizują tego zlecenia. Przyciski i status produktu są dostępne od pierwszej chwili.

Desktop i telefon to dwie świadomie skomponowane wersje tej samej idei. Zadbaj o semantykę, logiczną klawiaturę, focus, kontrast i brak zależności od hover. Reduced motion zachowuje znaczenie, fotografię, paletę i pełne funkcje w spokojnej postaci. Optymalizuj fotografie i fonty, rezerwuj miejsce dla mediów, unikaj ciągłego renderowania scen poza ekranem. Lokalne wykonanie nie jest zgodą na słabszą estetykę ani usunięcie uzgodnionego 3D i ruchu.

Uruchom całość, obejrzyj opening, środkową scenę i finał, odtwórz sekwencje w obie strony oraz użyj każdej interakcji na desktop i mobile. Popraw słabą hierarchię, zatłoczenie, zły kadr, utratę czytelności, błędny status języka, dryf palety i szarpnięcia. Nie kończ na udanym buildzie. Dostarcz kod, instrukcję, brief, specyfikację, niniejszy prompt i prawdziwy raport weryfikacji z dowodami, bez deklarowania testów, których nie wykonano.

## 1. Zadanie i zakres

Zbuduj ONE-PAGE LANDING PAGE w istniejącym checkout `petconnectuk-landing-page`; nie twórz worktree. Początkowo repo było puste. Wybrany prosty stos: Vite, vanilla JS, CSS, GSAP / ScrollTrigger. Nie trzeba uruchamiać aplikacji mobilnej ani backendu. Kod i lokalny podgląd są zamówione; hosting, domena i publikacja witryny nie są częścią tej realizacji. Gotowy kod i podglądy mają być zapisane we wskazanym repozytorium GitHub. Dokumenty po polsku, strona w naturalnym brytyjskim angielskim. Zachowaj dowolne już istniejące niezwiązane pliki, jeśli wykonujesz zlecenie w późniejszym stanie projektu.

## 2. Oferta, odbiorcy i fakty

PetConnect to aplikacja dla opiekunów różnych zwierząt. Łączy społeczność, wiedzę oraz odkrywanie miejsc i usług. Druga grupa to profesjonaliści i firmy związane ze zwierzętami. Główny odbiorca może dopiero odkrywać potrzebę aplikacji albo aktywnie szukać społeczności, informacji czy miejsca. Nie zawężaj fotografii i języka do właścicieli psów; dostępne zdjęcie opiekunki z królikiem pozwala poszerzyć przekaz.

Wersja polska jest dostępna, angielska dopiero w przygotowaniu. Nie ma potwierdzonego terminu premiery. Marketplace nie jest wdrożony i pozostaje osobnym przyszłym projektem — nie opisuj go jako dostępnego ani obiecanego przy starcie EN. Nie wymyślaj opinii, wyników, ocen, liczników, nazw klientów, partnerów, cen lub darmowego planu. Nie sugeruj, że istnieje już katalog partnerów UK. Informacje o gotowości angielskiej wersji muszą być widoczne od początku i przy pobraniu.

Nagłówek: „Their world. Better connected.” Podtytuł wyjaśnia społeczność i codzienne zastosowanie. Narracja: znajoma sytuacja → pomysł PetConnect → możliwości → działanie. Wybrane dowody to produkt i sposób działania; nie dodawaj sekcji testimonials. Pierwotna polska strona została obejrzana wyłącznie na dostarczonych screenshotach. Zachowujemy markę, kolory i nawigację sekcyjną, nie kopiujemy całego układu.

Główna akcja otwierająca może prowadzić do prezentacji („Explore the app”), a pobranie PL jest zawsze jasno opisane. Docelowe linki z kodu aplikacji: App Store https://apps.apple.com/us/app/petconnect/id6747425787, Google Play https://play.google.com/store/apps/details?id=com.petconnectapp.app. Nie zmieniaj regionu Apple bez weryfikacji. Dodatkowa ścieżka firm prowadzi do kontaktu z tematem współpracy. Potwierdzony adres: contact@petconnectapp.eu. Formularz przygotowuje szkic email i otwiera program pocztowy użytkownika, bez automatycznej wysyłki. Napisz to wprost przy przycisku. Nie dodawaj backendu, newslettera, płatności, CRM lub analityki.

## 3. Mechanizm artystyczny

Koncepcja „Świat, który się zbliża”: fotografia zajmuje duże spokojne pole i ustanawia relację człowiek–zwierzę. Następnie kadr i przestrzeń zmieniają się tak, aby telefon pojawił się jako przedni plan — narzędzie łączące życie ze społecznością i informacją. W finale fotografia ponownie ma pierwszeństwo, a scena uspokaja się przed działaniem. Reguła: jeden dominujący motyw naraz, szerokie marginesy, celowe różnice skali i gęstości. Nie powtarzaj tekst-lewo / obraz-prawo w każdej sekcji.

Materiały: fotografia prowadzi, 3D wspiera. Charakter: ciepły i ludzki, z wyrazistą skalą i kompozycją. Nie infantylny i nie zimno technologiczny. Nie zamieniaj tego w świat kreskówkowych zwierząt lub ornamentalnych brył. Telefon może być rzeczywistą bryłą z warstw i CSS perspective; pełny silnik WebGL nie jest konieczny do uzgodnionego efektu. Osiągnij widoczną głębię, grubość, światło i zmianę perspektywy, a nie sam obrót płaskiego PNG.

Paleta: główny śliwkowy ton strony #8B346F jest przybliżeniem ze screenshotów; dokładne kolory aplikacji #A12A70, #781566, #DF0D54. Białe powierzchnie, bardzo jasny śliwkowy #F8F1F6, ciemny tekst #2D1B28, pomocniczy #71636D. Nie dodawaj beżowego tła, neonów ani niebieskich elementów UI. Fotografie zachowują naturalne kolory i nie udają dowodów wyników produktu. Pierwsze sceny głównie białe; duże śliwkowe pole tylko tam, gdzie zmienia rytm i akcentuje ścieżkę firm.

Użyj lokalnego Satoshi Variable i Italic z aplikacji, wag 400–700. Duża typografia otwierająca ok. 80–100 px desktop, 50–64 px mobile; body ok. 16–18 px z przestronną interlinią. Dobierz łamanie wierszy osobno na telefonie. Tekst nie leży na ważnych fragmentach fotografii. Nie pytaj użytkowniczki o font, easing lub breakpointy.

Znaczące detale: znak serca z łapką identyfikuje markę w nawigacji, telefonie i finale; krótkie podpisy orientują w statusie języka i podglądu; linie grupują prawdziwe wybory i statusy. Nie rozsypuj ozdobnych łapek, pieczątek, sztucznych numerów rozdziałów i pseudotechnicznych etykiet. Każdy detal ma konkretną lokalną rolę i nie musi wracać w każdej sekcji.

## 4. Sceny i copy

1. **Opening:** biała przestrzeń, duża fraza „Their world. Better connected.”, autentyczne zdjęcie opiekunki z psem z onboardingphoto. Wysoki, miękko łukowy kadr odpowiada wielkością tekstowi; nawigacja lekka, logo czytelne. Podtytuł wyjaśnia społeczność i odkrywanie. Status „English version in development” jest jednoznaczny. CTA „Explore the app” i możliwość przejścia do pobrania PL. Mobile: tekst przed obrazem, bez poziomego overflow.
2. **Codzienna bliskość:** szerokie zdjęcie opiekunki z królikiem i myśl „Life with pets is better shared.” Krótki tekst o pytaniach, odkryciach i zdjęciach, którymi chce się dzielić. Inny kadr i proporcje niż w openingu. Ruch obrazu wewnątrz maski prowadzi do prezentacji aplikacji.
3. **Poznanie:** „A little look. A lot to discover.” Przestronny rozdział z jednym telefonem i trzema wyborami Connect / Learn / Discover. W tle fotograficzny plan, z przodu czytelny ekran. Etykieta „English concept preview” stale widoczna. Wybór Connect pokazuje społeczność, Learn wiedzę, Discover przykładowe odkrywanie miejsc. Treści oznaczone jako ilustracyjne; żaden fikcyjny profil ani marker nie udaje prawdziwych danych UK. Każdy wybór zmienia objaśnienie i ekran. Dopuszczalne lokalne akcje, np. zapis w podglądzie lub filtr miejsc; nie udawaj komunikacji z produkcją.
4. **Usługodawcy:** śliwkowe pole z białym „Your passion. Their next favourite place.” i fotografią rodziny z psem. Wyjaśnij zaproszenie firm związanych ze zwierzętami do rozmowy; nie obiecuj istniejących partnerów. „Let's talk” prowadzi do formularza i wybiera temat biznesowy.
5. **Status / pobranie:** uspokojenie, białe pole, „Good things are on their way.” English — in development, Polish — available now. Brak wymyślonej daty. Prawdziwe linki do obu sklepów wyraźnie dotyczą polskiej wersji. Nie zamieniaj statusu w niepodłączoną waitlistę.
6. **Kontakt:** „Good things start with a hello.” Adres contact@petconnectapp.eu oraz dostępny formularz z tematem, nazwą, email i wiadomością. Walidacja przed przygotowaniem mailto. Przycisk „Open email draft”; informacja, że nic nie jest wysyłane automatycznie. Stopka z logo, polską stroną i prawdziwymi dokumentami https://petconnectapp.eu/regulamin oraz https://petconnectapp.eu/politykaprywatnosci, oznaczonymi „Polish”.

## 5. Materiały do przekazania z promptem

Wymagane pliki z aplikacji `petconnect-mobile-dev` przy commicie 437264d16a3a2087446d60d7f804265c032bd7c9: `src/assets/Svg/logo.svg` lub logo bootsplash PNG, `src/assets/Img/onboardingphoto.png`, `registerphoto.png`, `premiumphoto.png`, `src/assets/Fonts/Satoshi-Variable.ttf`, `Satoshi-VariableItalic.ttf`. Logo mobilne to serce z łapką w malinowo-śliwkowym gradiencie. Pierwotne fotografie mają 4096 px szerokości i muszą być zoptymalizowane do responsywnych WebP. W hero priorytet pobrania; obrazy poniżej lazy. Zachowaj punkt kadru twarzy opiekuna i zwierzęcia. Do ruchu pozostaw zapas w masce i rezerwuj wymiary.

Źródła produktu: mobilne `src/navigation/BottomTabs.tsx`, ekrany home/map/education/profile, i18n PL, `src/theme/appColors.js`, `src/config.ts`; backend `petconnect-backend-dev` commit 230fe710c682fbac1e1f40b345e32280c5f840fd. Kod jest źródłem zakresu, nie potwierdzeniem działania produkcyjnego. Nie kopiuj sekretów i konfiguracji usług. Nie potrzeba dostępu do kont użytkowników.

Rzeczywiste aktualne screenshoty aplikacji nie zostały jeszcze dostarczone. Nie przedstawiaj odtworzonego angielskiego ekranu jako gotowego produktu; nazwij go koncepcją. Pliki źródłowe były dostarczone przez właścicielkę projektu; osobna dokumentacja praw do fotografii i fontu nie była zawarta w repo — odnotuj to jako pozycję przed publikacją. Nie udawaj sprawdzenia licencji. Zapisz faktyczne pochodzenie zoptymalizowanych plików w `public/assets/SOURCES.md`. Nie są potrzebne generowane obrazy ani nowe zdjęcia stockowe, aby zrealizować ten kierunek.

## 6. Pełny score ruchu i interakcji

Otwarcie reaguje na naturalny scroll: fotografia zmienia zbliżenie i położenie w stabilnej ramie, tekst porusza się mniej. Relacja osoby i psa pozostaje czytelna. Przy przejściu do królika tempo obrazu różni się od tekstu, co wprowadza plany bez zagęszczenia. Odwrócenie scrolla przywraca wcześniejszy kadr.

Główna sekwencja: ograniczony kontener sticky, bez przejmowania scrolla. Wejście — zdjęcie i lekko obrócona bryła telefonu tworzą widoczną głębię; rozwój — zdjęcie odsuwa się w bok i w głąb, telefon zbliża się i obraca ekranem do widza; punkt znaczący — obraz i ekran przestają rywalizować, a czytelny telefon pokazuje funkcję; wyjście — ruch się uspokaja i oddaje uwagę scenie firm. Odwrócenie płynnie cofa geometrię, zachowując wybraną zakładkę i stan lokalnej demonstracji. Nie rozpoczynaj nieskończonej animacji obracania. W mobile skróć przebieg, ogranicz obrót i nie używaj sticky, który zabiera przestrzeń potrzebną do interakcji. W reduced motion statycznie pokaż telefon z dostępnymi zakładkami.

Connect / Learn / Discover działa przez dotyk, kliknięcie oraz strzałki klawiatury i Home/End. Wybór daje widoczny wynik: inny ekran, objaśnienie i aktywny stan. Krótki przestrzenny akcent jest odpowiedzią na działanie, nie zastępuje całej sekwencji scroll. Wszystkie treści mają czytelny stan początkowy. Dla akcji lokalnych wyświetl stan w podglądzie, bez sugerowania trwałego zapisu w aplikacji.

## 7. Wykonanie, dostępność i granice

Nagłówek ma sekcyjne linki i poprawny scroll-margin. Mobile menu ma aria-expanded, zamknięcie po wyborze i Escape. Nie zasłaniaj nagłówków stałą nawigacją. Skip link, pojedynczy h1, hierarchia h2/h3, prawdziwe przyciski i etykiety formularza. W widocznych zakładkach zadbaj o aria-controls/selected i focus. Brak poziomego overflow również na 320 px. Telefon ma własny czytelny rozmiar, nie ściskaj całej strony desktopowej do miniatury.

Media są lokalne, bez zewnętrznych trackerów i niepotrzebnych requestów. Linki sklepów i mailto to prawdziwe akcje, lecz nie testuj wysyłki email ani zakupu. Nie twórz fikcyjnego success dla niepodłączonego formularza. Nie publikuj strony, nie konfiguruj domeny, nie uruchamiaj płatności, backendu i analityki. Kod, zależności i dokumentacja mają wystarczyć do późniejszego hostingu statycznego.

## 8. Procedura i kryteria zakończenia

Najpierw zapisz brief i DESIGN.md z macierzą wymagań. Zbuduj opening, przejście i kluczową scenę aplikacji z prawdziwym ruchem, uruchom i obejrzyj je przed rozszerzeniem strony. Następnie wykonaj pełną narrację i interakcje. Uruchom build i kontrolę składni. Sprawdź Chromium przez dostępne Playwright bez instalowania zbędnego stosu testowego: 1440×1000, 390×844, 320 px, reduced motion. Wybierz wszystkie zakładki, sprawdź klawiaturę i akcje lokalne, menu, kotwice, formularz, docelowe URL oraz loaded images/fonts. Przejrzyj wejście, środek, wyjście i cofnięcie głównej sekwencji; zrób odpowiadające kadry lub nagranie. Sprawdź kontrast realnych par kolorów, konsolę, błędne zasoby i overflow.

Oceń osobno jakość artystyczną: czy fotografia prowadzi więcej niż hero, czy środek jest równie dopracowany, czy kompozycja ma oddech, czy logo i zdjęcie nie są jedynymi elementami odróżniającymi stronę od szablonu. Usuń lub przerób detale bez konkretnej roli, zachowując ambicję skali, kadru i ruchu. Popraw wykryte problemy i powtórz dotknięte sprawdzenia. Wyniki w macierzy i VERIFICATION.md muszą odnosić się do rzeczywiście wykonanych czynności. Ograniczenia źródeł, screenów, poczty i publikacji opisz uczciwie. Dostarcz pliki, instrukcję uruchomienia oraz screenshoty, jeżeli zostały wykonane.
