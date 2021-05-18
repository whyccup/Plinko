
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRhY3RGb3JXaGVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF1ZGlvUGVuZyIsIkF1ZGlvQ2xpcCIsImF1ZGlvU291bmRTdWNjZXNzIiwicGxheVBlbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJwbGF5QXVkaW9Tb3VuZFN1Y2Nlc3MiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwib25FbmRDb250YWN0IiwibmFtZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJlbmFibGVkQ29udGFjdExpc3RlbmVyIiwiYm9keSIsImxpbmVhckRhbXBpbmciLCJjb25zb2xlIiwibG9nIiwidGFnIiwicmVzdGl0dXRpb24iLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxTQUROO0FBRVJDLElBQUFBLGlCQUFpQixFQUFFTixFQUFFLENBQUNLO0FBRmQsR0FIUDtBQVFMRSxFQUFBQSxRQVJLLHNCQVFNO0FBQ1BQLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtMLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0FWSTtBQVlMTSxFQUFBQSxxQkFaSyxtQ0FZbUI7QUFDcEJWLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtILGlCQUEvQixFQUFrRCxLQUFsRDtBQUNILEdBZEk7QUFnQkxLLEVBQUFBLGNBaEJLLDBCQWdCV0MsT0FoQlgsRUFnQm9CQyxZQWhCcEIsRUFnQmtDQyxhQWhCbEMsRUFnQmlEO0FBQ2xELFNBQUtQLFFBQUw7QUFDSCxHQWxCSTtBQW9CTFEsRUFBQUEsWUFwQkssd0JBb0JTSCxPQXBCVCxFQW9Ca0JDLFlBcEJsQixFQW9CZ0NDLGFBcEJoQyxFQW9CK0M7QUFDaEQsUUFBSUEsYUFBYSxDQUFDRSxJQUFkLEtBQXVCLDRCQUEzQixFQUF5RDtBQUNyRCxXQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJsQixFQUFFLENBQUNtQixTQUExQixFQUFxQ0Msc0JBQXJDLEdBQThELEtBQTlEO0FBQ0EsV0FBS1YscUJBQUw7QUFDQUcsTUFBQUEsWUFBWSxDQUFDUSxJQUFiLENBQWtCQyxhQUFsQixHQUFrQyxDQUFsQztBQUVBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsYUFBYSxDQUFDVyxHQUExQixFQUxxRCxDQUt0QjtBQUUvQjtBQUNBO0FBQ0gsS0FURCxNQVNPO0FBQ0haLE1BQUFBLFlBQVksQ0FBQ2EsV0FBYixHQUEyQkMsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBM0I7QUFDSDtBQUNKO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGF1ZGlvUGVuZzogY2MuQXVkaW9DbGlwLFxuICAgICAgICBhdWRpb1NvdW5kU3VjY2VzczogY2MuQXVkaW9DbGlwLFxuICAgIH0sXG5cbiAgICBwbGF5UGVuZygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvUGVuZywgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBwbGF5QXVkaW9Tb3VuZFN1Y2Nlc3MoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5hdWRpb1NvdW5kU3VjY2VzcywgZmFsc2UpO1xuICAgIH0sXG4gICAgXG4gICAgb25CZWdpbkNvbnRhY3QgKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICB0aGlzLnBsYXlQZW5nKClcbiAgICB9LFxuICAgIFxuICAgIG9uRW5kQ29udGFjdCAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5hbWUgPT09ICdib3R0b208UGh5c2ljc0JveENvbGxpZGVyPicpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMucGxheUF1ZGlvU291bmRTdWNjZXNzKClcbiAgICAgICAgICAgIHNlbGZDb2xsaWRlci5ib2R5LmxpbmVhckRhbXBpbmcgPSAxXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyQ29sbGlkZXIudGFnKSAvLyB0YWc6IE51bWJlciwg5Y+v6IO955qE5YC8ID0gWzAsMSwyLDMsNF0sIOWvueW6lOW6lemDqOS4jeWQjOeahOahhlxuXG4gICAgICAgICAgICAvLyAvLyDmtYvor5VcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZkNvbGxpZGVyLnJlc3RpdHV0aW9uID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDIpXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==