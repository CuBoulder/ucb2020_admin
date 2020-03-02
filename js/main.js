/**
 * Created by jsparks on 12/7/16.
 */
jQuery(document).ready(function () {
  // hide the sidebar initially
  jQuery('.layout-region-node-secondary').toggleClass('hidden');
  jQuery('.layout-region-node-main').toggleClass('full-width');

  jQuery('#ucb-editor-toggle').click(function (e) {
    e.preventDefault();

    jQuery('i.ucb-fa-toggle').toggleClass('fa-toggle-off');
    jQuery('i.ucb-fa-toggle').toggleClass('fa-toggle-on');

    jQuery('.layout-region-node-secondary').toggleClass('hidden');
    jQuery('.layout-region-node-main').toggleClass('full-width');

  });

});
