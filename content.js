// Constants for size values and alignments
const TITLE_SIZE = 48;
const HEADING_SIZE_1 = 36;
const HEADING_SIZE_2 = 32;
const BULLET_POINT_SIZE = 24;
const NUMBERED_POINT_SIZE = 24;
const NORMAL_TEXT_SIZE = 24;

// Function to generate and download a formatted docx file
function createDocx(title, text) {
  if (window.docx) {
    const { Document, Packer, Paragraph, TextRun } = window.docx;

    const docContent = [];
    const lines = text.split("\n");

    lines.forEach((line) => {
      // Handle headings
      if (line.trim().startsWith("## ")) {
        docContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: line.replace("## ", ""),
                bold: true,
                size: TITLE_SIZE,
              }),
            ],
            heading: "Heading1",
          })
        );
      } else if (line.trim().startsWith("### ")) {
        docContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: line.replace("### ", ""),
                bold: true,
                size: HEADING_SIZE_1,
              }),
            ],
            heading: "Heading2",
          })
        );
      }
      // Handle unordered bullet points
      else if (line.trim().startsWith("- ")) {
        docContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: line.replace("- ", ""),
                size: BULLET_POINT_SIZE,
              }),
            ],
            bullet: {
              level: 0,
              type: "square", // Set type to "square" for square bullets
            },
            spacing: { after: 100 }, // Reduced spacing after bullet points
          })
        );
      }
      // Handle ordered bullet points
      else if (/^\d+\.\s/.test(line.trim())) {
        docContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: line.replace(/^\d+\.\s/, ""),
                size: NUMBERED_POINT_SIZE,
              }),
            ],
            bullet: { level: 1 }, // Ordered bullet using the same bullet property
            spacing: { after: 100 }, // Reduced spacing after numbered points
          })
        );
      }
      // Handle normal paragraphs and line breaks
      else if (line.trim() === "") {
        docContent.push(new Paragraph({ children: [] })); // Empty line
      } else {
        docContent.push(
          new Paragraph({
            children: [new TextRun({ text: line, size: NORMAL_TEXT_SIZE })],
            spacing: { after: 100 }, // Reduced spacing for normal text
          })
        );
      }
    });

    // Create a new Document with sections
    const doc = new Document({
      sections: [
        {
          properties: {
            // Set document properties here, like margins
            type: "default",
            footer: {},
            header: {},
          },
          children: docContent,
        },
      ],
    });

    Packer.toBlob(doc)
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${title}.docx`;
        link.click();
      })
      .catch((error) => {
        alert("Failed to generate the docx file. Please try again.");
        console.error("Failed to generate the docx file", error);
      });
  } else {
    console.error("docx library not loaded");
  }
}

// Inject Export Button After Each Response
function addExportButtons() {
  const responses = document.querySelectorAll(".result-streaming, .result");

  responses.forEach((response, index) => {
    if (!response.querySelector(".export-btn")) {
      const exportBtn = document.createElement("button");
      exportBtn.innerText = "📝";
      exportBtn.className = "export-btn";
      exportBtn.style.marginTop = "10px";
      exportBtn.ariaLabel = `Export response ${index + 1} to Word`;
      exportBtn.onclick = () => exportToWord(response.innerText, index);

      response.appendChild(exportBtn);
    }
  });
}

// Monitor for changes in ChatGPT responses to add export buttons
const observer = new MutationObserver(addExportButtons);
observer.observe(document.body, { childList: true, subtree: true });

// Function to call the export logic
function exportToWord(text, index) {
  const title = `ChatGPT_Response_${index + 1}`;
  createDocx(title, text);
}
