"use strict";
cc._RF.push(module, 'b4defFbtI5ArILd8rve1U9s', 'contactForWheel');
// scripts/contactForWheel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _needNotify: true
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    if (otherCollider.name === 'bottom<PhysicsBoxCollider>') {
      // 让刚体缓慢停止运动
      selfCollider.body.linearDamping = 1; // tag: Number, 可能的值 = [0,1,2,3,4], 对应底部不同的框

      if (this._needNotify) {
        console.log(otherCollider.tag);
        this._needNotify = false; // // 测试
        // cc.director.loadScene('Game');
      }
    } else {
      selfCollider.restitution = Math.random().toFixed(2);
    }
  }
});

cc._RF.pop();