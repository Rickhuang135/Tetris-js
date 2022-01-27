class piece{
    constructor(coo,col,excol="none"){
        this.coords=coo
        this.color=col;
        this.extra=excol
    }
}
const s1=new piece([1,0,1,1,1,2,1,3,1,4,-1,2,0,2,1,2,2,2,3,2,1,0,1,1,1,2,1,3,1,4,-1,2,0,2,1,2,2,2,3,2],'url(./Images/Lime.png)')
//line
const s2=new piece([0,1,1,0,1,1,1,2,2,1,0,1,1,0,1,1,1,2,2,1,0,1,1,0,1,1,1,2,2,1,0,1,1,0,1,1,1,2,2,1],'url(./Images/blue.png)')
//cross
const s3=new piece([0,0,1,0,1,1,1,2,0,2,0,1,0,2,1,1,2,1,2,2,1,0,1,1,1,2,2,0,2,2,0,0,0,1,1,1,2,1,2,0],'url(./Images/aqua.png)')
//C
const s4=new piece([0,0,1,0,2,0,2,1,2,2,0,0,0,1,0,2,1,0,2,0,0,0,0,1,0,2,1,2,2,2,0,2,1,2,2,2,2,0,2,1],'url(./Images/pink.png)')
//equal L
const s5=new piece([0,1,0,2,1,1,2,0,2,1,0,0,1,0,1,1,1,2,2,2,0,1,0,2,1,1,2,0,2,1,0,0,1,0,1,1,1,2,2,2],'url(./Images/silver.png)')
//equal S
const s6=new piece([0,0,0,1,1,1,2,1,2,2,0,2,1,0,1,1,1,2,2,0,0,0,0,1,1,1,2,1,2,2,0,2,1,0,1,1,1,2,2,0],'url(./Images/Diorite.png)')
//equal Z
const s7=new piece([0,0,0,1,0,2,1,1,2,1,0,2,1,0,1,1,1,2,2,2,0,1,1,1,2,0,2,1,2,2,0,0,1,0,1,1,1,2,2,0],'url(./Images/Diorite.png)')
//equal T
const s8=new piece([0,0,0,1,1,0,1,1,1,2,0,1,0,2,1,1,1,2,2,1,1,0,1,1,1,2,2,1,2,2,0,1,1,0,1,1,2,0,2,1],'url(./Images/green.png)')
//square right
const s9=new piece([0,1,0,2,1,0,1,1,1,2,0,1,1,1,1,2,2,1,2,2,1,0,1,1,1,2,2,0,2,1,0,0,0,1,1,0,1,1,2,1],'url(./Images/orange.png)')
//square left
const s10=new piece([1,0,1,1,1,2,1,3,2,0,0,0,0,1,1,1,2,1,3,1,0,2,1,-1,1,0,1,1,1,2,-1,1,0,1,1,1,2,1,2,2],'url(./Images/yellow.png)')
//L right short
const s11=new piece([1,0,1,1,1,2,1,3,2,0,0,0,0,1,1,1,2,1,3,1,0,2,1,-1,1,0,1,1,1,2,-1,1,0,1,1,1,2,1,2,2],'url(./Images/red.png)')
//L left short
const s12=new piece([0,1,1,0,1,1,1,2,1,3,0,1,1,1,1,2,2,1,3,1,1,-1,1,0,1,1,1,2,2,1,-1,1,0,1,1,0,1,1,2,1],'url(./Images/purple.png)')
//T right short
const s13=new piece([1,0,1,1,1,2,1,3,2,1,0,1,1,0,1,1,2,1,3,1,0,1,1,-1,1,0,1,1,1,2,-1,1,0,1,1,1,1,2,2,1],'url(./Images/brown.png)')
//T left short
const s14=new piece([1,1,1,2,1,3,2,0,2,1,0,0,1,0,1,1,2,1,3,1,0,1,0,2,1,-1,1,0,1,1,-1,1,0,1,1,1,1,2,2,2],'url(./Images/purple.png)')
//disfigured S
const s15=new piece([0,0,0,1,1,1,1,2,1,3,0,2,1,1,1,2,2,1,3,1,1,-1,1,0,1,1,2,1,2,2,-1,1,0,1,1,0,1,1,2,0],'url(./Images/brown.png)')
//disfigured Z
const s16=new piece([0,0,0,1,1,1,1,2,2,1,0,2,1,0,1,1,1,2,2,1,0,1,1,0,1,1,2,1,2,2,0,1,1,0,1,1,1,2,2,0],'url(./Images/granite.png)')
//下
const s17=new piece([0,1,0,2,1,0,1,1,2,1,0,1,1,0,1,1,1,2,2,2,0,1,1,1,1,2,2,0,2,1,0,0,1,0,1,1,1,2,2,1],'url(./Images/andesite.png)')
//上
const Newton=new piece([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],'url(./Images/G.png)')
const Bomb=new piece([0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0],'url(./Images/TNT.png)','url(./Images/TN2.png)')
let square120=document.getElementById('gameScreen');
let audio=document.getElementById('Theme');
for(var i=0;i<24;i++){
    var rows=document.createElement('div')
    rows.className=`row ${i+1}`
    square120.appendChild(rows);
    for(var j=0;j<12;j++){
        var rows2=document.createElement('div')
        rows.appendChild(rows2);
        rows2.className=`column${j+1} empty`
        rows2.style.background='transparent'
    }
}
let reset=true;
let score=0;
let scoredisplay=document.getElementById('changer')
let buttondiscript=document.getElementById('nextword')
let shapearray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
function selectshape(){
    let randomarray=[]
    for(var i=0;randomarray.length<18;i++){
        var random=Math.floor(Math.random()*shapearray.length)
        var transfer=shapearray[shapearray.length-1]
        shapearray[shapearray.length-1]=shapearray[random]
        shapearray[random]=transfer
        randomarray[i]=shapearray.pop();
    }
    return randomarray
}
shapearray=selectshape()
let increment=1;
let nextshape=shapearray[increment]
let currentshape=shapearray[0]
let level=0;
let line=0;
let totalline=0;
let linedisplay=document.getElementById('line');
let color=undefined;
let nxcolor=false
let xcolor=false
let initial=true
let nextcolor=undefined
let leveldisplay=document.getElementById('levelin')
let button=document.getElementById('buttonDisplay');
let buttonbg=document.getElementById('button')
button.style.display='none';
for(var i=0;i<5;i++){
    var rows=document.createElement('div')
    rows.className=`Nrow${i+1}`
    button.appendChild(rows)
    for(var j=0;j<5;j++){
        var rows2=document.createElement('div')
        rows.appendChild(rows2);
        rows2.className=`column${j+1} empty`
        rows2.style.background='transparent'
    }
}
let busy=false;
let row=document.getElementsByClassName("row");
let currentRow=0;
let ccolumn=4;
let pause=true
let WhereItWas=[]
let clean=true
let rotatee=0
let commit=false
let scoreboard=document.getElementById('scoreboard')
let userinput=document.getElementsByName('username')[0]

