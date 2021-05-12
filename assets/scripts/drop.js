cc.Class({
    extends: cc.Component,

    properties: {
        dropArea: cc.Node,
        dropSlot: [cc.Node],
        _oldPos: null // 上一个位置
    },

    start() {
        this._oldPos = this.node.position;
    },

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    },

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    },

    _onTouchMove(touchEvent) {
            let location = touchEvent.getLocation();
            this.node.position = this.node.parent.convertToNodeSpaceAR(location);
            if (!this._withinTarget(this.dropArea, touchEvent)) {
                this.node.position = this._oldPos; // 回去
            }
    },

    _onTouchEnd(touchEvent) {
        if (this.dropSlot.length === 0) {
            return; // 没有目标位置
        }
        let inSlot = false;
        let thisTargetNode = null
        for (const targetNode of this.dropSlot) {
            if (this._withinTarget(targetNode, touchEvent)) {
                inSlot = true;
                thisTargetNode = targetNode;
                break;
            }
        }
        // 松开若在插槽附近则进插槽
        if (inSlot) {
            // 将prefabe位置定位插槽中心点, 保持prefabe与插槽保持同级
            this.node.position = thisTargetNode.position
            this._oldPos = this.node.position;
        } else {
            // 若未在插槽则回去
            this.node.position = this._oldPos; // 回去
        }

    },

    // 判断触摸事件是否在槽位里
    _withinTarget(targetNode, touchEvent) {
        let rect = targetNode.getBoundingBox();
        let location = touchEvent.getLocation();
        let point = targetNode.parent.convertToNodeSpaceAR(location);
        return rect.contains(point);
    }
});
