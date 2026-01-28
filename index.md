---
layout: default
---

# Community Events Calendar

{% assign events_keys = site.data.events | sort %}
{% assign current_month = "" %}

{% for filename in events_keys %}
  {% if filename != "event-template" %}
    {% assign event = site.data.events[filename] %}

    {% assign event_month = event.date | date: "%B %Y" %}

    {% if event_month != current_month %}
## {{ event_month }}

    {% assign current_month = event_month %}
    {% endif %}

### {{ event.title }}

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
