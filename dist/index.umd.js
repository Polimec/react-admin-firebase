!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("lodash"),require("firebase/storage"),require("path-browserify"),require("firebase/app"),require("firebase/auth"),require("firebase/firestore")):"function"==typeof define&&define.amd?define(["exports","lodash","firebase/storage","path-browserify","firebase/app","firebase/auth","firebase/firestore"],r):r((e||self).reactAdminFirebase={},e.lodash,e.storage,e.pathBrowserify,e.app,e.auth,e.firestore)}(this,function(e,r,t,n,o,i,a){function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/s(n);function c(e,t,n){e.sort(function(e,o){var i=r.get(e,t),a=r.get(o,t),s="asc"===n;return Number.isFinite(i)&&Number.isFinite(a)?l(i,a,s):"string"==typeof i&&"string"==typeof a?l(i.toLowerCase(),a.toLowerCase(),s):i instanceof Date&&a instanceof Date?l(i,a,s):l(!!i,!!a,s)})}function l(e,r,t){return e>r?t?1:-1:e<r?t?-1:1:0}function f(e,t){if(!t||r.isEmpty(t))return e;var n=[];return Object.keys(t).map(function(e){var r=function(e,r){if(!r||"string"==typeof r||"number"==typeof r||"boolean"==typeof r)return[{searchField:e,searchValue:r}];var t={};return t[e]=r,function(e){var r=[];return function e(t,n){for(var o in n=n||"",t)if(t.hasOwnProperty(o)){var i=t&&t[o],a=n?n+"."+o:o;"object"==typeof i||i instanceof Array?e(i,a):r.push({searchField:a,searchValue:i})}}(e,null),r}(t)}(e,t[e]);n.push.apply(n,r)}),e.filter(function(e){return n.reduce(function(t,n){var o=function(e,t,n){var o=r.get(e,t);return!o&&!n||!!o&&("string"==typeof n?o.toString().toLowerCase().includes(n.toLowerCase()):"boolean"==typeof n||"number"==typeof n?o===n:!!Array.isArray(n)&&n.includes(o))}(e,n.searchField,n.searchValue);return o&&t},!0)})}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var v=function(){return null},m=/*#__PURE__*/function(){function e(e,r){this.title=void 0,this.cacheEnabledKey=void 0,this.title=e,this.cacheEnabledKey=r}var r,t,n=e.prototype;return n.isEnabled=function(){return!!localStorage.getItem(this.cacheEnabledKey)},n.SetEnabled=function(e){e?localStorage.setItem(this.cacheEnabledKey,"true"):localStorage.removeItem(this.cacheEnabledKey)},r=e,(t=[{key:"log",get:function(){return this.isEnabled()?console.log.bind(console,this.title):v}},{key:"warn",get:function(){return this.isEnabled()?console.warn.bind(console,this.title):v}},{key:"error",get:function(){return this.isEnabled()?console.error.bind(console,this.title):v}}])&&function(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(o=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?o:String(o),n)}var o}(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}(),p=new m("💸firestore-costs:","LOGGING_FIRESTORE_COSTS_ENABLED"),g="firecosts-single-reads",P=new m("🔥raf:","LOGGING_ENABLED"),y=P.log,b=P.error,w=P.warn;function D(e,r,t){var n=document.getElementById("eventMonitor");if(n){var o=new CustomEvent(e,{detail:{fileName:r,data:t}});n.dispatchEvent(o)}else y("eventMonitor not found to dispatch event "+e+" for "+r)}var j="___REF_FULLPATH_";function R(e){var r={parsedDoc:{},refdocs:[]};return!e||"object"!=typeof e||(Object.keys(e).map(function(t){e[t]=L(e[t],t,r)}),r.parsedDoc=e),r}function L(e,r,t){if(!e)return e;if("object"!=typeof e)return e;if(e.toDate&&"function"==typeof e.toDate)return e.toDate();if(Array.isArray(e))return e.map(function(e,n){return L(e,r+"."+n,t)});if(F(e)){var n=e;return t.refdocs.push({fieldPath:r,refDocPath:n.path}),n.id}return"object"==typeof e?(Object.keys(e).map(function(r){e[r]=L(e[r],r,t)}),e):e}function F(e){return"string"==typeof e.id&&"object"==typeof e.firestore&&"object"==typeof e.parent&&"string"==typeof e.path}var T=function e(n,o){try{var i,a=function(r){if(i)return r;var t=Array.isArray(o);return t?Promise.all(o.map(function(r,t){return Promise.resolve(e(n,r)).then(function(e){o[t]=e})})):F(o)?o:t||"object"!=typeof o?void 0:Promise.all(Object.keys(o).map(function(r){try{return Promise.resolve(e(n,o[r])).then(function(e){o[r]=e})}catch(e){return Promise.reject(e)}}))};if(!o||"object"!=typeof o)return Promise.resolve(o);var s=r.has(o,"src"),u=function(){if(s)return function(e,r){try{var a=Promise.resolve(t.getDownloadURL(t.ref(n.storage(),o.src))).then(function(e){var r=d({},o,{src:e});return i=1,r})}catch(e){return r(e)}return a&&a.then?a.then(void 0,r):a}(0,function(e){return b("Error when getting download URL",{error:e}),i=1,o})}();return Promise.resolve(u&&u.then?u.then(a):a(u))}catch(e){return Promise.reject(e)}};function A(e){if(!e)return w("parseFireStoreDocument: no doc",{doc:e}),{};var t=R(e.data()),n=function(e,t){return t.map(function(t){r.set(e,j+t.fieldPath,t.refDocPath)}),e}(t.parsedDoc,t.refdocs);return d({id:e.id},n)}function G(e,r){if(!e)return r+"";if(!r)throw new Error("Resource name must be a string of length greater than 0 characters");var t="string"==typeof e?e:e(),n=u.default.join("/",t,"/",r,"/");if((n.split("/").length-1)%2)throw new Error('The rootRef path must point to a "document"\n    not a "collection"e.g. /collection/document/ or\n    /collection/document/collection/document/');return n.slice(1,-1)}function E(){return u.default.join.apply(u.default,[].slice.call(arguments))}function S(e){var r={uploads:[],refdocs:[],parsedDoc:{}};return!e||"object"!=typeof e||(Object.keys(e).map(function(t){U(e[t],t,r)}),r.parsedDoc=e),r}function U(e,r,t){return e?"string"==typeof r&&r.includes(j)?void t.refdocs.push({fieldDotsPath:r,refPath:e}):"object"!=typeof e?e:e.toDate&&"function"==typeof e.toDate?e.toDate():Array.isArray(e)?e.map(function(e,n){return U(e,r+"."+n,t)}):e&&e.hasOwnProperty("rawFile")?(t.uploads.push({fieldDotsPath:r,fieldSlashesPath:r.split(".").join("/"),rawFile:e.rawFile}),void delete e.rawFile):(Object.keys(e).map(function(n){U(e[n],r+"."+n,t)}),e):e}var I=/*#__PURE__*/function(){function e(e,r){this._app=void 0,this._firestore=void 0,this._storage=void 0,this._auth=void 0,this.options=void 0;var n=e||{};this.options=n,this._app=window._app=function(e,r){if(r.app)return r.app;var t=o.getApps();return null!=t&&t.length?o.getApp():o.initializeApp(e)}(r,n),this._firestore=a.getFirestore(this._app),this._storage=t.getStorage(this._app),this._auth=i.getAuth(this._app)}var r=e.prototype;return r.dbGetCollection=function(e){return a.collection(this._firestore,e)},r.dbCreateBatch=function(){return a.writeBatch(this._firestore)},r.dbMakeNewId=function(){return a.doc(a.collection(this._firestore,"collections")).id},r.OnUserLogout=function(e){this._auth.onAuthStateChanged(function(r){var t=!r;y("FirebaseWrapper.OnUserLogout",{user:r,isLoggedOut:t}),t&&e(r)})},r.putFile=function(e,r){var n=t.uploadBytesResumable(t.ref(this._storage,e),r),o=new Promise(function(e,r){return n.then(e).catch(r)}),i=o.then(function(e){return t.getDownloadURL(e.ref)}).then(function(e){return e});return{task:n,taskResult:o,downloadUrl:i}},r.getStorageDownloadUrl=function(e){try{return Promise.resolve(t.getDownloadURL(t.ref(this._storage,e)))}catch(e){return Promise.reject(e)}},r.serverTimestamp=function(){return a.serverTimestamp()},r.authSetPersistence=function(e){try{var r;switch(e){case"local":r=i.browserLocalPersistence;break;case"none":r=i.inMemoryPersistence;break;default:r=i.browserSessionPersistence}return y("setPersistence",{persistenceInput:e,persistenceResolved:r}),Promise.resolve(this._auth.setPersistence(r).catch(function(e){return console.error(e)}))}catch(e){return Promise.reject(e)}},r.authSigninEmailPassword=function(e,r){try{return Promise.resolve(i.signInWithEmailAndPassword(this._auth,e,r))}catch(e){return Promise.reject(e)}},r.authSignOut=function(){try{return Promise.resolve(i.signOut(this._auth))}catch(e){return Promise.reject(e)}},r.authGetUserLoggedIn=function(){try{var e=this;return Promise.resolve(new Promise(function(r,t){var n=e._auth;if(n.currentUser)return r(n.currentUser);var o=i.onAuthStateChanged(e._auth,function(e){o(),e?r(e):t()})}))}catch(e){return Promise.reject(e)}},r.GetUserLogin=function(){try{return Promise.resolve(this.authGetUserLoggedIn())}catch(e){return Promise.reject(e)}},r.auth=function(){return this._auth},r.storage=function(){return this._storage},r.GetApp=function(){return this._app},r.db=function(){return this._firestore},e}();function k(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var _=/*#__PURE__*/function(){function e(e,r){this.fireWrapper=void 0;var t=r||{};y("Auth Client: initializing...",{firebaseConfig:e,options:t}),this.fireWrapper=new I(t,e),t.persistence&&this.setPersistence(t.persistence)}var r=e.prototype;return r.setPersistence=function(e){return this.fireWrapper.authSetPersistence(e)},r.HandleAuthLogin=function(e){try{var r=this,t=e.username,n=e.password;return Promise.resolve(t&&n?k(function(){return Promise.resolve(r.fireWrapper.authSigninEmailPassword(t,n)).then(function(e){return y("HandleAuthLogin: user sucessfully logged in",{user:e}),e})},function(){throw y("HandleAuthLogin: invalid credentials",{params:e}),new Error("Login error: invalid credentials")}):r.getUserLogin())}catch(e){return Promise.reject(e)}},r.HandleAuthLogout=function(){return this.fireWrapper.authSignOut()},r.HandleAuthError=function(e){return y("HandleAuthLogin: invalid credentials",{errorHttp:e}),"ok"===function(e){if(e>=200&&e<300)return"ok";switch(e){case 401:case 403:return"unauthenticated";default:return"ok"}}(!!e&&e.status)?(y("API is actually authenticated"),Promise.resolve()):(w("Received authentication error from API"),Promise.reject())},r.HandleAuthCheck=function(){try{return Promise.resolve(this.getUserLogin())}catch(e){return Promise.reject(e)}},r.getUserLogin=function(){return this.fireWrapper.authGetUserLoggedIn()},r.HandleGetPermissions=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.claims})})},function(e){return y("HandleGetPermission: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetIdentity=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){var r=e.displayName,t=e.photoURL;return{id:e.uid,fullName:""+(null!=r?r:""),avatar:""+(null!=t?t:"")}})},function(e){return y("HandleGetIdentity: no user is logged in",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTAuthTime=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.authTime})})},function(e){return y("HandleGetJWTAuthTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTExpirationTime=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.expirationTime})})},function(e){return y("HandleGetJWTExpirationTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTSignInProvider=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.signInProvider})})},function(e){return y("HandleGetJWTSignInProvider: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTIssuedAtTime=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.issuedAtTime})})},function(e){return y("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTToken=function(){try{var e=this;return Promise.resolve(k(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.token})})},function(e){return y("HandleGetJWTToken: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},e}(),C=/*#__PURE__*/function(){function e(e,r,t){var n=this;this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.resources={},this.fireWrapper=e,this.options=r,this.flogger=t,this.fireWrapper.OnUserLogout(function(){n.resources={}})}var r=e.prototype;return r.TryGetResource=function(e,r,t){try{var n=function(){return o.TryGetResourcePromise(e,t)},o=this,i=function(){if(r)return Promise.resolve(o.RefreshResource(e,t)).then(function(){})}();return Promise.resolve(i&&i.then?i.then(n):n())}catch(e){return Promise.reject(e)}},r.GetResource=function(e){var r=this.resources[e];if(!r)throw new Error("react-admin-firebase: Can't find resource: \""+e+'"');return r},r.TryGetResourcePromise=function(e,r){try{var t=this;return y("resourceManager.TryGetResourcePromise",{relativePath:e,collectionQuery:r}),Promise.resolve(t.initPath(e)).then(function(){var r=t.resources[e];if(!r)throw new Error('react-admin-firebase: Cant find resource: "'+e+'"');return r})}catch(e){return Promise.reject(e)}},r.RefreshResource=function(e,r){try{var t,n,o=this;if(null!=(t=o.options)&&null!=(n=t.lazyLoading)&&n.enabled)throw w("resourceManager.RefreshResource",{warn:"RefreshResource is not available in lazy loading mode"}),new Error("react-admin-firebase: RefreshResource is not available in lazy loading mode");return y("resourceManager.RefreshResource",{relativePath:e,collectionQuery:r}),Promise.resolve(o.initPath(e)).then(function(){var t=o.resources[e],n=t.collection,i=o.applyQuery(n,r);return Promise.resolve(a.getDocs(i)).then(function(e){t.list=[],e.forEach(function(e){return t.list.push(A(e))}),o.flogger.logDocument(e.docs.length)(),y("resourceManager.RefreshResource",{newDocs:e,resource:t,collectionPath:n.path})})})}catch(e){return Promise.reject(e)}},r.GetSingleDoc=function(e,r){try{var t=this;return Promise.resolve(t.initPath(e)).then(function(){var n=t.GetResource(e);return t.flogger.logDocument(1)(),Promise.resolve(a.getDoc(a.doc(n.collection,r))).then(function(t){if(!t.exists)throw new Error("react-admin-firebase: No id found matching: "+r);var o=A(t);return y("resourceManager.GetSingleDoc",{relativePath:e,resource:n,docId:r,docSnap:t,result:o}),o})})}catch(e){return Promise.reject(e)}},r.initPath=function(e){try{var r=this,t=G(r.options&&r.options.rootRef,e),n=!!r.resources[e];if(y("resourceManager.initPath()",{absolutePath:t,hasBeenInited:n}),n)return y("resourceManager.initPath() has been initialized already..."),Promise.resolve();var o=r.fireWrapper.dbGetCollection(t),i={collection:o,list:[],path:e,pathAbsolute:t};return r.resources[e]=i,y("resourceManager.initPath() setting resource...",{resource:i,allResources:r.resources,collection:o,collectionPath:o.path}),Promise.resolve()}catch(e){return Promise.reject(e)}},r.getUserIdentifier=function(){try{var e=this;return Promise.resolve(e.options.associateUsersById?e.getCurrentUserId():e.getCurrentUserEmail())}catch(e){return Promise.reject(e)}},r.getCurrentUserEmail=function(){try{return Promise.resolve(this.fireWrapper.authGetUserLoggedIn()).then(function(e){return e?e.email:"annonymous user"})}catch(e){return Promise.reject(e)}},r.getCurrentUserId=function(){try{return Promise.resolve(this.fireWrapper.authGetUserLoggedIn()).then(function(e){return e?e.uid:"annonymous user"})}catch(e){return Promise.reject(e)}},r.applyQuery=function(e,r){var t=r?r(e):e;return y("resourceManager.applyQuery() ...",{collection:e,collectionQuery:(r||"-").toString(),collRef:t}),t},e}(),M=/*#__PURE__*/function(){function e(e,r,t){this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.rm=void 0,this.fireWrapper=e,this.options=r,this.flogger=t,this.rm=new C(this.fireWrapper,this.options,this.flogger)}var t=e.prototype;return t.checkRemoveIdField=function(e,r){this.options.dontAddIdFieldToDoc||(e.id=r)},t.transformToDb=function(e,r,t){return"function"==typeof this.options.transformToDb?this.options.transformToDb(e,r,t):r},t.parseDataAndUpload=function(e,t,n){try{var o=this;if(!n)return Promise.resolve(n);var i=a.doc(e.collection,t).path,s=S(n);return Promise.resolve(Promise.all(s.uploads.map(function(e){try{var t=function(e,r,t,n){var o=e instanceof File?e.name.split("."):[],i=null!=o&&o.length?"."+o.pop():"";return n?E(r,t,e.name):E(r,t+i)}(e.rawFile,i,e.fieldDotsPath,!!o.options.useFileNamesInStorage);return Promise.resolve(o.saveFile(t,e.rawFile)).then(function(t){r.set(n,e.fieldDotsPath+".src",t)})}catch(e){return Promise.reject(e)}}))).then(function(){return n})}catch(e){return Promise.reject(e)}},t.addCreatedByFields=function(e){try{var r=this;return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_at)return e.renameMetaFields.created_at;var r=e.metaFieldCasing,t="createdate";return r?"camel"===r?"createDate":"snake"===r?"create_date":"pascal"===r?"CreateDate":"kebab"===r?"create-date":t:t}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_by)return e.renameMetaFields.created_by;var r=e.metaFieldCasing,t="createdby";return r?"camel"===r?"createdBy":"snake"===r?"created_by":"pascal"===r?"CreatedBy":"kebab"===r?"created-by":t:t}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,r.fireWrapper,r.rm,r.options))}catch(e){return Promise.reject(e)}},t.addUpdatedByFields=function(e){try{var r=this;return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_at)return e.renameMetaFields.updated_at;var r=e.metaFieldCasing,t="lastupdate";return r?"camel"===r?"lastUpdate":"snake"===r?"last_update":"pascal"===r?"LastUpdate":"kebab"===r?"last-update":t:t}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_by)return e.renameMetaFields.updated_by;var r=e.metaFieldCasing,t="updatedby";return r?"camel"===r?"updatedBy":"snake"===r?"updated_by":"pascal"===r?"UpdatedBy":"kebab"===r?"updated-by":t:t}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,r.fireWrapper,r.rm,r.options))}catch(e){return Promise.reject(e)}},t.saveFile=function(e,t){try{var n=this;return y("saveFile() saving file...",{storagePath:e,rawFile:t}),Promise.resolve(function(r,o){try{var i=(s=(a=n.fireWrapper.putFile(e,t)).task,u=a.taskResult,c=a.downloadUrl,D("FILE_UPLOAD_WILL_START",l=t.name),s.on("state_changed",function(e){var r=e.bytesTransferred/e.totalBytes*100;switch(y("Upload is "+r+"% done"),D("FILE_UPLOAD_PROGRESS",l,r),e.state){case"paused":y("Upload is paused"),D("FILE_UPLOAD_PAUSED",l);break;case"running":y("Upload is running"),D("FILE_UPLOAD_RUNNING",l);break;case"cancelled":y("Upload has been canceled"),D("FILE_UPLOAD_CANCELED",l)}}),Promise.resolve(Promise.all([c,u])).then(function(r){var t=r[0];return D("FILE_UPLOAD_COMPLETE",l),D("FILE_SAVED",l),y("saveFile() saved file",{storagePath:e,taskResult:u,getDownloadURL:t}),n.options.relativeFilePaths?e:t}))}catch(e){return o(e)}var a,s,u,c,l;return i&&i.then?i.then(void 0,o):i}(0,function(e){"storage/unknown"===r.get(e,"code")?b('saveFile() error saving file, No bucket found! Try clicking "Get Started" in firebase -> storage',{storageError:e}):b("saveFile() error saving file",{storageError:e})}))}catch(e){return Promise.reject(e)}},e}();function O(e,r,t){if(!e.s){if(t instanceof W){if(!t.s)return void(t.o=O.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(O.bind(null,e,r),O.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}var W=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{O(n,1,i(this.v))}catch(e){O(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?O(n,1,r?r(o):o):t?O(n,1,t(o)):O(n,2,o)}catch(e){O(n,2,e)}},n},e}();function N(e){return e instanceof W&&1&e.s}var H=function(e,r,t,n){try{var o=btoa(JSON.stringify(d({},r,{resourceName:t}))),i=localStorage.getItem(o);return i?Promise.resolve(a.getDoc(a.doc(e,i))).then(function(e){return n.logDocument(1)(),!!e.exists()&&e}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},B=function(e,r,t,n,o){void 0===o&&(o=J);try{var i=function(r){return{noPagination:a.query.apply(void 0,[e].concat([].concat(s,u))),withPagination:a.query.apply(void 0,[e].concat([].concat(s,u,r)))}},s=o.filters?(c=r.filter,Object.entries(c).flatMap(function(e){var r=e[0],t=e[1];return Array.isArray(t)?[a.where(r,"array-contains-any",t)]:1===Object.keys(c).length&&isNaN(t)?[a.where(r,">=",t),a.where(r,"<",t+"z")]:[a.where(r,"==",t)]})):[],u=o.sort?function(e){if(null!=e&&"id"!==e.field){var r=e.field,t=e.order.toLocaleLowerCase();return[a.orderBy(r,t)]}return[]}(r.sort):[];return Promise.resolve(o.pagination?Promise.resolve(function(e,r,t,n,o){try{var i=t.pagination,s=i.perPage;return 1===i.page?Promise.resolve([a.limit(s)]):Promise.resolve(H(e,t,n,o)).then(function(i){function u(){return[a.startAfter(i),a.limit(s)]}var c=function(){if(!i)return Promise.resolve(function(e,r,t,n,o){try{var i=function(){var t=(u-f)*c,n=a.query.apply(void 0,[e].concat([].concat(r,1===f?[a.limit(t)]:[a.startAfter(l),a.limit(t)])));return Promise.resolve(a.getDocs(n)).then(function(e){var r=e.docs.length;return o.logDocument(r)(),e.docs[r-1]})},s=t.pagination,u=s.page,c=s.perPage,l=!1,f=u-1,h=d({},t,{pagination:d({},t.pagination)}),v=function(e,r,t){for(var n;;){var o=e();if(N(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=t();if(i&&i.then){if(!N(i)){n=1;break}i=i.s}if(r){var a=r();if(a&&a.then&&!N(a)){n=2;break}}}var s=new W,u=O.bind(null,s,2);return(0===n?o.then(l):1===n?i.then(c):a.then(f)).then(void 0,u),s;function c(n){i=n;do{if(r&&(a=r())&&a.then&&!N(a))return void a.then(f).then(void 0,u);if(!(o=e())||N(o)&&!o.v)return void O(s,1,i);if(o.then)return void o.then(l).then(void 0,u);N(i=t())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,u)}function l(e){e?(i=t())&&i.then?i.then(c).then(void 0,u):c(i):O(s,1,i)}function f(){(o=e())?o.then?o.then(l).then(void 0,u):l(o):O(s,1,i)}}(function(){return!l&&f>1},void 0,function(){return f--,h.pagination.page=f,console.log("getting query cursor currentPage=",f),Promise.resolve(H(e,h,n,o)).then(function(e){l=e})});return Promise.resolve(v&&v.then?v.then(i):i())}catch(e){return Promise.reject(e)}}(e,r,t,n,o)).then(function(e){i=e})}();return c&&c.then?c.then(u):u()})}catch(e){return Promise.reject(e)}}(e,[].concat(s,u),r,t,n)).then(i):i([]))}catch(e){return Promise.reject(e)}var c},J={filters:!0,sort:!0,pagination:!0};function x(e,r){return d({},e,{filter:r?d({deleted:!1},e.filter):e.filter})}function z(e,r,t){if(!e.s){if(t instanceof q){if(!t.s)return void(t.o=z.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(z.bind(null,e,r),z.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}var q=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{z(n,1,i(this.v))}catch(e){z(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?z(n,1,r?r(o):o):t?z(n,1,t(o)):z(n,2,o)}catch(e){z(n,2,e)}},n},e}();function Q(e,r,t){var n=[];for(var o in e)n.push(o);return function(e,r,t){var n,o,i=-1;return function a(s){try{for(;++i<e.length&&(!t||!t());)if((s=r(i))&&s.then){if(!((u=s)instanceof q&&1&u.s))return void s.then(a,o||(o=z.bind(null,n=new q,2)));s=s.v}n?z(n,1,s):n=s}catch(e){z(n||(n=new q),2,e)}var u}(),n}(n,function(e){return r(n[e])},t)}var K=/*#__PURE__*/function(){function e(e,r,t){this.options=void 0,this.rm=void 0,this.client=void 0,this.options=e,this.rm=r,this.client=t}var r=e.prototype;return r.apiGetList=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o=x(r,!!t.options.softDelete);return y("apiGetListLazy",{resourceName:e,params:o}),Promise.resolve(B(n.collection,o,e,t.client.flogger)).then(function(r){var i=r.noPagination;return Promise.resolve(a.getDocs(r.withPagination)).then(function(r){var s=r.docs.length;if(!s)return y("apiGetListLazy",{message:"There are not records for given query"}),{data:[],total:0};t.client.flogger.logDocument(s)();var u=r.docs.map(function(e){return A(e)});return function(e,r,t){var n=btoa(JSON.stringify(d({},r,{resourceName:t})));localStorage.setItem(n,e.id);var o="ra-firebase-cursor-keys_"+t,i=localStorage.getItem(o);if(i){var a=JSON.parse(i).concat(n);localStorage.setItem(o,JSON.stringify(a))}else localStorage.setItem(o,JSON.stringify([n]))}(r.docs[r.docs.length-1],function(e){return d({},e,{pagination:d({},e.pagination,{page:e.pagination.page+1})})}(o),e),Promise.resolve(a.getCountFromServer(i)).then(function(e){var r;function o(t){return r?t:(y("apiGetListLazy result",{docs:u,resource:n,collectionPath:n.collection.path}),{data:u,total:e.data().count})}var i=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){try{var r=Q(e,function(r){return Promise.resolve(T(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(t){y("apiGetListLazy result",{docs:t,resource:n,collectionPath:n.collection.path});var o={data:t,total:e.data().count};return r=1,o})}();return i&&i.then?i.then(o):o(i)})})})})}catch(e){return Promise.reject(e)}},r.apiGetManyReference=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o;y("apiGetManyReferenceLazy",{resourceName:e,resource:n,reactAdminParams:r});var i=d({},r.filter,((o={})[r.target]=r.id,o)),s=x(d({},r,{filter:i}),!!t.options.softDelete);return Promise.resolve(B(n.collection,s,e,t.client.flogger)).then(function(e){return Promise.resolve(a.getDocs(e.withPagination)).then(function(e){var r;function o(e){return r?e:(y("apiGetManyReferenceLazy result",{docs:i,resource:n,collectionPath:n.collection.path}),{data:i,total:i.length})}t.client.flogger.logDocument(e.docs.length)();var i=e.docs.map(A),a=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(i.map(function(e){try{var r=Q(e,function(r){return Promise.resolve(T(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return y("apiGetManyReferenceLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:i.length}})}();return a&&a.then?a.then(o):o(a)})})})}catch(e){return Promise.reject(e)}},r.tryGetResource=function(e,r){try{return Promise.resolve(this.rm.TryGetResourcePromise(e,r))}catch(e){return Promise.reject(e)}},e}();e.FirebaseAuthProvider=function(e,r){!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider")}(e,r),P.SetEnabled(!(null==r||!r.logging));var t=new _(e,r);return{login:function(e){return t.HandleAuthLogin(e)},logout:function(){return t.HandleAuthLogout()},checkAuth:function(){return t.HandleAuthCheck()},checkError:function(e){return t.HandleAuthError(e)},getPermissions:function(){return t.HandleGetPermissions()},getIdentity:function(){return t.HandleGetIdentity()},getAuthUser:function(){return t.getUserLogin()},getJWTAuthTime:function(){return t.HandleGetJWTAuthTime()},getJWTExpirationTime:function(){return t.HandleGetJWTExpirationTime()},getJWTSignInProvider:function(){return t.HandleGetJWTSignInProvider()},getJWTClaims:function(){return t.HandleGetPermissions()},getJWTToken:function(){return t.HandleGetJWTToken()}}},e.FirebaseDataProvider=function(e,r){var t,n,o=function(e){try{var r;return Promise.resolve(function(t,n){try{var o=Promise.resolve(e()).then(function(e){return r=e})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){var t=(e||"").toString(),n=function(e){var r=/\[code\=([\w-]*)/g.exec(e),t=Array.isArray(r)&&r[1];switch(t||b("unknown StatusCode ",{statusTxt:e}),t){case"unauthenticated":return 401;case"permission-denied":return 403;case"internal":return 0;case"invalid-argument":return 400;case"not-found":return 404;case"aborted":return 409;case"resource-exhausted":return 429;case"cancelled":return 499;case"internal":return 500;case"unimplemented":return 501;case"unavailable":return 503;case"deadline-exceeded":return 504;default:return 200}}(t),o={status:n,message:t,json:r};throw b("DataProvider:",e,{errorMsg:t,code:n,errorObj:o}),o}))}catch(e){return Promise.reject(e)}},i=r||{};!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider");r&&r.rootRef&&G(r.rootRef,"test")}(e,i);var s=function(e){return{SetEnabled:function(e){p.SetEnabled(e)},ResetCount:function(e){e&&localStorage.removeItem(g)},logDocument:function(r){if(null==e||null==(t=e.lazyLoading)||!t.enabled)return v;var t,n=function(e){void 0===e&&(e=1);var r=localStorage.getItem(g)||"",t=(parseInt(r)||0)+e;return localStorage.setItem(g,t+""),t}(r);return p.log.bind(console,"+"+r+" (session total="+n+" documents read)")}}}(i);P.SetEnabled(!(null==i||!i.logging)),s.SetEnabled(!(null==i||null==(t=i.firestoreCostsLogger)||!t.enabled)),s.ResetCount(!(null!=i&&null!=(n=i.firestoreCostsLogger)&&n.persistCount)),y("Creating FirebaseDataProvider",{firebaseConfig:e,options:i});var u=new I(r,e),l=new M(u,i,s);return{app:u.GetApp(),getList:function(e,r){return o(function(){return function(e,r,t){try{var n;y("GetList",{resourceName:e,params:r});var o=t.rm,i=t.fireWrapper,a=t.options;if(null!=a&&null!=(n=a.lazyLoading)&&n.enabled){var s=new K(a,o,t);return Promise.resolve(s.apiGetList(e,r))}var u=r.filter||{},l=u.collectionQuery;return delete u.collectionQuery,Promise.resolve(o.TryGetResource(e,"REFRESH",l)).then(function(e){var t;function n(e){return t?e:{data:v,total:m}}var o=e.list;if(null!=r.sort){var s=r.sort;c(o,s.field,"ASC"===s.order?"asc":"desc")}var l=o;a.softDelete&&!Object.keys(u).includes("deleted")&&(l=o.filter(function(e){return!e.deleted}));var d=f(l,u),h=(r.pagination.page-1)*r.pagination.perPage,v=d.slice(h,h+r.pagination.perPage),m=d.length,p=function(){if(a.relativeFilePaths)return Promise.resolve(Promise.all(v.map(function(e){return T(i,e)}))).then(function(e){return t=1,{data:e,total:m}})}();return p&&p.then?p.then(n):n(p)})}catch(e){return Promise.reject(e)}}(e,r,l)})},getOne:function(e,r){return o(function(){return function(e,r,t){try{y("GetOne",{resourceName:e,params:r});var n=t.rm;return Promise.resolve(function(o,i){try{var a=Promise.resolve(n.GetSingleDoc(e,r.id+"")).then(function(e){return t.flogger.logDocument(1)(),{data:e}})}catch(e){return i()}return a&&a.then?a.then(void 0,i):a}(0,function(){throw new Error("Error getting id: "+r.id+" from collection: "+e)}))}catch(e){return Promise.reject(e)}}(e,r,l)})},getMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.options,o=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(i){var s=r.ids;return y("GetMany",{resourceName:e,resource:i,params:r,ids:s}),Promise.resolve(Promise.all(s.map(function(e){return a.getDoc(a.doc(i.collection,"string"==typeof e?e:e.___refid))}))).then(function(e){var r;function i(e){return r?e:{data:u}}t.flogger.logDocument(s.length)();var a=e.map(function(e){return d({},e.data(),{id:e.id})}),u=n.softDelete?a.filter(function(e){return!e.deleted}):a,c=function(){if(n.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){return T(o,e)}))).then(function(e){return r=1,{data:e}})}();return c&&c.then?c.then(i):i(c)})})}catch(e){return Promise.reject(e)}}(e,r,l)})},getManyReference:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.options,i=t.fireWrapper;y("GetManyReference",{resourceName:e,params:r});var a=r.filter||{};return Promise.resolve(n.TryGetResource(e,"REFRESH",a.collectionQuery)).then(function(t){var n;function s(e){return n?e:{data:b,total:w}}delete a.collectionQuery,y("apiGetManyReference",{resourceName:e,resource:t,params:r});var u=t.list,l=r.target,d=r.id,h=u;o.softDelete&&(h=u.filter(function(e){return!e.deleted}));var v=f(h,a),m={};m[l]=d;var p=f(v,m);if(null!=r.sort){var g=r.sort;c(p,g.field,"ASC"===g.order?"asc":"desc")}var P=(r.pagination.page-1)*r.pagination.perPage,b=p.slice(P,P+r.pagination.perPage),w=p.length,D=function(){if(o.relativeFilePaths)return Promise.resolve(Promise.all(p.map(function(e){return T(i,e)}))).then(function(e){return n=1,{data:e,total:w}})}();return D&&D.then?D.then(s):s(D)})}catch(e){return Promise.reject(e)}}(e,r,l)})},update:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;y("Update",{resourceName:e,params:r});var o=r.id+"";return delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return y("Update",{resourceName:e,resource:n,params:r}),Promise.resolve(t.parseDataAndUpload(n,o,r.data)).then(function(r){var i=d({},r);return t.checkRemoveIdField(i,o),Promise.resolve(t.addUpdatedByFields(i)).then(function(){var s=t.transformToDb(e,i,o);return Promise.resolve(a.updateDoc(a.doc(n.collection,o),s)).then(function(){return{data:d({},r,{id:o})}})})})})}catch(e){return Promise.reject(e)}}(e,r,l)})},updateMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return y("UpdateMany",{resourceName:e,params:r}),delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return y("UpdateMany",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(o){try{var i=o+"";return Promise.resolve(t.parseDataAndUpload(n,i,r.data)).then(function(r){var o=d({},r);return t.checkRemoveIdField(o,i),Promise.resolve(t.addUpdatedByFields(o)).then(function(){var s=t.transformToDb(e,o,i);return Promise.resolve(a.updateDoc(a.doc(n.collection,i),s)).then(function(){return d({},r,{id:i})})})})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,l)})},create:function(e,r){return o(function(){return function(e,r,t){try{var n=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){var i;function s(s){if(i)return s;var u=n.dbMakeNewId();return Promise.resolve(t.parseDataAndUpload(o,u,r.data)).then(function(r){var n=d({},r);return t.checkRemoveIdField(n,u),Promise.resolve(t.addCreatedByFields(n)).then(function(){return Promise.resolve(t.addUpdatedByFields(n)).then(function(){var r=t.transformToDb(e,n,u);return Promise.resolve(a.setDoc(a.doc(o.collection,u),r,{merge:!1})).then(function(){return{data:d({},r,{id:u})}})})})})}y("Create",{resourceName:e,resource:o,params:r});var u=r.data&&r.data.id;y("Create",{hasOverridenDocId:u});var c=function(){if(u){var n=r.data.id;return Promise.resolve(a.getDoc(a.doc(o.collection,n))).then(function(s){if(s.exists())throw new Error('the id:"'+n+"\" already exists, please use a unique string if overriding the 'id' field");return Promise.resolve(t.parseDataAndUpload(o,n,r.data)).then(function(r){if(!n)throw new Error("id must be a valid string");var s=d({},r);return t.checkRemoveIdField(s,n),Promise.resolve(t.addCreatedByFields(s)).then(function(){return Promise.resolve(t.addUpdatedByFields(s)).then(function(){var r=t.transformToDb(e,s,n);return y("Create",{docObj:s}),Promise.resolve(a.setDoc(a.doc(o.collection,n),r,{merge:!1})).then(function(){var e={data:d({},r,{id:n})};return i=1,e})})})})})}}();return c&&c.then?c.then(s):s(c)})}catch(e){return Promise.reject(e)}}(e,r,l)})},delete:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return t.options.softDelete?Promise.resolve(function(e,r,t){try{var n=r.id+"";return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){y("DeleteSoft",{resourceName:e,resource:o,params:r});var i={deleted:!0};return Promise.resolve(t.addUpdatedByFields(i)).then(function(){return a.updateDoc(a.doc(o.collection,n),i).catch(function(e){b("DeleteSoft error",{error:e})}),{data:r.previousData}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){var n;function o(e){return n?e:{data:r.previousData}}y("apiDelete",{resourceName:e,resource:t,params:r});var i=function(e,n){try{var o=Promise.resolve(a.deleteDoc(a.doc(t.collection,r.id+""))).then(function(){})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw new Error(e)});return i&&i.then?i.then(o):o(i)})}catch(e){return Promise.reject(e)}}(e,r,l)})},deleteMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.fireWrapper;return t.options.softDelete?Promise.resolve(function(e,r,t){try{return Promise.resolve(t.rm.TryGetResource(e)).then(function(n){return y("DeleteManySoft",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var r=e+"",o={deleted:!0};return Promise.resolve(t.addUpdatedByFields(o)).then(function(){return a.updateDoc(a.doc(n.collection,r),o).catch(function(e){b("apiSoftDeleteMany error",{error:e})}),r})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){var n;function i(e){return n?e:{data:u}}y("DeleteMany",{resourceName:e,resource:t,params:r});for(var s,u=[],c=o.dbCreateBatch(),l=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return h(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,r):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(r.ids);!(s=l()).done;){var f=s.value,d=a.doc(t.collection,f+"");c.delete(d),u.push(f)}var v=function(e,r){try{var t=Promise.resolve(c.commit()).then(function(){})}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}(0,function(e){throw new Error(e)});return v&&v.then?v.then(i):i(v)})}catch(e){return Promise.reject(e)}}(e,r,l)})}}}});
//# sourceMappingURL=index.umd.js.map
