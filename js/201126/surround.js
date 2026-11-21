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
  let answers ={a:'drippingtree',
    a1:'Fantastic sycamore, correction coming up, well they don\'t trail do they, here in contrast \
		to the light and rainbow in alignment to the falling branches.',
	b:'rise',
    b1:'The land changes here accentuated by the unique ploughing style leaving it seems the field to \
		have a broad edge. The climb is like a small hill or rising from heavily worked flateau beneath.',
   c:'treeside',
   c1:'Such good colours in the trees today catching the few remaining leaves, the coninfers in their clothes.',
   d:'tweedview',
   d1:'A broad brush stroke of features and nature coloured with tones of mirrored sky.',
   e1:'The fishing cottages, perhaps for allcomers I am not sure, in higher contrast.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'drippingtree':
        msg2=' : '+ answers.a1;
        break;
    case 'rise':
        msg2=' : '+ answers['b1'];
        break;
    case 'treeside':
        msg2=' : '+ answers['c1'];
        break;
    case 'tweedview':
        msg2 =' : '+ answers['d1'];
        break;
    case 'view':
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
  
