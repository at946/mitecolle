declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL?: string;
      GET_SLIDES_URL: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_VERCEL_URL?: string;
      NEXT_PUBLIC_GOOGLE_ADSENSE_ID?: string;
    }
  }
}

export {};
