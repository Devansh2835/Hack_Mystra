// models/AIAssistance.ts
import mongoose from 'mongoose';

const aiAssistanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  },
  question: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  context: {
    code: String,
    error: String,
    lessonStep: Number
  },
  helpful: {
    type: Boolean,
    default: null
  },
  usedHints: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export const AIAssistance = mongoose.models.AIAssistance || mongoose.model('AIAssistance', aiAssistanceSchema);