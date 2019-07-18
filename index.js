import './src/index.scss'
// import all js
import './src/ui_kit/dropdown/dropdown.js';
import './src/ui_kit/ratestar/ratestar.js'
import './src/ui_kit/expendcheckbox/expendedcheckbox.js'
import './src/ui_kit/textfield/textfield.js'
import './src/ui_kit/likebutton/likebutton.js'
import './src/ui_kit/calendar/calendar.js'
import './src/ui_kit/pagination/pagination.js'
//  import js file from template
import './src/template/includes/header/header.js'
const authorize = {
	login: true,
	user: 'Test'
}
localStorage.setItem('authorize', JSON.stringify(authorize))
