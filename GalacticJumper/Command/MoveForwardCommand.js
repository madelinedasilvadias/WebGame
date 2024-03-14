class MoveForwardCommand extends Command {
    
    constructor(character) {
        super();
        this.character = character;
    }

    execute() {
        this.character.moveForward();
    }
}