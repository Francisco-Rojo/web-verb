import express from 'express'
import verbController from '../controllers/index.js'

const router = express.Router()

router
    .get('/', verbController.getVerbs)
    .get('/verbs-list', verbController.verbsList)
    .get('/guide', verbController.guide )
    .get('/download-pdf', verbController.downloadList)
    .post('/', verbController.postVerb)

export default router
 