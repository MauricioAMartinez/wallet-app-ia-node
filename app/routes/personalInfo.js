const express = require('express');
const router = express.Router();
const  { createPersonalInfo, getPersonalInfo, getPersonalInfoById, updatePersonalInfo, deletePersonalInfo, getPersonalInfoByUserId}= require('../controllers/personalInfo');

router.get('/', getPersonalInfo);
router.get('/:PersonalInfoId', getPersonalInfoById);
router.post('/', createPersonalInfo);
router.put('/:PersonalInfoId', updatePersonalInfo);
router.delete('/:PersonalInfoId', deletePersonalInfo);
router.get('/user/:UserId', getPersonalInfoByUserId);

module.exports = router;