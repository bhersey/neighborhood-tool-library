import { Router, Application, Request, Response } from 'express';
import toolsController from '../controllers/toolsController';
import ToolsService from '../services/toolsService';

const router = Router();
const toolsService = new ToolsService();

export function setRoutes(app: Application) {
    app.use('/api/tools', router);
    router.get('/tools', toolsController.getAllTools.bind(toolsController));
    router.get('/tools/:id', toolsController.getToolById.bind(toolsController));
    router.post('/tools', toolsController.addTool.bind(toolsController));
    router.put('/tools/:id', toolsController.updateTool.bind(toolsController));
    router.delete('/tools/:id', toolsController.deleteTool.bind(toolsController));
}

export default router;