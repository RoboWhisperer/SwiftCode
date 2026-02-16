# Swift Code

Swift Code is a polished, browser-based editor inspired by VS Code with a privacy-first architecture.

## What's new

- Redesigned interface with activity bar, multi-panel sidebar, tabs, and status bar.
- Command Palette (`Ctrl/Cmd + Shift + P`) with quick actions.
- Multi-document editing with dirty indicators and local persistence.
- Find/replace panel, quick save, and file statistics.
- Built-in VS Code-style Extension Store (search, install, uninstall).
- Local extension importing from `.json` or `.vsix` (manifest parser included).
- Theme toggle (dark/light), word wrap controls, and adjustable font size.

## Features

- ⚡ Fast, dependency-light runtime.
- 🔒 No telemetry by default.
- 🧩 Extension manifest compatibility primitives.
- 💾 Workspace/session state saved in browser local storage.

## Run

```bash
npm run dev
```

Then open `http://localhost:4173`.

## Check

```bash
npm run test
```
