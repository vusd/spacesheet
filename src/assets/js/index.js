(function() {
  function fitIframe() {
    var parent = document.getElementById('iframe-parent');
    var parentWidth = parent.clientWidth;

    var iframe = document.getElementById('spacesheet-iframe');
    var scaleRatio = parentWidth / parseFloat(iframe.width);

    iframe.style.transform = `scale(${scaleRatio}, ${scaleRatio})`;
  }
  fitIframe();

  window.onresize = function() {
    fitIframe();
  }
})();
