document.getElementById('b-1').addEventListener('click', function () {
    let tot=parseFloat(document.getElementById('total').innerText)
    let inp1 = parseFloat(document.getElementById('i-1').value);
    if (inp1 >= 0 && inp1<tot) {
        let sum1 = parseFloat(document.getElementById('s-1').innerText);
        sum1 += inp1;
        document.getElementById('s-1').innerText = sum1;

        reduce1();
        document.getElementById('i-1').value = "";
        let now = new Date();
        let options = { timeZone: 'Asia/Dhaka', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        let dateTime = now.toLocaleString('en-BD', options) + " GMT+0600 (Bangladesh Standard Time)";

        let div1 = document.getElementById('d-2');
        let di1 = document.createElement('div');
        di1.innerHTML += `
          <div class="border border-[#1111111A] mb-7 p-10 rounded-md">
          <p class="mb-3 text-xl font-bold">${inp1} Taka is Donated for Flood Relief at Noakhali, Bangladesh</p>
          <p>Date: ${dateTime}</p>
          </div>
        `;
        div1.appendChild(di1);
        my_modal_5.showModal()
    } else {
        document.getElementById('i-1').value = "";
        document.getElementById('b-1').removeAttribute('onclick',false);
        return alert('Invalid input');
    }
});
