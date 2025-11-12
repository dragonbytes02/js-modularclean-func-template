import { Router } from "express";



const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,createExampleControllerBuild )

export default ExampleRouter
