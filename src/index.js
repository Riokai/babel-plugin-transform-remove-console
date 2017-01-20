"use strict";

const isArray = require('../lib/isArray')

module.exports = function() {
  return {
    name: "transform-remove-console-enhance",
    visitor: {
      CallExpression(path, { opts }) {
        const calleePath = path.get("callee")

        if (opts && isArray(opts.exclude)) {
          const hasTarget = opts.exclude.some(type => {
            return calleePath.matchesPattern("console." + type)
          })

          if (hasTarget) return
        }

        if (calleePath.matchesPattern("console", true)) {
          path.remove()
        }
      },
    },
  };
};
