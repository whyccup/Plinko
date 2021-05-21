
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/contactForWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4defFbtI5ArILd8rve1U9s', 'contactForWheel');
// scripts/contactForWheel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    audioPeng: cc.AudioClip
  },
  playPeng: function playPeng() {
    cc.audioEngine.playEffect(this.audioPeng, false);
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    this.playPeng();
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    if (otherCollider.name === 'bottom<PhysicsBoxCollider>') {
      this.node.getComponent(cc.RigidBody).enabledContactListener = false;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRhY3RGb3JXaGVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF1ZGlvUGVuZyIsIkF1ZGlvQ2xpcCIsInBsYXlQZW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsIm9uRW5kQ29udGFjdCIsIm5hbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiZW5hYmxlZENvbnRhY3RMaXN0ZW5lciIsImJvZHkiLCJsaW5lYXJEYW1waW5nIiwiY29uc29sZSIsImxvZyIsInRhZyIsInJlc3RpdHV0aW9uIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7QUFETixHQUhQO0FBT0xDLEVBQUFBLFFBUEssc0JBT007QUFDUE4sSUFBQUEsRUFBRSxDQUFDTyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS0osU0FBL0IsRUFBMEMsS0FBMUM7QUFDSCxHQVRJO0FBV0xLLEVBQUFBLGNBWEssMEJBV1dDLE9BWFgsRUFXb0JDLFlBWHBCLEVBV2tDQyxhQVhsQyxFQVdpRDtBQUNsRCxTQUFLTixRQUFMO0FBQ0gsR0FiSTtBQWVMTyxFQUFBQSxZQWZLLHdCQWVTSCxPQWZULEVBZWtCQyxZQWZsQixFQWVnQ0MsYUFmaEMsRUFlK0M7QUFDaEQsUUFBSUEsYUFBYSxDQUFDRSxJQUFkLEtBQXVCLDRCQUEzQixFQUF5RDtBQUNyRCxXQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJoQixFQUFFLENBQUNpQixTQUExQixFQUFxQ0Msc0JBQXJDLEdBQThELEtBQTlEO0FBQ0FQLE1BQUFBLFlBQVksQ0FBQ1EsSUFBYixDQUFrQkMsYUFBbEIsR0FBa0MsQ0FBbEM7QUFFQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlWLGFBQWEsQ0FBQ1csR0FBMUIsRUFKcUQsQ0FJdEI7QUFFL0I7QUFDQTtBQUNILEtBUkQsTUFRTztBQUNIWixNQUFBQSxZQUFZLENBQUNhLFdBQWIsR0FBMkJDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxPQUFkLENBQXNCLENBQXRCLENBQTNCO0FBQ0g7QUFDSjtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhdWRpb1Blbmc6IGNjLkF1ZGlvQ2xpcCxcbiAgICB9LFxuXG4gICAgcGxheVBlbmcoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb1BlbmcsIGZhbHNlKTtcbiAgICB9LFxuICAgIFxuICAgIG9uQmVnaW5Db250YWN0IChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5UGVuZygpXG4gICAgfSxcbiAgICBcbiAgICBvbkVuZENvbnRhY3QgKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5uYW1lID09PSAnYm90dG9tPFBoeXNpY3NCb3hDb2xsaWRlcj4nKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IGZhbHNlXG4gICAgICAgICAgICBzZWxmQ29sbGlkZXIuYm9keS5saW5lYXJEYW1waW5nID0gMVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlckNvbGxpZGVyLnRhZykgLy8gdGFnOiBOdW1iZXIsIOWPr+iDveeahOWAvCA9IFswLDEsMiwzLDRdLCDlr7nlupTlupXpg6jkuI3lkIznmoTmoYZcblxuICAgICAgICAgICAgLy8gLy8g5rWL6K+VXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGZDb2xsaWRlci5yZXN0aXR1dGlvbiA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=