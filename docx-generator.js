import { Document, Packer, Paragraph, TextRun } from "docx";

function createDocx(title, text) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: title,
                bold: true,
              }),
              new Paragraph(text),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.docx`;
    link.click();
  });
}
