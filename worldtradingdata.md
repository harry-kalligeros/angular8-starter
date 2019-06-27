# WorldTradingData UI Application

## 1. Prequisites

* [Visual Studio Code - Insiders](https://code.visualstudio.com/insiders/)
    * Plugins:
        * Angular Essentials
        * Angular Snippets (Version 8)
		* Debugger for Chrome
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
* Chrome or Chrome Canary

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
ng new market-watcher --style=scss --routing=true --prefix=mw
cd market-watcher
```

## 3.2. Tools and 3rd-party libraries

### 3.2.1 Jest (Unit testing)

#### Commands
```
ng add @briebug/jest-schematic
npm install -D jest @types/jest
```

#### Files

 * jest.config.js
> Paste the following code:
```
// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config

module.exports = {
	preset: 'jest-preset-angular',
	roots: ['src'],
	setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
	moduleNameMapper: {
		'@app/(.*)': '<rootDir>/src/app/$1',
		'@assets/(.*)': '<rootDir>/src/assets/$1',
		'@core/(.*)': '<rootDir>/src/app/core/$1',
		'@env': '<rootDir>/src/environments/environment',
		'@src/(.*)': '<rootDir>/src/src/$1',
		'@state/(.*)': '<rootDir>/src/app/state/$1'
	},
	transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/tsconfig.spec.json',
			stringifyContentPathRegex: '\\.html$',
			astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer.js']
		}
	}
};

```

* package.json
```
    { 
      ...
      "test": "jest",
      ...,
      "test:watch": "jest --watch"
      ...
    }
```

* angular.json
> Remove section "test" under "projects"/"market-watcher"

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

### 3.2.2 Code formatting

#### Modify .editorconfig

```
indent_style = tab
indent_size = 4
```

#### Add .prettierrc

```
{
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 4,
	"printWidth": 120,
	"semi": true,
	"bracketSpacing": true,
	"overrides": [
		{
			"files": "*.json",
			"options": {
				"useTabs": false,
				"tabWidth": 2
			}
		}
	]
}
```

#### Modify tslint.json
> Add this, under rules:
```
"indent": [true, "tabs", 4],
```

### 3.2.3 UI Framework

There are several 3rd party frameworks, which help for rapid UI development:
* ngx-bootstrap
* prime-ng
* material-design
* bulma (only css)

We choose [ngx-bootsrap](https://www.npmjs.com/package/ngx-bootstrap):

```
npm install bootstrap-scss --save
npm install ngx-bootstrap --save
```

Add the following to styles.scss:

```
@import "~bootstrap-scss/bootstrap";
```

### 3.2.4 Fonts & Icon Library

* Use the *Roboto* font library
* Use [font-awesome 5](https://github.com/FortAwesome/angular-fontawesome) for icon library

```
npm i -S @fortawesome/fontawesome-free-webfonts
npm i -S roboto-fontface
```
* Add this to your styles.scss
```
$fa-font-path: "~@fortawesome/fontawesome-free-webfonts/webfonts";
@import '~@fortawesome/fontawesome-free-webfonts/scss/fontawesome.scss';
@import '~@fortawesome/fontawesome-free-webfonts/scss/fa-solid.scss';
@import '~@fortawesome/fontawesome-free-webfonts/scss/fa-regular.scss';
```

* Add this under the styles array, in angular.json, before "src/styles.scss"

```
"node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"
```

* Add this to your styles.scss

```
body {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-variant-ligatures: none;
}

html {
	font-size: 16px;
}

```

# 4 Start coding

## 4.1 With npm
```
npm start
```

## 4.2 With VS-Code-Insiders
* Go to Debug
* Add a launch configuration
* Add the following snippet
```
		{
			"name": "Launch Angular",
			"type": "chrome",
			"request": "launch",
			"preLaunchTask": "npm: start",
			"url": "http://localhost:4200/",
			"webRoot": "${workspaceFolder}"
		}
```
* Run "Lauch Angular"


