# Websites

Personal websites I build and host on Cloudflare. Each site is a self-contained static folder: no build step, open `index.html` to preview.

## Sites

| Folder | Description |
| --- | --- |
| [golf-journal](golf-journal/) | The Golf Journal: my golf journey, swing notes and lessons. |
| [workout-spinner](workout-spinner/) | Sunday Spinner: random workout picker for Element Athletics coaches, backed by Supabase. |
| [second-brain](second-brain/) | Second Brain: personal + work dashboard, finance and spending ledger. A single Cloudflare Worker (`worker.js`), pasted into the dashboard rather than zipped. |

## Deploying

Static sites: select everything *inside* a site's folder and zip it, so `index.html` sits at the top of the zip, then upload it to Cloudflare. Zips are git-ignored, so they never end up in the repo.
