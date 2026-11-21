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
  let answers ={a:'autumndog',
    a1:'Always something to see here, especially when the light is good. Oh, the doggy, yes rarely not something \
		to see and a bit carried away with the morning too I think. About 8.30am and the ducks are migrating a bit for \
		the daily chores.',
	b:'berryview',
    b1:'Catching the berries on the trees is an autumn bonus for a good photo.',
   c:'cloursdag',
   c1:'Short hand for colours and dog, memory jog, jog around, walk up and down. An amazing sky, artist colours and \
	unlimited opportunities up there for sensations which are often overlooked. Our light comes from there and is sometimes \
	like this an amazing blue contrast.',
   d:'lookie',
   d1:'An excellent time to set up a shot since the protagonist is interested.',
   e:'track',
   e1:'Backtacking maybe to the first of this set. Line of direction.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'autumndog':
        msg2=' : '+ answers.a1;
        break;
    case 'berryview':
        msg2=' : '+ answers['b1'];
        break;
    case 'cloursdag':
        msg2=' : '+ answers['c1'];
        break;
    case 'lookie':
        msg2 =' : '+ answers['d1'];
        break;
    case 'track':
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
  
