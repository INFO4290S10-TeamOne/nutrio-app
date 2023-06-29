# Nutrio

# Table of Contents

- [Nutrio](#nutrio)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Node Version Manager (nvm)](#node-version-manager-nvm)
  - [Installing](#installing)
  - [Environment Variables](#environment-variables)
- [Start Expo](#start-expo)
- [Folder Description](#folder-description)
- [Testing](#testing)

# Getting Started

### Prerequisites

- node v18.16.0
- npm v9.5.1
- git

### Node Version Manager (nvm)

It is recommended to use nvm for node and npm installations because some of our apps are compatible with specific versions of node/npm. nvm is an useful tool to hop around node versions.

Follow the installation instructions here: https://github.com/nvm-sh/nvm

- Install the specific version of node:

  - `nvm install 18.16.0` or `nvm install --lts`

- Switch to that version (You can also set 14.16.1 as the default version)
  - `nvm use 18.16.0` or `nvm use --lts`

**if you are using a M1, you might run into an issue for wasm allocation failed, you can follow this article for solution:** https://shanabunny.com/?p=260

### Installing

Clone the repositorty

```sh
git clone https://github.com/INFO4290S10-TeamOne/nutrio-app.git
```

Install the dependencies:

```sh
cd nutrio-app
npm install
```

Note: If other dependencies are added, you will need to run npm install again

### Environment Variables

You will need to create a `.env` file with the API keys in the `nutrition-tracking-app` directory

Message Gunn for the API keys

# Start Expo

To run the app run:

```sh
npx expo start
a // to open Android simulator
i // to open iOS simulator (Macs)
```

More details here: https://docs.expo.dev/tutorial/introduction/

# Folder Description

- `app`: Contains all app screens
- `assets`: Any assets such as images, vectors, fonts, etc.
- `components`: Folder to store any common and/or reuseable components, each component should have its own file
- `helpers`: Contains common helper functions, can be grouped into files by type/domain
- `screens`: Contains the main screens of the app (Home, Recipes, Scale, etc.)

# Testing

We are using Jest to run unit tests, run the following command to run the tests

```bash
npm run test
```

More details about writing tests soonTM - refer to the existing tests for now
