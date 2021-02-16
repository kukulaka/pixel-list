class sessionApi {
    getCurrentNames() {
        const dataUrl = `${process.env.REACT_APP_API_URL}`;
        return fetch(dataUrl, {
                headers: this.headers,
            })
            .then(response => this.handleResponse(response))
            .then(response => response)
            .catch(error => error);
    }

    handleResponse = res => res.ok ? res.json() : res;
}

export default new sessionApi();