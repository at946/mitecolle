import { ClientFunction } from 'testcafe';

const getUrl = ClientFunction(() => window.location.href);

export default getUrl;