
const body = document.querySelector("body")
body.setAttribute("style",`
    background-color: cyan; 
    min-height: 100vh;
    display: flex; 
    justify-content: center; align-items: center; 
    margin: 0px;
    `)

BoxContainer = document.createElement("div")
BoxContainer.setAttribute("style",`display: flex;
    padding: 10px;
    width: 50%; 
    flex-wrap: wrap;`)
body.appendChild(BoxContainer)

Box1 = document.createElement("div"); BoxContainer.appendChild(Box1);
Box2 = document.createElement("div"); BoxContainer.appendChild(Box2);
Box3 = document.createElement("div"); BoxContainer.appendChild(Box3);
Box4 = document.createElement("div"); BoxContainer.appendChild(Box4);
Box5 = document.createElement("div"); BoxContainer.appendChild(Box5);
Box6 = document.createElement("div"); BoxContainer.appendChild(Box6);
Box7 = document.createElement("div"); BoxContainer.appendChild(Box7);
Box8 = document.createElement("div"); BoxContainer.appendChild(Box8);
Box9 = document.createElement("div"); BoxContainer.appendChild(Box9);
Box10 = document.createElement("div"); BoxContainer.appendChild(Box10);
Box11 = document.createElement("div"); BoxContainer.appendChild(Box11);
Box12 = document.createElement("div"); BoxContainer.appendChild(Box12);
Box13 = document.createElement("div"); BoxContainer.appendChild(Box13);
Box14 = document.createElement("div"); BoxContainer.appendChild(Box14);
Box15 = document.createElement("div"); BoxContainer.appendChild(Box15);
Box16 = document.createElement("div"); BoxContainer.appendChild(Box16);

BoxContainer.querySelectorAll("div").forEach((item, index) => {
    item.setAttribute("style",`background-color: gray; 
        font-size: 20px; 
        padding: 20px;
        margin: 10px;
        flex: 1;
        justify-content: center;  
        border: solid 5px;
        border-radius: 20 px;
        `)
    item.textContent = `Box ${index + 1}` 
})



