function BigcLoader({ src, width }: { src: string; width?: any }) {
  return `https://4wdpmdxj.cdn.imgeng.in/${src}?imgeng=/w_${width}/`;
}
function DirectLoader({ src, width }: { src: string; width?: any }) {
  return `${src}?imgeng=/w_${width}/`;
}
export { BigcLoader, DirectLoader };
