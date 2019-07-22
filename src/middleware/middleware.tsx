import { Middleware } from 'redux';

export const dontLoadGameDataTwice: Middleware = api => next => action => {
    return next(action);
};
