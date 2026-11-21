let showerLoc=document.querySelector('body');
let pp=document.querySelector('#pp');
let pq = document.getElementById('photosays');
let ph = document.querySelector('#photointro h3')
let msg='';
ph.setAttribute('style',"color: darkviolet; size: 1.5rem;");



let galerialoc = document.getElementById('galeria');  
galerialoc.addEventListener('click',galeria,false);

function altdetails(){
  let answers ={a:'dogleaves',
    a1:'The leaves need a dry spell now. Will they get it or are they compost in place.  ',
   b:'myhouse',
    b1:'It seems a big house but is just a roof really. Still distance and size are deceptive at \
	a distance.',
   c:'nobath',
   c1:'Yup, not my kind of thing. Nice footpath however, mushroom picking today.',
   d:'ploughview',
   d1:'Less attractive for walking on. Quite an expensive dog deterrent but better than shouting \
    get off my land to the poor pooch.',
   e:'widefield',
   e1:'The size when all brown equally over the hedge is impressive or not according to if you \
	like mud or other vegetation. Wet now for the duration and new to the photographer who had \
		hoped to walk across the foreground field which for the first year he had seen it like so \
		was a meadow instead of crops.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'dogleaves':
        msg2=' : '+ answers.a1;
        break;
    case 'myhouse':
        msg2=' : '+ answers['b1'];
        break;
    case 'nobath':
        msg2=' : '+ answers['c1'];
        break;
    case 'ploughview':
        msg2 =' : '+ answers['d1'];
        break;
    case 'widefield':
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

  
