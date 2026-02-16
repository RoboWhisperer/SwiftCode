# Swift Code

Swift Code is a blazing-fast, no-telemetry text editor inspired by VS Code.

## Highlights

- ⚡ **Fast**: zero dependency runtime, instant load in the browser.
- 🔒 **No telemetry**: no analytics SDKs, no remote tracking calls.
- 🧩 **VS Code extension compatibility primitives**:
  - Load `.vsix` files locally.
  - Parse `extension/package.json` manifests (including deflate-compressed entries).
  - Show contributions (commands and activation events).

## Features

- Editor with line numbers and keyboard-first save (`Ctrl/Cmd + S`).
- Open individual files.
- Open folder root and click files in a workspace sidebar.
- Extension panel for local `.json` manifests and `.vsix` packages.

## Run

```bash
npm run dev
```

Then open `http://localhost:4173`.

## Check

```bash
npm run test
```

## Notes

This is a lightweight editor shell focused on speed and privacy. Full VS Code extension runtime compatibility (complete `vscode` API, extension host process isolation, debugger bridge) is planned next.
