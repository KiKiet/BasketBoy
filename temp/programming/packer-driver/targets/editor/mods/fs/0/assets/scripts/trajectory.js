System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, instantiate, Vec3, PhysicsSystem2D, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Trajectory;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b1bd9UJRDkaunr6oNTtKy", "trajectory", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("Trajectory", Trajectory = (_dec = ccclass('Trajectory'), _dec2 = property(Number), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Number), _dec(_class = (_class2 = (_temp = class Trajectory extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "dotsNum", _descriptor, this);

          _initializerDefineProperty(this, "dotsParent", _descriptor2, this);

          _initializerDefineProperty(this, "dotsPre", _descriptor3, this);

          _initializerDefineProperty(this, "dotSpace", _descriptor4, this);

          _defineProperty(this, "pos", new Vec3(0, 0, 0));

          _defineProperty(this, "timeStamp", void 0);

          _defineProperty(this, "dotsPool", []);

          _defineProperty(this, "result", void 0);
        }

        onLoad() {
          this.showOrHide(false);
          this.prepareDots();
        }

        prepareDots() {
          for (let i = 0; i < this.dotsNum; i++) {
            let dot = instantiate(this.dotsPre);
            this.dotsPool[i] = dot;
            this.dotsPool[i].parent = this.dotsParent;
          }
        }

        updateDots(ballPos, forceApply) {
          this.timeStamp = this.dotSpace;

          for (let i = 0; i < this.dotsNum; i++) {
            this.pos.x = forceApply.x * this.timeStamp;
            this.pos.y = forceApply.y * this.timeStamp - PhysicsSystem2D.instance.gravity.length() * this.timeStamp * this.timeStamp / 2;
            this.dotsPool[i].setPosition(this.pos.x + ballPos.x, this.pos.y + ballPos.y);
            this.timeStamp += this.dotSpace;
          }
        }

        showOrHide(boolean) {
          this.dotsParent.active = boolean;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dotsNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dotsParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dotsPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dotSpace", [_dec5], {
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
//# sourceMappingURL=trajectory.js.map