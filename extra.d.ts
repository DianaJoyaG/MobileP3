// extra.d.ts
declare module 'expo-constants' {
    import { Constants } from 'expo-constants';
  
    export interface AppManifest extends Constants['manifest'] {
      extra: {
        githubApiToken: string;
      }
    }
  }
  