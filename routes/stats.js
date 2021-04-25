import express from 'express';
import asyncHandler from "express-async-handler";
import {statsController as getStats} from "../controllers";


const statsRouter = express.Router();

statsRouter.get('/',
    asyncHandler(async (req, res, next) => {
        await getStats(req, res, next)
    })
);


export default statsRouter;


