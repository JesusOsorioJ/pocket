import { join } from 'path';
import fs from 'fs';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';
import { Router } from 'express';

export default function swagger(router: Router): void {
  console.log('\t- Loading swagger document', __dirname);

  try {
    const files = fs.readdirSync(join(__dirname, '../docs/routes'));
    const swaggerDoc = yaml.load(join(__dirname, '../docs/swagger.yml'));

    for (const file of files) {
      const doc = yaml.load(join(__dirname, `../docs/routes/${file}`));

      if ('paths' in doc) {
        swaggerDoc.paths = { ...swaggerDoc.paths, ...doc.paths };
      }
      if ('components' in doc) {
        swaggerDoc.components.schemas = {
          ...swaggerDoc.components.schemas,
          ...doc.components.schemas,
        };
        swaggerDoc.components.responses = {
          ...swaggerDoc.components.responses,
          ...doc.components.responses,
        };
      }
    }

    router.use('/docs', swaggerUI.serve);
    router.get('/docs', swaggerUI.setup(swaggerDoc));
  } catch (err) {
    console.log('\t- Error loading Swagger files .yml :', err);
  }
}
