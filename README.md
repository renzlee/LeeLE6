# LeeLE6 – Frontend Angular Project: Your Design

**Lee, Renz Michael G. · 2024100435** · Lab Exercise 6

The Angular blog from Lab Exercise 5 with my own design: **The Lee Dispatch**, a printed-newspaper look.

- Masthead with the volume, date and a blackletter nameplate; section links separated by rules
- The newest post as the top story with a drop cap, and an "In this edition" index of every headline
- The other posts in ruled columns; each story ends with the "— 30 —" end mark
- Sign in and Subscribe pages drawn as coupons with a dashed cut line
- Paper, black ink and one dark red; fonts Libre Caslon Text, PT Serif and UnifrakturMaguntia

Added pages and features: **Write a Story** (posts with the sign-in token), **Sign Out**, and an error message when a login fails.

| Folder | What it is |
|---|---|
| `frontend` | Angular project with the design (`styles.css`, masthead in `app.component`, the page components) |
| `backend` | The Blog API solution (`LeeLE2.sln`), with CORS for `http://localhost:4200` |

## Run it

1. **Backend:** open `backend/LeeLE2.sln` in Visual Studio 2022, set **BlogAPI** as the startup project and press F5 (`http://localhost:5161`).
2. **Frontend:** in `frontend`, run `npm install` once, then `ng serve --open` (`http://localhost:4200`).
