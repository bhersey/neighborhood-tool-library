import { Schema, model } from 'mongoose';

interface Tool {
  name: string;
  description: string;
  available: boolean;
}

const toolSchema = new Schema<Tool>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  available: { type: Boolean, default: true }
});

const ToolModel = model<Tool>('Tool', toolSchema);

export { Tool, ToolModel };