describe("BackEnd Test", () => {

    it("Requisição HTTP Get", () => {
        cy.request('https://httpbin.org/get')
        .should(function(response) {
            const {status,statusText} = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
        })
    })

    it("Requisição HTTP POST", () => {
      
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                nome: 'Samuel Luciano',
                age: '21'
            }
        }).should(function(response) {
            const {status,statusText} = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
        })
    })    

    it.only("Requisição HTTP POST 2", () => {
      
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                nome: 'Samuel Luciano',
                age: '21'
            }
        }).its('body').should('not.be.empty')
    })
})