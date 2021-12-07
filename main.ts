let ring = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 23; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        ring.show()
        basic.pause(50)
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        ring.show()
    }
    for (let index = 0; index <= 23; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        ring.show()
        basic.pause(5)
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        ring.show()
    }
})
