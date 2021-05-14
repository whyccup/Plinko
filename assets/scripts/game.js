cc.Class({
    extends: cc.Component,

    properties: {
        is_debug: false, //是否显示调试信息;
        wheel: cc.Node
    },

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        if (this.is_debug) {
            var Bits = cc.PhysicsManager.DrawBits;
            cc.director.getPhysicsManager().debugDrawFlags = Bits.e_jointBit | Bits.e_shapeBit;
        } else {
            cc.director.getPhysicsManager().debugDrawFlags = 0;
        }
        cc.director.getPhysicsManager().enabled = false;

        // // 测试
        // this.dropTheWheel()
    },

    dropTheWheel() {
        cc.director.getPhysicsManager().enabled = true;
        this.wheel.getComponent('drop').enabled = false;
    }
});