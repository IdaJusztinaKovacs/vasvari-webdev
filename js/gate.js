(function () {
  var BASE = "/vasvari-webdev/"; // ← állítsd a sajátodra
  var GATE = BASE + "gate.html";
  var HASH = "e661698d21b6cf65acb34373b067c59080a433bcf0cd6fdee58c182eaa8d4f6c"; // ugyanaz, mint a gate.html-ben

  function getCookie(name) {
    var m = document.cookie.match("(?:^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
    return m ? decodeURIComponent(m[1]) : null;
  }

  function setSessionCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/";
  }
  var authed = getCookie("vasvari_auth") === HASH;
  var onGate = location.pathname.endsWith("/gate.html");

  if (!authed && !onGate) location.replace(GATE);
  // Ha a gate.html hívja meg, akkor a belépéskor szintén session cookie-t állíthatsz:
  window.__setAuthSession = function () {
    setSessionCookie("vasvari_auth", HASH);
  };
})();
