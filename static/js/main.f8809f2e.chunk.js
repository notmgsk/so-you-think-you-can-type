(this["webpackJsonpso-you-think-you-can-type"]=this["webpackJsonpso-you-think-you-can-type"]||[]).push([[0],{14:function(e,t,o){},8:function(e,t,o){e.exports=o(9)},9:function(e,t,o){"use strict";o.r(t);var n=o(5),r=o(1),s=o(2),a=o(4),i=o(3),h=o(0),u=o.n(h),l=o(7),c=o.n(l),d=(o(14),["A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.","Well, Mr. Frankel, who started this program, began to suffer from the computer disease that anybody who works with computers now knows about. It's a very serious disease and it interferes completely with the work. The trouble with computers is you *play* with them. They are so wonderful. You have these switches - if it's an even number you do this, if it's an odd number you do that - and pretty soon you can do more and more elaborate things if you are clever enough, on one machine.","The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it's my very good honor to meet you and you may call me V.","The moving finger writes; and, having writ, moves on.","A breeze ruffled the neat hedges of Privet Drive, which lay silent and tidy under the inky sky, the very last place you would expect astonishing things to happen. Harry Potter rolled over inside his blankets without waking up. One small hand closed on the letter beside him and he slept on, not knowing he was special, not knowing he was famous, not knowing he would be woken in a few hours' time by Mrs. Dursley's scream as she opened the front door to put out the milk bottles, nor that he would spend the next few weeks being prodded and pinched by his cousin Dudley...He couldn't know that at this very moment, people meeting in secret all over the country were holding up their glasses and saying in hushed voices: \"To Harry Potter - the boy who lived!\"","Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.","There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.","Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.","You can never be overdressed or overeducated.","Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you."]),y=function(e){Object(a.a)(o,e);var t=Object(i.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.i,t=this.props.c,o=this.props.cursor,n=this.props.cursorStyle,r="letter-"+e,s=e==o?n:"inactive-letter";return u.a.createElement("span",{id:r,key:r,className:s},t)}}]),o}(u.a.Component),m=function(e){Object(a.a)(o,e);var t=Object(i.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"spanify",value:function(){var e=this;return u.a.createElement("span",null,this.props.str.split("").map((function(t,o){return u.a.createElement(y,{key:o,i:o,c:t,cursor:e.props.cursor,cursorStyle:e.props.cursorStyle})})))}},{key:"render",value:function(){return u.a.createElement("p",null,this.spanify())}}]),o}(u.a.Component),p=function(e){Object(a.a)(o,e);var t=Object(i.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"countWords",value:function(e){return e.split(" ").length}},{key:"render",value:function(){var e=Number.parseFloat(this.countWords(this.props.string)/(this.props.clock/60)*1e3).toFixed();return u.a.createElement("h1",null,"WPM ",e)}}]),o}(u.a.Component),f=function(e){Object(a.a)(o,e);var t=Object(i.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).state={cursor:0,cursorStyle:"active-letter-good",str:s.randomElt(d)},s.clock=null,s.finished=null,s.handleKey=s.handleKey.bind(Object(n.a)(s)),s}return Object(s.a)(o,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey,!1)}},{key:"handleKey",value:function(e){var t;(e.keyCode>=32&&e.keyCode<=223&&!e.altKey&&!e.ctrlKey&&!e.metaKey||8==e.keyCode)&&(e.preventDefault(),this.finished||(this.clock||(this.clock=new Date),t=this.state.str[this.state.cursor]==e.key?{cursor:(this.state.cursor+1)%this.state.str.length,cursorStyle:"active-letter-good"}:{cursor:this.state.cursor,cursorStyle:"active-letter-bad"},this.state.cursor==this.state.str.length-1&&"active-letter-good"==t.cursorStyle&&(this.finished=!0,this.clock=(new Date).getTime()-this.clock.getTime(),console.log(this.clock)),this.setState(t)))}},{key:"randomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"randomElt",value:function(e){return e[this.randomInt(0,e.length)]}},{key:"render",value:function(){return u.a.createElement("div",{className:"main"},u.a.createElement("div",{className:"quote"},u.a.createElement(m,{str:this.state.str,cursor:this.state.cursor,cursorStyle:this.state.cursorStyle})),u.a.createElement("div",{className:"info"},this.finished&&u.a.createElement(p,{string:this.state.str,cursor:this.cursor,clock:this.clock})))}}]),o}(u.a.Component);c.a.render(u.a.createElement(f,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.f8809f2e.chunk.js.map