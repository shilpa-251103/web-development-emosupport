const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const jwt=require('jsonwebtoken');
const bcryptjs = require("bcryptjs");

const bodyParser = require('body-parser');
// const { spawn } = require('child_process');
var spawn = require('child_process').spawn;
app.use(bodyParser.json());

const authRoute = require("./Routes/AuthRoute");

dotenv.config({path:'./.env'});
require('./db/conn');

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
  })
);

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({extended: false}));

const Users = require('./Models/UserModel');

const Comment = require('./Models/UserModel_comments');

const Expert = require('./Models/UserModel_text');


app.post('/signup',async(req,res)=>{
  try{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;

    const createUser=new Users({
      username: username,
      email: email,
      password: password
    });

    const created= await createUser.save();
    console.log(created);
    res.status(200).send("signed up");
  }
  catch(error){
    res.status(400).send(error);
  }
})

app.post('/login',async(req,res)=>{
  try{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    const user= await Users.findOne({email:email});
    console.log(".....");
    if(user){
      console.log("found user machaan");
      const isMatch=await bcryptjs.compare(password,user.password);
      console.log("match done")
      if(isMatch){
        console.log("user matching machaan");
        const token = await user.generateToken();
        res.cookie("jwt",token,{
          expires: new Date(Date.now()+86400000),
          httpOnly: true
        })
        res.status(200).send("loggedIn");
      }else{
        console.log("thappu sirr");
        res.status(400).send("Invalid Credentials");
      }
    }
  }catch(error){
    res.status(400).send(error);
  }
})

app.post('/Afterlogin', (req, res) => {
  console.log("context");
  const { context1 } = req.body;
  const { context2 } = req.body;

  console.log(context1);    

  const pythonProcess = spawn('python', ['./analysis.py', context1]);
  const pythonProcess2 = spawn('python', ['./youtube.py', context2]);

  let output = '';
  let output2 = '';

  // pythonProcess.stdout.on('data', (data) => {
  //   console.log("stdout");
  //   output = data.toString();
  //   //console.log(output);
  // });
  console.log("output");
  pythonProcess.stderr.on('data', (data) => {
    console.log("1");
    console.error(`Error: ${data}`);
    //res.status(500).json({ error: 'Internal Server Error' });
  });
  pythonProcess.stdout.on('data', (data) => {
    console.log("stdout");
    output = data.toString();
    console.log(output);
    res.json({ output });
  });

  pythonProcess.stdout.on('end', function(){
    console.log('Test Data', output);
  });
  // pythonProcess.on('close', (code) => {
  //   console.log("2");
  //   if (code === 0) {
  //     console.log("2a");
  //     res.json({ output });
  //   } else {
  //     console.log("2b");
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });

  pythonProcess2.stderr.on('data', (data) => {
    console.log("1");
    console.error(`Error: ${data}`);
    //res.status(500).json({ error: 'Internal Server Error' });
  });
  pythonProcess2.stdout.on('data', (data) => {
    console.log("stdout");
    output2 = data.toString();
    console.log(output2);
    res.json({ output2 });
  });

  pythonProcess2.stdout.on('end', function(){
    console.log('Test Data', output2);
  });
});

app.listen(8080, () => {
  console.log(`Server is listening`);
});



app.post('/community', async (req, res) => {
  const username=req.body.username;
  const comment = req.body.comment;

  try {
    const newComment = new Comment({ username, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getComments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/expert', async (req, res) => {
  try {
    const experts = await Expert.find();
    res.status(200).json(experts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.post('/expert', async (req, res) => {
  const name=req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const  email= req.body.email;
  const phone = req.body.phone;
  const  licenseNumber= req.body.licenseNumber;
  const  qualifications= req.body.qualifications;
  const  experience= req.body.experience;
  const  specializations= req.body.specializations;
  const  previousRoles= req.body.previousRoles;
  const  availability= req.body.availability;
  const  fees= req.body.fees;
  const  paymentMethods= req.body.paymentMethods;
  try {
    const newExpert = new Expert({ name, age,gender,email,phone,licenseNumber,qualifications,experience,specializations,previousRoles,availability,fees,paymentMethods });
    await newExpert.save();
    res.status(201).send(newExpert);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.use("/",authRoute);