# Aktualizacja 5 — autorski efekt parowania komunikatów

Użytkowniczka zleciła własny odpowiednik efektu po niedostępnej instalacji React Bits Pro: „ok a mozesz sam cos takiego zrobic?”. To jawna zgoda na autorską realizację, bez zależności od komponentu Pro, rejestru i licencji. Nie używamy kodu React Bits Pro ani jego nazwy jako oznaczenia własnego komponentu.

Realizacja: cztery krótkie angielskie komunikaty w hero, zmieniane myszą, dotykiem i klawiaturą. Litery rozpraszają się w lekką smugę, kolejny tekst wyłania się i pozostaje czytelny. Stały h1, Satoshi, #A12A70 i status EN/PL pozostają. Brak automatycznej pętli; reduced motion zmienia tekst natychmiast. Istniejący GSAP i vanilla JS wystarczają; zbędne przygotowanie React/Tailwind z poprzedniej iteracji zostaje wycofane. Reszta strony bez zmian zakresu.

---

# Aktualizacja 4 — zlecony Vapor Type, instalacja oczekuje na dostęp

Użytkowniczka wskazała konkretny komponent React Bits Pro `@reactbits-starter/vapor-type-tw` i `<VaporType />`. Chce krótkie czytelne komunikaty o aplikacji na pierwszym ekranie, zmieniające się po wejściu myszą. Przewidziano również kliknięcie, dotyk i klawiaturę; zachowujemy Satoshi, paletę i czytelny stały nagłówek. Nie zastępujemy wskazanego komponentu autorską imitacją.

Przygotowano techniczne wymagania React/TSX/Tailwind. Komponent nie został zainstalowany: brak `REACTBITS_LICENSE_KEY`, strony dokumentacji zwracają proxy 403, a próba shadcn nie pobrała katalogu rejestrów. Nie zgadnięto adresów Pro ani API propsów. Następny krok: oficjalna konfiguracja rejestrów i klucz prywatnie w środowisku; szczegóły w REACTBITS_SETUP.md. Nowa animacja nie jest jeszcze widoczna na stronie.

---

# Aktualizacja 3 — ciepłe zdjęcia i animacja

Użytkowniczka uznała wersję 2 za dużo lepszą i zleciła dalsze rozwinięcie: dodać atrakcyjną animację, nowe wygenerowane zdjęcia pokazujące dobrą relację ludzi ze zwierzętami (w szczególności wspólny spacer kilku osób z psami) oraz dopracować angielskie podglądy na podstawie kompletu przesłanych screenów. Pozwoliła na wymyślone angielskie treści i podmianę fotografii. Zachowujemy czytelny układ v2, Satoshi, paletę aplikacji oraz nazwę PetConnect bez kropki.

Decyzja wykonawcza: dwa spójne obrazy — spacer znajomych z psami w parku oraz spokojna scena domowa z człowiekiem, kotem i psem. Fotografia spaceru tworzy osobny spokojny rozdział po produktowym hero i wraca jako przykładowy post, łącząc relację z funkcją aplikacji. Ruch: otwarcie grupy telefonów, subtelne odsłonięcie i reframing fotografii, rysowana ścieżka między krokami desktop oraz zachowana przestrzenna prezentacja. Bez animowania tekstu podczas czytania i bez długiego sticky.

Przesłane screeny są referencją struktury i stylu UI: feed, powiadomienia, edukacja, ustawienia, znajomi, wiadomości, profil, mapa. Prawdziwe nazwy, wiadomości i profile nie są kopiowane do publicznego podglądu. Angielskie przykłady i wygenerowane zdjęcia pozostają jawnie ilustracyjne. Zdjęcie wspólnego spaceru nie jest obietnicą wdrożonego organizowania spacerów; marketplace nadal niewdrożony, EN w przygotowaniu, PL dostępne.

Źródła nowych obrazów i prompty: public/assets/GENERATED_IMAGES.md. Oryginały generatora pozostają w katalogu środowiska; do strony trafiają zoptymalizowane WebP.

---

# Aktualny kierunek — wersja 2 po uwagach użytkowniczki

Dodatkowe wiążące doprecyzowanie użytkowniczki: zachować styl czcionki i zapis nazwy **PetConnect bez kropki**. Używany jest istniejący krój Satoshi z aplikacji; kropkę usunięto z samego oznaczenia marki.

