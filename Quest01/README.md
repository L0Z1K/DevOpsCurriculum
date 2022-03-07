# Quest 01. 리눅스와 친해지기

## Introduction
* 이번 퀘스트를 통해 리눅스의 기본적인 구조와 기능에 대해 공부할 수 있습니다.

## Topics
* 리눅스의 기본 커맨드
  * `cd`, `pwd`, `ls`, `cp`, `mv`, `mkdir`, `rm`, `touch`, `ln`, `echo`, `cat`, `tail`, `find`, `ps`, `kill`, `grep`, `wc`, `df`, `du`
  * 파이프(`|`) 문자
* 리눅스의 기본적인 디렉토리 구성
  * `/bin`, `/usr/bin`, `/boot`, `/dev`, `/etc`, `/home`, `/lib`, `/mnt`, `/proc`, `/root`, `/sbin`, `/usr/sbin`, `/tmp`, `/usr`, `/var`
* 쉘과 환경변수와 퍼미션
  * sh, bash, zsh
  * `.bash_profile`, `.bashrc`, `.zshrc`
  * `env`, `set`, `unset`, `export`
  * `chmod`, `chown`, `chgrp`
  * setuid, Sticky bit
* 운영체제의 기초
  * 프로세스와 쓰레드
  * 파일 시스템
* 리눅스의 배포판
  * Ubuntu, Debian, Redhat Enterprise, CentOS, Gentoo, Amazon Linux
  * 패키지 시스템: `apt`(.deb), `yum`(.rpm)
* vi
  * `i`, `w`, `q`, `u`, `d`, `p` 명령

## Resources
* [The Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
* [The Linux Directory Structure, Explained](https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/)
* [Unix / Linux - What is Shells?](https://www.tutorialspoint.com/unix/unix-what-is-shell.htm)
* [zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
* [About systemd](https://www.infoworld.com/article/2832405/what-is-systemd-and-why-does-it-matter-to-linux-users.html)
* [About linux distributions](https://thebloggingpot.com/2018/05/23/different-linux-distributions-explained/)
* [RPM and YUM package management](https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-102-5/)
* [File editing with vi](https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-103-8/)

## Checklist
* 리눅스의 파이프 문자는 어떤 역할을 하나요?

한 프로세스의 stdout을 다른 프로세스의 stdin으로 연결해주는 역할이다.

* 리눅스의 셸은 어떤 역할을 하나요? bash와 zsh는 어떻게 다른가요?

명령어를 입력하여 Kernel과 소통할 수 있는 User Interface이다. 둘 다 셸의 역할인데, 다른 게 좀 많다.

* 리눅스의 권한 체계는 어떻게 이루어져 있나요?

User 각각 권한 level이 존재하고, User가 속한 Group에 따라서도 접근 가능한 파일이 다르다.

* 프로세스와 쓰레드는 무엇인가요?

프로세스는 실행되고 있는 프로그램을 의미하며, 각 프로세스들은 독립적인 개체이다. 쓰레드는 프로세스 내에서 자원을 할당받아 어떤 태스크를 수행하며, 각 쓰레드들은 메모리를 공유할 수 있다.

* 현재 실행되고 있는 프로세스들 중 PID가 1인 프로세스는 어떤 역할을 할까요? init과 systemd는 무엇이고 어떻게 다른가요?

init 프로세스로 시스템이 부팅될 때, 처음으로 실행되는 프로레스로 OS를 메모리에 로딩하는 등 시스템을 부팅하는 초기 과정을 수행한다. systemd는 "system management daemon"의 약자로, 기존 init의 역할 + 시스템 전체를 관리할 수 있는 기능을 가진다.

* 파일시스템이란 무엇일까요? 어떤 것이 있을까요? 지금 다루는 운영체제는 어떤 파일시스템을 쓰고 있나요?

파일시스템은 시스템 내에서 파일을 어떻게 생성, 수정 등을 하는 지 관리 체계를 의미한다. MacOS는 High Sierra부터는 APFS 파일시스템을 사용한다고 한다.

* 리눅스의 배포판이란 무엇일까요? 여러 가지 배포판들은 어떻게 생겨났을까요?

Linux 운영체제를 실제로 가동할 수 있게 하는 프로그램?을 말한다. 엄청나게 다양한 배포판이 생기는 이유는 사람들마다 입맛이 달라서 그런거 아닐까? 

* 리눅스의 패키지 시스템이란 무엇일까요? 이러한 시스템이 생긴 이유는 무엇일까요? deb과 rpm은 어떤 차이가 있을까요? RPM이 있는데 yum과 같은 시스템이 나온 이유는 무엇일까요?

리눅스에 다양한 패키지를 설치해서 사용하게 되는데 이 패키지를 어떻게 설치하고 삭제하고 업데이트하는 지 그 체계를 정해놓은 것이 패키지 시스템이다. rpm은 "Red Hat Package Manager"의 약자로, Red Hat Distribution을 위한 것이고, deb은 Debian Distribution을 위한 것이다. 가끔 Package 간의 Dependency로 인해 버전 충돌이 나는데 이러한 버전 충돌을 자동으로 업데이트 해주는 기능을 rpm에서 추가하여 yum을 만든게 아닌가 싶다.

* vi는 어떤 에디터인가요? vi와 vim은 어떻게 다를까요? vi는 왜 모든 리눅스의 기본 에디터가 되었을까요?

파일 에디터다. vi + improved가 vim이고, 키보드로만 파일을 수정할 수 있는게 큰 장점이라 기본 에디터가 된 것일까?

## Quest
* 인스턴스 생성
  * t3.nano 등급으로 EC2 인스턴스를 생성해 봅시다! Amazon Linux 2, Ubuntu 두 가지를 각각 생성해 봅니다.
  * EC2 생성 과정에서 .pem 파일이 하나 생기는데, 이는 저에게 슬랙을 통해 공유해 주시면 됩니다.
  * 세 배포판은 어떻게 다른가요?
* 리눅스 연습
  * Amazon Linux 2 인스턴스에서 위의 Topics의 기본 커맨드를 연습해 봅니다.
  * 리눅스의 기본 디렉토리들에 어떤 정보들이 있는지 둘러 봅니다.
  * zsh를 설치하고 `.zshrc` 파일을 포함해 여러 가지 설정을 해 봅니다.
  * Topics의 환경변수나 퍼미션 관련 커맨드를 연습해 봅니다.
  * 현재 실행되고 있는 프로세스들과 마운트 된 파일시스템들을 확인해 봅니다.
  * vi를 열어 여러 가지 기본 명령과 간단한 편집 방법을 연습해 봅니다.
* 생성한 인스턴스 중 Ubuntu는 완전히 종료(Terminate)하고, Amazon Linux 2는 일단 꺼둡니다.

## Advanced
* 리눅스 외의 POSIX 호환 운영체제에는 어떤 것들이 있을까요? 그러한 운영체제들은 어떤 용도로 쓰일까요?
* 윈도우를 제외하고, 최근에 발표된 운영체제들 중 POSIX에 호환되지 않는 운영체제도 있을까요?
