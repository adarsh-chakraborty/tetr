const { body, validationResult } = require('express-validator');

const validateInput = [
  body('name').notEmpty().withMessage('Name is required.'),
  body().custom((value, { req }) => {
      if (!req.body.mobile && !req.body.email) {
          throw new Error('Mobile OR Email is required.');
      }
      return true;s
  }),
  body('campaign').notEmpty().withMessage('Campaign is required.'),
  body('source').notEmpty().withMessage('Source is required.'),
  body('channel').notEmpty().withMessage('Channel is required.'),
  body('course').notEmpty().withMessage('Course is required.'),
];

  const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };

  module.exports = {validateInput, handleValidationErrors}