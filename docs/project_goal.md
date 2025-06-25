# ChatGPT Scrollie Extension - Project Goal

## Purpose

The ChatGPT Scrollie Extension is a browser extension designed to automatically fix scrolling issues within ChatGPT chat lists, specifically targeting the chat sidebar interface problems that can occur on ChatGPT.com and OpenAI's chat interface.

## What It Does

### Core Functionality
The extension automatically applies CSS fixes to enable proper scrolling in the ChatGPT chat thread list by:

1. **Targeting the chat container**: Identifies the specific DOM element that contains the chat threads (`#thread > div > div.flex.basis-auto.flex-col.grow`)

2. **Applying scroll fixes**: Modifies the element's CSS properties to:
   - Enable vertical scrolling (`overflowY: 'scroll'`)
   - Set maximum height to viewport height (`maxHeight: '100vh'`)
   - Add padding for better UX (`paddingRight: '8px'`)

3. **Dynamic monitoring**: Uses a MutationObserver to detect DOM changes and reapply fixes as needed when the interface updates

### Technical Architecture

- **Manifest Version**: 3 (modern Chrome extension format)
- **Content Script**: Runs on ChatGPT domains after DOM is loaded
- **Background Script**: Minimal service worker (required by manifest v3)
- **Permissions**: Limited to ChatGPT domains only for security

### Target Domains
- `https://chatgpt.com/*`
- `https://chat.openai.com/*`

## Problem Solved

This extension addresses a common UX issue where the ChatGPT chat list sidebar becomes difficult to scroll through, particularly when users have many conversations. The fix ensures users can always scroll through their chat history smoothly.

## User Experience
- **Automatic**: No user interaction required
- **Transparent**: Works silently in the background
- **Immediate**: Applies fixes as soon as the page loads and when content changes
- **Safe**: Only affects specific ChatGPT interface elements

## Development Notes
The extension includes Polish language console logging for debugging purposes, indicating it may have been developed by a Polish-speaking developer or for a Polish-speaking user base. 