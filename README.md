# Movie App 2020

- Rect JS Fundamentals Course 2020
- 간단한 영화 App (clone coding)
- 쉴때 조금씩 만들어보는 용도입니다.
- git에 올리는 이유는, 추후 배포를 위해 올려둡니다.

- 프로젝트 진행하면서 버전에 문제가 있어서 추가 작성
- Error: Package exports for '~~~\node_modules\colorette' do not define a valid '.' target

- css import 해오는 과정에서 (2020.07기준) version문제가 좀 있었음.(위 에러..ㅠㅠ)
- node는 13.1버전, node_module의 colorette는 1.2.1이어서 해결하는데 오래걸렸음..ㅠㅠ
- 처음에 접근은 웹팩파일을 만들고, export 할 때 정규식을 추가하는 방향으로 진행했는데
- 많이 꼬여서
- https://stackoverflow.com/questions/62760637/error-found-while-developing-games-with-react/62848761#62848761
- 위 사람 자료로 해결함
- 이 사람과 마찬가지로 나도 node를 업뎃하면 다른 프로젝트들에 영향이 가기때문에 좀 그래서
- colorette를 다운그레이드 해서 해결!!!+ㅁ+ (ㅠㅠ제발 다음에는 빨리 해결하길 바라면서 끄적.)
