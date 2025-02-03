interface VideoPlayerElements{
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  executarPrograma(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol, VideoPlayerElements{
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(){}

  playToggle(): void{

  }
  stop(): void{

  }
  executarPrograma(): void{

  }
}
