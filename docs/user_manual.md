# ChatGPT Scrollie Extension - User Manual

## Installation Instructions

### Step 1: Download the Extension Files
1. Download or clone this repository to your computer
2. Extract the files to a folder (e.g., `chatgpt-scrollie-extension`)
3. Make sure you have these files in the folder:
   - `manifest.json`
   - `background.js`
   - `scrollie.js`

### Step 2: Open Chrome Extensions Page
1. Open Google Chrome browser
2. Go to Chrome Extensions page using one of these methods:
   - Type `chrome://extensions/` in the address bar and press Enter
   - Click the three dots menu (⋮) → More Tools → Extensions
   - Use keyboard shortcut: `Ctrl+Shift+E` (Windows) or `Cmd+Shift+E` (Mac)

### Step 3: Enable Developer Mode
1. In the Extensions page, look for the **"Developer mode"** toggle in the top-right corner
2. Click the toggle to turn it **ON** (it should turn blue)
3. You'll see new buttons appear: "Load unpacked", "Pack extension", and "Update"

### Step 4: Load the Extension
1. Click the **"Load unpacked"** button
2. In the file browser dialog:
   - Navigate to the folder where you extracted the extension files
   - Select the folder containing `manifest.json`
   - Click **"Select Folder"** (Windows) or **"Open"** (Mac)

### Step 5: Verify Installation
1. You should see "ChatGPT Scrollie" appear in your extensions list
2. Make sure the toggle switch is **ON** (blue) to enable the extension
3. You should see:
   - Extension name: "ChatGPT Scrollie"
   - Version: "1.0"
   - Status: "On"

## How to Use

### Automatic Operation
The extension works **automatically** - no user interaction required!

1. **Navigate to ChatGPT**: Go to `https://chatgpt.com` or `https://chat.openai.com`
2. **Log in** to your ChatGPT account (if not already logged in)
3. **Wait for the page to load** completely
4. The extension will automatically fix any scrolling issues in the chat sidebar

### Verifying It's Working

1. **Check the chat sidebar**: Look at the left sidebar where your chat history is displayed
2. **Test scrolling**: If you have many conversations, try scrolling through the chat list
3. **Check browser console** (optional):
   - Press `F12` to open Developer Tools
   - Go to the "Console" tab
   - Look for messages like:
     - `[✅ Scrollie] Scroll fixed successfully.` (Success)
     - `[❌ Scrollie] Scrollable element not found.` (Element not found)

### What to Expect
- **Smooth scrolling** in the chat sidebar
- **Better navigation** through your chat history
- **No visual changes** to the interface design
- **Automatic reapplication** when switching between chats

## Troubleshooting

### Extension Not Working?

1. **Check if extension is enabled**:
   - Go to `chrome://extensions/`
   - Make sure "ChatGPT Scrollie" toggle is ON

2. **Refresh ChatGPT page**:
   - Press `F5` or `Ctrl+R` to reload the page
   - The extension should reapply the fixes

3. **Check console for errors**:
   - Press `F12` → Console tab
   - Look for any error messages
   - Look for Scrollie messages

4. **Verify you're on the correct domain**:
   - Extension only works on `chatgpt.com` and `chat.openai.com`
   - Won't work on other websites

### Still Having Issues?

1. **Reinstall the extension**:
   - Remove the extension from Chrome
   - Follow installation steps again

2. **Check Chrome version**:
   - Extension requires Chrome with Manifest V3 support
   - Update Chrome to latest version if needed

3. **Clear browser cache**:
   - Press `Ctrl+Shift+Delete`
   - Clear cached images and files
   - Refresh ChatGPT page

## Uninstalling the Extension

### Method 1: From Extensions Page
1. Go to `chrome://extensions/`
2. Find "ChatGPT Scrollie"
3. Click **"Remove"** button
4. Confirm removal when prompted

### Method 2: From Extension Icon
1. Right-click the extension icon (if pinned to toolbar)
2. Select **"Remove from Chrome"**
3. Confirm removal

## Privacy & Security

- ✅ **No data collection**: Extension doesn't collect or store any personal data
- ✅ **No network requests**: Doesn't send data to external servers
- ✅ **Limited permissions**: Only accesses ChatGPT websites
- ✅ **Open source**: All code is visible and auditable
- ✅ **Local operation**: Everything runs on your computer

## Technical Requirements

- **Browser**: Google Chrome (latest version recommended)
- **Operating System**: Windows, macOS, or Linux
- **Permissions**: Developer mode must be enabled
- **Internet**: Required only to access ChatGPT website

## Support

This extension is designed to be simple and maintenance-free. If you encounter issues:

1. Check the troubleshooting section above
2. Verify your Chrome version is up to date
3. Ensure you're using the extension on supported ChatGPT domains
4. Check the browser console for any error messages

The extension is lightweight and should not affect browser performance or other extensions. 