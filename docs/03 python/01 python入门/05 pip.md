## 配置pip代理加速

配置python的pip源：https://developer.aliyun.com/mirror/

### windows配置加速

- 方式一： pip config edit

  ```
  pip config --editor C:\WINDOWS\system32\notepad.exe edit ，添加内容：
  	[global]
  	index-url = https://pypi.tuna.tsinghua.edu.cn/simple
  
  文件默认保存位置：	C:\Users\${user}\AppData\Roaming\pip\pip.ini
  ```

  

- 方式二： 手动创建配置文件

  ```
  1, cd %APPDATA%				#本机上的目录是 C:\Users\${user}\AppData\Roaming
  2, mkdir pip && cd pip && touch pip.ini
  
  #cat pip.ini
  	[global]
  	index-url = https://pypi.tuna.tsinghua.edu.cn/simple
  ```

  



### linux配置加速

- 方式一 ： pip config edit

  ```
  # pip config edit  --editor vim				#配置文件默认保存在："~/.config/pip/pip.conf"	
      [global]
      index-url = https://mirrors.aliyun.com/pypi/simple/
  
      [install]
      trusted-host=mirrors.aliyun.com
  
  
  注意：目录要先创建到"~/.config/pip"，不然当目录不存在时配置文件无法保存
  ```

  

- 方式二： 手动创建配置文件

  ```
  touch ~/.pip/pip.conf
  
  #cat ~/.pip/pip.conf
      [global]
      index-url = https://mirrors.aliyun.com/pypi/simple/
  
      [install]
      trusted-host=mirrors.aliyun.com
  ```

  

**测试**

```
pip config get global.index-url					#输出https://mirrors.aliyun.com/pypi/simple/
pip config get install.trusted-host				#输出mirrors.aliyun.com
```





## pip常用命令

/usr/local/python3/bin/python3.9 -m pip install --upgrade pip					#升级pip



### 增：

```
pip install django							#安装
```



### 删：

```
```



### 改：

```
```



### 查：

```
```



















