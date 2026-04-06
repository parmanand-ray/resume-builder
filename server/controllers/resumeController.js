//controller for cteating resume
//Path : /api/resumes/create

import imageKit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from "fs";

export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    //create new resume
    const newResume = await Resume.create({
      userId,
      title,
    });
    // return success message
    return res
      .status(201)
      .json({ message: "Resume created successfully", resume: newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for deleting the resume
//Path : /api/resumes/delete

export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });
    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch {
    return res.status(400).json({ message: error.message });
  }
};

//get user resume by id
//Path : /api/resumes/get

export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    resume.__v = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;
    return res.status(200).json({ resume });
  } catch {
    return res.status(400).json({ message: error.message });
  }
};

//controller for update resume
//Path : /api/resumes/update

export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.params;
    const image = req.file;
    let resumeDataCopy = JSON.parse(resumeData);
    if (image) {
      const imageBufferData = createReadStream(image.path);
      const response = await imageKit.files.upload({
        file: imageBufferData,
        fileName: "resume.png",
        folder: "user-resumes",
        transformation: {
          pre:
            "w-300,h-300,fo-face,z-0.75 " +
            (removeBackground ? ".e_bgremove" : ""),
        },
      });

      resumeDataCopy.personal_info.image = response.url;
    }
    const resume = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      resumeDataCopy,
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "Resume updated successfully", resume });
  } catch {
    return res.status(400).json({ message: error.message });
  }
};

//conntroller for getting public resume by id
//Path : /api/resumes/public

export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ _id: resumeId, public: true });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    resume.__v = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;
    return res.status(200).json({ resume });
  } catch {
    return res.status(400).json({ message: error.message });
  }
};
