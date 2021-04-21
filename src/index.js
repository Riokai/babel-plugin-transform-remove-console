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
        const leadingComments = path.parent.leadingComments || []
        const removeConsoleDisable = leadingComments.find(item => item.value.trim()=== 'remove--console-disable' )
        if(removeConsoleDisable) {
          return
        }
        if (calleePath.matchesPattern("console", true)) {
          path.remove()
        }
      },
    },
  };
};
