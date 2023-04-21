export const getPlaceholderImageSrc = (size = "1366x768", text = "") => {
  return `https://placehold.jp/30/efefef/999999/${size}.png?text=${text}${size}`;
};
