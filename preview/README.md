# Działający podgląd internetowy — wersja 3

`petconnect-preview.zip` zawiera aktualny build wersji 3 z generowanymi fotografiami, animacją i angielskim podglądem na podstawie screenów aplikacji, z krojem Satoshi i nazwą PetConnect bez kropki: plik `index.html` w katalogu głównym i lokalny katalog `assets`. Nie wymaga budowania kodu ani połączenia z backendem.

## Najszybsze uruchomienie na Netlify

1. Pobierz `petconnect-preview.zip` z tego katalogu i rozpakuj go na swoim komputerze.
2. Otwórz https://app.netlify.com/drop i zaloguj się, jeśli serwis o to poprosi.
3. Przeciągnij katalog zawierający rozpakowany `index.html` i `assets` do pola publikacji.
4. Netlify nada stronie adres HTTPS, pod którym można sprawdzić animacje, prezentację aplikacji i kontakt.

To publikacja wersji testowej: osoby mające adres mogą zobaczyć stronę. Paczka nie zawiera konfiguracji backendu, sekretów ani danych rzeczywistych użytkowników. Demonstracja pozostaje oznaczoną koncepcją angielskiego interfejsu.

Alternatywnie połącz repozytorium z własnym kontem Netlify. Dołączony `netlify.toml` ustawia build `npm run build`, katalog `dist` i Node.js 24.

Hosting nie został uruchomiony z poziomu tej sesji. Nie ma dostępnego narzędzia publikacji ani uwierzytelnionego konta hostingowego; sam plik ZIP i konfiguracja nie tworzą adresu internetowego. Pierwsza publikacja wymaga użycia konta hostingowego przez właścicielkę projektu.
