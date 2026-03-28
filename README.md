# Travel Tracker

A small Express + EJS app that tracks countries you've visited using a PostgreSQL database.

## Features
- List total visited countries on the homepage.
- Add a visited country by name (looks up country code from `countries`).

## Prerequisites
- Node.js (v14+)
- PostgreSQL

## Install
1. Install dependencies:

```bash
npm install
```

2. Start PostgreSQL and make a database available (the example uses a database named `world`).

Note: `index.js` currently contains hard-coded DB credentials. For security update the file to read credentials from environment variables or a `.env` file.

## Database schema (example)
Create the two tables used by the app:

```sql
-- table of all countries and their codes
CREATE TABLE countries (
  id SERIAL PRIMARY KEY,
  country_name TEXT NOT NULL,
  country_code TEXT NOT NULL
);

-- table storing visited countries by code
CREATE TABLE visited_countries (
  id SERIAL PRIMARY KEY,
  country_code TEXT NOT NULL
);
```

Populate `countries` with country names and their ISO codes (e.g., `United States` -> `US`).

## Run
1. Ensure the database is running and the `countries` + `visited_countries` tables exist.
2. Start the app:

```bash
node index.js
```

3. Open http://localhost:3000 in your browser.

## Project structure

- [index.js](index.js) — main Express server
- [package.json](package.json) — project metadata and dependencies
- [views/index.ejs](views/index.ejs) — EJS view for the homepage
- public/styles/main.css — stylesheet used by the view

## Notes & Improvements
- Use your database name and Password in database object
- Add input validation and duplicate-checking when inserting into `visited_countries`.
- Add a `start` script to `package.json` (e.g., `"start": "node index.js"`).

## License
MIT