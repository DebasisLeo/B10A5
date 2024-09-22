function reduce3()
{
    let tot=parseFloat(document.getElementById('total').innerText);
   let inp3=parseFloat(document.getElementById('i-3').value);
   tot-=inp3;
  document.getElementById('total').innerText=tot
}