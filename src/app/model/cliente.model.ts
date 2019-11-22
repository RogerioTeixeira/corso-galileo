export class Cliente {
    public denominazione: String;
    public urlLogo: String;
    public pIva: number;
    public totaleFatture: number;
    public numeroFatture: number;

    constructor(denominazione: String,
        urlLogo: String,
        pIva: number,
        totaleFatture?: number,
        numeroFatture?: number) {
        this.denominazione = denominazione;
        this.urlLogo = urlLogo;
        this.pIva = pIva;
        this.totaleFatture = totaleFatture || 0;
        this.numeroFatture = numeroFatture || 0;
    }

}