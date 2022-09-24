let T = 0
let L = 0
input.onButtonPressed(Button.A, function () {
    T = input.temperature()
    basic.showNumber(T)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    L = input.lightLevel()
    basic.showNumber(L)
})
