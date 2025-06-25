import { generateSummary } from "@/actions/generate-actions";

import { ResumeValues } from "@/lib/validations";

import { WandSparklesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import LoadingButton from "./loading-buton";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}

export default function GenerateSummaryButton({
  resumeData,
  onSummaryGenerated,
}: GenerateSummaryButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    // TODO: Block for non-premium users

    try {
      setLoading(true);
      const aiResponse = await generateSummary(resumeData);
      onSummaryGenerated(aiResponse);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoadingButton
      variant="outline"
      type="button"
      onClick={handleClick}
      loading={loading}
    >
      <WandSparklesIcon className="size-4" />
      Generate (AI)
    </LoadingButton>
  );
}
