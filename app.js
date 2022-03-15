window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
window.addEventListener('load', (event) => {


    const board = document.querySelector(".b")

    console.log("connected")
    const roll1 = document.querySelector(".roll1")
    const roll2 = document.querySelector(".roll2")
    const roll3 = document.querySelector(".roll3")
    const roll4 = document.querySelector(".roll4")

    /*const board = document.querySelector(".b")*/


    var dimensions = board.getBoundingClientRect()
    var width = dimensions.height / 10
    var x0 = dimensions.x - width
    var y0 = dimensions.y + dimensions.height - width

    //var transform = $('.pawn').css('transform');
    var pawn = document.querySelector(".pawn")
    var pawn1 = document.querySelector(".pawn1")
    var pawn2 = document.querySelector(".pawn2")
    var pawn3 = document.querySelector(".pawn3")

    pawn.style.width = `${width}px`
    pawn1.style.width = `${width}px`
    pawn2.style.width = `${width}px`
    pawn3.style.width = `${width}px`

    /*pawn1.style.display = 'none'
    pawn.style.display = 'none'
    pawn2.style.display = 'none'
    pawn3.style.display = "none"*/



    const player1div = document.querySelector(".player1div")
    const player2div = document.querySelector(".player2div")
    const player3div = document.querySelector(".player3div")
    const player4div = document.querySelector(".player4div")

    /*player1div.style.display = 'none'
    player2div.style.display = 'none'
    player3div.style.display = 'none'
    player4div.style.display = "none"*/

    const roll1val = document.querySelector(".roll1val")
    const roll2val = document.querySelector(".roll2val")
    const roll3val = document.querySelector(".roll3val")
    const roll4val = document.querySelector(".roll4val")

    const rollsdiv = document.querySelector(".rolls")






    const form = document.querySelector("form")
    const start = document.querySelector(".start")

    const gameover = document.querySelector(".gameover")



    var rollvalues = [roll1val, roll2val, roll3val, roll4val]
    var rolls = [roll1, roll2, roll3, roll4]

    var counters = [0, 0, 0, 0]
    var winners = 0
    var pawns = [pawn, pawn1, pawn2, pawn3]
    var playersdiv = [player1div, player2div, player3div, player4div]
    var isplaying = [-1, -1, -1, -1]
    var players = 0

    pawns[0].style.left = `${x0 + width}px`
    pawns[0].style.top = `${y0 + (width)}px`

    pawn1.style.left = `${x0 + (2 * width)}px`
    pawn1.style.top = `${y0 + (width)}px`

    pawn2.style.left = `${x0 + (3 * width)}px`
    pawn2.style.top = `${y0 + (width)}px`

    pawn3.style.left = `${x0 + (4 * width)}px`
    pawn3.style.top = `${y0 + (width)}px`



    start.addEventListener("click", function (event) {
        event.preventDefault()
        players = document.querySelector("#players").value

        i = 0;
        rollsdiv.style.display = 'flex'

        form.style.display = "none"

        while (i < players) {
            pawns[i].style.display = "inline"
            playersdiv[i].style.display = "flex"
            isplaying[i] = 0
            i += 1
        }
    })


    computedStyle = window.getComputedStyle(pawn, null);

    const ladders = {
        1: 38,
        4: 14,
        9: 31,
        28: 84,
        21: 42,
        51: 67,
        80: 99,
        72: 91

    }
    const snakes = {
        17: 7,
        54: 34,
        64: 60,
        62: 19,
        87: 36,
        93: 73,
        95: 75,
        98: 79
    }

    const prize = {
        1: "FIRST",
        2: "SECOND",
        3: "THIRD"
    }














    function move(a) {
        val = Math.floor((Math.random() * 6) + 1)

        rollvalues[a].textContent = `${val}`

        counters[a] += val

        y = Math.floor(counters[a] / 10)

        x = counters[a] % 10



        // counter >=100 the the game ends

        if (counters[a] >= 100) {
            pawns[a].style.left = `${x0 + width}px`
            pawns[a].style.top = `${dimensions.y}px`

        }
        //setting postion if the counter is tens
        else if (counters[a] === 10 || counters[a] === 30 || counters[a] === 50 || counters[a] === 70 || counters[a] === 90) {
            pawns[a].style.left = `${x0 + (10 * width)}px`
            pawns[a].style.top = `${y0 - ((y - 1) * width)}px`

        }
        //setting postion if the counter is tens
        else if (counters[a] === 20 || counters[a] === 40 || counters[a] === 60 || counters[a] === 80) {
            pawns[a].style.left = `${x0 + width}px`
            pawns[a].style.top = `${y0 - ((y - 1) * width)}px`

        }
        //for reverse line like 13 12 11
        else if (y % 2 == 1) {
            pawns[a].style.left = `${x0 + ((11 - x) * width)}px`
            pawns[a].style.top = `${y0 - (y * width)}px`
        }
        //for correct lines 1 2 3
        else if (y % 2 == 0) {

            pawns[a].style.left = `${x0 + (x * width)}px`
            pawns[a].style.top = `${y0 - (y * width)}px`

        }




        //if the counter is a ladder
        if (counters[a] == 1 || counters[a] == 4 || counters[a] == 9 || counters[a] == 28 || counters[a] == 21 || counters[a] == 51 || counters[a] == 80 || counters[a] == 72) {

            counters[a] = ladders[counters[a]]



            function ladder() {
                y = Math.floor(counters[a] / 10)

                x = counters[a] % 10


                if (counters[a] === 10 || counters[a] === 30 || counters[a] === 50 || counters[a] === 70 || counters[a] === 90) {
                    pawns[a].style.left = `${x0 + (10 * width)}px`
                    pawns[a].style.top = `${y0 - ((y - 1) * width)}px`

                }
                else if (counters[a] === 20 || counters[a] === 40 || counters[a] === 60 || counters[a] === 80) {
                    pawns[a].style.left = `${x0 + width}px`
                    pawns[a].style.top = `${y0 - ((y - 1) * width)}px`

                }

                else if (y % 2 == 1) {
                    pawns[a].style.left = `${x0 + ((11 - x) * width)}px`
                    pawns[a].style.top = `${y0 - (y * width)}px`
                }

                else if (y % 2 == 0) {

                    pawns[a].style.left = `${x0 + (x * width)}px`
                    pawns[a].style.top = `${y0 - (y * width)}px`

                }
            }

            setTimeout(ladder, 500)

        }


        //if the counter is a snake
        else if (counters[a] == 17 || counters[a] == 54 || counters[a] == 64 || counters[a] == 62 || counters[a] == 87 || counters[a] == 93 || counters[a] == 95 || counters[a] == 98) {


            counters[a] = snakes[counters[a]]


            function snake() {
                y = Math.floor(counters[a] / 10)

                x = counters[a] % 10


                if (counters[a] === 10 || counters[a] === 30 || counters[a] === 50 || counters[a] === 70 || counters[a] === 90) {
                    pawns[a].style.left = `${x0 + (10 * width)}px`
                    pawns[a].style.top = `${y0 - ((y - 1) * width)}px`

                }
                else if (counters[a] === 20 || counters[a] === 40 || counters[a] === 60 || counters[a] === 80) {
                    pawns[a].style.left = `${x0 + width}px`
                    pawns[a].style.top = `${y0 - ((y - 1) * width)}px`

                }

                else if (y % 2 == 1) {
                    pawns[a].style.left = `${x0 + ((11 - x) * width)}px`
                    pawns[a].style.top = `${y0 - (y * width)}px`
                }

                else if (y % 2 == 0) {

                    pawns[a].style.left = `${x0 + (x * width)}px`
                    pawns[a].style.top = `${y0 - (y * width)}px`

                }
            }

            setTimeout(snake, 500)


        }




    }


    function current(a) {

        rolls[a].style.backgroundColor = "#00559f"
        rolls[a].style.pointerEvents = "auto"
        i = 0
        while (i < 4) {
            if (i != a) {
                rolls[i].style.backgroundColor = "#1f85de"
                rolls[i].style.pointerEvents = "none"
            }
            i += 1

        }
    }


    /*rolls[0].style.backgroundColor = "#00559f"
    rolls[1].style.pointerEvents = "none"
    rolls[2].style.pointerEvents = "none"
    rolls[3].style.pointerEvents = "none"*/

    current(0)


    roll1.addEventListener("click", function () {
        move(0)

        if (counters[0] >= 100) {
            winners += 1
            rollvalues[0].textContent = `${prize[winners]}`
            isplaying[0] = -1
            if (winners == players - 1) {
                i = 0
                while (i < 4) {

                    rolls[i].style.backgroundColor = "#1f85de"
                    rolls[i].style.pointerEvents = "none"

                    i += 1

                }
                gameover.style.display = "flex"
            }
            else {
                if (isplaying[1] != -1) {
                    current(1)
                }
                else if (isplaying[2] != -1) {
                    current(2)
                }
                else if (isplaying[3] != -1) {
                    current(3)
                }
            }
        }
        else if (rollvalues[0].textContent != '6') {
            if (isplaying[1] != -1) {
                current(1)
            }
            else if (isplaying[2] != -1) {
                current(2)
            }
            else if (isplaying[3] != -1) {
                current(3)
            }

        }

    })


    roll2.addEventListener("click", function () {
        move(1)
        if (counters[1] >= 100) {
            winners += 1
            rollvalues[1].textContent = `${prize[winners]}`
            isplaying[1] = -1
            if (winners == players - 1) {
                i = 0
                while (i < 4) {

                    rolls[i].style.backgroundColor = "#1f85de"
                    rolls[i].style.pointerEvents = "none"

                    i += 1

                }
                gameover.style.display = "flex"
            }
            else {
                if (isplaying[2] != -1) {
                    current(2)
                }
                else if (isplaying[3] != -1) {
                    current(3)
                }
                else if (isplaying[0] != -1) {
                    current(0)
                }
            }


        }
        else if (rollvalues[1].textContent != '6') {

            if (isplaying[2] != -1) {
                current(2)
            }
            else if (isplaying[3] != -1) {
                current(3)
            }
            else if (isplaying[0] != -1) {
                current(0)
            }

        }

    })


    roll3.addEventListener("click", function () {
        move(2)
        if (counters[2] >= 100) {
            winners += 1
            rollvalues[2].textContent = `${prize[winners]}`
            isplaying[2] = -1
            if (winners == players - 1) {
                i = 0
                while (i < 4) {

                    rolls[i].style.backgroundColor = "#1f85de"
                    rolls[i].style.pointerEvents = "none"

                    i += 1


                }
                gameover.style.display = "flex"
            }
            else {
                if (isplaying[3] != -1) {
                    current(3)
                }
                else if (isplaying[0] != -1) {
                    current(0)
                }
                else if (isplaying[1] != -1) {
                    current(1)
                }
            }
        }
        else if (rollvalues[2].textContent != '6') {
            if (isplaying[3] != -1) {
                current(3)
            }
            else if (isplaying[0] != -1) {
                current(0)
            }
            else if (isplaying[1] != -1) {
                current(1)
            }

        }

    })
    roll4.addEventListener("click", function () {
        move(3)
        if (counters[3] >= 100) {
            winners += 1
            rollvalues[3].textContent = `${prize[winners]}`
            isplaying[3] = -1
            if (winners == players - 1) {
                i = 0
                while (i < 4) {

                    rolls[i].style.backgroundColor = "#1f85de"
                    rolls[i].style.pointerEvents = "none"

                    i += 1

                }
                gameover.style.display = "flex"
            }
            else {
                if (isplaying[0] != -1) {
                    current(0)
                }
                else if (isplaying[1] != -1) {
                    current(1)
                }
                else if (isplaying[2] != -1) {
                    current(2)
                }
            }
        }
        else if (rollvalues[3].textContent != '6') {
            if (isplaying[0] != -1) {
                current(0)
            }
            else if (isplaying[1] != -1) {
                current(1)
            }
            else if (isplaying[2] != -1) {
                current(2)
            }

        }

    })

});


//btn.addEventListener("click", function () {
//  val = Math.floor((Math.random() * 6) + 1)

//    i = 1
//    while (i <= val) {


//        transform = $('.pawn').css('transform');
//        console.log(transform)
//        $('.pawn').css('transform', (transform !== 'none' ? transform : '') + `translate(${ width }px, 0px)`);

//        i++
//    }


//})




/*$(document).ready(function () {
    $('button').click(function () {
        val = Math.floor((Math.random() * 6) + 1)
        console.log("clicked")
        console.log(val)


        i = 1
        while (i <= val) {

            var matrix = computedStyle.getPropertyValue('transform')
            console.log(matrix)
            var transform = $('.pawn').css('transform');
            $('.pawn').css('transform', (transform !== 'none' ? transform : '') + `translate(${ width }px, 0px)`);
            i++
        }
    });
    */
