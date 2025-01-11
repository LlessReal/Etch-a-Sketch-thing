
const body = document.querySelector("body") // Selects body
body.setAttribute("style",`
    background-color: cyan; 
    min-height: 100vh;
    min-width: 100vh;
    display: flex; 
    flex-direction: column;
    justify-content: center; align-items: center;
    margin: 0px;
    `)
    // Idk why i set the min width like this

TotalBoxContainer = document.createElement("div")
TotalBoxContainer.setAttribute("style",`display: flex; flex-direction: column;
    align-items: center;
    width: 960px;
    
    `) // This was supposed to sensor the shit
body.appendChild(TotalBoxContainer) // Add to body

NewSetButton = document.createElement("button")
NewSetButton.textContent = "Create new grid"
NewSetButton.setAttribute("style",`padding: 10px; margin: 20px;
    color: white; background-color: red;
    border: groove 10px white; border-radius: 20px;
    transition: 0.5s;
    width: 500px;
    cursor: pointer;
    `)

NewSetButton.addEventListener("mouseover", () => { NewSetButton.style.boxShadow = `0 0 40px yellow inset` })
NewSetButton.addEventListener("mouseout", () => { NewSetButton.style.boxShadow = `` })

TotalBoxContainer.appendChild(NewSetButton)

BoxContainer = document.createElement("div")
BoxContainer.setAttribute("style",`display: flex;
    padding: 10px;
    width: 900px;
    flex-wrap: wrap;`) // Added wrap with 900px so it can be 16 a row
TotalBoxContainer.appendChild(BoxContainer)

GridSize = 16
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
        item.setAttribute("style",`background-color: gray; 
            font-size: 20px; text-align: center;
            padding: 10px;
            max-width: 30px; flex: 1 1 100%; 
            border: solid 3px;
            user-select: none;
            `)  // Properties given to boxes
        item.addEventListener("mouseover", () => {
            item.style.transition = "0s"
            item.style.backgroundColor = "red" // Immediately turns red when hovered over
        })
        item.value = 10
        item.addEventListener("mouseout", () => {
            item.style.transition = "4s"
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




