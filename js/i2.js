document.getElementById('b-2').addEventListener('click',function()
{
   
    let inp2=parseFloat(document.getElementById('i-2').value);
    if (inp2>=0) {
        let sum2=parseFloat(document.getElementById('s-2').innerText);
        sum2+=inp2;
        document.getElementById('s-2').innerText=sum2;
        reduce2();

        let now = new Date();
        let options = { timeZone: 'Asia/Dhaka', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        let dateTime = now.toLocaleString('en-BD', options) + " GMT+0600 (Bangladesh Standard Time)";

        let div2 = document.getElementById('d-2');
        let di2 = document.createElement('div');
        di2.innerHTML += `
          <div class="border border-[#1111111A] mb-7 p-10 rounded-md">
          <p class="mb-3 text-xl font-bold">${inp2} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
          <p>Date: ${dateTime}</p>
          </div>
        `;
        div2.appendChild(di2);
    }

    else
    {
        return alert('invalid input');
    }
})