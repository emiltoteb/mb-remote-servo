radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        rotation = 90
    } else {
        rotation += receivedNumber
    }
    pins.servoWritePin(AnalogPin.P1, rotation)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(-10)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(-10)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "random") {
        rotation = randint(0, 180)
    }
    pins.servoWritePin(AnalogPin.P1, rotation)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("random")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(10)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(10)
})
let rotation = 0
radio.setGroup(1)
rotation = 90
pins.servoWritePin(AnalogPin.P1, rotation)
basic.forever(function () {
	
})
