import Ajv2019 from 'ajv/dist/2019';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import addKeywords from 'ajv-keywords';

const validator = new Ajv2019({
  allErrors: true,
});

addKeywords(validator);
addFormats(validator);
addErrors(validator, { singleError: false });

export default validator;
