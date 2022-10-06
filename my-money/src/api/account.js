export class Account {
    endpoint = "http://127.0.0.1:8000/api/accounts";

    async obtain(){
        const response = await fetch(this.endpoint);
        const result = await response.json();
        return result;
    }
}