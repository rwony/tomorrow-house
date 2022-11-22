# 🏠 내일의 집

Tomorrow-house made with VanillaJS (Responsive)

### Languages
 - Javascript
 - HTML5
 - SCSS
 
 ### Screenshot
![image](https://user-images.githubusercontent.com/88661435/200501217-6d0e52f6-0aa1-48da-b4b8-6cfd9545edb7.png)
![image](https://user-images.githubusercontent.com/88661435/200506909-ebe78faa-4c07-4a5f-84f2-6f804b3e10f1.png)
![image](https://user-images.githubusercontent.com/88661435/200506994-2ae1076a-39d5-4863-afd5-0da85087b21b.png)
![image](https://user-images.githubusercontent.com/88661435/200508740-f7a7ab79-5d90-482e-886d-1ad6f693520e.png)
![image](https://user-images.githubusercontent.com/88661435/200508901-03122edd-0edf-418e-abf1-20c425a6a24b.png)
![image](https://user-images.githubusercontent.com/88661435/200509031-3e1a67bb-a292-4108-8b38-27f7e09326ac.png)


---


### 반응형에 따른 클래스 정리

| Mobile | Tablet | Desktop | Class        |
| ------ | ------ | ------- | ------------ |
| O      | X      | X       | `.sm-only`   |
| O      | O      | X       | `.lg-hidden` |
| X      | O      | X       | `.md-only`   |
| X      | O      | O       | `.sm-hidden` |
| X      | X      | O       | `.lg-only`   |
| O      | X      | O       | `.md-hidden` |

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
  </button>
</div>
```

### 2. sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

```html
<div class="sidebar-user-menu">
  <ul class="user-menu-list">
    <li class="user-menu-item">
      <a href="/">마이페이지</a>
    </li>
    <li class="user-menu-item">
      <a href="/">나의 쇼핑</a>
    </li>
    <li class="user-menu-item">
      <a href="/">스크랩북</a>
    </li>
    <li class="user-menu-item">
      <a href="/">알림</a>
    </li>
    <li class="user-menu-item">
      <a href="/">이벤트</a>
    </li>
  </ul>
</div>
```

- 로그인을 했을 경우

````html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```
````
