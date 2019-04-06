'use strict';

/**
 * Servicios.js controller
 *
 * @description: A set of functions called "actions" for managing `Servicios`.
 */

module.exports = {

  /**
   * Retrieve servicios records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.servicios.search(ctx.query);
    } else {
      return strapi.services.servicios.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a servicios record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.servicios.fetch(ctx.params);
  },

  /**
   * Count servicios records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.servicios.count(ctx.query);
  },

  /**
   * Create a/an servicios record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.servicios.add(ctx.request.body);
  },

  /**
   * Update a/an servicios record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.servicios.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an servicios record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.servicios.remove(ctx.params);
  }
};
