---
layout: default
---

# Community Events Calendar

{% for item in site.data.events %}
{% assign filename = item[0] %}
{% assign event = item[1] %}

{% if filename != "event-template" %}

## {{ event.title }}

**Date:** {{ event.date }}  
**Time:** {{ event.time }} ({{ event.timezone }})  
**Organiser:** {{ event.organiser }}  
**Location:** {{ event.location }}
**Tags:** {% if event.tags %}{{ event.tags | join: ", " }}{% else %}None{% endif %}

{{ event.description }}

👉 [Sign up for this event]({{ event.signup_url }})

---

{% endif %}
{% endfor %}
