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
- [Native Base](#native-base)
- [Folder Description](#folder-description)
- [Testing](#testing)
- [Git Flow](#git-flow)
  - [General Rules](#general-rules)
  - [Code Review](#code-review)
  - [TL;DR](#tldr)

# Getting Started

## Prerequisites

- node v18.16.0
- npm v9.5.1
- git
- [Expo](https://docs.expo.dev/get-started/installation/#requirements)

## Node Version Manager (nvm)

It is recommended to use nvm for node and npm installations because some of our apps are compatible with specific versions of node/npm. nvm is an useful tool to hop around node versions.

Follow the installation instructions here: https://github.com/nvm-sh/nvm

- Install the specific version of node:

  - `nvm install 18.16.0` or `nvm install --lts`

- Switch to that version (You can also set 18.16.0 as the default version)
  - `nvm use 18.16.0` or `nvm use --lts`

**if you are using a M1, you might run into an issue for wasm allocation failed, you can follow this article for solution:** https://shanabunny.com/?p=260

## Installing

Make sure you have all the prerequisites installed:
Instructions for setting up Expo: https://docs.expo.dev/get-started/installation/#requirements

You can run the app on your phone using the Expo app

To run the app on your local machine, you will need the Android Simulator and iOS simulator (Mac only)

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

## Environment Variables

### **The API key should never be in plain text**

You will need to create a `.env` file with the API keys in the root directory

Message Gunn for the API keys

# Start Expo

To run the app run:

```sh
npx expo start
a // to open Android simulator
i // to open iOS simulator (Macs)
```

More details here: https://docs.expo.dev/tutorial/introduction/

# Native Base

We are using Native Base for our UI framework. It provides a bunch of components that makes design easier
Check out the docs here: https://docs.nativebase.io/getting-started

# Folder Description

- `app`: Contains all app screens
- `assets`: Any assets such as images, vectors, fonts, etc.
- `components`: Folder to store any common and/or reuseable components, each component should have its own file
- `helpers`: Contains common helper functions, can be grouped into files by type/domain
- `screens`: Contains the main screens of the app (Home, Recipes, Scale, etc.)
- `store`: Contains our zustand stores
- `types`: Contains reusable types for Typescript

## File Structure
```
  ├── assets
  ├── components
  |   ├── __tests__
  |   |   └─ CusineShortcut.test.tsx
  |   └── CusineShortcut.tsx
  ├── helpers
  |   ├── __tests__
  |   |   └── getTabBarIcons.test.ts
  |   └── getTabBarIcons.ts
  ├── screens
  |   ├── __tests__
  |   |  └─ GoalsScreen.test.ts
  |   ├── GoalsScreen.tsx
  |   ├── HomeScreen.tsx
  |   └── etc.
  ├── store
  │   └── RecipeSearch.ts
  └── types
      └── routes.ts
```
# Testing

We are using Jest to run unit tests, run the following command to run the tests

```bash
npm run test
```

More details about writing tests soonTM - refer to the existing tests for now

# Git Flow

To maintain code quality and to prevent bugs from the `master` branch we should follow some guidelines when commiting our code.

## General Rules

- \***NEVER\*** push to `master`
- Update local `master` frequently
  - Run the command `git pull origin master` to pull the latest version
- When working on new code, create a new branch with the command `git checkout -b <your-name>/<name-of-branch>`.
  - Your branch name should be describe the purpose of your branch such as what feature it implements. E.g `gunn/recipe-page`
  - Make sure that when you create a new branch, it is based off of the latest `master`

---
To create a new branch based off the latest master run the following commands
```bash
git checkout master # switches the branch to master
git pull origin master # fetches the lastest version of master
git checkout -b <name-of-branch> # creates a new branch and switches to it
```

## Code review
### When done working on your code, create a pull request:

To push (upload) your code into GitHub run the command 
```bash
git push origin <name-of-branch>
```

**Try to keep your changes small so that they are easier to review**

Then you can come to this repo and there will be a shortcut for you to create a pull request.

---

### To prevent bad code from making it into `master`, there are some safeguards implemented on the `master` branch.
1. Code cannot be committed directly to `master`
2. Pull requests require at least **1** approval

### **Please check for pull requests frequently and review them. GitHub allows you to leave comments in pull requests so you can ask any questions or concerns there.**

## TL;DR
- Don't push to `master`
- Use pull requests
- Review pull requests
