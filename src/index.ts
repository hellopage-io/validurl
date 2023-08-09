type optionType = {
  exclude?: {
    domain?: string | string[]
    path?: string | string[]
  }
}

function excludeOption(str: string, option: string | string[] | undefined): boolean {
  if (!option) {
    return true
  }

  if (typeof option === 'string') {
    if (str.includes(option)) {
      return false
    }
  } else {
    option.forEach((item) => {
      if (str.includes(item)) {
        return false
      }
    })
  }

  return true
}

export default function isUrl(url: string, opt?: optionType) {
  const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/

  const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/
  const nonLocalhostDomainRE = /(^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6})(\S*)$/

  const match = url.match(protocolAndDomainRE)
  if (!match) {
    return false
  }

  const everythingAfterProtocol = match[1]
  if (!everythingAfterProtocol) {
    return false
  }

  if (localhostDomainRE.test(everythingAfterProtocol)) {
    return true
  }

  const matchDomain = everythingAfterProtocol.match(nonLocalhostDomainRE)
  if (!matchDomain) {
    return false
  }

  const domain = matchDomain[1]
  if (!excludeOption(domain, opt?.exclude?.domain)) {
    return false
  }

  const path = matchDomain[3]
  return excludeOption(path, opt?.exclude?.path)
}
