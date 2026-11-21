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
  let answers ={a:'bowie',
    a1:'Tranquility in the paddock, long grass, warm relatively for a walker but hard working munchies.',
	b:'poniesbow',
    b1:'The charm of the day if you are wondering was hard to challenge for the usual vistas and then the rainbow popped up. \
		How much rain before it would go away I thought a few times although it just stayed.',
	c:'ponyone',
   c1:'Where the contrast is deep the art of a photograph looks like an edit, it is of course a fluke that you can go with or \
		fuss about focus and miss a good picture. The wall is almost not real having lost definition.',
   d:'ponyonetwo',
   d1:'The pony look.',
   e:'sunhorse',
   e1:'It is quite light, flat light when the moisture plus the light adds distance to the view. The rainbow has a page of it\'s own.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'bowie':
        msg2=' : '+ answers.a1;
        break;
    case 'poniesbow':
        msg2=' : '+ answers['b1'];
        break;
    case 'ponyone':
        msg2=' : '+ answers['c1'];
        break;
    case 'ponyonetwo':
        msg2 =' : '+ answers['d1'];
        break;
    case 'sunhorse':
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
  
