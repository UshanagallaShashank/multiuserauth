const {check}=require("express-validator")
exports.registerValidator=[
    check("name").notEmpty().withMessage("Name is required"),
    check("email").notEmpty().withMessage("Email is required").isEmail().normalizeEmail({gmail_remove_dots:true}),
    check("password").notEmpty().withMessage("Password is required").isLength({min:6}).withMessage("Password must be at least 6 characters")
]