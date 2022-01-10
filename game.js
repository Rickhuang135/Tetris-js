let square120=document.getElementById('gameScreen');
let audio=document.getElementById('Theme');
for(var i=0;i<20;i++){
    var rows=document.createElement('div')
    rows.className=`row ${i+1}`
    square120.appendChild(rows);
    for(var j=0;j<10;j++){
        var rows2=document.createElement('div')
        rows.appendChild(rows2);
        rows2.className=`column${j+1} empty`
    }
}
let reset=false;
let score=0;
let scoredisplay=document.getElementById('changer')
let buttondiscript=document.getElementById('nextword')
let level=0;
let line=0;
let color=undefined;
let leveldisplay=document.getElementById('levelin')
let button=document.getElementById('buttonDisplay');
let buttonbg=document.getElementById('button')
button.style.display='none';
for(var i=0;i<4;i++){
    var rows=document.createElement('div')
    rows.className=`Nrow${i+1}`
    button.appendChild(rows)
    for(var j=0;j<4;j++){
        var rows2=document.createElement('div')
        rows.appendChild(rows2);
        rows2.className=`column${j+1} empty`
    }
}
let nextshape=Math.floor(Math.random()*7);
let currentshape=Math.floor(Math.random()*7);
let busy=false;
let row=document.getElementsByClassName("row");
let currentRow=1;
let ccolumn=5;
let pause=true
let WhereItWas=[]
let clean=true
let rotatee=0
let commit=false
function nextShape(shape){
    if(button.childNodes[1].childNodes!=undefined){
        for(let i=0;i<button.childNodes.length;i++){
            for(let j=0;j<button.childNodes[i].childNodes.length;j++){
                button.childNodes[i].childNodes[j].classList.remove('filled')
            }
        }
        let shapecoords=[]
        switch(shape){
            case 0:shapecoords=[0,0,0,1,0,2,0,3];break
            case 1:shapecoords=[0,0,0,1,1,0,1,1];break
            case 2:shapecoords=[0,1,1,0,1,1,1,2];break
            case 3:shapecoords=[0,0,1,0,1,1,1,2];break
            case 4:shapecoords=[0,2,1,0,1,1,1,2];break
            case 5:shapecoords=[0,1,0,2,1,0,1,1];break
            case 6:shapecoords=[0,0,0,1,1,1,1,2];break
        }
        for(let i=1;i<shapecoords.length;i=i+2){
            button.childNodes[shapecoords[i]].childNodes[shapecoords[i-1]].classList.add('filled')
        }
    }
}

function addlevel(){
    if(level<23){
        level+=3
        leveldisplay.innerHTML=level
    }
}
function Dabutton(){
    if(pause==true){
        if(reset==true){
            resetboard()
            reset=false
        }
        buttonbg.style.background='none'
        button.style.display='block';
        pause=false;
        nextShape(nextshape)
        buttondiscript.innerHTML='Next:';
        audio.play();
    }else{
        buttonbg.style.background='url(./Images/pause-button.png)'
        buttonbg.style.backgroundSize='170%'
        buttonbg.style.backgroundPosition='center'
        button.style.display='none'
        buttondiscript.innerHTML='Paused'
        pause=true;
        audio.pause();
    }
}

function resetboard(){
    for(var i=0;i<row.length;i++){
        for(var j=0;j<row[i].childNodes.length;j++){
            row[i].childNodes[j].className='empty'
        }
    }
    score=0
    level=0
    line=0
    scoredisplay.innerHTML=score
    leveldisplay.innerHTML=level
}
function rowCheck(){
    let checkcount=0;
    for(var i=0;i<row[0].childNodes.length;i++){
        if(row[0].childNodes[i].classList.contains('filled')){
            buttonbg.style.background='url(./Images/playbutton.png)'
            buttonbg.style.backgroundSize='130%'
            buttonbg.style.backgroundPosition='center'
            button.style.display='none'
            buttondiscript.innerHTML='Play again'
            pause=true;
            setTimeout(function(){pause=true},(518-19*(level+1))*1000/480+1)
            audio.pause();
        }
    }
    for(var i=1;i<row.length;i++){
        var rooow=row[i].childNodes
        var execute=true
        for(var j=0;j<rooow.length;j++){
            if(rooow[j].classList.contains('filled')==false){
                execute=false
                break;
            }
        }
        if(execute){
            checkcount++
            line++
            for(var j=0;j<rooow.length;j++){
                for(var minus=0;i-minus>1;minus++){
                    row[i-minus].childNodes[j].className=row[i-1-minus].childNodes[j].className;
                }
            }
        }
    }
    switch(checkcount){
        case 1:score=score+100*(level+1);break;
        case 2:score=score+300*(level+1);break;
        case 3:score=score+500*(level+1);break;
        case 4:score=score+800*(level+1);break;
    }
    if(line>=10){
        line-=10;
        level++;
        leveldisplay.innerHTML=level;
    }
    scoredisplay.innerHTML=score
}

