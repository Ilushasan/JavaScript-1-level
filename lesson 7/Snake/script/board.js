class Board {
    boardEl = document.getElementById('game');
    settings = new Settings();
    snake = null;

    constructor() {
        this.boardEl = document.getElementById('game');
    }

    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }
    //Создаем доску
    renderBoard() {
        this.boardEl.innerHTML = "";
        for (let row = 0; row < this.settings.rowsCount; row++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }
    //Рисуем змейку
    renderSnake() {
        const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
        if (snakeBodyElems) {
            snakeBodyElems.forEach(function(tdEl){
                tdEl.classList.add('snakeBody');
            })
        }
    }
    //Очистка игры
    clearBoard(){
        const tdElems = document.querySelectorAll('td');
        tdElems.forEach(function(td) {
            td.className = '';
        });
    }
    //Возвращает элементы змейки
    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length > 0) {
            let bodyElems = [];
            for (const coord of bodyCoords) {
                let elem = this.getCellEl(coord.x, coord.y);
                bodyElems.push(elem);
            }
            return bodyElems;
        }
        return null;
    }
    //Берет координаты
    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }
    //Проверяет является ли слудующая ячейка стеной
    //Метод устарел, змейка проходит через стены
    isNextStepToWall(nextCellCoords) {
        let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
        return nextCell === null;
    }
    //Рисует еду
    renderFood(coords) {
        let foodCell = this.getCellEl(coords.x, coords.y);
        foodCell.classList.add('food');
    }
    //Находится ли змейка над едой
    isHeadOnFood() {
        let foodCeel = this.boardEl.querySelector('.food');
        return foodCeel.classList.contains('snakeBody');
    }
}