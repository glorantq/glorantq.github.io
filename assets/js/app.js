particlesJS("particles-js", { "particles": { "number": { "value": 95, "density": {
"enable": true, "value_area": 552.4033491425909 } }, "color": { "value":
"#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color":
"#000000" }, "polygon": { "nb_sides": 4 }, "image": { "src": "img/github.svg",
"width": 100, "height": 100 } }, "opacity": { "value": 0.4008530152163807,
"random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1,
"sync": false } }, "size": { "value": 1, "random": true, "anim": { "enable":
true, "speed": 4.872463273808071, "size_min": 2.436231636904035, "sync": true } },
"line_linked": { "enable": true, "distance": 144.30708547789706, "color":
"#ffffff", "opacity": 0.5371430403899501, "width": 0.8017060304327615 }, "move": {
"enable": true, "speed": 6, "direction": "none", "random": true, "straight":
false, "out_mode": "out", "bounce": false, "attract": { "enable": true,
"rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas",
"events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": {
"enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": {
"distance": 140, "line_linked": { "opacity": 1 } }, "bubble": {
"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
"repulse": { "distance": 73.08694910712106, "duration": 0.4 }, "push": {
"particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

let messages = [
  "Henlo",
  "Henlo fren",
  "haha yes",
  "welcome fellow dimensional",
  "haha yes this is my W E B S I T E",
  "welcome to this universe fren",
  "void.mp8 is invading this plane<br>Please wait...",
  "goond morning",
  "you may access the C U B E S",
  "welcome to the C U B E S fren",
  "the left buttons do nothing",
  "*scronch*",
  "do i see a VEGETAL??",
  "i protec",
  "no attac allowed here fren",
  "beware of PILLARS",
  "welcome to the secretts",
  "haha",
  "whom'st'd've",
  "are you surreal my fren?",
  "haha A S C E N D",
  "haha NO",
  "You have accessed a surreal website",
  "haha",
  "Kotlin > Java > C++ > C#",
  "Ich spreche Deutsch."
];

$("document").ready(() => {
  let messageID = getQueryParams(document.location.search).message;
  if(messageID && !isNaN(messageID)) {
      if(messageID < 0) messageID = 0;
      if(messageID > messages.length - 1) messageID = messages.length - 1;
      $("#tweet_message").html(messages[messageID]);
  } else {
    $("#tweet_message").html(messages[random(0, messages.length)]);
  }
});

function random(lowerBound, upperBound) {
  return Math.floor((Math.random() * upperBound) + lowerBound);
}

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}
