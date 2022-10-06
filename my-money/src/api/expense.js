export class Expense {
    endpoint = "";

    async obtain(){
        const response = await fetch(this.endpoint);
        const result = await response.json();
        return result;
    }
}