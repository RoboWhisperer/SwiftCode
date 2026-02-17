# Swift Code

Swift Code is a VSCode-inspired web text editor shell that includes:

- A full workbench layout (title bar, activity bar, sidebars, editor, panel, status bar)
- Explorer, Search, Source Control, Run/Debug, and Extensions views
- Tabs, breadcrumbs, minimap, terminal panel, and command palette (`Ctrl/Cmd+Shift+P`)
- Settings toggles for theme, minimap, panel visibility, and word-wrap
- A searchable **feature inventory** loaded directly from `vscode-complete-features.md`

## Run

```bash
python3 -m http.server 4173
```

Then open: `http://localhost:4173`

## Note

The included VSCode inventory document has thousands of feature bullets. Swift Code ingests and exposes all listed entries in the command palette and inventory browser so the full feature set is represented in-app.
