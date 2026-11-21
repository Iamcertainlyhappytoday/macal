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
  let answers ={a:'forest',
    a1:'forest walk',
	b:'gloomypost',
    b1:'Phew, what is this. Waymarking information post in the making. It has a much more succint name that \
		has disappeared from the tip of the tongue again. The information on the post will be much better we \
		hope. The ambiance again in the gloom is soft and alluring and the light from the river, the reason for \
		the path and the information is appreciated also by Tyne, well was a minute past.',
   c:'risingwater',
   c1:'Not to scare you, called this one \'rising water\' but the river currents were the focus, eddies. \
	Then the chance to get them focused was lost in the overall view and mix of light. The excitement is in how \
	much wetter things are than the whole of the driest year in memory.',
   d:'totheriver',
   d1:'Going for or appreciating was the camera, the sensation of falling down to the river by line of the \
		fence, well made and standing up well. Having said the the years show recently on much peripheries and \
		maintenance is a job no longer mine.',
   e:'walkinrain',
   e1:'The more photogenic precise capture of this rolling out and down perspective of the exit from the riverside. \
		Still grand and also the dawg "Tyne" is not blurred. Does he make it more, he looks keen to do that.'}

   console.log(answers)
   let x=msg;
  let msg2;
   switch(x){
    case 'forest':
        msg2=' : '+ answers.a1;
        break;
    case 'gloomypost':
        msg2=' : '+ answers['b1'];
        break;
    case 'risingwater':
        msg2=' : '+ answers['c1'];
        break;
    case 'totheriver':
        msg2 =' : '+ answers['d1'];
        break;
    case 'walkinrain':
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
  
