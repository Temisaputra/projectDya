$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});
$("document").ready(function () {
  var vw;
  $(window).resize(function () {
    vw = $(window).width() / 2;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 }, 500);
  });

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });
  $("#play").click(function () {
    var audio = $(".song")[0];
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    // $(".heading").addClass("bannar-come");
    $(".heading").css("display", "block");
    $(".heading").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b1").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b2").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b3").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b4").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b5").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b6").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b7").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }

  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");
    // $('#b3').addClass('balloons-rotate-behaviour-two');
    // $('#b4').addClass('balloons-rotate-behaviour-one');
    // $('#b5').addClass('balloons-rotate-behaviour-one');
    // $('#b6').addClass('balloons-rotate-behaviour-two');
    // $('#b7').addClass('balloons-rotate-behaviour-one');
    // loopOne();
    // loopTwo();
    // loopThree();
    // loopFour();
    // loopFive();
    // loopSix();
    // loopSeven();

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(".cakes").fadeIn("slow");

    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("slow");
      });
  });

  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  $("#wish_message").click(function () {
    vw = $(window).width() / 2;

    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    // $("#b1").attr("id", "b11");
    // $("#b2").attr("id", "b22");
    // $("#b3").attr("id", "b33");
    // $("#b4").attr("id", "b44");
    // $("#b5").attr("id", "b55");
    // $("#b6").  attr("id", "b66");
    // $("#b7").attr("id", "b77");
    // $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    // $("#b22").animate({ top: 240, left: vw - 250 }, 500);
    // $("#b33").animate({ top: 240, left: vw - 150 }, 500);
    // $("#b44").animate({ top: 240, left: vw - 50 }, 500);
    // $("#b55").animate({ top: 240, left: vw + 50 }, 500);
    // $("#b66").animate({ top: 240, left: vw + 150 }, 500);
    // $("#b77").animate({ top: 240, left: vw + 250 }, 500);
    // $(".balloons").css("opacity", "0.9");
    // $(".balloons h2").fadeIn(3000);
    $(".container2").css("display", "block");
    $(".container2").fadeIn("slow");
    startFireworksWithSound();
    makeItRain();
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  $("#story").click(function () {
    stopFireworksWithSound();
    $(this).fadeOut("slow");
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });

    var i;

    function msgLoop(i) {
      $("p:nth-child(" + i + ")")
        .fadeOut("slow")
        .delay(1000)
        .promise()
        .done(function () {
          i = i + 1;
          $("p:nth-child(" + i + ")")
            .fadeIn("slow")
            .delay(1000);
          if (i == 50) {
            $("p:nth-child(49)")
              .fadeOut("slow")
              .promise()
              .done(function () {
                $(".cake").fadeIn("fast");
              });
          } else {
            msgLoop(i);
          }
        });
      // body...
    }

    msgLoop(0);
  });
});

//alert('hello');

const container = document.querySelector(".fireworks");
const options = {
  sound: {
    enable: true, // Mengaktifkan suara
    files: [
      "sounds/explosionq0.mp3",
      "sounds/explosion1.mp3",
      "sounds/explosion2.mp3",
    ],
    volume: {
      min: 4,
      max: 8,
    },
  },
  // konfigurasi lain seperti:
  acceleration: 1.05,
  friction: 0.95,
  gravity: 1.5,
  particles: 50,
  trace: 3,
  explosion: 5,
  hue: { min: 0, max: 360 },
};

const fireworks = new Fireworks.default(container, options);
container.style.background = "#0a0a23"; // atau gradient

// fireworks.start();

var count = 0;
const speed = 300;
const colors = [
  "ff6f61", // Coral
  "f06292", // Pink Rose
  "ba68c8", // Lavender Purple
  "9575cd", // Soft Purple
  "7986cb", // Blue Grey
  "4fc3f7", // Sky Blue
  "4dd0e1", // Cyan Blue
  "4db6ac", // Aqua Teal
  "81c784", // Soft Green
  "aed581", // Lime Green
  "dce775", // Pastel Yellow
  "fff176", // Soft Yellow
  "ffd54f", // Light Orange
  "ffb74d", // Peach
  "ff8a65", // Light Red-Orange
  "a1233b", // ❤️ Deep Maroon (merah hati)
];

const elm = document.querySelector(".heading");

// Bagi kata berdasarkan spasi atau ikon hati
const word = elm.innerHTML.trim().split(/(\s+|❤️)/);

