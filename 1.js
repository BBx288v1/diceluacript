const _0x225eca = _0x15d8;
(function (_0x42132d, _0x2d1566) {
  const _0x49fff5 = _0x15d8,
    _0xa9d7d0 = _0x42132d();
  while (!![]) {
    try {
      const _0x43aaae =
        parseInt(_0x49fff5(0x19d)) / 0x1 +
        (parseInt(_0x49fff5(0x1b3)) / 0x2) *
          (parseInt(_0x49fff5(0x1b6)) / 0x3) +
        (-parseInt(_0x49fff5(0x1ba)) / 0x4) *
          (parseInt(_0x49fff5(0x19e)) / 0x5) +
        parseInt(_0x49fff5(0x19f)) / 0x6 +
        parseInt(_0x49fff5(0x1b7)) / 0x7 +
        -parseInt(_0x49fff5(0x19c)) / 0x8 +
        -parseInt(_0x49fff5(0x1a8)) / 0x9;
      if (_0x43aaae === _0x2d1566) break;
      else _0xa9d7d0["push"](_0xa9d7d0["shift"]());
    } catch (_0x39db57) {
      _0xa9d7d0["push"](_0xa9d7d0["shift"]());
    }
  }
})(_0x41b6, 0xae86e);
function addJs(_0x192c9a, _0x46fd27) {
  const _0x506e1a = _0x15d8,
    _0x335b04 = { VhUFT: _0x506e1a(0x1bc) };
  let _0x47de5b = document[_0x506e1a(0x1b9)](_0x335b04[_0x506e1a(0x1b5)]);
  (_0x47de5b[_0x506e1a(0x1b1)] = _0x506e1a(0x1ad)),
    (_0x47de5b[_0x506e1a(0x1a4)] = _0x192c9a),
    (_0x47de5b[_0x506e1a(0x1a5)] = _0x46fd27),
    document[_0x506e1a(0x1aa)]["appendChild"](_0x47de5b);
}
function _0x15d8(_0x583bbd, _0x2b32aa) {
  const _0x41b65d = _0x41b6();
  return (
    (_0x15d8 = function (_0x15d8b3, _0x5d4fd5) {
      _0x15d8b3 = _0x15d8b3 - 0x19c;
      let _0x566439 = _0x41b65d[_0x15d8b3];
      return _0x566439;
    }),
    _0x15d8(_0x583bbd, _0x2b32aa)
  );
}
function _0x41b6() {
  const _0x1ece12 = [
    "426btepvQ",
    "3990658rYHhdK",
    "wslTb",
    "createElement",
    "116996eJktvd",
    "xAMGn",
    "script",
    "3592352YMxwcz",
    "383121gJLnEd",
    "15xAGRCp",
    "6218310LbjJlk",
    "getScript",
    "bBtRd",
    "fFklN",
    "BgQGB",
    "src",
    "onload",
    "license",
    "https://code.jquery.com/jquery-3.6.0.min.js",
    "10455075tDiDaX",
    "/bot/setup?license=",
    "head",
    "qFKpQ",
    "setItem",
    "text/javascript",
    "/bot/src/betfury-dice?license=",
    "getItem",
    "etrXh",
    "type",
    "cDRgc",
    "5968cnpNgF",
    "wbQON",
    "VhUFT",
  ];
  _0x41b6 = function () {
    return _0x1ece12;
  };
  return _0x41b6();
}
addJs(_0x225eca(0x1a7), async () => {
  const _0x55332b = _0x225eca,
    _0x5e4fd1 = {
      etrXh: function (_0x26cb9f, _0x1276a5) {
        return _0x26cb9f + _0x1276a5;
      },
      bBtRd: _0x55332b(0x1a9),
      qFKpQ: "license",
      wslTb: _0x55332b(0x1ae),
      cDRgc: function (_0xaa5ab2) {
        return _0xaa5ab2();
      },
    };
  try {
    await $[_0x55332b(0x1a0)](
      _0x5e4fd1["etrXh"](
        _0x5e4fd1[_0x55332b(0x1b0)](BOT_URL, _0x5e4fd1[_0x55332b(0x1a1)]),
        localStorage[_0x55332b(0x1af)](_0x5e4fd1[_0x55332b(0x1ab)])
      )
    ),
      await $[_0x55332b(0x1a0)](
        _0x5e4fd1[_0x55332b(0x1b0)](BOT_URL, _0x5e4fd1[_0x55332b(0x1b8)]) +
          localStorage[_0x55332b(0x1af)](_0x5e4fd1["qFKpQ"])
      ),
      _0x5e4fd1[_0x55332b(0x1b2)](botInstaller);
  } catch (_0x362b1b) {
    enterLicense();
  }
});
function enterLicense() {
  const _0x2874d0 = _0x225eca,
    _0x37f269 = {
      fFklN: function (_0x16e4bc, _0x38f64d) {
        return _0x16e4bc(_0x38f64d);
      },
      xAMGn:
        "Your\x20license\x20wrong\x20or\x20expired,\x20enter\x20your\x20new\x20license",
      BgQGB: _0x2874d0(0x1a6),
      wbQON: "Refresh\x20page\x20then\x20install\x20bot\x20again",
    };
  let _0x4efa9e = _0x37f269[_0x2874d0(0x1a2)](
    prompt,
    _0x37f269[_0x2874d0(0x1bb)]
  );
  if (!_0x4efa9e) return enterLicense();
  localStorage[_0x2874d0(0x1ac)](_0x37f269[_0x2874d0(0x1a3)], _0x4efa9e),
    alert(_0x37f269[_0x2874d0(0x1b4)]);
}
