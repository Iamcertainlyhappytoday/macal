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
  let answers ={a:'brigomorna',
    a1:'The Chain Bridge Scottish side, still morning, few cars and fewer still walkers but cool charming nature.',
	b:'bywater',
    b1:'moiras house which is good.',
   c:'dogengineer',
   c1:'caught on morning walk.',
   d:'tynebridge',
   d1:'tyne with bridge fading behind.',
   e:'water',
   e1:'Water towards sheep on the island shimmering width, often reminds me of the title ring of bright said but \
	 ironically when there is a whole surface of ripples. The river must be slow, the morning accentuated this with stillness \
	 only the birds on the whole moved through. Supposedly the coolest November in 37 years on getting back to hear the news. \
	 Not a chance but they were covering London and continual overcast days as the reason. Coolness requires cool however and \
	 so I still cannot figure it as they have yet to have their first frost doon saath.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'brigomorna':
        msg2=' : '+ answers.a1;
        break;
    case 'bywater':
        msg2=' : '+ answers['b1'];
        break;
    case 'dogengineer':
        msg2=' : '+ answers['c1'];
        break;
    case 'tynebridge':
        msg2 =' : '+ answers['d1'];
        break;
    case 'water':
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

  
