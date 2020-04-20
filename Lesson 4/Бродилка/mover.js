let mover = {
    /*
    *Получает и отдает направление от пользователя.
    *@returns {int} Возвращаем направление, введенное пользователем.
    */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (2, 4, 6 или 8), куда вы хотите переместиться, 'Отмена' для выхода."));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8");
                continue;
            }
            return direction;
        }
    },
    /*
    *Отдает следующую точку в которой будет находиться пользователь после движения.
    *@param {int} direction Направление движения игрока.
    *@returns {{x:int, y:int}} Следующая позиция игрока.
    */
    getNextPosition(direction) {
        const NextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                NextPosition.y++;
                NextPosition.x--;
                break;
            case 2:
                NextPosition.y++;
                break;
            case 3:
                NextPosition.y++;
                NextPosition.x++;
                break;
            case 4:
                NextPosition.x--;
                break;
            case 6:
                NextPosition.x++;
                break;
            case 7:
                NextPosition.y--;
                NextPosition.x--;
                break;
            case 8:
                NextPosition.y--;
                break;
            case 9:
                NextPosition.y--;
                NextPosition.x++;
                break;
        }
        return NextPosition;
    }
};