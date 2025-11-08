// app/api/lessons/[id]/route.ts
import { connectDB } from '@/lib/db';
import { Lesson } from '@/models/Lessons';
import { NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

// GET /api/lessons/[id] - Get single lesson
export async function GET(request: Request, { params }: Params) {
  try {
    await connectDB();
    
    const lesson = await Lesson.findById(params.id)
      .select('-codingExercise.solution'); // Don't send solution to client

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }

    return NextResponse.json({ lesson });
  } catch (error) {
    console.error('Lesson API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}