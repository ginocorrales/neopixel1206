ring = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)

def on_forever():
    for index in range(24):
        ring.set_pixel_color(index, neopixel.colors(NeoPixelColors.RED))
        ring.show()
        basic.pause(50)
        ring.set_pixel_color(index, neopixel.colors(NeoPixelColors.YELLOW))
        ring.show()
    for index2 in range(24):
        ring.set_pixel_color(index2, neopixel.colors(NeoPixelColors.BLUE))
        ring.show()
        basic.pause(15)
        ring.set_pixel_color(index2, neopixel.colors(NeoPixelColors.GREEN))
        ring.show()
basic.forever(on_forever)
