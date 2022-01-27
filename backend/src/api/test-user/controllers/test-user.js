'use strict';

/**
 *  test-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-user.test-user');
