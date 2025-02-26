export const ensureClarityStyles = () => {
  const styleSheets = document.styleSheets;
  const isStylesLoaded = Array.from(styleSheets).some((sheet) =>
    sheet.href?.match(/GirgirOS-[A-Za-z0-9]+\.css$/)
  );

  if (isStylesLoaded && window.clarity) {
    window.clarity("set", "stylesLoaded", "true");
  }
};
