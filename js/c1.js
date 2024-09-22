function reduce1()
{
    let tot=parseFloat(document.getElementById('total').innerText);
   let inp1=parseFloat(document.getElementById('i-1').value);
   tot-=inp1;
  document.getElementById('total').innerText=tot
}