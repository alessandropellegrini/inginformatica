---
layout: default
title: Benvenuti
---

Testo introduttivo di prova

## Ultime comunicazioni

{% for post in site.posts limit:site.news-in-home %}
  <article>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%d/%m/%y" }}</time> - <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
  </article>
{% endfor %}

Visualizza tutte le [{{ site.posts | size }} comunicazioni]({{ site.url }}{{ site.baseurl }}/comunicazioni/).

