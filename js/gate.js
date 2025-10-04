(function () {
  var BASE = "/vasvari-webdev/"; // ← állítsd a sajátodra
  var GATE = BASE + "gate.html";
  var HASH = "e661698d21b6cf65acb34373b067c59080a433bcf0cd6fdee58c182eaa8d4f6c"; // ugyanaz, mint a gate.html-ben

  function isAuthed() {
    try {
      return sessionStorage.getItem("vasvari_auth") === HASH;
    } catch (_) {
      return false;
    }
  }

  var path = window.location.pathname;
  var onGate = path.endsWith("/gate.html") || path === GATE;

  if (!isAuthed() && !onGate) {
    window.location.replace(GATE);
  }

  // Ezt a gate.html fogja meghívni sikeres jelszóbeírás után
  window.__setAuthSession = function () {
    try {
      sessionStorage.setItem("vasvari_auth", HASH);
    } catch (_) {}
  };
})();
