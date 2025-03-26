import express from "express";
import { postAppointment, getAllAppointments, updateAppointmentStatus, deleteAppointment } from "../controller/appointmentController.js";
import { isAdminAutheticated, isPatientAutheticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/post", isPatientAutheticated, postAppointment);
router.get("/getall", isAdminAutheticated, getAllAppointments);
router.put("/update/:id", isAdminAutheticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAutheticated, deleteAppointment);
export default router;