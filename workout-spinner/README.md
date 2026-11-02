# Workout Spinner

Sunday Spinner for Element Athletics: pick a coach profile, spin for a workout.

## Files

```
index.html   Page markup
styles.css   Styling
app.js       App logic and Supabase sync
```

## Data

Coach and workout data syncs to Supabase via its REST API. The URL and key are at the top of `app.js`. The key is Supabase's public `anon` key, which is designed to ship in client code; access is controlled by Row Level Security on the Supabase tables. If Supabase is unreachable the app falls back to the browser's local storage.
