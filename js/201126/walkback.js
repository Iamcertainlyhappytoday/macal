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
  let answers ={a:'homelane',
    a1:'The road taken on the way out, leaves down is already clearer but virtue that the cold has settled through and broken down \
		these flighty leaves. The way back by these trees is unique for off road style.',
	b:'homewalk',
    b1:'As taken by the pooch, sure steps in home lane.',
   c:'lightback',
   c1:'Enclosed almost by just a few but enough trees to create a light tunnel.',
   d:'longhomelane',
   d1:'There is a shortening of view but here I am sure a lengthening of view. The lane is only 800m long and looks like half of it is here. \
	Only joking, it totals maybe 200m and runs along some high ground above the river Tweed.',
   e:'sticks',
   e1:'This is a lot of adventurous trees clinging to the lowering high ground, frequently wet and in wilderness state.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'homelane':
        msg2=' : '+ answers.a1;
        break;
    case 'homewalk':
        msg2=' : '+ answers['b1'];
        break;
    case 'lightback':
        msg2=' : '+ answers['c1'];
        break;
    case 'longhomelane':
        msg2 =' : '+ answers['d1'];
        break;
    case 'sticks':
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
  
