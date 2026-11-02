# The Golf Journal

A single-page site tracking my golf journey: milestones, swing notes by year, lessons learned, and before/after driver clips.

Hosted as a static site on Cloudflare Pages.

## Structure

```
index.html        Page markup
css/styles.css    All styling
js/data.js        Content: timeline, swing entries, lessons, hero/closing copy
js/app.js         Rendering and interactivity
images/           Photos and video poster frames
videos/           Driver swing clips shown in the hero
```

## Updating content

Most edits only touch `js/data.js`: add a swing entry to `ENTRIES`, a milestone to `TIMELINE`, or a lesson to `LESSONS`. Open `index.html` in a browser to preview.
