---
layout: default
---

# Community Events Calendar

{% assign sorted_events = site.data.events | sort %}
{% assign events_by_month = "" | split: "" %}
{% assign current_month = "" %}

{% for item in sorted_events %}
{% assign filename = item[0] %}
{% assign event = item[1] %}

{% if filename != "event-template" %}

{% assign event_date = event.date | date: "%Y-%m" %}
{% assign month_name = event.date | date: "%B %Y" %}

{% if event_date != current_month %}
{% assign current_month = event_date %}

## {{ month_name }}

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
