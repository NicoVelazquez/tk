import joi from '@hapi/joi';

const validate = (validateCheck) => (req, res, next) => {
    const expectedKeys = Object.keys(validateCheck);
    const objectValidate = expectedKeys.reduce((accum, curr) => {
        const acc = accum;
        acc[curr] = req[curr];
        return acc;
    }, {});
    const validateStatus = joi.validate(objectValidate, validateCheck);
    if (validateStatus.error) {
        const responseMessage = {
            message: validateStatus.error.details[0].message.replace(/"/g, ''),
        };
        res.status(400).json(responseMessage);
    } else
        next();
};

export default validate;
