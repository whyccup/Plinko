
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

    cc.director.getPhysicsManager().enabled = false; // // 测试
    // this.dropTheWheel()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc19kZWJ1ZyIsIndoZWVsIiwiTm9kZSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiQml0cyIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJkZWJ1Z0RyYXdGbGFncyIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0IiwiZHJvcFRoZVdoZWVsIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLEtBREY7QUFDUztBQUNqQkMsSUFBQUEsS0FBSyxFQUFFTCxFQUFFLENBQUNNO0FBRkYsR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFJO0FBQ0xQLElBQUFBLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7O0FBQ0EsUUFBSSxLQUFLTixRQUFULEVBQW1CO0FBQ2YsVUFBSU8sSUFBSSxHQUFHWCxFQUFFLENBQUNZLGNBQUgsQ0FBa0JDLFFBQTdCO0FBQ0FiLE1BQUFBLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0ssY0FBaEMsR0FBaURILElBQUksQ0FBQ0ksVUFBTCxHQUFrQkosSUFBSSxDQUFDSyxVQUF4RTtBQUNILEtBSEQsTUFHTztBQUNIaEIsTUFBQUEsRUFBRSxDQUFDUSxRQUFILENBQVlDLGlCQUFaLEdBQWdDSyxjQUFoQyxHQUFpRCxDQUFqRDtBQUNIOztBQUNEZCxJQUFBQSxFQUFFLENBQUNRLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NDLE9BQWhDLEdBQTBDLEtBQTFDLENBUkssQ0FVTDtBQUNBO0FBQ0gsR0FwQkk7QUFzQkxPLEVBQUFBLFlBdEJLLDBCQXNCVTtBQUNYakIsSUFBQUEsRUFBRSxDQUFDUSxRQUFILENBQVlDLGlCQUFaLEdBQWdDQyxPQUFoQyxHQUEwQyxJQUExQztBQUNBLFNBQUtMLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QixNQUF4QixFQUFnQ1IsT0FBaEMsR0FBMEMsS0FBMUM7QUFDSDtBQXpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpc19kZWJ1ZzogZmFsc2UsIC8v5piv5ZCm5pi+56S66LCD6K+V5L+h5oGvO1xuICAgICAgICB3aGVlbDogY2MuTm9kZVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzX2RlYnVnKSB7XG4gICAgICAgICAgICB2YXIgQml0cyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IEJpdHMuZV9qb2ludEJpdCB8IEJpdHMuZV9zaGFwZUJpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIC8vIOa1i+ivlVxuICAgICAgICAvLyB0aGlzLmRyb3BUaGVXaGVlbCgpXG4gICAgfSxcblxuICAgIGRyb3BUaGVXaGVlbCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aGVlbC5nZXRDb21wb25lbnQoJ2Ryb3AnKS5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxufSk7Il19