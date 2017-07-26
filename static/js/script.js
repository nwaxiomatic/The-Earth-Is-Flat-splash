var supportsAutoplay = false;
var waitTime = 2000;
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

setInterval(function(){
    $('.earth').toggleClass('shown');
}, 2000);

function resizeVideo(){
    var h = $(document).height();
    var w = $(document).width();
    if(h > w){
        $('.square-box').css({
            'width' : '100vh',
            'height' : '100vh',
        })
    }
    else {
        $('.square-box').css({
            'width' : '100vw',
            'height' : '100vw',
        })
    }
}
resizeVideo();
window.addEventListener('resize', resizeVideo);


player.on('timeupdate', function(data) {
    $('.overlay').removeClass('shown');
    if (data.seconds > 2){
      $('.donate').addClass('shown');
    }
    if (data.seconds > 10){
      $('.instagram').addClass('shown');
    }
});

var state = { autoplaying : false };
    
player.on('play', () => {
  state.autoplaying = true;
  player.off('play');
});

player.getPaused().then((paused) => {
  var playing = !paused;
  state.autoplaying = state.autoplaying || playing;
  state.apiEnabled = true;
});

var state = { apiEnabled : null };
                  
setTimeout(() => {
  if (state.apiEnabled === null) {
    state.apiEnabled = false;
    $('.donate').addClass('shown');
    $('.instagram').addClass('shown');
    //$('.overlay').removeClass('shown');
  }
}, 5000);