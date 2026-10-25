# Pokédex

A cross-platform Pokédex app built with Expo, React Native, and TypeScript. It
loads the first 20 Pokémon from [PokéAPI](https://pokeapi.co/) and presents their
names, primary types, and front and back sprites.

## Features

- Browse the first 20 Pokémon returned by PokéAPI.
- View each Pokémon's primary type and front/back sprites in the list.
- Tap a Pokémon to open its details screen.
- Load Pokémon data and sprites from PokéAPI over the internet.

## Requirements

- Node.js and npm
- Expo Go on a device, or an Android emulator, iOS simulator, or web browser
- An internet connection to retrieve Pokémon data and images

## Getting started

Install the dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

Use the options shown in the terminal or Expo Dev Tools to open the app in
Expo Go, an emulator/simulator, or a web browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server. |
| `npm run android` | Start the server and open the Android target. |
| `npm run ios` | Start the server and open the iOS target. |
| `npm run web` | Start the server for web. |
| `npm run lint` | Run Expo linting. |

## Project structure

- `src/app/index.tsx` — Pokémon list and PokéAPI list/detail requests.
- `src/app/details.tsx` — Pokémon details screen.
- `src/app/_layout.tsx` — Expo Router stack and screen presentation options.

## Data source

Pokémon information comes from the public PokéAPI REST API. The app requests
`https://pokeapi.co/api/v2/pokemon?limit=20`, then fetches each returned Pokémon
resource for its sprites and types. The API is not hosted by this project.