function moveblock(x,y){
    if (clean == false) {
        WhereItWas=[]
        clean=true
    }
    if(row[currentRow+x]!=undefined){
        if(row[currentRow+x].childNodes[ccolumn+y]!=undefined){
            if(row[currentRow+x].childNodes[ccolumn+y].classList.contains('filled')==false||WhereItWas.findIndex(un=>un==row[currentRow+x].childNodes[ccolumn+y])!=-1){
                if(commit==true){
                    row[currentRow+x].childNodes[ccolumn+y].classList.add('filled');
                    WhereItWas.push(row[currentRow+x].childNodes[ccolumn+y])
                    // row[currentRow+x].childNodes[ccolumn+y].style.backgroundColor=color;
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
    var one=undefined
    var two=undefined
    var three=undefined
    var four=undefined
    var five=undefined
    var six=undefined
    var seven=undefined
    var eight=undefined
    if(currentshape==0){
        // color="#00ffff";
        if(rotatee==1){
            one=-1;
            five=1;
            seven=2;
            two=three=four=six=eight=0;
        }else if(rotatee==3){
            three=0;
            five=1;
            seven=2;
            one=two=four=six=eight=-1;
        }else if(rotatee==0){
            four=1;
            six=-1;
            eight=-2;
            one=two=three=five=seven=0;
        }else if(rotatee==2){
            two=0;
            six=-1;
            eight=-2;
            one=three=four=five=seven=1;
        }
    }else if(currentshape==1){
        // color="#FFD500";
        one=two=three=six=-1;
        four=five=seven=eight=0;
    }else if(currentshape==2){
        // color="#800080";
        one=four=-1;
        two=three=five=six=seven=0;
        eight=1;
        if(rotatee==1){
            three=1;
            four=0;
        }else if(rotatee==2){
            one=1;
        }else if(rotatee==3){
            seven=1;
            eight=0;
        }
    }else if(currentshape==3){
        // color="#FF971C";
        five=six=0;
        if(rotatee==0){
            one=two=three=-1;
            four=eight=0;
            seven=1;
        }else if(rotatee==1){
            one=four=-1;
            two=eight=1;
            three=seven=0;
        }else if(rotatee==2){
            one=-1;
            two=eight=0;
            three=four=seven=1;
        }else{
            one=seven=0;
            two=four=-1;
            three=eight=1;
        }
    }else if(currentshape==4){
        // color="#0341AE"
        five=six=0;
        if(rotatee==0){
            one=three=-1;
            four=eight=0;
            seven=two=1;
        }else if(rotatee==1){
            four=-1;
            eight=one=two=1;
            three=seven=0;
        }else if(rotatee==2){
            one=four=-1;
            two=eight=0;
            seven=three=1;
        }else{
            one=seven=0;
            two=four=three=-1;
            eight=1;
        }
    }else if(currentshape==5){
        // color="#FF3213";
        three=four=0;
        if(rotatee==0){
            one=two=five=-1;
            six=seven=0;
            eight=1;
        }else if(rotatee==1){
            one=-1;
            two=six=seven=1;
            five=eight=0;
        }else if(rotatee==2){
            one=six=0;
            two=-1;
            five=seven=eight=1;
        }else{
            one=six=eight=-1;
            two=five=0;
            seven=1;
        }
    }else if(currentshape==6){
        // color="72CB3B";
        three=four=0;
        if(rotatee==0){
            one=five=eight=-1;
            two=1;
            six=seven=0;
        }else if(rotatee==1){
            one=-1;
            two=five=0;
            six=seven=eight=1;
        }else if(rotatee==2){
            one=eight=five=1;
            two=-1;
            six=seven=0;
        }else{
            one=two=six=-1;
            five=eight=0;
            seven=1;
        }
    }
    let moveAray=[];
    moveAray.push(moveblock(one,two))
    moveAray.push(moveblock(three,four))
    moveAray.push(moveblock(five,six))
    moveAray.push(moveblock(seven,eight))
    busy=false
    if(moveAray.findIndex(x=>x==false)!=-1){
        return false
    }
    return true
}

function removeblock(){
    console.log(WhereItWas)
    for(var i=0;i<WhereItWas.length;i++){
        WhereItWas[i].classList.remove('filled');
        // WhereItWas[i].style.backgroundColor='transparent'
    }
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
    if(clean==true&pause==false){
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
    }
    commit=true;
    if(shapedown()==false){
        currentRow--
        removeblock()
        shapedown()
        pause=true;
        clean=false;
        currentRow=1;
        ccolumn=5;
        rotatee=0;
        currentshape=nextshape
        nextshape=Math.floor(Math.random()*7);
        nextShape(nextshape)
        rowCheck();
        shapedown();
        setTimeout(function(){pause=false},down,(518-19*(level+1))*500/480);
    }else{
        shapedown()
    }
    commit=false
}

function down(){
    if(pause==false&busy==false){
        shape()
        currentRow++
    }
    setTimeout(down,(518-19*(level+1))*1000/480)
}

document.addEventListener("keydown",function(event){
    console.log(event.key)
    if(pause==false){
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
setTimeout(down,(518-19*(level+1))*1000/480)