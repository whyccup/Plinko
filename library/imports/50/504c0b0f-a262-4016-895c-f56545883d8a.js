"use strict";
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