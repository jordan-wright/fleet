module.exports = {


  friendlyName: 'View fleet mdm',


  description: 'Display "Fleet mdm" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fleet-mdm'
    },
    badConfig: { responseType: 'badConfig' },
  },


  fn: async function () {
    if (!_.isObject(sails.config.builtStaticContent) || !_.isArray(sails.config.builtStaticContent.testimonials) || !sails.config.builtStaticContent.compiledPagePartialsAppPath) {
      throw {badConfig: 'builtStaticContent.testimonials'};
    }
    // Get testimonials for the <scrolalble-tweets> component.
    let testimonialsForScrollableTweets = sails.config.builtStaticContent.testimonials;
    // Respond with view.
    return {
      testimonialsForScrollableTweets,
    };

  }


};
