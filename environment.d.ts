declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL?: string;
      GET_RANKING_URL: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_VERCEL_URL?: string;
      NEXT_PUBLIC_GOOGLE_ADSENSE_ID?: string;
    }
  }
}

export {};
