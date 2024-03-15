const axios = require("axios");
const tetrWebhook = require("../models/tetrWebhook");

const postTetr = async (req,res) => {
    try {
        await tetrWebhook.create({
            ...req.body
        });
         res.status(201).json({success: true});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong. Try again later"});
    }
};

const postExtraEdge = async (req,res) => {
    try {
        const {name, email, mobile, campaign, source, channel, course, medium} = req.body;
        

        const requestData = {
            "AuthToken": "TETR-17-02-2024",
            "Source": "tetr",
            "FirstName": name,
            "Email": email,
            "MobileNumber": mobile,
            "leadCampaign": "Third Party",
            "LeadSource": "71",
            "LeadChannel": "19",
            "Course": "1",
            "LeadMedium": medium
        };
        const apiUrl = 'https://thirdpartyapi.extraaedge.com/api/SaveRequest';
        const response = await axios.post(apiUrl, requestData);
        console.log(response);
        res.send(response.data);
            
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something went wrong. Try again later"
        })
    }
}

module.exports = {postTetr, postExtraEdge};