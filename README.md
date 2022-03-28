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

3. typescript를 통한 상태 관리하기 (useReducer)

- useState와 마찬가지로 타입을 미리 지정하고 제너릭을 통해 타입을 지정해주어야함.
- 타입 지정을 통해 자동완성으로 간편하게 작업이가능함.
- 유니온 타입등을 활용하여 값을 좀더 제한적이고 안정성 있게 사용 할 수 있었음.

4. typescript를 통한 상태 관리하기 (contextAPI)

- 기존의 React에서 contextAPI를 잘 사용하지 않아서 contextAPI를 다시한번 확인 할 수 있는 좋은 기회가 되었음.
- typescript에서 사용할 경우 제너릭으로 타입을 지정하고, 초기화할 때 null을 사용함.
- Dispatch 같은 경우 React 내장 타입이 있어서 그것을 불러 들이고 그것에 제너릭을 함 ex) createContext<Dispatch<내타입> | null>(null);
- context component에서 context함수를 활용하여 따로 자식 component에서 context를 사용 안하고 사용하기위하여
<pre><code>
    const StateContext()=>{
        const state = context(StateContextApi);
        if(!state){throw new Error("에러에러")}
        return state;
    }
</code></pre>

- 위의 코드처럼 if문을 통해 state의 값을 검사 하지 않으면, null값이 리턴될 수도 있어서 오류가 발생함.
