(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5509],{64020:(e,t,n)=>{!function(e){"use strict";function t(e){e.state.markedSelection&&e.operation((function(){f(e)}))}function n(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation((function(){a(e)}))}e.defineOption("styleSelectedText",!1,(function(o,r,i){var l=i&&i!=e.Init;r&&!l?(o.state.markedSelection=[],o.state.markedSelectionStyle="string"==typeof r?r:"CodeMirror-selectedtext",c(o),o.on("cursorActivity",t),o.on("change",n)):!r&&l&&(o.off("cursorActivity",t),o.off("change",n),a(o),o.state.markedSelection=o.state.markedSelectionStyle=null)}));var o=8,r=e.Pos,i=e.cmpPos;function l(e,t,n,l){if(0!=i(t,n))for(var a=e.state.markedSelection,c=e.state.markedSelectionStyle,f=t.line;;){var s=f==t.line?t:r(f,0),u=f+o,d=u>=n.line,m=d?n:r(u,0),k=e.markText(s,m,{className:c});if(null==l?a.push(k):a.splice(l++,0,k),d)break;f=u}}function a(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function c(e){a(e);for(var t=e.listSelections(),n=0;n<t.length;n++)l(e,t[n].from(),t[n].to())}function f(e){if(!e.somethingSelected())return a(e);if(e.listSelections().length>1)return c(e);var t=e.getCursor("start"),n=e.getCursor("end"),r=e.state.markedSelection;if(!r.length)return l(e,t,n);var f=r[0].find(),s=r[r.length-1].find();if(!f||!s||n.line-t.line<=o||i(t,s.to)>=0||i(n,f.from)<=0)return c(e);for(;i(t,f.from)>0;)r.shift().clear(),f=r[0].find();for(i(t,f.from)<0&&(f.to.line-t.line<o?(r.shift().clear(),l(e,t,f.to,0)):l(e,t,f.from,0));i(n,s.to)<0;)r.pop().clear(),s=r[r.length-1].find();i(n,s.to)>0&&(n.line-s.from.line<o?(r.pop().clear(),l(e,s.from,n)):l(e,s.to,n))}}(n(4631))}}]);