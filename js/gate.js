(function () {
  var BASE = "/vasvari-webdev/"; // ← állítsd a sajátodra
  var GATE = BASE + "gate.html";
  var HASH = "e661698d21b6cf65acb34373b067c59080a433bcf0cd6fdee58c182eaa8d4f6c"; // ugyanaz, mint a gate.html-ben

  function authed() {
    try {
      return sessionStorage.getItem("vasvari_auth") === HASH;
    } catch (_) {
      return false;
    }
  }

  var onGate = location.pathname.endsWith("/gate.html");
  if (!authed() && !onGate) location.replace(GATE);

  // gate.html hívja sikeres belépéskor
  window.__setAuthSession = function () {
    try {
      sessionStorage.setItem("vasvari_auth", HASH);
    } catch (_) {}
  };
})();
