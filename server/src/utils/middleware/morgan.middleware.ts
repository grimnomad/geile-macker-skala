import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as morgan from 'morgan';

@Injectable()
class MorganMiddleware implements NestMiddleware {
  private readonly logger = new Logger(MorganMiddleware.name);

  use(req: Request, res: Response, next: NextFunction): void {
    morgan('dev', {
      stream: { write: (message) => this.logger.debug(message) }
    })(req, res, next);
  }
}

export { MorganMiddleware };
