System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Contact2DType, Collider2D, AudioClip, AudioSource, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, Basket;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cb20uYeV5JrZWU+hx2nQGO", "basket", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("Basket", Basket = (_dec = ccclass('Basket'), _dec2 = property(AudioSource), _dec3 = property(AudioClip), _dec(_class = (_class2 = (_temp = _class3 = class Basket extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "check", false);

          _initializerDefineProperty(this, "sound", _descriptor, this);

          _initializerDefineProperty(this, "basketSound", _descriptor2, this);
        }

        onLoad() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          Basket.pos = this.node.getWorldPosition();
        }

        onBeginContact(selfCollider, otherCollider) {
          this.sound.playOneShot(this.basketSound);
        }

        update(deltaTime) {// if (this.check){
          //     this.node.setPosition(this.newPos);
          // }
        }

      }, _defineProperty(_class3, "pos", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "basketSound", [_dec3], {
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
//# sourceMappingURL=basket.js.map