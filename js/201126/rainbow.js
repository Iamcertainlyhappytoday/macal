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
  let answers ={a:'landbow',
    a1:'The path leads to the rainbow, aesthetically of course. These hardy creatures will not take to that kind of humour \
		except respectfully decline.',
	b:'pasturalrainbow',
    b1:'Peaceful rural animal husbandry in the time of a rainbow.',
	c:'rainbowhorsefield',
   c1:'A rainbow with the burnt sienna, ochre palette abounds on the remainder of the picture.',
   d:'rainbowside',
   d1:'The bright perspective end with the rainbow added but maybe quite enough anyway for interest and so more, quite stunning.',
   e:'wholebow',
   e1:'Treated to the whole view of the left and right of the rainbow, wondering who else has seen or would like a picture now.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'landbow':
        msg2=' : '+ answers.a1;
        break;
    case 'pasturalrainbow':
        msg2=' : '+ answers['b1'];
        break;
    case 'rainbowhorsefield':
        msg2=' : '+ answers['c1'];
        break;
    case 'rainbowside':
        msg2 =' : '+ answers['d1'];
        break;
    case 'wholebow':
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
  
