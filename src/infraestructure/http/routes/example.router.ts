import { Router } from "express";



const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,ExampleController.createExample)

export default ExampleRouter