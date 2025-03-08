let currentVideoIndex = 0;
const videos = ['vid.mp4', 'vid1.mp4'];
const videoElement = document.createElement('video');
videoElement.width = 600;
videoElement.controls = true;
document.body.appendChild(videoElement);

document.getElementById('heartButton').addEventListener('click', function() {
    if (currentVideoIndex < videos.length) {
        videoElement.src = videos[currentVideoIndex];
        videoElement.style.display = 'block';
        videoElement.play();
        currentVideoIndex++;
    } else {
        videoElement.style.display = 'none';
        currentVideoIndex = 0; // Reset to first video
    }
    
    videoElement.onended = function() {
        videoElement.style.display = 'none'; // Hide video after it ends
    };
});
