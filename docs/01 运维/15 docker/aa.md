下载外网资源思路：

​	场景：源码安装python后，使用pip时提示如下，需要--with-openssl=/usr/bin/openssl，但是yum仓库中的openssl版本太低，需要源码安装openssl，但是安装openssl时需要perl 5，因为perl 5资源在外网，卡住了无法下载

```
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
```

```
wget https://www.cpan.org/src/5.0/perl-5.34.1.tar.gz 时卡住很久！！！！！！！！！
```



**一个思路**： 专门创建一个docker用来下载外网资源

可以使用阿里云镜像容器提供的外网功能，专门创建一个docker下载外网资源（使用docker-compose），用git管理docker-compose功能





