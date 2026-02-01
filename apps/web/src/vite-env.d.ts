/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PICSUM_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
