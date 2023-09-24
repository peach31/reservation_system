
import { Context } from 'egg';
import * as jwt from 'jsonwebtoken';

export default () => {
    return async (ctx: Context, next: () => Promise<any>) => {
        const token = ctx.get('Authorization');

        if (!token) {
            ctx.status = 401;
            ctx.body = { message: 'Unauthorized' };
            return;
        }

        try {
            const decoded = jwt.verify(token, 'your-secret-key');
            ctx.state.user = decoded;
            await next();
        } catch (error) {
            ctx.status = 401;
            ctx.body = { message: 'Invalid token' };
        }
    };
};