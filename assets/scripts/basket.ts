
import { _decorator, Component, Node, BoxCollider2D, Contact2DType, Collider2D, Vec3, Vec2, AudioClip, AudioSource } from 'cc';
import { GameManager } from './gameManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Basket
 * DateTime = Mon Feb 21 2022 15:24:41 GMT+0700 (Indochina Time)
 * Author = kingkiet25
 * FileBasename = basket.ts
 * FileBasenameNoExtension = basket
 * URL = db://assets/scripts/basket.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Basket')
export class Basket extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    public static pos:Vec3;
    private check:boolean = false;
    @property(AudioSource)
    sound: AudioSource;
    @property(AudioClip)
    basketSound:AudioClip;

    onLoad () {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
        }
        Basket.pos= this.node.getWorldPosition();
    }

    onBeginContact(selfCollider:Collider2D, otherCollider: Collider2D){
        this.sound.playOneShot(this.basketSound);
    }

    update (deltaTime: number) {
        // if (this.check){
        //     this.node.setPosition(this.newPos);
        // }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
