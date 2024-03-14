class Main {
    static main() {
    const gameController = new GameController();

    document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        gameController.executeMoveRight();
    }
    else if (event.key === "ArrowLeft") {
        gameController.executeMoveLeft();
    }
    });
}}