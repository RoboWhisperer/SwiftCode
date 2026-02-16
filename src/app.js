const STORAGE_KEYS = {
  docs: "swiftcode.docs",
  activeDocId: "swiftcode.activeDocId",
  extensions: "swiftcode.extensions",
  theme: "swiftcode.theme",
  wrap: "swiftcode.wrap",
  fontSize: "swiftcode.fontSize",
};

const builtinExtensionStore = [
  {
    id: "ms-python.python",
    displayName: "Python",
    publisher: "ms-python",
    name: "python",
    version: "2026.2.0",
    installs: "117M",
    rating: 4.6,
    category: "Programming Languages",
    description: "IntelliSense, linting, debugging, and notebooks for Python.",
    commands: 32,
    activationEvents: 18,
  },
  {
    id: "esbenp.prettier-vscode",
    displayName: "Prettier - Code formatter",
    publisher: "esbenp",
    name: "prettier-vscode",
    version: "11.0.1",
    installs: "69M",
    rating: 4.8,
    category: "Formatters",
    description: "Opinionated formatter that supports most modern languages.",
    commands: 7,
    activationEvents: 5,
  },
  {
    id: "eamodio.gitlens",
    displayName: "GitLens",
    publisher: "eamodio",
    name: "gitlens",
    version: "16.4.0",
    installs: "35M",
    rating: 4.7,
    category: "Source Control",
    description: "Supercharge Git inside your editor with blame, history, and insights.",
    commands: 54,
    activationEvents: 24,
  },
  {
    id: "ms-vscode.vscode-typescript-next",
    displayName: "JavaScript and TypeScript Nightly",
    publisher: "ms-vscode",
    name: "vscode-typescript-next",
    version: "6.2.20260215",
    installs: "12M",
    rating: 4.5,
    category: "Programming Languages",
    description: "Use latest TypeScript and JavaScript language service builds.",
    commands: 5,
    activationEvents: 3,
  },
  {
    id: "ritwickdey.liveserver",
    displayName: "Live Server",
    publisher: "ritwickdey",
    name: "liveserver",
    version: "6.3.0",
    installs: "44M",
    rating: 4.4,
    category: "Web Development",
    description: "Launch a local dev server with automatic live reload.",
    commands: 11,
    activationEvents: 6,
  },
  {
    id: "ms-azuretools.vscode-docker",
    displayName: "Docker",
    publisher: "ms-azuretools",
    name: "vscode-docker",
    version: "2.1.0",
    installs: "41M",
    rating: 4.6,
    category: "DevOps",
    description: "Build, manage, and debug containerized applications.",
    commands: 41,
    activationEvents: 17,
  },
];

const starterDoc = {
  id: crypto.randomUUID(),
  name: "welcome.js",
  language: "javascript",
  value: `// Welcome to Swift Code\n// Try Command Palette with Ctrl/Cmd+Shift+P\n\nfunction hello(name) {\n  return \`Hello, \${name}!\`;\n}`,
  dirty: false,
};

const state = {
  docs: [starterDoc],
  activeDocId: starterDoc.id,
  workspaceFiles: [],
  installedExtensions: [],
  theme: "dark",
  wrap: true,
  fontSize: 13,
  cursor: { line: 1, col: 1 },
  panel: "explorer",
};