const htm = word.map(function (word) {
  // Khusus untuk ikon hati
  if (word.trim() === "❤️") {
    return `<span class="heart" style="color:#a1233b">❤️</span>`;
  } else if (word.trim() === "") {
    return word; // spasi tetap
  } else {
    // Untuk kata biasa, proses huruf per huruf
    var text = word.split("").map(function (letter) {
      count++;
      if (count >= colors.length) {
        count = 0;
      }
      return (
        '<span class="letter ' +
        letter.toLowerCase() +
        '" style="color:#' +
        colors[count] +
        (speed ? "; animation-duration:" + speed / 1000 + "s" : "") +
        '">' +
        letter +
        "</span>"
      );
    });
    return (
      '<span class="word ' +
      word.toLowerCase() +
      '">' +
      text.join("") +
      "</span>"
    );
  }
});

elm.innerHTML = htm.join("");

// Aktifkan animasi huruf pertama
elm.querySelector(".word>span:first-child")?.classList.add("active");

// Setup animasi per huruf
const letters = elm.querySelectorAll(".word>span");
letters.forEach((letter) => {
  var $this = letter,
    $parent = $this.parentElement.nextElementSibling;

  letter.addEventListener("animationend", (e) => {
    if ($this.nextElementSibling) {
      $this.nextElementSibling.classList.add("active");
    } else {
      if ($parent && $parent.classList.contains("word")) {
        $parent.querySelector("span:first-child").classList.add("active");
      } else {
        const timer = 700;
        document.querySelector(".candle")?.classList.add("active");
        setTimeout(function () {
          document.querySelector(".candle>.glow")?.classList.add("active");
        }, timer);
        setTimeout(function () {
          document.querySelector(".candle>.flame")?.classList.add("active");
        }, timer + 100);
        setTimeout(function () {
          document
            .querySelector(".candle>.blinking-glow")
            ?.classList.add("active");
        }, timer + 200);
      }
    }
  });
});

var retina = window.devicePixelRatio,
  // Math shorthands
  PI = Math.PI,
  sqrt = Math.sqrt,
  round = Math.round,
  random = Math.random,
  cos = Math.cos,
  sin = Math.sin,
  // Local WindowAnimationTiming interface
  rAF = window.requestAnimationFrame,
  cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
  _now =
    Date.now ||
    function () {
      return new Date().getTime();
    };

// Local WindowAnimationTiming interface polyfill
(function (w) {
  /**
   * Fallback implementation.
   */
  var prev = _now();
  function fallback(fn) {
    var curr = _now();
    var ms = Math.max(0, 16 - (curr - prev));
    var req = setTimeout(fn, ms);
    prev = curr;
    return req;
  }

  /**
   * Cancel.
   */
  var cancel =
    w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.clearTimeout;

  rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || fallback;

  cAF = function (id) {
    cancel.call(w, id);
  };
})(window);