function clearscore(){
    while(scoreboard.childNodes.length>0){
        scoreboard.removeChild(scoreboard.firstChild)
    }
}

function sortusers(ref=3){
    let sortbuttons=Array.prototype.slice.call(document.getElementsByClassName('tbutton'))
    sortbuttons.forEach(e=>e.classList.remove('active'))
    sortbuttons[ref-1].classList.add('active')
    let newarray=Array.prototype.slice.call(scoreboard.children)
    newarray.sort(function(a,b){return b.children[0].children[ref].innerHTML-a.children[0].children[ref].innerHTML})
    scoreboard.children=newarray
    clearscore()
    for(var i=0;i<newarray.length;i++){
        scoreboard.appendChild(newarray[i])
    }
}

function listusers(){
    var newrec=document.getElementById('temporec')
    if(newrec!=undefined){
        newrec=newrec.children[0]
        var username=newrec.children[0].innerHTML
        if(username==null){
            username='j2w9bm7q'
        }
        var usernumb=localStorage.getItem('usernumb')
        usernumb++
        localStorage.setItem('usernumb',usernumb)
        localStorage.setItem(`user${usernumb}`,username)
        localStorage.setItem(`user${usernumb}level`,level)
        localStorage.setItem(`user${usernumb}line`,totalline)
        localStorage.setItem(`user${usernumb}score`,score)
        element=undefined
        level=0;
    }
    clearscore()
    usernumb=localStorage.getItem('usernumb')
    if(usernumb==undefined){
        localStorage.setItem('usernumb',0)
    }else{
        for(var i=1;i<=usernumb;i++){
            var lisitem=document.createElement('li')
            lisitem.id=`user${i}`
            lisitem.oncontextmenu=function(){deletee(this)}
            var username=localStorage.getItem(`user${i}`)
            if(username===null){
                username=`<i>null</i>`
            }
            lisitem.innerHTML=`<div><span>${username}</span><span>${localStorage.getItem(`user${i}line`)}</span><span>${localStorage.getItem(`user${i}level`)}</span><span class='score'>${localStorage.getItem(`user${i}score`)}</span></div>`
            scoreboard.appendChild(lisitem)
        }
        sortusers()
    }
}

