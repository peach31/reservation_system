export const isValidAuthor = (auth) => {
    if (auth) return true;
    return false;
}


export const checkParams = (ctx, scheam, params) => {

    try {
        ctx.validate(scheam, params);
        return null;
    } catch (err) {
        ctx.logger.error('request format error: ', err);
        ctx.body = { code: 400, err };
        return true;
    }
}