
import { _decorator, Component, Node, Prefab, Vec2, NodePool, instantiate, Vec3, PhysicsSystem2D } from 'cc';
import { Ball } from './ball';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Trajectory
 * DateTime = Wed Feb 23 2022 19:35:16 GMT+0700 (Indochina Time)
 * Author = kingkiet25
 * FileBasename = trajectory.ts
 * FileBasenameNoExtension = trajectory
 * URL = db://assets/scripts/trajectory.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Trajectory')
export class Trajectory extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Number)
    dotsNum: number;
    @property (Node)
    dotsParent: Node;
    @property (Prefab)
    dotsPre: Prefab;
    @property (Number)
    dotSpace: number;
    pos:Vec3 = new Vec3(0,0,0);
    timeStamp:number;
    dotsPool: Node[]=[];
    result:Vec2[] 
    onLoad () {
        this.showOrHide(false);
        this.prepareDots();
    }
    prepareDots(){
        for (let i = 0; i < this.dotsNum; i++){
            let dot = instantiate(this.dotsPre);
            this.dotsPool[i] = dot;
            this.dotsPool[i].parent = this.dotsParent;
        }
    }
    updateDots(ballPos: Vec3, forceApply:Vec2){
        this.timeStamp = this.dotSpace;
        for (let i=0; i < this.dotsNum; i++){
            this.pos.x = forceApply.x * this.timeStamp;
            this.pos.y = forceApply.y * this.timeStamp - (PhysicsSystem2D.instance.gravity.length() * this.timeStamp * this.timeStamp) / 2;
            this.dotsPool[i].setPosition(this.pos.x + ballPos.x,this.pos.y + ballPos.y);
            this.timeStamp += this.dotSpace;
        }
    }
    showOrHide (boolean:boolean){
        this.dotsParent.active = boolean;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
