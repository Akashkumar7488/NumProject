const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const User = require("../models/userSchema");

const stripe = require('stripe')(process.env.STRIPE_SECRET)

router.post('/register',async(req,res) => {
    const {name, email, mobile, password, cpassword } = req.body;
    // validation
    if(!name || !email || !mobile || !password || !cpassword) {
        return res.json({error: "Plz fill the field properly"});
    }
    try {
        const userExist = await User.findOne({email:email});
        if(userExist) {
            return res.json({error:"Email already exist"});
        } else if(password != cpassword){
            return res.status(422).json({error:"password are not matching"});
        }
        // for new entry data of user
        const user = new User({name:name, email:email,mobile:mobile,password:password,cpassword:cpassword});
        // save user
        const userRegister = await user.save();
        if(userRegister) {
            res.status(201).json({message:"User registered successfully"});
        }else {
            res.status(500).json({error:"failed to register"});
        }
    }
    catch(err){
        // return res.json("faied to register");
        console.log(err);
    }
});



 router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    try {
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
          console.log(password);
          console.log(userLogin.password);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                console.log("Password does not match");
                return res.status(400).json({ error: "Invalid credentials" });
            } 
            else {
                console.log("User signed in successfully");
                return res.json({ message: "User signed in successfully" });
            }
        } else {
            console.log("User not found");
            return res.status(400).json({ error: "Invalid credentials" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// router.post('/forgotpassword', async (req, res) => {
//     const { email } = req.body;
//     try {
//       if (!email) {
//         return res.status(400).json({ message: 'Email is required' });
//       }
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: 'Invalid Email' });
//       }
//       const secretKey = user._id + "secretKey";
//       const token = jwt.sign({ userID: user._id }, secretKey, { expiresIn: '5m' });
//       const link = `http://localhost:3000/user/reset/${user._id}/${token}`;
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL,
//           pass: process.env.EMAIL_PASSWORD,
//         },
//       });
//       const mailOptions = {
//         from: process.env.EMAIL,
//         to: email,
//         subject: 'Password Reset Request',
//         html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
//       };
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           return res.status(400).json({ message: 'Error in sending email' });
//         }
//         res.status(200).json({ message: 'Email Sent' });
//       });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });


// Login user


router.post('/forgotpassword', async (req, res) => {
    const { email } = req.body;
    try {
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid Email' });
      }
      const secretKey = user._id + "secretKey";
      const token = jwt.sign({ userID: user._id }, secretKey, { expiresIn: '5m' });
      const link = `http://localhost:3000/user/reset/${user._id}/${token}`;
      console.log(token);
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Password Reset Request',
        html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(400).json({ message: 'Error in sending email' });
        }
        res.status(200).json({ message: 'Email Sent' });
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


// router.post('/forgotpassword/:id/:token', async (req, res) => {
//     const { newPassword, confirmPassword } = req.body;
//     const { id, token } = req.params;
  
//     try {
//       if (!newPassword || !confirmPassword) {
//         return res.status(400).json({ message: 'All fields are required' });
//       }
//       if (newPassword !== confirmPassword) {
//         return res.status(400).json({ message: 'Passwords do not match' });
//       }
  
//       const user = await User.findById(id);
//       const secretKey = user._id + "secretKey";
      
//       jwt.verify(token, secretKey, async (err, decoded) => {
//         if (err) {
//           return res.status(400).json({ message: 'Invalid or expired token' });
//         }
  
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(newPassword, salt);
        
//         user.password = hashedPassword;
//         await user.save();
  
//         res.status(200).json({ message: 'Password reset successfully' });
//       });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });



router.post('/forgotpassword/:id/:token', async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const { id, token } = req.params;

  try {
    if (!newPassword || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (newPassword !== confirmPassword) {
      console.log(newPassword);
      console.log(confirmPassword);
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const secretKey = user._id + "secretKey";
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      await user.save();

      res.status(200).json({ message: 'Password reset successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// for payment gateway

router.post("/create-checkout-session", async (req, res) => {
  const { formData } = req.body;

  const lineItems = [{
      price_data: {
          currency: 'usd',
          product_data: {
              name: 'Your Course',
          },
          unit_amount: 2000, // in cents, so this is $20.00
      },
      quantity: 1,
  }];

  try {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: lineItems,
          mode: 'payment',
          success_url: 'http://localhost:3000/success',
          cancel_url: 'http://localhost:3000/cancel',
      });

      res.json({ id: session.id });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});





module.exports = router;