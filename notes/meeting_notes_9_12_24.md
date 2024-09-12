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

#### Frontend
Do we want to use development dollars on clickable interface? Or simple nested dropdowns?
Either is doable, and would have the same output data.

Maybe an open response is preferable then?

#### Survey changes

Potential additions:
- Location characteristics
    - what's the easiest way to get a useful description of this?
    - Maybe temperature - what is your comfort level in this temperature?
        - Are they inside or outside might matter?
    - Materials, elements
        - surrounded by wood, metal, plastic, plants, etc.
        - icons for button options
    - Lighting conditions
    - For temperature, materials, lighting conditions
        - Either have a slider (continuous or discrete) or buttons
            - Leaning towards continuous slider, or 10 + options
        - Potentially buttons for materials and lighting conditions
- What activity are they doing in that place?
    - Click within different activities
    - Working, transit, exercise, etc...
    - Are you able to do your intended activity in this place?

Potential deletions:
- May not need to mess with complexity of pictures
- May change body data into something simpler than clicking on the image
    - Free form text
    - Nested drop downs

Trent says what remember to keep it short
- Passive data is good, doesn't require input from the user
    - For example, with geolocation and time we may be able to figure out the weather in that place
- The more active information we require from the user, the less likely they are to fill it out.

## TODOs:

### Semester goal
Pilot app deployed with SQL database hosted at UC
Have database accessible to Jacquana, students, etc. (don't have technical side be a road block)

### Next steps
All:
Meet back in ~2 weeks (late September, early October)

Jacquana:
Figure out survey questions
- Wording
- Desired input (slider, text, or buttons, etc.)
- What do we want to do for body 

Write the IRB, grant, MQEs, live life...
- prioritize where you see fit
- everything is growing together and exciting :)


Trent:
Get database setup
- Figure out if it costs anything to let it sit idle


Philip:
front end <-> backend <-> database connection

Work on logging in infrastructure 
- Make sure we're handling accounts, passwords, sensitive data properly
- Good for the IRB, good for cyber security
- Keep notes towards a 1 page app security note

Hold off on working on survey page until hearing back about specifics of question type and desired input

Get geolocation

Overall, build the infrastructure, so it's fast for Trent to go in and change things