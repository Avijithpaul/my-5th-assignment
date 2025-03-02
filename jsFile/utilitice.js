function getInnerNumber(id) {
    const innerText = document.getElementById(id).innerText
    const intoNumber = parseInt(innerText)
    return intoNumber
}

let count = 0

// completed btn function 
function clickCompletedBtn(id, cardName) {
    document.getElementById(id).addEventListener("click", function () {
        alert("Board updated Successfully")

        document.getElementById(id).disabled = true

        const pendingTask = getInnerNumber("pending-task")
        const convertedPendingTask = pendingTask - 1
        document.getElementById("pending-task").innerText = convertedPendingTask

        const completedTask = getInnerNumber("completed-task")
        const convertedCompletedTask = completedTask + 1
        document.getElementById("completed-task").innerText = convertedCompletedTask

        const cardNam = document.getElementById(cardName).innerText
        const timeNow = new Date().toLocaleTimeString();

        const p = document.createElement("p")
        p.classList.add("font-light")
        p.classList.add("text-xs")
        p.classList.add("p-2")
        p.classList.add("bg-slate-100")
        p.classList.add("rounded-lg")
        p.innerText = `
            You have Complete The Task ${cardNam} at ${timeNow}
        `
        document.getElementById("history-container").appendChild(p)

        
        if(count===5){
            alert('tik asce')
        }
        count++
    })
}

function lastAlert(idName) {
    document.getElementById(idName).disabled === true
}