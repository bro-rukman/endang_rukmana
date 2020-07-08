var a = function (width, height) {
    return width * height;
}
var total = a(12, 2);
console.log(total);
var multi = total * 2;
console.log(multi);
var index = prompt("input : ");
done = multi - index;
console.log(done);
document.write(done);
var random = Math.random();
// document.write("<br>" + random);
if (random < 0.50) {
    document.write("<br>kalah")
} else {
    document.write("<br>Menang")
}
var hotel = newObject();
hotel.hot = 'hotels',
    hotel.room = 40,
    hotel.booked = 23,
    hotel.gym = true,
    hotel.roomType = ['twin', 'double', 'suite']
hotel.checkAvability = function () {
    return this.room - this.booked;
}

var available = document.getElementById('rooms');
available.textContent = hotel.checkAvability();
document.write(available);