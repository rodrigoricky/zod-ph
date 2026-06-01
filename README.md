# zod-ph

Philippine‑ready Zod validators, formatters, and utilities for TypeScript apps.

> **v0.1.0** – Mobile, landline, ZIP, peso, coordinates, and name validation & formatting.

## Installation

```bash
npm install zod zod-ph
```

## Quickstart

```ts
import { z } from 'zod';
import { phMobileNumber, phZipCode, phPesoAmount, formatPeso } from 'zod-ph';

const schema = z.object({
  mobile: phMobileNumber(),
  zip: phZipCode(),
  amount: phPesoAmount()
});

const result = schema.parse({
  mobile: '09171234567',
  zip: '6000',
  amount: 1250
});

console.log(formatPeso(result.amount)); // ₱1,250.00
```

## Features (v0.1.0)

- 🇵🇭 Philippine mobile number validation & normalisation (local, +63, 09xx)
- ☎️ Landline number validation (area codes, 7‑8 digits)
- 📮 ZIP code format validator
- 💵 Peso amount validator and full formatter (with centavos)
- 📍 Coordinate validator (within PH bounds)
- 👤 Person name normaliser
- 🧰 Fully typed with Zod integration

## Validators

| Function | Description |
|----------|-------------|
| `phMobileNumber(options?)` | Validates PH mobile numbers (09xx, +639xx) |
| `phLandline(options?)` | Validates PH landline numbers |
| `phZipCode()` | Validates 4‑digit ZIP code |
| `phPesoAmount()` | Validates peso amount (number) |
| `phCoordinates(options?)` | Validates lat/lng pair, optionally inside PH |
| `phPersonName()` | Validates trimmed, no‑double‑space name |

## Formatters

| Function | Description |
|----------|-------------|
| `formatPeso(value, options?)` | Formats number as ₱1,250.00 |
| `normalizePHMobileNumber(num, format)` | Normalise to e164 / local / digits |
| `formatPHAddress(components)` | Combine address components into one string |
| `normalizeName(name)` | Collapse spaces, trim, capitalise |

## Important Limitations

- ID validators (TIN, SSS, etc.) check format only – they do not verify existence.
- Coordinates use approximate Philippine bounding box; exact boundary checks are not included yet.
- All data is versioned and sourced from official references when available.

## License

MIT – see [LICENSE](./LICENSE).
