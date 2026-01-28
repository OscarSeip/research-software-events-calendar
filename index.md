---
layout: default
---

# Community Events Calendar

{% assign events = site.data.events | sort: "date" %}

{% for event_file in events %}
{% assign event = event_file[1] %}

## {{ event.title }}

**Date:** {{ event.date }}  
**Time:** {{ event.time }} ({{ event.timezone }})  
**Organiser:** {{ event.organiser }}  
**Location:** {{ event.location }}

{{ event.description }}

👉 [Sign up for this event]({{ event.signup_url }})

---
{% endfor %}
