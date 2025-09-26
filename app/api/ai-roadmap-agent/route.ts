import { inngest } from "@/inngest/client";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {roadmapId, userInput} = await req.json();
    const user = await currentUser();

    const resultIds = await inngest.send({
    name: "AiRoadMapAgent",
    data: {
      userInput: userInput,
      roadmapId: roadmapId,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    },
  });
  const runId = resultIds?.ids[0];

  let runStatus;
  // Use polling to check Run Status
  while(true) {
    runStatus = await getRuns(runId);
    if(runStatus?.data[0]?.status === "Completed") break;
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return NextResponse.json(runStatus?.data?.[0]?.output?.output);
}

export async function getRuns(runId: string) {
  const result = await axios.get(
    `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,
    {
      headers: {
        Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
      },
    }
  );
  return result.data;
}
