import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'social-out-user',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
