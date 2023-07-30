System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, RigidBody2D, director, Collider2D, Contact2DType, AudioSource, AudioClip, Animation, GameManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, Ball;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody2D = _cc.RigidBody2D;
      director = _cc.director;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      AudioSource = _cc.AudioSource;
      AudioClip = _cc.AudioClip;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00446nxO+lBgZ34ZCOguTwV", "ball", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec2 = property(AudioSource), _dec3 = property(AudioClip), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ball, _Component);

        function Ball() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "isScore", false);

          _initializerDefineProperty(_assertThisInitialized(_this), "sound", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bounceSound", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "cnt", 0);

          _defineProperty(_assertThisInitialized(_this), "checkGoal", false);

          return _this;
        }

        var _proto = Ball.prototype;

        _proto.onLoad = function onLoad() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }

          Ball.rb = this.getComponent(RigidBody2D);
          this.node.parent.getComponent(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).gainScore(Ball.score);
          Ball.thisNode = this.node;
          Ball.anim = this.getComponent(Animation);
        };

        _proto.update = function update(deltaTime) {
          var ball_pos_x = this.node.position.x;

          if (ball_pos_x > 575 || ball_pos_x < -575) {
            if (this.isScore == false) {
              Ball.score = 0;
              director.loadScene("scenes/playScene");
            } else {
              director.loadScene("scenes/playScene");
            }
          }

          if (this.isScore && this.cnt > 2) {
            Ball.rb.sleep();
            director.loadScene("scenes/playScene");
          } else if (this.isScore == false && this.cnt > 2) {
            Ball.score = 0;
            director.loadScene("scenes/playScene");
          }

          Ball.ballPos = this.node.position;
        };

        Ball.awakeRbAndShoot = function awakeRbAndShoot(force, shootPower) {
          this.thisNode.active = true;
          this.rb.applyForceToCenter(force.multiplyScalar(shootPower), true);
        };

        _proto.onEndContact = function onEndContact(selfCollider, otherCollider) {
          if (otherCollider.tag == 1) {
            this.checkGoal = true;
          }

          if (otherCollider.tag == 2 && this.checkGoal) {
            Ball.score++;
            this.node.parent.getComponent(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).gainScore(Ball.score);
            this.isScore = true;
            this.checkGoal = false;
          }

          if (otherCollider.tag == 3) {
            this.cnt++;
          }

          this.sound.playOneShot(this.bounceSound);
        };

        return Ball;
      }(Component), _defineProperty(_class3, "score", 0), _defineProperty(_class3, "rb", void 0), _defineProperty(_class3, "ballPos", void 0), _defineProperty(_class3, "thisNode", void 0), _defineProperty(_class3, "anim", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bounceSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
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
//# sourceMappingURL=ball.js.map