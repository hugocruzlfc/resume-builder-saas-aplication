import EducationForm from "@/components/forms/education-form";
import GeneralInfoForm from "@/components/forms/general-info-form";
import PersonalInfoForm from "@/components/forms/personal-info-form";
import SkillsForm from "@/components/forms/skills-form";
import SummaryForm from "@/components/forms/summary-form";
import WorkExperienceForm from "@/components/forms/work-experience-form";
import { EditorFormProps } from "./types";

export const ROUTES: Record<string, string> = {
  HOME: "/",
  RESUMES: "/resumes",
  BILLING: "/billing",
  EDITOR: "/editor",
};

export const STEPS: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Education",
    component: EducationForm,
    key: "education",
  },
  {
    title: "Skills",
    component: SkillsForm,
    key: "skill",
  },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];

export const BORDER_STYLES = {
  SQUARE: "square",
  CIRCLE: "circle",
  SQUIRCLE: "squircle",
};
