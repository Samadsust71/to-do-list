document.getElementById('add-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('input').value;
   const tbody = document.getElementById('tbody');
    let count = tbody.children.length + 1;
   const tr =  document.createElement('tr');
   const td1 = document.createElement('td');
   const td2 = document.createElement('td');
   const td3 = document.createElement('td');
   td1.innerText = count;
   td2.innerText = inputValue;
   td3.innerHTML =  `
   <button  class="delete-btn btn btn-error text-white">delete</button>
                    `
                               
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        document.getElementById('input').value = '' ;

   const deleteBtn =  document.querySelectorAll('.delete-btn');
   
   for (const btn of deleteBtn) {
       btn.addEventListener('click',function(e){
       e.stopImmediatePropagation();
       tr.innerHTML =''
       })
   }
      
   })
  
   document.getElementById('clear-all-btn').addEventListener('click',function(){
    const tbody = document.getElementById('tbody');
    tbody.innerHTML =''
})

