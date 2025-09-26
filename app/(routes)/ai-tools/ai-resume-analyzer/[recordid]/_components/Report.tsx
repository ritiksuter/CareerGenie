"use client";

import ResumeUploadDialog from "@/app/(routes)/dashboard/_components/ResumeUploadDialog";
import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import React, { useState } from "react";

function Report({ aiReport }: any) {
  const [openResumeUpload, setOpenResumeDialog] = useState(false);
  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Analysis Results
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition transform duration-300 ease-in-out shadow-lg">
          Download Full Report
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Overall Score
        </h3>
        <div className="flex items-center">
          <div className="text-5xl font-bold text-blue-600 mr-4">78%</div>
          <span className="text-gray-600 dark:text-gray-300">
            Good – Your resume is strong, but there are areas to refine.
          </span>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Section Matches
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-300 dark:border-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
              Contact Info
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              All essential details like phone, email, and LinkedIn are present.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-300 dark:border-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
              Experience
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Strong descriptions of past roles, highlighting skills and
              results.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-300 dark:border-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
              Education
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Degrees and certifications are clearly listed and relevant.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h4 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
              Skills
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Skills are included, but some keywords from the job description
              are missing.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Tips & Improvements
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            Add more job-specific keywords in your skills section to improve ATS
            (Applicant Tracking System) optimization.
          </li>
          <li>
            Quantify achievements in the Experience section (e.g., “Increased
            efficiency by 15%”).
          </li>
          <li>
            Consider including a brief professional summary at the top to
            showcase your strengths and career goals.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
            What's Good
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Well-structured resume layout.</li>
            <li>Relevant experience listed with clear role descriptions.</li>
            <li>Good use of bullet points for readability.</li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
          <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-4">
            Needs Improvement
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Some job descriptions lack quantifiable impact metrics.</li>
            <li>
              Skills section can be more tailored to target role keywords.
            </li>
            <li>Adding a professional summary could be stronger.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
          Want to take your resume to the next level? Get personalized feedback
          and targeted ATS insights.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Unlock Premium Features
        </button>
      </div>
    </div>
  );
}

export default Report;

/*
aiReport?.overall_score
<Button type='button' onClick={() => setOpenResumeDialog(true)}> Re-analyze <Sparkle />  </Button>
<ResumeUploadDialog openResumeUpload={openResumeUpload} setOpenResumeDialog={() => setOpenResumeDialog(false)} />
*/
