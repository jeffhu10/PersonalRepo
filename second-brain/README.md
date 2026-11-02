# Second Brain

A personal "second brain" web app (Personal + Work in one page, finance tracking, spending ledger and a Quick Add phone page), served by a single Cloudflare Worker.

Unlike the other sites in this repo it is not a static folder: the whole app lives in one file, [worker.js](worker.js), which is copied into the Worker editor on Cloudflare. There is no build step and no deploy connection.

## Workflow

1. Edit `worker.js` locally.
2. Commit it here.
3. Copy the whole file into the Worker's code editor on Cloudflare and deploy.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | The app (HTML is embedded in `worker.js`) |
| `/api/state` | Personal data (KV key `state`) |
| `/api/work` | Work data (KV key `work`) |
| `/api/spend`, `/api/spend/op`, `/api/spend/lite` | Spending ledger, changes, and the Quick Add feed |
| `/api/quotes` | Live prices for Finance (read-only, cached 5 min) |
| `/api/qclose` | Month-end prices (cached 12 h) |
| `/add` | Quick Add page for the phone's Home Screen |

## Cloudflare setup

| Type | Name | Notes |
| --- | --- | --- |
| KV namespace binding | `BRAIN_KV` | Stores all data |
| Secret | `PASSPHRASE` | Required by every `/api` route |

## Layout of `worker.js`

The file is ordered top to bottom as:

1. Header comment: routes, bindings, security notes
2. Embedded assets: `APP_HTML`, `WORK_DEFAULT`, `QUICK_HTML`, `QUICK_MANIFEST`, `QUICK_ICONS`
3. Auth and headers: `gate`, `safeEq`, `PAGE_HEADERS`
4. Seed data: `PERSONAL_SEED`, `FIN_SEED`, `SPEND_SEED`
5. Quotes: `fromYahoo`, `fromFallback`, `handleQuotes`, `monthCloses`
6. Spending ledger: `spendApply`, `recurDates`, `handleSpend`
7. `export default { fetch }` router at the bottom

The embedded assets are single very long lines, so search for the constant name rather than scrolling. Everything else is ordinary code.

## Notes

- Never commit the passphrase or any exported data. `.env` and `*.txt` are git-ignored.
- Writes carry a `_rev` number; a stale write gets a 409 and the stored copy back, so an old tab can't overwrite newer work.
