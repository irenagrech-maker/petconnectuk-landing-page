# Archiwum próby instalacji React Bits Pro

**Bieżący stan:** użytkowniczka zleciła autorską realizację zamiast niedostępnego komponentu Pro. Efekt jest napisany niezależnie w `src/vapor-messages.js` oraz `src/vapor-messages.css`, korzysta z istniejącego GSAP i nie wymaga klucza. Nie użyto kodu Pro. Przygotowane wyłącznie pod instalację React, Tailwind, TypeScript i ich konfigurację usunięto. Poniższy zapis dotyczy wcześniejszej próby i nie jest już blokadą strony.

---

# Vapor Type — przygotowanie integracji

Status: przygotowano React, React DOM, TypeScript/TSX, alias `@/`, plugin React zgodny z Vite 7 oraz Tailwind 4. Komponent **nie został pobrany ani zamontowany**. Obecny wygląd strony jest zachowany. `src/reactbits.css` czeka na import przy integracji; nie ładuje globalnego resetu Tailwind.

## Co blokuje instalację

- W środowisku nie ma `REACTBITS_LICENSE_KEY`. Wartość należy dodać prywatnie w ustawieniach środowiska. Nie wklejać jej do rozmowy, repo ani zmiennej `VITE_*`.
- Obie strony dokumentacji `https://pro.reactbits.dev/docs/installation` i `https://pro.reactbits.dev/docs/components/vapor-type` zwracają w tym środowisku błąd tunelu proxy 403. Próba żądanego polecenia shadcn kończy się błędem pobrania `https://ui.shadcn.com/r/registries.json`.
- Publiczny katalog rejestrów w repo shadcn potwierdza tylko darmowy `@react-bits`, nie `@reactbits-starter`. Dlatego adresy rejestrów Pro nie zostały zgadnięte. Pole `registries` w `components.json` jest na razie puste.

## Dokończenie

1. Odczytać oficjalną konfigurację rejestrów z dokumentacji Pro i dodać wymagane wpisy do `components.json`. Dla autoryzacji użyć odwołania do zmiennej środowiskowej, nigdy jej rzeczywistej wartości:

   ```json
   "headers": {
     "Authorization": "Bearer ${REACTBITS_LICENSE_KEY}"
   }
   ```

2. Mając dostęp do sieci i klucz w środowisku, uruchomić:

   ```bash
   npx shadcn@latest add @reactbits-starter/vapor-type-tw
   ```

3. Obejrzeć pobrany kod i jego prawdziwe API przed adaptacją. Osadzić `<VaporType />` jako mały obszar Reacta w hero, bez przebudowy pozostałych sekcji. Nie dopisywać niepotwierdzonych propsów.
4. Proponowane angielskie komunikaty: „Meet fellow pet people.”, „Share the little moments.”, „Explore pet-care knowledge.”, „Discover places together.”. Zachować Satoshi i #A12A70. Główny nagłówek, status EN/PL i przyciski sklepów pozostają stale czytelne.
5. Zmiana komunikatu po wejściu wskaźnika oraz kliknięciu/dotyku, dostępny przycisk z Enter/Space. Dla reduced motion statyczny czytelny tekst bez parowania. Nie umieszczać klucza w kodzie klienta.
6. Sprawdzić realny efekt, czytelność i brak przesunięć układu na desktop i mobile, następnie odświeżyć build, podglądy i paczkę ZIP. Nie nazywać przygotowania instalacją gotowego komponentu.

Dokumentacja źródłowa: [instalacja](https://pro.reactbits.dev/docs/installation), [Vapor Type](https://pro.reactbits.dev/docs/components/vapor-type).

## Weryfikacja przygotowania

- `npm run check`, `npm run build` oraz `npx --no-install tsc --noEmit`: sukces.
- Oddzielny build Vite z `write: false` dla `src/reactbits.css`: sukces; zweryfikowano działanie pluginu Tailwind bez dołączania resetu do strony.
- Build aktywnej strony zachował pliki `index-BLIM2svo.css` i `index-BaORCG4d.js`, z tymi samymi rozmiarami jak przed przygotowaniem. Runtime React i opcjonalny CSS nie są jeszcze ładowane na stronie.
- Pierwsza próba najnowszego pluginu React ujawniła wymaganie Vite 8. Zastosowano zgodny plugin React 5; nie obchodzono peer dependencies przez force. Alias TS zapisano bez usuniętej w obecnym TypeScript opcji baseUrl.
- Brak weryfikacji wizualnej Vapor Type: kod komponentu i jego API są niedostępne. Aktualna paczka preview przedstawia istniejącą wersję 3; nie przedstawiamy jej jako podglądu nowego efektu.
