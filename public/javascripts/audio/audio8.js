window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();


function pA14()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};

function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio14", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA16()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};

function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio16", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}