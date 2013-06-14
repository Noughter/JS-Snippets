var old
var text = "Do not edit the text field ! Click the up and down buttons."
var maximum = "255 is the maximum value of "
var minimum = "0 is the minimum value of "

function convert(val) {

    var y
    switch (val) {
        case "A":
            {
                y = 10;
                break
            }
        case "B":
            {
                y = 11;
                break
            }
        case "C":
            {
                y = 12;
                break
            }
        case "D":
            {
                y = 13;
                break
            }
        case "E":
            {
                y = 14;
                break
            }
        case "F":
            {
                y = 15;
                break
            }
    }
    return y
}

function getHex(str) {

    var result
    str = eval(str)
    switch (str) {
        case 0:
            {
                result = '00';
                break
            }
        case 15:
            {
                result = '0F';
                break
            }
        case 31:
            {
                result = '1F';
                break
            }
        case 47:
            {
                result = '2F';
                break
            }
        case 63:
            {
                result = '3F';
                break
            }
        case 79:
            {
                result = '4F';
                break
            }
        case 95:
            {
                result = '5F';
                break
            }
        case 111:
            {
                result = '6F';
                break
            }
        case 127:
            {
                result = '7F';
                break
            }
        case 143:
            {
                result = '8F';
                break
            }
        case 159:
            {
                result = '9F';
                break
            }
        case 175:
            {
                result = 'AF';
                break
            }
        case 191:
            {
                result = 'BF';
                break
            }
        case 207:
            {
                result = 'CF';
                break
            }
        case 223:
            {
                result = 'DF';
                break
            }
        case 239:
            {
                result = "EF";
                break
            }
        case 255:
            {
                result = "FF";
                break
            }
        default:
            result = '00'
    }
    return result
}

function add(x) {

    x = eval(x)
    switch (x) {
        case 0:
            {
                x = 15;
                break
            }
        case 255:
            {
                x = 255;
                alert(maximum);
                break
            }
        default:
            x = x + 16
    }
    return x
}

function subtract(x) {

    x = eval(x)
    switch (x) {
        case 0:
            {
                x = 0;
                alert(minimum);
                break
            }
        case 15:
            {
                x = 0;
                break
            }
        default:
            x = x - 16
    }
    return x
}



function setMyColor() {

    var r = document.forms[0].red.value
    var g = document.forms[0].green.value
    var b = document.forms[0].blue.value
    document.forms[0].mycolor.value = "#" + r + g + b
    window.document.bgColor = "#" + r + g + b
}

function minimumValue(n1, n2, mycol) {

    if (document.forms[0].elements[n1].value == '0')
        alert(minimum + mycol)
    else {
        document.forms[0].elements[n1].value = 0
        document.forms[0].elements[n2].value = '00'
        setMyColor()
    }
}

function maximumValue(n1, n2, mycol) {

    if (document.forms[0].elements[n1].value == '255')
        alert(maximum + mycol)
    else {
        document.forms[0].elements[n1].value = 255
        document.forms[0].elements[n2].value = 'FF'
        setMyColor()
    }
}

function plusValue(n1, n2, mycol) {

    var r = document.forms[0].elements[n1].value
    if (r == '255')
        alert(maximum + mycol)
    else {
        document.forms[0].elements[n1].value = add(r)
        r = document.forms[0].elements[n1].value
        document.forms[0].elements[n2].value = getHex(r)
        setMyColor()
    }
}

function minusValue(n1, n2, mycol) {

    var r = document.forms[0].elements[n1].value
    if (r == '0')
        alert(minimum + mycol)
    else {
        document.forms[0].elements[n1].value = subtract(r)
        r = document.forms[0].elements[n1].value
        document.forms[0].elements[n2].value = getHex(r)
        setMyColor()
    }
}

function doWhite() {

    document.forms[0].red.value = 'FF'
    document.forms[0].rr.value = '255'
    document.forms[0].green.value = 'FF'
    document.forms[0].gg.value = '255'
    document.forms[0].blue.value = 'FF'
    document.forms[0].bb.value = '255'
    setMyColor()
}

function doBlack() {

    document.forms[0].red.value = '00' //element 5
    document.forms[0].rr.value = '0' //element 6
    document.forms[0].green.value = '00' //element 11
    document.forms[0].gg.value = '0' //element 12
    document.forms[0].blue.value = '00' //element 17
    document.forms[0].bb.value = '0' //element 18
    setMyColor()
}

