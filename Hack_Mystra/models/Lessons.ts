// models/Lesson.ts
import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  category: {
    type: String,
    enum: ['variables', 'loops', 'functions', 'conditionals', 'arrays', 'objects'],
    required: true
  },
  estimatedTime: {
    type: Number, // in minutes
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  prerequisites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  codingExercise: {
    instructions: String,
    starterCode: String,
    solution: String,
    testCases: [{
      input: String,
      expectedOutput: String,
      description: String
    }]
  },
  miniGame: {
    gameType: String,
    instructions: String,
    targetScore: Number
  },
  rewards: {
    experience: {
      type: Number,
      default: 100
    },
    coins: {
      type: Number,
      default: 50
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export const Lesson = mongoose.models.Lesson || mongoose.model('Lesson', lessonSchema);