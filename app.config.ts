import 'dotenv/config';

interface ExpoConfig {
  name: string;
  slug: string;
  version: string;
  orientation: string;
  icon: string;
  scheme?: string;
  userInterfaceStyle?: string;
  splash: {
    image: string;
    resizeMode: string;
    backgroundColor: string;
  };
  ios: {
    supportsTablet: boolean;
  };
  android: {
    adaptiveIcon: {
      foregroundImage: string;
      backgroundColor: string;
    };
  };
  web: {
    bundler: string;
    output: string;
    favicon: string;
  };
  plugins: string[];
  experiments: {
    typedRoutes: boolean;
  };
  extra: {
    githubApiToken: string;
  };
}

const config: ExpoConfig = {
  name: "MobileP1",
  slug: "MobileP1",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router"
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
     githubApiToken: process.env.GITHUB_API_TOKEN || ''
  }
};

export default config;
