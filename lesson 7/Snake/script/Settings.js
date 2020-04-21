class Settings {

    rowsCount = 0;
    colsCount = 0;
    speed = 0;
    winLength = 0;

    init(params) {
        let dafaultParams = {
            rowsCount: 21,
            colsCount: 21,
            speed: 2,
            winLength: 50
        };
        Object.assign(dafaultParams, params);

        if (dafaultParams.rowsCount < 10 || dafaultParams.rowsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }
        this.rowsCount = dafaultParams.rowsCount;

        if (dafaultParams.colsCount < 10 || dafaultParams.colsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }
        this.colsCount = dafaultParams.colsCount;

        if (dafaultParams.speed < 1 || dafaultParams.speed > 10) {
            throw new Error('Неверные настройки, значение speed должно быть в диапазоне [1, 1].');
        }
        this.speed = dafaultParams.speed;

        if (dafaultParams.winLength < 5 || dafaultParams.winLength > 50) {
            throw new Error('Неверные настройки, значение winLength должно быть в диапазоне [5, 50].');
        }
        this.winLength = dafaultParams.winLength;
    }
}