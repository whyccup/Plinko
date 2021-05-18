"use strict";
cc._RF.push(module, 'b4defFbtI5ArILd8rve1U9s', 'contactForWheel');
// scripts/contactForWheel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    audioPeng: cc.AudioClip,
    audioSoundSuccess: cc.AudioClip
  },
  playPeng: function playPeng() {
    cc.audioEngine.playEffect(this.audioPeng, false);
  },
  playAudioSoundSuccess: function playAudioSoundSuccess() {
    cc.audioEngine.playEffect(this.audioSoundSuccess, false);
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    this.playPeng();
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    if (otherCollider.name === 'bottom<PhysicsBoxCollider>') {
      this.node.getComponent(cc.RigidBody).enabledContactListener = false;
      this.playAudioSoundSuccess();
      selfCollider.body.linearDamping = 1;
      console.log(otherCollider.tag); // tag: Number, 可能的值 = [0,1,2,3,4], 对应底部不同的框
      // // 测试
      // cc.director.loadScene('Game');
    } else {
      selfCollider.restitution = Math.random().toFixed(2);
    }
  }
});

cc._RF.pop();