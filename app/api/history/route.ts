import { db } from "@/configs/db";
import { HistoryTable } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    const {content, recordId, aiAgentType} = await req.json();
    const user = await currentUser();

    try {
        const result = await db.insert(HistoryTable).values({
            recordId: recordId,
            content,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            createdAt: (new Date()).toString(),
            aiAgentType: aiAgentType,
        });
        return NextResponse.json(result);
    } 
    catch (error) {
        return NextResponse.json(error);
    }
}

export async function PUT(req: any) {
    const {content, recordId} = await req.json();
    try {
        const result = await db.update(HistoryTable).set({
            content,
        }).where(eq(HistoryTable.recordId, recordId));
        return NextResponse.json(result);
    } 
    catch (error) {
        return NextResponse.json(error);
    }
}

export async function GET(req:any) {
    const {searchParams} = new URL(req.url);
    const recordId = searchParams.get('recordId')

    try {
        if(recordId) {
            const result = await db.select().from(HistoryTable).where(eq(HistoryTable.recordId, recordId));
            return NextResponse.json(result[0]);
        }
        return NextResponse.json({});
    }
    catch (error) {
        return NextResponse.json(error);
    }
}