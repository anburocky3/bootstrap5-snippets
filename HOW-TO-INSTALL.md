#### How to install?

1. Add or update template files in `src/templates`.
2. For icon CDN snippets, create templates under `src/templates/icons/<provider>/`.
3. Run `bun run generate:snippets` to generate snippet files (`snippets/snippets.code-snippets`, `snippets/css.code-snippets`, and `snippets/icons.code-snippets`).
4. Run `vsce package` from the project root.
5. Verify that a `.vsix` file is created in the root folder. Example: `bootstrap5-vscode-0.5.0.vsix`.
6. In VS Code, run `Extensions: Install from VSIX...` and pick the generated `.vsix` file.
7. Reload VS Code when prompted.
8. Validate snippets:
    1. Open an HTML file and test triggers like `bs5-$`, `icons-fa6-cdn`, and `icons-bootstrap-icons-cdn`.
    2. Open a CSS/SCSS/SASS file and test `css-comment-block`.
    3. Confirm snippet suggestions appear through IntelliSense (`Ctrl+Space`).
9. If everything is OK, publish with `vsce publish`.
