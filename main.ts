function giro_derecha () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorStop(maqueen.Motors.M2)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.motorStop(maqueen.Motors.All)
}
function giro_izquierda () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    maqueen.motorStop(maqueen.Motors.M1)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.AB, function () {
    avance()
    giro_derecha()
    giro_izquierda()
})
function avance () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
