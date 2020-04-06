/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dba13efdd37840eee5b0f22
*
* You will get 10% discount for each one of your friends
* 
*/
import Logger from "./classes/Logger";
import Server from "./classes/Server";

/**
 * Define Application start
 * @returns {Promise<void>}
 */
const start = async () => {
  try {
    // Initialize the server
    await Server.init();
  } catch (err) {
    Logger.error(`Error inside app start: ${err.message}`);
    throw err;
    process.exit(1);
  }
};

// Start the server
start();