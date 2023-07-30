System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, instantiate, Vec3, PhysicsSystem2D, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Trajectory;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("Trajectory", Trajectory = (_dec = ccclass('Trajectory'), _dec2 = property(Number), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Number), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Trajectory, _Component);

        function Trajectory() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dotsNum", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "dotsParent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "dotsPre", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "dotSpace", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "pos", new Vec3(0, 0, 0));

          _defineProperty(_assertThisInitialized(_this), "timeStamp", void 0);

          _defineProperty(_assertThisInitialized(_this), "dotsPool", []);

          _defineProperty(_assertThisInitialized(_this), "result", void 0);

          return _this;
        }

        var _proto = Trajectory.prototype;

        _proto.onLoad = function onLoad() {
          this.showOrHide(false);
          this.prepareDots();
        };

        _proto.prepareDots = function prepareDots() {
          for (var i = 0; i < this.dotsNum; i++) {
            var dot = instantiate(this.dotsPre);
            this.dotsPool[i] = dot;
            this.dotsPool[i].parent = this.dotsParent;
          }
        };

        _proto.updateDots = function updateDots(ballPos, forceApply) {
          this.timeStamp = this.dotSpace;

          for (var i = 0; i < this.dotsNum; i++) {
            this.pos.x = forceApply.x * this.timeStamp;
            this.pos.y = forceApply.y * this.timeStamp - PhysicsSystem2D.instance.gravity.length() * this.timeStamp * this.timeStamp / 2;
            this.dotsPool[i].setPosition(this.pos.x + ballPos.x, this.pos.y + ballPos.y);
            this.timeStamp += this.dotSpace;
          }
        };

        _proto.showOrHide = function showOrHide(_boolean) {
          this.dotsParent.active = _boolean;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Trajectory;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dotsNum", [_dec2], {
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