import { Request, Response } from 'express';
import ToolsService from '../services/toolsService';

class ToolsController {
  private toolsService: ToolsService;

  constructor() {
    this.toolsService = new ToolsService();
  }

  async getToolById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const tool = await this.toolsService.getToolById(id);
    res.json(tool);
  }

  async getAllTools(req: Request, res: Response): Promise<void> {
    const tools = await this.toolsService.getAllTools();
    res.json(tools);
  }

  async addTool(req: Request, res: Response): Promise<void> {
    const tool = req.body;
    const newTool = await this.toolsService.addTool(tool);
    res.status(201).json(newTool);
  }

  async updateTool(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const tool = req.body;
    const updatedTool = await this.toolsService.updateTool(id, tool);
    res.json(updatedTool);
  }

  async deleteTool(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deletedTool = await this.toolsService.deleteTool(id);
    res.json(deletedTool);
  }
}

export default new ToolsController();