type optionType = {
  exclude?: {
    domain?: string | string[]
    path?: string | string[]
  }
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
  if (opt?.exclude?.domain) {
    if (typeof opt.exclude.domain === 'string') {
      if (domain.includes(opt.exclude.domain)) {
        return false
      }
    } else {
      opt.exclude.domain.forEach((item) => {
        if (domain.includes(item)) {
          return false
        }
      })
    }
  }

  const path = matchDomain[3]
  if (path && opt?.exclude?.path) {
    if (typeof opt.exclude.path === 'string') {
      if (path.includes(opt.exclude.path)) {
        return false
      }
    } else {
      opt.exclude.path.forEach((item) => {
        if (path.includes(item)) {
          return false
        }
      })
    }
  }

  return true
}
