/* Remove the ability to delete profiles
 * This plugin is ideal for ones who tend to delete
 * things by accident.
 * 
 * This plugin will remove an optional feature from
 * SuperFly.
 * After enabling you will no longer see a
 * "Delte Profile" button
 */

$(document).ready(function() {
    $("#delete-profile").remove();
});
