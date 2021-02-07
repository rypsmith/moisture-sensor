let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let brightness = 25
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 630) {
        basic.showIcon(IconNames.Skull)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 648 && pins.analogReadPin(AnalogPin.P2) > 636) {
        basic.showIcon(IconNames.Skull)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 660 && pins.analogReadPin(AnalogPin.P2) > 648) {
        basic.showIcon(IconNames.Skull)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 672 && pins.analogReadPin(AnalogPin.P2) > 660) {
        basic.showIcon(IconNames.Skull)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 684 && pins.analogReadPin(AnalogPin.P2) > 672) {
        basic.showIcon(IconNames.Skull)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 696 && pins.analogReadPin(AnalogPin.P2) > 684) {
        basic.showIcon(IconNames.Skull)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 696 && pins.analogReadPin(AnalogPin.P2) > 684) {
        basic.showIcon(IconNames.Sad)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 708 && pins.analogReadPin(AnalogPin.P2) > 696) {
        basic.showIcon(IconNames.Sad)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 720 && pins.analogReadPin(AnalogPin.P2) > 708) {
        basic.showIcon(IconNames.Sad)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 732 && pins.analogReadPin(AnalogPin.P2) > 720) {
        basic.showIcon(IconNames.Sad)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 744 && pins.analogReadPin(AnalogPin.P2) > 732) {
        basic.showIcon(IconNames.Sad)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 756 && pins.analogReadPin(AnalogPin.P2) > 744) {
        basic.showIcon(IconNames.Sad)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 768 && pins.analogReadPin(AnalogPin.P2) > 756) {
        basic.showIcon(IconNames.Asleep)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 780 && pins.analogReadPin(AnalogPin.P2) > 768) {
        basic.showIcon(IconNames.Asleep)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 792 && pins.analogReadPin(AnalogPin.P2) > 780) {
        basic.showIcon(IconNames.Asleep)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 804 && pins.analogReadPin(AnalogPin.P2) > 792) {
        basic.showIcon(IconNames.Asleep)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 816 && pins.analogReadPin(AnalogPin.P2) > 804) {
        basic.showIcon(IconNames.Asleep)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 828 && pins.analogReadPin(AnalogPin.P2) > 816) {
        basic.showIcon(IconNames.Asleep)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 840 && pins.analogReadPin(AnalogPin.P2) > 828) {
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 852 && pins.analogReadPin(AnalogPin.P2) > 840) {
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 864 && pins.analogReadPin(AnalogPin.P2) > 852) {
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 876 && pins.analogReadPin(AnalogPin.P2) > 864) {
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 888 && pins.analogReadPin(AnalogPin.P2) > 876) {
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(brightness)
        strip.show()
    } else if (pins.analogReadPin(AnalogPin.P2) < 900 && pins.analogReadPin(AnalogPin.P2) > 888) {
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(23, neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(brightness)
        strip.show()
    }
})
