# WorldTradingData UI Application

## 1. Prequisites

* [Visual Studio Code - Insiders](https://code.visualstudio.com/insiders/)
    * Plugins:
        * Angular Essentials
        * Angular Snippets (Version 8)
        * Ngrx Snippets
        * Document This
        * Jest
        * Jest Runner
        * Prettier - Code formatter
        * Path Intellisense
        * Sass
        * Typescript Hero
        * stylelint (0.51.0)
        * GitLens
    * Settings

    Copy the following to VS Code-Insiders settings
```
    {
    "typescript.check.tscVersion": false,
    "workbench.editor.enablePreview": false,
    "editor.formatOnSave": false,
    "css.validate": false,
    "path-intellisense.extensionOnImport": true,
    "window.zoomLevel": 1,
    "editor.renderWhitespace": "boundary",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "search.excludeFolders": [
      ".git",
      "node_modules",
      "bower_components",
      "tmp",
      "dist"
    ],
    "editor.rulers": [
      140
    ],
    "spell.StopAsking": true,
    "editor.minimap.enabled": true,
    "workbench.iconTheme": "vscode-icons",
    "htmltagwrap.tag": "p",
    "workbench.panel.location": "bottom",
    "files.autoSave": "onFocusChange",
    "git.autofetch": true,
    "gitlens.advanced.messages": {
      "suppressCommitHasNoPreviousCommitWarning": false,
      "suppressCommitNotFoundWarning": false,
      "suppressFileNotUnderSourceControlWarning": false,
      "suppressGitVersionWarning": false,
      "suppressLineUncommittedWarning": false,
      "suppressNoRepositoryWarning": false,
      "suppressResultsExplorerNotice": true,
      "suppressShowKeyBindingsNotice": true,
      "suppressUpdateNotice": false,
      "suppressWelcomeNotice": false
    },
    "gitlens.resultsExplorer.files.layout": "list",
    "tslint.enable": true,
    "tslint.autoFixOnSave ": true,
    "gitlens.keymap": "chorded",
    "editor.formatOnPaste": false,
    "typescriptHero.imports.grouping": [
      "/rxjs/",
      "/@angular/",
      "/@ngrx/",
      "/@echacs/",
      "/@idm/",
      "Plains",
      "Modules",
      "Workspace"
    ],
    "npm.enableScriptExplorer": true,
    "gitlens.historyExplorer.enabled": true,
    "typescript.updateImportsOnFileMove.enabled": "always",    
    "workbench.editor.showTabs": true,
    "breadcrumbs.enabled": true,
    "workbench.colorTheme": "Abyss",
    "editor.fontSize": 13,
    "jest.showCoverageOnLoad": true,
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

```

* [Git](https://git-scm.com/downloads)
* [Nvm](https://github.com/nvm-sh/nvm) (Linux/Mac OSX) or [Nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) (Windows)

## 2. Tools setup

### 2.1 Install NodeJS 10.16.0  

> Requires Administrator access in Windows
```
nvm install 10.16.0
```

### 2.2 Install Angular-CLI 8.0
```
npm install -g @angular/cli
```

# 3. Setup Angular Project

## 3.1 Creating Project
```
ng new worldtradingdata-ui --style=scss --routing=true
cd worldtradingdata-ui
```

## 3.2. Preparing tools in the project

### 3.2.1 Jest (Unit testing)

#### Commands
```
ng add @briebug/jest-schematic
npm install -D jest @types/jest
npm i -D @angular-builders/jest

```

#### Files

 * jest.config.js

> 1st line:

```
  const { defaults: tsjPreset } = require('ts-jest/presets');
```
 
> Append this to module.exports*

```
globals: {
    'ts-jest': {
      ...tsjPreset,
      tsConfig: 'tsconfig.spec.json'
    }
  }
```

* package.json
```
    { 
      ...
      "test": "ng test",
      ...,
      "test:watch": "ng test --watch"
      ...
    }
```

* angular.json
> Modify "test" to this:

```
      "test": {
          "builder": "@angular-builders/jest:run",
          "options": {

          }
       }
```

* tsconfig.json
> Add this under compilerOptions
```
    "types": ["jest"],

```

* tsconfig.spec.json

> Add jest in types:

 "types": [
      "jasmine",
      "jest",
      "node"
 ]

 #### Run Tests
 * Single run
 ```
 npm test
 ```

* Run in watch mode
```
npm run test:watch
```

#### Commit changes
```
git add .
git commit -m 'Adding Jest for Unit Testing'

```
