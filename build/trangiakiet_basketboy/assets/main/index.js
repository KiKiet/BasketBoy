System.register("chunks:///_virtual/ball.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./gameManager.ts"],(function(e){"use strict";var o,t,n,i,c,r,s,a,l,p,u,h,d,S,g,y;return{setters:[function(e){o=e.defineProperty,t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.assertThisInitialized,c=e.initializerDefineProperty},function(e){r=e.cclegacy,s=e._decorator,a=e.AudioSource,l=e.AudioClip,p=e.Collider2D,u=e.Contact2DType,h=e.RigidBody2D,d=e.Animation,S=e.director,g=e.Component},function(e){y=e.GameManager}],execute:function(){var b,f,m,C,v,D,k,A,T;r._RF.push({},"00446nxO+lBgZ34ZCOguTwV","ball",void 0);var _=s.ccclass,w=s.property;e("Ball",(b=_("Ball"),f=w(a),m=w(l),b((T=A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,o(i(t),"isScore",!1),c(i(t),"sound",D,i(t)),c(i(t),"bounceSound",k,i(t)),o(i(t),"cnt",0),o(i(t),"checkGoal",!1),t}n(t,e);var r=t.prototype;return r.onLoad=function(){var e=this.getComponent(p);e&&e.on(u.END_CONTACT,this.onEndContact,this),t.rb=this.getComponent(h),this.node.parent.getComponent(y).gainScore(t.score),t.thisNode=this.node,t.anim=this.getComponent(d)},r.update=function(e){var o=this.node.position.x;(o>575||o<-575)&&(0==this.isScore?(t.score=0,S.loadScene("scenes/playScene")):S.loadScene("scenes/playScene")),this.isScore&&this.cnt>2?(t.rb.sleep(),S.loadScene("scenes/playScene")):0==this.isScore&&this.cnt>2&&(t.score=0,S.loadScene("scenes/playScene")),t.ballPos=this.node.position},t.awakeRbAndShoot=function(e,o){this.thisNode.active=!0,this.rb.applyForceToCenter(e.multiplyScalar(o),!0)},r.onEndContact=function(e,o){1==o.tag&&(this.checkGoal=!0),2==o.tag&&this.checkGoal&&(t.score++,this.node.parent.getComponent(y).gainScore(t.score),this.isScore=!0,this.checkGoal=!1),3==o.tag&&this.cnt++,this.sound.playOneShot(this.bounceSound)},t}(g),o(A,"score",0),o(A,"rb",void 0),o(A,"ballPos",void 0),o(A,"thisNode",void 0),o(A,"anim",void 0),D=t((v=T).prototype,"sound",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(v.prototype,"bounceSound",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=v))||C));r._RF.pop()}}}));

System.register("chunks:///_virtual/player.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,o,i,a,p,c,l,s,u;return{setters:[function(e){t=e.defineProperty,r=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,p=e._decorator,c=e.SpriteFrame,l=e.Animation,s=e.Sprite,u=e.Component}],execute:function(){var y,f,h,d,m,F,g;a._RF.push({},"3e41at5/k5FfZYUKlVV+omU","player",void 0);var v=p.ccclass,S=p.property;e("player",(y=v("player"),f=S(c),y((g=F=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,o(i(t),"standForShoot",m,i(t)),t}n(t,e);var r=t.prototype;return r.onLoad=function(){t.playerAnim=this.getComponent(l)},r.changeSpriteFrame=function(){this.getComponent(s).spriteFrame=this.standForShoot},r.update=function(e){},t}(u),t(F,"playerAnim",void 0),m=r((d=g).prototype,"standForShoot",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=d))||h));a._RF.pop()}}}));

System.register("chunks:///_virtual/gameManager.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./player.ts","./trajectory.ts","./ball.ts"],(function(t){"use strict";var e,i,o,r,n,a,s,l,c,u,h,p,d,f,b,m,y,g,P,w;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized,n=t.defineProperty},function(t){a=t.cclegacy,s=t._decorator,l=t.Prefab,c=t.Label,u=t.CCFloat,h=t.TextAsset,p=t.systemEvent,d=t.SystemEventType,f=t.instantiate,b=t.v3,m=t.Vec2,y=t.Component},function(t){g=t.player},function(t){P=t.Trajectory},function(t){w=t.Ball}],execute:function(){var v,T,C,z,M,x,B,O,S,j,k,U,X,Y,_,D,E,I,R,A,H;a._RF.push({},"7bc2fPOTcJP7ob6dF3ogI6M","gameManager",void 0);var L=s.ccclass,F=s.property;t("GameManager",(v=L("GameManager"),T=F(l),C=F(l),z=F(c),M=F(P),x=F(g),B=F(u),O=F(h),v((k=e((j=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a))||this,o(r(e),"boardPre",k,r(e)),o(r(e),"ballPre",U,r(e)),o(r(e),"scoreUI",X,r(e)),o(r(e),"maxX",Y,r(e)),o(r(e),"maxY",_,r(e)),o(r(e),"minX",D,r(e)),o(r(e),"minY",E,r(e)),o(r(e),"trajectory",I,r(e)),o(r(e),"player",R,r(e)),n(r(e),"startPoint",void 0),n(r(e),"endPoint",void 0),n(r(e),"force",void 0),n(r(e),"direction",void 0),o(r(e),"shootPower",A,r(e)),o(r(e),"data",H,r(e)),n(r(e),"touchCheck",!0),e}i(e,t);var a=e.prototype;return a.start=function(){},a.onLoad=function(){this.spawnBoard(),this.spawnBall(),p.on(d.TOUCH_START,this.onTouchDown,this),p.on(d.TOUCH_MOVE,this.onTouchMove,this),p.on(d.TOUCH_END,this.onTouchEnd,this);JSON.parse(this.data.text)},a.spawnBoard=function(){var t=f(this.boardPre);this.node.addChild(t),t.setPosition(this.getBoardRandomPos()),t.getChildByName("Basket").setPosition(0,-70)},a.spawnBall=function(){var t=f(this.ballPre);this.node.addChild(t),t.setPosition(-147,-411,0)},a.getBoardRandomPos=function(){var t,e;return t=Math.floor(Math.random()*(this.maxX-this.minX+this.maxX))+this.minX,e=Math.floor(Math.random()*(this.maxY-this.minY+this.maxY))+this.minY,b(t,e,0)},a.gainScore=function(t){this.scoreUI.string="SCORE: "+t.toString()},a.update=function(t){},a.onTouchDown=function(t){this.touchCheck&&(w.thisNode.active=!1,w.rb.sleep(),w.anim.stop(),g.playerAnim.stop(),this.player.changeSpriteFrame(),w.thisNode.setPosition(-200,-280),this.startPoint=t.getUILocation(),this.trajectory.showOrHide(!0))},a.onTouchMove=function(t){this.touchCheck&&(this.endPoint=t.getUILocation(),this.force=this.getThrowPower(this.startPoint,this.endPoint),this.trajectory.updateDots(w.ballPos,this.force))},a.onTouchEnd=function(t){this.touchCheck&&(g.playerAnim.play("throw"),this.scheduleOnce((function(){w.awakeRbAndShoot(this.force,this.shootPower)}),.7),this.trajectory.showOrHide(!1),this.touchCheck=!1)},a.getThrowPower=function(t,e){var i=m.distance(t,e);return this.direction=e.subtract(t).normalize(),this.direction.multiplyScalar(i)},e}(y)).prototype,"boardPre",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=e(j.prototype,"ballPre",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=e(j.prototype,"scoreUI",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(j.prototype,"maxX",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 400}}),_=e(j.prototype,"maxY",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 150}}),D=e(j.prototype,"minX",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-55}}),E=e(j.prototype,"minY",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 60}}),I=e(j.prototype,"trajectory",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(j.prototype,"player",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=e(j.prototype,"shootPower",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),H=e(j.prototype,"data",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=j))||S));a._RF.pop()}}}));

