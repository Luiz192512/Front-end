function Interruptor() {
    var image = document.getElementById('myImage');
    if (image.src.match("lampadaon")) {
      image.src = "img/lampadaoff.png";
    } else {
      image.src = "img/lampadaon.png";
    }
  }