const app = document.querySelector("#app");
app.innerHTML = `
<div class="shell" data-theme="dark">
  <header class="titlebar">
    <div class="title-left">
      <strong>Swift Code</strong>
      <small>⚡ polished, private, productivity-first</small>
    </div>
    <div class="toolbar">
      <button id="quickOpenBtn">Quick Open</button>
      <button id="commandPaletteBtn">Command Palette</button>
      <button id="themeToggleBtn">Toggle Theme</button>
    </div>
  </header>

  <nav class="activitybar">
    <button data-panel="explorer" class="activity active">📁</button>
    <button data-panel="extensions" class="activity">🧩</button>
    <button data-panel="search" class="activity">🔎</button>
    <button data-panel="settings" class="activity">⚙️</button>
  </nav>

  <aside class="sidebar">
    <section class="panel" id="panel-explorer">
      <h3>Workspace</h3>
      <div class="cluster">
        <button id="openFile">Open File</button>
        <button id="openFolder">Open Folder</button>
        <button id="newFile">New File</button>
      </div>
      <div id="workspace" class="list muted">No workspace loaded.</div>
    </section>

    <section class="panel hidden" id="panel-extensions">
      <h3>Extension Store</h3>
      <input id="extensionSearch" placeholder="Search extensions" />
      <div id="storeList" class="list"></div>
      <h3>Import Local Extension</h3>
      <input id="extensionFile" type="file" accept=".json,.vsix" />
      <div id="extensions" class="list muted">No extensions installed.</div>
    </section>

    <section class="panel hidden" id="panel-search">
      <h3>Find in File</h3>
      <input id="findInput" placeholder="Find text" />
      <input id="replaceInput" placeholder="Replace with" />
      <div class="cluster">
        <button id="findNextBtn">Find Next</button>
        <button id="replaceBtn">Replace</button>
        <button id="replaceAllBtn">Replace All</button>
      </div>
    </section>

    <section class="panel hidden" id="panel-settings">
      <h3>Editor Settings</h3>
      <label class="setting">Font size <input type="range" min="12" max="20" id="fontSize" /></label>
      <label class="setting"><input type="checkbox" id="wordWrap" /> Word wrap</label>
      <button id="resetWorkspace">Reset local workspace</button>
    </section>
  </aside>

  <main class="main">
    <div class="tabs" id="tabs"></div>
    <div class="editor-wrap">
      <pre id="gutter">1</pre>
      <textarea id="editor" spellcheck="false"></textarea>
    </div>
  </main>

  <footer class="statusbar">
    <span id="statusDoc">untitled</span>
    <span id="statusCursor">Ln 1, Col 1</span>
    <span id="statusStats">0 chars • 0 words</span>
    <span id="statusExt">0 extensions</span>
  </footer>
</div>

<div class="modal hidden" id="commandPalette">
  <div class="modal-card">
    <input id="paletteInput" placeholder="Type a command (e.g. theme, save, new file)" />
    <div id="paletteResults" class="list"></div>
  </div>
</div>`;

const els = {
  shell: document.querySelector(".shell"),
  editor: document.querySelector("#editor"),
  gutter: document.querySelector("#gutter"),
  tabs: document.querySelector("#tabs"),
  workspace: document.querySelector("#workspace"),
  extensions: document.querySelector("#extensions"),
  storeList: document.querySelector("#storeList"),
  extensionSearch: document.querySelector("#extensionSearch"),
  extensionFile: document.querySelector("#extensionFile"),
  findInput: document.querySelector("#findInput"),
  replaceInput: document.querySelector("#replaceInput"),
  statusDoc: document.querySelector("#statusDoc"),
  statusCursor: document.querySelector("#statusCursor"),
  statusStats: document.querySelector("#statusStats"),
  statusExt: document.querySelector("#statusExt"),
  palette: document.querySelector("#commandPalette"),
  paletteInput: document.querySelector("#paletteInput"),
  paletteResults: document.querySelector("#paletteResults"),
  wordWrap: document.querySelector("#wordWrap"),
  fontSize: document.querySelector("#fontSize"),
};

boot();

function boot() {
  loadState();
  renderWorkspace();
  renderTabs();
  renderStore();
  renderInstalledExtensions();
  syncEditorFromActiveDoc();
  applyEditorSettings();
  switchPanel("explorer");
}

function loadState() {
  try {
    const docs = JSON.parse(localStorage.getItem(STORAGE_KEYS.docs) || "null");
    const installedExtensions = JSON.parse(localStorage.getItem(STORAGE_KEYS.extensions) || "[]");
    if (Array.isArray(docs) && docs.length) {
      state.docs = docs;
      state.activeDocId = localStorage.getItem(STORAGE_KEYS.activeDocId) || docs[0].id;
    }
    state.installedExtensions = installedExtensions;
    state.theme = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
    state.wrap = localStorage.getItem(STORAGE_KEYS.wrap) !== "false";
    state.fontSize = Number(localStorage.getItem(STORAGE_KEYS.fontSize) || 13);
  } catch {
    // fall back to defaults
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.docs, JSON.stringify(state.docs));
  localStorage.setItem(STORAGE_KEYS.activeDocId, state.activeDocId);
  localStorage.setItem(STORAGE_KEYS.extensions, JSON.stringify(state.installedExtensions));
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  localStorage.setItem(STORAGE_KEYS.wrap, String(state.wrap));
  localStorage.setItem(STORAGE_KEYS.fontSize, String(state.fontSize));
}

function getActiveDoc() {
  return state.docs.find((doc) => doc.id === state.activeDocId) || state.docs[0];
}

