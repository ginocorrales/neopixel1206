input.onButtonPressed(Button.A, function () {
    basic.showString("Gino")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playMelody("C5 C5 G G D D - - ", 120)
})
let ring = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 23; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        basic.pause(50)
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        ring.show()
        ring.show()
    }
    for (let index2 = 0; index2 <= 23; index2++) {
        ring.setPixelColor(index2, neopixel.colors(NeoPixelColors.Blue))
        ring.show()
        basic.pause(15)
        ring.setPixelColor(index2, neopixel.colors(NeoPixelColors.Green))
        ring.show()
    }
})
