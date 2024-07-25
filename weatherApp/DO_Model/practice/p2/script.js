const output_answer = document.querySelector("#answer");
const total_answer = document.getElementById("total_ans");
const input_question = document.querySelector("input");
const left_ans = document.getElementById("left_ans");
const submit_btn = document.querySelector("button");
reset_btn = document.getElementById("reset");
reset_btn.disabled = true;

// let count = 3;

// console.log(typeof count);
// let ans = 1;
// function Counter(countt){
//     console.log(typeof countt);
//     var left = countt--;
   
//     // count--;
//      return left;
    
// }

submit_btn.addEventListener('click', ()=>{
    const input = input_question.value;
    let ans = parseInt(total_answer.innerText);
    let an = ans+1;
    console.log(an);
    total_answer.innerText = an;

    output_answer.innerText = input;
    
    let count = parseInt(left_ans.innerText);
    const left = count-1;
    left_ans.innerText = left;
    
    input_question.textContent = " ";
    if(left==0){
       
        submit_btn.disabled = true;
        //alert("You have asked maximun question,Reset now.");
        reset_btn.disabled = false;
        reset_btn.addEventListener('click',()=>{
            reset_btn.disabled = true;
            submit_btn.disabled = false;
            left_ans.innerText = 3;
            total_answer.innerText = 0;
            input_question.textContent = " ";
            
        })
        
     }
      
     
})
