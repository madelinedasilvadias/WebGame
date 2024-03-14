
class GameController {
    constructor() {
        this.character = new Character();
        this.moveRightCommand = new MoveRightCommand(this.character);
        this.moveLeftCommand = new MoveLeftCommand(this.character);
        this.moveForwardCommand = new MoveForwardCommand(this.character);
        this.moveBackwardCommand = new MoveBackwardCommand(this.character);
    }

    executeMoveRight() {
        this.moveRightCommand.execute();
    }

    executeMoveLeft() {
        this.moveLeftCommand.execute();
    }

    executeMoveForward() {
        this.moveForwardCommand.execute();
    }

    executeMoveBackward() {
        this.moveBackwardCommand.execute();
    }
}
