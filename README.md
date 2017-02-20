Nginx + Logstash + Elasticsearch + Kibana + Docker
==================================================

## Description

This WIP project aims to setup a complete log aggregation system
built with Logstash, Elasticsearch and Kibana in a containerized
environement.
This setup aggregate the logs from an nginx server. Nginx act as a
reverse proxy for a Node.js application.
The node app is slow (1 sec delay) on purpose.

Nginx writes its logs in a file shared with logstash. This file is then
handled by logstash's filebeat plugin.

## Usage

Start the containers:

```
docker-compose up
```

### Important

Run this to send the logs to logstash.
```
docker-compose exec logstash filebeat.sh -e -c /conf/filebeat.yml -d publish
```

The webserver will be accessible at http://127.0.0.1:8086 (Hit it a
bunch of times to generate logs).
Kibana will be accessible at http://127.0.01:5601.


## Todo

- [ ] Configure Kibana
- [ ] Use something else or properly configure filebeat
- [ ] Improve Grok's pattern / Nginx log format

## References
- https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html
- https://www.elastic.co/guide/en/beats/filebeat/5.2/filebeat-getting-started.html
- https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html
- https://github.com/logstash-plugins/logstash-patterns-core/blob/master/patterns/grok-patterns
- https://github.com/logstash-plugins/logstash-patterns-core/blob/master/patterns/httpd
- https://www.elastic.co/guide/en/logstash/current/config-examples.html
- https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04
- https://www.nginx.com/blog/using-nginx-logging-for-application-performance-monitoring/
