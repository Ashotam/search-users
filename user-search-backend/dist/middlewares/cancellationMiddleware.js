"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancellationMiddleware = void 0;
const cancellationMiddleware = (req, res, next) => {
    const cancelToken = setTimeout(() => {
        res.status(408).json({ message: 'Request timed out' });
    }, 3000);
    res.on('finish', () => {
        clearTimeout(cancelToken);
    });
    next();
};
exports.cancellationMiddleware = cancellationMiddleware;
