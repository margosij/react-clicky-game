(this["webpackJsonpreact-clicky-game"]=this["webpackJsonpreact-clicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://images.unsplash.com/photo-1576492979330-562be19a36bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=400&q=80"},{"id":2,"image":"https://images.unsplash.com/photo-1575488465950-72feb253e889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":3,"image":"https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":4,"image":"https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":5,"image":"https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":6,"image":"https://images.unsplash.com/photo-1573433618812-f612e727b7d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":7,"image":"https://images.unsplash.com/photo-1572443490709-e57345f45939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":8,"image":"https://images.unsplash.com/photo-1570639215351-72aafe575704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":9,"image":"https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":10,"image":"https://images.unsplash.com/photo-1569431876779-f924b49ac555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":11,"image":"https://images.unsplash.com/photo-1568978825524-dc77d6f0b0c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{"id":12,"image":"https://images.unsplash.com/photo-1568071903270-134748f04f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}]')},,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),r=a(9),n=a.n(r),o=(a(15),a(7)),s=a(1),h=a(2),u=a(4),m=a(3),l=a(5),f=a(6),p=(a(16),function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("button",{onClick:e.changeScore,className:"img-container"},c.a.createElement("img",{alt:e.id,src:e.image})))}),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={buttons:f},a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.state.buttons.map((function(e){return c.a.createElement(p,{id:e.id,image:e.image})})))}}]),t}(c.a.Component),g=(a(17),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={message:"",shaking:!1},a.showMessage=function(){switch(a.state.message){case"correct":return"That is correct!";case"incorrect":return"That is incorrect!";default:return"Click any image to begin. Don't guess the same one more than once!"}},a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,i=e.highScore,c={shaking:!0};c.message=0===a&&0===i?"":0===a&&i>0?"incorrect":"correct",a===this.props.score&&this.state.message===c.message||this.setState(c)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:this.state.shaking?this.state.message:"",onAnimationEnd:function(){return e.setState({shaking:!1})}}," ",this.showMessage)}}]),t}(i.Component));var b=function(e){return c.a.createElement("nav",{className:"headerInfo"},c.a.createElement("ul",null,c.a.createElement("h1",{className:"gameTitle"},"Clicky Game!"),c.a.createElement(g,{score:e.score,highScore:e.highScore}),c.a.createElement("li",null,"Score: ",e.score," | High Score: ",e.highScore)))};a(18);var y=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={buttons:f,score:0,highScore:0},a.shuffleCards=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}return e},a.correctGuess=function(e){var t=a.state,i=t.score,c=t.highScore,r=i+1,n=Math.max(r,c);a.newState({data:a.shuffleCards(e),score:r,highScore:n})},a.incorrectGuess=function(e){a.newState({data:a.resetGame(e),score:0})},a.resetGame=function(e){var t=e.map((function(e){return Object(o.a)({},e,{clicked:!1})}));return a.shuffleCards(t)},a.clickEvent=function(e){var t=!1,i=a.state.buttons.map((function(a){var i=Object(o.a)({},a);return i.id===e&&(i.clicked||(i.clicked=!0,t=!0)),i}));!0===t?a.correctGuess(i):a.incorrectGuess(i)},a}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.setState({buttons:this.shuffleCards(this.state.buttons)})}},{key:"render",value:function(){return c.a.createElement(y,null,c.a.createElement(b,{score:this.state.score,highScore:this.state.highScore}),c.a.createElement(d,{clickedButton:this.clickEvent}))}}]),t}(i.Component);var O=function(){return c.a.createElement(E,null)};n.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.64e15667.chunk.js.map