var element=undefined
function recordscore(){
    if(element==undefined){
        var recitem=document.createElement('li')
        recitem.id='temporec'
        recitem.innerHTML=`<div><span>null</span><span>${line}</span><span>${level}</span><span class='score'>${score}</span></div>`
        scoreboard.appendChild(recitem)
        element=recitem
    }else{
        if(userinput.value==null||userinput.value==''){
            element.children[0].children[0].innerHTML='null'
        }else{
            element.children[0].children[0].innerHTML=userinput.value
        }
    }
}

cd=document.getElementById('cs')
function cs(state='0'){
    switch(state){
        case 0:cd.children[0].style.display='none';cd.children[1].style.display='none';break
        case 1:cd.children[0].style.display='block';var res=document.getElementById('spacing').children[0];if(score>0){res.style.display='inline-block'}else{res.style.display='none'};cd.children[1].style.display='none';break
        case 2:cd.children[0].style.display='none';cd.children[1].style.display='block';break
    }
}
cs(1)

let nshapecoords=[]
let shapecoords=[]
function nextShape(shape){
    if(button.childNodes[1].childNodes!=undefined){
        for(let i=0;i<button.childNodes.length;i++){
            for(let j=0;j<button.childNodes[i].childNodes.length;j++){
                button.childNodes[i].childNodes[j].style.background='transparent'
            }
        }
        if(initial){
            initial=false
            nextShape(currentshape)
            color=nextcolor
            nextShape(nextshape)
        }else{
            nshapecoords=[...shapecoords]
            nxcolor=xcolor
            xcolor=false
            switch(shape){
                case 0:shapecoords=[0,0,1,0,1,1,1,2,0,2,0,1,0,2,1,1,2,1,2,2,1,0,1,1,1,2,2,0,2,2,0,0,0,1,1,1,2,1,2,0];nextcolor='url(./Images/aqua.png)';break;
                case 1:shapecoords=[0,1,1,0,1,1,1,2,2,1,0,1,1,0,1,1,1,2,2,1,0,1,1,0,1,1,1,2,2,1,0,1,1,0,1,1,1,2,2,1];nextcolor='url(./Images/blue.png)';break;
                case 2:shapecoords=[0,0,0,1,1,0,1,1,1,2,0,1,0,2,1,1,1,2,2,1,1,0,1,1,1,2,2,1,2,2,0,1,1,0,1,1,2,0,2,1];nextcolor='url(./Images/green.png)';break;
                case 3:shapecoords=[0,1,0,2,1,0,1,1,1,2,0,1,1,1,1,2,2,1,2,2,1,0,1,1,1,2,2,0,2,1,0,0,0,1,1,0,1,1,2,1];nextcolor='url(./Images/orange.png)';break;
                case 4:shapecoords=[0,0,1,0,1,1,1,2,1,3,0,1,0,2,1,1,2,1,3,1,1,-1,1,0,1,1,1,2,2,2,-1,1,0,1,1,1,2,1,2,0];nextcolor='url(./Images/red.png)';break;
                case 5:shapecoords=[1,0,1,1,1,2,1,3,2,0,0,0,0,1,1,1,2,1,3,1,0,2,1,-1,1,0,1,1,1,2,-1,1,0,1,1,1,2,1,2,2];nextcolor='url(./Images/yellow.png)';break;
                case 6:shapecoords=[0,1,1,0,1,1,1,2,1,3,0,1,1,1,1,2,2,1,3,1,1,-1,1,0,1,1,1,2,2,1,-1,1,0,1,1,0,1,1,2,1];nextcolor='url(./Images/purple.png)';break;
                case 7:shapecoords=[1,0,1,1,1,2,1,3,2,1,0,1,1,0,1,1,2,1,3,1,0,1,1,-1,1,0,1,1,1,2,-1,1,0,1,1,1,1,2,2,1];nextcolor='url(./Images/brown.png)';break;
                case 8:shapecoords=[1,0,1,1,1,2,1,3,1,4,-1,2,0,2,1,2,2,2,3,2,1,0,1,1,1,2,1,3,1,4,-1,2,0,2,1,2,2,2,3,2];nextcolor='url(./Images/Lime.png)';break;
                case 9:shapecoords=[0,0,1,0,2,0,2,1,2,2,0,0,0,1,0,2,1,0,2,0,0,0,0,1,0,2,1,2,2,2,0,2,1,2,2,2,2,0,2,1];nextcolor='url(./Images/pink.png)';break;
                case 10:shapecoords=[0,1,0,2,1,1,2,0,2,1,0,0,1,0,1,1,1,2,2,2,0,1,0,2,1,1,2,0,2,1,0,0,1,0,1,1,1,2,2,2];nextcolor='url(./Images/silver.png)';break;
                case 11:shapecoords=[0,0,0,1,1,1,2,1,2,2,0,2,1,0,1,1,1,2,2,0,0,0,0,1,1,1,2,1,2,2,0,2,1,0,1,1,1,2,2,0];nextcolor='url(./Images/Diorite.png)';break;
                case 12:shapecoords=[0,0,0,1,1,1,1,2,2,1,0,2,1,0,1,1,1,2,2,1,0,1,1,0,1,1,2,1,2,2,0,1,1,0,1,1,1,2,2,0];nextcolor='url(./Images/granite.png)';break;
                case 13:shapecoords=[0,1,0,2,1,0,1,1,2,1,0,1,1,0,1,1,1,2,2,2,0,1,1,1,1,2,2,0,2,1,0,0,1,0,1,1,1,2,2,1];nextcolor='url(./Images/andesite.png)';break;
                case 14:shapecoords=[0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0];nextcolor='url(./Images/TNT.png)';xcolor='url(./Images/TN2.png)';break
                case 15:shapecoords=[0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0];nextcolor='url(./Images/TNT.png)';xcolor='url(./Images/TN2.png)';break
                case 16:shapecoords=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];nextcolor='url(./Images/G.png)';break
                case 17:shapecoords=[1,0,1,1,1,2,1,3,1,4,-1,2,0,2,1,2,2,2,3,2,1,0,1,1,1,2,1,3,1,4,-1,2,0,2,1,2,2,2,3,2];nextcolor='url(./Images/Lime.png)';break;
            }
            var storecolor=nextcolor;
            for(let i=1;i<10;i=i+2){
                button.childNodes[shapecoords[i-1]].childNodes[shapecoords[i]].style.background=nextcolor;
                if(xcolor!=false){
                    if(nextcolor==storecolor){
                        nextcolor=xcolor
                    }else{
                        nextcolor=storecolor
                    }
                }
            }
            nextcolor=storecolor
        }
    }
}

