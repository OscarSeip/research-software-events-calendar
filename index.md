---
layout: default
---

# Community Events Calendar

{% assign events = site.data.events | where_exp: "item", "item[0] != 'event-template'" %}
{% assign sorted_events = events | sort: "1.date" %}

{% assign current_month = "" %}

{% for item in sorted_events %}
  {% assign filename = item[0] %}
  {% assign event = item[1] %}

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
{% endfor %}
