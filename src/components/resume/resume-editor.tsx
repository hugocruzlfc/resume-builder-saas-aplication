"use client";

import { ResumeServerData } from "@/lib/types";

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}

export default function ResumeEditor({ resumeToEdit }: ResumeEditorProps) {
  return (
    <div>
      {resumeToEdit ? (
        <p>{resumeToEdit.title}</p>
      ) : (
        <p>No resume data available.</p>
      )}
    </div>
  );
}
