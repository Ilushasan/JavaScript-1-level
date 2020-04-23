class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.getElementById('message');
    }
    //Метод получаеь другие игровые объекты
    init(settings, status, board, snake, menu, food, score) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
        this.score = score;
    }
    //Метод назначает обработчика на события клика на кнопке старт
    run() {
        this.score.setToWin(this.settings.winLength);
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this));
    }
    //Метод запускает игру
    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
        }
    }
    //Метод ставит игру на паузу
    pause() {
        if(this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }
    }
    //Метод запускается каждую секунду и осуществляет:
    //Перемещение змейки
    //проверяет проиграна игра или выиграна
    //увеличивает размер змейки если она ест еду
    //заново отрисовывает положение змейки и еду
    doTick() {
        this.snake.performStep();
        this.score.setCurrent(this.snake.body.length);
        if (this.isSnakeSreppendOntoItself()){
            return;
        }
        if (this.isGameWon()) {
            this.snake.increaseBody();
            this.board.renderSnake()
            return;
        }
        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
        }
        this.board.clearBoard();
        this.food.setFood();
        this.board.renderSnake();
    }
    //Метод проверяет выиграна ли игра, останавливает игру
    isGameWon() {
        if (this.snake.body.length == this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы выиграли!');
            return true;
        }
        return false;
    }
    //Метод сравнивает съела ли змейка сама себя
    isSnakeSreppendOntoItself() {
        let cellArr = this.snake.body.map(function (cellCoords) {
            return cellCoords.x.toString() + cellCoords.y.toString();
        });
        let head = cellArr.shift();
        if (cellArr.includes(head)) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы проиграли');
            return true;
        }
    }
    //Метод проверяет проиграна ли игра и останавливает ее
    //Метод больше не используется, змейка может проходить через стенку
    isGameLost() {
        if (this.board.isNextStepToWall(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            this.setMessage('Вы проиграли');
            return true
        }
        return false;
    }
    //В зависимости от нажатия кнопки (вверх, вниз, влево, вправо) будет вызываться соответсвующий мотод
    pressKeyHandler(event) {
        switch(event.key) {
            case "ArrowUp":
                this.snake.changeDirection('up');
                break;
            case "ArrowDown":
                this.snake.changeDirection('down');
                break;
            case "ArrowLeft":
                this.snake.changeDirection('left');
                break;
            case "ArrowRight":
                this.snake.changeDirection('right');
                break;
        }
    }
    //Метод выводит сообщение на странице
    setMessage(text) {
        this.messageEl.innerText = text;
    }
}
