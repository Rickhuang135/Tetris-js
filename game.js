let square120=document.getElementById('gameScreen')

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

let row=document.getElementsByClassName("row")
let currentRow=1
let ccolumn=5
let pause=true
let WhereItWas=[]
let clean=true

function moveblock(x,y){
    if (clean == false) {
        while(WhereItWas.length!=0){
            WhereItWas.shift()
        }
        clean=true;
    }

    console.log(currentRow+x, ccolumn+y);
    row[currentRow+x].childNodes[ccolumn+y].classList.add('filled')
    WhereItWas.push(row[currentRow+x].childNodes[ccolumn+y])
}
function squaredown1(){
    console.log("squaredown1");
    moveblock(-1,-1)
    moveblock(-1,0)
    moveblock(0,-1)
    moveblock(0,0)
}
function removeblock(){
    for(var i=0;i<WhereItWas.length;i++){
        WhereItWas[i].classList.remove('filled');
    }
}
function square(key='not important'){
    console.log(currentRow)
    if(currentRow<19&clean==true){
        removeblock()
        if(key=='downkey'&currentRow>2){
            currentRow++;
        }
        if(key=='leftkey'&ccolumn!=1){
            if(row[currentRow].childNodes[ccolumn-2].classList.contains('filled')==false&row[currentRow-1].childNodes[ccolumn-2].classList.contains('filled')==false){
            ccolumn=ccolumn-1;
            }
        }
        if(key=='Rightkey'&ccolumn!=9){
            if(row[currentRow].childNodes[ccolumn+1].classList.contains('filled')==false&row[currentRow-1].childNodes[ccolumn+1].classList.contains('filled')==false){
            ccolumn++;
            }
        }
    }

    squaredown1()
    if(currentRow>=19||row[currentRow+1].childNodes[ccolumn-1].classList.contains('filled')||row[currentRow+1].childNodes[ccolumn].classList.contains('filled')){
        removeblock()
        squaredown1()
        clean=false
        currentRow=1;
        ccolumn=5
    }
}

function Dabutton(){
    setInterval(down,1000)
    pause=false;
}

function down(){
    if(pause==false){
        if(currentRow<20){
            square()
            currentRow++
        }   
    }
}

document.addEventListener("keydown",function(event){
    console.log(event.key)
    if(pause==false){
        if(event.key=='ArrowLeft'){
            square('leftkey')
        }
        if(event.key=='ArrowRight'){
            square('Rightkey')
        }
        if(event.key=='ArrowDown'){
            square('downkey')
            
        }
    }
})