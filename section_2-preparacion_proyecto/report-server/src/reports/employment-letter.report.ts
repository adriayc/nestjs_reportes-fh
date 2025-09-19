import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 70],
  },
  signature: {
    fontSize: 14,
    bold: true,
    // alignment: 'left',
  },
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles: styles,
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        // style: {
        //   bold: true,
        // },
        style: 'header',
      },
      {
        text: `
        Yo, [Nombre del Empleado] en mi calidad de [Cargo del Empleado] de [Nombre de la Empresa], por medio de la presente certifíco que [Nombre del Empleado] ha sido empleado en nuestra empresa desde el [Fecha de Inicio del Empleado]. \n\n
        Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus labores. \n\n
        La jornada laboral del Sr./Sra. [Nombre del Empleado] es de [Número de Horas] horas semanales, con un horario de [Horario de Trabajo], cumpliedo con las políticas y procedimientos establecidos por al empresa. \n\n
        Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.
        `,
        style: 'body',
      },
      { text: `Atentamente,`, style: 'signature' },
      { text: `[Nombre del Empleado],`, style: 'signature' },
      { text: `[Cargo del Empleado],`, style: 'signature' },
      { text: `[Nombre de la Empresa],`, style: 'signature' },
      { text: `[Fecha de Emisión],`, style: 'signature' },
    ],
  };

  return docDefinition;
};
