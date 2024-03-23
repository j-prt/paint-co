import { Router } from 'express'
import * as paintController from './controllers/paintController'
import * as staffController from './controllers/staffController'
import * as statusController from './controllers/statusController'

const router = Router()
const BASE_URL = '/api/v1'

// Staff routes
router
  .route(`${BASE_URL}/staff`)
  .get(staffController.getAllStaff)
  .post(staffController.createStaff)
  .patch(staffController.updateStaff)
router.get(`${BASE_URL}/staff/:id`, staffController.getOneStaff)

// Paint routes
router.get(`${BASE_URL}/paints/:color`, paintController.getSumByColor)
router
  .route(`${BASE_URL}/paints`)
  .get(paintController.getAllPaintSums)
  .post(paintController.createPaintUse)

// Status routes
export default router