function deletee(element){
    addEventListener("contextmenu",(e)=>{e.preventDefault()})
    if(window.confirm('do you wish to delet this record?')){
        var usernumb=localStorage.getItem('usernumb')
        localStorage.setItem(element.id,localStorage.getItem(`user${usernumb}`))
        localStorage.setItem(`${element.id}line`,localStorage.getItem(`user${usernumb}line`))
        localStorage.setItem(`${element.id}level`,localStorage.getItem(`user${usernumb}level`))
        localStorage.setItem(`${element.id}score`,localStorage.getItem(`user${usernumb}score`))
        localStorage.removeItem(`user${usernumb}`);
        localStorage.removeItem(`user${usernumb}line`);
        localStorage.removeItem(`user${usernumb}level`);
        localStorage.removeItem(`user${usernumb}score`);
        usernumb--
        localStorage.setItem('usernumb',usernumb)
        listusers()
    }
}

function addlevel(){
    if(level<23){
        level+=3
        leveldisplay.innerHTML=level
    }
}

let playmusic=localStorage.getItem('music')
function music(){
    var md=Array.prototype.slice.call(document.getElementsByClassName('Mstate'))
    if(playmusic=='true'||playmusic==true){
        md.forEach(x=>x.innerHTML='off')
        playmusic=false
        localStorage.setItem('music',true)
    }else{
        md.forEach(x=>x.innerHTML='on')
        playmusic=true
        localStorage.setItem('music',false)
    }
}
if(playmusic==undefined){
    localStorage.setItem('music',false)
    playmusic=false
}
music()
let newbuttons=document.getElementsByClassName('play')

