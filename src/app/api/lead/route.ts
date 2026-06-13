import { NextRequest, NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, message } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400, headers: corsHeaders },
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone is required.' },
        { status: 400, headers: corsHeaders },
      );
    }

    const lead = {
      name: name.trim(),
      email: email?.trim() || '',
      phone: phone.trim(),
      businessType: businessType?.trim() || '',
      message: message?.trim() || '',
      receivedAt: new Date().toISOString(),
    };

    console.log('[GrowthPilot Lead]', JSON.stringify(lead, null, 2));

    return NextResponse.json(
      { success: true },
      { status: 200, headers: corsHeaders },
    );
  } catch (error) {
    console.error('[Lead API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500, headers: corsHeaders },
    );
  }
}
