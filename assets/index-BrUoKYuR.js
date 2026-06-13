var R=Object.defineProperty;var j=(e,t,s)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>j(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const g=1e3,m=700,D=[{scene:"laptop",label:"笔记本电脑",aliases:["笔记本电脑","笔记本","手提电脑"],category:"科技"},{scene:"computer",label:"电脑",aliases:["台式电脑","电脑","显示器"],category:"科技"},{scene:"phone",label:"手机",aliases:["智能手机","手机","电话"],category:"科技"},{scene:"robot",label:"机器人",aliases:["机器人","机械人"],category:"科技"},{scene:"camera",label:"相机",aliases:["照相机","相机","摄像机"],category:"科技"},{scene:"headphones",label:"耳机",aliases:["头戴式耳机","耳机"],category:"科技"},{scene:"gamepad",label:"游戏手柄",aliases:["游戏手柄","手柄"],category:"科技"},{scene:"television",label:"电视",aliases:["电视机","电视"],category:"科技"},{scene:"car",label:"汽车",aliases:["小汽车","汽车","轿车"],category:"交通"},{scene:"bus",label:"公交车",aliases:["公共汽车","公交车","巴士"],category:"交通"},{scene:"bicycle",label:"自行车",aliases:["自行车","单车"],category:"交通"},{scene:"airplane",label:"飞机",aliases:["飞机","客机"],category:"交通"},{scene:"rocket",label:"火箭",aliases:["宇宙飞船","火箭"],category:"交通"},{scene:"boat",label:"帆船",aliases:["帆船","小船","船"],category:"交通"},{scene:"lamp",label:"台灯",aliases:["台灯","灯"],category:"家居"},{scene:"chair",label:"椅子",aliases:["椅子","座椅"],category:"家居"},{scene:"table",label:"桌子",aliases:["桌子","书桌"],category:"家居"},{scene:"clock",label:"时钟",aliases:["闹钟","时钟","钟表"],category:"家居"},{scene:"cup",label:"杯子",aliases:["一杯咖啡","咖啡杯","咖啡","水杯","杯子"],category:"家居"},{scene:"book",label:"书",aliases:["一本书","书本","书"],category:"家居"},{scene:"backpack",label:"背包",aliases:["双肩包","书包","背包"],category:"家居"},{scene:"flower",label:"花",aliases:["一朵花","花朵","花"],category:"自然"},{scene:"cloud",label:"云",aliases:["白云","云朵","云"],category:"自然"},{scene:"sun",label:"太阳",aliases:["太阳","阳光"],category:"自然"},{scene:"mountain",label:"山",aliases:["山峰","大山","山"],category:"自然"},{scene:"tree",label:"树",aliases:["一棵树","大树","树"],category:"自然"},{scene:"fish",label:"鱼",aliases:["一条鱼","小鱼","鱼"],category:"自然"},{scene:"cat",label:"猫",aliases:["小猫咪","小猫","猫咪","猫"],category:"自然"},{scene:"umbrella",label:"雨伞",aliases:["雨伞","伞"],category:"生活"},{scene:"gift",label:"礼物",aliases:["礼物盒","礼物"],category:"生活"},{scene:"heart",label:"爱心",aliases:["一颗心","爱心","心形"],category:"生活"},{scene:"smile",label:"笑脸",aliases:["笑脸表情","笑脸"],category:"生活"},{scene:"sunset",label:"夕阳山景",aliases:["夕阳山景","日落风景","日落","夕阳"],category:"场景"},{scene:"house",label:"房子",aliases:["一座房子","小房子","小屋","房子"],category:"场景"}];function H(e){var s;return(s=D.flatMap(n=>n.aliases.map(r=>({entry:n,alias:r}))).filter(({alias:n})=>e.includes(n)).sort((n,r)=>r.alias.length-n.alias.length)[0])==null?void 0:s.entry}function V(e){var t;return((t=D.find(s=>s.scene===e))==null?void 0:t.label)??"物体"}const I={零:0,"〇":0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9},U={十:10,百:100,千:1e3,万:1e4};function F(e){if(/^\d+(?:\.\d+)?$/.test(e))return Number(e);if(!/^[零〇一二两三四五六七八九十百千万]+$/.test(e))return null;let t=0,s=0,n=0;for(const r of e){if(r in I){n=I[r];continue}const i=U[r];i===1e4?(s=(s+n)*i,t+=s,s=0):s+=(n||1)*i,n=0}return t+s+n}function x(e){const t=e.match(/\d+(?:\.\d+)?|[零〇一二两三四五六七八九十百千万]+/g);return t?t.map(F).filter(s=>s!==null):[]}const M={红色:"#ff5d73",红:"#ff5d73",橙色:"#ff9f43",橙:"#ff9f43",黄色:"#ffd166",黄:"#ffd166",绿色:"#5ee6a8",绿:"#5ee6a8",青色:"#51e6d2",青:"#51e6d2",蓝色:"#5e8bff",蓝:"#5e8bff",紫色:"#a986ff",紫:"#a986ff",粉色:"#ff87c8",粉:"#ff87c8",黑色:"#151824",黑:"#151824",白色:"#ffffff",白:"#ffffff",灰色:"#8f93a8",灰:"#8f93a8",棕色:"#9b6b4a",棕:"#9b6b4a"},z=[[/左上(?:角|方)?/,{x:180,y:150}],[/右上(?:角|方)?/,{x:820,y:150}],[/左下(?:角|方)?/,{x:180,y:550}],[/右下(?:角|方)?/,{x:820,y:550}],[/(?:正)?中心|中央|中间/,{x:g/2,y:m/2}],[/(?:画布)?上方|顶部/,{x:g/2,y:140}],[/(?:画布)?下方|底部/,{x:g/2,y:560}],[/(?:画布)?左边|左侧/,{x:220,y:m/2}],[/(?:画布)?右边|右侧/,{x:780,y:m/2}]],W=[[/(?:椭圆|椭圆形)/,"ellipse"],[/(?:正方形|方形|方块|正方块)/,"rectangle"],[/(?:长方形|矩形)/,"rectangle"],[/(?:圆形|圆圈|圆)/,"circle"],[/(?:三角形|三角)/,"triangle"],[/(?:五角星|星星|星形)/,"star"]],_="#f7f5ff",G="transparent";function y(e,t,s){return Math.min(s,Math.max(t,e))}function Y(e){return e.trim().replace(/[，、]/g,",").replace(/[。！？]/g,";").replace(/\s+/g," ")}function Z(e){return e.replace(/(?:请|麻烦|帮我|给我)/g,"").split(/;|然后|接着|随后|并且|同时|再(?=画|写|撤销|重做|删除|移动|清空|保存|导出|把|将)/).map(t=>t.replace(/^(?:先|再|并)\s*/,"").trim()).filter(Boolean)}function S(e,t=_){const s=Object.keys(M).sort((n,r)=>r.length-n.length).find(n=>e.includes(n));return s?M[s]:t}function A(e){for(const[s,n]of z)if(s.test(e))return n;const t=e.match(/(?:在|坐标(?:是|为)?|位置(?:是|为)?)?\s*[（(]?\s*([零〇一二两三四五六七八九十百千万\d.]+)\s*[,，\s]\s*([零〇一二两三四五六七八九十百千万\d.]+)\s*[）)]?/);if(t){const[s,n]=x(t[0]);if(s!==void 0&&n!==void 0)return{x:y(s,0,g),y:y(n,0,m)}}return{x:g/2,y:m/2}}function B(e){const t=e.match(/(?:线宽|粗细|宽度)\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/);return t?y(x(t[1])[0]??6,1,40):/粗(?:一点|线)?/.test(e)?10:/细(?:一点|线)?/.test(e)?3:6}function K(e,t){return/(?:实心|填充|涂满)/.test(e)?t:G}function E(e,t){const s=e.match(/从(.+?)到(.+?)(?:画|的|$)/);if(!s)return null;const n=x(s[1]),r=x(s[2]);if(n.length<2||r.length<2)return null;const i=S(e);return{type:"add",shape:{kind:t,x:y(n[0],0,g),y:y(n[1],0,m),end:{x:y(r[0],0,g),y:y(r[1],0,m)},fill:"transparent",stroke:i,strokeWidth:B(e)}}}function X(e){const t=e.match(/(?:写上?|添加文字|输入文字|文字是)\s*[“"']?(.+?)[”"']?(?=,|字号|字体|颜色|$)/);if(!t)return null;const s=e.match(/字号\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/),n=y(s?x(s[1])[0]??48:48,12,180);return{type:"add",shape:{kind:"text",...A(e),fill:S(e,"#f7f5ff"),stroke:"transparent",strokeWidth:0,text:t[1].trim(),fontSize:n}}}function J(e,t){const s=e.match(/宽(?:度)?\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/),n=e.match(/高(?:度)?\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/),r=e.match(/半径\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/),i=e.match(/直径\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/),d=e.match(/边长\s*(?:是|为)?\s*([零〇一二两三四五六七八九十百千万\d.]+)/),b=s?x(s[1])[0]:void 0,u=n?x(n[1])[0]:void 0,C=d?x(d[1])[0]:void 0;if(t==="circle"){const $=r?x(r[1])[0]:i?(x(i[1])[0]??180)/2:90;return{radius:y($??90,10,320)}}if(t==="rectangle"){const $=/正方形|方形|方块|边长/.test(e),O=y(C??b??($?180:260),20,700);return{width:O,height:y(C??u??($?O:160),20,500)}}if(t==="ellipse")return{width:y(b??260,20,700),height:y(u??150,20,500)};const N=r?x(r[1])[0]:C;return{radius:y(N??100,20,300)}}function Q(e){const t=W.find(([r])=>r.test(e));if(!t)return null;const s=t[1],n=S(e);return{type:"add",shape:{kind:s,...A(e),...J(e,s),fill:K(e,n),stroke:n,strokeWidth:B(e)}}}function tt(e){const t=e.match(/移动\s*([零〇一二两三四五六七八九十百千万\d.]+)/),s=t?x(t[1])[0]??50:50;return/向左|往左/.test(e)?{type:"move-last",dx:-s,dy:0}:/向右|往右/.test(e)?{type:"move-last",dx:s,dy:0}:/向上|往上/.test(e)?{type:"move-last",dx:0,dy:-s}:/向下|往下/.test(e)?{type:"move-last",dx:0,dy:s}:null}function et(e){if(/重做|恢复刚才|取消撤销/.test(e))return{type:"redo"};if(/^(?:撤销|退回|上一步)|撤销(?:上一步|刚才)?/.test(e))return{type:"undo"};if(/清空|清除画布|重新开始/.test(e))return{type:"clear"};if(/删除(?:上一个|刚才|最后)|删掉(?:上一个|刚才|最后)/.test(e))return{type:"delete-last"};if(/保存|导出|下载作品/.test(e))return{type:"export"};if(/帮助|怎么用|有什么指令|指令示例/.test(e))return{type:"help"};if(/停止聆听|暂停聆听|结束创作/.test(e))return{type:"stop-listening"};if(/背景/.test(e)&&Object.keys(M).some(s=>e.includes(s)))return{type:"background",color:S(e,"#ffffff")};if(/(?:把|将)?(?:上一个|刚才|最后)(?:图形|图案|形状)?.*(?:改成|变成|换成)/.test(e)&&Object.keys(M).some(s=>e.includes(s)))return{type:"recolor-last",color:S(e)};if(/(?:移动|挪动|把|将).*(?:向左|往左|向右|往右|向上|往上|向下|往下)/.test(e))return tt(e);const t=H(e);return t?{type:"scene",scene:t.scene,...A(e)}:/箭头/.test(e)?E(e,"arrow"):/直线|线段|画线/.test(e)?E(e,"line"):/(?:写|文字|添加文字|输入文字)/.test(e)?X(e):Q(e)}class st{parse(t){const s=Y(t),n=Z(s),r=[],i=[];for(const d of n){const b=et(d);b?r.push(b):i.push(d)}return{actions:r,normalized:s,unparsedClauses:i}}}const o="#232638",h="#f8f8ff";function l(e,t,s,n,r,i=o,d=7){return{kind:"rectangle",x:e,y:t,width:s,height:n,fill:r,stroke:i,strokeWidth:d}}function c(e,t,s,n,r=o,i=7){return{kind:"circle",x:e,y:t,radius:s,fill:n,stroke:r,strokeWidth:i}}function v(e,t,s,n,r,i=o,d=7){return{kind:"ellipse",x:e,y:t,width:s,height:n,fill:r,stroke:i,strokeWidth:d}}function a(e,t,s,n,r=o,i=9){return{kind:"line",x:e,y:t,end:{x:s,y:n},fill:"transparent",stroke:r,strokeWidth:i}}function f(e,t,s,n,r=o,i=7){return{kind:"triangle",x:e,y:t,radius:s,fill:n,stroke:r,strokeWidth:i}}const nt={computer:()=>[l(500,300,430,270,"#626b88"),l(500,292,380,220,"#9cecff",o,6),a(500,438,500,520,o,18),l(500,535,210,35,"#626b88"),l(500,585,360,70,"#d7d9e8"),a(390,580,610,580,"#9b9eb2",5)],laptop:()=>[l(500,300,410,250,"#5f6680"),l(500,300,360,200,"#a5efff",o,5),f(500,505,245,"#aeb2c8"),a(330,470,670,470,o,8),l(500,477,105,34,"#858aa3","transparent",0)],phone:()=>[l(500,350,230,430,"#33384e"),l(500,340,190,340,"#b9f2ff","transparent",0),c(500,555,18,"#7b819b","transparent",0),a(465,165,535,165,"#7b819b",8)],robot:()=>[a(500,125,500,185,o,8),c(500,110,18,"#ff6b7d"),l(500,250,280,180,"#a986ff"),c(445,235,22,"#66ead3"),c(555,235,22,"#66ead3"),a(445,305,555,305,o,8),l(500,445,330,230,"#7d5cff"),c(500,430,26,"#ffd166"),a(335,390,230,485,o,18),a(665,390,770,485,o,18),a(430,555,390,650,o,20),a(570,555,610,650,o,20)],camera:()=>[l(500,365,430,270,"#525a73"),l(385,205,130,80,"#69728f"),c(500,365,120,"#b7f0ff"),c(500,365,72,"#4f78c8"),c(500,365,30,"#1c2847"),l(640,255,70,55,"#ffd166")],headphones:()=>[v(500,330,430,430,"transparent","#7d5cff",34),l(310,430,105,210,"#a986ff"),l(690,430,105,210,"#a986ff"),l(335,430,45,120,"#4c526b","transparent",0),l(665,430,45,120,"#4c526b","transparent",0)],gamepad:()=>[v(500,380,520,300,"#a986ff"),a(360,345,360,455,h,20),a(305,400,415,400,h,20),c(625,355,25,"#ff6b7d",h,4),c(685,415,25,"#66ead3",h,4),c(500,445,18,"#ffd166",h,3)],television:()=>[l(500,325,500,310,"#41475d"),l(500,315,440,245,"#a5efff","transparent",0),a(500,480,500,550,o,16),l(500,565,230,38,"#555c75"),a(430,145,375,65,o,8),a(570,145,625,65,o,8)],car:()=>[l(500,405,520,180,"#ff6b7d"),f(500,285,220,"#ff8c98"),l(500,315,240,90,"#b9f2ff",o,5),c(350,500,65,"#343849"),c(650,500,65,"#343849"),c(350,500,25,"#c7cad8","transparent",0),c(650,500,25,"#c7cad8","transparent",0),l(735,405,40,50,"#ffd166","transparent",0)],bus:()=>[l(500,360,590,330,"#ffd166"),l(500,270,520,130,"#b9f2ff",o,5),a(365,205,365,335,o,5),a(500,205,500,335,o,5),a(635,205,635,335,o,5),l(680,420,120,190,"#ffefbd",o,5),c(355,535,65,"#343849"),c(650,535,65,"#343849")],bicycle:()=>[c(320,455,130,"transparent",o,10),c(680,455,130,"transparent",o,10),a(320,455,455,455,"#5e8bff",14),a(455,455,535,300,"#5e8bff",14),a(535,300,600,455,"#5e8bff",14),a(600,455,455,455,"#5e8bff",14),a(535,300,680,455,"#5e8bff",14),a(500,300,585,300,o,12),a(600,455,625,265,o,10),a(590,265,665,265,o,10)],airplane:()=>[a(210,350,790,350,"#5e8bff",36),f(800,350,68,"#5e8bff","#5e8bff",3),f(500,350,210,"#9cb7ff",o,5),f(270,300,100,"#9cb7ff",o,5),c(375,350,15,h,"transparent",0),c(440,350,15,h,"transparent",0),c(505,350,15,h,"transparent",0)],rocket:()=>[l(500,350,190,360,"#f4f5ff"),f(500,130,120,"#ff6b7d"),f(385,500,100,"#7d5cff"),f(615,500,100,"#7d5cff"),c(500,300,55,"#7ee7ff"),f(500,610,80,"#ffd166","#ff9f43",6)],boat:()=>[f(500,505,300,"#5e8bff"),a(500,170,500,500,o,12),f(390,315,175,"#ff6b7d"),f(615,330,155,"#ffd166"),a(220,575,780,575,"#51b8e8",18)],lamp:()=>[f(500,230,180,"#ffd166"),a(500,370,500,560,"#555c75",22),l(500,585,250,50,"#7d5cff"),c(500,360,24,"#ffefbd","transparent",0)],chair:()=>[l(500,285,300,230,"#ff9f43"),l(500,470,340,90,"#f4ae67"),a(365,505,335,640,o,18),a(635,505,665,640,o,18)],table:()=>[l(500,345,590,90,"#9b6b4a"),a(300,390,270,630,"#70482f",28),a(700,390,730,630,"#70482f",28),l(500,295,180,35,"#c78b60","transparent",0)],clock:()=>[c(500,350,235,"#f7f5ff"),a(500,350,500,215,"#5e8bff",14),a(500,350,625,420,"#ff6b7d",14),c(500,350,20,o),a(500,140,500,175,o,8),a(710,350,675,350,o,8),a(500,560,500,525,o,8),a(290,350,325,350,o,8)],cup:()=>[l(470,390,260,300,"#66ead3"),c(650,390,90,"transparent","#66ead3",28),v(470,235,260,50,"#dffcf6",o,5),a(420,185,390,110,"#aeb2c8",10),a(500,185,520,95,"#aeb2c8",10)],book:()=>[l(380,360,280,390,"#ffefbd"),l(620,360,280,390,"#fff5d8"),a(500,165,500,555,"#9b6b4a",9),a(280,270,450,270,"#c7a872",5),a(550,270,720,270,"#c7a872",5),a(280,340,450,340,"#c7a872",5),a(550,340,720,340,"#c7a872",5)],backpack:()=>[l(500,380,360,430,"#a986ff"),v(500,180,210,120,"transparent",o,18),l(500,475,260,150,"#7d5cff"),a(355,280,300,545,o,18),a(645,280,700,545,o,18),c(500,310,18,"#ffd166")],flower:()=>[a(500,350,500,640,"#45b879",20),c(500,285,65,"#ffd166"),c(500,165,72,"#ff87c8"),c(615,245,72,"#ff87c8"),c(570,365,72,"#ff87c8"),c(430,365,72,"#ff87c8"),c(385,245,72,"#ff87c8"),f(420,500,70,"#5ee6a8","#45b879",5),f(580,545,70,"#5ee6a8","#45b879",5)],cloud:()=>[c(385,380,120,"#dff8ff","#8cd8ef",5),c(500,300,155,"#dff8ff","#8cd8ef",5),c(630,380,120,"#dff8ff","#8cd8ef",5),l(505,420,410,150,"#dff8ff","#8cd8ef",5)],sun:()=>[c(500,350,155,"#ffd166","#ff9f43",8),a(500,80,500,150,"#ffb02e",15),a(500,550,500,620,"#ffb02e",15),a(230,350,300,350,"#ffb02e",15),a(700,350,770,350,"#ffb02e",15),a(310,160,360,210,"#ffb02e",15),a(640,490,690,540,"#ffb02e",15),a(690,160,640,210,"#ffb02e",15),a(360,490,310,540,"#ffb02e",15)],mountain:()=>[f(365,405,300,"#6687a5"),f(655,430,340,"#4f6f8f"),f(365,240,95,h,h,2),f(655,235,110,h,h,2),c(790,150,70,"#ffd166","#ff9f43",5)],tree:()=>[l(500,490,85,260,"#8b5e3c",h),c(500,280,155,"#49d392",h),c(390,350,115,"#68e2a8",h),c(610,350,115,"#68e2a8",h)],fish:()=>[v(475,350,410,245,"#51e6d2"),f(745,350,145,"#5e8bff"),c(360,320,20,o,h,4),a(380,410,500,430,"#3599a8",8),f(500,250,75,"#5e8bff")],cat:()=>[v(500,470,270,300,"#ffb86b"),c(500,270,175,"#ffc982"),f(385,145,100,"#ffb86b"),f(615,145,100,"#ffb86b"),c(440,255,18,o),c(560,255,18,o),f(500,320,26,"#ff87a6","#ff87a6",2),a(330,325,450,340,o,5),a(550,340,670,325,o,5),a(330,365,450,360,o,5),a(550,360,670,365,o,5),a(620,520,755,430,"#ffb86b",24)],umbrella:()=>[v(500,285,520,260,"#a986ff"),a(500,285,500,590,o,16),a(500,590,580,635,o,16),a(300,285,300,350,h,5),a(400,285,400,350,h,5),a(600,285,600,350,h,5),a(700,285,700,350,h,5)],gift:()=>[l(500,400,420,300,"#ff6b7d"),l(500,225,470,80,"#ff8797"),l(500,385,70,380,"#ffd166","transparent",0),a(500,185,420,105,"#ffd166",26),a(500,185,580,105,"#ffd166",26),c(500,180,30,"#ffd166","transparent",0)],heart:()=>[c(420,290,130,"#ff5d73","#ff5d73",2),c(580,290,130,"#ff5d73","#ff5d73",2),f(500,430,245,"#ff5d73","#ff5d73",2)],smile:()=>[c(500,350,220,"#ffd166",h,8),c(420,295,24,o,o,3),c(580,295,24,o,o,3),a(400,430,500,475,o,12),a(500,475,600,430,o,12)],house:()=>[l(500,420,360,250,"#ffcf7d",h),f(500,245,245,"#ff6f61",h),l(500,475,90,140,"#8b5e3c",h,6),l(395,385,72,72,"#7ed8ff",h,5),l(605,385,72,72,"#7ed8ff",h,5)],sunset:()=>[l(500,350,1e3,700,"#30265f","transparent",0),c(500,300,105,"#ffb45e","#ffd49b",8),f(290,455,330,"#4d3976","#4d3976",2),f(705,470,370,"#382d63","#382d63",2),l(500,635,1e3,130,"#171a3a","transparent",0)]};function rt(e,t){const s=nt[e]();if(!t||e==="sunset")return s;const r=Math.hypot(t.x-g/2,t.y-m/2)>80?.62:1,i={x:Math.min(720,Math.max(280,t.x)),y:Math.min(430,Math.max(250,t.y))},d=i.x-g/2,b=i.y-m/2;return s.map(u=>({...u,x:g/2+(u.x-g/2)*r+d,y:m/2+(u.y-m/2)*r+b,width:u.width!==void 0?u.width*r:void 0,height:u.height!==void 0?u.height*r:void 0,radius:u.radius!==void 0?u.radius*r:void 0,fontSize:u.fontSize!==void 0?u.fontSize*r:void 0,strokeWidth:Math.max(2,u.strokeWidth*r),end:u.end?{x:g/2+(u.end.x-g/2)*r+d,y:m/2+(u.end.y-m/2)*r+b}:void 0}))}function k(e){return{background:e.background,items:e.items.map(t=>({...t,end:t.end?{...t.end}:void 0}))}}function T(e){return e.replace(/[<>&'"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"})[t])}function at(e,t,s=-Math.PI/2){const n=e.radius??100;return Array.from({length:t},(r,i)=>{const d=s+i*Math.PI*2/t;return`${e.x+Math.cos(d)*n},${e.y+Math.sin(d)*n}`}).join(" ")}function it(e){const t=e.radius??100,s=t*.44;return Array.from({length:10},(n,r)=>{const i=r%2===0?t:s,d=-Math.PI/2+r*Math.PI/5;return`${e.x+Math.cos(d)*i},${e.y+Math.sin(d)*i}`}).join(" ")}function ot(e){return[`fill="${T(e.fill)}"`,`stroke="${T(e.stroke)}"`,`stroke-width="${e.strokeWidth}"`,'stroke-linecap="round"','stroke-linejoin="round"'].join(" ")}function ct(e){var s,n,r,i;const t=ot(e);switch(e.kind){case"circle":return`<circle data-shape-id="${e.id}" cx="${e.x}" cy="${e.y}" r="${e.radius??90}" ${t} />`;case"ellipse":return`<ellipse data-shape-id="${e.id}" cx="${e.x}" cy="${e.y}" rx="${(e.width??260)/2}" ry="${(e.height??150)/2}" ${t} />`;case"rectangle":return`<rect data-shape-id="${e.id}" x="${e.x-(e.width??260)/2}" y="${e.y-(e.height??160)/2}" width="${e.width??260}" height="${e.height??160}" rx="18" ${t} />`;case"line":return`<line data-shape-id="${e.id}" x1="${e.x}" y1="${e.y}" x2="${((s=e.end)==null?void 0:s.x)??e.x}" y2="${((n=e.end)==null?void 0:n.y)??e.y}" ${t} />`;case"arrow":return`<line data-shape-id="${e.id}" x1="${e.x}" y1="${e.y}" x2="${((r=e.end)==null?void 0:r.x)??e.x}" y2="${((i=e.end)==null?void 0:i.y)??e.y}" marker-end="url(#arrow-head)" ${t} />`;case"triangle":return`<polygon data-shape-id="${e.id}" points="${at(e,3)}" ${t} />`;case"star":return`<polygon data-shape-id="${e.id}" points="${it(e)}" ${t} />`;case"text":return`<text data-shape-id="${e.id}" x="${e.x}" y="${e.y}" text-anchor="middle" dominant-baseline="middle" font-family="Inter, PingFang SC, Microsoft YaHei, sans-serif" font-size="${e.fontSize??48}" font-weight="700" ${t}>${T(e.text??"")}</text>`}}function lt(e){return`已绘制${{circle:"圆形",ellipse:"椭圆",rectangle:"矩形",line:"直线",arrow:"箭头",triangle:"三角形",star:"五角星",text:"文字"}[e.kind]}`}class dt{constructor(){p(this,"state",{background:"#ffffff",items:[]});p(this,"history",[]);p(this,"future",[]);p(this,"idSequence",0)}getState(){return k(this.state)}get canUndo(){return this.history.length>0}get canRedo(){return this.future.length>0}nextId(){return this.idSequence+=1,`shape-${this.idSequence}`}checkpoint(){this.history.push(k(this.state)),this.future=[]}addShapes(t){this.state.items.push(...t.map(s=>({...s,end:s.end?{...s.end}:void 0,id:this.nextId()})))}apply(t){switch(t.type){case"add":return this.checkpoint(),this.addShapes([t.shape]),{changed:!0,message:lt(t.shape)};case"scene":return this.checkpoint(),this.addShapes(rt(t.scene,t.x!==void 0&&t.y!==void 0?{x:t.x,y:t.y}:void 0)),{changed:!0,message:`已绘制${V(t.scene)}`};case"undo":{const s=this.history.pop();return s?(this.future.push(k(this.state)),this.state=s,{changed:!0,message:"已撤销上一步"}):{changed:!1,message:"已经没有可撤销的操作了"}}case"redo":{const s=this.future.pop();return s?(this.history.push(k(this.state)),this.state=s,{changed:!0,message:"已重做"}):{changed:!1,message:"已经没有可重做的操作了"}}case"clear":return this.state.items.length===0?{changed:!1,message:"画布已经是空的"}:(this.checkpoint(),this.state.items=[],{changed:!0,message:"画布已清空"});case"delete-last":return this.state.items.length===0?{changed:!1,message:"画布上还没有图形"}:(this.checkpoint(),this.state.items.pop(),{changed:!0,message:"已删除最后一个图形"});case"move-last":{const s=this.state.items.at(-1);return s?(this.checkpoint(),s.x=Math.min(g,Math.max(0,s.x+t.dx)),s.y=Math.min(m,Math.max(0,s.y+t.dy)),s.end&&(s.end.x=Math.min(g,Math.max(0,s.end.x+t.dx)),s.end.y=Math.min(m,Math.max(0,s.end.y+t.dy))),{changed:!0,message:"已移动最后一个图形"}):{changed:!1,message:"请先画一个图形"}}case"recolor-last":{const s=this.state.items.at(-1);return s?(this.checkpoint(),s.fill!=="transparent"&&(s.fill=t.color),s.stroke=t.color,{changed:!0,message:"已修改最后一个图形的颜色"}):{changed:!1,message:"请先画一个图形"}}case"background":return this.checkpoint(),this.state.background=t.color,{changed:!0,message:"背景颜色已更新"};case"export":case"help":case"stop-listening":return{changed:!1,message:""}}}renderContents(){return this.state.items.map(ct).join("")}serializeSvg(){return['<?xml version="1.0" encoding="UTF-8"?>',`<svg xmlns="http://www.w3.org/2000/svg" width="${g}" height="${m}" viewBox="0 0 ${g} ${m}">`,"<defs>",'<marker id="arrow-head" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">','<path d="M 0 0 L 12 6 L 0 12 z" fill="context-stroke" />',"</marker>","</defs>",`<rect width="${g}" height="${m}" fill="${T(this.state.background)}" />`,this.renderContents(),"</svg>"].join("")}}class ft{constructor(t,s=1400){p(this,"parts",[]);p(this,"timer",null);this.onFlush=t,this.delayMs=s}get pendingText(){return this.parts.join("，")}push(t){const s=t.trim();s&&(this.parts.push(s),this.schedule())}flush(){if(this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null),this.parts.length===0)return;const t=this.pendingText;this.parts=[],this.onFlush(t)}clear(){this.timer!==null&&(window.clearTimeout(this.timer),this.timer=null),this.parts=[]}schedule(){this.timer!==null&&window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.timer=null,this.flush()},this.delayMs)}}class ht{constructor(t){p(this,"recognition");p(this,"transcriptBuffer");p(this,"shouldListen",!1);p(this,"restartTimer",null);this.options=t,this.transcriptBuffer=new ft(n=>{this.options.onStatusChange("processing","正在理解完整指令"),this.options.onFinalTranscript(n)});const s=window.SpeechRecognition??window.webkitSpeechRecognition;if(this.recognition=s?new s:null,!this.recognition){this.options.onStatusChange("unsupported","当前浏览器不支持连续语音识别，请使用最新版 Chrome 或 Edge。");return}this.recognition.lang="zh-CN",this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.maxAlternatives=3,this.bindEvents()}get supported(){return this.recognition!==null}start(){this.recognition&&(this.shouldListen=!0,this.options.onStatusChange("starting","正在请求麦克风权限"),this.tryStart())}stop(){var t;this.shouldListen=!1,this.restartTimer!==null&&(window.clearTimeout(this.restartTimer),this.restartTimer=null),this.transcriptBuffer.flush(),(t=this.recognition)==null||t.stop(),this.options.onStatusChange("idle","语音聆听已暂停")}bindEvents(){this.recognition&&(this.recognition.onstart=()=>{this.options.onStatusChange("listening","请完整说出指令，停顿后自动执行")},this.recognition.onresult=t=>{var r;let s="";for(let i=t.resultIndex;i<t.results.length;i+=1){const d=t.results[i],b=((r=d[0])==null?void 0:r.transcript.trim())??"";b&&(d.isFinal?this.transcriptBuffer.push(b):s+=b)}const n=[this.transcriptBuffer.pendingText,s].filter(Boolean).join("，");n&&this.options.onInterimTranscript(n),this.transcriptBuffer.pendingText&&this.options.onStatusChange("listening","正在等待你说完")},this.recognition.onerror=t=>{if(t.error==="no-speech"||t.error==="aborted")return;const s={"audio-capture":"没有检测到可用的麦克风",network:"语音识别服务暂时不可用","not-allowed":"麦克风权限未开启，请在浏览器地址栏中允许访问","service-not-allowed":"浏览器禁用了语音识别服务"};this.options.onStatusChange("error",s[t.error]??`语音识别出现问题：${t.error}`),(t.error==="not-allowed"||t.error==="service-not-allowed")&&(this.shouldListen=!1)},this.recognition.onend=()=>{this.shouldListen&&this.scheduleRestart(260)})}scheduleRestart(t){this.restartTimer!==null&&window.clearTimeout(this.restartTimer),this.restartTimer=window.setTimeout(()=>{this.restartTimer=null,this.tryStart()},t)}tryStart(){if(!(!this.recognition||!this.shouldListen))try{this.recognition.start()}catch{this.scheduleRestart(320)}}}const L=["在中间画一台电脑","在左边画一个机器人","在右上方画一架飞机","在右下方画一杯咖啡","在上方画一朵云"],q={unsupported:"不支持",idle:"已暂停",starting:"准备中",listening:"正在聆听",processing:"正在理解",error:"需要处理"},w={mic:`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="8" y="3" width="8" height="13" rx="4"></rect>
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"></path>
    </svg>
  `,spark:`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.5 5.1L18 9l-4.5 1.9L12 16l-1.5-5.1L6 9l4.5-1.9L12 2Z"></path>
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"></path>
    </svg>
  `,clock:`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v5l3 2"></path>
    </svg>
  `,shield:`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 20 6v5c0 5.2-3.4 8.5-8 10-4.6-1.5-8-4.8-8-10V6l8-3Z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  `,layers:`
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z"></path>
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5"></path>
    </svg>
  `};class ut{constructor(t){p(this,"parser",new st);p(this,"engine",new dt);p(this,"speech");p(this,"history",[]);p(this,"status","idle");p(this,"statusDetail","点击一次完成授权，之后全程使用语音");p(this,"currentTranscript","等待你的第一条指令");p(this,"commandCount",0);p(this,"latencyTotal",0);p(this,"started",!1);this.root=t,this.speech=new ht({onFinalTranscript:s=>this.executeTranscript(s),onInterimTranscript:s=>{this.currentTranscript=s,this.renderVoiceState()},onStatusChange:(s,n)=>{this.status=s,n&&(this.statusDetail=n),this.renderVoiceState()}})}mount(){this.root.innerHTML=this.template(),this.bindEvents(),this.renderCanvas(),this.renderHistory(),this.renderVoiceState(),new URLSearchParams(window.location.search).get("demo")==="1"&&this.startDemo()}template(){return`
      <div class="app-shell">
        <div class="ambient-scene" aria-hidden="true">
          <span class="ambient-orb ambient-orb-one"></span>
          <span class="ambient-orb ambient-orb-two"></span>
          <span class="ambient-orb ambient-orb-three"></span>
          <span class="ambient-grid"></span>
        </div>

        <header class="topbar">
          <a class="brand" href="/" aria-label="声绘 VoiceCanvas 首页">
            <span class="brand-wave" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i>
            </span>
            <span>
              <strong>声绘</strong>
              <small>VoiceCanvas</small>
            </span>
          </a>
          <div class="topbar-meta">
            <span class="mode-badge">${w.spark} 本地语义引擎</span>
            <span class="privacy-note">${w.shield} 隐私创作空间</span>
          </div>
        </header>

        <main class="workspace">
          <section class="canvas-card" aria-labelledby="canvas-title">
            <header class="panel-header">
              <div class="window-heading">
                <div class="window-controls" aria-hidden="true">
                  <i></i><i></i><i></i>
                </div>
                <div>
                  <p class="section-kicker">SPATIAL CANVAS</p>
                  <h1 id="canvas-title">用声音，把想法画出来</h1>
                </div>
              </div>
              <div class="canvas-stats" aria-label="画布状态">
                <span><b id="shape-count">0</b> 个元素</span>
                <span id="undo-status">等待创作</span>
              </div>
            </header>

            <div class="canvas-stage">
              <div class="canvas-toolbar" aria-hidden="true">
                <span>${w.layers} 矢量画布</span>
                <i></i>
                <span>100%</span>
              </div>
              <svg
                id="drawing-canvas"
                role="img"
                aria-label="由语音指令生成的绘图画布"
                viewBox="0 0 1000 700"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(21,24,36,.065)" stroke-width="1"></path>
                  </pattern>
                  <marker id="arrow-head" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
                    <path d="M 0 0 L 12 6 L 0 12 z" fill="context-stroke"></path>
                  </marker>
                </defs>
                <rect id="canvas-background" width="1000" height="700" fill="#ffffff"></rect>
                <rect width="1000" height="700" fill="url(#grid)" pointer-events="none"></rect>
                <g id="drawing-layer"></g>
              </svg>
              <div class="empty-canvas" id="empty-canvas">
                <span class="empty-icon">${w.spark}</span>
                <strong>画布正在等你开口</strong>
                <span>试试说：“在中间画一台电脑”</span>
              </div>
            </div>

            <footer class="canvas-footer">
              <span>${w.layers} 1000 × 700 矢量画布</span>
              <span>${w.shield} 本地处理，不保存音频</span>
              <span>${w.spark} 34 种复合物体</span>
            </footer>
          </section>

          <aside class="voice-panel" aria-labelledby="voice-title">
            <section class="voice-card">
              <div class="status-row">
                <span class="status-dot" id="status-dot"></span>
                <span id="status-label">${q[this.status]}</span>
                <span class="latency-pill">${w.clock}<b id="latency-value">--</b> ms</span>
              </div>

              <div class="voice-orb-wrap" aria-hidden="true">
                <div class="voice-ring ring-one"></div>
                <div class="voice-ring ring-two"></div>
                <div class="voice-orb" id="voice-orb">${w.mic}</div>
              </div>

              <div class="voice-copy">
                <p class="section-kicker">VOICE COMMAND</p>
                <h2 id="voice-title">说出你的画面</h2>
                <p id="status-detail">${this.statusDetail}</p>
              </div>

              <div class="transcript" aria-live="polite" aria-atomic="true">
                <span>实时识别</span>
                <strong id="transcript-text">${this.currentTranscript}</strong>
              </div>

              <button class="start-button" id="start-button" type="button">
                ${w.mic}
                <span>开始语音创作</span>
              </button>
              <p class="permission-note" id="permission-note">
                受浏览器安全策略限制，首次启用麦克风需要一次点击；授权后所有创作操作仅靠语音。
              </p>
            </section>

            <section class="examples-card">
              <div class="card-title-row">
                <h2>可以这样说</h2>
                <span>34 种物体 · 自然表达</span>
              </div>
              <div class="command-examples" aria-label="语音指令示例">
                <span>“在中间画一台电脑”</span>
                <span>“在左边画一个机器人”</span>
                <span>“在右上画一架飞机”</span>
                <span>“画一只小猫”</span>
                <span>“把上一个向右移动 50”</span>
                <span>“撤销，然后重做”</span>
              </div>
            </section>

            <section class="history-card">
              <div class="card-title-row">
                <h2>指令轨迹</h2>
                <span id="command-count">0 条已执行</span>
              </div>
              <ol class="history-list" id="history-list"></ol>
            </section>
          </aside>
        </main>
      </div>
    `}bindEvents(){const t=this.root.querySelector("#start-button");t==null||t.addEventListener("click",()=>{this.started?(this.speech.stop(),this.started=!1,this.status="idle",this.statusDetail="语音聆听已暂停，再次点击可继续"):(this.started=!0,this.speech.start(),this.statusDetail="请完整说出物体和位置，停顿后自动执行"),this.renderVoiceState()})}executeTranscript(t){const s=performance.now(),n=this.parser.parse(t),r=[];let i=!1;for(const b of n.actions){const u=this.executeAction(b);u&&(r.push(u.message),i||(i=u.changed))}n.actions.length===0?r.push("这条指令我还没听懂，请说帮助查看示例"):n.unparsedClauses.length>0&&r.push(`其中“${n.unparsedClauses.join("、")}”暂未识别`);const d=Math.max(1,Math.round(performance.now()-s));this.commandCount+=1,this.latencyTotal+=d,this.currentTranscript=t,this.history.unshift({command:t,result:r.filter(Boolean).join("；"),success:n.actions.length>0,latency:d,timestamp:new Date}),this.history.splice(6),i&&this.renderCanvas(),this.renderHistory(),this.renderVoiceState()}executeAction(t){return t.type==="export"?(this.exportSvg(),{changed:!1,message:"作品已导出为 SVG 文件"}):t.type==="help"?{changed:!1,message:"可以画电脑、机器人、手机、汽车、飞机、火箭、相机、台灯、杯子、猫、花等物体，也支持撤销、移动和保存"}:t.type==="stop-listening"?(this.started=!1,this.speech.stop(),{changed:!1,message:"语音聆听已暂停"}):this.engine.apply(t)}exportSvg(){const t=new Blob([this.engine.serializeSvg()],{type:"image/svg+xml"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`voice-canvas-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.svg`,n.click(),window.setTimeout(()=>URL.revokeObjectURL(s),1e3)}renderCanvas(){const t=this.engine.getState(),s=this.root.querySelector("#drawing-layer"),n=this.root.querySelector("#canvas-background"),r=this.root.querySelector("#empty-canvas"),i=this.root.querySelector("#shape-count"),d=this.root.querySelector("#undo-status");s&&(s.innerHTML=this.engine.renderContents()),n==null||n.setAttribute("fill",t.background),r==null||r.classList.toggle("is-hidden",t.items.length>0),i&&(i.textContent=String(t.items.length)),d&&(d.textContent=this.engine.canUndo?"可撤销":"等待创作")}renderHistory(){const t=this.root.querySelector("#history-list"),s=this.root.querySelector("#command-count");if(!(!t||!s)){if(s.textContent=`${this.commandCount} 条已执行`,this.history.length===0){t.innerHTML=`
        <li class="history-empty">
          <span>${w.mic}</span>
          <p>你的语音指令会按时间出现在这里</p>
        </li>
      `;return}t.innerHTML=this.history.map(n=>`
          <li class="history-item ${n.success?"":"is-error"}">
            <span class="history-index">${String(this.commandCount-this.history.indexOf(n)).padStart(2,"0")}</span>
            <div>
              <strong>${this.escapeHtml(n.command)}</strong>
              <p>${this.escapeHtml(n.result)}</p>
            </div>
            <span class="history-time">${n.latency} ms</span>
          </li>
        `).join("")}}renderVoiceState(){const t=this.root.querySelector("#status-label"),s=this.root.querySelector("#status-detail"),n=this.root.querySelector("#transcript-text"),r=this.root.querySelector("#status-dot"),i=this.root.querySelector("#voice-orb"),d=this.root.querySelector("#start-button"),b=this.root.querySelector("#latency-value"),u=this.root.querySelector("#permission-note");t&&(t.textContent=q[this.status]),s&&(s.textContent=this.statusDetail),n&&(n.textContent=this.currentTranscript),r==null||r.setAttribute("data-status",this.status),i==null||i.setAttribute("data-status",this.status),d&&(d.classList.toggle("is-active",this.started),d.querySelector("span").textContent=this.started?"暂停语音聆听":"开始语音创作",d.disabled=!this.speech.supported&&!this.isDemoMode()),b&&(b.textContent=this.commandCount>0?String(Math.round(this.latencyTotal/this.commandCount)):"--"),u&&!this.speech.supported&&(u.textContent="当前浏览器不支持连续语音识别，请使用最新版 Chrome 或 Edge 打开本应用。")}startDemo(){this.started=!0,this.status="listening",this.statusDetail="自动演示正在模拟真实语音指令",this.renderVoiceState();let t=0;const s=()=>{if(t>=L.length){this.status="idle",this.statusDetail="自动演示完成：所有图形均由同一语音指令管线生成",this.started=!1,this.renderVoiceState();return}this.status="processing",this.currentTranscript=L[t],this.renderVoiceState(),window.setTimeout(()=>{this.executeTranscript(L[t]),t+=1,window.setTimeout(s,900)},550)};s()}isDemoMode(){return new URLSearchParams(window.location.search).get("demo")==="1"}escapeHtml(t){const s=document.createElement("span");return s.textContent=t,s.innerHTML}}const P=document.querySelector("#app");if(!P)throw new Error("App root was not found.");new ut(P).mount();
