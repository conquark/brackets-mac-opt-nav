/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus");


    // Unbind keys
    KeyBindingManager.removeBinding('Opt-Tab');
    KeyBindingManager.removeBinding('Shift-Opt-Tab');

    // Rebind to the command executed with Ctrl+PageUp/PageDown
    KeyBindingManager.addBinding(Commands.NAVIGATE_NEXT_DOC, 'Opt-Tab');
    KeyBindingManager.addBinding(Commands.NAVIGATE_PREV_DOC, 'Shift-Opt-Tab');

    // We could also add a key binding at the same time:
    //menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-W");
    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
});