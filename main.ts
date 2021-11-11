let list = [
[
0,
1,
0,
1,
0
],
[
1,
1,
0,
1,
1
],
[
0,
1,
1,
1,
0
],
[
0,
1,
1,
1,
0
],
[
0,
0,
1,
0,
0
]
]
for (let Y = 0; Y <= 4; Y++) {
    for (let X = 0; X <= 4; X++) {
        if (list[Y][X] == 1) {
            led.plot(X, Y)
        } else {
            led.unplot(X, Y)
        }
    }
}
basic.forever(function () {
	
})
