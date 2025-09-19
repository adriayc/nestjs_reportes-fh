import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

const styles: StyleDictionary = {
  header: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20],
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
  footer: {
    fontSize: 10,
    italics: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
};

// Logo
const logo: Content = {
  image: 'src/assets/tucan-code-logo.png', // fn - File System
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles: styles,
    pageMargins: [40, 60, 40, 60],

    header: {
      //   columns: ['1', '2', '3'],
      columns: [logo, { text: `${new Date()}` }],
      alignment: 'right',
      margin: [20, 20],
    },

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

    footer: {
      text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
      style: 'footer',
    },
  };

  return docDefinition;
};
