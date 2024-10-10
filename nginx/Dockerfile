FROM 590183992280.dkr.ecr.us-east-2.amazonaws.com/nginx:1.22

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN chown -R nobody.nobody  /run  \
    && chown -R nobody.nobody /var/log \
    && chown -R nobody.nobody /var/cache/nginx \
    && find /usr/share/nginx -type d -exec chmod 750 {} \; \
    && find /usr/share/nginx -type f -exec chmod 440 {} \; \
    && chown -R root.nobody /usr/share/nginx \
    && chown -R root.nobody /usr/sbin/nginx \
    && chmod 750 /usr/sbin/nginx \
    && chmod 700 /sbin/apk

USER nobody

EXPOSE 8080

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
