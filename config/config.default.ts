import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'reversiont api';

  // add your egg config in here
  config.middleware = []; // 后期校验token等信息

  // 跨域
  config.cors = {
    origin: '*',
  };
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'reservation api',
      description: 'swagger-ui for reservation api',
      version: '1.0.0',
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  }
  // 安全
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      useSession: true,
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };


  config.mongoose = {
    client: {
      url: 'mongodb://localhost:/egg-reservation',
    },
  };
  config.graphqlHttp = {
    schema: 'app/graphql/schema.graphql', // 指定你的 GraphQL Schema 文件路径
  };
  config.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
  };


  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};
