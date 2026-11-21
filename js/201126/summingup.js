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
  let answers ={a:'goingon',
    a1:'Laugh or try not to these photos are not all portraits but that is a good way to go to study the artist as well \
		as the subject who sure can be drawn for emotive reasons of plain descritptive or attempting face value.',
	b:'hideinside',
    b1:'You can run, you can hide, you can go nowhere.',
   c:'roomin',
   c1:'The photographer is roomin for a while now, not enough roaming.',
   d:'scene',
   d1:'Not forgetting what is owed to the grandness of the Tweed environment, lent and borrowed to increase the statement \
	by industry. Not long ago the border became navigated by people of both sides of these 2 countries of the British Isles \
	and this bridge did a lot for it.',
   e:'treegardening',
   e1:'Looks hectic I think but it is a garden space and the background a house and grounds. Trees have shapes that can make all \
  the character so natural by permanent strength. Then they outlive us too if allowed to.'}
   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'goingon':
        msg2=' : '+ answers.a1;
        break;
    case 'hideinside':
        msg2=' : '+ answers['b1'];
        break;
    case 'roomin':
        msg2=' : '+ answers['c1'];
        break;
    case 'scene':
        msg2 =' : '+ answers['d1'];
        break;
    case 'treegardening':
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
  