Pierwsza propozycja została odrzucona: polska strona jest dla użytkowniczki ładniejsza i czytelniejsza; kolory powinny odpowiadać aplikacji, a typografia wymaga spójności. To najnowsze, wiążące wymagania, nadrzędne wobec wcześniejszej interpretacji artystycznej.

Zmiany wykonawcze (propozycja autora, do oceny): prosty nagłówek „Your place for pets and pet people.”, ekrany aplikacji w otwarciu, kolor #A12A70 i autentyczny gradient #DF0D54 → #781566, czarny tekst / białe tło, jedna rodzina Satoshi, brak kursywy w interfejsie strony, większe opisy, równy system nagłówków. Trzy kroki i trzy korzyści są widoczne bez klikania. Dodatkowa prezentacja Connect / Learn / Discover oraz lekki akcent przestrzenny pozostają; długa scena sticky i fotograficzne otwarcie zostały zastąpione czytelniejszym przedstawieniem produktu. Nowa kompozycja nie jest jeszcze zatwierdzona przez użytkowniczkę.

Dostarczony dokument `PetConnectApp_Specyfikacja.html` odczytano jako materiał referencyjny. Potwierdza paletę, znak marki i ton komunikacji; zawiera dwa materiały App Store oraz starsze informacje / roadmapę. Bezpośrednie ustalenie użytkowniczki o niewdrożonym marketplace pozostaje nadrzędne. Materiałów o finansach, fundraisingu, prognozach i wewnętrznych ryzykach nie przenosimy na landing ani do repo. Pełny dokument pozostaje poza repozytorium. Kolory i gradient zostały dodatkowo potwierdzone w kodzie aplikacji (`appColors.js`, `GradientButton.tsx`).

Wszystkie ustalenia biznesowe pozostają: polska aplikacja dostępna, angielska w przygotowaniu bez terminu; kontakt contact@petconnectapp.eu; brak obietnic marketplace; brak fikcyjnych opinii i wyników. Ekrany EN są oznaczonym podglądem koncepcyjnym, nie gotową angielską aplikacją. Poprzedni brief i rejestr poniżej dokumentują przebieg; bieżące wykonanie opisuje DESIGN.md, a pierwszą interpretację zachowano w design-history/.

---

# PetConnect UK — brief i rejestr decyzji

## Zakres

Nowy angielskojęzyczny landing page marki PetConnect, inspirowany polską stroną https://www.petconnectapp.eu. Osobna kompozycja, z zachowaniem kolorów i tożsamości marki. Kod, dokumentacja i lokalny podgląd w repozytorium `irenagrech-maker/petconnectuk-landing-page`. Użytkowniczka zleciła również zbudowanie strony po zakończeniu wywiadu. Hosting, domena i publikacja pozostają do późniejszego ustalenia. Nie opublikowano strony. Kod i podglądy są przygotowane do zapisu we wskazanym repozytorium GitHub.

Język strony: angielski, pisownia brytyjska. Język dokumentacji i rozmowy: polski.

## Fakty i źródła

- PetConnect to aplikacja dla opiekunów zwierząt oraz usługodawców związanych ze zwierzętami. Źródło: użytkowniczka, screeny strony, odczyt kodu.
- Wersja polska jest dostępna; wersja angielska jest przygotowywana. Brak potwierdzonego terminu premiery. Źródło: użytkowniczka; mobilne zasoby tłumaczeń zawierają polski interfejs.
- Marketplace nie jest wdrożony. To osobny przyszły zakres. Źródło: jednoznaczne doprecyzowanie użytkowniczki po przeglądzie repozytoriów. Nie reklamujemy go jako funkcji dostępnej ani obiecanej na premierę angielską.
- Repo mobilne: https://github.com/irenagrech-maker/petconnect-mobile-dev, odczytane HEAD `437264d16a3a2087446d60d7f804265c032bd7c9`. Zdalna gałąź: `main` (w chwili przeglądu brak gałęzi `dev`).
- Backend: https://github.com/irenagrech-maker/petconnect-backend-dev, HEAD `230fe710c682fbac1e1f40b345e32280c5f840fd`, gałąź `main`.
- Kod potwierdza ekrany społeczności, profilu, edukacji, mapy punktów, wiadomości i rabatów. Nie dowodzi aktualnej dostępności usług lub partnerów w UK. Nie uruchamiano ani nie zmieniano aplikacji mobilnej i backendu.
- Przegląd polskiej strony: screeny dostarczone w rozmowie; bezpośredni odczyt domeny z tego środowiska blokowany odpowiedzią proxy 403. Nie zweryfikowano jej działania w przeglądarce. Menu prowadzi do sekcji na tej samej stronie — potwierdzone przez użytkowniczkę.
- Publiczne adresy sklepów, kontakt i linki prawne pochodzą z `src/config.ts` aplikacji. Nie kopiowano konfiguracji środowiskowej ani danych uwierzytelniających.

