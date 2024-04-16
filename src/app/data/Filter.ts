export abstract class Filter {
    red: number;
    green: number;
    blue: number;
<<<<<<< HEAD

    constructor(){
=======
    
    constructor() {
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }

<<<<<<< HEAD
    abstract calc(red: number, green: number, blue: number) : void;
}

=======
    abstract calc(red: number, green: number, blue:number): void;
}

export class FazNadaFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}


>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
export class GreenFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
        this.red = 0;
        this.green = green;
        this.blue = 0;
    }
}

<<<<<<< HEAD
export class RedFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
        this.red = red;
        this.green = 0;
        this.blue = 0;
    }
}

=======
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
export class BlueFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
        this.red = 0;
        this.green = 0;
        this.blue = blue;
    }
}

<<<<<<< HEAD
    export class GrayFilter extends Filter {
        calc(red: number, green: number, blue: number): void {
            const gray = (red + green + blue)/3;
            this.red = gray;
            this.green = gray;
            this.blue = gray;
        }
}

export const filters: Filter[] = [
=======
export class RedFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
        this.red = 0;
        this.green = 0;
        this.blue = blue;
    }
}

export class GrayFilter extends Filter {
    calc(red: number, green: number, blue: number): void {
        const gray = (red + green + blue)/3;
        this.red = gray;
        this.green = gray;
        this.blue = gray;
    }
}

export const filters: Filter[] = [
    new FazNadaFilter(),
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
    new GreenFilter(),
    new BlueFilter(),
    new RedFilter(),
    new GrayFilter()
]