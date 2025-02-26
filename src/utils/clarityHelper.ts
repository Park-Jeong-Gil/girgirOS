export const ensureClarityStyles = () => {
  const styleSheets = document.styleSheets;
  const isStylesLoaded = Array.from(styleSheets).some((sheet) =>
    sheet.href?.includes("index.scss")
  );

  if (isStylesLoaded && window.clarity) {
    window.clarity("set", "stylesLoaded", "true");
  }
};
