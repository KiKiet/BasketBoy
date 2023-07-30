
import { _decorator, Component, Node, Prefab, instantiate, v3, Label, Vec2, SystemEventType, systemEvent, Touch, CCFloat, Camera, Vec3, TextAsset } from 'cc';
import { Ball } from './ball';
import { Basket } from './basket';
import { player } from './player';
import { Trajectory } from './trajectory';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameManager
 * DateTime = Thu Feb 17 2022 14:24:32 GMT+0700 (Indochina Time)
 * Author = kingkiet25
 * FileBasename = gameManager.ts
 * FileBasenameNoExtension = gameManager
 * URL = db://assets/scripts/gameManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('GameManager')
export class GameManager extends Component {
    @property(Prefab)
    private boardPre: Prefab;
    @property(Prefab)
    private ballPre: Prefab;
    @property(Label)
    private scoreUI: Label = null;
    @property
    private maxX: number = 400;
    @property
    private maxY: number = 150;
    @property
    private minX: number = -55;
    @property
    private minY: number = 60;
    @property(Trajectory)
    private trajectory: Trajectory;
    @property(player)
    private player: player;
    private startPoint: Vec2;
    private endPoint: Vec2;
    force: Vec2;
    direction: Vec2;
    @property(CCFloat)
    shootPower:number = 100;
    @property(TextAsset)
    private data: TextAsset = null;
    private touchCheck:boolean = true;

    start () {
        
    }
    onLoad(){
        this.spawnBoard();
        this.spawnBall();
        systemEvent.on(SystemEventType.TOUCH_START, this.onTouchDown, this);
        systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.on(SystemEventType.TOUCH_END, this.onTouchEnd, this);
        let obj = JSON.parse(this.data.text);
    }

    spawnBoard(){
        var board = instantiate(this.boardPre);
        this.node.addChild(board);
        board.setPosition(this.getBoardRandomPos());
        board.getChildByName("Basket").setPosition(0,-70);
    }
    spawnBall(){
        var ball = instantiate(this.ballPre);
        this.node.addChild(ball);
        ball.setPosition(-147,-411,0);
    }
    getBoardRandomPos(){
        var xRandom = 0;
        var yRandom = 0;
        xRandom = Math.floor(Math.random() * (this.maxX - this.minX + this.maxX)) + this.minX;
        yRandom = Math.floor(Math.random() * (this.maxY - this.minY + this.maxY)) + this.minY;
        return v3(xRandom,yRandom,0);
    }

    gainScore(score:number){
        this.scoreUI.string = "SCORE: " + score.toString();
        //if(highScore > 0) this.scoreUi.string = "SCORE: " + score.toString() + "\nHIGH SCORE: " + highScore.toString();
    }
    update (deltaTime: number) {
        
    }
    onTouchDown (event: Touch) {
        if(this.touchCheck){
            Ball.thisNode.active = false;
            Ball.rb.sleep();
            Ball.anim.stop();
            player.playerAnim.stop();
            this.player.changeSpriteFrame();
            Ball.thisNode.setPosition(-200,-280);
            this.startPoint = event.getUILocation();
            this.trajectory.showOrHide(true);
        }
    }
    onTouchMove (event: Touch) {
        if(this.touchCheck){
            this.endPoint = event.getUILocation();
            this.force = this.getThrowPower(this.startPoint,this.endPoint);
            this.trajectory.updateDots(Ball.ballPos,this.force);
        }
    }
    onTouchEnd (event: Touch) {
        if(this.touchCheck){
            player.playerAnim.play('throw');
            this.scheduleOnce(function(){
                Ball.awakeRbAndShoot(this.force,this.shootPower)
            },0.70);
            this.trajectory.showOrHide(false);
            this.touchCheck = false;
        }
    }
    getThrowPower(startPosition:Vec2,endPosition:Vec2){
        let distance = Vec2.distance(startPosition,endPosition);
        this.direction = (endPosition.subtract(startPosition)).normalize();
        return this.direction.multiplyScalar(distance);
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
