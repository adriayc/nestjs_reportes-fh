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
    ],
  };

  return docDefinition;
};
