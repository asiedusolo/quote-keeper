const {assert} = require('chai');


describe('User visits root', () => {
  describe('posting a quote', () => {
    it('saves quote and metadata submiited by user', () => {
      //setup
      const quote = 'Nowadays you don\'t go around on the street kicking people, punching people — because if you do (makes gun shape with hand), well that\'s it — I don\'t care how good you are'
      const attributed = 'Bruce Lee'
      const source = 'Bruce Lee interview on the Pierre Berton Show (1971)'
      //exercise
      browser.url('/')
      browser.setValue('textarea[id=quote]', quote)
      browser.setValue('input[id=attributed]', attributed)
      browser.setValue('input[id=source]', source)
      browser.click('input[type=submit]')
      //verify
      assert.include(browser.getText('#quotes'), quote)
      assert.include(browser.getText('#quotes'), attributed)
      assert.include(browser.getText('#quotes'), source)

    })
  })
})