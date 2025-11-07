import type { Example } from "../../domain/entities.js";
import type { DbRepository } from "../../repositories/interfaces/db.js";
import type { CreateExamepleService } from "../types/types.js";


export function CreateExampleFactory(dbRepo:DbRepository):CreateExamepleService{
    return function (example:Example):Example{
        
        return dbRepo.create(example)
    }
}