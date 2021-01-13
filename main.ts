input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
})
radio.setGroup(25)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) > 0) {
    	
    } else {
    	
    }
})
