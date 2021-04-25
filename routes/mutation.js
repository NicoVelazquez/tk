import express from 'express';
import asyncHandler from 'express-async-handler';
import {mutationController as detectMutation} from '../controllers';
import validate from "../middleware/validate";
import {mutationValidation as dnaValidation} from '../validators/index';

const mutationRouter = express.Router();

mutationRouter.post('/', validate(dnaValidation),
    asyncHandler(async (req, res, next) => {
        await detectMutation(req, res, next)
    })
);

export default mutationRouter;
