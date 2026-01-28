---
layout: default
---

# Community Events Calendar

{% assign events_keys = site.data.events | sort_natural %}
{% assign current_month = "" %}

{% for key in events_keys %}
  {% if key != "event-template" %}
    {% assign event = site.data.events[key] %}

    {% comment %}
    Convert event.date to "Month Year" for grouping
    {% endcomment %}
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
