radio.onReceivedNumber(function (receivedNumber) {
    numero = receivedNumber
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    pulsaciones += 1
})
input.onButtonPressed(Button.B, function () {
    if (pulsaciones == numero) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let numero = 0
let pulsaciones = 0
radio.setGroup(1)
pulsaciones = 0
