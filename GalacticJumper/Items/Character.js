class Character extends Item {
        constructor() {
            this.positionX = 0;
            this.positionY = 0;
        }
    
        moveRight() {
            this.positionX += 1;
            console.log("Character moved right.");
            console.log("New position: ", this.positionX, this.positionY);
        }

        moveLeft() {
            this.positionX -= 1;
            console.log("Character moved left.");
            console.log("New position: ", this.positionX, this.positionY);
        }

        moveForward() {
            this.positionY += 1;
            console.log("Character moved forward.");
            console.log("New position: ", this.positionX, this.positionY);
        }

        moveBackward() {
            this.positionY -= 1;
            console.log("Character moved backward.");
            console.log("New position: ", this.positionX, this.positionY);
        }


}