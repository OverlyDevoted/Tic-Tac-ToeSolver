const tableStates = [
    "X",
    "O",
    ""
]
function getNodes() {
    const tds = document.querySelectorAll("#tictactoe tr td")
    return tds
}
function highligth(args, className) {
    for (let arg of args)
        arg.classList.add(className)
}
function check(...elements) {
    if (elements.every((element) => {
        return element.textContent === elements[0].textContent
    })) {
        highligth(elements, "win")
        return elements[0].textContent
    }
    return false

}
// possible winners - "X", "O", "DRAW" 
function getWinner(tds) {
    //check rows
    for (let i = 0; i < 3; i++) {
        const winner = check(tds[(i * 3)], tds[(i * 3) + 1], tds[(i * 3) + 2])
        if (winner)
            return winner
    }
    //check columns
    for (let i = 0; i < 3; i++) {
        const winner = check(tds[i], tds[i + 3], tds[i + 6])
        if (winner)
            return winner
    }
    //check diagonals
    for (let i = 0; i < 2; i++) {
        const winner = check(tds[i + (i * 2)], tds[4], tds[8 - (i * 2)])
        if (winner)
            return winner;
    }
    return "DRAW"
}
const solveBtn = document.getElementById("solve-btn")
solveBtn.addEventListener("click", () => {
    const tds = getNodes();
    highligth(tds, "loser")
    const heading = document.getElementById("winner-heading")
    heading.style.color="white"
    const winner = getWinner(tds)
    
    heading.textContent = winner === "DRAW" ? "The game concluded in a draw" : `Player ${winner} has won the game`
})