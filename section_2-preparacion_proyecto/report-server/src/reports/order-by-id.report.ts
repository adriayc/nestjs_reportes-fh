import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { footerSection } from './sections/footer.section';
import { CurrencyFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 100,
  height: 30,
  margin: [10, 30],
};

const styles: StyleDictionary = {
  header: {
    fontSize: 20,
    bold: true,
    margin: [0, 30, 0, 0],
  },
  subHeader: {
    fontSize: 16,
    bold: true,
    margin: [0, 20, 0, 0],
  },
};

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    header: logo,
    footer: footerSection,
    pageMargins: [40, 60, 40, 60],
    styles: styles,
    content: [
      // Headers
      {
        text: 'Tucan Code',
        style: 'header',
      },

      // Address y número recibo
      {
        columns: [
          {
            text: `15 Montgomery Str, Suite 100, \nOttawa ON K2Y 9X1, CANADA \nBN: 12783671823 \nhttps://devtalles.com`,
            alignment: 'left',
            bold: true,
          },
          {
            text: [
              {
                text: 'Recibo No#: 10255\n',
                bold: true,
              },
              `Fecha del recibo: 11 de julio de 2021 \nPagar antes de: 18 de mayo de 2024`,
            ],
            alignment: 'right',
          },
        ],
      },

      // QR (resized )
      { qr: 'https://devtalles.com', fit: 75, alignment: 'right' },

      // Direccion del cliente
      {
        text: [
          {
            text: 'Cobrar a:\n',
            style: 'subHeader',
          },
          `Razón Social: Richter Supermarkt \nMichael Holz \nGrenzacherweg 237`,
        ],
      },

      // Tabla del detalle de la orden
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: [50, '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],
            [
              '1',
              'Product 1',
              '1',
              '100',
              {
                text: CurrencyFormatter.formatCurrency(100),
                alignment: 'right',
              },
            ],
            [
              '2',
              'Product 2',
              '2',
              '200',
              {
                text: CurrencyFormatter.formatCurrency(400),
                alignment: 'right',
              },
            ],
            [
              '3',
              'Product 3',
              '3',
              '300',
              {
                text: CurrencyFormatter.formatCurrency(1650),
                alignment: 'right',
              },
            ],
          ],
        },
      },

      // Salto de línea
      '\n',

      // Totales
      {
        columns: [
          { width: '*', text: '' },
          {
            width: 'auto',
            layout: 'noBorders',
            table: {
              body: [
                [
                  'Subtotal',
                  {
                    text: CurrencyFormatter.formatCurrency(120),
                    alignment: 'right',
                  },
                ],
                [
                  { text: 'Total', bold: true },
                  {
                    text: CurrencyFormatter.formatCurrency(150),
                    alignment: 'right',
                    bold: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  };
};
