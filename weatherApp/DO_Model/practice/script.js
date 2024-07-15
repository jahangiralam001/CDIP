const add_btn = document.getElementById("btn");
const item_input = document.getElementById("items_input");
const un_list = document.getElementById("un_list");
const dlt_items = document.querySelectorAll(".dlt_btn");

add_btn.addEventListener('click', ()=>{

    const list = document.createElement("li");
    const dlt_btn = document.createElement("button");
    dlt_btn.className = "dlt_btn";
    dlt_btn.textContent = "Delete";
    list.textContent = item_input.value;
    item_input.value = " ";
    dlt_btn.addEventListener('click',(e)=>{
            const items = e.target.parentElement;
            items.remove();
        });
    list.appendChild(dlt_btn);
    un_list.appendChild(list);
    item_input.focus();

});

dlt_items.forEach (deletitems =>{
    deletitems.addEventListener('click',(event)=>{
        const items = event.target.parentElement;
        items.remove();
    })
})

