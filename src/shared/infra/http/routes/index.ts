import { Router } from 'express';

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({message: "Bora pro projeeetinho"})
})



export default routes
