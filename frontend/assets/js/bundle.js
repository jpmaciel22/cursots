(()=>{"use strict";new class{constructor(e){this.videoPlayer=e.videoPlayer,this.playButton=e.playButton,this.stopButton=e.stopButton,this.progressBar=e.progressBar,this.frente=e.frente,this.tras=e.tras}playToggle(){this.videoPlayer.paused?(this.videoPlayer.play(),this.playButton.innerText="Pause"):(this.videoPlayer.pause(),this.playButton.innerText="Play")}stop(){}executarPrograma(){this.playButton.addEventListener("click",(()=>{this.playToggle()})),this.stopButton.addEventListener("click",(()=>{this.videoPlayer.pause(),this.videoPlayer.currentTime=0,this.playButton.innerText="Play"})),this.videoPlayer.addEventListener("timeupdate",(()=>{const e=Math.trunc(this.videoPlayer.currentTime);this.progressBar.innerText=e.toString()})),this.frente.addEventListener("click",(()=>{this.videoPlayer.currentTime+=5})),this.tras.addEventListener("click",(()=>{this.videoPlayer.currentTime-=5}))}}({videoPlayer:document.querySelector(".video"),playButton:document.querySelector(".play"),stopButton:document.querySelector(".stop"),progressBar:document.querySelector(".progress"),frente:document.querySelector(".frente"),tras:document.querySelector(".tras")}).executarPrograma()})();
//# sourceMappingURL=bundle.js.map