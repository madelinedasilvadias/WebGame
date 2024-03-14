class MoveLeftCommand extends Command {
    constructor(character) {
        super();
        this.character = character;
    }

    execute() {
        this.character.moveLeft();
    }
}