const AccessControl = require('accesscontrol');

const ac = new AccessControl();

ac.grant('user')
    .readOwn('profile')
    .updateOwn('profile')
    .deleteOwn('profile')

ac.grant('admin')
    .extend('user')
    .readAny('profile')
    .updateAny('profile')
    .deleteAny('profile');

module.exports = ac;