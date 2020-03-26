const express = require('express');
const authController = require('../controllers/authController');
const sessionController = require('../controllers/sessionController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .post(
    authController.restrictTo('mentee'),
    sessionController.setMentorMenteeIds,
    sessionController.requestSession
  );

router.patch(
  '/approveSession/:sessionId',
  authController.restrictTo('mentor'),
  sessionController.acceptSession
);
module.exports = router;
