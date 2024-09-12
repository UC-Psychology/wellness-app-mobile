# September 12, 2024

## Meeting Notes

### Money

#### IRB
We got the CAP protocol for filing IRBs.

It's easier to get added to an existing IRB than to get a new one.

Trent will check with Patrick if Jacquana can get added to his IRB. 
    - It wouldn't cover it now, but he could potentially add it if it's a small modification.
    - May need an overhaul depending on the target population (Patrick's may be student focused, women around childbirth would be different)

IRB application is in some ways just a literature review of similar things.

#### Grant
Jacquana found a grant (~20,000) that potentially applies, intersection of physical and mental health, environment, etc.

### Development

#### Database
Can requisition a SQL database through UC for pretty cheap (~$5-10).
- Might be better for the IRB

We have a basic schema setup, this is still very much open to change depending on study structure.

```
{
    "UserID": 3489753491,
    "How are you feeling?": "Sad",
    "Body": {
      "Head": {
        "Head": "Neutral"
      },
      "Torso": {
        "Chest": "Sad"
      }
    },
    "Picture": "1010111111001010010101001….0100101010" (potentially a link),
    "Anything else?": "Feeling bad :(",
    "Geolocation": "-43903, 45091",
    "Time stamp": 43905340984342342
}
```

Potential additions:
- Location characteristics
    - what's the easiest way to get a useful description of this?
    - Maybe temperature - what is your comfort level in this temperature?
        - Are they inside or outside might matter?
- What activity are they doing in that place?

Trent says what remember to keep it short
- Passive data is good, doesn't require input from the user
    - For example, with geolocation and time we may be able to figure out the weather in that place
- The more active information we require from the user, the less likely they are to fill it out.