let showerLoc=document.querySelector('body');
let pp=document.querySelector('#pp');
let pq = document.getElementById('photosays');
let ph = document.querySelector('#photointro h3')
let msg='';
ph.setAttribute('style',"color: darkviolet; size: 1.5rem;");


function galeria(e) {
    if (!e.target.closest('.item')) return;
   let  hero = document.querySelector('div[data-pos="0"]');   
    let target = e.target.parentElement;
    [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
    /*alter();*/pq.innerHTML=e.target.alt;
  msg=e.target.alt;
  
    altdetails();
}  
let galerialoc = document.getElementById('galeria');  
galerialoc.addEventListener('click',galeria,false);

function altdetails(){
  let answers ={a:'nextdoor2',
    a1:'The smart lines of looking up to the Honey Farm from the main drive in, this time with the ash tree \
			doing photographic proud job of framing.	 ',
	b:'wayout',
    b1:'before I went out this morning this is what it looked like',
	c:'shortcompare',
   c1:'It\s a lovely view.',
   d:'forward',
   d1:'Has the defence got anything to add about this picture, \'No I think it is alright\'. Forwards then like \
		the mission is fresh to the point of view.',
   e:'longlanehome',
   e1:'long way back and there is photographic evidence.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'nextdoor2':
        msg2=' : '+ answers.a1;
        break;
    case 'wayout':
        msg2=' : '+ answers['b1'];
        break;
    case 'shortcompare':
        msg2=' : '+ answers['c1'];
        break;
    case 'forward':
        msg2 =' : '+ answers['d1'];
        break;
    case 'longlanehome':
        msg2 =' : '+ answers['e1'];
        break;
    default:
        pq.textContent='balls : ';
        break;
                /*pq.textContent=answers.x;
                */
   }
   pq.innerHTML+=msg2;
   pq.setAttribute('style', "color: blue;");
   document.querySelector('#photointro h3').textContent='';
  }
  let addera= document.querySelector('.highlightb');
  addera.setAttribute('className', 'yellow');
  
