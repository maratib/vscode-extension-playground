import * as vs from "vscode";
import * as utils from "./utils";

const console = utils;

export function activate(context: vs.ExtensionContext) {
  console.log("Activated");
  console.log(utils.getConfig("hover"));
  console.log(utils.getConfig("showCommon"));

  let disposable = vs.commands.registerCommand("my-ext.helloWorld", () => {
    vs.window.showInformationMessage("Hello World from my-ext!");
    console.log("Hello World from my-ext!");
  });

  context.subscriptions.push(disposable);
}

utils.watchForExtensionChanges();

export function deactivate() {}
