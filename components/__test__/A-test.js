const path = require('path')
const simulate = require('miniprogram-simulate')

describe('components/A', () => {
  test('base', () => {
    const id = simulate.load(path.resolve(__dirname, '../A/a'))
    const comp = simulate.render(id)

    const parent = document.createElement('parent')
    comp.attach(parent)

    console.log('dom: ', comp.dom.innerHTML)

    // const dataView = comp.querySelector('.data')
    // expect(dataView.dom.innerHTML).toBe('data: 0')
  })
})