## Odbiorcy i argument

Główni odbiorcy: opiekunowie różnych zwierząt, zarówno nieznający jeszcze potrzeby takiej aplikacji, jak i aktywnie szukający kontaktów, informacji lub miejsc i usług. Druga ścieżka: usługodawcy wyłącznie związani ze zwierzętami. Bez zawężania do psów i kotów.

Hipoteza komunikacyjna (propozycja projektowa, nie wynik badań): poczucie przynależności i codzienne sytuacje są czytelniejszym otwarciem dla nowej marki w UK niż katalog wszystkich funkcji.

Proponowana obietnica: „Their world. Better connected.” Aplikacja łączy społeczność, wiedzę i odkrywanie miejsc. Nie obiecujemy rezultatów zdrowotnych, dostępności partnerów UK, oszczędności, darmowego planu ani konkretnej daty premiery.

## Rejestr decyzji

| Etap | Odpowiedź / źródło                                                         | Decyzja wykonawcza                                                             | Uzasadnienie                                          | Status                                                  |
| ---- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------- |
| 1    | 2; nowy adres, angielski, kolory polskiej strony                           | Nowa interpretacja istniejącej marki                                           | Zachować rozpoznawalność, zmienić doświadczenie       | Wybrane przez użytkowniczkę                             |
| 2    | Screeny i repozytoria                                                      | Aplikacja konsumencka / społeczność, usługi jako druga ścieżka                 | Odpowiada rzeczywistemu produktowi                    | Dostarczone / zweryfikowane w kodzie                    |
| 3    | 6, głównie użytkownik; sytuacje 1 i 2; usługodawcy związani ze zwierzętami | Najpierw opiekunowie różnych zwierząt, dalej firmy                             | Jedna główna ścieżka z dodatkową                      | Wybrane                                                 |
| 4    | 2 + 4; angielski w przygotowaniu; zainteresowanie 8                        | Pobranie PL z jasnym językiem, kontakt, zapowiedź EN, interaktywna prezentacja | Uczciwie przedstawia etap produktu                    | Wybrane                                                 |
| 5    | Ostatecznie 1 i 6                                                          | Produkt i jego działanie, bez opinii i statystyk                               | Prawdziwy materiał produktowy                         | Wybrane; wcześniejsze 4 zastąpione                      |
| 6    | 2 + 10                                                                     | Fotografia prowadzi; przestrzeń / 3D wspiera                                   | Ludzie i zwierzęta jako bohaterowie                   | Wybrane                                                 |
| 7    | Akceptacja 4 + 3                                                           | Ciepła i ludzka, wyrazista w skali                                             | Bliskość + charakter                                  | Wybrane                                                 |
| 8    | Akceptacja 4 + 8; „nie chcę żeby było naciupane”                           | Przestronne rozdziały; jeden punkt uwagi naraz                                 | Dużo oddechu i czytelność                             | Wiążące                                                 |
| 9    | 2                                                                          | Sytuacja → pomysł → możliwości → działanie                                     | Wprowadza nową markę bez długiego wstępu              | Wybrane                                                 |
| 10A  | Akceptacja 3                                                               | Rytmiczna choreografia przy naturalnym przewijaniu                             | Głębia i ciągłość bez przeładowania                   | Wybrane                                                 |
| 10B  | Akceptacja 2 i propozycji Connect / Learn / Discover                       | Wybór potrzeby zmienia ekran i objaśnienie                                     | Pozwala samodzielnie odkrywać funkcje                 | Wybrane                                                 |
| 11   | Dostęp do repozytoriów; możliwość dosłania screenów                        | Logo, fotografie, font, ikony z aplikacji; podgląd EN na podstawie kodu        | Oryginalna tożsamość zamiast przypadkowych materiałów | Materiały dostępne; autentyczne screeny do dostarczenia |
| 12   | „5 plus zbudujesz tę stronę… później ustalimy gdzie ją wrzucić”            | Pełny brief, specyfikacja, prompt, działająca lokalna strona                   | Publikacja osobno                                     | Wybrane; wszystkie etapy wywiadu zakończone             |

