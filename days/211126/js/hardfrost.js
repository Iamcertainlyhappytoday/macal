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
  let answers ={a:'sureis',
    a1:'Certainly a frosty look for the grass here, too good a look for the sheep to eat.',
	b:'fmberries',
    b1:'Cold dry of a hard freeze, more than a frost really, this was to hang around the whole day in \
		quite a few places.',
	c:'landscapefirstfreeze',
   c1:'Full countryside rolling view, inside info the River Tweed is in the valley, spectacular bright dry colours \
	with frosty/freeze shining. A long view unbroken but blocks intermittently hatching or blended weather featured landscape. ',
   d:'bighousefield',
   d1:'White all day, quite cold then and surprising as said above. How is it that it arrived before Autumn had delivered the \
	second set of rain and wind instead the second cold spell and deep. ',
   e:'steam',
   e1:'So cold it\'s hot or how does that work. The moisture risen in the day did not get far, it is condenscing even in the air \
	immediately above.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'sureis':
        msg2=' : '+ answers.a1;
        break;
    case 'fmberries':
        msg2=' : '+ answers['b1'];
        break;
    case 'landscapefirstfreeze':
        msg2=' : '+ answers['c1'];
        break;
    case 'bighousefield':
        msg2 =' : '+ answers['d1'];
        break;
    case 'steam':
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
  
