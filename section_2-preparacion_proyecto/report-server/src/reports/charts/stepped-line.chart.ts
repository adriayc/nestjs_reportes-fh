import * as Utils from 'src/helpers/chart-utils';

export const getSteppedLineChart = async (): Promise<string> => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: Utils.numbers({ count: 6, min: -100, max: 100 }),
        borderColor: Utils.NAMED_COLORS.red,
        fill: false,
        stepped: true,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
  };

  return await Utils.chartJsToImage(config);
};
