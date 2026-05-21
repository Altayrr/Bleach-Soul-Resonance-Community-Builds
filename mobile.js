(function enableMobileArchive() {
  document.documentElement.classList.add('mobile-archive');

  function markSlider(element) {
    if (element) element.classList.add('mobile-slider');
  }

  function preparePanelSliders() {
    markSlider(document.getElementById('panel-stats'));
    markSlider(document.getElementById('panel-core-stamp'));
    markSlider(document.getElementById('panel-set-stamps'));
    markSlider(document.getElementById('panel-weapon-stamp'));
    markSlider(document.getElementById('panel-bonds1'));
    markSlider(document.getElementById('panel-bonds2'));
  }

  var originalOpenPanel = window.openPanel;
  if (typeof originalOpenPanel === 'function') {
    window.openPanel = function(id) {
      originalOpenPanel(id);
      requestAnimationFrame(preparePanelSliders);
    };
  }

  document.addEventListener('click', function(event) {
    var icon = event.target.closest('.stamp-info-icon[data-info], .stamp-info-icon[data-core-popup]');
    if (!icon) return;
    event.preventDefault();
    event.stopPropagation();
    icon.dispatchEvent(new MouseEvent('mouseenter', { bubbles: false, cancelable: true, view: window }));
  }, true);

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && typeof window.closePanel === 'function') window.closePanel();
  });

  if ('requestIdleCallback' in window) {
    requestIdleCallback(preparePanelSliders);
  } else {
    setTimeout(preparePanelSliders, 120);
  }
})();
