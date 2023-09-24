// app/controller/user.ts

import { Controller } from 'egg';
import * as jwt from 'jsonwebtoken';

export default class UserController extends Controller {
    async login() {
        const { ctx } = this;
        const { username, password } = ctx.request.body;

        // Validate username and password (you can add your authentication logic here)

        if (username || password) {
            const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
            ctx.body = { token };
        } else {
            ctx.status = 401;
            ctx.body = { message: 'Authentication failed' };
        }
    }
}