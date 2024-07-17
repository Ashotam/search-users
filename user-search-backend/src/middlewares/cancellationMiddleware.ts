import { Request, Response, NextFunction } from 'express';

export const cancellationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const cancelToken = setTimeout(() => {
    res.status(408).json({ message: 'Request timed out' });
  }, 3000);

  res.on('finish', () => {
    clearTimeout(cancelToken);
  });

  next();
};