function Dabutton(){
    if(pause){
        if(reset){
            listusers()
            resetboard()
            newbuttons[0].innerHTML='Resume'
            newbuttons[1].innerHTML='Resume'
            reset=false
        }
        buttonbg.style.background='none'
        button.style.display='block';
        pause=false;
        initial=true
        nextShape(nextshape)
        buttondiscript.innerHTML='Next:';
        cs(0)
        if(playmusic==true){
            audio.play();
        }
    }else{
        buttonbg.style.background='url(./Images/pause-button.png)'
        buttonbg.style.backgroundSize='170%'
        buttonbg.style.backgroundPosition='center'
        button.style.display='none'
        buttondiscript.innerHTML='Paused'
        pause=true;
        audio.pause();
        cs(1)
    }
}

function confit(x){
    recordscore()
    if(x.innerHTML=='cancel'){
        element.remove()
    }else{
        listusers()
    }
    score=0
    leveldisplay.innerHTML=level
    cs(1)
    element=undefined
}

function resetboard(){
    for(var i=0;i<row.length;i++){
        for(var j=0;j<row[i].childNodes.length;j++){
            row[i].childNodes[j].style.background='transparent'
        }
    }
    score=0
    line=0
    totalline=0
    linedisplay.innerHTML=totalline
    scoredisplay.innerHTML=score
    leveldisplay.innerHTML=level
    initial=true
    shapearray=selectshape()
    increment=1;
    currentshape=shapearray[0]
    nextshape=shapearray[1]
    currentRow=0;
    ccolumn=4;
}

function endgame(){
    buttonbg.style.background='url(./Images/playbutton.png)'
    buttonbg.style.backgroundSize='130%'
    buttonbg.style.backgroundPosition='center'
    button.style.display='none'
    buttondiscript.innerHTML='Play again'
    pause=true;
    reset=true;
    newbuttons[0].innerHTML='New game'
    newbuttons[1].innerHTML='New game'
    audio.pause();
    cs(2)
    recordscore()
}

