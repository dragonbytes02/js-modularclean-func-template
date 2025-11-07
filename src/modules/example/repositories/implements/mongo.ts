import type { Example } from "../../domain/entities.js";
import type { DbRepository } from "../interfaces/db.js";

export function mongoRepoFactory():DbRepository{
    function create (example:Example){
        return example
    }
    function update (example:Example){
        return example
    }

    return {
        create,
        update
    }
}