cc.Class({
    extends: cc.Component,

    properties: {
        audioPeng: cc.AudioClip,
    },

    playPeng() {
        cc.audioEngine.playEffect(this.audioPeng, false);
    },
    
    onBeginContact (contact, selfCollider, otherCollider) {
        this.playPeng()
    },
    
    onEndContact (contact, selfCollider, otherCollider) {
        if (otherCollider.name === 'bottom<PhysicsBoxCollider>') {
            this.node.getComponent(cc.RigidBody).enabledContactListener = false
            selfCollider.body.linearDamping = 1

            console.log(otherCollider.tag) // tag: Number, 可能的值 = [0,1,2,3,4], 对应底部不同的框

            // // 测试
            // cc.director.loadScene('Game');
        } else {
            selfCollider.restitution = Math.random().toFixed(2)
        }
    }
});
