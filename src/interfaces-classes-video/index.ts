interface VideoPlayerElements{
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  progressBar: HTMLParagraphElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  executarPrograma(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol{
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private progressBar: HTMLParagraphElement;

  constructor(videoPlayerElements: VideoPlayerElements){
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.progressBar = videoPlayerElements.progressBar;
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
  stop(): void{
  //
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
    this.progressBar.innerText = progress.toString();

  });
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton:document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  progressBar: document.querySelector('.progress') as HTMLParagraphElement
})

videoPlayer.executarPrograma();
