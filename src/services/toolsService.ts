import ToolModel, { ITool } from '../models/tool';

class ToolsService {
    async getAllTools(): Promise<ITool[]> {
        return await ToolModel.find();
    }

    async getToolById(id: string): Promise<ITool | null> {
        return await ToolModel.findById(id);
    }

    async createTool(toolData: Partial<ITool>): Promise<ITool> {
        const tool = new ToolModel(toolData);
        return await tool.save();
    }

    async updateTool(id: string, toolData: Partial<ITool>): Promise<ITool | null> {
        return await ToolModel.findByIdAndUpdate(id, toolData, { new: true });
    }

    async deleteTool(id: string): Promise<ITool | null> {
        return await ToolModel.findByIdAndDelete(id);
    }
}

export default ToolsService;