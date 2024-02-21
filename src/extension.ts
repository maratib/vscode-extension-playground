import * as vscode from "vscode";
import * as utils from "./utils";

const console = utils;

export function activate(context: vscode.ExtensionContext) {
  console.log("Activated");
  console.log(utils.getConfig("hover"));
  console.log(utils.getConfig("showCommon"));

  let disposable = vscode.commands.registerCommand("my-ext.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from my-ext!");
    console.log("abc Hello World from my-ext!");
  });

  context.subscriptions.push(disposable);
}

utils.watchForExtensionChanges();

export function deactivate() {}
