# COMPLETE VSCode FEATURES INVENTORY
## The Ultimate Reference Guide to Visual Studio Code

**Last Updated:** February 2026  
**Version Reference:** VSCode 1.108+

---

## TABLE OF CONTENTS

1. [User Interface Components](#user-interface-components)
2. [Core Editing Features](#core-editing-features)
3. [Language Support & IntelliSense](#language-support--intellisense)
4. [Source Control & Git Integration](#source-control--git-integration)
5. [Debugging Features](#debugging-features)
6. [Terminal Integration](#terminal-integration)
7. [Extensions & Marketplace](#extensions--marketplace)
8. [Settings & Configuration](#settings--configuration)
9. [Command Palette Commands](#command-palette-commands)
10. [Keyboard Shortcuts](#keyboard-shortcuts)
11. [Built-in Extensions](#built-in-extensions)
12. [Workspaces & Projects](#workspaces--projects)
13. [Search & Navigation](#search--navigation)
14. [Snippets & Emmet](#snippets--emmet)
15. [Tasks & Automation](#tasks--automation)
16. [Remote Development](#remote-development)
17. [AI Features (GitHub Copilot)](#ai-features-github-copilot)
18. [Web & Mobile Features](#web--mobile-features)
19. [Accessibility Features](#accessibility-features)
20. [Telemetry & Privacy](#telemetry--privacy)
21. [File & Folder Management](#file--folder-management)
22. [Themes & Appearance](#themes--appearance)
23. [Testing Features](#testing-features)
24. [Collaboration Features](#collaboration-features)
25. [Performance Features](#performance-features)

---

## 1. USER INTERFACE COMPONENTS

### 1.1 Window Structure
- **Title Bar**
  - Application name
  - Current file/folder name
  - Window controls (minimize, maximize, close)
  - Menu bar toggle
  - Account button
  - Settings/Manage button
  - Custom title bar support (Windows/Linux)
  - Window title format customization

### 1.2 Activity Bar
- **Location:** Far left vertical bar
- **Default Icons:**
  - Explorer (file tree)
  - Search
  - Source Control (Git)
  - Run and Debug
  - Extensions
- **Features:**
  - Draggable to reorder
  - Can be moved to top, bottom, or hidden
  - Shows notification badges
  - Context menu for customization
  - Extension-contributed views
  - Right-click to hide/show views
  - Position: Left (default), Top, Bottom, or Hidden

### 1.3 Primary Sidebar
- **Views:**
  - Explorer View
    - Open Editors section
    - Folder tree
    - Outline view
    - Timeline view
    - NPM Scripts view
  - Search View
    - Search input
    - Replace input
    - Include/exclude patterns
    - Search results tree
    - Replace all/individual
  - Source Control View
    - Changes list
    - Staged changes
    - Commit message box
    - Source control actions
    - Branch indicator
    - Repository selector (multi-root)
    - Worktrees view
  - Run and Debug View
    - Launch configurations
    - Variables view
    - Watch expressions
    - Call stack
    - Breakpoints list
    - Debug toolbar
  - Extensions View
    - Installed extensions
    - Recommended extensions
    - Popular extensions
    - Search/filter
    - Extension details
- **Features:**
  - Resizable width
  - Can be moved to right side
  - Toggle visibility (Ctrl+B / Cmd+B)
  - Drag and drop sections
  - Section collapse/expand

### 1.4 Secondary Sidebar
- **Purpose:** Additional customizable sidebar
- **Location:** Right side of window (default)
- **Features:**
  - Can display any view
  - Users can drag views from primary sidebar
  - Toggle visibility
  - Independent from primary sidebar

### 1.5 Editor Area
- **Editor Types:**
  - Text Editor
  - Diff Editor
  - Webview Editor
  - Custom Editors
  - Settings UI Editor
  - Keyboard Shortcuts Editor
  - Extension Editor
  - Markdown Preview
  - Image Preview
  - PDF Viewer (via extensions)
- **Editor Features:**
  - Editor Groups (split view)
  - Tabs
  - Tab scrolling
  - Tab sizing options
  - Pin tabs
  - Close tabs
  - Reopen closed tabs
  - Tab preview mode
  - Dirty indicator (unsaved changes)
  - Editor actions toolbar
  - Breadcrumbs navigation
  - Minimap
  - Sticky scroll
  - Editor rulers
  - Render whitespace options
  - Render control characters
  - Render line endings
- **Editor Layout:**
  - Single editor
  - Split horizontal
  - Split vertical
  - Grid layout (2x2, 3x3, etc.)
  - Floating editor windows (experimental)
  - Centered layout
  - Editor zoom level

### 1.6 Panel Region
- **Default Panels:**
  - Terminal
  - Problems
  - Output
  - Debug Console
  - Comments (when reviewing)
- **Features:**
  - Multiple terminals in tabs
  - Split terminals
  - Terminal groups
  - Panel position: Bottom, Left, Right
  - Resizable height
  - Maximize panel
  - Toggle visibility (Ctrl+J / Cmd+J)
  - Drag panels to rearrange

### 1.7 Status Bar
- **Left Side Items:**
  - Git branch indicator
  - Git sync status
  - Problems count (errors/warnings)
  - Extension-contributed items
- **Right Side Items:**
  - Line/Column number
  - Spaces/Tab size
  - File encoding
  - Line ending type (LF/CRLF)
  - Language mode selector
  - Feedback icon
  - Notifications bell
  - Extension-contributed items
- **Features:**
  - Clickable items to trigger actions
  - Color changes based on context
  - Background color customization
  - Hover tooltips
  - Can hide specific items

### 1.8 Breadcrumbs
- **Components:**
  - Folder path segments
  - File name
  - Symbol path (function, class, etc.)
- **Features:**
  - Click to navigate
  - Show/hide toggle
  - Copy breadcrumb path
  - Customize separator character
  - Filter symbols
  - Navigate with keyboard

### 1.9 Minimap
- **Features:**
  - Code overview
  - Scroll position indicator
  - Search results highlights
  - Syntax highlighting
  - Slider mode
  - Show/hide
  - Size customization
  - Side: Right (default) or Left

### 1.10 Context Menus
- **Locations:**
  - Editor right-click
  - Tab right-click
  - Sidebar right-click
  - Activity bar right-click
  - Explorer file/folder right-click
  - Terminal right-click
  - Status bar right-click
- **Features:**
  - Context-aware commands
  - Extension-contributed items
  - Submenu support
  - Keyboard navigation

---

## 2. CORE EDITING FEATURES

### 2.1 Text Editing
- **Basic Operations:**
  - Cut, Copy, Paste
  - Undo, Redo
  - Select All
  - Find, Replace
  - Multi-cursor editing
  - Column (box) selection
  - Line operations (move, copy, delete)
  - Word wrap
  - Auto-save
  - Format document
  - Format selection
  - Trim trailing whitespace
  - Insert final newline
  - Change file encoding
  - Change line endings

### 2.2 Advanced Editing
- **Multi-Cursor:**
  - Add cursor above/below
  - Add cursor at end of each line
  - Add cursor to all occurrences
  - Column select with mouse (Alt+drag)
  - Box selection mode
- **Line Operations:**
  - Move line up/down
  - Copy line up/down
  - Delete line
  - Join lines
  - Add line comment
  - Add block comment
  - Toggle comment
  - Duplicate selection
- **Text Transformation:**
  - Transform to uppercase
  - Transform to lowercase
  - Transform to title case
  - Sort lines ascending
  - Sort lines descending
  - Reverse lines
  - Unique lines
  - Trim whitespace

### 2.3 Selection & Navigation
- **Selection:**
  - Expand selection (smart select)
  - Shrink selection
  - Select word at cursor
  - Select line at cursor
  - Select all occurrences
  - Change all occurrences
  - Add next occurrence to selection
  - Add previous occurrence to selection
- **Navigation:**
  - Go to line
  - Go to symbol in file
  - Go to symbol in workspace
  - Go to definition
  - Peek definition
  - Go to type definition
  - Go to implementation
  - Go to references
  - Find all references
  - Navigate forward/back
  - Navigate to next/previous edit location
  - Navigate between problems

### 2.4 Code Folding
- **Fold Types:**
  - Fold region
  - Unfold region
  - Toggle fold
  - Fold all
  - Unfold all
  - Fold level 1-7
  - Fold all block comments
  - Fold all regions
  - Create manual folding range
- **Markers:**
  - Folding arrows in gutter
  - Custom folding markers (#region, etc.)

### 2.5 Indentation & Formatting
- **Indentation:**
  - Auto-detect indentation
  - Convert indentation to spaces
  - Convert indentation to tabs
  - Indent selection
  - Outdent selection
  - Reindent lines
  - Reindent selected lines
  - Tab size configuration
  - Insert spaces vs tabs
- **Formatting:**
  - Format document
  - Format selection
  - Format on save
  - Format on paste
  - Format on type
  - Formatter selection (if multiple)

### 2.6 Code Actions & Refactoring
- **Code Actions (Lightbulb):**
  - Quick fixes
  - Refactorings
  - Source actions
  - Auto-import
  - Organize imports
  - Remove unused imports
  - Extract function
  - Extract variable
  - Extract constant
  - Rename symbol
  - Inline variable
  - Convert to arrow function
  - Move to new file
  - Generate getter/setter
- **Refactoring:**
  - Rename symbol (F2)
  - Change all occurrences
  - Preview changes
  - Apply refactoring

### 2.7 Syntax Highlighting
- **Features:**
  - TextMate grammar support
  - Language-specific highlighting
  - Semantic highlighting
  - Bracket pair colorization
  - Bracket matching
  - Bracket pair guides
  - Active indent guides
  - Custom color tokens

### 2.8 Error & Warning Indicators
- **Locations:**
  - Inline squiggles (red/yellow/blue)
  - Gutter icons
  - Minimap markers
  - Problems panel
  - Status bar count
- **Types:**
  - Errors (red)
  - Warnings (yellow)
  - Information (blue)
  - Hints (dotted underline)
- **Features:**
  - Hover for details
  - Quick fix suggestions
  - Navigate between problems (F8)

---

## 3. LANGUAGE SUPPORT & INTELLISENSE

### 3.1 Built-in Language Support
**Full Language Support (Syntax + IntelliSense):**
- JavaScript
- TypeScript
- JSON
- HTML
- CSS
- SCSS
- Less
- Markdown

**Syntax Highlighting Only (Built-in):**
- C++
- C#
- Clojure
- CoffeeScript
- Dart
- Dockerfile
- F#
- Go
- Groovy
- Handlebars
- Ini
- Java
- Julia
- Lua
- Makefile
- Objective-C
- Perl
- PHP
- PowerShell
- Python
- R
- Ruby
- Rust
- ShaderLab
- Shell Script (Bash)
- SQL
- Swift
- Visual Basic
- XML
- YAML

### 3.2 IntelliSense Features
- **Auto-Completion:**
  - Word-based suggestions
  - Language-based suggestions
  - Snippet suggestions
  - Parameter hints
  - JSDoc/TSDoc support
  - Import auto-completion
  - Path auto-completion
  - Trigger characters
  - Tab completion
  - Accept suggestion on commit character
  - Quick suggestions
- **Signature Help:**
  - Parameter information
  - Function overload selection
  - Active parameter highlighting
- **Hover Information:**
  - Type information
  - Documentation
  - Code samples
  - Markdown rendering
- **Code Lens:**
  - Reference count
  - Implementation count
  - Test status
  - Custom code lenses

### 3.3 Language Features
**Declarative Features:**
- Language identifiers
- File extensions association
- Bracket matching
- Auto-closing pairs
- Auto-surrounding pairs
- Comment tokens
- Folding markers
- Word patterns
- Indentation rules

**Programmatic Features:**
- Completions (IntelliSense)
- Inline completions (AI)
- Hover
- Signature Help
- Definition
- Type Definition
- Implementation
- References
- Document Highlights
- Document Symbols
- Code Actions
- Code Lens
- Document Links
- Document Colors
- Color Picker
- Formatting
- Range Formatting
- On Type Formatting
- Rename
- Folding
- Selection Range
- Call Hierarchy
- Type Hierarchy
- Semantic Tokens
- Inline Values
- Inlay Hints
- Diagnostics

### 3.4 Language Server Protocol
- **Support:**
  - LSP client built-in
  - Language server libraries
  - Multi-root workspace support
  - Incremental text sync
  - Progress reporting
  - Work done progress
  - Partial result progress
- **Communication:**
  - JSON-RPC 2.0
  - stdin/stdout
  - Sockets
  - IPC

---

## 4. SOURCE CONTROL & GIT INTEGRATION

### 4.1 Git Features
- **Basic Operations:**
  - Initialize repository
  - Clone repository
  - Stage changes
  - Unstage changes
  - Commit
  - Commit with message
  - Amend commit
  - Push
  - Pull
  - Fetch
  - Sync
- **Branching:**
  - Create branch
  - Switch branch
  - Delete branch
  - Rename branch
  - Merge branch
  - Rebase branch
  - Cherry-pick
- **History:**
  - View file history (Timeline)
  - View commit history
  - Compare with previous revision
  - Compare with HEAD
  - Compare branches
  - Blame annotations (via extensions)

### 4.2 Source Control UI
- **Source Control View:**
  - Changes list
  - Staged Changes list
  - Merge Changes list
  - Untracked files
  - Commit input box
  - Commit actions
  - Refresh
  - More Actions menu
  - Repository selector (multi-repo)
  - Worktrees view
- **Inline Git Decorations:**
  - Gutter indicators (added, modified, deleted)
  - Overview ruler decorations
  - Diff viewer
  - Inline diff view
  - Side-by-side diff
- **Status Bar:**
  - Branch name
  - Sync status
  - Checkout branch
  - Publish branch

### 4.3 Diff & Merge
- **Diff Editor:**
  - Side-by-side view
  - Inline view
  - Navigate between changes
  - Revert change
  - Stage/unstage change
  - Syntax highlighting
  - Minimap
- **Merge Conflict Resolution:**
  - Accept Current Change
  - Accept Incoming Change
  - Accept Both Changes
  - Compare Changes
  - Conflict markers highlighting
  - Three-way merge editor

### 4.4 Git Configuration
- **Settings:**
  - Git path
  - Auto-fetch
  - Auto-refresh
  - Confirm sync
  - Enable smart commit
  - Enable commit signing
  - Default clone directory
  - Ignore missing Git warning
- **Integration:**
  - GitHub integration
  - GitLab support (via extensions)
  - Bitbucket support (via extensions)
  - Azure DevOps support (via extensions)

---

## 5. DEBUGGING FEATURES

### 5.1 Debug UI
- **Debug Toolbar:**
  - Continue/Pause
  - Step Over
  - Step Into
  - Step Out
  - Restart
  - Stop
  - Disconnect
- **Debug Views:**
  - Variables
  - Watch expressions
  - Call Stack
  - Breakpoints
  - Loaded Scripts (JavaScript)
- **Debug Console:**
  - REPL
  - Expression evaluation
  - Output logs
  - Error messages

### 5.2 Breakpoints
- **Types:**
  - Line breakpoints
  - Conditional breakpoints
  - Logpoints
  - Function breakpoints
  - Exception breakpoints
  - Data breakpoints (C++, etc.)
  - Instruction breakpoints
- **Features:**
  - Hit count
  - Log message
  - Enable/disable
  - Remove all
  - Export/import
  - Breakpoint widget

### 5.3 Debug Configurations
- **Launch Configurations:**
  - Type selection
  - Request types (launch/attach)
  - Program path
  - Arguments
  - Environment variables
  - Working directory
  - Console type
  - Pre-launch tasks
  - Post-debug tasks
  - Debug server port
  - Source maps
- **Configuration Files:**
  - launch.json
  - Snippets for common scenarios
  - Multiple configurations
  - Compound configurations
  - Configuration resolution

### 5.4 Built-in Debuggers
- **JavaScript/TypeScript:**
  - Node.js debugging
  - Chrome debugging
  - Edge debugging
  - VS Code Extension debugging
- **Debug Adapters:**
  - Debug Adapter Protocol (DAP)
  - Extension-contributed debuggers
  - Mock debugger (sample)

### 5.5 Advanced Debug Features
- **Features:**
  - Auto attach
  - JavaScript debug terminal
  - Inline values
  - Hover evaluation
  - Data inspection
  - Memory view
  - Disassembly view
  - Multi-target debugging
  - Remote debugging
  - Debug focus mode

---

## 6. TERMINAL INTEGRATION

### 6.1 Integrated Terminal
- **Features:**
  - Multiple terminals
  - Split terminals
  - Terminal tabs
  - Terminal groups
  - Rename terminal
  - Kill terminal
  - Clear terminal
  - Copy selection
  - Paste
  - Find in terminal
  - Scroll to top/bottom
  - Select all

### 6.2 Terminal Shells
- **Supported Shells:**
  - PowerShell (Windows)
  - Command Prompt (Windows)
  - Git Bash (Windows)
  - WSL Bash (Windows)
  - Bash (Linux/macOS)
  - Zsh (Linux/macOS)
  - Fish (Linux/macOS)
  - Custom shells
- **Configuration:**
  - Default profile per platform
  - Shell path
  - Shell arguments
  - Environment variables
  - Integrated terminal CWD

### 6.3 Terminal Features
- **Shell Integration:**
  - Command tracking
  - Working directory detection
  - Command decorations
  - Error detection
  - Clickable file links
  - Clickable URLs
  - Suggest completions (IntelliSense)
  - Command history
  - Recent directories
- **Appearance:**
  - Font family
  - Font size
  - Line height
  - Cursor style
  - Cursor blinking
  - Theme colors
  - Minimum contrast ratio
  - GPU acceleration

### 6.4 Terminal Actions
- **Commands:**
  - Create New Terminal
  - Split Terminal
  - Kill Terminal
  - Clear
  - Scroll Up/Down
  - Scroll to Top/Bottom
  - Select All
  - Copy Selection
  - Paste
  - Find
  - Resize Pane
  - Focus Next/Previous Terminal
  - Run Selected Text
  - Run Active File

---

## 7. EXTENSIONS & MARKETPLACE

### 7.1 Extension Types
- **Categories:**
  - Programming Languages
  - Snippets
  - Linters
  - Themes
  - Debuggers
  - Formatters
  - Keymaps
  - SCM Providers
  - Other
  - Extension Packs
  - Language Packs
  - Data Science
  - Machine Learning
  - Visualization
  - Notebooks
  - Testing

### 7.2 Extension Features
- **Capabilities:**
  - Commands
  - Configuration
  - Keybindings
  - Languages
  - Debuggers
  - Grammars
  - Themes
  - Snippets
  - JSON validation
  - Views
  - View containers
  - Problem matchers
  - Task definitions
  - Menus
  - Walkthroughs
  - Custom editors
  - Webviews
  - Authentication providers
  - Terminal profiles
  - Icons

### 7.3 Extension Management
- **Actions:**
  - Install extension
  - Uninstall extension
  - Enable extension
  - Disable extension
  - Disable extension for workspace
  - Update extension
  - Auto-update extensions
  - Install from VSIX
  - Extensions sync
  - Extension bisect
- **Views:**
  - Installed extensions
  - Recommended extensions
  - Workspace recommendations
  - Popular extensions
  - Recently added
  - Extension details
  - Extension README
  - Extension changelog
  - Extension ratings/reviews

### 7.4 Extension API
- **API Categories:**
  - Language features
  - Workbench features
  - Editor features
  - Debugging features
  - Terminal features
  - SCM features
  - Task features
  - Authentication
  - Comments
  - Notebooks
  - Timeline
  - Testing
  - Language models (proposed)

---

## 8. SETTINGS & CONFIGURATION

### 8.1 Settings Levels
- **Scope:**
  - Default Settings
  - User Settings (Global)
  - Remote Settings
  - Workspace Settings
  - Workspace Folder Settings
  - Language-specific Settings
  - Machine Settings
  - Machine-overridable Settings

### 8.2 Settings UI
- **Features:**
  - Search settings
  - Modified settings indicator
  - Filter by tag
  - Filter by extension
  - Filter by feature
  - Settings editor vs JSON
  - Edit in settings.json link
  - Setting descriptions
  - Setting validation
  - Deprecated settings warnings
  - Enum dropdowns
  - Number inputs
  - String inputs
  - Boolean checkboxes
  - Array editors
  - Object editors
  - Excluded files editor

### 8.3 Major Setting Categories
**Editor Settings:**
- Font family, size, weight
- Line height
- Tab size
- Insert spaces
- Word wrap
- Minimap
- Breadcrumbs
- Rulers
- Cursor style, blinking
- Smooth caret animation
- Render whitespace
- Render control characters
- Line numbers
- Glyph margin
- Folding
- Folding strategy
- Folding maximum regions
- Sticky scroll
- Linked editing
- Bracket pair colorization
- Auto-closing brackets/quotes
- Auto-surrounding
- Format on save/type/paste
- Suggest selection mode
- Snippet suggestions
- Tab completion
- Quick suggestions
- Accept suggestion on commit char

**Workbench Settings:**
- Color theme
- Icon theme
- Product icon theme
- Activity bar location
- Sidebar location
- Panel location
- Editor layout
- Startup editor
- Tree indent
- Tree render indent guides
- Command palette history
- Quick open history
- Settings editor
- Experimental features

**Files Settings:**
- Auto-save
- Auto-save delay
- Default language
- Encoding
- EOL
- Exclude patterns
- Associations
- Trim trailing whitespace
- Insert final newline
- Trim final newlines
- Hot exit
- Enable trash

**Search Settings:**
- Exclude patterns
- Follow symlinks
- Smart case
- Global find clipboard
- Use ignore files
- Use global gitignore

**Git Settings:**
- Enabled
- Path
- Auto-fetch
- Auto-fetch period
- Confirm sync
- Enable smart commit
- Enable commit signing
- Default clone directory

**Terminal Settings:**
- Default profile (per OS)
- Font family, size
- Line height
- Cursor style, blinking
- Shell integration
- Right-click behavior
- Copy on selection
- Fast scroll sensitivity

**Debug Settings:**
- Open debug
- Inline values
- Show in status bar
- Show sub-sessions
- Tool bar location
- Console word wrap
- Focus editor on break

**Extensions Settings:**
- Auto-check updates
- Auto-update
- Close extension details on install
- Confirm uninstall
- Ignore recommendations

### 8.4 Profiles
- **Features:**
  - Create profile
  - Switch profile
  - Delete profile
  - Export profile
  - Import profile
  - Default profile
  - Temporary profile
- **Profile Contents:**
  - Settings
  - Extensions
  - UI state
  - Keybindings
  - Snippets
  - Tasks

---

## 9. COMMAND PALETTE COMMANDS

### 9.1 File Commands
- File: New File
- File: New Untitled File
- File: New Window
- File: Open File
- File: Open Folder
- File: Open Workspace
- File: Open Recent
- File: Add Folder to Workspace
- File: Save
- File: Save As
- File: Save All
- File: Auto Save
- File: Revert File
- File: Close Editor
- File: Close Folder
- File: Close Window
- File: Close Workspace
- File: Close All Editors
- File: Rename

### 9.2 Edit Commands
- Edit: Undo
- Edit: Redo
- Edit: Cut
- Edit: Copy
- Edit: Paste
- Edit: Find
- Edit: Replace
- Edit: Find in Files
- Edit: Replace in Files
- Edit: Toggle Line Comment
- Edit: Toggle Block Comment
- Edit: Emmet: Expand Abbreviation
- Edit: Emmet: Wrap with Abbreviation

### 9.3 View Commands
- View: Toggle Full Screen
- View: Toggle Zen Mode
- View: Toggle Centered Layout
- View: Toggle Minimap
- View: Toggle Breadcrumbs
- View: Toggle Sidebar Visibility
- View: Toggle Panel
- View: Toggle Status Bar Visibility
- View: Toggle Activity Bar Visibility
- View: Toggle Primary Sidebar Position
- View: Toggle Panel Position
- View: Split Editor
- View: Split Editor Orthogonal
- View: Toggle Editor Group Layout
- View: Show Explorer
- View: Show Search
- View: Show Source Control
- View: Show Run and Debug
- View: Show Extensions
- View: Show Terminal
- View: Show Problems
- View: Show Output
- View: Show Debug Console
- View: Appearance (submenu)

### 9.4 Go Commands
- Go: Back
- Go: Forward
- Go: Last Edit Location
- Go: Go to Line/Column
- Go: Go to File
- Go: Go to Symbol in Workspace
- Go: Go to Symbol in Editor
- Go: Go to Definition
- Go: Go to Type Definition
- Go: Go to Implementation
- Go: Go to References
- Go: Go to Next Problem
- Go: Go to Previous Problem
- Go: Next Change
- Go: Previous Change

### 9.5 Run Commands
- Run: Start Debugging
- Run: Run Without Debugging
- Run: Stop Debugging
- Run: Restart Debugging
- Run: Continue
- Run: Step Over
- Run: Step Into
- Run: Step Out
- Run: Add Configuration
- Run: Open launch.json
- Run: Toggle Breakpoint
- Run: Add Conditional Breakpoint
- Run: Add Logpoint

### 9.6 Terminal Commands
- Terminal: Create New Terminal
- Terminal: Create New Terminal in Editor Area
- Terminal: Split Terminal
- Terminal: Kill Terminal
- Terminal: Clear
- Terminal: Focus Next Terminal
- Terminal: Focus Previous Terminal
- Terminal: Rename
- Terminal: Resize Pane Up/Down/Left/Right
- Terminal: Scroll Up/Down
- Terminal: Scroll to Top/Bottom
- Terminal: Select Default Profile
- Terminal: Run Selected Text
- Terminal: Run Active File
- Terminal: Show Environment Information

### 9.7 Preferences Commands
- Preferences: Open Settings (UI)
- Preferences: Open Settings (JSON)
- Preferences: Open Workspace Settings
- Preferences: Open Workspace Settings (JSON)
- Preferences: Open Default Settings (JSON)
- Preferences: Open Keyboard Shortcuts
- Preferences: Open Keyboard Shortcuts (JSON)
- Preferences: Color Theme
- Preferences: File Icon Theme
- Preferences: Product Icon Theme
- Preferences: Open User Snippets
- Preferences: Configure Language Specific Settings
- Preferences: Configure Display Language
- Preferences: Turn On Settings Sync
- Preferences: Profiles: Create Profile
- Preferences: Profiles: Switch Profile

### 9.8 Git Commands
- Git: Clone
- Git: Initialize Repository
- Git: Stage Changes
- Git: Stage All Changes
- Git: Unstage Changes
- Git: Unstage All Changes
- Git: Commit
- Git: Commit All
- Git: Commit Staged
- Git: Undo Last Commit
- Git: Commit Amend
- Git: Push
- Git: Pull
- Git: Fetch
- Git: Sync
- Git: Publish Branch
- Git: Checkout to
- Git: Create Branch
- Git: Delete Branch
- Git: Merge Branch
- Git: Rebase Branch
- Git: Stash
- Git: Apply Stash
- Git: Open File
- Git: Open Changes
- Git: Stage Selected Ranges
- Git: Revert Selected Ranges

### 9.9 Extensions Commands
- Extensions: Install Extensions
- Extensions: Show Installed Extensions
- Extensions: Show Recommended Extensions
- Extensions: Show Popular Extensions
- Extensions: Update All Extensions
- Extensions: Enable All Extensions
- Extensions: Disable All Extensions
- Extensions: Check for Extension Updates
- Extensions: Install from VSIX
- Extensions: Show Extension Bisect

### 9.10 Developer Commands
- Developer: Reload Window
- Developer: Toggle Developer Tools
- Developer: Open Process Explorer
- Developer: Show Running Extensions
- Developer: Start Extension Bisect
- Developer: Toggle Screencast Mode
- Developer: Inspect Context Keys
- Developer: Inspect Tokens
- Developer: Inspect Editor Tokens and Scopes
- Developer: Generate Color Theme From Current Settings
- Developer: Set Log Level

---

## 10. KEYBOARD SHORTCUTS

### 10.1 General Shortcuts
**Windows/Linux | macOS**
- Show Command Palette: `Ctrl+Shift+P` | `Cmd+Shift+P`
- Quick Open: `Ctrl+P` | `Cmd+P`
- New Window: `Ctrl+Shift+N` | `Cmd+Shift+N`
- Close Window: `Alt+F4` | `Cmd+W`
- User Settings: `Ctrl+,` | `Cmd+,`
- Keyboard Shortcuts: `Ctrl+K Ctrl+S` | `Cmd+K Cmd+S`
- Toggle Sidebar: `Ctrl+B` | `Cmd+B`
- Toggle Panel: `Ctrl+J` | `Cmd+J`
- Toggle Terminal: `Ctrl+`` | `Cmd+``
- Zen Mode: `Ctrl+K Z` | `Cmd+K Z`
- Full Screen: `F11` | `Ctrl+Cmd+F`

### 10.2 Editing Shortcuts
**Windows/Linux | macOS**
- Cut Line: `Ctrl+X` | `Cmd+X`
- Copy Line: `Ctrl+C` | `Cmd+C`
- Paste: `Ctrl+V` | `Cmd+V`
- Undo: `Ctrl+Z` | `Cmd+Z`
- Redo: `Ctrl+Y` | `Cmd+Shift+Z`
- Move Line Up/Down: `Alt+Up/Down` | `Option+Up/Down`
- Copy Line Up/Down: `Shift+Alt+Up/Down` | `Shift+Option+Up/Down`
- Delete Line: `Ctrl+Shift+K` | `Cmd+Shift+K`
- Insert Line Below: `Ctrl+Enter` | `Cmd+Enter`
- Insert Line Above: `Ctrl+Shift+Enter` | `Cmd+Shift+Enter`
- Go to Line: `Ctrl+G` | `Cmd+G`
- Select Word: `Ctrl+D` | `Cmd+D`
- Select All Occurrences: `Ctrl+Shift+L` | `Cmd+Shift+L`
- Add Cursor Above: `Ctrl+Alt+Up` | `Cmd+Option+Up`
- Add Cursor Below: `Ctrl+Alt+Down` | `Cmd+Option+Down`
- Toggle Line Comment: `Ctrl+/` | `Cmd+/`
- Toggle Block Comment: `Shift+Alt+A` | `Shift+Option+A`
- Format Document: `Shift+Alt+F` | `Shift+Option+F`
- Format Selection: `Ctrl+K Ctrl+F` | `Cmd+K Cmd+F`

### 10.3 Navigation Shortcuts
**Windows/Linux | macOS**
- Go to File: `Ctrl+P` | `Cmd+P`
- Go to Symbol: `Ctrl+Shift+O` | `Cmd+Shift+O`
- Go to Definition: `F12` | `F12`
- Peek Definition: `Alt+F12` | `Option+F12`
- Go to References: `Shift+F12` | `Shift+F12`
- Go Back: `Alt+Left` | `Ctrl+-`
- Go Forward: `Alt+Right` | `Ctrl+Shift+-`
- Next Problem: `F8` | `F8`
- Previous Problem: `Shift+F8` | `Shift+F8`
- Navigate Editor Groups: `Ctrl+1/2/3` | `Cmd+1/2/3`
- Switch Editor: `Ctrl+Tab` | `Ctrl+Tab`
- Close Editor: `Ctrl+W` | `Cmd+W`
- Reopen Closed Editor: `Ctrl+Shift+T` | `Cmd+Shift+T`

### 10.4 Search Shortcuts
**Windows/Linux | macOS**
- Find: `Ctrl+F` | `Cmd+F`
- Replace: `Ctrl+H` | `Cmd+Option+F`
- Find Next: `F3` | `Cmd+G`
- Find Previous: `Shift+F3` | `Cmd+Shift+G`
- Find in Files: `Ctrl+Shift+F` | `Cmd+Shift+F`
- Replace in Files: `Ctrl+Shift+H` | `Cmd+Shift+H`
- Toggle Find Case Sensitive: `Alt+C` | `Cmd+Option+C`
- Toggle Find Regex: `Alt+R` | `Cmd+Option+R`
- Toggle Find Whole Word: `Alt+W` | `Cmd+Option+W`

### 10.5 Debug Shortcuts
**Windows/Linux | macOS**
- Start Debugging: `F5` | `F5`
- Run Without Debugging: `Ctrl+F5` | `Ctrl+F5`
- Stop Debugging: `Shift+F5` | `Shift+F5`
- Restart Debugging: `Ctrl+Shift+F5` | `Cmd+Shift+F5`
- Continue: `F5` | `F5`
- Step Over: `F10` | `F10`
- Step Into: `F11` | `F11`
- Step Out: `Shift+F11` | `Shift+F11`
- Toggle Breakpoint: `F9` | `F9`
- Open Debug Console: `Ctrl+Shift+Y` | `Cmd+Shift+Y`

### 10.6 Integrated Terminal Shortcuts
**Windows/Linux | macOS**
- Create New Terminal: `Ctrl+Shift+`` | `Ctrl+Shift+``
- Toggle Terminal: `Ctrl+`` | `Cmd+``
- Split Terminal: `Ctrl+Shift+5` | `Cmd+\`
- Focus Next Terminal: `Ctrl+PageDown` | `Cmd+Option+Down`
- Focus Previous Terminal: `Ctrl+PageUp` | `Cmd+Option+Up`
- Kill Terminal: (via menu) | (via menu)
- Clear Terminal: `Ctrl+K` | `Cmd+K`

### 10.7 File Management Shortcuts
**Windows/Linux | macOS**
- New File: `Ctrl+N` | `Cmd+N`
- Open File: `Ctrl+O` | `Cmd+O`
- Save: `Ctrl+S` | `Cmd+S`
- Save As: `Ctrl+Shift+S` | `Cmd+Shift+S`
- Save All: `Ctrl+K S` | `Cmd+Option+S`
- Close: `Ctrl+W` | `Cmd+W`
- Close All: `Ctrl+K Ctrl+W` | `Cmd+K Cmd+W`
- Reopen Closed: `Ctrl+Shift+T` | `Cmd+Shift+T`

### 10.8 Display Shortcuts
**Windows/Linux | macOS**
- Zoom In: `Ctrl+=` | `Cmd+=`
- Zoom Out: `Ctrl+-` | `Cmd+-`
- Reset Zoom: `Ctrl+0` | `Cmd+0`
- Toggle Sidebar: `Ctrl+B` | `Cmd+B`
- Show Explorer: `Ctrl+Shift+E` | `Cmd+Shift+E`
- Show Search: `Ctrl+Shift+F` | `Cmd+Shift+F`
- Show Source Control: `Ctrl+Shift+G` | `Ctrl+Shift+G`
- Show Extensions: `Ctrl+Shift+X` | `Cmd+Shift+X`
- Show Problems: `Ctrl+Shift+M` | `Cmd+Shift+M`
- Show Output: `Ctrl+Shift+U` | `Cmd+Shift+U`

---

## 11. BUILT-IN EXTENSIONS

### 11.1 Language Extensions
- **HTML Language Features**
  - HTML completion
  - HTML validation
  - Auto-closing tags
  - Tag matching
  - Emmet support
- **CSS Language Features**
  - CSS completion
  - CSS validation
  - Color picker
  - Hover information
- **TypeScript Language Features**
  - TypeScript/JavaScript IntelliSense
  - Refactoring
  - Organize imports
  - Auto-imports
  - JSDoc support
  - Type checking
- **JSON Language Features**
  - JSON validation
  - JSON schema support
  - Auto-completion
  - Formatting
- **Markdown Language Features**
  - Markdown preview
  - Markdown outline
  - Links validation
  - Header folding
  - Math support

### 11.2 Debugger Extensions
- **Node Debug**
  - Node.js debugging
  - JavaScript debugging
  - Auto-attach
  - Debug terminal
- **JavaScript Debug Terminal**
  - Auto-attach debugging
  - Launch configurations
- **PHP Debug** (via extension)
- **Python Debug** (via extension)
- **C++ Debug** (via extension)

### 11.3 Theme Extensions
- **Built-in Themes:**
  - Dark+ (default dark)
  - Light+ (default light)
  - Dark (Visual Studio)
  - Light (Visual Studio)
  - High Contrast Dark
  - High Contrast Light
  - Monokai
  - Solarized Dark
  - Solarized Light
  - Quiet Light
  - Red
  - Tomorrow Night Blue

### 11.4 Other Built-in Extensions
- **Git**
  - Source control integration
  - Diff viewer
  - Commit interface
  - Branch management
- **GitHub**
  - GitHub authentication
  - Issue/PR integration (via extensions)
  - Copilot integration
- **Emmet**
  - HTML/CSS abbreviations
  - Wrap with abbreviation
  - Update tag
  - Balance (outward/inward)
  - Remove tag
- **Configuration Editing**
  - Settings editor
  - Keybindings editor
  - Snippets editor
- **Extension Authoring**
  - Extension development
  - Yo Code generator
  - Extension samples

---

## 12. WORKSPACES & PROJECTS

### 12.1 Workspace Types
- **Single Folder Workspace**
  - Open a single folder
  - .vscode settings folder
  - Workspace settings
  - Extensions recommendations
- **Multi-root Workspace**
  - Multiple folders
  - .code-workspace file
  - Per-folder settings
  - Workspace-wide settings
  - Shared tasks
- **Empty Workspace**
  - No folder opened
  - Temporary files
  - User settings only

### 12.2 Workspace Settings
- **Configuration Files:**
  - .vscode/settings.json
  - .vscode/launch.json
  - .vscode/tasks.json
  - .vscode/extensions.json
  - .code-workspace (multi-root)
- **Features:**
  - Workspace trust
  - Restricted mode
  - Settings inheritance
  - Settings overrides
  - Folder-specific settings

### 12.3 Workspace Features
- **Project Management:**
  - Recent workspaces
  - Pin workspace
  - Workspace file associations
  - Workspace-specific extensions
  - Workspace recommendations
- **File Exclusions:**
  - files.exclude
  - search.exclude
  - files.watcherExclude
  - Pattern matching
  - Glob patterns

---

## 13. SEARCH & NAVIGATION

### 13.1 Quick Open
- **Features:**
  - File search (Ctrl+P / Cmd+P)
  - Symbol search (@)
  - Line search (:)
  - Command search (>)
  - View search (view )
  - Extension search (ext )
  - Task search (task )
  - Recent files
  - Fuzzy matching
  - Preview on navigate

### 13.2 Search View
- **Search Features:**
  - Text search
  - Regex search
  - Case-sensitive search
  - Whole word search
  - Search in files
  - Search in folder
  - Include/exclude patterns
  - File type filters
  - Search editor
  - Replace in files
  - Replace preview
  - Preserve case replace
- **Search Results:**
  - Results tree
  - File grouping
  - Line context
  - Navigate results
  - Clear results
  - Refresh search
  - Collapse all
  - Expand all

### 13.3 Symbol Navigation
- **Go to Symbol:**
  - Symbol in file (Ctrl+Shift+O)
  - Symbol in workspace (Ctrl+T)
  - Symbol by category
  - Symbol hierarchy
  - Symbol search
- **Breadcrumbs:**
  - File path
  - Symbol path
  - Navigate breadcrumbs
  - Symbol picker
  - Keyboard navigation

### 13.4 Code Navigation
- **Navigation Features:**
  - Go to Definition (F12)
  - Peek Definition (Alt+F12)
  - Go to Type Definition
  - Go to Implementation
  - Go to References (Shift+F12)
  - Peek References
  - Find All References
  - Call Hierarchy
  - Type Hierarchy
  - Document Outline
  - Sticky Scroll
  - Navigate Forward/Back
  - Navigate to Last Edit

---

## 14. SNIPPETS & EMMET

### 14.1 Snippets
- **Features:**
  - User snippets
  - Extension snippets
  - Language-specific snippets
  - Project snippets (.vscode/snippets/)
  - Snippet variables
  - Placeholder tabstops
  - Choice placeholders
  - Nested placeholders
  - Snippet transformations
  - Snippet suggestions
- **Variables:**
  - TM_SELECTED_TEXT
  - TM_CURRENT_LINE
  - TM_CURRENT_WORD
  - TM_LINE_INDEX
  - TM_LINE_NUMBER
  - TM_FILENAME
  - TM_FILENAME_BASE
  - TM_DIRECTORY
  - TM_FILEPATH
  - CLIPBOARD
  - WORKSPACE_NAME
  - WORKSPACE_FOLDER
  - CURRENT_YEAR/MONTH/DATE
  - CURRENT_HOUR/MINUTE/SECOND
  - BLOCK_COMMENT_START/END
  - LINE_COMMENT
  - RANDOM/RANDOM_HEX
  - UUID
- **Transformations:**
  - upcase
  - downcase
  - capitalize
  - camelcase
  - pascalcase
  - snakecase
  - kebabcase (new)
  - regex

### 14.2 Emmet
- **Abbreviations:**
  - HTML abbreviations
  - CSS abbreviations
  - Multiplication (*)
  - Grouping ()
  - Item numbering ($)
  - ID and CLASS
  - Custom attributes
  - Text {}
  - Climb-up (^)
  - Siblings (+)
  - Child (>)
- **Commands:**
  - Expand Abbreviation
  - Wrap with Abbreviation
  - Remove Tag
  - Update Tag
  - Balance Inward
  - Balance Outward
  - Go to Matching Pair
  - Split/Join Tag
  - Toggle Comment
  - Evaluate Math Expression
  - Increment/Decrement Number
- **Emmet Settings:**
  - Include languages
  - Exclude languages
  - Variables
  - Syntaxes
  - Preferences
  - Show expanded abbreviation

---

## 15. TASKS & AUTOMATION

### 15.1 Tasks
- **Task Types:**
  - Shell tasks
  - Process tasks
  - Custom tasks
  - Extension-defined tasks
- **Task Configuration:**
  - tasks.json
  - Task label
  - Task type
  - Command
  - Arguments
  - Options (cwd, env, shell)
  - Problem matchers
  - Group (build, test)
  - Presentation options
  - Run options
  - Depends on
  - Background tasks

### 15.2 Task Features
- **Execution:**
  - Run Task
  - Run Build Task (Ctrl+Shift+B)
  - Run Test Task
  - Rerun Last Task
  - Terminate Task
  - Restart Running Task
  - Show Running Tasks
  - Configure Task
  - Configure Default Build Task
- **Problem Matchers:**
  - Pattern matching
  - File location
  - Line/column extraction
  - Severity detection
  - Ownership
  - Background watchers
  - Begin/end patterns

### 15.3 Task Runners
- **Built-in Support:**
  - npm scripts
  - Gulp
  - Grunt
  - Jake
  - MSBuild
  - Maven
  - Ant
- **Integration:**
  - Auto-detected tasks
  - Task provider API
  - Custom task providers
  - Task execution API

---

## 16. REMOTE DEVELOPMENT

### 16.1 Remote Development Extensions
- **Remote - SSH**
  - Connect to remote machines
  - SSH config support
  - Port forwarding
  - Agent forwarding
- **Remote - Containers (Dev Containers)**
  - Develop in containers
  - devcontainer.json
  - Docker integration
  - Docker Compose support
- **Remote - WSL**
  - Develop in WSL
  - WSL 1 & 2 support
  - Windows/Linux integration
- **Remote - Tunnels**
  - Secure tunneling
  - Remote access
  - Browser-based editing

### 16.2 Remote Features
- **Capabilities:**
  - Full extension support
  - Terminal access
  - Debugging
  - Port forwarding
  - File system access
  - Source control
  - Task execution
- **Settings:**
  - Remote-specific settings
  - Extension installation
  - Platform detection
  - Environment variables

---

## 17. AI FEATURES (GITHUB COPILOT)

### 17.1 GitHub Copilot
- **Features:**
  - Inline code suggestions
  - Multi-line completions
  - Function generation
  - Comment-to-code
  - Test generation
  - Code explanation
  - Documentation generation
- **Copilot Chat:**
  - Chat interface
  - Slash commands
  - Context awareness
  - Code refactoring
  - Debug assistance
  - Terminal help
  - Agent skills

### 17.2 AI Integration
- **Features:**
  - IntelliSense integration
  - Ghost text suggestions
  - Accept/reject suggestions
  - Partial acceptance
  - Alternative suggestions
  - Context from workspace
  - Privacy controls

---

## 18. WEB & MOBILE FEATURES

### 18.1 VSCode for Web (vscode.dev)
- **Features:**
  - Browser-based editing
  - GitHub/Azure Repos integration
  - Local file editing
  - Extension support (web)
  - Settings sync
  - Themes support
  - Limited debugging
- **Limitations:**
  - No terminal
  - Limited extensions
  - No native file system access
  - No compilation

### 18.2 VSCode Mobile Apps
- **Features:**
  - iOS app
  - Android app
  - Touch-optimized UI
  - GitHub integration
  - Basic editing
  - Syntax highlighting

---

## 19. ACCESSIBILITY FEATURES

### 19.1 Accessibility Support
- **Screen Reader:**
  - Full screen reader support
  - Aria labels
  - Keyboard navigation
  - Screen reader mode
  - Audio cues
  - Accessibility help
- **Keyboard:**
  - Full keyboard navigation
  - Customizable keybindings
  - Keyboard shortcuts reference
  - Tab trapping mode
- **Visual:**
  - High contrast themes
  - Color customization
  - Zoom support
  - Font scaling
  - Cursor customization

### 19.2 Accessibility Settings
- **Options:**
  - accessibility.signals.*
  - editor.accessibilitySupport
  - editor.accessibilityPageSize
  - workbench.colorCustomizations
  - keyboard.dispatch
  - terminal.integrated.accessibleBufferSize

---

## 20. TELEMETRY & PRIVACY

### 20.1 Telemetry
- **Data Collection:**
  - Usage data
  - Error reporting
  - Crash reports
  - Performance data
- **Settings:**
  - telemetry.telemetryLevel
    - all
    - error
    - crash
    - off
  - telemetry.enableCrashReporter
  - telemetry.enableTelemetry (legacy)

### 20.2 Privacy Features
- **Controls:**
  - Disable telemetry
  - Anonymous usage ID
  - Machine ID
  - Extension telemetry
  - Workspace trust
  - Restricted mode
- **Data Storage:**
  - Local settings only
  - No cloud without consent
  - Settings Sync opt-in
  - Extension data policies

---

## 21. FILE & FOLDER MANAGEMENT

### 21.1 Explorer View
- **Features:**
  - Folder tree
  - File tree
  - Reveal in explorer/finder
  - New file
  - New folder
  - Rename
  - Delete (to trash)
  - Copy
  - Paste
  - Cut
  - Duplicate
  - Copy path
  - Copy relative path
  - Reveal in integrated terminal
  - Find in folder
  - Open in external editor
  - Compare with
  - Set as active editor
- **Tree View:**
  - Compact folders
  - Indent guides
  - File nesting
  - Sort order
  - Filter on type
  - File decorations
  - Git status colors

### 21.2 File Operations
- **Features:**
  - Drag and drop
  - Copy files between folders
  - Multi-select
  - Auto-reveal
  - Auto-save
  - Hot exit
  - Files: Auto Save
  - Files: Hot Exit
  - Files: Enable Trash
- **File Watching:**
  - File change detection
  - External file changes
  - Watcher exclude
  - Reload on external change

### 21.3 Open Editors
- **Features:**
  - List of open files
  - Dirty indicator
  - Close editor
  - Close others
  - Close to the right
  - Close saved
  - Close all
  - Pin editor
  - Split editor
  - Group organization

---

## 22. THEMES & APPEARANCE

### 22.1 Color Themes
- **Types:**
  - Dark themes
  - Light themes
  - High contrast themes
  - Custom themes
- **Customization:**
  - workbench.colorCustomizations
  - Token color customizations
  - Semantic highlighting
  - Editor colors
  - Activity bar colors
  - Status bar colors
  - Sidebar colors
  - Panel colors
  - Terminal colors

### 22.2 Icon Themes
- **Types:**
  - File icon themes
  - Product icon themes
- **Built-in:**
  - Seti (file icons)
  - Minimal (file icons)
  - None
- **Customization:**
  - File associations
  - Folder associations
  - Language associations

### 22.3 Font Settings
- **Options:**
  - Font family
  - Font size
  - Font weight
  - Line height
  - Letter spacing
  - Font ligatures
  - Font variations
- **Locations:**
  - Editor font
  - Terminal font
  - Debug console font

---

## 23. TESTING FEATURES

### 23.1 Test Explorer
- **Features:**
  - Test tree view
  - Run tests
  - Debug tests
  - Run all tests
  - Run failed tests
  - Test results
  - Test coverage
  - Test decorations
  - Continuous testing
- **Test UI:**
  - Test status icons
  - Test output
  - Test explorer view
  - Test item actions
  - Test profiles

### 23.2 Test API
- **Features:**
  - Test controller API
  - Test item API
  - Test run API
  - Test coverage API
  - Test decorations
  - Test tags
  - Test profiles

---

## 24. COLLABORATION FEATURES

### 24.1 Live Share (Extension)
- **Features:**
  - Real-time collaboration
  - Shared terminals
  - Shared servers
  - Shared debugging
  - Audio calls
  - Chat
  - Follow mode
  - Focus mode

### 24.2 Settings Sync
- **Synced Data:**
  - Settings
  - Keybindings
  - Extensions
  - UI state
  - Snippets
  - Profiles
- **Features:**
  - Microsoft/GitHub account
  - Sign in to sync
  - Manual sync
  - Merge conflicts
  - Turn off sync
  - Sync activity

### 24.3 Comments
- **Features:**
  - Comment threads
  - Reply to comments
  - Resolve comments
  - Comment reactions
  - Comment provider API
  - Code review comments

---

## 25. PERFORMANCE FEATURES

### 25.1 Startup Performance
- **Optimizations:**
  - Extension activation
  - Lazy loading
  - Window restore
  - File cache
  - Extension host
  - Code helper processes
- **Settings:**
  - window.restoreWindows
  - extensions.autoUpdate
  - files.watcherExclude
  - search.followSymlinks

### 25.2 Runtime Performance
- **Features:**
  - Extension host process
  - Worker processes
  - File watching optimization
  - Search indexing
  - IntelliSense caching
  - Syntax highlighting optimization
- **Monitoring:**
  - Process Explorer
  - Extension profiling
  - Startup performance
  - Extension bisect
  - Developer tools

### 25.3 Memory Management
- **Features:**
  - Large file handling
  - Memory limits
  - File cache limits
  - Extension memory monitoring
  - Process recycling

---

## APPENDIX A: Configuration Files

### A.1 Core Configuration Files
- `settings.json` - User/workspace settings
- `keybindings.json` - Keyboard shortcuts
- `tasks.json` - Task configurations
- `launch.json` - Debug configurations
- `extensions.json` - Extension recommendations
- `*.code-workspace` - Multi-root workspace
- `*.code-snippets` - User snippets

### A.2 Extension Configuration
- `package.json` - Extension manifest
- `language-configuration.json` - Language config
- `*.tmLanguage.json` - TextMate grammar
- `.vscodeignore` - Extension packaging

### A.3 Other Configuration
- `.editorconfig` - Editor configuration
- `.gitignore` - Git ignore patterns
- `.vscode/` - Workspace settings folder

---

## APPENDIX B: File Extensions Associations

VSCode automatically associates the following file types:
- `.js`, `.mjs`, `.cjs` → JavaScript
- `.ts`, `.tsx` → TypeScript
- `.json`, `.jsonc` → JSON
- `.html`, `.htm` → HTML
- `.css`, `.scss`, `.sass`, `.less` → CSS/Preprocessors
- `.md`, `.markdown` → Markdown
- `.py` → Python
- `.java` → Java
- `.cpp`, `.c`, `.h` → C/C++
- `.cs` → C#
- `.go` → Go
- `.rs` → Rust
- `.php` → PHP
- `.rb` → Ruby
- `.sh`, `.bash` → Shell
- `.ps1` → PowerShell
- `.xml` → XML
- `.yaml`, `.yml` → YAML
- `.dockerfile`, `Dockerfile` → Dockerfile
- And 100+ more...

---

## APPENDIX C: Command Line Interface (CLI)

### C.1 Code CLI Commands
```bash
# Open file/folder
code [file/folder]
code -n [file/folder]  # New window
code -r [file/folder]  # Reuse window

# Diff files
code -d file1 file2

# Install extension
code --install-extension <ext-id>

# Uninstall extension
code --uninstall-extension <ext-id>

# List extensions
code --list-extensions

# Set extensions directory
code --extensions-dir <dir>

# Set user data directory
code --user-data-dir <dir>

# Disable extensions
code --disable-extensions

# Open URL
code --open-url <url>

# Wait for file to close
code -w file

# Locale
code --locale <locale>

# Log level
code --log <level>

# Version
code --version

# Help
code --help
```

---

## APPENDIX D: Extension Contribution Points

Extensions can contribute to VSCode via:
- `commands` - Register commands
- `configuration` - Add settings
- `configurationDefaults` - Default settings
- `keybindings` - Add keyboard shortcuts
- `languages` - Register languages
- `debuggers` - Add debuggers
- `breakpoints` - Breakpoint support
- `grammars` - TextMate grammars
- `themes` - Color themes
- `iconThemes` - File icon themes
- `productIconThemes` - Product icons
- `snippets` - Code snippets
- `jsonValidation` - JSON schemas
- `views` - Custom views
- `viewsContainers` - View containers
- `viewsWelcome` - Welcome content
- `walkthroughs` - Walkthrough content
- `problemMatchers` - Problem matchers
- `problemPatterns` - Problem patterns
- `taskDefinitions` - Task types
- `colors` - Theme colors
- `typescriptServerPlugins` - TS plugins
- `markdown.markdownItPlugins` - Markdown
- `markdown.previewStyles` - MD styles
- `markdown.previewScripts` - MD scripts
- `customEditors` - Custom editors
- `notebooks` - Notebook support
- `notebookRenderer` - Notebook renderers
- `authentication` - Auth providers
- `terminal` - Terminal profiles
- `icons` - Product icons
- `menus` - Context menu items
- `submenus` - Submenus
- `resourceLabelFormatters` - Labels

---

## APPENDIX E: VSCode Extension API Namespaces

- `vscode.commands` - Execute commands
- `vscode.window` - Window interactions
- `vscode.workspace` - Workspace operations
- `vscode.languages` - Language features
- `vscode.extensions` - Extension management
- `vscode.env` - Environment info
- `vscode.debug` - Debugging
- `vscode.tasks` - Task execution
- `vscode.scm` - Source control
- `vscode.comments` - Comments
- `vscode.authentication` - Auth
- `vscode.tests` - Testing
- `vscode.notebooks` - Notebooks
- `vscode.l10n` - Localization
- `vscode.lm` - Language models (proposed)

---

## APPENDIX F: Product Variants

### F.1 VSCode Distributions
- **Visual Studio Code** - Microsoft's branded version
- **VSCodium** - Community build without telemetry
- **Code - OSS** - Open source version
- **VSCode Insiders** - Nightly builds
- **vscode.dev** - Web version
- **github.dev** - GitHub integration
- **VSCode Server** - Remote server

### F.2 Platform Support
- Windows (x64, ARM64)
- macOS (Intel, Apple Silicon)
- Linux (x64, ARM64, ARMhf)
  - .deb packages
  - .rpm packages
  - .tar.gz archives
  - Snap package
  - Flatpak (community)

---

## APPENDIX G: Network & Proxy Settings

- `http.proxy` - HTTP proxy URL
- `http.proxyStrictSSL` - Strict SSL
- `http.proxyAuthorization` - Proxy auth
- `http.proxySupport` - Proxy support mode
- Network egress configuration
- Certificate handling
- Proxy authentication

---

## CONCLUSION

This document represents a comprehensive inventory of Visual Studio Code's features, commands, UI components, and capabilities as of February 2026 (v1.108+). While extensive, VSCode continues to evolve with monthly updates, and extension authors continuously add new capabilities.

For the most current information:
- Visit https://code.visualstudio.com/docs
- Check monthly release notes
- Explore https://code.visualstudio.com/api
- Review https://github.com/microsoft/vscode

**Total Feature Categories Covered:** 25+  
**Total Commands:** 1000+  
**UI Components:** 50+  
**Built-in Languages:** 40+  
**Settings Categories:** 30+
