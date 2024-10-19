# Chatgpt response to docx extension

![Version](https://img.shields.io/badge/version-1.0-blue)

## Project Overview

Welcome to the **Chat GPT Exporter**! This extension allows users to easily export responses from ChatGPT into a well-formatted Word document (`.docx`). Designed with a focus on user experience, it supports headings, bullet points, and standard text formatting, making it ideal for those who want to keep a record of their conversations in a structured manner.

## Features

- **Export to Word**: Download ChatGPT responses as `.docx` files with proper formatting.
- **Text Formatting**: Supports various text formats, including:
  - Headings
  - Bullet points
  - Normal text
- **User-Friendly Interface**: Simple export button next to each response for quick access.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Contributing](#contributing)
- [Contact](#contact)

## Demo

![Image](https://raw.githubusercontent.com/ElbinBinil/ChatGPT-exporter/refs/heads/main/demoimage.png)

## Installation

### Manual Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/elbinbinil/ChatGPT-exporter.git
   ```
2. Open Microsoft Edge (or Google Chrome).
3. Navigate to `edge://extensions` (or `chrome://extensions`).
4. Enable **Developer mode** (toggle in the top right corner).
5. Click **Load unpacked** and select the folder where the extension files are located.

### Requirements

- Microsoft Edge or Google Chrome (latest version recommended).

## Usage

1. Once installed, navigate to a page with ChatGPT responses.
2. Look for the export button (📝) next to each response.
3. Click the button to download the response as a Word document.

## Code Explanation

### Key Files

- **manifest.json**: Configuration file that defines extension properties and permissions.
- **background.js**: Manages the core functionality of the extension.
- **content.js**: Interacts with the webpage to inject export buttons.
- **popup.html**: User interface shown during interactions with the extension.

### Code Breakdown

1. **Manifest File**: Metadata and permissions for the extension.

   ```json
   {
     "manifest_version": 3,
     "name": "Export to Word",
     "version": "1.0",
     "permissions": ["activeTab"],
     "action": {
       "default_popup": "popup.html"
     }
   }
   ```

2. **Creating the Word Document**:

   ```javascript
   function createDocx(title, text) {
     const docContent = [];
     const lines = text.split("\n");

     lines.forEach((line) => {
       // Check for headings
       if (line.trim().startsWith("## ")) {
         docContent.push(/* Heading1 formatting */);
       } else if (line.trim().startsWith("### ")) {
         docContent.push(/* Heading2 formatting */);
       } else if (line.trim().startsWith("* ")) {
         docContent.push(/* Bullet point formatting */);
       } else if (line.trim() === "") {
         docContent.push(new Paragraph({ children: [] })); // Empty line
       } else {
         docContent.push(/* Normal text formatting */);
       }
     });
   }
   ```

3. **Injecting Export Buttons**:
   ```javascript
   function addExportButtons() {
     const responses = document.querySelectorAll(".result-streaming, .result");
     responses.forEach((response) => {
       if (!response.querySelector(".export-btn")) {
         const exportBtn = document.createElement("button");
         exportBtn.innerText = "📝";
         exportBtn.className = "export-btn";
         exportBtn.onclick = () => exportToWord(response.innerText);
         response.appendChild(exportBtn);
       }
     });
   }
   ```

## Contributing

We welcome contributions from developers of all levels! If you're interested in collaborating, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Make your changes** and commit them (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Open a pull request**.

## Contact

For any questions or suggestions, please open an issue or contact me at [elbinbinil@gmail.com](elbinbinil@gmail.com). I’d love to hear your thoughts!

---

Thank you for your interest in the Chrome Export to Word Extension! Your contributions and feedback will help enhance this project!
