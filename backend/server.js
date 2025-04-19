import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

import cors from "cors"; // pakai import, biar konsisten

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

// 🟡 PASANG CORS DULUAN (SEBELUM ROUTE)
app.use(cors({
	origin: "https://netflix-clone-romynazty-git-main-raflyromeos-projects.vercel.app", // tanpa /
	credentials: true,
}));

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// ✅ Static serving
if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// ✅ Start server setelah semua setup
app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
	connectDB();
});
