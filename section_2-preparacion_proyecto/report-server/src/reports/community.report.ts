import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      // Log - Dirección - Número de orden
      {
        columns: [
          { image: 'src/assets/tucan-code-logo.png', width: 50 },
          {
            text: 'Forest Admin Community SAP\n RUT: 44.123.1233\n Camino montaña Km 16\n Telefono: +56 2 23455668',
            alignment: 'center',
          },
          {
            width: 140,
            alignment: 'right',
            layout: 'borderBlue',
            table: {
              widths: ['auto'],
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['No.', '123-456'],
                        ['Fecha', '2025-10-27'],
                        ['Versión', '2025-001'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },

      // Horizontal line
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3a4546',
          },
        ],
      },

      // Detalles del cliente
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Datos del cliente',
                color: 'white',
                fillColor: '#5775e1',
                colSpan: 4,
                // border: [false, false, false, false],
              },
              {},
              {},
              {},
            ],

            // Razon social
            [
              {
                text: 'Razon social',
                color: 'white',
                fillColor: '#343a40',
                bold: true,
              },
              {
                text: 'Nombre de la empresa',
                fillColor: 'white',
              },
              {
                text: 'Dirección',
                color: 'white',
                fillColor: '#343a40',
                bold: true,
              },
              {
                text: 'Razon social',
                fillColor: 'white',
              },
            ],
            [
              {
                text: 'RUT',
                color: 'white',
                fillColor: '#343a40',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
              {
                text: 'Teléfono',
                color: 'white',
                fillColor: '#343a40',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
            ],
            [
              {
                text: 'Giro',
                color: 'white',
                fillColor: '#343a40',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
              {
                text: 'Condición de pago',
                color: 'white',
                fillColor: '#343a40',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
            ],
          ],
        },
      },
    ],
  };

  return docDefinition;
};
