FROM logstash:5

RUN set -x \
	&& apt-get update \
	&& apt-get install -y --no-install-recommends filebeat \
	&& rm -rf /var/lib/apt/lists/*

#RUN curl "http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz" -o /etc/logstash/GeoLiteCity.dat.gz \
  #&& gunzip /etc/logstash/GeoLiteCity.dat.gz

CMD ["-f", "/conf/first-pipeline.conf", "--config.reload.automatic"]
