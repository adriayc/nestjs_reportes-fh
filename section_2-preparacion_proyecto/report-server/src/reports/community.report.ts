import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      {
        columns: [
          { image: 'src/assets/tucan-code-logo.png', width: 50 },
          {
            text: 'Forest Admin Community SAP\n RUT: 44.123.1233\n Camino montaña Km 16\n Telefono: +56 2 23455668',
            alignment: 'center',
          },
        ],
      },
    ],
  };

  return docDefinition;
};
