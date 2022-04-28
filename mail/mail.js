const nodemailer=require('nodemailer');
const mailGun=require('nodemailer-mailgun-transport');
 
const auth={
    auth:{
        api_key:'e435173d68bbc13330755f09c70bc8c2-162d1f80-e05261ee',
        domain:'sandboxf14ee3dd33514273a9404d9434678e82.mailgun.org'
    }
};

const transporter=nodemailer.createTransport(mailGun(auth));

 const sendMail=(email,subject,text,cb)=>{
    const mailOptions={
        from: email,
        to:'cpjunaif98@gmail.com',
        subject: subject,
        text: text
    }
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
           cb(err,null)
        }else{
            cb(null,data)
            console.log('Message send');
        }
    })
    
 }


 module.exports=sendMail;
