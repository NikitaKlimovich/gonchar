function game() {
    var score = document.getElementById("score"); score.innerText = 0;
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    const bird = document.getElementById("bird");
    const game_over = document.getElementById("game_over")
    const controls = document.getElementById("controls")

    function hide(object) {
        object.style.visibility = "hidden"
    }

    function show(object) {
        object.style.visibility = "visible"
    }

    function jump() {
        if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
            }, 600);
        }
    }

    function keydown() {
        jump()
        score.innerText++
    }

    function detect_collision() {
        // get current dino Y position
        let dinoTop = parseInt(
            window.getComputedStyle(dino).getPropertyValue("top")
        );

        // get current cactus X position
        let cactusLeft = parseInt(
            window.getComputedStyle(cactus).getPropertyValue("left")
        );

        let birdLeft = parseInt(
            window.getComputedStyle(bird).getPropertyValue("left")
        );

        // detect collision
        cactusHit = cactusLeft < 50 && cactusLeft > 10 && dinoTop >= 140;
        birdHit = birdLeft < 50 && birdLeft > 10 && dinoTop <= 65;

        if (cactusHit || birdHit) {
            score = 0
            stop_game()
            show(game_over)
            }
    }

    function start_game() {
        show(cactus)
        show(bird)
        hide(controls)
        hide(game_over)
        cactus.classList.add("cactus_move")
        bird.classList.add("bird_move")
        document.addEventListener("keydown", keydown);
        let isAlive = setInterval(detect_collision, 20);
    }

    function stop_game() {
        hide(cactus)
        hide(bird)
        show(controls)
        cactus.classList.remove("cactus_move")
        bird.classList.remove("bird_move")
        document.removeEventListener("keydown", keydown)
    }

    start_game()
}
