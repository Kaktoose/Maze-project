function mazeDone () {
    while (true) {
        if (input.pinIsPressed(TouchPin.P0)) {
            music.playMelody("C C F E F G C5 C5 ", 220)
            basic.showString("P1")
            control.reset()
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            music.playMelody("C C F E F G C5 C5 ", 220)
            basic.showString("P2")
            control.reset()
        }
    }
}
let maze = randint(1, 10)
if (maze == 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(randint(3, 300))
    basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(randint(3, 300))
    basic.showLeds(`
        . . . . .
        . # # . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(randint(3, 300))
    basic.showLeds(`
        . . . . .
        . # # . .
        # . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(randint(3, 300))
    basic.showLeds(`
        . . . . .
        . # # . .
        # . # # .
        . . . # .
        . . . . .
        `)
    basic.pause(randint(3, 300))
    basic.showLeds(`
        . . . . .
        . # # . .
        # . # # .
        . . . # #
        . . . . .
        `)
}
mazeDone()
