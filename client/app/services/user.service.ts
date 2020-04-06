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
// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { UserBaseService } from "./base/user.base.service";
import { User } from '../domain/lll_db/user';

/**
 * YOU CAN OVERRIDE HERE UserBaseService
 */

@Injectable()
export class UserService extends UserBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
    /**
     * Change user password
     */
    changePassword(id: string, passwordNew:string, passwordAdmin:string): Observable<void> {
        return this.http
            .post(this.contextUrl + '/' + id + '/changePassword' , {
                passwordNew: passwordNew, 
                passwordAdmin: passwordAdmin 
            })
            .map(response => response.json());
    }
}