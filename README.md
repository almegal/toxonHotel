# Сайт для поиска и броннирования отеля.
> Был сделан в качестве работы для портфолио.
> Tøxin Hotel


Для просмотра сайта перейдите по ссылке [GitHub Pages](https://localhost:3000)


Для локального запуска используйте команды
```bash
git clone https://github.com/almegal/toxonHotel
npm install
npm run start:dev
```
Написан с использованием pug.

### Доступные компоненты для использования и их свойства
Каждый компонетн (блок) имеет переменные которые передаются в основном файле pug;

- bulletlist
  - title (type=string)
  - items (type=array)
  - modificator (type=string)

**example:**
 ```pug
  include ../path/to/block
  +bulletlist(
    title: 'some text'
    items: ['no smoke', 'no party', 'no pets'],
    midificator: 'blockname_type_modificator'
    )
 ```
- button
  - placeHolder (type=string)
  - modificator (type=string)
- checkbutton
  - title (type=string)
  - items (type=array)
    - title (type=string)
    - content (type=string)
  - modificator (type=string)
- datadropdown
  - title (type=string)
  - items (type=array)
  - modificator (type=string)
- descriptionblock
  - title (type=string)
  - items (type=array)
    - img (type=href)
    - title (type=string)
    - subcontent (type=string)
    - count (type=digital)
  - modificator (type=string)
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