function renderTabs() {
  els.tabs.innerHTML = "";
  state.docs.forEach((doc) => {
    const tab = document.createElement("button");
    tab.className = `tab ${doc.id === state.activeDocId ? "active" : ""}`;
    tab.textContent = `${doc.name}${doc.dirty ? " •" : ""}`;
    tab.onclick = () => {
      state.activeDocId = doc.id;
      syncEditorFromActiveDoc();
      renderTabs();
      persistState();
    };

    const close = document.createElement("span");
    close.textContent = "×";
    close.className = "tab-close";
    close.onclick = (event) => {
      event.stopPropagation();
      closeDoc(doc.id);
    };
    tab.append(close);
    els.tabs.append(tab);
  });
}

function closeDoc(id) {
  if (state.docs.length === 1) return;
  state.docs = state.docs.filter((doc) => doc.id !== id);
  if (!state.docs.find((doc) => doc.id === state.activeDocId)) {
    state.activeDocId = state.docs[0].id;
  }
  syncEditorFromActiveDoc();
  renderTabs();
  persistState();
}

function syncEditorFromActiveDoc() {
  const doc = getActiveDoc();
  if (!doc) return;
  els.editor.value = doc.value;
  els.statusDoc.textContent = doc.name;
  updateGutter();
  updateCursorStatus();
  updateStats();
}

function createDoc(name = `untitled-${state.docs.length + 1}.txt`, value = "") {
  const doc = { id: crypto.randomUUID(), name, value, dirty: false, language: "plaintext" };
  state.docs.push(doc);
  state.activeDocId = doc.id;
  renderTabs();
  syncEditorFromActiveDoc();
  persistState();
}

function renderWorkspace() {
  if (!state.workspaceFiles.length) {
    els.workspace.classList.add("muted");
    els.workspace.textContent = "No workspace loaded.";
    return;
  }

  els.workspace.classList.remove("muted");
  els.workspace.innerHTML = "";
  state.workspaceFiles.forEach((fileHandle) => {
    const item = document.createElement("button");
    item.className = "list-item";
    item.textContent = fileHandle.name;
    item.onclick = async () => {
      const file = await fileHandle.getFile();
      createDoc(file.name, await file.text());
    };
    els.workspace.append(item);
  });
}

function renderStore() {
  const term = els.extensionSearch.value?.trim().toLowerCase() || "";
  const filtered = builtinExtensionStore.filter((ext) =>
    [ext.displayName, ext.description, ext.category, ext.id].join(" ").toLowerCase().includes(term)
  );

  els.storeList.innerHTML = "";
  filtered.forEach((ext) => {
    const installed = state.installedExtensions.some((item) => extensionId(item) === ext.id);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="row between"><strong>${ext.displayName}</strong><span>${"⭐".repeat(Math.round(ext.rating))}</span></div>
      <div class="muted">${ext.id} • ${ext.installs} installs</div>
      <div>${ext.description}</div>
      <div class="row between"><small>${ext.category}</small><button>${installed ? "Uninstall" : "Install"}</button></div>
    `;
    card.querySelector("button").onclick = () => {
      if (installed) {
        state.installedExtensions = state.installedExtensions.filter((item) => extensionId(item) !== ext.id);
      } else {
        state.installedExtensions.push({
          publisher: ext.publisher,
          name: ext.name,
          displayName: ext.displayName,
          version: ext.version,
          activationEvents: Array.from({ length: ext.activationEvents }, (_, i) => `onCommand:${i}`),
          contributes: { commands: Array.from({ length: ext.commands }, (_, i) => ({ command: `cmd.${i}` })) },
          description: ext.description,
        });
      }
      renderStore();
      renderInstalledExtensions();
      persistState();
    };
    els.storeList.append(card);
  });
}

function renderInstalledExtensions() {
  if (!state.installedExtensions.length) {
    els.extensions.classList.add("muted");
    els.extensions.textContent = "No extensions installed.";
  } else {
    els.extensions.classList.remove("muted");
    els.extensions.innerHTML = "";
    state.installedExtensions.forEach((manifest) => registerExtensionCard(manifest));
  }
  els.statusExt.textContent = `${state.installedExtensions.length} extensions`;
}

function registerExtensionCard(manifest) {
  const commands = manifest.contributes?.commands?.length || 0;
  const activations = manifest.activationEvents?.length || 0;
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="row between"><strong>${manifest.displayName || manifest.name || "Unknown extension"}</strong><small>${manifest.version || "0.0.0"}</small></div>
    <div class="muted">${extensionId(manifest)}</div>
    <div class="muted">commands: ${commands} • activation events: ${activations}</div>
  `;
  els.extensions.append(card);
}

function extensionId(manifest) {
  return `${manifest.publisher || "local"}.${manifest.name || "extension"}`;
}

function updateGutter() {
  const count = els.editor.value.split("\n").length;
  els.gutter.textContent = Array.from({ length: count }, (_, i) => String(i + 1)).join("\n");
}

function updateCursorStatus() {
  const caret = els.editor.selectionStart;
  const textBefore = els.editor.value.slice(0, caret);
  state.cursor.line = textBefore.split("\n").length;
  state.cursor.col = textBefore.length - textBefore.lastIndexOf("\n");
  els.statusCursor.textContent = `Ln ${state.cursor.line}, Col ${state.cursor.col}`;
}

function updateStats() {
  const text = els.editor.value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  els.statusStats.textContent = `${text.length} chars • ${words} words`;
}

function saveCurrentDocument() {
  const doc = getActiveDoc();
  doc.value = els.editor.value;
  doc.dirty = false;
  const blob = new Blob([doc.value], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = doc.name || "untitled.txt";
  link.click();
  URL.revokeObjectURL(link.href);
  renderTabs();
  persistState();
}

function applyTheme() {
  els.shell.dataset.theme = state.theme;
}

function applyEditorSettings() {
  els.editor.style.whiteSpace = state.wrap ? "pre-wrap" : "pre";
  els.wordWrap.checked = state.wrap;
  els.fontSize.value = String(state.fontSize);
  els.editor.style.fontSize = `${state.fontSize}px`;
  applyTheme();
}

function switchPanel(name) {
  state.panel = name;
  document.querySelectorAll(".activity").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.panel === name);
  });
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.add("hidden"));
  document.querySelector(`#panel-${name}`)?.classList.remove("hidden");
}

