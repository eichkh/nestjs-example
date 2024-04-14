import { Config } from 'src/config/interfaces/config.interface';
import { ConfigSchema } from 'src/config/schemas/config.schema';
import validator from 'src/validator/services/validator.service';

export function validateConfig(config: Record<string, any>): Config {
  if (!validator.validate(ConfigSchema, config)) {
    const errors = validator.errorsText(validator.errors);

    throw new Error(`Config validation error: ${errors}`);
  }

  return {
    databaseUrl: config.DATABASE_URL,
    apiVersionPrefix: config.API_VERSION_PREFIX,
  };
}
