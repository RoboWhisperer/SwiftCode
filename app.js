const state = {
  activeView: 'explorer',
  activeFile: 'src/app.js',
  files: {
    'src/app.js': `function boot() {\n  console.log('Welcome to Swift Code');\n}\n\nboot();`,
    'src/editor.js': `export class Editor {\n  constructor(node) {\n    this.node = node;\n  }\n}`,
    'README.md': `# Swift Code\n\nA VSCode-inspired editor featuring all items listed in vscode-complete-features.md as searchable capabilities.`,
    '.vscode/settings.json': `{\n  "editor.minimap.enabled": true,\n  "editor.wordWrap": "off"\n}`
  },
  openTabs: ['src/app.js', 'README.md'],
  panel: 'terminal',
  terminalLog: ['$ swift-code --help', 'Swift Code CLI (simulated): open, diff, settings, extensions'],
  featureItems: [],
  minimap: true,
  showPanel: true,
  wordWrap: false,
};

const el = (id) => document.getElementById(id);

function parseFeatureInventory(markdown) {
  const lines = markdown.split('\n');
  const items = [];
  let category = 'General';
  for (const line of lines) {
    if (/^##\s+/.test(line)) category = line.replace(/^##\s+/, '').trim();
    if (/^-\s+/.test(line)) {
      items.push({ category, text: line.replace(/^-\s+/, '').trim() });
    }
  }
  return items;
}

function renderSidebar() {
  const sidebar = el('primarySidebar');
  const view = state.activeView;
  const sharedHeader = `<h3>${view[0].toUpperCase() + view.slice(1)}</h3>`;
  if (view === 'explorer') {
    sidebar.innerHTML = `${sharedHeader}
      <div class="section"><h4>Open Editors</h4>${state.openTabs.map(t => `<button class="file ${t===state.activeFile?'active':''}" data-open="${t}">${t}</button>`).join('')}</div>
      <div class="section"><h4>Files</h4>${Object.keys(state.files).map(f => `<button class="file ${f===state.activeFile?'active':''}" data-open="${f}">${f}</button>`).join('')}</div>
      <div class="section"><h4>Outline</h4><div>function boot()</div><div>class Editor</div></div>
      <div class="section"><h4>Timeline</h4><div>Last save: just now</div></div>`;
  } else if (view === 'search') {
    sidebar.innerHTML = `${sharedHeader}
      <input id="searchInput" placeholder="Search in files" />
      <div id="searchResults"></div>`;
  } else if (view === 'scm') {
    sidebar.innerHTML = `${sharedHeader}
      <textarea id="commitMsg" placeholder="Commit message"></textarea>
      <div class="section"><h4>Changes</h4><div>M src/app.js</div><div>A src/editor.js</div></div>
      <button id="stageAll">Stage All</button>
      <button id="commit">Commit</button>`;
  } else if (view === 'run') {
    sidebar.innerHTML = `${sharedHeader}
      <div class="section"><h4>Launch</h4><select><option>Launch Swift Code (Web)</option></select></div>
      <div class="section"><h4>Breakpoints</h4><div>None</div></div>
      <button id="startDebug">Start Debugging</button>`;
  } else {
    sidebar.innerHTML = `${sharedHeader}
      <input placeholder="Search extensions" />
      <div class="section"><h4>Installed</h4><div>Theme Pack</div><div>Git Lens Lite</div></div>
      <div class="section"><h4>Recommended</h4><div>Prettier</div><div>ESLint</div></div>`;
  }

  sidebar.querySelectorAll('[data-open]').forEach((btn) => btn.onclick = () => openFile(btn.dataset.open));
  const searchInput = el('searchInput');
  if (searchInput) searchInput.oninput = runSearch;
}

function openFile(path) {
  state.activeFile = path;
  if (!state.openTabs.includes(path)) state.openTabs.push(path);
  renderTabs();
  renderEditors();
  renderSidebar();
}

function renderTabs() {
  el('tabs').innerHTML = state.openTabs.map(t => `<button class="tab ${t===state.activeFile?'active':''}" data-tab="${t}">${t}</button>`).join('');
  document.querySelectorAll('[data-tab]').forEach((btn) => btn.onclick = () => openFile(btn.dataset.tab));
}

function renderEditors() {
  const content = state.files[state.activeFile] || '';
  const wrap = state.wordWrap ? 'soft' : 'off';
  el('editorLayout').innerHTML = `
    <div class="editor-pane">
      <textarea class="editor" id="mainEditor" wrap="${wrap}">${content}</textarea>
    </div>
    ${state.minimap ? `<div class="minimap" id="minimap"></div>` : ''}`;
  const editor = el('mainEditor');
  editor.oninput = () => {
    state.files[state.activeFile] = editor.value;
    renderMinimap();
    updateStatus();
  };
  renderMinimap();
  el('breadcrumbs').textContent = `swift-code / ${state.activeFile}`;
}

function renderMinimap() {
  const mini = el('minimap');
  if (!mini) return;
  const value = state.files[state.activeFile] || '';
  mini.textContent = value.split('\n').map(l => l.slice(0, 36)).join('\n');
}

function renderPanel() {
  const panel = el('panel');
  panel.style.display = state.showPanel ? 'grid' : 'none';
  panel.innerHTML = `
    <div class="panel-tabs">
      ${['terminal','problems','output','debug'].map(p => `<button data-panel="${p}" class="${state.panel===p?'active':''}">${p}</button>`).join('')}
    </div>
    <div class="panel-content" id="panelContent"></div>`;
  panel.querySelectorAll('[data-panel]').forEach((b) => b.onclick = () => { state.panel = b.dataset.panel; renderPanel(); });
  const content = el('panelContent');
  if (state.panel === 'terminal') {
    content.innerHTML = `<div>${state.terminalLog.map(l=>`<div>${l}</div>`).join('')}</div><input id="terminalInput" placeholder="Run command" />`;
    el('terminalInput').onkeydown = (e) => {
      if (e.key === 'Enter') {
        state.terminalLog.push(`$ ${e.target.value}`);
        state.terminalLog.push(`Executed: ${e.target.value}`);
        renderPanel();
      }
    };
  } else if (state.panel === 'problems') {
    content.textContent = 'No problems detected.';
  } else if (state.panel === 'output') {
    content.textContent = 'Swift Code output channel ready.';
  } else {
    content.textContent = 'Debugger attached (simulated).';
  }
}

function updateStatus() {
  const text = state.files[state.activeFile] || '';
  const lines = text.split('\n');
  el('statusBar').innerHTML = `
    <div>🌿 main • ✓ Synced • ⚠ 0 Errors</div>
    <div>Ln ${lines.length}, Col ${lines.at(-1).length + 1} • UTF-8 • LF • JavaScript</div>`;
}

function runSearch() {
  const q = el('searchInput').value.toLowerCase();
  const results = [];
  for (const [name, text] of Object.entries(state.files)) {
    text.split('\n').forEach((line, i) => {
      if (line.toLowerCase().includes(q)) results.push(`${name}:${i+1}: ${line.trim()}`);
    });
  }
  el('searchResults').innerHTML = results.map(r => `<div>${r}</div>`).join('') || '<div>No results</div>';
}

function renderFeatureInventory(filter = '') {
  const items = state.featureItems.filter(f => f.text.toLowerCase().includes(filter.toLowerCase()) || f.category.toLowerCase().includes(filter.toLowerCase()));
  el('featureStats').textContent = `${items.length} / ${state.featureItems.length} documented features loaded`;
  el('featureList').innerHTML = items.map(f => `<div class="feature-item"><strong>${f.category}:</strong> ${f.text}</div>`).join('');
}

function openCommandPalette() {
  el('commandPaletteOverlay').classList.remove('hidden');
  const input = el('commandInput');
  input.value = '';
  renderCommandResults('');
  input.focus();
}

function renderCommandResults(query) {
  const coreCommands = [
    'View: Toggle Sidebar', 'View: Toggle Panel', 'View: Toggle Minimap',
    'File: Open File', 'File: Save', 'Search: Find in Files',
    'SCM: Commit', 'Run: Start Debugging', 'Extensions: Show Marketplace'
  ];
  const featureCommands = state.featureItems.map(f => `${f.category}: ${f.text}`);
  const all = [...coreCommands, ...featureCommands];
  const filtered = all.filter(c => c.toLowerCase().includes(query.toLowerCase())).slice(0, 120);
  el('commandResults').innerHTML = filtered.map(c => `<li data-command="${c.replaceAll('"', '&quot;')}">${c}</li>`).join('');
  el('commandResults').querySelectorAll('li').forEach((item) => {
    item.onclick = () => {
      const command = item.dataset.command || '';
      if (command.toLowerCase().includes('toggle minimap')) {
        state.minimap = !state.minimap;
        el('toggleMinimap').checked = state.minimap;
        renderEditors();
      }
      if (command.toLowerCase().includes('toggle panel')) {
        state.showPanel = !state.showPanel;
        el('togglePanel').checked = state.showPanel;
        renderPanel();
      }
      if (command.toLowerCase().includes('toggle sidebar')) {
        const sidebar = el('primarySidebar');
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
      }
      el('commandPaletteOverlay').classList.add('hidden');
    };
  });
}

function bindGlobalActions() {
  document.querySelectorAll('.activity').forEach((btn) => btn.onclick = () => {
    document.querySelectorAll('.activity').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeView = btn.dataset.view;
    renderSidebar();
  });

  el('toggleCommandPalette').onclick = openCommandPalette;
  el('commandPaletteOverlay').onclick = (e) => { if (e.target.id === 'commandPaletteOverlay') e.target.classList.add('hidden'); };
  el('commandInput').oninput = (e) => renderCommandResults(e.target.value);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') { e.preventDefault(); openCommandPalette(); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') { e.preventDefault(); el('primarySidebar').style.display = el('primarySidebar').style.display === 'none' ? 'block' : 'none'; }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'j') { e.preventDefault(); state.showPanel = !state.showPanel; renderPanel(); }
    if (e.key === 'Escape') {
      el('commandPaletteOverlay').classList.add('hidden');
      el('settingsOverlay').classList.add('hidden');
    }
  });

  el('openSettings').onclick = () => el('settingsOverlay').classList.remove('hidden');
  el('closeSettings').onclick = () => el('settingsOverlay').classList.add('hidden');
  el('themeSelect').onchange = (e) => el('app').className = e.target.value;
  el('toggleMinimap').onchange = (e) => { state.minimap = e.target.checked; renderEditors(); };
  el('togglePanel').onchange = (e) => { state.showPanel = e.target.checked; renderPanel(); };
  el('toggleWordWrap').onchange = (e) => { state.wordWrap = e.target.checked; renderEditors(); };
  el('featureSearch').oninput = (e) => renderFeatureInventory(e.target.value);
}

async function init() {
  const md = await fetch('vscode-complete-features.md').then(r => r.text());
  state.featureItems = parseFeatureInventory(md);
  renderSidebar();
  renderTabs();
  renderEditors();
  renderPanel();
  renderFeatureInventory();
  updateStatus();
  bindGlobalActions();
}

init();
