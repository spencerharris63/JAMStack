---
layout: layout.html
pageTitle: New York Today
tags: page
navTitle: Home
---

## Articles

{% for page in collections.page %}
<h2><a href="{{ page.url }}">{{ page.data.pageTitle | upcase }}</a></h2>
<em>{{ page.date | date: "%Y-%m-%d" }}</em>
{% endfor %}