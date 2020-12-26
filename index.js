function price(){
    const  elementSelected  = document.querySelector(".cake")
    const brtag = document.createElement("br","")
    elementSelected.appendChild(brtag)
    const span  =  document.createElement("span")
    span.classList.add("rate")

    const whatPrice = document.createTextNode("$ 20")
    
    span.appendChild(whatPrice)

    elementSelected.appendChild(span)
}

price()