import { Router } from 'express'
import * as paintController from './controllers/paintController'
import * as staffController from './controllers/staffController'
import * as statusController from './controllers/statusController'
import { loginUser } from './controllers/loginController'

const router = Router()
const BASE_URL = '/api/v1'

// Staff routes
router
  .route(`${BASE_URL}/staff`)
  .get(staffController.getAllStaff)
  .post(staffController.createStaff)
router
  .route(`${BASE_URL}/staff/:id`)
  .get(staffController.getOneStaff)
  .patch(staffController.updateStaff)

// Paint routes
router.get(`${BASE_URL}/paints/:color`, paintController.getSumByColor)
router
  .route(`${BASE_URL}/paints`)
  .get(paintController.getAllPaintSums)
  .post(paintController.createPaintUse)

// Status routes
router.get(`${BASE_URL}/status`, statusController.getAllStatus)
router.patch(`${BASE_URL}/status/:color`, statusController.updateStatus)

// Login
router.post(`${BASE_URL}/login`, loginUser)

// Null route
router.all(`${BASE_URL}/*`, (_, res) => res.status(404).send('Invalid route.'))
export default router
