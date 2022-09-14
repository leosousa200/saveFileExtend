const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads   = []
let listItems = ""

inputBtn.addEventListener("click",function(){
    if(inputEl.value != ''){
        console.log("dados guardados...")
        myLeads.push(inputEl.value)
        inputEl.value = ''        
        //listItems += "<li><a href=' " + myLeads[myLeads.length-1] + "'  target='_blank'>" + myLeads[myLeads.length-1] + "</a></li>" 
        listItems +=`
            <li>
                <a href='${myLeads[myLeads.length-1]}' target='_blank'>
                    ${myLeads[myLeads.length-1]}
                </a>
            </li>
        `
        //outra maneira:
            //const li = document.createElement("li")
            //li.textContent = myLeads[myLeads.length-1]
            //ulEl.append(li)

        render()
    }
})

function render(){
    ulEl.innerHTML += listItems
    localStorage.setItem("key",myLeads[myLeads.length-1])
    listItems = ''
}

/*
        <li>
            <a href='${myLeads[myLeads.length-1]}'  target='_blank' >
                ${myLeads[myLeads.length-1]} 
            </a>
        </li>    

*/