System.register("chunks:///_virtual/trajectory.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,o,r,s,a,n,p,l,c,u,d,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized,s=t.defineProperty},function(t){a=t.cclegacy,n=t._decorator,p=t.Node,l=t.Prefab,c=t.Vec3,u=t.instantiate,d=t.PhysicsSystem2D,h=t.Component}],execute:function(){var m,y,f,b,P,v,S,g,w,D,N;a._RF.push({},"88b1bd9UJRDkaunr6oNTtKy","trajectory",void 0);var z=n.ccclass,j=n.property;t("Trajectory",(m=z("Trajectory"),y=j(Number),f=j(p),b=j(l),P=j(Number),m((g=e((S=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return e=t.call.apply(t,[this].concat(a))||this,o(r(e),"dotsNum",g,r(e)),o(r(e),"dotsParent",w,r(e)),o(r(e),"dotsPre",D,r(e)),o(r(e),"dotSpace",N,r(e)),s(r(e),"pos",new c(0,0,0)),s(r(e),"timeStamp",void 0),s(r(e),"dotsPool",[]),s(r(e),"result",void 0),e}i(e,t);var a=e.prototype;return a.onLoad=function(){this.showOrHide(!1),this.prepareDots()},a.prepareDots=function(){for(var t=0;t<this.dotsNum;t++){var e=u(this.dotsPre);this.dotsPool[t]=e,this.dotsPool[t].parent=this.dotsParent}},a.updateDots=function(t,e){this.timeStamp=this.dotSpace;for(var i=0;i<this.dotsNum;i++)this.pos.x=e.x*this.timeStamp,this.pos.y=e.y*this.timeStamp-d.instance.gravity.length()*this.timeStamp*this.timeStamp/2,this.dotsPool[i].setPosition(this.pos.x+t.x,this.pos.y+t.y),this.timeStamp+=this.dotSpace},a.showOrHide=function(t){this.dotsParent.active=t},e}(h)).prototype,"dotsNum",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(S.prototype,"dotsParent",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(S.prototype,"dotsPre",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=e(S.prototype,"dotSpace",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=S))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/basket.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,i,r,a,s,u,c,l,p,d;return{setters:[function(t){e=t.defineProperty,o=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.assertThisInitialized,r=t.initializerDefineProperty},function(t){a=t.cclegacy,s=t._decorator,u=t.AudioSource,c=t.AudioClip,l=t.Collider2D,p=t.Contact2DType,d=t.Component}],execute:function(){var h,f,b,y,g,k,v,C,B;a._RF.push({},"8cb20uYeV5JrZWU+hx2nQGO","basket",void 0);var S=s.ccclass,_=s.property;t("Basket",(h=S("Basket"),f=_(u),b=_(c),h((B=C=function(t){function o(){for(var o,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return o=t.call.apply(t,[this].concat(a))||this,e(i(o),"check",!1),r(i(o),"sound",k,i(o)),r(i(o),"basketSound",v,i(o)),o}n(o,t);var a=o.prototype;return a.onLoad=function(){var t=this.getComponent(l);t&&t.on(p.BEGIN_CONTACT,this.onBeginContact,this),o.pos=this.node.getWorldPosition()},a.onBeginContact=function(t,e){this.sound.playOneShot(this.basketSound)},a.update=function(t){},o}(d),e(C,"pos",void 0),k=o((g=B).prototype,"sound",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=o(g.prototype,"basketSound",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=g))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./player.ts","./trajectory.ts","./gameManager.ts","./ball.ts","./basket.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});