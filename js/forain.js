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
  let answers ={a:'forestrail',
    a1:'forest trail went through the forest',
	b:'ror-rain',
    b1:'Sometimes the best views are in the rain.',
   c:'promontoryhouse',
   c1:'poshest horses in neighbourhood',
   d:'rainbridge',
   d1:'picture of bridge',
   e:'rainfieldview',
   e1:'field of view, literally, sense of movement, actually. The big field, well the field looks big and in action here \
		with lines and colours of the countryside looking good in the gloom.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'forestrail':
        msg2=' : '+ answers.a1;
        break;
    case 'for-rain':
        msg2=' : '+ answers['b1'];
        break;
    case 'promontoryhouse':
        msg2=' : '+ answers['c1'];
        break;
    case 'rainbridge':
        msg2 =' : '+ answers['d1'];
        break;
    case 'rainfieldview':
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
  
