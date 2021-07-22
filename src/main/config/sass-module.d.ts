declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}
// src/main/config/sass-module.d.ts