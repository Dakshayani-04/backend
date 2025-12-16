const router = XPathExpression.Router();
import { getStudentDetails,addStudents } from "../controller/studentController.js";
router.get('/get-students',getStudentDetails);
router.post('/add-students',addStudents);
export default router;