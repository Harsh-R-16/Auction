let form = document.querySelector("form")
let h3 = document.querySelector("h3")
c=1
let obj = {}
obj.Name=[]
obj.Password=[]
obj.BidAmount=[]
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let username = form.elements.username
    let password = form.elements.password
    let bidamount = form.elements.bidamount
   
    console.log(username.value)
    console.log(password.value)
    console.log(bidamount.value)
    if(password.value==username.value) {
        obj.Name.push(username.value)
        obj.Password.push(password.value)
        obj.BidAmount.push(bidamount.value)
        c++
    }
    else {
        alert("Wrong Password")
    }
    h3.innerHTML=`Person ${c}`
    username.value=""
    password.value=""
    bidamount.value=""
})
console.log(obj)
let p=document.querySelector("p")
p.classList.add("div")
let btn = document.getElementById("winner")
btn.addEventListener("click", function () {
    h3.innerHTML=`Person 1`
    arrA = obj.BidAmount
    arrN = obj.Name
    max = 0
    name=""
    for (i = 0; i < arrN.length; i++)
    {
        if (Number(arrA[i]) > max) {
            max = arrA[i];
            name=arrN[i]
        }
    }
    console.log(name)
    console.log(max)

   
    p.innerHTML=`<b>Name: </b><br> ${name}<br>`
    p.innerHTML += `<b>Amount: </b> <br>${max}$`
    
})