## 리엑트에서 타입스크립트 사용하기.

### 시작 : 2022.03.25

### 목표 : 리엑트에서 사용하는 hook 등 차후 지속적으로 typescript를 활용하기 위한 기능 숙지

### 설치

> 나는 리엑트를 npx를 통해 init하여 사용하고 있다. npx에서 typescript를 지원하여 npx를 통해 리액트 typescript를 만듬.

> 방법 : npx create-react-app [원하는 폴더 이름] --template typescript

뒷부분의 ' --template typescript ' 를 추가하면 typescript로 된 react 폴더가 생성된다!.
학습하고 있는 강좌에서,, ' npx create-react-app [원하는 이름] --typescript ' 라고 쳣는데 계속 안되서 고생했음..

### 시작하기

기본 타입스크립트에서는 확장자가 .ts로 작성하게 되었다.
하지만, react와 typescript를 사용하기 위해서는 .tsx확장자를 사용해야 하는데 이는 react에서는 jsx를 사용하는데 **.ts확장자로 사용하면 jsx를 사용할 수없다.**

1. component 만들때 arrow 함수와 function 을 썻을때 차이점?

- ex) arrow함수 : const Hello: React.FC<HelloPropsType>({name,age})=>{}
- ex) function : function Hello({name,age}:HelloPropsType){}
- 위의 두가지는 큰 차이점이 있는데, arrow함수는 기본적으로 children 이 탑제 되어있지만, defalutProps를 통해 props값을 기본값을 정해주는데에 어려움이 있음.
- function을 이용하여 컴포넌트를 작성하는것을 주로 하고, 개발 문화의 따라 수정 해주는것이 좋아 보임.

2. typescript를 통한 상태 관리하기 (useState)

- useState를 사용할때 기존 react와 사용방법은 똑같다.
- 한가지 다른점이 있다면, useState를 선언할때(?) 제너릭을 통해 타입 어노테이션을 할 수 있다는 것.
- 만약 제너릭을 통해 타입 어노테이션을 하지 않더라도 초기화 값을 통해 타입이 정해짐.
- input태그의 onChange 나 form 태그의 onSubmit같은 이벤트 핸들러의 객체 타입을 알수 없다.
- 이는 검색을통해 알수도 있지만, 태그의 이벤트 핸들러를 적고 마우스를 올리면 해당 객체의 타입을 알 수 있음.
