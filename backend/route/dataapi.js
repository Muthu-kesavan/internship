import express from "express";
import {getdata} from '../controller/data.js';
const router = express.Router();

router.get('/getdata',getdata);


export default router;