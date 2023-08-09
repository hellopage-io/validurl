# validurl

Check whether a string is a URL.

## Installation

```sh
npm install be-url
```

## API

### Usage

```
import isUrl from 'be-url'

const valid = isUrl('https://www.example.com/test.html')
```

### `isUrl(string, opt)`

Returns a Boolean indicating whether `string` is a URL.

### opt

Example: consider example.com as invalid url
```
{
  exclude: {
    domain: 'example.com',
  }
}
```

Example: consider undefined in path as invalid url
```
{
  exclude: {
    path: 'undefined',
  }
}
```

## License

MIT

## Credit to is-url
This library is inspired by is-url, but with more options, please refer to is-url at https://github.com/segmentio/is-url
