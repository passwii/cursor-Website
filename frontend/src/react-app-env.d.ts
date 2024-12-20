/// <reference types="react-scripts" />

declare module "*.ico" {
    const content: string;
    export default content;
} 

declare module '*.webp' {
    const src: string;
    export default src;
}
