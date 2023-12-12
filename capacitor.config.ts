import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "io.ionic.starter.socialOutUser",
	appName: "SocialOut User",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
	plugins: {
		CapacitorHttp: {
			enabled: true,
		},
		GoogleAuth: {
			scopes: ["profile", "email"],
			androidClientId:
				// "1026239920315-3d3hh9m6cgm4pj00jield8bkrh57g2lq.apps.googleusercontent.com",
				"678299435463-00edpsnuqn09bfd99mtcquo23a05j104.apps.googleusercontent.com",
			forceCodeForRefreshToken: true,
		},
	},
};

export default config;
