const { v4: uuidv4, parse: uuidParse, stringify: uuidStringify } = require('uuid');
const PersonalInfo = require("../models/personalInfo");

const createPersonalInfo = async (req, res) => {
  const { UserId, Nombre, Apellido, Direccion, Email, Phone } = req.body;
  try {
    const personalInfo = await PersonalInfo.create({
      UserId: uuidParse(UserId), 
      Nombre,
      Apellido,
      Direccion,
      Email,
      Phone,
    });
    res.status(201).json(personalInfo);
  } catch (error) {
    console.error("Error creating personal info:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findAll();
    res.status(200).json(personalInfo);
  } catch (error) {
    console.error("Error getting personal info:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPersonalInfoById = async (req, res) => {
  const { PersonalInfoId } = req.params;
  try {
    const personalInfo = await PersonalInfo.findByPk(PersonalInfoId);
    if (!personalInfo) {
      return res.status(404).json({ message: "Personal info not found" });
    }
    res.status(200).json(personalInfo);
  } catch (error) {
    console.error("Error getting personal info by id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updatePersonalInfo = async (req, res) => {
  const { PersonalInfoId } = req.params;
  const { UserId, Nombre, Apellido, Direccion, Email, Phone } = req.body;
  try {
    const personalInfo = await PersonalInfo.findByPk(PersonalInfoId);
    if (!personalInfo) {
      return res.status(404).json({ message: "Personal info not found" });
    }
    personalInfo.UserId = uuidParse(UserId); 
    personalInfo.Nombre = Nombre;
    personalInfo.Apellido = Apellido;
    personalInfo.Direccion = Direccion;
    personalInfo.Email = Email;
    personalInfo.Phone = Phone;
    await personalInfo.save();
    res.status(200).json(personalInfo);
  } catch (error) {
    console.error("Error updating personal info:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletePersonalInfo = async (req, res) => {
  const { PersonalInfoId } = req.params;
  try {
    const personalInfo = await PersonalInfo.findByPk(PersonalInfoId);
    if (!personalInfo) {
      return res.status(404).json({ message: "Personal info not found" });
    }
    await personalInfo.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting personal info:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPersonalInfoByUserId = async (req, res) => {
  const { UserId } = req.params;
  try {
    const binaryUserId = Buffer.from(uuidParse(UserId));

    const personalInfo = await PersonalInfo.findAll({ where: { UserId: binaryUserId } });

    if (personalInfo.length === 0) {
      return res.status(404).json({ message: "Personal info not found" });
    }

    res.status(200).json(personalInfo);
  } catch (error) {
    console.error("Error getting personal info by user id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  createPersonalInfo,
  getPersonalInfo,
  getPersonalInfoById,
  updatePersonalInfo,
  deletePersonalInfo,
  getPersonalInfoByUserId,
};
