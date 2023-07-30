
import { _decorator, Component, Node, EventTouch, v2, Camera, EventMouse, systemEvent, SystemEventType, Touch, Vec2, RigidBody2D, director, Collider2D, Contact2DType, BoxCollider2D, Prefab, instantiate, Scene, Line, Vec3, AudioSource, AudioClip, Animation, animation } from 'cc';
import { Basket } from './basket';
import { GameManager } from './gameManager';
import { Trajectory } from './trajectory';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Ball
 * DateTime = Mon Feb 14 2022 16:00:44 GMT+0700 (Indochina Time)
 * Author = kingkiet25
 * FileBasename = ball.ts
 * FileBasenameNoExtension = ball
 * URL = db://assets/scripts/ball.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Ball')
export class Ball extends Component {
    public static score:number=0;
    public isScore:boolean=false;
    public static rb: RigidBody2D;
    public static ballPos: Vec3;
    @property(AudioSource)
    sound: AudioSource;
    @property(AudioClip)
    bounceSound:AudioClip;
    cnt:number = 0;
    private checkGoal:boolean=false;
    public static thisNode:Node;
    public static anim:Animation;

    onLoad () {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.END_CONTACT,this.onEndContact,this);
        }
        Ball.rb = this.getComponent(RigidBody2D);
        this.node.parent.getComponent(GameManager).gainScore(Ball.score);
        Ball.thisNode = this.node;
        Ball.anim = this.getComponent(Animation);
    }

    update (deltaTime: number) {
        let ball_pos_x = this.node.position.x;
        if (ball_pos_x > 575 || ball_pos_x < -575){
            if (this.isScore==false){
                Ball.score = 0;
                director.loadScene("scenes/playScene");
            }
            else {
                director.loadScene("scenes/playScene");
            }
        }
        if(this.isScore && this.cnt > 2){
            Ball.rb.sleep();
            director.loadScene("scenes/playScene");
        }
        else if (this.isScore==false && this.cnt > 2){
            Ball.score = 0;
            director.loadScene("scenes/playScene");
        }
        Ball.ballPos = this.node.position;
    }   
    static awakeRbAndShoot(force: Vec2, shootPower:number){
        this.thisNode.active = true;
        this.rb.applyForceToCenter(force.multiplyScalar(shootPower),true);
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D){
        if (otherCollider.tag==1){
            this.checkGoal=true;
        }
        if (otherCollider.tag==2&&this.checkGoal){
            Ball.score++;
            this.node.parent.getComponent(GameManager).gainScore(Ball.score);
            this.isScore=true;
            this.checkGoal=false;
        }
        if (otherCollider.tag == 3){
            this.cnt++;
        }
        this.sound.playOneShot(this.bounceSound);
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
