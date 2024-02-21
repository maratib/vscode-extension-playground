import * as vscode from "vscode";
import * as fs from "fs";
import path from "path";

const channel = vscode.window.createOutputChannel("my-webview-ext");

export function watchForExtensionChanges(REFRESH_COMMAND: string) {
  const uiFolderPath = path.resolve(__dirname, "../out"); // Replace with the actual path to your
  fs.watch(
    uiFolderPath,
    { recursive: true },
    (eventType: string, filename: any) => {
      // console.log(`File ${filename} changed`, eventType);
      if (eventType === "change") {
        vscode.commands.executeCommand(REFRESH_COMMAND);
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

export const getConfig = () => {
  return vscode.workspace.getConfiguration("my-webview-ext");
};

export const log = (msg: any) => {
  channel.show(true);

  channel.appendLine(JSON.stringify(msg));
};
