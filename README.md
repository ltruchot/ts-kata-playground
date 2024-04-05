# TypeScript kata playground seed for fun and profit


**Last updated in April 2024. Tested with:**

- Node 20.12
- TypeScript 5.4
- ESLint 8.57

TypeScript Kata Playground offers a minimalist setup that lets you jump right into writing TypeScript functions.  
It's designed to balance simplicity with quality, incorporating linting and testing from the get-go.



**Purpose:**

This project serves as a foundational template. Clone it to kickstart your Node.js and TypeScript journey.  
Alternatively, you can follow the instructions in this README to set up a basic Node.js + TypeScript project from scratch.

## Setting It Up Yourself

Choose a Linux-like terminal (e.g., Git Bash on Windows).

### Installing Node 20.12.1

First, install NVM (Node Version Manager) on your operating system. Then, execute the following commands:
```sh
nvm install 20.12.1 # Install the latest Node.js LTS version
nvm use 20.12.1     # Activate it
node -v             # Verify the installation
```

## Initiating a New Project

```sh
mkdir my-new-project  # Create a new directory
cd my-new-project     # Navigate into the directory
npm init --yes        # Automatically generate a package.json file
npm i -D typescript ts-node @types/node tsx # Install TypeScript dependencies
npx tsc --init        # Initialize TypeScript with default settings
mkdir src             # Create a directory for source files
touch ./src/main.ts   # Create the main TypeScript file
git init              # Initialize Git for version control
curl -o .gitignore https://www.toptal.com/developers/gitignore/api/node # Generate a .gitignore file for Node projects
```

## Development Server and Build Configuration

Modify tsconfig.json under compilerOptions as follows:

```json
"rootDir": "./src",
"outDir": "./dist",
 ```

hen, after compilerOptions, add:

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}

```
This ensures that only the files in the src directory are compiled into the dist folder.

In the `package.json` file, under the scripts section, add:
```json
  "scripts": {
    "start": "node --watch -r ts-node/register src/main.ts",
    "build": "tsc",
    "serve": "node dist/main.js",
    "test": "glob -c \"node --test --watch --require ts-node/register\" \"./src/**/*.ts\""
  },
```

Now,  
`npm run dev`  will run your project with hot reload on save.  
`npm run build` + `npm run serve` will compile and run your production build.


## Ensuring Code Quality

To integrate a linter, run:
```sh
npm init @eslint/config
```

Follow the prompts to configure ESLint according to your project's needs. For example:

`Ok to proceed?` y  
`How would you like to use ESLint?` To check syntax, find problems, and enforce code style  
`What type of modules does you project use?` JavaScript modules (import/export)  
`Witch framework does your project use?` None of these  
`Does your project use TypeScript` Yes  
`Where does your code run?` Node  
`How would you like to define a style for your project?` Use a popular style guide -> `Standard`  
`What format do you want your config file to be in?` JavaScript  
`Would you like to install them now` Yes  
`Which package manager do you want to use?` npm  

Feel free to customize your ESLint rules in eslintrc.js, for example enforce semicolons:
```json
    "rules": {
        "semi": ["error", "always"],
        "@typescript-eslint/semi": ["error", "always"],
    }
```

And finally, test your codebase by running `npm run test`.

That's it, folks!