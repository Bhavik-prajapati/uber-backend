const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require("../models/blackListToken.model");


module.exports.authUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackListed = await blacklistTokenModel.findOne({ token });

    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized user"});
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded, "decoded user");

        const user = await userModel.findById(decoded._id);
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized user" });

    }



}

