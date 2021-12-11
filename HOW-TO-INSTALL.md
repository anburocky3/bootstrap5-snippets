#### How to install?

1. Feed your snippet as seperate file in `VSCodeSnippetGenerator` (Not shipped with this)
2. After making snippet in proper format, run `main.py` file using `python ./main.py` on that project folder.
   1. It will generate the vscode friendly snippets with readme file.
3. Copy the required files from `output` folder to `vscode/snippets/` folder and test the extension by `F5`.
4. If everything is ok, you can build it with `vsce package` (which will generate `.vsix`) and `vsce publish`
