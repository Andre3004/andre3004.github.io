const jsPDF = require('jspdf');
const html2canvas = require('html2canvas');

export function downloadHtmlAsPdf() {
  const pdf = new jsPDF();
  const element = document.getElementById('main');
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('test.pdf');
  });
}