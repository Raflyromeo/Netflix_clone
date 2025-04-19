import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies?.["jwt-netflix"];

		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized - No token provided",
			});
		}

		let decoded;
		try {
			decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);
		} catch (err) {
			return res.status(401).json({
				success: false,
				message: "Unauthorized - Invalid or expired token",
			});
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "Unauthorized - User not found",
			});
		}

		req.user = user;
		next();
	} catch (error) {
		console.error("[protectRoute] Error:", error.message);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};
