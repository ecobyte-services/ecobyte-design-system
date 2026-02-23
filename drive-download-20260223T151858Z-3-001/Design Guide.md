# EcoByte AS — Design Guide

## Merkevareidentitet
**Selskap:** EcoByte AS
**Posisjon:** Premium bærekraftig infrastruktur for produksjonsbransjen
**Målgruppe:** Kreative ledere og produksjonssjefer
**Tone:** Profesjonell, tillitvekkende, tilgjengelig, varm

---

## Logo

### Konsept
Tre med organisk løvverk over jorda (kundens virksomhet som blomstrer) og kretskort-røtter under jorda (EcoBytes usynlige infrastruktur).

**Metafor:** *Vi leverer teknikken under jorda, så kundens kjernevirksomhet spirer over.*

### Varianter
| Variant | Fil | Bruk |
|---------|-----|------|
| Final (4K) | `brand/logo/ecobyte-as-logo-final.png` | Primær — høyoppløselig |
| Symbol | `brand/logo/ecobyte-as-logo-symbol.png` | Kun tresymbolet |
| Horisontal | `brand/logo/ecobyte-as-logo-horizontal.png` | Webside-header, e-postsignatur |
| Ikon | `brand/logo/ecobyte-as-icon.png` | Favicon, profilbilde |

### Google Drive
Alle logo-filer: https://drive.google.com/drive/folders/1Rmz-SmxxK9cQBKPQGtFXBSCc2cc0nYvV

### Frirom
Minimum frirom: 1x høyden av "E" i EcoByte på alle sider.

### Regler
- ✅ Bruk på hvit eller lys bakgrunn
- ✅ Behold proporsjoner
- ❌ Ikke strekk, forvreng, roter eller endre farger
- ❌ Ikke på travle bakgrunner

### SVG
⚠️ PNG-er bør vektoriseres for print. Verktøy: Adobe Illustrator Image Trace eller Vectorizer.ai

---

## Typografi

### Primærfont: Nunito Sans
- **Google Font:** https://fonts.google.com/specimen/Nunito+Sans
- **Karakteristikk:** Geometrisk sans-serif, profesjonell og ren

| Bruk | Vekt | CSS |
|------|------|-----|
| Logo / H1 | SemiBold | `font-weight: 600` |
| Overskrifter H2-H3 | SemiBold | `font-weight: 600` |
| Brødtekst | Regular | `font-weight: 400` |
| Sekundærtekst | Light | `font-weight: 300` |

### CSS Import
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

:root {
  --font-primary: 'Nunito Sans', system-ui, -apple-system, sans-serif;
}
```

---

## Fargepalett

### Løvverk (Canopy)
| Farge | Hex | Bruk |
|-------|-----|------|
| 🌲 Dark Forest Green | `#1B5E3A` | Primærgrønn, stamme, overskrifter |
| 🟢 Medium Green | `#4A7C4F` | Mellomtone, sekundærflater |
| 🌿 Sage Olive | `#7A9A5E` | Lys aksent, bakgrunner |
| 🫒 Dark Olive | `#8B8C3E` | Overgangsaksent |
| 🟡 Golden Amber | `#C9A032` | Varm aksent, highlights |

### Røtter (Circuit)
| Farge | Hex | Bruk |
|-------|-----|------|
| 🟧 Light Copper | `#D4945A` | Lys kretsfarge |
| 🟧 Medium Copper | `#C07840` | Primær kretsfarge |
| 🟫 Burnt Sienna | `#A05A30` | Mørk kretsfarge |
| 🟫 Dark Brown | `#7A5030` | Mørkeste aksent |

### Nøytrale
| Farge | Hex | Bruk |
|-------|-----|------|
| ⬛ Charcoal | `#333333` | Brødtekst |
| 🔘 Warm Grey | `#888888` | Sekundærtekst |
| ⬜ Off-White | `#F8F8F6` | Varm bakgrunn |
| ⬜ White | `#FFFFFF` | Ren bakgrunn |

### Bakgrunnslinje
| Farge | Hex | Bruk |
|-------|-----|------|
| 🌿 Muted Olive | `#7A8E5A` | Jordlinje/separator |

### CSS Variabler
```css
:root {
  /* Canopy */
  --color-forest: #1B5E3A;
  --color-green: #4A7C4F;
  --color-sage: #7A9A5E;
  --color-olive: #8B8C3E;
  --color-gold: #C9A032;

  /* Roots */
  --color-copper-light: #D4945A;
  --color-copper: #C07840;
  --color-sienna: #A05A30;
  --color-brown: #7A5030;

  /* Neutral */
  --color-charcoal: #333333;
  --color-warm-grey: #888888;
  --color-off-white: #F8F8F6;
}
```

### Farger å unngå
- Neonfarger, sterke blåtoner
- Rent sort (#000000) — bruk charcoal (#333333)
- Kalde gråtoner — paletten er varm

---

## Bildespråk
- ✅ Rene, profesjonelle bilder. Natur + teknologi i harmoni.
- ✅ Mennesker i produksjonsmiljøer som fokuserer på innholdet
- ✅ Varme, jordnære toner som matcher paletten
- ❌ Stockfotos av servere med blå LED-lys
- ❌ Kode på skjermen, "hacker"-estetikk
- ❌ Overspilt grønn/eco-branding

---

## Tone of Voice
- Selvsikker, men ikke arrogant
- Teknisk kompetent, men forståelig
- "Vi forstår din verden" — ikke "vi er tech-eksperter"

### Eksempler
✅ "Infrastruktur som bare fungerer"
✅ "Så du kan fokusere på det du er best på"
❌ "Cutting-edge hybrid cloud orchestration"
❌ "Synergize your digital transformation"

---

## Filstruktur
```
brand/
├── logo/
│   ├── ecobyte-as-logo-final.png       (4K, primær)
│   ├── ecobyte-as-logo-symbol.png      (2K, kun symbol)
│   ├── ecobyte-as-logo-horizontal.png  (4K, horisontal)
│   ├── ecobyte-as-icon.png             (2K, ikon)
│   └── *.svg                           (vektorisert — TODO)
├── fonts/
│   └── Nunito Sans (Google Font, hotlinkes)
└── guidelines/
    └── Design Guide.md (denne filen)
```

---

*Sist oppdatert: 2026-02-07*
