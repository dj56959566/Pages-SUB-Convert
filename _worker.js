
// 部署完成后在网址后面输入/，加上下方设置的mytoken=的值，即可获取聚合后的节点

let mytoken = 'auto1'; //可根据需要自行设定，或者使用UUID在线生成网站进行生成：https://1024tools.com/uuid
let BotToken =''; //可以为空，或电报@BotFather关注机器人，输入/start，选择：/newbot进行获取
let ChatID =''; //可以为空，或电报@userinfobot中获取，选择：/start进行获取
let TG = 0; //新手勿动， 开发者选项，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'Pages-SUB-Convert';
let SUBUpdateTime = 3; //更改此次设置订阅更新时间，单位小时

//在以下输入您的自建节点链接或订阅链接，请保留双引号
let MainData = `
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.18.105.41:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.17.231.34:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@cip.951535.xyz:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@[2606:4700:d0::285e:a09d:9e2f:d7db]:3476?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=tcp&headerType=none&host=2606%3A4700%3Ad0%3A%3A285e%3Aa09d%3A9e2f%3Ad7db#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.16.169.130:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.16.190.116:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.17.15.77:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.17.143.181:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.17.250.163:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@104.16.229.135:443?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://b59d4e4a-5efe-4629-8358-208d6b0f5666@47.74.37.227:80?encryption=none&security=tls&sni=pages-3jp.pages.dev&fp=randomized&type=ws&host=pages-3jp.pages.dev&path=%2F%3Fed%3D2048#pages-3jp.pages.dev
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.91.17.102:2083?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@221.139.226.21:18245?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.74.11.251:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@104.18.82.137:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@193.9.46.16:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:e7:2e65:613f:1bc0:32f9:653f]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@38.47.96.138:14217?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:e7::8ef6:20b6:f618]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:e7:be:3050:3ac4:ad67:aa45]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@cf.090227.xyz:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@104.16.199.141:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:e7:0:f1:1382:73b5:996a]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@104.17.153.202:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:e7:be:3050:3a3c:28f9:bfd3]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@148.135.98.86:12526?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.74.6.16:2087?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.74.9.174:2087?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.74.43.24:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@129.153.213.8:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@158.178.240.232:23559?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#SG
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:3036:bc:ea06:32a9:f4a4:5c12]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@104.16.38.173:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@134.195.211.16:4433?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@222.108.215.96:11180?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@104.17.52.252:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@129.146.46.164:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:3036::1a:733d:8fd3]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.242.171.94:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.242.171.94:2087?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.242.234.127:2096?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.242.171.94:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@43.128.6.137:10001?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.242.234.127:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@8.218.156.91:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.242.234.127:2083?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.245.8.68:2096?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@141.144.207.78:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#NL
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@158.180.230.155:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#IT
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@152.70.234.249:21847?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@144.202.92.104:31000?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@192.9.246.112:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@34.123.83.237:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@8.210.131.161:34237?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@108.165.169.221:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.91.3.179:2087?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@158.178.241.45:2096?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#SG
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@129.150.63.96:2087?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#SG
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@51.107.6.231:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CH
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@129.150.63.96:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#SG
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@129.150.58.86:57621?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#SG
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.245.41.84:2096?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@51.107.6.220:8443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CH
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@168.138.185.28:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#SG
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@47.243.70.197:2053?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.aliyun.fxxk.dedyn.io#HK
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@131.186.28.236:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@193.123.250.209:2087?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@[2606:4700:3036:0:b14e:3fa2:b8a7:dc25]:443?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.oracle.fxxk.dedyn.io#CMCC-IPV6
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@211.186.222.122:10250?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.kr.fxxk.dedyn.io#KR
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@193.111.31.133:50896?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.jp.fxxk.dedyn.io#JP
vless://f3862bd7-0fd0-4276-81c2-e705aa8077b3@103.99.179.88:1001?encryption=none&security=tls&sni=one.56v03.dynv6.net&fp=random&type=ws&host=one.56v03.dynv6.net&path=%2FproxyIP%3Dproxyip.us.fxxk.dedyn.io#US

https://ghproxy.com/https://raw.githubusercontent.com/a2470982985/getNode/main/v2ray.txt

`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件，可自行更换

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
