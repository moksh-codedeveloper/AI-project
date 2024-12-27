import mongoose, { Schema, model } from "mongoose";
const resumeSchema = new Schema({
  title: String,
  content: String,
  isPremium: Boolean,
  generatedContent: String,
});

export const Resume = model("Resume", resumeSchema);
