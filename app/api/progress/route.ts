// app/api/progress/route.ts
import { connectDB } from '@/lib/db';
import { Progress } from '@/models/Progress';
import { User } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { Lesson } from '@/models/Lessons';

// GET /api/progress - Get user's progress for all lessons
export async function GET() {
  try {
    await connectDB();
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await User.findOne({ clerkId: clerkUser.id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const progress = await Progress.find({ userId: user._id })
      .populate('lessonId', 'title description difficulty category order');

    return NextResponse.json({ progress });
  } catch (error) {
    console.error('Progress API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/progress - Update lesson progress
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { lessonId, status, score, timeSpent, code, passedTests, totalTests, gameScore } = body;

    const user = await User.findOne({ clerkId: clerkUser.id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Find or create progress record
    let progress = await Progress.findOne({ 
      userId: user._id, 
      lessonId 
    });

    const updateData: any = {
      status,
      bestScore: Math.max(progress?.bestScore || 0, score || 0),
      timeSpent: (progress?.timeSpent || 0) + (timeSpent || 0),
      attempts: (progress?.attempts || 0) + 1
    };

    if (status === 'completed') {
      updateData.completedAt = new Date();
      
      // Add to user's completed lessons and give rewards
      const lesson = await Lesson.findById(lessonId);
      if (lesson) {
        user.experience += lesson.rewards.experience;
        user.coins += lesson.rewards.coins;
        await user.save();
      }
    }

    if (code) {
      updateData.$push = {
        codeSubmissions: {
          code,
          passedTests,
          totalTests
        }
      };
    }

    if (gameScore) {
      updateData.$push = {
        gameScores: {
          score: gameScore
        }
      };
    }

    progress = await Progress.findOneAndUpdate(
      { userId: user._id, lessonId },
      updateData,
      { new: true, upsert: true }
    ).populate('lessonId', 'title rewards');

    return NextResponse.json({ progress, user });
  } catch (error) {
    console.error('Update progress error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}