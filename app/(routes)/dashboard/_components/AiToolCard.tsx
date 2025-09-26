"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import ResumeUploadDialog from "./ResumeUploadDialog";
import RoadmapGeneratorDialog from "./RoadmapGeneratorDialog";

interface TOOL {
  name: string;
  description: string;
  icon: string;
  button: string;
  path: string;
}

type AIToolProps = {
  tool: TOOL;
};

function AiToolCard({ tool }: AIToolProps) {
  const id = uuidv4();
  const { user } = useUser();
  const router = useRouter();
  const [openResumeUpload, setOpenResumeUpload] = useState(false);
  const [openRoadmapDialog, setOpenRoadmapDialog] = useState(false);

  const onClickButton = async () => {

    if(tool.name == 'AI Resume Analyzer') {
      setOpenResumeUpload(true);
      return ;
    }

    if(tool.path == '/ai-tools/ai-roadmap-agent') {
      setOpenRoadmapDialog(true);
      return ;
    }

    // Create new record to history table
    const result = await axios.post("/api/history", {
      recordId: id,
      content: [],
      aiAgentType: tool.path,
    });
    console.log(result);
    router.push(tool.path + "/" + id);
  };

  return (
    <div className="p-3 border rounded-lg">
      <Image src={""} width={40} height={40} alt={tool.name} />
      <h2 className="font-bold mb-2">{tool.name}</h2>
      <p className="text-gray-400">{tool.description}</p>
      <Button onClick={onClickButton} className="w-full mt-3">
        {tool.button}
      </Button>

      <ResumeUploadDialog openResumeUpload={openResumeUpload} setOpenResumeDialog={setOpenResumeUpload} />
      <RoadmapGeneratorDialog openDialog={openRoadmapDialog} setOpenDialog={setOpenRoadmapDialog} />
    </div>
  );
}

export default AiToolCard;
