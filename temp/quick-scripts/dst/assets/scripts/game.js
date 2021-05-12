
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b217jAerdHLpl8FUqnEg7m', 'game');
// scripts/game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    is_debug: false,
    //是否显示调试信息;
    gravity: cc.v2(0, -320),
    // 重力加速度是一个向量, 有方向的,2D, Vec重力加速度的大小;
    wheel: cc.Node
  },
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;

    if (this.is_debug) {
      var Bits = cc.PhysicsManager.DrawBits;
      cc.director.getPhysicsManager().debugDrawFlags = Bits.e_jointBit | Bits.e_shapeBit;
    } else {
      cc.director.getPhysicsManager().debugDrawFlags = 0;
    }

    cc.director.getPhysicsManager().gravity = this.gravity;
    cc.director.getPhysicsManager().enabled = false;
  },
  dropTheWheel: function dropTheWheel() {
    cc.director.getPhysicsManager().enabled = true;
    this.wheel.getComponent('drop').enabled = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc19kZWJ1ZyIsImdyYXZpdHkiLCJ2MiIsIndoZWVsIiwiTm9kZSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiQml0cyIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJkZWJ1Z0RyYXdGbGFncyIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0IiwiZHJvcFRoZVdoZWVsIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLEtBREY7QUFDUztBQUNqQkMsSUFBQUEsT0FBTyxFQUFFTCxFQUFFLENBQUNNLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWLENBRkQ7QUFFaUI7QUFDekJDLElBQUFBLEtBQUssRUFBRVAsRUFBRSxDQUFDUTtBQUhGLEdBSFA7QUFTTEMsRUFBQUEsTUFUSyxvQkFTSTtBQUNMVCxJQUFBQSxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NDLE9BQWhDLEdBQTBDLElBQTFDOztBQUNBLFFBQUksS0FBS1IsUUFBVCxFQUFtQjtBQUNmLFVBQUlTLElBQUksR0FBR2IsRUFBRSxDQUFDYyxjQUFILENBQWtCQyxRQUE3QjtBQUNBZixNQUFBQSxFQUFFLENBQUNVLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NLLGNBQWhDLEdBQWlESCxJQUFJLENBQUNJLFVBQUwsR0FBa0JKLElBQUksQ0FBQ0ssVUFBeEU7QUFDSCxLQUhELE1BR087QUFDSGxCLE1BQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0ssY0FBaEMsR0FBaUQsQ0FBakQ7QUFDSDs7QUFDRGhCLElBQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ04sT0FBaEMsR0FBMEMsS0FBS0EsT0FBL0M7QUFDQUwsSUFBQUEsRUFBRSxDQUFDVSxRQUFILENBQVlDLGlCQUFaLEdBQWdDQyxPQUFoQyxHQUEwQyxLQUExQztBQUVILEdBcEJJO0FBc0JMTyxFQUFBQSxZQXRCSywwQkFzQlU7QUFDWG5CLElBQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7QUFDQSxTQUFLTCxLQUFMLENBQVdhLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0NSLE9BQWhDLEdBQTBDLEtBQTFDO0FBQ0g7QUF6QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaXNfZGVidWc6IGZhbHNlLCAvL+aYr+WQpuaYvuekuuiwg+ivleS/oeaBrztcbiAgICAgICAgZ3Jhdml0eTogY2MudjIoMCwgLTMyMCksIC8vIOmHjeWKm+WKoOmAn+W6puaYr+S4gOS4quWQkemHjywg5pyJ5pa55ZCR55qELDJELCBWZWPph43lipvliqDpgJ/luqbnmoTlpKflsI87XG4gICAgICAgIHdoZWVsOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNfZGVidWcpIHtcbiAgICAgICAgICAgIHZhciBCaXRzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHM7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gQml0cy5lX2pvaW50Qml0IHwgQml0cy5lX3NoYXBlQml0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gdGhpcy5ncmF2aXR5O1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIH0sXG5cbiAgICBkcm9wVGhlV2hlZWwoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud2hlZWwuZ2V0Q29tcG9uZW50KCdkcm9wJykuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbn0pOyJdfQ==