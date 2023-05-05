const User = require("../models/User");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const createResume = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const {
      path: resumePath,
      originalname: resumeName,
      mimetype: resumeType,
    } = req.file;

    try {
      user.resume = {
        fileName: resumeName,
        filePath: resumePath,
        fileType: resumeType,
      };
      await user.save();
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getResumesByEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { resume } = user;

    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    res.status(200).download(resume.filePath, resume.fileName);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  createResume,
  getResumesByEmail,
  upload,
};
