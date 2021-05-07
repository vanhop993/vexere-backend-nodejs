const express = require("express");
const { postNewCompany,getAllCompany,getCompany,deleteCompany,putCompany, postNewCompanyIntro , postImgEditor,putCompanyIntro} = require("../controllers/company");
const auth = require("../helpers/authorization");
const { upload } = require("../multer");
const router = express.Router();

router.post("/company",auth(["admin"]),upload.array("image",20),postNewCompany);
router.post("/company/introduce",auth(["admin"]),postNewCompanyIntro);
router.post("/ckeditor",upload.single("upload"),postImgEditor);
router.get("/allcompany",auth(["admin"]),getAllCompany);
router.get("/company",getCompany);
router.delete("/company",auth(["admin"]),deleteCompany);
router.put("/company",auth(["admin"]),upload.array("image",20),putCompany);
router.put("/company/introduce",auth(["admin"]),putCompanyIntro);

module.exports=router;