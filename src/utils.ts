import * as vscode from "vscode";
import * as fs from "fs";
import path from "path";

export const EXT_NAME = "my-ext";

const channel = vscode.window.createOutputChannel(EXT_NAME);

export function watchForExtensionChanges() {
  const uiFolderPath = path.resolve(__dirname, "../out"); // Replace with the actual path to your
  fs.watch(
    uiFolderPath,
    { recursive: true },
    (eventType: string, filename: any) => {
      // console.log(`File ${filename} changed`, eventType);
      if (eventType === "change") {
        vscode.commands.executeCommand("workbench.action.reloadWindow");
      }
    }
  );
}

export const getRootPath = () => {
  return vscode.workspace.workspaceFolders &&
    vscode.workspace.workspaceFolders.length > 0
    ? vscode.workspace.workspaceFolders[0].uri.fsPath
    : undefined;
};

export const getConfig = (key: string) => {
  return vscode.workspace.getConfiguration(EXT_NAME)?.get(key);
};

export const log = (msg: any) => {
  channel.show(true);

  channel.appendLine(JSON.stringify(msg));
};
