// Synthesized ambient fitness audio & click sound effects using Web Audio API
class AudioManager {
  private ctx: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private isPlayingAmbient = false;
  private oscillators: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public playClick(type: 'click' | 'power' | 'metal' = 'click') {
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      if (type === 'metal') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      } else if (type === 'power') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(360, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      }

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + (type === 'metal' ? 0.15 : 0.08));
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public toggleAmbient(): boolean {
    this.initContext();
    if (!this.ctx) return false;
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  private startAmbient() {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 2);
    this.ambientGain.connect(this.ctx.destination);

    // Deep rhythmic motivational hum
    const freqs = [55, 110, 165];
    this.oscillators = freqs.map((f, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx!.currentTime);
      osc.connect(this.ambientGain!);
      osc.start();
      return osc;
    });
    this.isPlayingAmbient = true;
  }

  private stopAmbient() {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        this.oscillators.forEach(o => {
          try { o.stop(); } catch { /* ignore */ }
        });
        this.oscillators = [];
      }, 500);
    }
    this.isPlayingAmbient = false;
  }

  public getIsPlaying(): boolean {
    return this.isPlayingAmbient;
  }
}

export const audioService = new AudioManager();
