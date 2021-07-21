// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('bootstrap5-vscode.openCyberDudeChannel', () => {
		
		vscode.env.openExternal(vscode.Uri.parse("https://www.youtube.com/results?search_query=cyberdude"));

		vscode.window.showInformationMessage('That\'s great! Opening CyberDude YT Channel.', 'Website').then(selection => {
			switch(selection){
				case "Website":
					vscode.env.openExternal(vscode.Uri.parse("https://www.cyberdudenetworks.com"));
					break;					
			}
		  });
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
