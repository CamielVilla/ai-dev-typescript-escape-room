# TypeScript Escaperoom

Een gamified TypeScript learning experience met 8 "kamers" (files) vol type challenges. Fix alle TypeScript type errors om te ontsnappen!

## Setup

```bash
npm install
```

## Types controleren

```bash
npm run check
```

Dit voert TypeScript's type checker uit. Zolang er errors zijn, moet je code fixen.

## Escape!

Wanneer `npm run check` 0 errors geeft:

```bash
npm run escape
```

Dit runt alle kamers en toont het finale escape code. Laat deze code zien aan je docent!

## De 8 Kamers

| Kamer | Concept | Moeilijkheid |
|-------|---------|-------------|
| 1 | Basic Types | Easy |
| 2 | Type Inference | Easy |
| 3 | Interfaces | Medium |
| 4 | Optional Properties | Medium |
| 5 | Union Types | Medium |
| 6 | Type Aliases | Medium |
| 7 | Function Types | Hard |
| 8 | Boss Room (alles samen) | Hard |

Elke kamer is een bestand in `src/`. Open ze in volgorde en fix de TypeScript errors.

## Hoe het werkt

1. Open een kamer-bestand in Cursor (bijv. `src/kamer1-basics.ts`)
2. Je ziet rode squiggles — dat zijn TypeScript errors
3. Lees de `// TODO:` comments voor hints
4. Fix de types zodat de errors verdwijnen
5. Check met `npm run check` of alles klopt
6. Als alle 8 kamers kloppen: `npm run escape`

## Tips

- Hover over rode squiggles voor foutmeldingen
- Gebruik Cursor's autocomplete (Tab)
- Begin bij kamer 1, werk in volgorde
- `npm run check` toont alle errors in één keer

## Tijdsinschatting

- **Easy:** Kamers 1-2 (~20 min)
- **Medium:** Kamers 3-6 (~40 min)
- **Hard:** Kamers 7-8 (~30 min)

---

**Veel succes!**
# ai-dev-typescript-escape-room
