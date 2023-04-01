/// <reference types="vite/client" />

declare module '*.vue';

type Feather = {
  replace: () => void;
};

declare const feather: Feather;
