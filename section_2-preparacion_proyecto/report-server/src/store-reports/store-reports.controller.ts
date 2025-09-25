import { Controller, Get, Param, Res } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';
import type { Response } from 'express';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('orders/:orderId')
  async getOrderReport(
    @Res() response: Response,
    @Param('orderId') orderId: string,
  ) {
    const pdfDoc = await this.storeReportsService.getOrderByIdReport(+orderId);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Order-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('svgs-charts')
  getSvgChart(@Res() response: Response) {
    const pdfDoc = this.storeReportsService.getSvgChart();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'SVG-Chart-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
