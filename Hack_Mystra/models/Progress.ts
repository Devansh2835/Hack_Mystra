// models/Progress.ts
import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true
  },
  status: {
    type: String,
    enum: ['not_started', 'in_progress', 'completed'],
    default: 'not_started'
  },
  attempts: {
    type: Number,
    default: 0
  },
  bestScore: {
    type: Number,
    default: 0
  },
  timeSpent: {
    type: Number, // in minutes
    default: 0
  },
  codeSubmissions: [{
    code: String,
    submittedAt: {
      type: Date,
      default: Date.now
    },
    passedTests: Number,
    totalTests: Number
  }],
  gameScores: [{
    score: Number,
    playedAt: {
      type: Date,
      default: Date.now
    }
  }],
  completedAt: Date
}, {
  timestamps: true
});

// Compound index to ensure one progress record per user per lesson
progressSchema.index({ userId: 1, lessonId: 1 }, { unique: true });

export const Progress = mongoose.models.Progress || mongoose.model('Progress', progressSchema);