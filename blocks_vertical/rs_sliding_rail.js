'use strict';

goog.provide('Blockly.Blocks.rs_sliding_rail');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_SLIDING_RAIL_SET_ACCELERATION'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SLIDING_RAIL_SET_ACCELERATION,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        }
      ],
      "category": Blockly.Categories.rs_sliding_rail,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_sliding_rail.primary,
      "colourSecondary": Blockly.Colours.rs_sliding_rail.secondary,
      "colourTertiary": Blockly.Colours.rs_sliding_rail.tertiary
    });
  }
};

Blockly.Blocks['RS_SLIDING_RAIL_MOVE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SLIDING_RAIL_MOVE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_FORWARD, 'forward'],
            [Blockly.Msg.RS_OPTION_BACKWARD, 'backward'],
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        },
        {
          "type": "input_value",
          "name": "VALUE3"
        }
      ],
      "category": Blockly.Categories.rs_sliding_rail,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_sliding_rail.primary,
      "colourSecondary": Blockly.Colours.rs_sliding_rail.secondary,
      "colourTertiary": Blockly.Colours.rs_sliding_rail.tertiary
    });
  }
};

Blockly.Blocks['RS_SLIDING_RAIL_MOVE_TO_ORIGIN'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SLIDING_RAIL_MOVE_TO_ORIGIN,
      "category": Blockly.Categories.rs_sliding_rail,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_sliding_rail.primary,
      "colourSecondary": Blockly.Colours.rs_sliding_rail.secondary,
      "colourTertiary": Blockly.Colours.rs_sliding_rail.tertiary
    });
  }
};

Blockly.Blocks['RS_SLIDING_RAIL_STOP'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SLIDING_RAIL_STOP,
      "category": Blockly.Categories.rs_sliding_rail,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_sliding_rail.primary,
      "colourSecondary": Blockly.Colours.rs_sliding_rail.secondary,
      "colourTertiary": Blockly.Colours.rs_sliding_rail.tertiary
    });
  }
};
