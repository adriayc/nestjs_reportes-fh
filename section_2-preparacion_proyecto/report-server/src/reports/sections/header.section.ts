import type { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

// Logo
const logo: Content = {
  image: 'src/assets/tucan-code-logo.png', // fn - File System
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

// const currentDate: Content = { // Error
const currentDate = {
  text: DateFormatter.getDDMMMMYYYY(new Date()),
  alignment: 'right',
  margin: [20, 40],
  // width: 150,
  width: 100,
  fontSize: 10,
  // };
} as Content;

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showLogo = true, showDate = true } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate ? currentDate : '';

  const headerSubTitle: Content = subTitle
    ? {
        text: subTitle,
        alignment: 'center',
        margin: [0, 2, 0, 0],
        style: {
          // bold: true,
          fontSize: 16,
        },
      }
    : '';

  const headerTitle: Content = title
    ? {
        stack: [
          // second column consists of paragraphs
          {
            text: title,
            alignment: 'center',
            margin: [0, 15, 0, 0],
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          headerSubTitle,
        ],
        // text: title,
        // style: {
        //   bold: true,
        // },
      }
    : '';

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
