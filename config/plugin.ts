import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  graphqlHttp: {
    enable: true,
    package: 'egg-graphql-http',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  swaggerdoc: {
    enable: true,
    package: 'y-egg-swagger-doc',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  }
};

export default plugin;
