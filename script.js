
const body = document.querySelector("body") // Selects body
body.setAttribute("style",`
    background-color: cyan; 
    min-height: 100vh;
    min-width: 1200px;
    display: flex; 
    flex-direction: column;
    margin: 0px;
    `)
    // Idk why i set the min width like this

TotalBoxContainer = document.createElement("div")
TotalBoxContainer.setAttribute("style",`display: flex; flex-direction: column;
    align-items: center;
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    `) // This was supposed to sensor the shit
body.appendChild(TotalBoxContainer) // Add to body

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
    width: 960px;
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
            flex: 1 1 auto;
            border: solid 3px;
            transition: 4s;
            user-select: none;
            `)   
        }
        DefaultEvent()
        item.addEventListener("mouseover", () => {
            item.setAttribute("style",`background-color: red; 
            font-size: 20px; 
            flex: 1 1 auto;
            border: solid 3px;
            user-select: none;
            `)
            
        })
        item.value = 10
        item.addEventListener("mouseout", DefaultEvent) // Runs default event (background color will get replaced next tho)
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = `rgb(${127 + Math.random() * 127},${127 + Math.random() * 127},${127 + Math.random() * 127})`
            // Background color becomes something new (with 127 starting value for more brightness)
            if (item.value != 0) {
                item.value-- 
            } 
            item.style.filter = `brightness(${item.value / 10})`
            // Each time mouse moves out, brightness become 0.9 -> 0.8, etc.
            // As for the if statement above, it was added so the brightness don't reset for becoming negative
        })
        item.textContent = `${index + 1}` // Numbers given for each number cuz why not
    })
}

CreateNewGridFunc()




