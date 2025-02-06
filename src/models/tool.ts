import mongoose, { Schema, Document } from 'mongoose';

export interface ITool extends Document {
    name: string;
    description: string;
    category?: string;  // Making it optional with ?
}

const ToolSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: false }  // Add category field
}, {
    timestamps: true
});

export default mongoose.model<ITool>('Tool', ToolSchema);