# Pochodzenie materiałów

Materiały marki pochodzą z repozytorium wskazanego przez właścicielkę projektu: `irenagrech-maker/petconnect-mobile-dev`, commit `437264d16a3a2087446d60d7f804265c032bd7c9`.

| Pliki w tym projekcie            | Oryginał                                    | Rola                                                                             |
| -------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------- |
| petconnect-mark.svg              | src/assets/Svg/logo.svg                     | Oryginalny znak marki; bez zmiany ścieżek i kolorów                              |
| together-{800,1600,2400}.webp | src/assets/Img/onboardingphoto.png | Fotografia otwierająca: kobieta i golden retriever; większy wariant zapewnia ostrość w wysokim kadrze |
| little-companion-{800,1600}.webp | src/assets/Img/registerphoto.png            | Fotografia relacji: kobieta i królik                                             |
| next-adventure-{800,1600}.webp   | src/assets/Img/premiumphoto.png             | Rodzina i pies: plan fotograficzny, sekcja usługodawców, przykład w demonstracji |
| Satoshi-Variable.woff2           | src/assets/Fonts/Satoshi-Variable.ttf       | Lokalny font marki                                                               |
| Satoshi-VariableItalic.woff2     | src/assets/Fonts/Satoshi-VariableItalic.ttf | Lokalna kursywa marki                                                            |

WebP: wyłącznie zmiana rozdzielczości, kompresja i usunięcie metadanych; kadrowanie wynika z CSS. Fonty: konwersja do WOFF2 i podzbiór znaków łacińskich, polskich oraz interpunkcji. Nie generowano fotografii ani nie zmieniano przedstawionych osób/zwierząt.

Pierwotne autorstwo i warunki licencji fotografii oraz osobna licencja fontu nie są opisane w dostarczonym repo. Ponowne użycie materiałów marki wynika ze zlecenia właścicielki; przed publikacją należy potwierdzić prawa. Nie przedstawiamy tych osób jako klientów, autorów opinii lub zespołu.

Ekrany angielskie i mapa są własną lokalną prezentacją koncepcyjną na podstawie kodu funkcji. Nie są screenshotami gotowej angielskiej aplikacji, prawdziwymi profilami, punktami UK ani danymi produkcyjnymi. Autentyczne aktualne screenshoty zostały zaoferowane przez użytkowniczkę i mogą zostać dosłane. W projekcie nie ma fikcyjnych testimonials i statystyk.

Grafika mapy i proste ikony liniowe są napisane w kodzie tego projektu; znak marki pochodzi z aplikacji. Bez nowych materiałów stockowych, zewnętrznych trackerów i generowanych obrazów.

## Wersja 2 — materiały i odniesienia

- `preview-connect.png` i `preview-discover.png`: przechwycone w Chromium obrazy własnej, działającej prezentacji koncepcyjnej. Ten sam font i kolory co w aplikacji; bez danych rzeczywistych użytkowników. To nie są screenshoty gotowej wersji EN.
- `PetConnectApp_Specyfikacja.html`, dostarczony przez użytkowniczkę: referencja palety, znaku i materiałów App Store. Dokumentu ani jego informacji biznesowych nie kopiowano do publicznych zasobów. Osadzone materiały App Store obejmują także starszą nawigację z marketplace, dlatego nie zostały użyte jako dowód dostępności tej funkcji.
- `src/common/buttons/GradientButton.tsx` w repo mobilnym: potwierdza poziomy gradient #DF0D54 → #781566. `appColors.js` potwierdza #A12A70 jako primary-600, #000000 i #FFFFFF.
