class ExtendedClock extends Clock {
    constructor(param) {
        super(param);
        let { precision = 1000 } = param;
        this.precision = precision;
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};
