"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUrl(url, opt) {
    var _a, _b;
    var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
    var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
    var nonLocalhostDomainRE = /(^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6})(\S*)$/;
    var match = url.match(protocolAndDomainRE);
    if (!match) {
        return false;
    }
    var everythingAfterProtocol = match[1];
    if (!everythingAfterProtocol) {
        return false;
    }
    if (localhostDomainRE.test(everythingAfterProtocol)) {
        return true;
    }
    var matchDomain = everythingAfterProtocol.match(nonLocalhostDomainRE);
    if (!matchDomain) {
        return false;
    }
    var domain = matchDomain[1];
    if ((_a = opt === null || opt === void 0 ? void 0 : opt.exclude) === null || _a === void 0 ? void 0 : _a.domain) {
        if (typeof opt.exclude.domain === 'string') {
            if (domain.includes(opt.exclude.domain)) {
                return false;
            }
        }
        else {
            opt.exclude.domain.forEach(function (item) {
                if (domain.includes(item)) {
                    return false;
                }
            });
        }
    }
    var path = matchDomain[3];
    if (path && ((_b = opt === null || opt === void 0 ? void 0 : opt.exclude) === null || _b === void 0 ? void 0 : _b.path)) {
        if (typeof opt.exclude.path === 'string') {
            if (path.includes(opt.exclude.path)) {
                return false;
            }
        }
        else {
            opt.exclude.path.forEach(function (item) {
                if (path.includes(item)) {
                    return false;
                }
            });
        }
    }
    return true;
}
exports.default = isUrl;
