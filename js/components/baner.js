export function baner() {
    const baner = document.createElement('div');
    baner.classList.add('baner');
    baner.innerHTML = '<video src="https://player.vimeo.com/progressive_redirect/playback/776964155/rendition/1080p/file.mp4?loc=external&signature=806b63b46a355463d023fa063753edd2dd3aa111c0ce4e5e06200a9736dbf412" autoplay muted loop></video>';

    return baner;
}