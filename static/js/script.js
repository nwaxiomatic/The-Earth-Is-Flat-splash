var supportsAutoplay = false;
var waitTime;

$('#bg-video').vide({
	mp4: 'static/media/video/Flat Earth.mp4',
	poster: 'static/media/img/flatearth.png',
}, {
	posterType: 'jpg',
	origin: 'content-box',
});
instance = $('#bg-video').data('vide');
video = instance.getVideoObject();
video.addEventListener('play', function () {
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