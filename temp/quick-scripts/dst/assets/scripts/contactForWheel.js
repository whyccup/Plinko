
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
    _needNotify: true
  },
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
    if (otherCollider.name === 'bottom<PhysicsBoxCollider>') {
      // 让刚体缓慢停止运动
      selfCollider.body.linearDamping = 1; // tag: Number, 可能的值 = [0,1,2,3,4], 对应底部不同的框

      if (this._needNotify) {
        console.log(otherCollider.tag);
        this._needNotify = false;
      }
    } else {
      selfCollider.restitution = Math.random(0, 1).toFixed(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRhY3RGb3JXaGVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9uZWVkTm90aWZ5Iiwib25FbmRDb250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJuYW1lIiwiYm9keSIsImxpbmVhckRhbXBpbmciLCJjb25zb2xlIiwibG9nIiwidGFnIiwicmVzdGl0dXRpb24iLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQURMLEdBSFA7QUFPTEMsRUFBQUEsWUFBWSxFQUFFLHNCQUFVQyxPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7QUFDMUQsUUFBSUEsYUFBYSxDQUFDQyxJQUFkLEtBQXVCLDRCQUEzQixFQUF5RDtBQUNyRDtBQUNBRixNQUFBQSxZQUFZLENBQUNHLElBQWIsQ0FBa0JDLGFBQWxCLEdBQWtDLENBQWxDLENBRnFELENBR3JEOztBQUNBLFVBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQlEsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGFBQWEsQ0FBQ00sR0FBMUI7QUFDQSxhQUFLVixXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixLQVJELE1BUU87QUFDSEcsTUFBQUEsWUFBWSxDQUFDUSxXQUFiLEdBQTJCQyxJQUFJLENBQUNDLE1BQUwsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFpQkMsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBM0I7QUFDSDtBQUNKO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9uZWVkTm90aWZ5OiB0cnVlIFxuICAgIH0sXG4gICAgXG4gICAgb25FbmRDb250YWN0OiBmdW5jdGlvbiAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5hbWUgPT09ICdib3R0b208UGh5c2ljc0JveENvbGxpZGVyPicpIHtcbiAgICAgICAgICAgIC8vIOiuqeWImuS9k+e8k+aFouWBnOatoui/kOWKqFxuICAgICAgICAgICAgc2VsZkNvbGxpZGVyLmJvZHkubGluZWFyRGFtcGluZyA9IDFcbiAgICAgICAgICAgIC8vIHRhZzogTnVtYmVyLCDlj6/og73nmoTlgLwgPSBbMCwxLDIsMyw0XSwg5a+55bqU5bqV6YOo5LiN5ZCM55qE5qGGXG4gICAgICAgICAgICBpZiAodGhpcy5fbmVlZE5vdGlmeSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyQ29sbGlkZXIudGFnKVxuICAgICAgICAgICAgICAgIHRoaXMuX25lZWROb3RpZnkgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZkNvbGxpZGVyLnJlc3RpdHV0aW9uID0gTWF0aC5yYW5kb20oMCwxKS50b0ZpeGVkKDIpXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==