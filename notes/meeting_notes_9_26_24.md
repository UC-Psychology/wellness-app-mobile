# September 26, 2024

## Meeting Notes

### Since last meeting:
**Trent:**

**Philip:**
Found the react native geolocation api, but need to get permissions.
This bubbles building the app closer to the top of the priority list.

**Jacquana:**
Has a draft of the suvery page made.

### During meeting:
Overall:
Each box is a page, can't necessarily go back
- Jacquana wants first instant response, no overthinking
*Body:*
- Jacquana thinks the touchable body parts in survey is important
- Philip gave this a first try and couldn't get it working, but it's likely possible
- Jacquana thinks the input being tied to the body is important

*Location Characteristics:*
- Selection, vs. free text input
- Jacquana wants the user to have examples guiding to the right answer (priming)
    - For example, we don't want to infer someone is at a specific business, if they're actually on the bus driving past it
    - Trent says we could potentially get a geolocation when survey is opened, and another when its submitted, so we can see if they're on the move
*Temperature:* 
- sliders - do we want them to be able to go bac

*Materials:*

*Activity:*

*Limitations:*


Jacquana is wondering about:
- the size of the space?
    - small vs. large space?
    - could be a slider question
- Who are you in the space with/with who?
    - could be open ended

### TODOs:
General:
check back in in 2 weeks

**Trent:**

**Philip:**
Figure out permissions for geolocation
- look into general build steps, cocoapods, etc.
Try to get the clickable sillhouette working
Transition single survey page -> multi page survey

*Rollover from last meeting:*
front end <-> backend <-> database connection

Work on logging in infrastructure 
- Make sure we're handling accounts, passwords, sensitive data properly
- Good for the IRB, good for cyber security
- Keep notes towards a 1 page app security note

Overall, build the infrastructure, so it's fast for Trent to go in and change things

**Jacquana:**
Look into the methodological importance of touching the right part of the body
Will send Philip the survey markup