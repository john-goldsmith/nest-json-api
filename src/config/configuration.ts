export default () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  database: {
    postgres: {
      // cache: process.env.TYPEORM_CACHE,
      // cacheAlwaysEnabled: process.env.TYPEORM_CACHE_ALWAYS_ENABLED,
      // cacheDuration: process.env.TYPEORM_CACHE_DURATION,
      // cacheOptions: process.env.TYPEORM_CACHE_OPTIONS,
      connection: process.env.TYPEORM_CONNECTION || 'postgres',
      database: process.env.TYPEORM_DATABASE || 'nest_development',
      // debug: process.env.TYPEORM_DEBUG,
      // driverExtra: process.env.TYPEORM_DRIVER_EXTRA,
      // dropSchema: process.env.TYPEORM_DROP_SCHEMA,
      entities: process.env.TYPEORM_ENTITIES || 'dist/**/*.entity.js',
      // entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
      // entityPrefix: process.env.TYPEORM_ENTITY_PREFIX,
      host: process.env.TYPEORM_HOST || 'postgres', // Assumes Docker Compose, otherwise use 'localhost'
      // logger: process.env.TYPEORM_LOGGER,
      logging: process.env.TYPEORM_LOGGING || true,
      // maxQueryExecutionTime: process.env.TYPEORM_MAX_QUERY_EXECUTION_TIME,
      migrations: process.env.TYPEORM_MIGRATIONS || 'dist/migrations/*.js',
      migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR || 'src/migrations',
      // migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN,
      migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME || 'migrations',
      password: process.env.TYPEORM_PASSWORD,
      port: process.env.TYPEORM_PORT || 5432,
      // schema: process.env.TYPEORM_SCHEMA,
      // sid: process.env.TYPEORM_SID,
      // subscribers: process.env.TYPEORM_SUBSCRIBERS,
      // subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR,
      synchronize: process.env.TYPEORM_SYNCHRONIZE || false,
      // url: process.env.TYPEORM_URL,
      username: process.env.TYPEORM_USERNAME || 'postgres',
      // uuidExtension: process.env.TYPEORM_UUID_EXTENSION
    }
  },
  secrets: {
    vault: {}
  },
  cache: {
    redis: {}
  }
})
