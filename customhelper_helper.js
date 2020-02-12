const axios = require('axios');
const { Helper } = codeceptjs;

class CustomHelper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  async customAmOnPage(url, timeout = 10) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    await axios.get(`${url}`, {timeout: timeout * 1e3}).catch(e => {
      throw new Error(`Page ${url} is not available. Error: ${e.message}`);
    });
    const {page} = this.helpers['Puppeteer'];
    await page.goto(url, {
      timeout: timeout * 3e3
    });
  }

}

module.exports = CustomHelper;
