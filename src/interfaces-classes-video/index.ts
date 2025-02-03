interface VideoPlayerElements{
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  progressBar: HTMLParagraphElement;
  frente: HTMLButtonElement;
  tras: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  executarPrograma(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol{
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private progressBar: HTMLParagraphElement;
  private frente: HTMLButtonElement;
  private tras: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements){
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.progressBar = videoPlayerElements.progressBar;
    this.frente = videoPlayerElements.frente;
    this.tras = videoPlayerElements.tras;
  }
  fancyTimeFormat(duration: number) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  }
  playToggle(): void{
    if(this.videoPlayer.paused){
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    }else{
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play'
    }
  }
  executarPrograma(): void{
  this.playButton.addEventListener('click', () => {
    this.playToggle();
  });
  this.stopButton.addEventListener('click',() => {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play'
  })
  this.videoPlayer.addEventListener('timeupdate', () => {
    const progress = Math.trunc(this.videoPlayer.currentTime);
    this.progressBar.innerText = this.fancyTimeFormat(progress).toString()
  });
  this.frente.addEventListener('click',() => {
    this.videoPlayer.currentTime += 5
  })
  this.tras.addEventListener('click',() => {
    this.videoPlayer.currentTime -= 5
  })
  }
}


const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton:document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  progressBar: document.querySelector('.progress') as HTMLParagraphElement,
  frente: document.querySelector('.frente') as HTMLButtonElement,
  tras: document.querySelector('.tras') as HTMLButtonElement
})

videoPlayer.executarPrograma();
