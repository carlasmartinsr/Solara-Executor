addCoffee=document.querySelector('#add-coffee');
subtractCoffee=document.querySelector('#subtract-coffee');
addTea=document.querySelector('#add-tea');
subtractTea=document.querySelector('#subtract-tea');
inputCoffee=document.querySelector('#input-coffee');
inputTea=document.querySelector('#input-tea');
warningSection=document.querySelector('#warning-section')
const main= document.querySelector('main')
const coffee={num:0}
const tea={num:0}

function evaluateCaffein(){
  if ((coffee.num>=3)||(coffee.num>=2 && tea.num>=1) || (coffee.num===1 && tea.num>=3)||(tea.num>=4))
     warningSection.innerHTML=`<img id="msg" src="img/gif.gif" class="warning-gif"></img>`
  else  {
    warningSection.innerHTML=''
    }
}

function add(el,input){
  el.num++
  input.value=el.num
  evaluateCaffein()
  
}

function subtract(el,input) {
    el.num--
    if(el.num<0) el.num=0
    input.value=el.num
    evaluateCaffein()
   
}


main.addEventListener('click',(e)=>{
  if (e.target.matches('#add-coffee'))add(coffee,inputCoffee)
  if (e.target.matches('#subtract-coffee'))subtract(coffee,inputCoffee)
  if (e.target.matches('#add-tea')) add(tea,inputTea)
  if (e.target.matches('#subtract-tea')) subtract(tea,inputTea)
}) 



