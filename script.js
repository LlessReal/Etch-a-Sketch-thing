
const body = document.querySelector("body")
body.setAttribute("style",`
    background-color: cyan; 
    min-height: 100vh;
    min-width: 100%;
    display: flex; 
    flex-direction: column;
    margin: 0px;
    `)

TotalBoxContainer = document.createElement("div")
TotalBoxContainer.setAttribute("style",`display: flex; flex-direction: column;
    align-items: center;`)
body.appendChild(TotalBoxContainer)

NewSetButton = document.createElement("button")
NewSetButton.textContent = "Create new grid"
DefaultButtonStyle = function() {
    NewSetButton.setAttribute("style",`padding: 10px; margin: 20px;
        color: white; background-color: red;
        border: groove 10px white; border-radius: 20px;
        transition: 0.5s
        `)

}
DefaultButtonStyle()
NewSetButton.addEventListener("mouseover", () => {
    NewSetButton.setAttribute("style",`
        box-shadow: 0 0 40px yellow inset;
        padding: 10px; margin: 20px;
        color: white; background-color: red;
        border: groove 10px white; border-radius: 20px;
        transition: 0.5s;
        cursor: pointer;`)
})
NewSetButton.addEventListener("mouseout", () => {
    DefaultButtonStyle()
})
GridSize = 16

TotalBoxContainer.appendChild(NewSetButton)

BoxContainer = document.createElement("div")
BoxContainer.setAttribute("style",`display: flex;
    padding: 10px;
    width: %;
    max-height: 20px;
    flex-wrap: wrap;`)
TotalBoxContainer.appendChild(BoxContainer)

NewSetButton.addEventListener("click", () => {
    GridSize = prompt("How large do you want your new grid to be (put in the size of the sides by grid #")
    BoxContainer.innerHTML = ""
    CreateNewGridFunc()
})

CreateNewGridFunc = function() {
    for (i = 0; i < (GridSize * GridSize); i++) {
        NewBox = document.createElement("div")
        BoxContainer.appendChild(NewBox);
    }
    
    BoxContainer.querySelectorAll("div").forEach((item, index) => {
        DefaultEvent = function() {
            item.setAttribute("style",`background-color: gray; 
            font-size: 20px; 
            flex: 1 1 100%;
            border: solid 3px;
            transition: 4s;
            max-width: 30px;
            user-select: none;
            `)   
        }
        DefaultEvent()
        item.addEventListener("mouseover", () => {
            item.setAttribute("style",`background-color: red; 
            font-size: 20px; 
            flex: 1 1 100%;
            border: solid 3px;
            max-width: 30px;
            user-select: none;
            `)
            
        })
        item.addEventListener("mouseout", DefaultEvent)
        item.textContent = `${index + 1}` 
    })
}

CreateNewGridFunc()




