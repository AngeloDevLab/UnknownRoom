let scenarios =
    [
        {
            "scenarioName": "Unknown Room",
            "scenarioDescription": "a simple scenario to test gameplay",
            "startRoom": "room1",

            "introText": "You wake up in a dark room. You can't remember how you got here. In front of you is a door. Beside you stands a desk with a note on it and three drawers. A picture hangs on the wall. What do you do",

            "rooms": {
                "room1": {
                    "name": "Unknown Room",
                    "description": "In front of you is a door. Beside you stands a desk with a note on it and three drawers. A picture hangs on the wall. What do you do",
                    "objects": ["desk", "picture", "door", "safe"]
                }
            },

            "objects": {
                "desk": {
                    "type": "container",
                    "interactions": {
                        "open drawer 1": {
                            "text": "You open the first drawer. It's empty."
                        },
                        "open drawer 2": {
                            "text": "You open the second drawer. Inside, you find another note. The note reads: Inside this room is a hidden safe. The code to open it is: 3-1-4-? Find the safe and the missing number to escape!"
                        },
                        "open drawer 3": {
                            "condition": "hasDrawerKey",
                            "successText": "You unlock the drawer. Inside you find a Key. Look's like the key to open the door.",
                            "failText": "You cant open the third drawer.It's locked.",
                            "effects": {
                                "setFlag": "hasDoorKey"
                            }
                        }
                    }
                },

                "picture": {
                    "interactions": {
                        "look": {
                            "text": "You look at the picture. It's a painting of a landscape with a river and mountains. There are four birds flying in the sky. The painting looks slightly crooked. You notice scratch marks behind the frame.",
                            "unlocks": ["move picture"]
                        },
                        "move picture": {
                            "text": "You move the picture aside. Behind it, hidden in the wall, is a small safe. A numeric keypad blinks faintly."
                        }
                    }
                },

                "safe": {
                    "interactions": {
                        "enter code": {
                            "type": "code",
                            "correctCode": "3144",
                            "successText": "The safe clicks open. Inside u find a key. It looks like a key for the locked drawer",
                            "failText": "Nothing happens.",
                            "effects": {
                                "setFlag": "hasDrawerKey"
                            }
                        }
                    }
                },

                "door": {
                    "locked": true,
                    "interactions": {
                        "open": {
                            "condition": "hasDoorKey",
                            "successText": "You escaped the room. You won. Congratulations!",
                            "failText": "The door is locked."
                        }
                    }
                }
            },

            "flags": {
                "hasDrawerKey": false,
                "hasDoorKey": false
            }
        },

        {
            "scenarioName": "Office Room",
            "scenarioDescription": "another simple scenario to test more advanced gameplay functions",
            "startRoom": "room1",

            "rooms": {
                "room1": {
                    "name": "Office Room",
                    "description": "",
                    "objects": ["desk", "computer", "door"]
                }
            },
        },

        {
            "scenarioName": "Double Room",
            "scenarioDescription": "a simple scenario to test gameplay with multiple rooms",
            "startRoom": "room1",

            "rooms": {
                "room1": {
                    "name": "Unknown Room",
                    "description": "",
                    "objects": ["desk", "picture", "door", "safe"]
                },
                "room2": {
                    "name": "Unknown Room",
                    "description": "",
                    "objects": ["desk", "picture", "door", "safe"]
                }
            },
        },

        {
            "scenarioName": "Test Room 1",
            "scenarioDescription": "a simple scenario to test extremely long screen texts to descripe the scenario to test, to test, to test and to test",
            "startRoom": "room1",

            "rooms": {
                "room1": {
                    "name": "Unknown Room",
                    "description": "",
                    "objects": ["desk", "picture", "door", "safe"]
                },
                "room2": {
                    "name": "Unknown Room",
                    "description": "",
                    "objects": ["desk", "picture", "door", "safe"]
                }
            },
        },

        {
            "scenarioName": "Test Room 2",
            "scenarioDescription": "a simple scenario to test gameplay with multiple rooms",
            "startRoom": "room1",

            "rooms": {
                "room1": {
                    "name": "Unknown Room",
                    "description": "",
                    "objects": ["desk", "picture", "door", "safe"]
                },
                "room2": {
                    "name": "Unknown Room",
                    "description": "",
                    "objects": ["desk", "picture", "door", "safe"]
                }
            },
        }
    ]