document.addEventListener("DOMContentLoaded", function () {
  var speed = 50,
    duration = 1.0 / speed,
    confettiRibbonCount = 11,
    ribbonPaperCount = 30,
    ribbonPaperDist = 8.0,
    ribbonPaperThick = 8.0,
    confettiPaperCount = 95,
    DEG_TO_RAD = PI / 180,
    RAD_TO_DEG = 180 / PI,
    colors = [
      ["#df0049", "#660671"],
      ["#00e857", "#005291"],
      ["#2bebbc", "#05798a"],
      ["#ffd200", "#b06c00"],
    ];

  function Vector2(_x, _y) {
    (this.x = _x), (this.y = _y);
    this.Length = function () {
      return sqrt(this.SqrLength());
    };
    this.SqrLength = function () {
      return this.x * this.x + this.y * this.y;
    };
    this.Add = function (_vec) {
      this.x += _vec.x;
      this.y += _vec.y;
    };
    this.Sub = function (_vec) {
      this.x -= _vec.x;
      this.y -= _vec.y;
    };
    this.Div = function (_f) {
      this.x /= _f;
      this.y /= _f;
    };
    this.Mul = function (_f) {
      this.x *= _f;
      this.y *= _f;
    };
    this.Normalize = function () {
      var sqrLen = this.SqrLength();
      if (sqrLen != 0) {
        var factor = 1.0 / sqrt(sqrLen);
        this.x *= factor;
        this.y *= factor;
      }
    };
    this.Normalized = function () {
      var sqrLen = this.SqrLength();
      if (sqrLen != 0) {
        var factor = 1.0 / sqrt(sqrLen);
        return new Vector2(this.x * factor, this.y * factor);
      }
      return new Vector2(0, 0);
    };
  }
  Vector2.Lerp = function (_vec0, _vec1, _t) {
    return new Vector2(
      (_vec1.x - _vec0.x) * _t + _vec0.x,
      (_vec1.y - _vec0.y) * _t + _vec0.y
    );
  };
  Vector2.Distance = function (_vec0, _vec1) {
    return sqrt(Vector2.SqrDistance(_vec0, _vec1));
  };
  Vector2.SqrDistance = function (_vec0, _vec1) {
    var x = _vec0.x - _vec1.x;
    var y = _vec0.y - _vec1.y;
    return x * x + y * y + z * z;
  };
  Vector2.Scale = function (_vec0, _vec1) {
    return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
  };
  Vector2.Min = function (_vec0, _vec1) {
    return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
  };
  Vector2.Max = function (_vec0, _vec1) {
    return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
  };
  Vector2.ClampMagnitude = function (_vec0, _len) {
    var vecNorm = _vec0.Normalized;
    return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
  };
  Vector2.Sub = function (_vec0, _vec1) {
    return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
  };

  function EulerMass(_x, _y, _mass, _drag) {
    this.position = new Vector2(_x, _y);
    this.mass = _mass;
    this.drag = _drag;
    this.force = new Vector2(0, 0);
    this.velocity = new Vector2(0, 0);
    this.AddForce = function (_f) {
      this.force.Add(_f);
    };
    this.Integrate = function (_dt) {
      var acc = this.CurrentForce(this.position);
      acc.Div(this.mass);
      var posDelta = new Vector2(this.velocity.x, this.velocity.y);
      posDelta.Mul(_dt);
      this.position.Add(posDelta);
      acc.Mul(_dt);
      this.velocity.Add(acc);
      this.force = new Vector2(0, 0);
    };
    this.CurrentForce = function (_pos, _vel) {
      var totalForce = new Vector2(this.force.x, this.force.y);
      var speed = this.velocity.Length();
      var dragVel = new Vector2(this.velocity.x, this.velocity.y);
      dragVel.Mul(this.drag * this.mass * speed);
      totalForce.Sub(dragVel);
      return totalForce;
    };
  }

  function ConfettiPaper(_x, _y) {
    this.pos = new Vector2(_x, _y);
    this.rotationSpeed = random() * 600 + 800;
    this.angle = DEG_TO_RAD * random() * 360;
    this.rotation = DEG_TO_RAD * random() * 360;
    this.cosA = 1.0;
    this.size = 5.0;
    this.oscillationSpeed = random() * 1.5 + 0.5;
    this.xSpeed = 40.0;
    this.ySpeed = random() * 60 + 50.0;
    this.corners = new Array();
    this.time = random();
    var ci = round(random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    for (var i = 0; i < 4; i++) {
      var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
      var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
      this.corners[i] = new Vector2(dx, dy);
    }
    this.Update = function (_dt) {
      this.time += _dt;
      this.rotation += this.rotationSpeed * _dt;
      this.cosA = cos(DEG_TO_RAD * this.rotation);
      this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt;
      this.pos.y += this.ySpeed * _dt;
      if (this.pos.y > ConfettiPaper.bounds.y) {
        this.pos.x = random() * ConfettiPaper.bounds.x;
        this.pos.y = 0;
      }
    };
    this.Draw = function (_g) {
      if (this.cosA > 0) {
        _g.fillStyle = this.frontColor;
      } else {
        _g.fillStyle = this.backColor;
      }
      _g.beginPath();
      _g.moveTo(
        (this.pos.x + this.corners[0].x * this.size) * retina,
        (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina
      );
      for (var i = 1; i < 4; i++) {
        _g.lineTo(
          (this.pos.x + this.corners[i].x * this.size) * retina,
          (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina
        );
      }
      _g.closePath();
      _g.fill();
    };
  }
  ConfettiPaper.bounds = new Vector2(0, 0);

  function ConfettiRibbon(
    _x,
    _y,
    _count,
    _dist,
    _thickness,
    _angle,
    _mass,
    _drag
  ) {
    this.particleDist = _dist;
    this.particleCount = _count;
    this.particleMass = _mass;
    this.particleDrag = _drag;
    this.particles = new Array();
    var ci = round(random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    this.xOff = cos(DEG_TO_RAD * _angle) * _thickness;
    this.yOff = sin(DEG_TO_RAD * _angle) * _thickness;
    this.position = new Vector2(_x, _y);
    this.prevPosition = new Vector2(_x, _y);
    this.velocityInherit = random() * 2 + 4;
    this.time = random() * 100;
    this.oscillationSpeed = random() * 2 + 2;
    this.oscillationDistance = random() * 40 + 40;
    this.ySpeed = random() * 40 + 80;
    for (var i = 0; i < this.particleCount; i++) {
      this.particles[i] = new EulerMass(
        _x,
        _y - i * this.particleDist,
        this.particleMass,
        this.particleDrag
      );
    }
    this.Update = function (_dt) {
      var i = 0;
      this.time += _dt * this.oscillationSpeed;
      this.position.y += this.ySpeed * _dt;
      this.position.x += cos(this.time) * this.oscillationDistance * _dt;
      this.particles[0].position = this.position;
      var dX = this.prevPosition.x - this.position.x;
      var dY = this.prevPosition.y - this.position.y;
      var delta = sqrt(dX * dX + dY * dY);
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      for (i = 1; i < this.particleCount; i++) {
        var dirP = Vector2.Sub(
          this.particles[i - 1].position,
          this.particles[i].position
        );
        dirP.Normalize();
        dirP.Mul((delta / _dt) * this.velocityInherit);
        this.particles[i].AddForce(dirP);
      }
      for (i = 1; i < this.particleCount; i++) {
        this.particles[i].Integrate(_dt);
      }
      for (i = 1; i < this.particleCount; i++) {
        var rp2 = new Vector2(
          this.particles[i].position.x,
          this.particles[i].position.y
        );
        rp2.Sub(this.particles[i - 1].position);
        rp2.Normalize();
        rp2.Mul(this.particleDist);
        rp2.Add(this.particles[i - 1].position);
        this.particles[i].position = rp2;
      }
      if (
        this.position.y >
        ConfettiRibbon.bounds.y + this.particleDist * this.particleCount
      ) {
        this.Reset();
      }
    };
    this.Reset = function () {
      this.position.y = -random() * ConfettiRibbon.bounds.y;
      this.position.x = random() * ConfettiRibbon.bounds.x;
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      this.velocityInherit = random() * 2 + 4;
      this.time = random() * 100;
      this.oscillationSpeed = random() * 2.0 + 1.5;
      this.oscillationDistance = random() * 40 + 40;
      this.ySpeed = random() * 40 + 80;
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      this.particles = new Array();
      for (var i = 0; i < this.particleCount; i++) {
        this.particles[i] = new EulerMass(
          this.position.x,
          this.position.y - i * this.particleDist,
          this.particleMass,
          this.particleDrag
        );
      }
    };
    this.Draw = function (_g) {
      for (var i = 0; i < this.particleCount - 1; i++) {
        var p0 = new Vector2(
          this.particles[i].position.x + this.xOff,
          this.particles[i].position.y + this.yOff
        );
        var p1 = new Vector2(
          this.particles[i + 1].position.x + this.xOff,
          this.particles[i + 1].position.y + this.yOff
        );
        if (
          this.Side(
            this.particles[i].position.x,
            this.particles[i].position.y,
            this.particles[i + 1].position.x,
            this.particles[i + 1].position.y,
            p1.x,
            p1.y
          ) < 0
        ) {
          _g.fillStyle = this.frontColor;
          _g.strokeStyle = this.frontColor;
        } else {
          _g.fillStyle = this.backColor;
          _g.strokeStyle = this.backColor;
        }
        if (i == 0) {
          _g.beginPath();
          _g.moveTo(
            this.particles[i].position.x * retina,
            this.particles[i].position.y * retina
          );
          _g.lineTo(
            this.particles[i + 1].position.x * retina,
            this.particles[i + 1].position.y * retina
          );
          _g.lineTo(
            (this.particles[i + 1].position.x + p1.x) * 0.5 * retina,
            (this.particles[i + 1].position.y + p1.y) * 0.5 * retina
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
          _g.beginPath();
          _g.moveTo(p1.x * retina, p1.y * retina);
          _g.lineTo(p0.x * retina, p0.y * retina);
          _g.lineTo(
            (this.particles[i + 1].position.x + p1.x) * 0.5 * retina,
            (this.particles[i + 1].position.y + p1.y) * 0.5 * retina
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
        } else if (i == this.particleCount - 2) {
          _g.beginPath();
          _g.moveTo(
            this.particles[i].position.x * retina,
            this.particles[i].position.y * retina
          );
          _g.lineTo(
            this.particles[i + 1].position.x * retina,
            this.particles[i + 1].position.y * retina
          );
          _g.lineTo(
            (this.particles[i].position.x + p0.x) * 0.5 * retina,
            (this.particles[i].position.y + p0.y) * 0.5 * retina
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
          _g.beginPath();
          _g.moveTo(p1.x * retina, p1.y * retina);
          _g.lineTo(p0.x * retina, p0.y * retina);
          _g.lineTo(
            (this.particles[i].position.x + p0.x) * 0.5 * retina,
            (this.particles[i].position.y + p0.y) * 0.5 * retina
          );
          _g.closePath();
          _g.stroke();
          _g.fill();
        } else {
          _g.beginPath();
          _g.moveTo(
            this.particles[i].position.x * retina,
            this.particles[i].position.y * retina
          );
          _g.lineTo(
            this.particles[i + 1].position.x * retina,
            this.particles[i + 1].position.y * retina
          );
          _g.lineTo(p1.x * retina, p1.y * retina);
          _g.lineTo(p0.x * retina, p0.y * retina);
          _g.closePath();
          _g.stroke();
          _g.fill();
        }
      }
    };
    this.Side = function (x1, y1, x2, y2, x3, y3) {
      return (x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2);
    };
  }
  ConfettiRibbon.bounds = new Vector2(0, 0);
  confetti = {};
  confetti.Context = function (id) {
    var i = 0;
    var canvas = document.getElementById(id);
    var canvasParent = canvas.parentNode;
    var canvasWidth = canvasParent.offsetWidth;
    var canvasHeight = canvasParent.offsetHeight;
    canvas.width = canvasWidth * retina;
    canvas.height = canvasHeight * retina;
    var context = canvas.getContext("2d");
    var interval = null;
    var confettiRibbons = new Array();
    ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
    for (i = 0; i < confettiRibbonCount; i++) {
      confettiRibbons[i] = new ConfettiRibbon(
        random() * canvasWidth,
        -random() * canvasHeight * 2,
        ribbonPaperCount,
        ribbonPaperDist,
        ribbonPaperThick,
        45,
        1,
        0.05
      );
    }
    var confettiPapers = new Array();
    ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
    for (i = 0; i < confettiPaperCount; i++) {
      confettiPapers[i] = new ConfettiPaper(
        random() * canvasWidth,
        random() * canvasHeight
      );
    }
    this.resize = function () {
      canvasWidth = canvasParent.offsetWidth;
      canvasHeight = canvasParent.offsetHeight;
      canvas.width = canvasWidth * retina;
      canvas.height = canvasHeight * retina;
      ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
      ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
    };
    this.start = function () {
      this.stop();
      var context = this;
      this.update();
    };
    this.stop = function () {
      cAF(this.interval);
    };
    this.update = function () {
      var i = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (i = 0; i < confettiPaperCount; i++) {
        confettiPapers[i].Update(duration);
        confettiPapers[i].Draw(context);
      }
      for (i = 0; i < confettiRibbonCount; i++) {
        confettiRibbons[i].Update(duration);
        confettiRibbons[i].Draw(context);
      }
      this.interval = rAF(function () {
        confetti.update();
      });
    };
  };
  var confetti = new confetti.Context("confetti");
  confetti.start();
  window.addEventListener("resize", function (event) {
    confetti.resize();
  });
});

function makeItRain() {
  document.getElementById("makeItRain").disabled = true;
  console.log("Making it rain!");
  var end = Date.now() + 3 * 1000; // durasi 3 detik

  var colors = [
    "#FF6F61", // Coral
    "#6B5B95", // Purple-gray
    "#88B04B", // Olive green
    "#F7CAC9", // Light pink
    "#92A8D1", // Soft blue
    "#955251", // Mauve
    "#B565A7", // Orchid
    "#009B77", // Teal
    "#DD4124", // Fiery red-orange
    "#45B8AC", // Aqua
  ];

  var timer = setInterval(() => {
    confetti({
      particleCount: 8, // cukup sedikit
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 8,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() > end) {
      clearInterval(timer);
      document.getElementById("makeItRain").disabled = false;
    }
  }, 150); // jeda 150ms antar tembakan
}

function playRandomExplosion() {
  const files = [
    "sounds/explosion0.mp3",
    "sounds/explosion1.mp3",
    "sounds/explosion2.mp3",
  ];
  const audio = new Audio(files[Math.floor(Math.random() * files.length)]);
  audio.volume = 0.8;
  audio.play();
}

function startFireworksWithSound() {
  fireworks.start();
  soundEnabled = true;
  soundInterval = setInterval(playRandomExplosion, 800);
}

function stopFireworksWithSound() {
  fireworks.stop();
  soundEnabled = false;
  if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null;
  }
}
