declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.jpeg' {
  const defAvatar: string;
  export default defAvatar;
}

declare module '*.webp' {
  const defMovie: string;
  export default defMovie;
}
