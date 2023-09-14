const express= require('express');
const cors =require('cors');
const mongoose=require('mongoose');
const User=require('./models/User');
const Post =require('./models/Post');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer= require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs');

const app =express();

const salt =bcrypt.genSaltSync(10);
const secret='g4jg5i5h4g6ikg4u3gug3';
 
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));

mongoose.connect('mongodb+srv://blog:jWMT25AxVK88JYBo@cluster0.szsloxq.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res)=>{
    const {username,password}=req.body;

    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
    res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
    
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});

    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token',token).json({
                    id:userDoc._id,
                    username,
                });
            });
        } else {
            res.status(400).json('Wrong credentials');
        }
    } else {
        res.status(400).json('User not found');
    }
});

app.get('/profile',(req,res)=>{
    const {token} =req.cookies;
    jwt.verify(token, secret, {}, (err,info)=>{
        if(err) throw err;
        res.json(info);
    });
})
app.post('/logout',(req,res)=>{
    res.cookie('token', '').json('ok');
});
app.post('/post', uploadMiddleware.single('file'), async (req,res)=>{
    const {originalname, path}=req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath =path+'.'+ext
    fs.renameSync(path,newPath);

    const {token} =req.cookies;
    jwt.verify(token, secret, {}, async (err,info)=>{
        if(err) throw err;
        const {title,summary,content}=req.body;
        const postDoc = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author :info.id,
        });
        res.json(postDoc);
    });


    
});

app.put('/post',uploadMiddleware.single('file'), async(req,res)=>{
    let newPath=null;
   if(req.file){
    const {originalname, path}=req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath =path+'.'+ext
    fs.renameSync(path,newPath);
   }
});

app.get('/post', async (req,res)=>{
    res.json(
        await Post.find()
        .populate('author',['username'])
        .sort({createdAt: -1})
        .limit(20)

        );
});

app.get('/post/:id',async(req,res)=>{
    const {id} =req.params;
    const postDoc =await Post.findById(id).populate('author',['username']);
    res.json(postDoc);
});

app.listen(4000);

// mongodb+srv://blog:jWMT25AxVK88JYBo@cluster0.szsloxq.mongodb.net/?retryWrites=true&w=majority
// jWMT25AxVK88JYBo
