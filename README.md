# TypeScript Kata Playground Seed for Fun and Profit

**Last updated in April 2024. Recommended for VSCode.**

This project offers a minimalist setup that lets you jump right into writing TypeScript functions.  
It's designed to balance simplicity with quality, incorporating linting and testing from the get-go.



**Purpose:**

This project serves as a foundational template. Clone it to kickstart your Node.js and TypeScript journey.  
Alternatively, you can follow the instructions in this README to set up a basic Node.js + TypeScript project from scratch.


**Jobs:**
- `npm run start` will run your project with hot reload on save.
- `npm run test`  will run test files of your project with hot reload on save
- `npm run build` will build your project in `/dist` folder
- `npm run serve` will run with nodejs your production build in `dist` folder

## Setting It Up Yourself

Choose a Linux-like terminal (e.g., Git Bash on Windows).

### Installing Node

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
npm i -D typescript ts-node @types/node glob # Install TypeScript dependencies
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
"sourceMap": true,
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
`npm run start` will run your project with hot reload on save.  
`npm run build` + `npm run serve` will compile and run your production build.


## Ensuring Code Quality

### Linting

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

### Testing

Test your codebase by running `npm run test`.
It will automatically run & watch tests files with the pattern `src/any-folder/any-filename.test.ts`

### VSCode Debugging

- Click on the "Run & Debug" icon on left icon navbar
- Click "Create the launch.json file" link in "Run & Debug" view
- Choose Node.js
- Ensure program targets your outDir:  `"program": "${workspaceFolder}\\dist\\main.js"`
- Add a `debugger` or a break point anywhere in your code
- Choose `Run Script: start` "Run & Debug" view
- Profit ?


That's it, folks!