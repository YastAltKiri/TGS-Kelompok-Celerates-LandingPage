(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.step'));

  function select(index) {
    tabs.forEach(function (tab) {
      var active = tab.dataset.tip === String(index);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.tabIndex = active ? 0 : -1;
      document.getElementById('tip' + tab.dataset.tip).hidden = !active;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab.dataset.tip); });

    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (next === null) return;
      e.preventDefault();
      tabs[next].focus();
      select(tabs[next].dataset.tip);
    });
  });
})();
