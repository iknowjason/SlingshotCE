FROM ubuntu:focal

MAINTAINER Moses Frost <moses@moses.io>

ENV DEBIAN_FRONTEND noninteractive
ENV TERM xterm-256color

ARG BUNDLER_ARGS="--jobs=8 --without development test coverage"
ENV APP_HOME=/opt/metasploit-framework
ENV BUNDLE_IGNORE_MESSAGES="true"

RUN apt-get update && \
    apt-get install git build-essential vim nano curl -y && \
    apt-get install autoconf bison libssl-dev libreadline-dev libsqlite3-dev -y && \
    apt-get install libpq-dev libpcap-dev libxml2-dev libxslt-dev libyaml-dev zlib1g-dev ncurses-dev -y && \
    apt-get install openssh-client openssh-server ruby-dev ruby -y

COPY metasploit-framework /opt/metasploit-framework

RUN rm -Rf /opt/metasploit-framework/.git

RUN echo "gem: --no-document" > /etc/gemrc && \
    gem update --system 3.0.6 && \
    gem install bundler:1.17.3 && \
    gem install rake:13.0.1 && \
    gem install xmlrpc:0.3.0 && \
    cd /opt/metasploit-framework && \
    bundle install --force --clean --no-cache --system $BUNDLER_ARGS && \
    rm -rf /usr/local/bundle/cache 
     
COPY ROADtools /opt/ROADtools 

RUN cd /opt/ROADtools

ENTRYPOINT ["/bin/bash"]