function rowCheck(){
    let checkcount=0;
    for(var i=0;i<row[0].childNodes.length;i++){
        if(row[0].childNodes[i].style.background!='transparent'){
            if(row[0].childNodes[i].style.background!='bc1'){
                endgame()
                break;
            }
        }
    }
    for(var i=1;i<row.length;i++){
        var rooow=row[i].childNodes
        var execute=true
        for(var j=0;j<rooow.length;j++){
            if(rooow[j].style.background=='transparent'||rooow[j].style.background=='bc2'||rooow[j].style.background=='bc5'||rooow[j].style.background=='bc8'){
                execute=false
                break;
            }
        }
        if(execute){
            checkcount++
            line++
            totalline++
            linedisplay.innerHTML=totalline;
            linedisplay.parentElement.style.backgroundColor='yellow'
            setTimeout(function(){
                linedisplay.parentElement.style.backgroundColor='transparent'
            },500)
            for(var j=0;j<rooow.length;j++){
                for(var minus=0;i-minus>1;minus++){
                    row[i-minus].childNodes[j].style.background=row[i-1-minus].childNodes[j].style.background;
                }
            }
        }
    }
    switch(checkcount){
        case 1:score=score+100*(level+1);break;
        case 2:score=score+300*(level+1);break;
        case 3:score=score+500*(level+1);break;
        case 4:score=score+800*(level+1);break;
        case 5:score=score+1600*(level+1);break;
    }
    if(line>=10){
        line-=10;
        level++;
        leveldisplay.innerHTML=level;
        leveldisplay.parentElement.style.backgroundColor='yellow'
        setTimeout(function(){
            leveldisplay.parentElement.style.backgroundColor='transparent'
        },500)
    }
    scoredisplay.innerHTML=score;
}

