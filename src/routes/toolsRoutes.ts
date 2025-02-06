import { Router, Application, Request, Response } from 'express';
import toolsController from '../controllers/toolsController';
import ToolsService from '../services/toolsService';

const router = Router();
const toolsService = new ToolsService();

// Define routes directly on the router
router.get('/', toolsController.getAllTools.bind(toolsController));
router.get('/:id', toolsController.getToolById.bind(toolsController));
router.post('/', toolsController.addTool.bind(toolsController));
router.put('/:id', toolsController.updateTool.bind(toolsController));
router.delete('/:id', toolsController.deleteTool.bind(toolsController));

export default router;