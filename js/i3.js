document.getElementById('b-3').addEventListener('click',function()
{
    
    let inp3=parseFloat(document.getElementById('i-3').value);
    if (inp3>=0) {
        let sum3=parseFloat(document.getElementById('s-3').innerText);
        sum3+=inp3;
        document.getElementById('s-3').innerText=sum3;
        
        reduce3();
        document.getElementById('i-3').value="";
        let now = new Date();
        let options = { timeZone: 'Asia/Dhaka', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        let dateTime = now.toLocaleString('en-BD', options) + " GMT+0600 (Bangladesh Standard Time)";

        let div3 = document.getElementById('d-2');
        let di3 = document.createElement('div');
        di3.innerHTML += `
          <div class="border border-[#1111111A] p-10 mb-7 rounded-md">
          <p class="mb-3 text-xl font-bold">${inp3} Taka is Aided for Injured in the Quota Movement </p>
          <p>Date: ${dateTime}</p>
          </div>
        `;
        div3.appendChild(di3);
        my_modal_4.showModal()
    }
    else
    {
        document.getElementById('i-3').value = "";
        return alert('invalid input');
    }
})