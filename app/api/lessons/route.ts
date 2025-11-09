// app/api/lessons/route.ts
import { connectDB } from '@/lib/db';
import { Lesson } from '@/models/Lessons';
import { NextResponse } from 'next/server';

// GET /api/lessons - Get all lessons
export async function GET() {
  try {
    await connectDB();
    
    const lessons = await Lesson.find({ isActive: true })
      .sort({ order: 1 })
      .select('-codingExercise.solution'); // Don't send solution to client

    return NextResponse.json({ lessons });
  } catch (error) {
    console.error('Lessons API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}