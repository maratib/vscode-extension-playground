import * as vscode from "vscode";
import * as utils from "./utils";

const REFRESH_COMMAND = "my-webview-ext.reload";
const console = utils;

export function activate(context: vscode.ExtensionContext) {
  console.log("Hello");

  let disposable = vscode.commands.registerCommand(
    "my-webview-ext.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from my-webview-ext 1!"
      );
      vscode.window.createOutputChannel;
      console.log("abc Hello World from my-webview-ext 1!");
      console.log("abc Hello World from my-webview-ext 1!");
    }
  );

  let refresh = vscode.commands.registerCommand(REFRESH_COMMAND, () => {
    // console.log("Reloading");
    vscode.commands.executeCommand("workbench.action.reloadWindow");
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(refresh);
}

utils.watchForExtensionChanges(REFRESH_COMMAND);

export function deactivate() {}
