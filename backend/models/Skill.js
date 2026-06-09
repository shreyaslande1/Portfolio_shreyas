const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
      unique: true,
    },
    icon: {
      type: String,
      trim: true,
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 50,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ["frontend", "backend", "database", "tools", "other"],
      default: "other",
    },
    endorsements: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Skill", skillSchema);
