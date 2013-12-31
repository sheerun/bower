var expect = require('expect.js');
var semver = require('../../lib/util/semver');

describe('semver', function () {
    it('ignores prerelease versions if strictMatch is on', function () {
        var version = semver.maxSatisfying(['1.2.0', '1.2.1-build-1234+meta-2'], '1.2.*', true);
        expect(version).to.be('1.2.0');
    });

    it('allows prerelease versions if strictMatch is on and no other choice', function () {
        var version = semver.maxSatisfying(['1.2.0-build-1234', '1.2.1-build-1234+meta-2'], '1.2.*', true);
        expect(version).to.be('1.2.1-build-1234+meta-2');
    });

    it('does not ignore prerelease versions if strictMatch is off', function () {
        var version = semver.maxSatisfying(['1.2.0', '1.2.1-build-1234+meta-2'], '1.2.*', false);
        expect(version).to.be('1.2.1-build-1234+meta-2');
    });
});
