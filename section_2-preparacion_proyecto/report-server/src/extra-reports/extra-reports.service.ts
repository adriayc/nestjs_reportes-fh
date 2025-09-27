import fs from 'fs';
import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHtmlContent } from 'src/helpers/html-to-pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/reports/sections/header.section';
import { footerSection } from 'src/reports/sections/footer.section';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  getHtmlReport() {
    // const html = fs.readFileSync('src/reports/html/basic-01.html', 'utf-8');
    // const html = fs.readFileSync('src/reports/html/basic-02.html', 'utf-8');
    const html = fs.readFileSync('src/reports/html/basic-03.html', 'utf-8');

    const content = getHtmlContent(html, {
      client: 'Adriano Ayala',
      title: 'Curso de Nest.js',
    });

    const docDefinition: TDocumentDefinitions = {
      header: headerSection({
        title: 'HTML to PDFMake',
        subTitle: 'Convertir HTML a PDFMake',
      }),
      footer: footerSection,
      pageMargins: [40, 110, 40, 60],
      //   content: ['Hola mundo', content],
      content: content,
    };

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
