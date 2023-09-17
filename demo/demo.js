(()=>{"use strict";var __webpack_modules__={280:(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: Demo\n\n// EXTERNAL MODULE: ./node_modules/@tweenjs/tween.js/dist/tween.esm.js\nvar tween_esm = __webpack_require__(984);\n// EXTERNAL MODULE: ./node_modules/@masatomakino/raf-ticker/esm/index.js + 3 modules\nvar esm = __webpack_require__(571);\n;// CONCATENATED MODULE: ./esm/TWEENTicker.js\n\n\nclass TWEENTicker {\n  static initialize() {\n    this.start();\n  }\n  static start() {\n    if (this.isStart) return;\n    this.isStart = true;\n    esm/* RAFTicker */.F.on("onBeforeTick", this.update);\n  }\n  static stop() {\n    if (!this.isStart) return;\n    this.isStart = false;\n    esm/* RAFTicker */.F.off("onBeforeTick", this.update);\n  }\n}\nTWEENTicker.update = e => {\n  (0,tween_esm/* update */.Vx)(e.timestamp);\n};\nTWEENTicker.initialize();\n;// CONCATENATED MODULE: ./esm/index.js\n\n;// CONCATENATED MODULE: ./demoSrc/demo.js\n\n\nclass Demo {\n  constructor() {\n    console.log(TWEENTicker.isStart);\n    const circle = this.addCircle();\n    const tween = new tween_esm/* Tween */.kX(circle.dataset).to({\n      rotation: 360,\n      y: 300\n    }, 750).repeat(Infinity).yoyo(true).easing(tween_esm/* Easing */.oY.Cubic.InOut).onUpdate(object => {\n      this.updateBox(circle, object);\n    }).start();\n  }\n  updateBox(box, params) {\n    const s = box.style;\n    const transform = `translateY(${Math.round(params.y)}px) rotate(${Math.floor(params.rotation)}deg)`;\n    s.transform = transform;\n  }\n  addCircle() {\n    const circle = document.createElement("div");\n    const style = circle.style;\n    style.left = "300px";\n    style.top = "0px";\n    style.width = "100px";\n    style.height = "100px";\n    style.border = "1px solid black";\n    style.borderRadius = "50px";\n    style.position = "absolute";\n    circle.dataset.y = 0;\n    circle.dataset.rotation = 0;\n    document.body.appendChild(circle);\n    return circle;\n  }\n}\nwindow.onload = () => {\n  const demo = new Demo();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBQ1Y7QUFDcEMsTUFBTUUsV0FBVyxDQUFDO0VBQ3JCLE9BQU9DLFVBQVVBLENBQUEsRUFBRztJQUNoQixJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ2hCO0VBQ0EsT0FBT0EsS0FBS0EsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxJQUFJLENBQUNDLE9BQU8sRUFDWjtJQUNKLElBQUksQ0FBQ0EsT0FBTyxHQUFHLElBQUk7SUFDbkJMLG9CQUFTLENBQUNNLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDTCxNQUFNLENBQUM7RUFDN0M7RUFDQSxPQUFPTSxJQUFJQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUMsSUFBSSxDQUFDRixPQUFPLEVBQ2I7SUFDSixJQUFJLENBQUNBLE9BQU8sR0FBRyxLQUFLO0lBQ3BCTCxvQkFBUyxDQUFDUSxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ1AsTUFBTSxDQUFDO0VBQzlDO0FBQ0o7QUFDQUMsV0FBVyxDQUFDRCxNQUFNLEdBQUlRLENBQUMsSUFBSztFQUN4QlIsNEJBQU0sQ0FBQ1EsQ0FBQyxDQUFDQyxTQUFTLENBQUM7QUFDdkIsQ0FBQztBQUNEUixXQUFXLENBQUNDLFVBQVUsQ0FBQyxDQUFDLEM7Ozs7QUV0QjBCO0FBQ0o7QUFFdkMsTUFBTVUsSUFBSSxDQUFDO0VBQ2hCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNkLFdBQVcsQ0FBQ0csT0FBTyxDQUFDO0lBRWhDLE1BQU1ZLE1BQU0sR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBRS9CLE1BQU1DLEtBQUssR0FBRyxJQUFJUCx1QkFBSyxDQUFDSyxNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUNwQ0MsRUFBRSxDQUFDO01BQUVDLFFBQVEsRUFBRSxHQUFHO01BQUVDLENBQUMsRUFBRTtJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FDbENDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQ2hCQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ1ZDLE1BQU0sQ0FBQ2hCLHdCQUFNLENBQUNpQixLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUMxQkMsUUFBUSxDQUFFQyxNQUFNLElBQUs7TUFDcEIsSUFBSSxDQUFDQyxTQUFTLENBQUNmLE1BQU0sRUFBRWMsTUFBTSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUNEM0IsS0FBSyxDQUFDLENBQUM7RUFDWjtFQUVBNEIsU0FBU0EsQ0FBQ0MsR0FBRyxFQUFFQyxNQUFNLEVBQUU7SUFDckIsTUFBTUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDbkIsTUFBTUMsU0FBUyxHQUFJLGNBQWFDLElBQUksQ0FBQ0MsS0FBSyxDQUN4Q0wsTUFBTSxDQUFDWCxDQUNULENBQUUsY0FBYWUsSUFBSSxDQUFDRSxLQUFLLENBQUNOLE1BQU0sQ0FBQ1osUUFBUSxDQUFFLE1BQUs7SUFDaERhLENBQUMsQ0FBQ0UsU0FBUyxHQUFHQSxTQUFTO0VBQ3pCO0VBRUFuQixTQUFTQSxDQUFBLEVBQUc7SUFDVixNQUFNRCxNQUFNLEdBQUd3QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDNUMsTUFBTU4sS0FBSyxHQUFHbkIsTUFBTSxDQUFDbUIsS0FBSztJQUMxQkEsS0FBSyxDQUFDTyxJQUFJLEdBQUcsT0FBTztJQUNwQlAsS0FBSyxDQUFDUSxHQUFHLEdBQUcsS0FBSztJQUNqQlIsS0FBSyxDQUFDUyxLQUFLLEdBQUcsT0FBTztJQUNyQlQsS0FBSyxDQUFDVSxNQUFNLEdBQUcsT0FBTztJQUN0QlYsS0FBSyxDQUFDVyxNQUFNLEdBQUcsaUJBQWlCO0lBQ2hDWCxLQUFLLENBQUNZLFlBQVksR0FBRyxNQUFNO0lBQzNCWixLQUFLLENBQUNhLFFBQVEsR0FBRyxVQUFVO0lBQzNCaEMsTUFBTSxDQUFDRyxPQUFPLENBQUNHLENBQUMsR0FBRyxDQUFDO0lBQ3BCTixNQUFNLENBQUNHLE9BQU8sQ0FBQ0UsUUFBUSxHQUFHLENBQUM7SUFFM0JtQixRQUFRLENBQUNTLElBQUksQ0FBQ0MsV0FBVyxDQUFDbEMsTUFBTSxDQUFDO0lBQ2pDLE9BQU9BLE1BQU07RUFDZjtBQUNGO0FBRUFtQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxNQUFNO0VBQ3BCLE1BQU1DLElBQUksR0FBRyxJQUFJekMsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BtYXNhdG9tYWtpbm8vdHdlZW4uanMtdGlja2VyLy4vZXNtL1RXRUVOVGlja2VyLmpzPzIzY2YiLCJ3ZWJwYWNrOi8vQG1hc2F0b21ha2luby90d2Vlbi5qcy10aWNrZXIvLi9lc20vaW5kZXguanM/YjIzOSIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3R3ZWVuLmpzLXRpY2tlci8uL2RlbW9TcmMvZGVtby5qcz8zOTk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJBRlRpY2tlciB9IGZyb20gXCJAbWFzYXRvbWFraW5vL3JhZi10aWNrZXJcIjtcbmltcG9ydCB7IHVwZGF0ZSB9IGZyb20gXCJAdHdlZW5qcy90d2Vlbi5qc1wiO1xuZXhwb3J0IGNsYXNzIFRXRUVOVGlja2VyIHtcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICBzdGF0aWMgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XG4gICAgICAgIFJBRlRpY2tlci5vbihcIm9uQmVmb3JlVGlja1wiLCB0aGlzLnVwZGF0ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBzdG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGFydClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgIFJBRlRpY2tlci5vZmYoXCJvbkJlZm9yZVRpY2tcIiwgdGhpcy51cGRhdGUpO1xuICAgIH1cbn1cblRXRUVOVGlja2VyLnVwZGF0ZSA9IChlKSA9PiB7XG4gICAgdXBkYXRlKGUudGltZXN0YW1wKTtcbn07XG5UV0VFTlRpY2tlci5pbml0aWFsaXplKCk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9UV0VFTlRpY2tlci5qc1wiO1xuIiwiaW1wb3J0IHsgRWFzaW5nLCBUd2VlbiB9IGZyb20gXCJAdHdlZW5qcy90d2Vlbi5qc1wiO1xuaW1wb3J0IHsgVFdFRU5UaWNrZXIgfSBmcm9tIFwiLi4vZXNtL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBEZW1vIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coVFdFRU5UaWNrZXIuaXNTdGFydCk7XG5cbiAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmFkZENpcmNsZSgpO1xuXG4gICAgY29uc3QgdHdlZW4gPSBuZXcgVHdlZW4oY2lyY2xlLmRhdGFzZXQpXG4gICAgICAudG8oeyByb3RhdGlvbjogMzYwLCB5OiAzMDAgfSwgNzUwKVxuICAgICAgLnJlcGVhdChJbmZpbml0eSlcbiAgICAgIC55b3lvKHRydWUpXG4gICAgICAuZWFzaW5nKEVhc2luZy5DdWJpYy5Jbk91dClcbiAgICAgIC5vblVwZGF0ZSgob2JqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQm94KGNpcmNsZSwgb2JqZWN0KTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZUJveChib3gsIHBhcmFtcykge1xuICAgIGNvbnN0IHMgPSBib3guc3R5bGU7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtNYXRoLnJvdW5kKFxuICAgICAgcGFyYW1zLnksXG4gICAgKX1weCkgcm90YXRlKCR7TWF0aC5mbG9vcihwYXJhbXMucm90YXRpb24pfWRlZylgO1xuICAgIHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgYWRkQ2lyY2xlKCkge1xuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3R5bGUgPSBjaXJjbGUuc3R5bGU7XG4gICAgc3R5bGUubGVmdCA9IFwiMzAwcHhcIjtcbiAgICBzdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIHN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xuICAgIHN0eWxlLmhlaWdodCA9IFwiMTAwcHhcIjtcbiAgICBzdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xuICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTBweFwiO1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGNpcmNsZS5kYXRhc2V0LnkgPSAwO1xuICAgIGNpcmNsZS5kYXRhc2V0LnJvdGF0aW9uID0gMDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICByZXR1cm4gY2lyY2xlO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGRlbW8gPSBuZXcgRGVtbygpO1xufTtcbiJdLCJuYW1lcyI6WyJSQUZUaWNrZXIiLCJ1cGRhdGUiLCJUV0VFTlRpY2tlciIsImluaXRpYWxpemUiLCJzdGFydCIsImlzU3RhcnQiLCJvbiIsInN0b3AiLCJvZmYiLCJlIiwidGltZXN0YW1wIiwiRWFzaW5nIiwiVHdlZW4iLCJEZW1vIiwiY29uc3RydWN0b3IiLCJjb25zb2xlIiwibG9nIiwiY2lyY2xlIiwiYWRkQ2lyY2xlIiwidHdlZW4iLCJkYXRhc2V0IiwidG8iLCJyb3RhdGlvbiIsInkiLCJyZXBlYXQiLCJJbmZpbml0eSIsInlveW8iLCJlYXNpbmciLCJDdWJpYyIsIkluT3V0Iiwib25VcGRhdGUiLCJvYmplY3QiLCJ1cGRhdGVCb3giLCJib3giLCJwYXJhbXMiLCJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJNYXRoIiwicm91bmQiLCJmbG9vciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwid2luZG93Iiwib25sb2FkIiwiZGVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///280\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var e=__webpack_module_cache__[Q]={exports:{}};return __webpack_modules__[Q](e,e.exports,__webpack_require__),e.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,e,F)=>{if(!U){var B=1/0;for(t=0;t<deferred.length;t++){for(var[U,e,F]=deferred[t],i=!0,s=0;s<U.length;s++)(!1&F||B>=F)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[s])))?U.splice(s--,1):(i=!1,F<B&&(B=F));if(i){deferred.splice(t--,1);var c=e();void 0!==c&&(Q=c)}}return Q}F=F||0;for(var t=deferred.length;t>0&&deferred[t-1][2]>F;t--)deferred[t]=deferred[t-1];deferred[t]=[U,e,F]},__webpack_require__.d=(Q,U)=>{for(var e in U)__webpack_require__.o(U,e)&&!__webpack_require__.o(Q,e)&&Object.defineProperty(Q,e,{enumerable:!0,get:U[e]})},__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),(()=>{var Q={577:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,e)=>{var F,B,[i,s,c]=e,t=0;if(i.some((U=>0!==Q[U]))){for(F in s)__webpack_require__.o(s,F)&&(__webpack_require__.m[F]=s[F]);if(c)var I=c(__webpack_require__)}for(U&&U(e);t<i.length;t++)B=i[t],__webpack_require__.o(Q,B)&&Q[B]&&Q[B][0](),Q[B]=0;return __webpack_require__.O(I)},e=self.webpackChunk_masatomakino_tween_js_ticker=self.webpackChunk_masatomakino_tween_js_ticker||[];e.forEach(U.bind(null,0)),e.push=U.bind(null,e.push.bind(e))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(280)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();