# Visual Studio Code - SharePoint Framework Script Checker

This extension for Visual Studio Code makes it easier for you as a SharePoint Framework developer to correctly reference the external JavaScript libraries in your solutions.

The extension is powered by the same APIs of the [SharePoint Framework Sript Check](https://rencore.com/sharepoint-framework/script-check/) page build by [Waldek Mastykarz](https://twitter.com/waldekm) from [Rencore](https://rencore.com).


## What can this extension do for me?

### Checking and including an external library to your solution

Example of including `jQuery` to your solution.

![Including jQuery to the solution](./assets/script-global.gif)

> **Info**: for jQuery the extension will ask you two questions: URL and module name. This is because jQuery is a module. For non-module scripts / libraries, you will have to provide more information.

### Adding a non-module library to the solution

Example of including `Cycle` which is a `jQuery` plugin.

![Including Cycle to the solution](./assets/script-plugin.gif)

## Usage

Start by opening the command prompt:
- Windows `⇧+ctrl+P`
- Mac: `⇧+⌘+P`

Type: `SPFx Script Check` and provide the values to a couple of questions.

## Feedback and snippet ideas

Feedback and ideas are always welcome. Please submit them via creating an issue in the project repository: [issue list](https://github.com/estruyf/vscode-spfx-script-checker/issues).
