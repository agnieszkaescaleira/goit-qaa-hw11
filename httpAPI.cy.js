describe('HTTPBin API Tests', () => {
    const baseUrl = 'https://httpbin.org';

    it('GET request', () => {
        cy.request('GET', `${baseUrl}/get`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('url', `${baseUrl}/get`);
        });
    });

    it('POST request', () => {
        cy.request('POST', `${baseUrl}/post`, { key: 'value' }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.include('key');
            expect(response.body.data).to.include('value');
        });
    });

    it('PUT request', () => {
        cy.request('PUT', `${baseUrl}/put`, { key: 'value' }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.include('key');
            expect(response.body.data).to.include('value');
        });
    });

    it('DELETE request', () => {
        cy.request('DELETE', `${baseUrl}/delete`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('url', `${baseUrl}/delete`);
        });
    });

    it('Sending standard headers', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/headers`,
            headers: {
                'User-Agent': 'CypressTestAgent'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.headers['User-Agent']).to.eq('CypressTestAgent');
        });
    });

    it('Sending custom headers', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/headers`,
            headers: {
                'X-Custom-Header': 'CustomValue'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.headers['X-Custom-Header']).to.eq('CustomValue');
        });
    });

    it('Sending query parameters', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/get`,
            qs: {
                param1: 'value1',
                param2: 'value2'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args.param1).to.eq('value1');
            expect(response.body.args.param2).to.eq('value2');
        });
    });

    it('Sending random query parameters', () => {
        const randomValue = Math.random().toString(36).substring(7);
        cy.request({
            method: 'GET',
            url: `${baseUrl}/get`,
            qs: {
                random: randomValue
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args.random).to.eq(randomValue);
        });
    });

    it('Checking response body content', () => {
        cy.request('GET', `${baseUrl}/json`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('slideshow');
        });
    });

    it('Checking request duration', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/delay/1`,
            timeout: 5000
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.lessThan(5000);
        });
    });
});