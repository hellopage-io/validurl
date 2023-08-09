import isUrl from '../index'

describe('valid url test', () => {
  it('https://www.hellopage.io/test.png is valid url', () => {
    const url = 'https://www.hellopage.io/test.png'
    const valid = isUrl(url)
    expect(valid).toEqual(true)
  })

  it('https://www.hellopage.io is valid url', () => {
    const url = 'https://www.hellopage.io'
    const valid = isUrl(url)
    expect(valid).toEqual(true)
  })

  it('https://undefined/test.png is not valid url', () => {
    const url = 'https://undefined/test.png'
    const valid = isUrl(url)
    expect(valid).toEqual(false)
  })

  it('https://www.hellopage.io/undefined/test.png is valid url', () => {
    const url = 'https://undefined/test.png'
    const valid = isUrl(url)
    expect(valid).toEqual(false)
  })

  it('https://www.hellopage.io/undefined/test.png is not valid url with undefined exclude opt', () => {
    const url = 'https://undefined/test.png'
    const valid = isUrl(url, { exclude: { path: ['undefined'] } })
    expect(valid).toEqual(false)
  })
})
