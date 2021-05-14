
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
        this._needNotify = false; // // 测试
        // cc.director.loadScene('Game');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRhY3RGb3JXaGVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9uZWVkTm90aWZ5Iiwib25FbmRDb250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJuYW1lIiwiYm9keSIsImxpbmVhckRhbXBpbmciLCJjb25zb2xlIiwibG9nIiwidGFnIiwicmVzdGl0dXRpb24iLCJNYXRoIiwicmFuZG9tIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQURMLEdBSFA7QUFPTEMsRUFBQUEsWUFBWSxFQUFFLHNCQUFVQyxPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7QUFDMUQsUUFBSUEsYUFBYSxDQUFDQyxJQUFkLEtBQXVCLDRCQUEzQixFQUF5RDtBQUNyRDtBQUNBRixNQUFBQSxZQUFZLENBQUNHLElBQWIsQ0FBa0JDLGFBQWxCLEdBQWtDLENBQWxDLENBRnFELENBR3JEOztBQUNBLFVBQUksS0FBS1AsV0FBVCxFQUFzQjtBQUNsQlEsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGFBQWEsQ0FBQ00sR0FBMUI7QUFDQSxhQUFLVixXQUFMLEdBQW1CLEtBQW5CLENBRmtCLENBSWxCO0FBQ0E7QUFDSDtBQUNKLEtBWEQsTUFXTztBQUNIRyxNQUFBQSxZQUFZLENBQUNRLFdBQWIsR0FBMkJDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxPQUFkLENBQXNCLENBQXRCLENBQTNCO0FBQ0g7QUFDSjtBQXRCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfbmVlZE5vdGlmeTogdHJ1ZSBcbiAgICB9LFxuICAgIFxuICAgIG9uRW5kQ29udGFjdDogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5uYW1lID09PSAnYm90dG9tPFBoeXNpY3NCb3hDb2xsaWRlcj4nKSB7XG4gICAgICAgICAgICAvLyDorqnliJrkvZPnvJPmhaLlgZzmraLov5DliqhcbiAgICAgICAgICAgIHNlbGZDb2xsaWRlci5ib2R5LmxpbmVhckRhbXBpbmcgPSAxXG4gICAgICAgICAgICAvLyB0YWc6IE51bWJlciwg5Y+v6IO955qE5YC8ID0gWzAsMSwyLDMsNF0sIOWvueW6lOW6lemDqOS4jeWQjOeahOahhlxuICAgICAgICAgICAgaWYgKHRoaXMuX25lZWROb3RpZnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlckNvbGxpZGVyLnRhZylcbiAgICAgICAgICAgICAgICB0aGlzLl9uZWVkTm90aWZ5ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIC8vIC8vIOa1i+ivlVxuICAgICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZkNvbGxpZGVyLnJlc3RpdHV0aW9uID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDIpXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==