document.addEventListener("DOMContentLoaded", function () {

    let progress = 0;

    const progressBar = document.getElementById("progressBar");
    const loadingText = document.getElementById("loadingText");

    const loadingMessages = [
        "Analyzing situation...",
        "Checking how stupid I was...",
        "Calculating consequences...",
        "Searching for forgiveness...",
        "Preparing apology...",
        "This is bad 💀"
    ];

    const loadingInterval = setInterval(function () {

        progress += 10;

        progressBar.style.width = progress + "%";

        let messageIndex = Math.floor(progress / 20);

        if (messageIndex >= loadingMessages.length) {
            messageIndex = loadingMessages.length - 1;
        }

        loadingText.textContent = loadingMessages[messageIndex];

        if (progress >= 100) {

            clearInterval(loadingInterval);

            setTimeout(function () {

                document.getElementById("loadingScreen").classList.add("hidden");

                document.getElementById("mainScreen").classList.remove("hidden");

            }, 500);
        }

    }, 300);


    /* STILL MAD BUTTON */

    const madButton = document.getElementById("madButton");

    madButton.addEventListener("click", function () {

        document.getElementById("mainScreen").classList.add("hidden");

        document.getElementById("apologyScreen").classList.remove("hidden");

    });


    /* NO BUTTON */

    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function () {

        const maxX = window.innerWidth - noButton.offsetWidth - 20;
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "fixed";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

    });


    /* FORGIVE BUTTON */

    const forgiveButton = document.getElementById("forgiveButton");

    forgiveButton.addEventListener("click", function () {

        document.getElementById("apologyScreen").classList.add("hidden");

        document.getElementById("finalScreen").classList.remove("hidden");

        createHearts();

    });


    /* HEARTS */

    function createHearts() {

        setInterval(function () {

            const heart = document.createElement("div");

            heart.className = "heart";

            const hearts = ["❤️", "💕", "💗", "💖", "🎀"];

            heart.textContent =
                hearts[Math.floor(Math.random() * hearts.length)];

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-40px";

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 3000);

        }, 300);

    }

});