System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, v3, Label, Vec2, SystemEventType, systemEvent, CCFloat, TextAsset, Ball, player, Trajectory, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayer(extras) {
    _reporterNs.report("player", "./player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrajectory(extras) {
    _reporterNs.report("Trajectory", "./trajectory", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Label = _cc.Label;
      Vec2 = _cc.Vec2;
      SystemEventType = _cc.SystemEventType;
      systemEvent = _cc.systemEvent;
      CCFloat = _cc.CCFloat;
      TextAsset = _cc.TextAsset;
    }, function (_unresolved_2) {
      Ball = _unresolved_2.Ball;
    }, function (_unresolved_3) {
      player = _unresolved_3.player;
    }, function (_unresolved_4) {
      Trajectory = _unresolved_4.Trajectory;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bc2fPOTcJP7ob6dF3ogI6M", "gameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Label), _dec5 = property(_crd && Trajectory === void 0 ? (_reportPossibleCrUseOfTrajectory({
        error: Error()
      }), Trajectory) : Trajectory), _dec6 = property(_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
        error: Error()
      }), player) : player), _dec7 = property(CCFloat), _dec8 = property(TextAsset), _dec(_class = (_class2 = (_temp = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boardPre", _descriptor, this);

          _initializerDefineProperty(this, "ballPre", _descriptor2, this);

          _initializerDefineProperty(this, "scoreUI", _descriptor3, this);

          _initializerDefineProperty(this, "maxX", _descriptor4, this);

          _initializerDefineProperty(this, "maxY", _descriptor5, this);

          _initializerDefineProperty(this, "minX", _descriptor6, this);

          _initializerDefineProperty(this, "minY", _descriptor7, this);

          _initializerDefineProperty(this, "trajectory", _descriptor8, this);

          _initializerDefineProperty(this, "player", _descriptor9, this);

          _defineProperty(this, "startPoint", void 0);

          _defineProperty(this, "endPoint", void 0);

          _defineProperty(this, "force", void 0);

          _defineProperty(this, "direction", void 0);

          _initializerDefineProperty(this, "shootPower", _descriptor10, this);

          _initializerDefineProperty(this, "data", _descriptor11, this);

          _defineProperty(this, "touchCheck", true);
        }

        start() {}

        onLoad() {
          this.spawnBoard();
          this.spawnBall();
          systemEvent.on(SystemEventType.TOUCH_START, this.onTouchDown, this);
          systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
          systemEvent.on(SystemEventType.TOUCH_END, this.onTouchEnd, this);
          let obj = JSON.parse(this.data.text);
        }

        spawnBoard() {
          var board = instantiate(this.boardPre);
          this.node.addChild(board);
          board.setPosition(this.getBoardRandomPos());
          board.getChildByName("Basket").setPosition(0, -70);
        }

        spawnBall() {
          var ball = instantiate(this.ballPre);
          this.node.addChild(ball);
          ball.setPosition(-147, -411, 0);
        }

        getBoardRandomPos() {
          var xRandom = 0;
          var yRandom = 0;
          xRandom = Math.floor(Math.random() * (this.maxX - this.minX + this.maxX)) + this.minX;
          yRandom = Math.floor(Math.random() * (this.maxY - this.minY + this.maxY)) + this.minY;
          return v3(xRandom, yRandom, 0);
        }

        gainScore(score) {
          this.scoreUI.string = "SCORE: " + score.toString(); //if(highScore > 0) this.scoreUi.string = "SCORE: " + score.toString() + "\nHIGH SCORE: " + highScore.toString();
        }

        update(deltaTime) {}

        onTouchDown(event) {
          if (this.touchCheck) {
            (_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).thisNode.active = false;
            (_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).rb.sleep();
            (_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).anim.stop();
            (_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
              error: Error()
            }), player) : player).playerAnim.stop();
            this.player.changeSpriteFrame();
            (_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).thisNode.setPosition(-200, -280);
            this.startPoint = event.getUILocation();
            this.trajectory.showOrHide(true);
          }
        }

        onTouchMove(event) {
          if (this.touchCheck) {
            this.endPoint = event.getUILocation();
            this.force = this.getThrowPower(this.startPoint, this.endPoint);
            this.trajectory.updateDots((_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).ballPos, this.force);
          }
        }

        onTouchEnd(event) {
          if (this.touchCheck) {
            (_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
              error: Error()
            }), player) : player).playerAnim.play('throw');
            this.scheduleOnce(function () {
              (_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
                error: Error()
              }), Ball) : Ball).awakeRbAndShoot(this.force, this.shootPower);
            }, 0.70);
            this.trajectory.showOrHide(false);
            this.touchCheck = false;
          }
        }

        getThrowPower(startPosition, endPosition) {
          let distance = Vec2.distance(startPosition, endPosition);
          this.direction = endPosition.subtract(startPosition).normalize();
          return this.direction.multiplyScalar(distance);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballPre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 400;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 150;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "minX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -55;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "minY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 60;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "trajectory", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "shootPower", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "data", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=gameManager.js.map