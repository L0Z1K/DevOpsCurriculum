# Quest 07. 여러 대의 서버로 서비스 하기

## Introduction
* 이번 퀘스트는 여러 대의 서버를 통해 안정적인 서비스를 만드는 방법을 다룹니다.

## Topics
* Switch
  * L2 Switch
  * L3 Switch
  * L4 Switch
  * L7 Switch
* Load Balancer
  * 리스너
  * 대상그룹
  * 상태 검사

## Resources
* [ELB](https://aws.amazon.com/ko/elasticloadbalancing)
* [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure)

## Checklist
* Single Point of Failure는 어떤 개념일까요?

이것이 fail되면, 전체 System의 Service가 중단된다. 그러므로 High Availability를 요구하려면, 이 Single Point of Failure를 최대한 없애야 한다. 하지만 전부 없앨 수 있는 건 아니다. 라우터를 무조건 사용하여 서비스를 하는데 라우터도 망치 한 대 맞으면 죽으므로 Single Point of Failure이다.

* 여러 대의 서버로 서비스할 때의 장점은 무엇일까요? 또 주의해야 할 점은 무엇일까요?

위에서 얘기한 Single Point of Failure 문제를 줄일 수 있다. 단일 컴포넌트 하나가 죽어서 서비스가 되지 않더라도 다른 서버로 서비스 할 수 있기 때문이다. 주의할 점은 각 서버가 sync가 맞게 데이터에 접근해야 할 것이다.

* AWS에서 제공하는 로드밸런서에는 어떤 종류가 있나요? 각각의 용도는 무엇일까요?

Application LB, Network LB가 있다. 어떤 Layer에서 LB를 할지 차이가 있다.

* AWS 로드밸런서의 리스너 규칙을 이용해 어떤 일들을 할 수 있을까요?

Domain에 따라서 어떤 Target Group으로 Request를 보낼지 정할 수 있다.

* AWS의 여러 리전(서울, 도쿄 등)으로 로드밸런싱을 하는 것도 가능할까요?

불가능할 거 없을 것 같다. 

## Quest
* EC2 인스턴스를 한 대 더 늘리고, 앞단에 ELB를 사용하여 두 대를 로드밸런싱 해 보세요. 직전 퀘스트에서 만들었던 컨테이너를 이용하시면 됩니다.
* 두 대의 서버 모두에 번갈아 요청이 들어오는지 확인해 보세요.
* 만약 한 대의 서버의 컨테이너를 내렸을 때, 자동으로 나머지 한 대의 서버로만 요청이 가게 되도록 설정해 보세요. Application Load Balancer를 이용해서 구현해 봅시다!

어려운데 재밌습니다.

## Advanced
* Sticky Session이란 어떤 개념일까요?
