//counter to work
let counter = document.getElementById("counter")
console.log ("counter",counter)
let timer = setInterval(function(){
    counter.innerText = parseInt(counter.innerText)+ 1
},1000)
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let heartButton = document.getElementById("heart")
let likesList = document.querySelector("ul")
let likesObj = {}
 document.body.addEventListener("click",function(e){
     console.log(e.target)
     switch(e.target.id){
         case "minus":
             counter.innerText === "0" ? null:counter.innerText = parseInt(counter.innerText)-1
         break;
         case "plus":
            counter.innerText = parseInt(counter.innerText)+1
         break;
         case "heart":
             console.log(likesObj)
             if (Object.keys(likesObj).includes(counter.innerText)){

             likesObj[`${counter.innerText}`] +=1
             let likedLi = document.querySelector(`li[data-id="${counter.innerText}"]`)
             likedLi.innerText = `${counter.innerText} has been liked ${likesObj[`${counter.innerText}`]} times`

            }else {
             let likedNum = counter.innerText
             let li = document.createElement("li")
             li.dataset.id = likedNum
             li.innerText = `${likedNum} has beed liked`
             likesList.appendChild(li) 
             likesObj[`${likedNum}`]=1
              }
         break;
         case "resume":
       
        e.target.innerText = "pause"
        e.target.id = "pause"
        plusButton.disabled = false
        minusButton.disabled = false
        heartButton.disabled = false
        timer = setInterval(function(){
            counter.innerText = parseInt(counter.innerText)+ 1
        },1000)
         break;
         case "pause":
        
        e.target.innerText = "resume"
        e.target.id = "resume"
        clearInterval(timer)
        plusButton.disabled = true
        minusButton.disabled = true
        heartButton.disabled = true
        break;
         default:
             break;

     }
 }) 
 //form event listener
 let form = document.getElementById("comment-form")
 form.addEventListener("submit",function(e){
     e.preventDefault()
     let comment = e.target.comment.value
     console.log(comment)
     let commentsList = document.getElementById("list")
     let pTag = document.createElement("p")
     pTag.innerText = comment
     commentsList.append(pTag)
     form.reset()
    

 })