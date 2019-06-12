# Сайт для поиска и броннирования отеля.
> Cделан в качестве работы для портфолио.
> Tøxin Hotel


Для просмотра сайта перейдите по ссылке [GitHub Pages](https://localhost:3000)


## Installation
```bash
git clone https://github.com/almegal/toxonHotel
npm install
npm run start:dev
```
Написан с использованием pug.

## Usage
Каждый компонент (блок) принимает несколько аргументов ;

- bulletlist
  - title (type=string)
  - items (type=array)
  - modificator (type=string) *not requiring*

**example:**
 ```pug
  +bulletlist({
    title: 'some text'
    items: ['no smoke', 'no party', 'no pets'],
    midificator: 'blockname_type_modificator'
    })
 ```
- button
  - placeHolder (type=string)
  - modificator (type=string) *not requiring*

**example:**
  ```pug
  +button({
    placeHolder: 'click me',
    midificator: 'blockname_type_modificator'
  })
 ```  
- checkbutton
  - title (type=string)
  - items (type=array of objects)
    - title (type=string)
    - content (type=string) *not requiring*
  - modificator (type=string) *not requiring*

**example:**
  ```pug
  +checkbutton({
    title: 'check some staff',
    items: [{title: 'smoking', content: 'description about smoking'}],
    midificator: 'blockname_type_modificator'
  })
 ```    
- datadropdown
  - title (type=string)
  - items (type=array)
  - modificator (type=string) *not requiring*
  - btn (type=boolean) *not requiring*

**example:**
  ```pug
  +datadropdown({
    title: 'how many guests',
    items: ['adults', 'childs', 'babys'],
    midificator: 'blockname_type_modificator',
    btn: true
  })
 ```     
- descriptionblock
  - title (type=string)
  - items (type=array of objects)
    - img (type=href)
    - title (type=string)
    - content (type=string)
    - subcontent (type=string) *not requiring*
    - count (type=digital) *not requiring*
  - modificator (type=string) *not requiring*

**example:**
  ```pug
  +descriptionblock({
    title: 'reviews',
    items: [{img: /path/to/img, content: '5 days ago' , title: 'Jonh Week review', subcontent:'Cool room', count: 12}],
    midificator: 'blockname_type_modificator',
  })
 ```       
- dropdown
  - title (type=string)
  - items (type=array)
  - modificator (type=string)


- expendedcheckbox
  - title (type=string)
  - items (type=array)
  - modificator (type=string)


- likebutton
  - title (type=string)
  - items (type=array)
  - modificator (type=string)


- ratestar
  - title (type=string)
  - items (type=array)
  - modificator (type=string)


- textfield
  - title (type=string)
  - items (type=array)
  - modificator (type=string)

  
