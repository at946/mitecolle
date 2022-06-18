declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GET_ONE_DAY_RANKING_URL: string;
      NEXT_PUBLIC_GA_ID?: string;
    }
  }
}

export {};
