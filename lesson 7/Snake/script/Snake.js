class Snake {
    constructor() {
        this.possibleDirections = ['down', 'up', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }]
        this.direction = 'down';
    }
    //Настройки игры
    init(settings) {
        this.settings = settings;
    }
    //Меняем направления движения.
    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error('Передано не верное направление. Вы передали: ' + newDirection);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }
    //Метод проверяет, является ли переданное направление противоположным тому, куда сейчас движется змейка
    isPassedOppositeDirection(newDirection) {
        if (this.direction == 'down' && newDirection == 'up') {
            return true;
        }
        if (this.direction == 'up' && newDirection == 'down') {
            return true;
        }
        if (this.direction == 'left' && newDirection == 'right') {
            return true;
        }
        if (this.direction == 'right' && newDirection == 'left') {
            return true;
        }
        return false;
    }
    //Метод осуществялет шаг змейки. Добавляет ячейку перед существующим
    //положением головы и удаляет одну ячейку в хвосте
    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }
        //Если голова уходит за правый край
        if (newHeadCoords.x > this.settings.colsCount){
            newHeadCoords.x = 1;
        }
        //Если голова уходит за нижний край
        if (newHeadCoords.y > this.settings.rowsCount) {
            newHeadCoords.y = 1;
        }
        //Если голова уходит за левый край
        if (newHeadCoords.x == 0) {
            newHeadCoords.x = this.settings.colsCount;
        }
        //Если голова уходит за верхний край
        if (newHeadCoords.y == 0) {
            newHeadCoords.y = this.settings.rowsCount;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
    }
    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}