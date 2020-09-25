'use strict';

goog.provide('Blockly.Blocks.rs_motion');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_MOTION_SAY_HELLO'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_SAY_HELLO,
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['RS_MOTION_MOVE_HOME'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_MOVE_HOME,
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['RS_MOTION_MOVE_ORIGIN'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_MOVE_ORIGIN,
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['RS_MOTION_MOVE_POSITION'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_MOVE_POSITION,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
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
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['RS_MOTION_MOVE_RELATIVE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_MOVE_RELATIVE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
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
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

//TODO: 增加参数，device防止的方向
Blockly.Blocks['RS_MOTION_MOVE_RECTANGLE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_MOVE_RECTANGLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_LEFT_TOP, 'left-top'],
            [Blockly.Msg.RS_OPTION_LEFT_BOTTOM, 'left-bottom'],
            [Blockly.Msg.RS_OPTION_RIGHT_TOP, 'right-top'],
            [Blockly.Msg.RS_OPTION_RIGHT_BOTTOM, 'right-bottom']
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
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

//TODO: 增加参数，device防止的方向
Blockly.Blocks['RS_MOTION_MOVE_CIRCLE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MOTION_MOVE_CIRCLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_LEFT, 'left'],
            [Blockly.Msg.RS_OPTION_RIGHT, 'right'],
            [Blockly.Msg.RS_OPTION_TOP, 'top'],
            [Blockly.Msg.RS_OPTION_BOTTOM, 'bottom']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};
