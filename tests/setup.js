import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.env.NODE_ENV = 'test';

configure({ adapter: new Adapter() });