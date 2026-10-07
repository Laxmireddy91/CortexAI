import express from "express"
import { deductCredits, login, logOut, updateUserPayment } from "../controllers/auth.controller.js"
import internalAuth from "../middleware/internalAuth.js"

const router = express.Router()

router.post("/login", login)
router.get("/logout", logOut)

router.post("/update-plan", internalAuth, updateUserPayment)
router.post("/deduct-credits", internalAuth, deductCredits)

export default router