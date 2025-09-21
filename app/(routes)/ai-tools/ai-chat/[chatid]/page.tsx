"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import EmptyState from "../_components/EmptyState";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams, useRouter } from "next/navigation";
import {v4 as uuidv4} from 'uuid';

type messages = {
  content: string;
  role: string;
  type: string;
};

function AiChat() {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState<messages[]>([]);

  const {chatid} = useParams();
  const id = uuidv4();
  const router = useRouter();

  useEffect(() => {
    chatid && GetMessageList();
  }, [chatid]);

  const GetMessageList = async () => {
    const result = await axios.get('/api/history?recordId=' + chatid);
    console.log(result.data);
    setMessageList(result?.data?.content);
  }

  const onSend = async () => {
    setLoading(true);
    setMessageList((prev) => [
      ...prev,
      {
        content: userInput,
        role: "user",
        type: "text",
      },
    ]);
    setUserInput("");

    const result = await axios.post("/api/ai-career-chat-agent", {
      userInput: userInput,
    });
    console.log(result.data[0]);
    setMessageList((prev) => [...prev, result.data[0]]);
    setLoading(false);
  };

  useEffect(() => {
    // Save messsage in DB
    messageList?.length > 0 && updateMessagesList();
  }, [messageList]);

  const updateMessagesList = async () => {
    const result = await axios.put('/api/history', {
      content: messageList,
      recordId: chatid
    });
    console.log(result);
  }

   const onNewChat = async () => {
    // Create new record to history table
    const result = await axios.post('/api/history', {
      recordId: id,
      content: [],
    });
    console.log(result);
    router.replace("/ai-tools/ai-chat/" + id);
  }

  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48 h-[75vh] overflow-auto">
      <div className="flex items-center justify-between gap-8">
        <div>
          <h2 className="font-bold text-lg">AI Career Q/A Chat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, cum.
          </p>
        </div>
        <Button onClick={onNewChat}>+ New Chat</Button>
      </div>

      <div className="flex flex-col h-[75vh]">
        {messageList?.length <= 0 && (
          <div className="mt-5">
            <EmptyState
              selectedQuestion={(question: string) => setUserInput(question)}
            />
          </div>
        )}

        <div className="flex-1">
          {messageList?.map((message, index) => (
            <div key={index}>
              <div
                className={`flex mb-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg gap-2 ${
                    message.role === "user"
                      ? "bg-gray-200 text-black rounded-lg"
                      : "bg-gray-50 text-black"
                  }`}
                >
                  <ReactMarkdown>{message?.content}</ReactMarkdown>
                </div>
              </div>
              {loading && messageList?.length - 1 == index && (
                <div className="flex justify-start p-3 rounded-lg gap-2 bg-gray-50 text-black mb-2">
                  {" "}
                  <LoaderCircle className="animate-spin" /> Thinking...
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-6 absolute bottom-5 w-[50%]">
        {/* Input field */}
        <Input
          placeholder="Type Here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button onClick={onSend} disabled={loading}>
          {" "}
          <Send />{" "}
        </Button>
      </div>
    </div>
  );
}

export default AiChat;
