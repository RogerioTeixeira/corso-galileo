import { Invoice } from './invoice.model';

export class Customer {
    public id: number;
    public name: string;
    public urlLogo: string;
    public codeIva: number;
    public country: string
    public city: string
    public address: string
    public invoices: Invoice[];

    constructor(value?: Customer) {
        if (value) {
            Object.assign(this, value);
        } else {
            this.name = null;
            this.urlLogo = null;
            this.codeIva = null;
            this.country = null;
            this.city = null;
            this.address = null;
            this.invoices = null;
        }
    }

}