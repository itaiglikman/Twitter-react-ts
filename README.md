# Twitter

A modern Twitter-like web app built with React, TypeScript, Mantine UI, and Supabase.  
Features tweet creation, real-time updates, authentication, profile management, and GitHub Pages deployment.

---

## Features

- **Responsive UI**: Built with Mantine and custom CSS modules.
- **Tweet Creation**: Compose tweets (max 140 chars), with live character count and validation.
- **Tweets List**: Sorted by date (latest first), auto-refreshes every 5 seconds.
- **Profile Page**: View and update your username.
- **Authentication**: Login, logout, and registration via Supabase Auth.
- **Context API**: Tweets, user, and active page state managed via React Context.
- **Error Handling**: User-friendly notifications via Notyf.
- **GitHub Pages Deployment**: Ready for static hosting.

---

## Folder Structure

```
src/
  Components/        # Reusable UI components
  Pages/             # Page-level components (Home, Profile, 404)
  Lib/               # Context, types, services, and utilities
  assets/            # Static assets
  DB/                # Supabase configuration
public/              # Public files (favicon, etc.)
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/<your-username>/Twitter-react-ts.git
cd Twitter-react-ts
```

### 2. Install dependencies

```sh
npm install
```

### 3. Supabase Setup

This project uses Supabase for backend and authentication.  
**Your Supabase credentials are stored in `.env.local`, which is excluded from GitHub for security.**

#### To use your own Supabase backend:

1. [Sign up for Supabase](https://supabase.com/) and create a new project.
2. Create a table named `Tweets` with columns:
   - `id` (integer, primary key, auto-increment)
   - `content` (text)
   - `userName` (text)
   - `date` (text, ISO string)
3. Enable [Row Level Security (RLS)](https://supabase.com/docs/guides/auth/row-level-security) and add policies for authenticated users.
4. In your Supabase project, go to **Project Settings > API** and copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
5. Create a file `.env.local` in the project root:

```
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

6. The app will automatically use these credentials for all API calls.

---

## Running Locally

```sh
npm run dev
```

Open [http://localhost:5173/Twitter-react-ts/](http://localhost:5173/Twitter-react-ts/) in your browser.

---

## Deployment

This project is ready for GitHub Pages.  
To deploy:

1. Build the project:

```sh
npm run build
```

2. Deploy to GitHub Pages:

```sh
npm run deploy
```

The app will be available at `https://<your-username>.github.io/Twitter-react-ts/`.

---

## Authentication

- Only authenticated users can view and post tweets.
- Register and login via the app’s UI.
- Authentication is handled by Supabase Auth.
- If not logged in, you will be redirected to the login page.

---

## Customization

- Change the UI by editing components in `src/Components/`.
- Update context logic in `src/Lib/Context/`.
- Modify Supabase integration in `DB/supabaseConfig.ts`.

---

## Troubleshooting

- If tweets do not load, check your Supabase credentials and table setup.
- For deployment issues, ensure `vite.config.ts` has the correct `base` path.
- For authentication errors, verify RLS policies and Supabase Auth configuration.

---

## License

MIT

---

## Credits

- [Mantine UI](https://mantine.dev/)
- [Supabase](https://supabase.com/)
- [Notyf](https://github.com/caroso1222/notyf)