// const hd=document.getElementById('header-title');
// document.getElementById('main-header').style.borderBottom="solid #000"



// const item=document.querySelectorAll('.list-group-item');
// item[0].style.background='red'
// for(let i=0;i<item.length;i++){
//     if(i%2==0){ 
//         item[i].style.color="Red"
//     }
//     else{
//         item[i].style.color="Yellow"
//     }
    
// }
// const eh=document.querySelector('.list-group-item:nth-child(2)');
// eh.style.background='yellow'

// const i=document.querySelector('#items');
// i.parentNode.style.background="yellow"

// const newdiv=document.createElement('div');
// newdiv.className="hello";
// newdiv.title="title";
// var newdivtex=document.createTextNode("Hello MotherfuckerS");
// newdiv.appendChild(newdivtex);
// const container =document.querySelector('header .container');
// const h1=document.querySelector('header h1');
// container.insertBefore(newdiv,h1)


// //some cool stud like changing color
// const hover =document.querySelector("#main");
// hover.addEventListener('mousemove',onin);
// function onin(e){
//     hover.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",125)";
// }


var Items=document.querySelector("#items");
var form=document.querySelector("#addForm");
var filter=document.querySelector("#filter");
filter.addEventListener('keyup',filterfun);

Items.addEventListener('click',removeItem);
var i=1;
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(Items.lastElementChild==null)
    {
        i=1;

    }
    var fordelete=document.createElement('Button');
    fordelete.className="btn float-right btn-danger btn-sm delete";
    fordelete.setAttribute("id","deletesingle");
    var newitem=document.querySelector('#item').value;
    var li=document.createElement('li');
    li.className="list-group-item";
    fordelete.appendChild(document.createTextNode('X'));
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(fordelete);
    Items.appendChild(li);
}

var fordel=document.querySelector("#deleteall");
fordel.addEventListener('click',onclik);
function onclik(e){
    e.preventDefault();
    
    
        Items.innerHTML='';
    
}

var hover=document.querySelector("#main");
hover.addEventListener('mouseover',onhover);
function onhover(e){
    e.preventDefault();
    hover.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",400)";
}

function removeItem(e){
    e.preventDefault(); 
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li=e.target.parentElement;
            Items.removeChild(li);
        }

    }
}

function filterfun(e){
    var text=e.target.value.toLowerCase();
    var items=Items.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var newitem=item.firstChild.textContent;
        if(newitem.toLowerCase().indexOf(text)==-1){
            item.style.display="none";
        }
        else{
            item.style.display="block";
        }

    })
    
}

