# ChatGPT Scrollie Extension

> **Automatically fix scrolling issues in ChatGPT's chat sidebar and project folders for seamless navigation through your conversations and projects.**

## 🎯 Project Goal

The **ChatGPT Scrollie Extension** is a lightweight Chrome browser extension that solves common usability problems: **difficulty scrolling through ChatGPT's chat sidebar and project folders** when you have many conversations and projects.

### What Problem Does This Solve?

Have you ever noticed that ChatGPT's interface becomes hard to scroll through, especially in the chat list sidebar and project folders when you have lots of conversations and projects? This extension automatically fixes these scrolling issues, giving you smooth navigation through your entire chat history and project collections.

## ✨ Key Features

- 🔄 **Automatic Operation** - Works silently in the background, no user interaction needed
- ⚡ **Instant Fix** - Applies scrolling improvements as soon as ChatGPT loads
- 🎯 **Smart Detection** - Monitors page changes and reapplies fixes when needed
- 📁 **Dual Support** - Fixes scrolling in both chat sidebar and project folders
- 🔒 **Privacy-First** - No data collection, works entirely on your computer
- 🪶 **Lightweight** - Minimal impact on browser performance

## 🛠 How It Works

The extension automatically:

1. **Detects** the ChatGPT chat sidebar and project folder containers
2. **Applies** CSS fixes to enable proper vertical scrolling
3. **Monitors** for page changes and reapplies fixes as needed
4. **Provides** console feedback for debugging (optional)

### Technical Details

- **Target Element**: `#thread > div > div.flex.basis-auto.flex-col.grow`
- **CSS Fixes Applied**:
  - `overflowY: 'scroll'` - Enables vertical scrolling
  - `maxHeight: '100vh'` - Limits height to viewport
  - `paddingRight: '8px'` - Improves visual spacing

## 🚀 Quick Start

### 📋 Requirements

- **Google Chrome** (latest version recommended)
- **Developer Mode** enabled in Chrome Extensions
- Access to **ChatGPT.com** or **chat.openai.com**

### 📥 Installation

**For detailed installation instructions, please see the [User Manual](docs/user_manual.md).**

**Quick Setup:**
1. Download or clone this repository
2. Open Chrome → `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder
5. Navigate to ChatGPT and enjoy smooth scrolling!

## 📖 Documentation

- **[📋 User Manual](docs/user_manual.md)** - Complete installation and usage guide
- **[🎯 Project Goal](docs/project_goal.md)** - Detailed project objectives and technical specs
- **[📊 Current Progress](docs/current_progress.md)** - Development status and updates

## 🌐 Supported Websites

- ✅ `https://chatgpt.com/*`
- ✅ `https://chat.openai.com/*`

## 🔧 Usage

The extension works **automatically** once installed:

1. Navigate to ChatGPT
2. Log in to your account
3. The extension automatically fixes any scrolling issues
4. Enjoy smooth navigation through your chat history and project folders!

## 🔐 Privacy & Security

- ✅ **No data collection** - Extension doesn't store or transmit any personal data
- ✅ **Local operation** - Everything runs on your computer
- ✅ **Limited permissions** - Only accesses ChatGPT websites
- ✅ **Open source** - All code is visible and auditable

## 🐛 Troubleshooting

If you experience issues:

1. **Check extension is enabled**: Go to `chrome://extensions/` and ensure the toggle is ON
2. **Refresh ChatGPT**: Press `F5` to reload the page
3. **Check console**: Press `F12` → Console tab for any error messages
4. **Verify domain**: Make sure you're on `chatgpt.com` or `chat.openai.com`

For detailed troubleshooting steps, see the [User Manual](docs/user_manual.md#troubleshooting).

## 📁 Project Structure

```
chatgpt-scrollie-extension/
├── README.md              # This file
├── manifest.json          # Extension configuration
├── background.js          # Service worker (minimal)
├── scrollie.js           # Main content script
├── icon-small.png        # Extension icon
├── LICENSE               # MIT License
└── docs/                 # Documentation
    ├── user_manual.md    # Installation & usage guide
    ├── project_goal.md   # Project objectives
    └── current_progress.md # Development status
```

## 🤝 Contributing

This is a simple, focused extension designed to solve a specific problem. If you encounter issues or have suggestions:

1. Check the [User Manual](docs/user_manual.md) for troubleshooting
2. Ensure you're using the latest version of Chrome
3. Verify the extension works on the supported ChatGPT domains

## 📄 License

This project is open source and available for personal use. The extension is designed to be maintenance-free and lightweight.

---

**🎉 Ready to improve your ChatGPT experience?** 
Check out the [User Manual](docs/user_manual.md) to get started! 