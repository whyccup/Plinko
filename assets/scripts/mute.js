cc.Class({
    extends: cc.Component,

    properties: {
      pengBgm: cc.Node,
      startBgm: cc.Node,
      startGameBgm: cc.Node,
      _mute: false,
      off: cc.SpriteFrame,
      on: cc.SpriteFrame
    },

    toggleMute() {
      this._mute = !this._mute

      if (cc.audioEngine.getEffectsVolume() === 0) {
        cc.audioEngine.setEffectsVolume(1);
      } else {
        cc.audioEngine.setEffectsVolume(0);
      }
      const startBgmAudioSource = this.startBgm.getComponent(cc.AudioSource)
      startBgmAudioSource.mute = !startBgmAudioSource.mute

      const startGameBgmAudioSource = this.startGameBgm.getComponent(cc.AudioSource)
      startGameBgmAudioSource.mute = !startGameBgmAudioSource.mute


      const sprite = this.node.getComponent(cc.Sprite)
      sprite.spriteFrame = this._mute ? this.off : this.on
    }
});