function openCommandPalette() {
  els.palette.classList.remove("hidden");
  els.paletteInput.value = "";
  renderPaletteResults();
  els.paletteInput.focus();
}

function closeCommandPalette() {
  els.palette.classList.add("hidden");
}

function renderPaletteResults() {
  const query = els.paletteInput.value.toLowerCase();
  const commands = [
    { label: "New File", run: () => createDoc() },
    { label: "Save File", run: saveCurrentDocument },
    { label: "Toggle Theme", run: () => { state.theme = state.theme === "dark" ? "light" : "dark"; applyTheme(); persistState(); } },
    { label: "Open Extensions", run: () => switchPanel("extensions") },
    { label: "Open Explorer", run: () => switchPanel("explorer") },
    { label: "Reset Workspace", run: () => { localStorage.clear(); location.reload(); } },
  ];
  els.paletteResults.innerHTML = "";
  commands
    .filter((cmd) => cmd.label.toLowerCase().includes(query))
    .forEach((cmd) => {
      const item = document.createElement("button");
      item.className = "list-item";
      item.textContent = cmd.label;
      item.onclick = () => {
        cmd.run();
        closeCommandPalette();
      };
      els.paletteResults.append(item);
    });
}

document.querySelector("#openFile").addEventListener("click", () => {
  const picker = document.createElement("input");
  picker.type = "file";
  picker.accept = "text/*,.js,.ts,.json,.md,.css,.html,.py,.rs";
  picker.onchange = async () => {
    const file = picker.files?.[0];
    if (!file) return;
    createDoc(file.name, await file.text());
  };
  picker.click();
});

document.querySelector("#openFolder").addEventListener("click", async () => {
  if (!window.showDirectoryPicker) {
    els.workspace.classList.add("muted");
    els.workspace.textContent = "Directory picker not supported in this browser.";
    return;
  }
  const dir = await window.showDirectoryPicker();
  state.workspaceFiles = [];
  for await (const [, handle] of dir.entries()) {
    if (handle.kind === "file") state.workspaceFiles.push(handle);
  }
  renderWorkspace();
});

document.querySelector("#newFile").addEventListener("click", () => createDoc());
document.querySelector("#quickOpenBtn").addEventListener("click", openCommandPalette);
document.querySelector("#commandPaletteBtn").addEventListener("click", openCommandPalette);
document.querySelector("#themeToggleBtn").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
  persistState();
});

