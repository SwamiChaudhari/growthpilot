import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const leadsFile = path.join(process.cwd(), 'leads.json');

async function readLeads(): Promise<any[]> {
  try {
    const data = await fs.readFile(leadsFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeLeads(leads: any[]) {
  await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2), 'utf-8');
}

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

    // Store to file
    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);

    console.log('[GrowthPilot Lead]', JSON.stringify(lead, null, 2));
    console.log(`[GrowthPilot] Total leads: ${leads.length}`);

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