## Funkcje i prawdziwe endpointy

- App Store: https://apps.apple.com/us/app/petconnect/id6747425787 — oryginalny adres z kodu. Nie zmieniamy samowolnie kraju sklepu; dostępność kont UK nie została niezależnie sprawdzona.
- Google Play: https://play.google.com/store/apps/details?id=com.petconnectapp.app.
- Kontakt: `contact@petconnectapp.eu`, potwierdzony w konfiguracji aplikacji. Formularz przygotowuje `mailto:` z treścią; jasno informuje o otwarciu programu pocztowego. Brak automatycznej wysyłki, serwera formularza, CRM i zapisu danych.
- Regulamin: https://petconnectapp.eu/regulamin; polityka prywatności: https://petconnectapp.eu/politykaprywatnosci. Oznaczone jako dokumenty po polsku. Nowe angielskie dokumenty prawne są zależnością przed publikacją, jeśli mają zastąpić polskie.
- Demonstracja jest działającą lokalną prezentacją wyboru funkcji. Angielski interfejs jest koncepcją oznaczoną „English concept preview”; przykładowe treści i punkty nie są prawdziwymi profilami, usługodawcami ani danymi produkcyjnymi. Brak połączenia z backendem mobilnym.

## Materiały i dowody

| Materiał                               | Status                                                    | Zastosowanie / ograniczenie                                                                                                                                                    |
| -------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Logo, kolory, Satoshi                  | Dostępne w repo mobilnym                                  | Ponowne użycie dostarczonej tożsamości; repo nie zawiera osobnej dokumentacji licencji fontu                                                                                   |
| Fotografie onboarding/register/premium | Dostępne i obejrzane                                      | Atmosfera; nie przedstawiamy osób jako klientów, autorów opinii lub zespołu. Pierwotne autorstwo/licencja nie są opisane w repo — do potwierdzenia przed publicznym wdrożeniem |
| Kod ekranów i funkcji                  | Odczytany                                                 | Podstawa kompozycji i ograniczonej prezentacji                                                                                                                                 |
| Autentyczne aktualne screeny           | Do dostarczenia przez użytkowniczkę                       | Mogą zastąpić podgląd koncepcyjny; ich brak nie jest ukrywany                                                                                                                  |
| Opinie, wyniki, statystyki             | Poza ostatecznie wybranym zakresem dowodów                | Nie tworzymy fikcyjnych opinii, ocen, liczników, partnerów                                                                                                                     |
| Działająca polska aplikacja            | Istnienie potwierdzone przez użytkowniczkę; kod obejrzany | Nie twierdzimy, że przeprowadzono testy aplikacji                                                                                                                              |

## Dostawa i ograniczenia

Materiały w repo: LANDING_BRIEF.md, DESIGN.md, LANDING_PROMPT.md, README.md, kod i zoptymalizowane zasoby. Dokumentacja QA po rzeczywistych testach. Do implementacji używamy istniejącego checkoutu — nie tworzymy worktree. Bez publikacji witryny, zmian aplikacji mobilnej, backendu, płatności, newslettera lub analityki. Następne działania biznesowe: opcjonalnie dosłać screeny; przed publikacją potwierdzić prawa do materiałów, regiony sklepów, docelowe dokumenty prawne i hosting. Brak otwartych decyzji projektowych; zależności nie oznaczają zrealizowanych integracji.

## Aktualizacja zakresu po realizacji

Po problemie z otwieraniem lokalnych linków kod i podglądy zapisano na GitHubie. Następnie użytkowniczka poprosiła o działający podgląd na hostingu asystenta. Zgoda na tymczasowe udostępnienie strony została więc udzielona; produkcyjna domena i docelowy hosting nadal nie są ustalone. W tej sesji nie ma własnego hostingu, narzędzia publikacji ani dostępnego uwierzytelnienia do dostawcy. Sprawdzenie tymczasowego tunelu Cloudflare zakończyło się blokadą proxy 403. Przygotowano i sprawdzono gotowy build ZIP oraz konfigurację Netlify. Publikacja nie została wykonana; wymaga działania właścicielki na koncie hostingowym.
