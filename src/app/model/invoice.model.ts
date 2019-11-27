export class Invoice {
    public id: number;
    public netAmount: number;
    public ivaAmount: number;
    public customerId: number;
    public year: number;
    public month: number;
    constructor(value?: Invoice) {
        if (value) {
            Object.assign(this, value);
        } else {
            this.id = null;
            this.netAmount = null;
            this.ivaAmount = null;
            this.customerId = null;
            this.year = null;
            this.month = null;
        }
    }
}