function moveblock(x,y){
    if (clean == false) {
        WhereItWas=[]
        clean=true
    }
    if(row[currentRow+x]!=undefined){
        if(row[currentRow+x].childNodes[ccolumn+y]!=undefined){
            if(row[currentRow+x].childNodes[ccolumn+y].style.background=='transparent'||WhereItWas.findIndex(un=>un==row[currentRow+x].childNodes[ccolumn+y])!=-1){
                if(commit){
                    WhereItWas.push(row[currentRow+x].childNodes[ccolumn+y])
                    row[currentRow+x].childNodes[ccolumn+y].style.background=color;
                }
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }else{
        return false
    }
}

function shapedown(){
    let moveAray=[];
    var initial=1
    var storecolor=color;
    switch(rotatee){
        case 1: initial=11;break;
        case 2: initial=21;break;
        case 3: initial=31;break
    }
    for(let i=initial;i<initial+9;i=i+2){
        moveAray.push(moveblock(nshapecoords[i-1],nshapecoords[i]));
        if(nxcolor!=false){
            if(color==storecolor){
                color=nxcolor
            }else{
                color=storecolor
            }
        }
    }
    color=storecolor;
    busy=false
    if(moveAray.findIndex(x=>x==false)!=-1){
        return false
    }
    return true
}

function removeblock(){
    for(var i=0;i<WhereItWas.length;i++){
        WhereItWas[i].style.background='transparent'
    }
}

function G(){
    for(var i=0;i<24;i++){
        if(row[i].childNodes[ccolumn].style.background=='transparent'){
            var miner=1
            for(var j=0;i-j-miner>0;j++){
                while(row[i-j-miner].childNodes[ccolumn].style.background=='transparent'&i-miner-j>0){
                    miner++
                }
                row[i-j].childNodes[ccolumn].style.background=row[i-miner-j].childNodes[ccolumn].style.background;
            }
        }
    }
}
function TNT(background='blow'){
    var da=[]
    var b=0
    for(var i=0;i<3;i++){
        if(row[currentRow+i]!=undefined){
            for(var j=-1;j<2;j++){
                if(row[currentRow+i].childNodes[ccolumn+j]!=undefined){
                    b++
                    background=`url(./Images/bc${b}.png)`
                    row[currentRow+i].childNodes[ccolumn+j].style.background=background
                    row[currentRow+i].childNodes[ccolumn+j].style.border='transparent'
                    row[currentRow+i].childNodes[ccolumn+j].style.borderRight='transparent 0.5px'
                    row[currentRow+i].childNodes[ccolumn+j].style.borderBottom='transparent 0.5px'
                    da.push(row[currentRow+i].childNodes[ccolumn+j])
                }else{
                    b++
                }
            }
        }else{
            b+=3
        }
    }
    setTimeout(()=>{for(var i=0;i<da.length;i++){da[i].style.background='transparent';da[i].style.borderRight='grey solid 0.5px';da[i].style.borderBottom='grey solid 0.5px'}},1000)
}

function checkright(){
    ccolumn++
    if(shapedown()==false){
        ccolumn--
        return false
    }
    return true
}

function checkleft(){
    ccolumn--
    if(shapedown()==false){
        ccolumn++
        return false
    }
    return true
}

function shape(key='not important'){
    if(clean==true&pause==false&reset==false){
        removeblock()
        WhereItWas=[]
        if(key=='downkey'){
            busy=true;
            currentRow++;
            if(shapedown()==false){
                currentRow--
            }else{
                score++
                scoredisplay.innerHTML=score;
            }
        }
        if(key=='upkey'){
            if(rotatee==3){
                rotatee=-1
            }
            rotatee++
            if(shapedown()==false){
                if(checkright()==false){
                    if(checkleft()==false){
                        rotatee--
                        if(rotatee==-1){
                            rotatee=3
                        }
                    }
                }
            }
        }
        if(key=='Rightkey'){
            checkright()
        }
        if(key=='leftkey'){
            checkleft()
        }
        commit=true;
        if(shapedown()==false){
            currentRow--
            removeblock()
            shapedown()
            pause=true;
            clean=false;
            if(currentshape==14||currentshape==15){
                nxcolor=false
                TNT('blow')
            }else if(currentshape==16){
                G()
            }
            currentRow=0;
            ccolumn=4;
            rotatee=0;
            currentshape=nextshape;
            color=nextcolor;
            nxcolor=xcolor;
            increment++
            if(increment==18){
                shapearray=selectshape()
                increment=0
            }
            nextshape=shapearray[increment]
            nextShape(nextshape)
            rowCheck();
            shapedown();
            setTimeout(function(){if(reset==false){pause=false}},down,(518-19*(level+1))*500/480);
        }else{
            shapedown()
        }
    commit=false
    }
}

function down(){
    if(pause==false&reset==false){
        shape()
        if(busy==false){
            currentRow++
        }
    }
    setTimeout(down,(518-19*(level+1))*1000/480)
}

document.addEventListener("keydown",function(event){
    // console.log(event.key)
    if(pause==false&reset==false){
        if(event.key=='ArrowLeft'){
            shape('leftkey')
        }
        if(event.key=='ArrowRight'){
            shape('Rightkey')
        }
        if(event.key=='ArrowDown'){
            shape('downkey')
        }
        if(event.key=='ArrowUp'){
            shape('upkey')
        }
    }
})
document.addEventListener('visibilitychange',function(){
    if(reset==false){
        if(pause){
            pause=false
        }
        Dabutton()
    }
})
document.body.onkeyup=function(e){
    if(reset==false){
        if(e.keyCode==32||e.keyCode==27){
            Dabutton()
        }
    }
}
setTimeout(down,(518-19*(level+1))*1000/480)
listusers()
// localStorage.clear()