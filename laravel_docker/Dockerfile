#FROM ubuntu:16.04
#
#RUN apt-get update \
#    && apt-get upgrade \
#    && apt-get install -y locales \
#    && locale-gen en_US.UTF-8
#
#ENV LANG en_US.UTF-8
#ENV LANGUAGE en_US:en
#ENV LC_ALL en_US.UTF-8
#
#RUN apt-get update && apt-get install -y curl zip unzip software-properties-common \
#    && add-apt-repository -y ppa:ondrej/php \
#    && apt-get update && apt-get install -y php7.2 \
#        php-pear php7.2-curl php7.2-dev php7.2-gd php7.2-mbstring php7.2-zip php7.2-mysql php7.2-xml
##    && php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer \
##    && mkdir /run/php \
##    && apt-get remove -y --purge software-properties-common \
##    && apt-get clean \
##    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
#
##ADD php-fpm.conf /etc/php/7.0/fpm/php-fpm.conf
##ADD www.conf /etc/php/7.0/fpm/pool.d/www.conf
#
#EXPOSE 9000
##CMD ["php-fpm7.0"]

#---------------------------------------------------------------------------
#FROM ubuntu:latest
#
##RUN apt-get install -y python-software-properties
#
#RUN apt-get update -yqq \
#    && apt-get install -yqq \
#	ca-certificates \
#    curl
#
#RUN apt-get -y dist-upgrade
#RUN apt-get -y install python-software-properties
#RUN apt-get -y install software-properties-common
#
#
### Install php7.2 extension
#RUN apt-get update -yqq \
#    && apt-get install -yqq \
#    php7.2 \
#	php7.2-mysql \
#	php7.2-opcache \
#	php7.2-common \
#	php7.2-mbstring \
#	php7.2-soap \
#	php7.2-cli \
#	php7.2-intl \
#	php7.2-json \
#	php7.2-xsl \
#	php7.2-imap \
#	php7.2-ldap \
#	php7.2-curl \
#	php7.2-gd  \
#	php7.2-dev \
#    php7.2-fpm \
#    php7.2-bcmath \
#    && apt-get install pkg-config
##    && pecl install mongodb \
##    && echo "extension=mongodb.so" > /etc/php/7.2/cli/conf.d/ext-mongodb.ini \
##    && echo "extension=mongodb.so" > /etc/php/7.2/fpm/conf.d/ext-mongodb.ini \
##    && apt-get install -y -q --no-install-recommends \
##       ssmtp
#
## Add default timezone
##RUN echo $LYBERTEAM_TIME_ZONE > /etc/timezone
##RUN echo "date.timezone=$LYBERTEAM_TIME_ZONE" > /etc/php/7.2/cli/conf.d/timezone.ini
#
### Install composer globally
##RUN echo "Install composer globally"
##RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer
#
## Copy our config files for php7.2 fpm and php7.2 cli
##COPY php-conf/php.ini /etc/php/7.2/cli/php.ini
##COPY php-conf/php-fpm.ini /etc/php/7.2/fpm/php.ini
##COPY php-conf/php-fpm.conf /etc/php/7.2/fpm/php-fpm.conf
##COPY php-conf/www.conf /etc/php/7.2/fpm/pool.d/www.conf
#
#RUN usermod -aG www-data www-data
## Reconfigure system time
##RUN  dpkg-reconfigure -f noninteractive tzdata
#
##COPY start.sh /start.sh
##RUN chmod +x /start.sh
#
##CMD ["/start.sh"]
#
##WORKDIR /var/www/dmiseev
#
#EXPOSE 9000

#------------------------------------------------------

#FROM ubuntu:16.04
#
#ENV LYBERTEAM_TIME_ZONE Europe/Kiev
#
#RUN apt-get update -y && apt-get upgrade -y
#
#RUN apt-get install -y software-properties-common
#
#RUN apt-get update -yqq \
#    && apt-get install -yqq \
#	ca-certificates \
#    curl
#
#RUN apt-get update -yqq && apt-get -y install software-properties-common
#RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php
#
### Install php7.2 extension
#RUN apt-get update -yqq \
#    && apt-get install -yqq \
##    php7.3-curl \
##    php7.3-dev \
##    php7.3-gd \
##    php7.3-mbstring \
##    php7.3-zip \
##    php7.3-mysql \
##    php7.3-xml
#    php7.2 \
#	php7.2-mysql \
#	php7.2-opcache \
#	php7.2-common \
#	php7.2-mbstring \
#	php7.2-soap \
#	php7.2-cli \
#	php7.2-intl \
#	php7.2-json \
#	php7.2-xsl \
#	php7.2-imap \
#	php7.2-ldap \
#	php7.2-curl \
#	php7.2-gd \
#	php7.2-dev \
#    php7.2-fpm \
#    php7.2-bcmath \

#-------------------------------------

FROM ubuntu:16.04

ENV LYBERTEAM_TIME_ZONE Europe/Kiev

RUN apt-get update -yqq \
    && apt-get install -yqq \
	ca-certificates \
    git \
    gcc \
    make \
    wget \
    mc \
    curl \
    nano

RUN apt-get -y dist-upgrade
RUN apt-get -y install python-software-properties
RUN apt-get -y install software-properties-common
RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php

## Install php7.2 extension
RUN apt-get update -yqq \
    && apt-get install -yqq \
    php7.2-pgsql \
	php7.2-mysql \
	php7.2-opcache \
	php7.2-common \
	php7.2-mbstring \
	php7.2-soap \
	php7.2-cli \
	php7.2-intl \
	php7.2-json \
	php7.2-xsl \
	php7.2-imap \
	php7.2-ldap \
	php7.2-curl \
	php7.2-gd  \
	php7.2-dev \
    php7.2-fpm \
    php7.2-bcmath \
    && apt-get install pkg-config \
    && apt-get install -y -q --no-install-recommends \
       ssmtp

# Add default timezone
RUN echo $LYBERTEAM_TIME_ZONE > /etc/timezone
RUN echo "date.timezone=$LYBERTEAM_TIME_ZONE" > /etc/php/7.2/cli/conf.d/timezone.ini

## Install composer globally
#RUN echo "Install composer globally"
#RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

#Copy our config files for php7.2 fpm and php7.2 cli
COPY php-conf/php.ini /etc/php/7.2/cli/php.ini
COPY php-conf/php-fpm.ini /etc/php/7.2/fpm/php.ini
COPY php-conf/php-fpm.conf /etc/php/7.2/fpm/php-fpm.conf
COPY php-conf/www.conf /etc/php/7.2/fpm/pool.d/www.conf

RUN usermod -aG www-data www-data
# Reconfigure system time
RUN  dpkg-reconfigure -f noninteractive tzdata

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]

#WORKDIR /var/www/dmiseev

EXPOSE 9000