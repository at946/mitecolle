declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GET_RANKING_URL: string;
      NEND_IS_ACTIVE: boolean;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_VERCEL_URL?: string;
    }
  }
}

export {};
