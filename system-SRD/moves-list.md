{
  "basic_moves": {
    "action_roll": {
      "description": "When your character wants to undertake a challenging (not impossible) action that has narrative consequences, the GM will call for you to make an Action roll.",
      "mechanics": "Before you roll, you can discuss with the GM if your character's Experience can apply to your Action roll. Then, roll 2d6 and calculate the Difference between dice values to determine the degree of success. The smaller the Difference, the better.",
      "outcomes": {
        "0": "⚀⚀ – Full success, +1 Hope/Courage, +1 Sync, take another turn or spotlight an ally",
        "1": "⚀⚁ – Mixed success, +1 Sync",
        "2": "⚀⚂ – Fail forwards, (GM) +1 Hazard",
        "3-4": "⚀⚄ – Fail, (GM) +1 Hazard",
        "5": "⚀⚅ – Fail, (GM) +2 Hazard"
      }
    },
    "reaction_roll": {
      "description": "You make a Reaction roll in response to certain triggers, like when your character's resolve is tested (see Test Resolve under Virtue and Torment).",
      "mechanics": "To resolve a Reaction roll, follow the same steps for an Action roll and calculate the Difference. The possible outcomes of a Reaction roll is determined by its trigger."
    },
    "group_roll": {
      "description": "The leader for the Group roll makes an Action roll, while everybody else makes a Reaction roll; the majority result will be the ultimate result of the Group roll.",
      "mechanics": "In the case of a tie, take the worse result. If the leader of the Group roll is using an Experience, he can use it to improve the result of the other players' Reaction rolls (once for each player).",
      "outcomes": {
        "0": "⚀⚀ – Full success",
        "1": "⚀⚁ – Mixed success",
        "2": "⚀⚂ – Fail forwards",
        "3-5": "⚅ – Fail"
      }
    }
  },
  "virtue_and_torment": {
    "test_resolve": {
      "description": "When you Test Resolve, make a Reaction roll.",
      "outcomes": {
        "0-1": "Become Virtuous",
        "2+": "Become Tormented"
      }
    },
    "virtue": {
      "description": "The following are in effect whenever you receive your Virtue Condition",
      "hope_virtue": {
        "name": "Stalwart [HOPE]",
        "effect": "Whenever you make an Action roll in line with your Virtue, +1 Hope. If your Hope Slots are already full, give +1 Hope to an ally."
      },
      "courage_virtue": {
        "effect": "Whenever you make an Action roll in line with your Virtue, +1 Courage. If your Courage Slots are already full, give +1 Courage to an ally."
      },
      "clearing": "Clear Virtuous at the end of rest or during travel."
    },
    "torment": {
      "description": "The following are in effect whenever you receive your Torment Condition",
      "hope_torment": {
        "effect": "You cannot gain Hope. Whenever you make an Action roll in accordance with your Torment, you may Test Resolve again."
      },
      "courage_torment": {
        "effect": "You cannot gain Courage. Whenever you make an Action roll in accordance with your Torment, you may Test Resolve again."
      },
      "clearing": "Clear Tormented at the end of rest or during travel."
    }
  },
  "sync_moves": {
    "gain_sync": "Gain 1 Sync whenever you succeed (Difference 0-1) on an Action roll.",
    "help": {
      "cost": "2 Sync",
      "description": "When an ally makes an Action roll, you can use this move to roll an additional d6. You must substitute one of their Action roll dice with it"
    },
    "practiced_defence": {
      "cost": "2 Sync",
      "description": "During an Adversary roll (against you or an ally), you may invoke a relevant practiced Experience to negate one adversary dice that matches the dice value of the Experience in order to negate the hit."
    },
    "try_something_else": {
      "cost": "2 Sync",
      "description": "When you get anything less than a full success on an Action or Reaction roll using an Experience, you can use a different practiced Experience instead in order to get a better result."
    },
    "ill_take_over": {
      "cost": "3 Sync",
      "description": "Take over as leader of a Group roll before the final results are resolved."
    },
    "tag_team": {
      "cost": "5 Sync split between players, once per session",
      "description": "On your own turn, you may start a Tag Team with an ally. Roll 4d6 together and select two dice to use for a shared Action roll. Apply the result twice (once for each player)."
    },
    "not_done_yet": {
      "cost": "10 Sync split between players",
      "description": "When an ally has no Hope or Courage left, you can initiate this move. Divide 8 Hope and 8 Courage between all players involved."
    }
  },
  "growth_moves": {
    "gain_growth": "Use Growth to 'level up' during play. Gain 1 Growth whenever the following occurs: Start of each session, Adding a new Necessity with Upkeep 1, Fulfilling a Necessity (Collect 10).",
    "heart_of_hope": {
      "cost": "1 Growth",
      "description": "When an Adversary roll hits your Hope, unlock a Hope slot permanently and gain 1 Hope in order to turn the hit into a miss."
    },
    "courageous_spirit": {
      "cost": "1 Growth",
      "description": "When an Adversary hits your Courage, unlock a Courage slot permanently and gain 1 Courage in order to turn the hit into a miss."
    },
    "better_under_pressure": {
      "cost": "1 Growth",
      "description": "When you get anything less than a full success on an Action or Reaction roll using a learned Experience, permanently upgrade the Experience from learned to practiced in order to get a better result."
    },
    "figured_you_out": {
      "cost": "1 Growth",
      "description": "When an Adversary roll hits you, permanently upgrade an Experience from learned to practiced and use it to negate damage immediately."
    }
  },
  "rest_moves": {
    "short_rest": {
      "description": "Perform Short Rest Moves (up to once each) whenever you take a breather (10-30 minutes). You may choose to do so alone or Together (effects apply to every player involved). At the end of the short rest, the GM gains 2 Hazard.",
      "moves": {
        "double_check": "+1 Courage. Together: +2 Courage instead.",
        "recall_objective": "+1 Hope. Together: +2 Hope instead."
      }
    },
    "long_rest": {
      "description": "Perform Long Rest Moves (up to once each) whenever you settle down for 8 hours or more. You may choose to do so alone or Together (effects apply to every player involved). At the end of the long rest, the GM gains Hazard equal to 2 + number of players.",
      "moves": {
        "feast": "+1 Hope, +1 Courage, Upkeep Food and Water. Together: Additional +1 Hope and +1 Courage.",
        "spare_time": {
          "description": "Choose one:",
          "options": {
            "explore_vicinity": "Look for an opportunity nearby. Together: Additional +1 Hope/Courage.",
            "extra_preparations": "+2 Courage. Together: +3 Courage instead.",
            "self_expression": "+2 Hope. Together: +3 Hope instead.",
            "sleep": "You MUST sleep. Comfortable sleep: +1 Hope, +1 Courage. Refuse Sleep, -1 Hope, -1 Courage."
          }
        }
      }
    },
    "support_moves": {
      "description": "Support moves are available to you whenever you share a moment with allies while doing a Rest move Together. You may use each of these moves once per rest.",
      "inspire": {
        "description": "Choose one: +1 Hope for allies if you are Virtuous (HOPE) OR have 4 or more Hope. +1 Courage for allies if you are Virtuous (COURAGE) OR have 4 or more Courage. In a single session of rest, an ally can only gain 1 Hope and 1 Courage from Inspire."
      },
      "empathise": "Pool and redistribute Hope and Courage (separately)."
    }
  },
  "intermission_moves": {
    "description": "Intermission happens between sessions, during which you may perform one Intermission move.",
    "flashback": "Discuss with the GM to write down a new learned Experience in an empty slot in order to expand on character background or foreshadow character development.",
    "reflect": "Swap around your Experiences.",
    "extended_downtime": {
      "description": "When your character has at least a few days of downtime, you can use this move. Choose two:",
      "options": {
        "procure_supplies": "Choose a starting pack of chits and necessities (see Character Creation).",
        "take_on_responsibility": "Add a new Necessity at Collect 10.",
        "investigate_and_explore": "Glean new information about your next venture."
      },
      "effect": "At the end of downtime, everyone's Hope and Courage are reset to half of their total Hope/Courage slots, and the GM gains +1 Hazard per player."
    }
  }
}