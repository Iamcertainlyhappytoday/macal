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
  let answers ={a:'farmtoview',
    a1:'Excellent flow of major land to the horizon, beyond which falls past Berwick to the sea. A very big field this one, \
		always stands out for whatever is being grown.',
	b:'highlight',
    b1:'Like impressionists but at 1/125 of a second we get many great light shots and then contemplate them for long afterwards. \
	 The focus of the light is the nature of making a picture but this is a healthy reminder that it works for real.',
   c:'nextdoor',
   c1:'Not so dour as the organisation is sharp. Not this way but down the hill is best.',
   d:'rainbowline',
   d1:'The rainbow was there long enough to start walking up.',
   e:'reminder',
   e1:'One for the journey, recently reopened but not forgotten that it is old and historical as the first iron suspension bridge of \
	 this length in Europe. Always possible to dispute these things of course but I think it has not been nationally challenged though \
	 as I child I had a school trip to IronBridge the town itself where it started apparently. How a far flung place got a suspension \
	 bridge is recounted in publicity for the repair which from today\'s walk I can tell you needs to consider that it ices up for \
	 pedestrians before anything else shows any signs of this.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'farmtoview':
        msg2=' : '+ answers.a1;
        break;
    case 'highlight':
        msg2=' : '+ answers['b1'];
        break;
    case 'nextdoor':
        msg2=' : '+ answers['c1'];
        break;
    case 'rainbowline':
        msg2 =' : '+ answers['d1'];
        break;
    case 'reminder':
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
  
