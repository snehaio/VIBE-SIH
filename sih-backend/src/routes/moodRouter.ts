import {Router} from "express";
import { findAccomadation } from "../controller/moodController";
import { userMoodValidationRules, validate } from "../validation/validation";

const moodRouter = Router();

moodRouter.get("/mood/destination", userMoodValidationRules(), validate, findAccomadation);


export default moodRouter;