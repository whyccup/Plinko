
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/contactForWheel');
require('./assets/scripts/drop');
require('./assets/scripts/game');
require('./assets/scripts/start');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '613a17+jV9MD42gMyo2MGjF', 'start');
// scripts/start.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  startGame: function startGame() {
    this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0YXJ0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnRHYW1lIiwibm9kZSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsU0FOSyx1QkFNUTtBQUNULFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNIO0FBUkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgc3RhcnRHYW1lICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/drop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '504c0sPomJAFolc9WVFiD2K', 'drop');
// scripts/drop.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

cc.Class({
  "extends": cc.Component,
  properties: {
    dropArea: cc.Node,
    dropSlot: [cc.Node],
    _oldPos: null // 上一个位置

  },
  // // 测试
  // onLoad() {
  //     this.node.position = this.dropSlot[getRandomInt(0, this.dropSlot.length)].position
  //     function getRandomInt(min, max) {
  //         min = Math.ceil(min);
  //         max = Math.floor(max);
  //         return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  //       }
  // },
  start: function start() {
    this._oldPos = this.node.position;
  },
  onEnable: function onEnable() {
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
  },
  onDisable: function onDisable() {
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
  },
  _onTouchMove: function _onTouchMove(touchEvent) {
    var location = touchEvent.getLocation();
    this.node.position = this.node.parent.convertToNodeSpaceAR(location);

    if (!this._withinTarget(this.dropArea, touchEvent)) {
      this.node.position = this._oldPos; // 回去
    }
  },
  _onTouchEnd: function _onTouchEnd(touchEvent) {
    if (this.dropSlot.length === 0) {
      return; // 没有目标位置
    }

    var inSlot = false;
    var thisTargetNode = null;

    for (var _iterator = _createForOfIteratorHelperLoose(this.dropSlot), _step; !(_step = _iterator()).done;) {
      var targetNode = _step.value;

      if (this._withinTarget(targetNode, touchEvent)) {
        inSlot = true;
        thisTargetNode = targetNode;
        break;
      }
    } // 松开若在插槽附近则进插槽


    if (inSlot) {
      // 将prefabe位置定位插槽中心点, 保持prefabe与插槽保持同级
      this.node.position = thisTargetNode.position;
      this._oldPos = this.node.position;
    } else {
      // 若未在插槽则回去
      this.node.position = this._oldPos; // 回去
    }
  },
  // 判断触摸事件是否在槽位里
  _withinTarget: function _withinTarget(targetNode, touchEvent) {
    var rect = targetNode.getBoundingBox();
    var location = touchEvent.getLocation();
    var point = targetNode.parent.convertToNodeSpaceAR(location);
    return rect.contains(point);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2Ryb3AuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkcm9wQXJlYSIsIk5vZGUiLCJkcm9wU2xvdCIsIl9vbGRQb3MiLCJzdGFydCIsIm5vZGUiLCJwb3NpdGlvbiIsIm9uRW5hYmxlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwiX29uVG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwiX29uVG91Y2hFbmQiLCJvbkRpc2FibGUiLCJvZmYiLCJ0b3VjaEV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiX3dpdGhpblRhcmdldCIsImxlbmd0aCIsImluU2xvdCIsInRoaXNUYXJnZXROb2RlIiwidGFyZ2V0Tm9kZSIsInJlY3QiLCJnZXRCb3VuZGluZ0JveCIsInBvaW50IiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETDtBQUVSQyxJQUFBQSxRQUFRLEVBQUUsQ0FBQ04sRUFBRSxDQUFDSyxJQUFKLENBRkY7QUFHUkUsSUFBQUEsT0FBTyxFQUFFLElBSEQsQ0FHTTs7QUFITixHQUhQO0FBU0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLEVBQUFBLEtBbkJLLG1CQW1CRztBQUNKLFNBQUtELE9BQUwsR0FBZSxLQUFLRSxJQUFMLENBQVVDLFFBQXpCO0FBQ0gsR0FyQkk7QUF1QkxDLEVBQUFBLFFBdkJLLHNCQXVCTTtBQUNQLFNBQUtGLElBQUwsQ0FBVUcsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQkMsVUFBL0IsRUFBMkMsS0FBS0MsWUFBaEQsRUFBOEQsSUFBOUQ7QUFDQSxTQUFLTixJQUFMLENBQVVHLEVBQVYsQ0FBYVosRUFBRSxDQUFDSyxJQUFILENBQVFRLFNBQVIsQ0FBa0JHLFNBQS9CLEVBQTBDLEtBQUtDLFdBQS9DLEVBQTRELElBQTVEO0FBQ0gsR0ExQkk7QUE0QkxDLEVBQUFBLFNBNUJLLHVCQTRCTztBQUNSLFNBQUtULElBQUwsQ0FBVVUsR0FBVixDQUFjbkIsRUFBRSxDQUFDSyxJQUFILENBQVFRLFNBQVIsQ0FBa0JDLFVBQWhDLEVBQTRDLEtBQUtDLFlBQWpELEVBQStELElBQS9EO0FBQ0EsU0FBS04sSUFBTCxDQUFVVSxHQUFWLENBQWNuQixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQkcsU0FBaEMsRUFBMkMsS0FBS0MsV0FBaEQsRUFBNkQsSUFBN0Q7QUFDSCxHQS9CSTtBQWlDTEYsRUFBQUEsWUFqQ0ssd0JBaUNRSyxVQWpDUixFQWlDb0I7QUFDakIsUUFBSUMsUUFBUSxHQUFHRCxVQUFVLENBQUNFLFdBQVgsRUFBZjtBQUNBLFNBQUtiLElBQUwsQ0FBVUMsUUFBVixHQUFxQixLQUFLRCxJQUFMLENBQVVjLE1BQVYsQ0FBaUJDLG9CQUFqQixDQUFzQ0gsUUFBdEMsQ0FBckI7O0FBQ0EsUUFBSSxDQUFDLEtBQUtJLGFBQUwsQ0FBbUIsS0FBS3JCLFFBQXhCLEVBQWtDZ0IsVUFBbEMsQ0FBTCxFQUFvRDtBQUNoRCxXQUFLWCxJQUFMLENBQVVDLFFBQVYsR0FBcUIsS0FBS0gsT0FBMUIsQ0FEZ0QsQ0FDYjtBQUN0QztBQUNSLEdBdkNJO0FBeUNMVSxFQUFBQSxXQXpDSyx1QkF5Q09HLFVBekNQLEVBeUNtQjtBQUNwQixRQUFJLEtBQUtkLFFBQUwsQ0FBY29CLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIsYUFENEIsQ0FDcEI7QUFDWDs7QUFDRCxRQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLFFBQUlDLGNBQWMsR0FBRyxJQUFyQjs7QUFDQSx5REFBeUIsS0FBS3RCLFFBQTlCLHdDQUF3QztBQUFBLFVBQTdCdUIsVUFBNkI7O0FBQ3BDLFVBQUksS0FBS0osYUFBTCxDQUFtQkksVUFBbkIsRUFBK0JULFVBQS9CLENBQUosRUFBZ0Q7QUFDNUNPLFFBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0FDLFFBQUFBLGNBQWMsR0FBR0MsVUFBakI7QUFDQTtBQUNIO0FBQ0osS0FabUIsQ0FhcEI7OztBQUNBLFFBQUlGLE1BQUosRUFBWTtBQUNSO0FBQ0EsV0FBS2xCLElBQUwsQ0FBVUMsUUFBVixHQUFxQmtCLGNBQWMsQ0FBQ2xCLFFBQXBDO0FBQ0EsV0FBS0gsT0FBTCxHQUFlLEtBQUtFLElBQUwsQ0FBVUMsUUFBekI7QUFDSCxLQUpELE1BSU87QUFDSDtBQUNBLFdBQUtELElBQUwsQ0FBVUMsUUFBVixHQUFxQixLQUFLSCxPQUExQixDQUZHLENBRWdDO0FBQ3RDO0FBRUosR0FoRUk7QUFrRUw7QUFDQWtCLEVBQUFBLGFBbkVLLHlCQW1FU0ksVUFuRVQsRUFtRXFCVCxVQW5FckIsRUFtRWlDO0FBQ2xDLFFBQUlVLElBQUksR0FBR0QsVUFBVSxDQUFDRSxjQUFYLEVBQVg7QUFDQSxRQUFJVixRQUFRLEdBQUdELFVBQVUsQ0FBQ0UsV0FBWCxFQUFmO0FBQ0EsUUFBSVUsS0FBSyxHQUFHSCxVQUFVLENBQUNOLE1BQVgsQ0FBa0JDLG9CQUFsQixDQUF1Q0gsUUFBdkMsQ0FBWjtBQUNBLFdBQU9TLElBQUksQ0FBQ0csUUFBTCxDQUFjRCxLQUFkLENBQVA7QUFDSDtBQXhFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkcm9wQXJlYTogY2MuTm9kZSxcbiAgICAgICAgZHJvcFNsb3Q6IFtjYy5Ob2RlXSxcbiAgICAgICAgX29sZFBvczogbnVsbCAvLyDkuIrkuIDkuKrkvY3nva5cbiAgICB9LFxuXG4gICAgLy8gLy8g5rWL6K+VXG4gICAgLy8gb25Mb2FkKCkge1xuICAgIC8vICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmRyb3BTbG90W2dldFJhbmRvbUludCgwLCB0aGlzLmRyb3BTbG90Lmxlbmd0aCldLnBvc2l0aW9uXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgIC8vICAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgLy8gICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgLy8gICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOyAvL+S4jeWQq+acgOWkp+WAvO+8jOWQq+acgOWwj+WAvFxuICAgIC8vICAgICAgIH1cbiAgICAvLyB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX29sZFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcbiAgICB9LFxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9vblRvdWNoTW92ZSh0b3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSB0b3VjaEV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fd2l0aGluVGFyZ2V0KHRoaXMuZHJvcEFyZWEsIHRvdWNoRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5fb2xkUG9zOyAvLyDlm57ljrtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uVG91Y2hFbmQodG91Y2hFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5kcm9wU2xvdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8g5rKh5pyJ55uu5qCH5L2N572uXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluU2xvdCA9IGZhbHNlO1xuICAgICAgICBsZXQgdGhpc1RhcmdldE5vZGUgPSBudWxsXG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0Tm9kZSBvZiB0aGlzLmRyb3BTbG90KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fd2l0aGluVGFyZ2V0KHRhcmdldE5vZGUsIHRvdWNoRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgaW5TbG90ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzVGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5p2+5byA6Iul5Zyo5o+S5qe96ZmE6L+R5YiZ6L+b5o+S5qe9XG4gICAgICAgIGlmIChpblNsb3QpIHtcbiAgICAgICAgICAgIC8vIOWwhnByZWZhYmXkvY3nva7lrprkvY3mj5Lmp73kuK3lv4PngrksIOS/neaMgXByZWZhYmXkuI7mj5Lmp73kv53mjIHlkIznuqdcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXNUYXJnZXROb2RlLnBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLl9vbGRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDoi6XmnKrlnKjmj5Lmp73liJnlm57ljrtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuX29sZFBvczsgLy8g5Zue5Y67XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyDliKTmlq3op6bmkbjkuovku7bmmK/lkKblnKjmp73kvY3ph4xcbiAgICBfd2l0aGluVGFyZ2V0KHRhcmdldE5vZGUsIHRvdWNoRXZlbnQpIHtcbiAgICAgICAgbGV0IHJlY3QgPSB0YXJnZXROb2RlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IHRvdWNoRXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHBvaW50ID0gdGFyZ2V0Tm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pO1xuICAgICAgICByZXR1cm4gcmVjdC5jb250YWlucyhwb2ludCk7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
