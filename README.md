# Next.js + Supabase Starter

## Get Started

1. Clone the repository
2. Run `yarn` to install dependencies
3. Create `.env.local` file in the root and add the following from `app.supabase.io` dashboard app settings.
```
NEXT_PUBLIC_SUPABASE_URL=<YOUR_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<YOUR_ANON_KEY>
```
4. Run `yarn dev` and see the project running on `localhost:3000`

## Code Structure
* `utils/supabaseClient.js` initializes a supabase client from the supabase url and anon key. It exports the client to be used in further pages
* `/components` contains React Components to render
* `/pages/index.js` is the starting point of the app.

Feel free to use Next.js Features, add dependencies and refactor based on the use-case.



