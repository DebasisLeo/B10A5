function reduce2()
{
    let tot=parseFloat(document.getElementById('total').innerText);
   let inp2=parseFloat(document.getElementById('i-2').value);
   tot-=inp2;
  document.getElementById('total').innerText=tot
}