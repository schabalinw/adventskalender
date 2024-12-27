import { addMessages, init } from 'svelte-i18n';

import de from '../i18n/de.json';
import ru from '../i18n/ru.json';

addMessages('de', de);
addMessages('ru', ru);

init({
	fallbackLocale: 'de',
	initialLocale: 'ru'
});
