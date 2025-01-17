# Quest 03. 네트워크의 기초

## Introduction
* 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics
* 서버와 클라이언트, 그리고 웹 브라우저
* 인터넷을 구성하는 여러 가지 프로토콜
  * IP
  * TCP
  * HTTP
* DNS

## Resources
* [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
* [인터넷 프로토콜](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
* [traceroute](https://ping.eu/traceroute/)
* [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
* [Wireshark](https://www.wireshark.org/download.html)
* [HTTP](https://ko.wikipedia.org/wiki/HTTP)
* [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
* [Web-Based Dig](https://networking.ringofsaturn.com/Tools/dig.php)

## Checklist
* 인터넷은 어떻게 동작하나요? OSI 7 Layer에 입각하여 설명해 보세요.

인터넷은 서로 패킷을 주고 받으면서 통신을 하여 동작하게 된다. 이 패킷은 OSI referene model에 입각하여 총 7계층으로 나뉘어져 있으며, 이렇게 계층들이 나뉘어져 있는 이유는 서로가 서로에게 영향을 받지 않으며 발전될 수 있기 때문이다.

* 우리가 브라우저의 주소 창에 `www.knowre.com` 을 쳤을 때, 어떤 과정을 통해 노리의 서버 주소를 알게 되나요?

Domain Name Server에는 Domain과 그 Domain에 해당하는 IP가 mapping 되어 있는 Lookup Table이 존재하여, DNS에게 `www.knowre.com`의 서버 IP 주소 알려달라고 하면 알려준다.

## Quest
* tracert(Windows가 아닌 경우 traceroute) 명령을 통해 `www.google.com` 까지 가는 경로를 찾아 보세요.
  * 어떤 IP주소들이 있나요? `10.16.*.*`, `10.0.*.*`, `163.152.*.*` 
  * 그 IP주소들은 어디에 위치해 있나요? 10으로 시작하는 건 사설 IP로 고대 IP인거 같다. 163으로 시작하는 건 한국 IP다.
* Wireshark를 통해 `www.google.com` 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  * TCP 패킷을 주고받는 과정은 어떻게 되나요?
  * 각각의 패킷의 헤더에 어떤 정보들이 담겨 있나요?
* telnet 명령을 통해 `http://www.google.com/` URL에 HTTP 요청을 날려 보세요.
  * 어떤 헤더들이 있나요?
  * 그 헤더들은 어떤 역할을 하나요?

## Advanced
* HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
* TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
