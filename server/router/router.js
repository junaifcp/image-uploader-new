const router=require('express').Router();
const controler=require('../controler/controler')
const store=require('../middleware/multer')
const sendMail=require('../../mail/mail')


//routes
router.get('/',controler.home);
router.post('/uploadmultiple',store.array('images',12),controler.uploads)
router.post('/email',(req,res)=>{
    //send email here
    console.log('Data :',req.body);
    const {subject,email,text}=req.body
    sendMail(email,subject,text,function(err,data){
        if(err){
            res.status(500).json({message:'Internal Error'})
        }else{
            res.json({message:'email send'})
        }
    })
    
});
    
router.get('/email',(req,res)=>{
    
    res.json({message:'router success'})
})

module.exports=router