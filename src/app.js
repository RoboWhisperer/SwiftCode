const app = document.querySelector("#app");

app.innerHTML = `
<div class="shell">
  <header class="titlebar">
    <div><strong>Swift Code</strong> <small>⚡ blazing fast • 🔒 no telemetry</small></div>
    <small>VS Code-style workspace + extension manifest compatibility</small>
  </header>
  <aside class="sidebar">
    <div class="section stack">
      <h3>Workspace</h3>
      <button id="openFile">Open File</button>
      <button id="openFolder">Open Folder</button>
      <button id="saveFile">Save (Ctrl/Cmd+S)</button>
      <div id="workspace" class="list muted">No workspace loaded.</div>
    </div>
    <div class="section stack">
      <h3>Extensions</h3>
      <input id="extensionFile" type="file" accept=".json,.vsix" />
      <div id="extensions" class="list muted">No extensions loaded.</div>
    </div>
  </aside>
  <main class="main">
    <div class="tabs"><strong id="activeDoc">untitled.txt</strong></div>
    <div class="editor-wrap">
      <pre id="gutter">1</pre>
      <textarea id="editor" spellcheck="false"></textarea>
    </div>
  </main>
</div>`;

const editor = document.querySelector("#editor");
const gutter = document.querySelector("#gutter");
const activeDoc = document.querySelector("#activeDoc");
const workspace = document.querySelector("#workspace");
const extensionsEl = document.querySelector("#extensions");
const openFileBtn = document.querySelector("#openFile");
const openFolderBtn = document.querySelector("#openFolder");
const saveFileBtn = document.querySelector("#saveFile");
const extensionInput = document.querySelector("#extensionFile");

editor.value = `// Welcome to Swift Code\n// Fast and private by default.\n\nfunction hello(name) {\n  return \`Hello, \${name}\`;\n}`;
updateGutter();

editor.addEventListener("input", updateGutter);
editor.addEventListener("scroll", () => {
  gutter.scrollTop = editor.scrollTop;
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveCurrentDocument();
  }
});
saveFileBtn.addEventListener("click", saveCurrentDocument);

openFileBtn.addEventListener("click", async () => {
  const picker = document.createElement("input");
  picker.type = "file";
  picker.accept = "text/*,.js,.ts,.json,.md,.css,.html";
  picker.onchange = async () => {
    const file = picker.files && picker.files[0];
    if (!file) return;
    editor.value = await file.text();
    activeDoc.textContent = file.name;
    updateGutter();
  };
  picker.click();
});

openFolderBtn.addEventListener("click", async () => {
  if (!window.showDirectoryPicker) {
    workspace.textContent = "Directory picker not supported in this browser.";
    return;
  }

  const dir = await window.showDirectoryPicker();
  workspace.innerHTML = "";
  let count = 0;
  for await (const [name, handle] of dir.entries()) {
    if (handle.kind !== "file") continue;
    count += 1;
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.onclick = async () => {
      const file = await handle.getFile();
      editor.value = await file.text();
      activeDoc.textContent = file.name;
      updateGutter();
    };
    workspace.append(btn);
  }
  if (count === 0) workspace.textContent = "No files in folder root.";
});

extensionInput.addEventListener("change", async () => {
  const file = extensionInput.files && extensionInput.files[0];
  if (!file) return;

  try {
    const manifest = file.name.endsWith(".vsix")
      ? await parseVsixManifest(await file.arrayBuffer())
      : JSON.parse(await file.text());

    registerExtensionCard(manifest);
    activeDoc.textContent = `${extensionId(manifest)}.package.json`;
    editor.value = JSON.stringify(manifest, null, 2);
    updateGutter();
  } catch (error) {
    alert(`Could not load extension: ${String(error)}`);
  } finally {
    extensionInput.value = "";
  }
});

function updateGutter() {
  const count = editor.value.split("\n").length;
  gutter.textContent = Array.from({ length: count }, (_, i) => String(i + 1)).join("\n");
}

function saveCurrentDocument() {
  const blob = new Blob([editor.value], { type: "text/plain;charset=utf-8" });
  const name = activeDoc.textContent || "untitled.txt";
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
}

function extensionId(manifest) {
  return `${manifest.publisher || "local"}.${manifest.name || "extension"}`;
}

function registerExtensionCard(manifest) {
  if (extensionsEl.classList.contains("muted")) {
    extensionsEl.classList.remove("muted");
    extensionsEl.textContent = "";
  }

  const commands = manifest.contributes && manifest.contributes.commands ? manifest.contributes.commands.length : 0;
  const activations = manifest.activationEvents ? manifest.activationEvents.length : 0;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div><strong>${manifest.displayName || manifest.name || "Unknown extension"}</strong></div>
    <div class="muted">${extensionId(manifest)} • ${manifest.version || "0.0.0"}</div>
    <div class="muted">commands: ${commands} • activation events: ${activations}</div>
  `;
  extensionsEl.append(card);
}

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
