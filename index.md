---
layout: default
---

# Community Events Calendar

{% assign sorted_events = site.data.events | sort %}
{% assign current_month = "" %}

{% for item in sorted_events %}
  {% assign filename = item[0] %}
  {% assign event = item[1] %}

  {% if filename != "event-template" %}

    {% assign event_date = event.date | date: "%Y-%m" %}
    {% assign month_name = event.date | date: "%B %Y" %}

    {% if event_date != current_month %}
      {% assign current_month = event_date %}

---

## {{ month_name }}

    {% endif %}

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 15px; margin: 10px 0; background-color: #f9f9f9; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">

### {{ event.title }}

<p>
<strong>📅 Date:</strong> {{ event.date }} <br>
<strong>⏰ Time:</strong> {{ event.time }} ({{ event.timezone }}) <br>
<strong>👤 Organiser:</strong> {{ event.organiser }} <br>
<strong>📍 Location:</strong> {{ event.location }} <br>
<strong>🏷 Tags:</strong> {% if event.tags %}{{ event.tags | join: ", " }}{% else %}None{% endif %}
</p>

<p>{{ event.description | markdownify }}</p>

<p><strong>🔗 <a href="{{ event.signup_url }}">Sign up for this event</a></strong></p>

</div>

  {% endif %}
{% endfor %}
