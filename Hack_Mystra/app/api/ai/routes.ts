// app/api/ai/route.ts
import { connectDB } from '@/lib/db';
import { AIAssistance } from '@/models/AIAssistance';
import { User } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';

// GET /api/ai - Get user's AI assistance history
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

    const aiAssistance = await AIAssistance.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .limit(50);

    return NextResponse.json({ 
      success: true,
      aiAssistance,
      count: aiAssistance.length 
    });
  } catch (error) {
    console.error('AI assistance GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AI assistance history' },
      { status: 500 }
    );
  }
}

// POST /api/ai - Create new AI assistance request
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { question, lessonId, context, usedHints = 0 } = body;

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const user = await User.findOne({ clerkId: clerkUser.id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // TODO: Integrate with actual AI service (OpenAI, etc.)
    // For now, we'll create a mock response
    const mockAIResponse = `I understand you're asking about: "${question}". This is a great question for learning programming! Here's some helpful guidance...`;

    const aiAssistance = await AIAssistance.create({
      userId: user._id,
      lessonId: lessonId || null,
      question,
      response: mockAIResponse,
      context: context || {},
      usedHints
    });

    console.log('✅ AI assistance created for user:', user.email);

    return NextResponse.json({ 
      success: true,
      aiAssistance,
      response: mockAIResponse
    });
  } catch (error) {
    console.error('AI assistance POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create AI assistance' },
      { status: 500 }
    );
  }
}

// PUT /api/ai - Update AI assistance feedback
export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { assistanceId, helpful } = body;

    if (!assistanceId || helpful === undefined) {
      return NextResponse.json({ error: 'assistanceId and helpful are required' }, { status: 400 });
    }

    const user = await User.findOne({ clerkId: clerkUser.id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const aiAssistance = await AIAssistance.findOneAndUpdate(
      { 
        _id: assistanceId, 
        userId: user._id 
      },
      { 
        helpful: helpful 
      },
      { new: true }
    );

    if (!aiAssistance) {
      return NextResponse.json({ error: 'AI assistance record not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true,
      aiAssistance 
    });
  } catch (error) {
    console.error('AI assistance PUT error:', error);
    return NextResponse.json(
      { error: 'Failed to update AI assistance feedback' },
      { status: 500 }
    );
  }
}