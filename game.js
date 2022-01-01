let square120=document.getElementById('gameScreen');
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

function Dabutton(){
    if(pause==true){
        buttonbg.style.background='none'
        button.style.display='block';
        pause=false;
    }
    else{
        buttonbg.style.background='url(./Images/pause-button.png)'
        buttonbg.style.backgroundSize='170%'
        buttonbg.style.backgroundPosition='center'
        button.style.display='none'
        pause=true;
    }
}

function rowCheck(){
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
            for(var j=0;j<rooow.length;j++){
                for(var minus=0;i-minus>1;minus++){
                    row[i-minus].childNodes[j].className=row[i-1-minus].childNodes[j].className;

                }
            }
        }
    }
}

function moveblock(x,y){
    if (clean == false) {
        WhereItWas=[]
        rowCheck()
        clean=true
        console.log("cleaned")
    }
    if(row[currentRow+x]!=undefined){
        if(row[currentRow+x].childNodes[ccolumn+y]!=undefined){
            if(row[currentRow+x].childNodes[ccolumn+y].classList.contains('filled')==false||WhereItWas.findIndex(un=>un==row[currentRow+x].childNodes[ccolumn+y])!=-1){
                if(commit==true){
                    row[currentRow+x].childNodes[ccolumn+y].classList.add('filled')
                    WhereItWas.push(row[currentRow+x].childNodes[ccolumn+y])
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
    console.log(currentshape)
    if(currentshape==0){
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
        one=two=three=six=-1;
        four=five=seven=eight=0;
    }else if(currentshape==2){
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
    for(var i=0;i<WhereItWas.length;i++){
        WhereItWas[i].classList.remove('filled');
    }
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
            }
        }
        if(key=='upkey'){
            if(rotatee==3){
                rotatee=-1
            }
            rotatee++
            if(shapedown()==false){
                rotatee--
            }
        }
        if(key=='Rightkey'){
            ccolumn++
            if(shapedown()==false){
                ccolumn--
            }
        }
        if(key=='leftkey'){
            ccolumn--
            if(shapedown()==false){
                ccolumn++
            }
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
        shapedown();
        setTimeout(function(){pause=false},500);
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
setInterval(down,1000)