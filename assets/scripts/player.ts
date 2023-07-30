import { _decorator, Component, Node, Animation, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {
    public static playerAnim:Animation;
    @property(SpriteFrame)
    standForShoot:SpriteFrame;
    onLoad() {
        player.playerAnim = this.getComponent(Animation);
    }
    changeSpriteFrame(){
        this.getComponent(Sprite).spriteFrame = this.standForShoot;
    }
    update(deltaTime: number) {
        
    }
}

