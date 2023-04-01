import { Router } from 'express';
import Group from '../models/Group.model';
import User from '../models/User.model';
import LoginService from '../services/Login.service';

const router = Router();

const loginService = new LoginService();

router.get('/', loginService.findAll);
router.get('/junin', async (req, res) => {
    const junin = await Group.findAll({})
    
    return res.status(200).json(junin);
});

export default router;