const nodemailer= require("nodemailer")

const transporter= nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "httthuy455@gmail.com",
        pass: "nffzzhmwijlzqcsv"
    }
})

const verifyMail= async (email, code)=> {
    try {
        const result= await transporter.sendMail({from: "httthuy455@gmail.com", to: email, subject: "Verify your email", text: "Your code is: "+ code})
        return result
        
    } catch (error) {
        return error
    }
}

module.exports= verifyMail