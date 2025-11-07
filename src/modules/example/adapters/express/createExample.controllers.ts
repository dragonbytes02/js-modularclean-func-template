import type { Request, Response , NextFunction } from "express";
import type { CreateExamepleService } from "../../app/types/types.js";


export function exampleControllerFactory(service:CreateExamepleService){

    return async function (req:Request, res:Response, next:NextFunction){
        
        try {
            
            const result = service({id:1, name:"test"})

            res.status(200).send("create")
            
        } catch (error) {
            res.status(500).send("errror")
        }
        
    }   


}
    
  

