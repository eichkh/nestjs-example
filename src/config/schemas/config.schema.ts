export const ConfigSchema = {
  type: 'object',
  properties: {
    DATABASE_URL: {
      type: 'string',
      pattern:
        '^postgresql:\\/\\/[^:]+:[^@]+@[^:]+:[0-9]+\\/[^?]+\\?schema=[^]+$',
    },
    API_VERSION_PREFIX: {
      type: 'string',
      pattern: '^v[0-9]+$',
    },
  },
  allRequired: true,
};
