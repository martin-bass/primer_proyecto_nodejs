import {Router} from 'express';

const router = Router();

router.get('/', (req, res)=> res.render('index', {titulo:"Home"}));
router.get('/about', (req, res)=> res.render('about', {titulo:"About"}));
router.get('/contact', (req, res)=> res.render('contact', {titulo:"Contact"}));

export default router;