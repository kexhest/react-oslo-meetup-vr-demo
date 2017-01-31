import './styles/main.scss';
import './scripts/index';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
