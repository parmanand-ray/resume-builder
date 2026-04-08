//controllet for enhancing a resume profile summery using ai
//Path : /api/ai/enhance-pro-sum
import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContant } = req.body;
    if (!userContant) {
      return res.status(400).json({ message: "Please provide user content" });
    }
    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that enhances the professional summary of a resume. You take the user's input and generate a concise and impactful professional summary that highlights their skills, experience, and achievements. make sure the description will be Ats friendly.",
        },
        {
          role: "user",
          content: userContant,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    res.status(200).json({ enhancedContent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
//controller for enhancing a resume job description using ai
//Path : /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContant } = req.body;
    if (!userContant) {
      return res.status(400).json({ message: "Please provide user content" });
    }
    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that enhances the job description of a resume. You take the user's input and generate a concise and impactful job description that highlights their skills, experience, and achievements in a way that is relevant to the job they are applying for. make sure the description will be Ats friendly.",
        },
        {
          role: "user",
          content: userContant,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    res.status(200).json({ enhancedContent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//controller for uploading a resume file and extracting its content using ai
//Path : /api/ai/upload-resume
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt =
      "You are a helpful assistant that extracts the content of a resume file. You take the user's uploaded resume file and extract the relevant information such as their name, contact information, skills, experience, and education. You then return this information in a structured format that can be easily used to populate a resume template.";

    const userPrompt = `extract data from this resume: ${resumeText} Provide data in the following JSON format with no additional text before or after:
{
 professnal_summary: {
      type: String,
      default: "",
    },
    skills: [{ type: String }],
    personal_info: {
      image: { type: String, default: "" },
      full_name: { type: String, default: "" },
      profession: { type: String, default: "" },
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      location: { type: String, default: "" },
      website: { type: String, default: "" },
    },
    exprience: [
      {
        company: { type: String },
        position: { type: String },
        start_date: { type: String },
        end_date: { type: String },
        description: { type: String },
        is_current: { type: Boolean },
      },
    ],
    projects: [
      {
        name: { type: String },
        description: { type: String },
        type: { type: String },
      },
    ],
    education: [
      {
        institution: { type: String },
        degree: { type: String },
        field: { type: String },
        graduation_date: { type: String },
        gpa: { type: String },
      },
    ],
}`;

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format: {
        type: "json_object",
      },
    });
    const extractedData = response.choices[0].message.content;
    const parsedData = JSON.parse(extractedData);
    const newResume = await Resume.create({ userId, title, ...parsedData });
    res.json({ resumeId: newResume._id });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error", error: error.message });
  }
};
