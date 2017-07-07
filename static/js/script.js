var supportsAutoplay = false;
var waitTime;
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

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

player.on('play', function() {
    supportsAutoplay = true;
});

setTimeout(          //wait for listener to run
    function(){
        if(supportsAutoplay){
        	video.onloadeddata = function(){
	$('#bg-video-box').addClass('shown');
}
        }
        else {
        	$('#bg-video-box').addClass('shown');
        }
    },
    waitTime
); 