import { Tool, ToolModel } from '../models/tool';

class ToolsService {
    async getAllTools(): Promise<Tool[]> {
        return ToolModel.find().exec();
    }

    async addTool(tool: Tool): Promise<Tool> {
        const newTool = new ToolModel(tool);
        return newTool.save();
    }

    async updateTool(id: string, tool: Partial<Tool>): Promise<Tool | null> {
        return ToolModel.findByIdAndUpdate(id, tool, { new: true }).exec();
    }

    async deleteTool(id: string): Promise<Tool | null> {
        return ToolModel.findByIdAndDelete(id).exec();
    }

    async getToolById(id: string): Promise<Tool | null> {
        return ToolModel.findById(id).exec();
    }
}

export default ToolsService;