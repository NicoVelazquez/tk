import joi from '@hapi/joi';

const validDNARegex = /^[ATCG]{4,16}$/;
const dnaValidation = {
  body: {
    dna: joi.array().items(joi.string().regex(validDNARegex)).required()
  },
};

export default dnaValidation;
