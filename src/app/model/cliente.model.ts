export class Cliente {
    public denominazione: String;
    public urlLogo: String;
    public pIva: number;
    public totaleFattura: number;
    public numeroFatture: number;

    constructor(denominazione: String, urlLogo: string, pIva: number, totaleFatture?: number, numeroFatture?: number) {
        this.denominazione = denominazione;
        this.urlLogo = urlLogo;
        this.pIva = pIva;
        this.totaleFattura = totaleFatture || 0;
        this.numeroFatture = numeroFatture || 0;
    }

}