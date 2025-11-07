import type {Request, Response, nextFunction} from "express"
import { exampleControllerFactory } from "./adapters/express/createExample.controllers.js";
import { CreateExampleFactory } from "./app/services/CreateExample.js";
import { mongoRepoFactory } from "./repositories/implements/mongo.js";




export function createExampleControllerBuild (req:Request, res:Response, next:nextFunction){
    const mongoRepo = mongoRepoFactory()
    const service = CreateExampleFactory(mongoRepo)
    const controller = exampleControllerFactory(service)
    return controller(req, res, next)
}