document.querySelectorAll(".activity").forEach((button) => {
  button.addEventListener("click", () => switchPanel(button.dataset.panel));
});

document.querySelector("#findNextBtn").addEventListener("click", () => {
  const needle = els.findInput.value;
  if (!needle) return;
  const from = els.editor.selectionEnd;
  const next = els.editor.value.indexOf(needle, from);
  if (next >= 0) {
    els.editor.focus();
    els.editor.setSelectionRange(next, next + needle.length);
    updateCursorStatus();
  }
});

document.querySelector("#replaceBtn").addEventListener("click", () => {
  const needle = els.findInput.value;
  if (!needle) return;
  const selected = els.editor.value.slice(els.editor.selectionStart, els.editor.selectionEnd);
  if (selected === needle) {
    const before = els.editor.value.slice(0, els.editor.selectionStart);
    const after = els.editor.value.slice(els.editor.selectionEnd);
    els.editor.value = `${before}${els.replaceInput.value}${after}`;
    updateGutter();
    updateStats();
  }
});

document.querySelector("#replaceAllBtn").addEventListener("click", () => {
  const needle = els.findInput.value;
  if (!needle) return;
  els.editor.value = els.editor.value.split(needle).join(els.replaceInput.value);
  updateGutter();
  updateStats();
});

document.querySelector("#resetWorkspace").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

els.extensionSearch.addEventListener("input", renderStore);
els.paletteInput.addEventListener("input", renderPaletteResults);
els.palette.addEventListener("click", (event) => {
  if (event.target === els.palette) closeCommandPalette();
});

els.wordWrap.addEventListener("change", () => {
  state.wrap = els.wordWrap.checked;
  applyEditorSettings();
  persistState();
});
els.fontSize.addEventListener("input", () => {
  state.fontSize = Number(els.fontSize.value);
  applyEditorSettings();
  persistState();
});

els.editor.addEventListener("input", () => {
  const doc = getActiveDoc();
  if (!doc) return;
  doc.value = els.editor.value;
  doc.dirty = true;
  updateGutter();
  updateStats();
  renderTabs();
  persistState();
});
els.editor.addEventListener("click", updateCursorStatus);
els.editor.addEventListener("keyup", updateCursorStatus);
els.editor.addEventListener("scroll", () => {
  els.gutter.scrollTop = els.editor.scrollTop;
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveCurrentDocument();
  }
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "p") {
    event.preventDefault();
    openCommandPalette();
  }
  if (event.key === "Escape") {
    closeCommandPalette();
  }
});

els.extensionFile.addEventListener("change", async () => {
  const file = els.extensionFile.files?.[0];
  if (!file) return;
  try {
    const manifest = file.name.endsWith(".vsix")
      ? await parseVsixManifest(await file.arrayBuffer())
      : JSON.parse(await file.text());
    state.installedExtensions.push(manifest);
    renderInstalledExtensions();
    renderStore();
    persistState();
  } catch (error) {
    alert(`Could not load extension: ${String(error)}`);
  } finally {
    els.extensionFile.value = "";
  }
});

async function parseVsixManifest(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const targetPath = "extension/package.json";

  let i = 0;
  while (i < bytes.length - 30) {
    if (view.getUint32(i, true) !== 0x04034b50) {
      i += 1;
      continue;
    }

    const compression = view.getUint16(i + 8, true);
    const compressedSize = view.getUint32(i + 18, true);
    const fileNameLength = view.getUint16(i + 26, true);
    const extraLength = view.getUint16(i + 28, true);

    const nameStart = i + 30;
    const nameEnd = nameStart + fileNameLength;
    const fileName = new TextDecoder().decode(bytes.slice(nameStart, nameEnd));
    const dataStart = nameEnd + extraLength;
    const dataEnd = dataStart + compressedSize;

    if (fileName === targetPath) {
      const payload = bytes.slice(dataStart, dataEnd);
      let content;

      if (compression === 0) {
        content = payload;
      } else if (compression === 8) {
        const ds = new DecompressionStream("deflate-raw");
        const stream = new Blob([payload]).stream().pipeThrough(ds);
        content = new Uint8Array(await new Response(stream).arrayBuffer());
      } else {
        throw new Error(`Unsupported VSIX compression method: ${compression}`);
      }

      return JSON.parse(new TextDecoder().decode(content));
    }

    i = dataEnd;
  }

  throw new Error("extension/package.json not found in VSIX file");
}
