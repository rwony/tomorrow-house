# ๐  ๋ด์ผ์ ์ง

Tomorrow-house made with VanillaJS (Responsive)

### Languages
 - Javascript
 - HTML5
 - SCSS 
 
 ### Demo
 [Link](https://consoleryog-tomorrow-house.web.app/)
 
 
 ### Screenshot
![image](https://user-images.githubusercontent.com/88661435/200501217-6d0e52f6-0aa1-48da-b4b8-6cfd9545edb7.png)
![image](https://user-images.githubusercontent.com/88661435/200506909-ebe78faa-4c07-4a5f-84f2-6f804b3e10f1.png)
![image](https://user-images.githubusercontent.com/88661435/200506994-2ae1076a-39d5-4863-afd5-0da85087b21b.png)
![image](https://user-images.githubusercontent.com/88661435/200508740-f7a7ab79-5d90-482e-886d-1ad6f693520e.png)
![image](https://user-images.githubusercontent.com/88661435/200508901-03122edd-0edf-418e-abf1-20c425a6a24b.png)
![image](https://user-images.githubusercontent.com/88661435/200509031-3e1a67bb-a292-4108-8b38-27f7e09326ac.png)


---


### ๋ฐ์ํ์ ๋ฐ๋ฅธ ํด๋์ค ์ ๋ฆฌ

| Mobile | Tablet | Desktop | Class        |
| ------ | ------ | ------- | ------------ |
| O      | X      | X       | `.sm-only`   |
| O      | O      | X       | `.lg-hidden` |
| X      | O      | X       | `.md-only`   |
| X      | O      | O       | `.sm-hidden` |
| X      | X      | O       | `.lg-only`   |
| O      | X      | O       | `.md-hidden` |

### 1. GNB

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">๋ก๊ทธ์ธ</a>
    <a href="/">ํ์๊ฐ์</a>
  </div>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="์คํฌ๋ฉ๋ถ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="๋ด ์์ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="๋ง์ด๋ฉ๋ด ์ด๊ธฐ ๋ฒํผ"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
  </button>
</div>
```

### 2. sidebar

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">๋ก๊ทธ์ธ</a>
  <a class="btn-primary btn-40" href="/">ํ์๊ฐ์</a>
</div>
```

```html
<div class="sidebar-user-menu">
  <ul class="user-menu-list">
    <li class="user-menu-item">
      <a href="/">๋ง์ดํ์ด์ง</a>
    </li>
    <li class="user-menu-item">
      <a href="/">๋์ ์ผํ</a>
    </li>
    <li class="user-menu-item">
      <a href="/">์คํฌ๋ฉ๋ถ</a>
    </li>
    <li class="user-menu-item">
      <a href="/">์๋ฆผ</a>
    </li>
    <li class="user-menu-item">
      <a href="/">์ด๋ฒคํธ</a>
    </li>
  </ul>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

````html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
    <strong class="username">์ฌ๋ฌ๋ผ</strong>
  </a>
</div>
```
````
