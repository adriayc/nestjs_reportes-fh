import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getDonutChart } from './charts/donut.chart';
import { headerSection } from './sections/header.section';
import { getLineChart } from './charts/line.chart';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subTitle?: string;
  topCountries: TopCountry[];
}

export const getStatisticsReport = async (
  options: ReportOptions,
): Promise<TDocumentDefinitions> => {
  const [donutChart, lineChart] = await Promise.all([
    getDonutChart({
      entries: options.topCountries.map((c) => ({
        label: c.country,
        value: c.customers,
      })),
      position: 'left',
    }),
    getLineChart(),
  ]);

  const docDefinition: TDocumentDefinitions = {
    header: headerSection({
      title: options.title ?? 'Estadísticas de clientes',
      subTitle: options.subTitle ?? 'Top 10 países con más clientes',
    }),
    pageMargins: [40, 100, 40, 60],
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: '10 países con más clientes',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                image: donutChart,
                width: 320,
              },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['Pais', 'Clientes'],
                ...options.topCountries.map((c) => [c.country, c.customers]),
              ],
            },
          },
        ],
      },
      {
        image: lineChart,
        width: 500,
        margin: [0, 20],
      },
    ],
  };

  return docDefinition;
};
