'use strict';

/**
 *  event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const qs = require('qs');

module.exports = createCoreController('api::event.event', ({strapi}) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const query = {
            populate: '*'
        };
        const entity = await strapi.entityService.findOne('api::event.event', id, query);
        const sanitizedE = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedE);
    }
}));
