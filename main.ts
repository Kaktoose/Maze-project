function mazeDone () {
	
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
    basic.pause(randint(3, 300))
    basic.showLeds(`
        . . . . .
        . # # . .
        # . # # #
        . . . # #
        . . . . .
        `)
    mazeDone()
}
basic.forever(function () {
	
})
