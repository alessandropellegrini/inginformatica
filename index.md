---
layout: default
title: Benvenuti
---

Testo introduttivo

## Ultime comunicazioni

{% for post in site.posts %}
  <article>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%d/%m/%y" }}</time> - <a href="{{ post.url }}">{{ post.title }}</a>
  </article>
{% endfor %}

