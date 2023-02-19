export default class Token {

    private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBlZHJvIEguIEx1Y2VuYSIsImlhdCI6MTUxNjIzOTAyMn0.iZLlLc1jUJBwQuXwZBL9ug6skhVLxobipnob4mJr-Po";

    getToken(): string {
        return this.token;
    }

}