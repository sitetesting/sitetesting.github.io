function price(price, item){
    const  elementSelected  = document.querySelector(item)
    const brtag = document.createElement("br","")
    elementSelected.appendChild(brtag)
    const span  =  document.createElement("span")
    span.classList.add("rate")

    const whatPrice = document.createTextNode(price)
    
    span.appendChild(whatPrice)

    elementSelected.appendChild(span)
}

price("$ 20",".cake")
price("$ 10",".bread")
price("$ 5",".pastry")
price("$ 8",".icecream")
price("$ 10",".pies")
price("$ 5",".premix")
price("$ 4",".cone")
price("$ 6",".sweets")
price("$ 7",".muffin")
price("$ 9",".toast")
