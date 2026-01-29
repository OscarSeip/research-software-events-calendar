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

<div style="border-bottom: 1px solid #eee; padding: 10px 0;">

<strong>{{ event.title }}</strong><br>

<span style="font-size: 0.85em; color: #666;">
  📅 {{ event.date }} • ⏰ {{ event.time }} {{ event.timezone }} • 📍 {{ event.location }}
</span>

<span style="float: right;">
  <a href="{{ event.signup_url }}">Sign up →</a>
</span>

</div>

  {% endif %}
{% endfor %}
