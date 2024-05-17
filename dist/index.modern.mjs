import{get as e,isEmpty as t,has as r,set as a}from"lodash";import{getDownloadURL as n,ref as o,getStorage as s,uploadBytesResumable as i}from"firebase/storage";import c from"path-browserify";import{getApps as l,getApp as u,initializeApp as d}from"firebase/app";import{getAuth as p,signInWithEmailAndPassword as h,signOut as f,onAuthStateChanged as g,browserSessionPersistence as m,inMemoryPersistence as y,browserLocalPersistence as w}from"firebase/auth";import{getFirestore as b,collection as P,writeBatch as v,doc as R,serverTimestamp as F,getDoc as L,setDoc as D,updateDoc as T,deleteDoc as G,getDocs as E,query as U,limit as I,startAfter as _,where as A,orderBy as S,getCountFromServer as k}from"firebase/firestore";function C(t,r,a){t.sort((t,n)=>{const o=e(t,r),s=e(n,r),i="asc"===a;return Number.isFinite(o)&&Number.isFinite(s)?W(o,s,i):"string"==typeof o&&"string"==typeof s?W(o.toLowerCase(),s.toLowerCase(),i):o instanceof Date&&s instanceof Date?W(o,s,i):W(!!o,!!s,i)})}function W(e,t,r){return e>t?r?1:-1:e<t?r?-1:1:0}function M(r,a){if(!a||t(a))return r;const n=[];return Object.keys(a).map(e=>{const t=function(e,t){if(!t||"string"==typeof t||"number"==typeof t||"boolean"==typeof t)return[{searchField:e,searchValue:t}];const r={};return r[e]=t,function(e){var t=[],r=(e,a)=>{for(var n in a=a||"",e)if(e.hasOwnProperty(n)){const o=e&&e[n],s=a?a+"."+n:n;"object"==typeof o||o instanceof Array?r(o,s):t.push({searchField:s,searchValue:o})}};return r(e,null),t}(r)}(e,a[e]);n.push(...t)}),r.filter(t=>n.reduce((r,a)=>{const n=function(t,r,a){const n=e(t,r);return!n&&!a||!!n&&("string"==typeof a?n.toString().toLowerCase().includes(a.toLowerCase()):"boolean"==typeof a||"number"==typeof a?n===a:!!Array.isArray(a)&&a.includes(n))}(t,a.searchField,a.searchValue);return n&&r},!0))}const N=(...e)=>null;class O{constructor(e,t){this.title=void 0,this.cacheEnabledKey=void 0,this.title=e,this.cacheEnabledKey=t}isEnabled(){return!!localStorage.getItem(this.cacheEnabledKey)}SetEnabled(e){e?localStorage.setItem(this.cacheEnabledKey,"true"):localStorage.removeItem(this.cacheEnabledKey)}get log(){return this.isEnabled()?console.log.bind(console,this.title):N}get warn(){return this.isEnabled()?console.warn.bind(console,this.title):N}get error(){return this.isEnabled()?console.error.bind(console,this.title):N}}const H=new O("💸firestore-costs:","LOGGING_FIRESTORE_COSTS_ENABLED"),j="firecosts-single-reads",J=new O("🔥raf:","LOGGING_ENABLED"),B=J.log,$=J.error,z=J.warn;function x(e,t,r){const a=document.getElementById("eventMonitor");if(!a)return void B(`eventMonitor not found to dispatch event ${e} for ${t}`);let n=new CustomEvent(e,{detail:{fileName:t,data:r}});a.dispatchEvent(n)}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Q.apply(this,arguments)}const K="___REF_FULLPATH_";function V(e){const t={parsedDoc:{},refdocs:[]};return!e||"object"!=typeof e||(Object.keys(e).map(r=>{e[r]=q(e[r],r,t)}),t.parsedDoc=e),t}function q(e,t,r){if(!e)return e;if("object"!=typeof e)return e;if(e.toDate&&"function"==typeof e.toDate)return e.toDate();if(Array.isArray(e))return e.map((e,a)=>q(e,`${t}.${a}`,r));if(X(e)){const a=e;return r.refdocs.push({fieldPath:t,refDocPath:a.path}),a.id}return"object"==typeof e?(Object.keys(e).map(t=>{e[t]=q(e[t],t,r)}),e):e}function X(e){return"string"==typeof e.id&&"object"==typeof e.firestore&&"object"==typeof e.parent&&"string"==typeof e.path}const Y=async(e,t)=>{if(!t||"object"!=typeof t)return t;if(r(t,"src"))try{const r=await n(o(e.storage(),t.src));return Q({},t,{src:r})}catch(e){return $("Error when getting download URL",{error:e}),t}const a=Array.isArray(t);return a?Promise.all(t.map(async(r,a)=>{t[a]=await Y(e,r)})):X(t)?t:a||"object"!=typeof t?void 0:Promise.all(Object.keys(t).map(async r=>{const a=t[r];t[r]=await Y(e,a)}))};function Z(e){if(!e)return z("parseFireStoreDocument: no doc",{doc:e}),{};const t=V(e.data()),r=function(e,t){return t.map(t=>{a(e,K+t.fieldPath,t.refDocPath)}),e}(t.parsedDoc,t.refdocs);return Q({id:e.id},r)}function ee(e,t){if(!e)return t+"";if(!t)throw new Error("Resource name must be a string of length greater than 0 characters");const r="string"==typeof e?e:e(),a=c.join("/",r,"/",t,"/");if((a.split("/").length-1)%2)throw new Error('The rootRef path must point to a "document"\n    not a "collection"e.g. /collection/document/ or\n    /collection/document/collection/document/');return a.slice(1,-1)}function te(...e){return c.join(...e)}function re(e){const t={uploads:[],refdocs:[],parsedDoc:{}};return!e||"object"!=typeof e||(Object.keys(e).map(r=>{ae(e[r],r,t)}),t.parsedDoc=e),t}function ae(e,t,r){return e?"string"==typeof t&&t.includes(K)?void r.refdocs.push({fieldDotsPath:t,refPath:e}):"object"!=typeof e?e:e.toDate&&"function"==typeof e.toDate?e.toDate():Array.isArray(e)?e.map((e,a)=>ae(e,`${t}.${a}`,r)):e&&e.hasOwnProperty("rawFile")?(r.uploads.push({fieldDotsPath:t,fieldSlashesPath:t.split(".").join("/"),rawFile:e.rawFile}),void delete e.rawFile):(Object.keys(e).map(a=>{ae(e[a],`${t}.${a}`,r)}),e):e}console.log("WTF?!");class ne{constructor(e,t){this._app=void 0,this._firestore=void 0,this._storage=void 0,this._auth=void 0,this.options=void 0;const r=e||{};this.options=r,this._app=window._app=function(e,t){if(t.app)return t.app;const r=l();return null!=r&&r.length?u():d(e)}(t,r),console.log("firebaseConfig",t),console.log("getFirestore",b),this._firestore=b(this._app,t.database||""),this._storage=s(this._app),this._auth=p(this._app)}dbGetCollection(e){return P(this._firestore,e)}dbCreateBatch(){return v(this._firestore)}dbMakeNewId(){return R(P(this._firestore,"collections")).id}OnUserLogout(e){this._auth.onAuthStateChanged(t=>{const r=!t;B("FirebaseWrapper.OnUserLogout",{user:t,isLoggedOut:r}),r&&e(t)})}putFile(e,t){const r=i(o(this._storage,e),t),a=new Promise((e,t)=>r.then(e).catch(t)),s=a.then(e=>n(e.ref)).then(e=>e);return{task:r,taskResult:a,downloadUrl:s}}async getStorageDownloadUrl(e){return n(o(this._storage,e))}serverTimestamp(){return F()}async authSetPersistence(e){let t;switch(e){case"local":t=w;break;case"none":t=y;break;default:t=m}return B("setPersistence",{persistenceInput:e,persistenceResolved:t}),this._auth.setPersistence(t).catch(e=>console.error(e))}async authSigninEmailPassword(e,t){return await h(this._auth,e,t)}async authSignOut(){return f(this._auth)}async authGetUserLoggedIn(){return new Promise((e,t)=>{const r=this._auth;if(r.currentUser)return e(r.currentUser);const a=g(this._auth,r=>{a(),r?e(r):t()})})}async GetUserLogin(){return this.authGetUserLoggedIn()}auth(){return this._auth}storage(){return this._storage}GetApp(){return this._app}db(){return this._firestore}}class oe{constructor(e,t){this.fireWrapper=void 0;const r=t||{};B("Auth Client: initializing...",{firebaseConfig:e,options:r}),this.fireWrapper=new ne(r,e),r.persistence&&this.setPersistence(r.persistence)}setPersistence(e){return this.fireWrapper.authSetPersistence(e)}async HandleAuthLogin(e){const{username:t,password:r}=e;if(!t||!r)return this.getUserLogin();try{const e=await this.fireWrapper.authSigninEmailPassword(t,r);return B("HandleAuthLogin: user sucessfully logged in",{user:e}),e}catch(t){throw B("HandleAuthLogin: invalid credentials",{params:e}),new Error("Login error: invalid credentials")}}HandleAuthLogout(){return this.fireWrapper.authSignOut()}HandleAuthError(e){return B("HandleAuthLogin: invalid credentials",{errorHttp:e}),"ok"===function(e){if(e>=200&&e<300)return"ok";switch(e){case 401:case 403:return"unauthenticated";default:return"ok"}}(!!e&&e.status)?(B("API is actually authenticated"),Promise.resolve()):(z("Received authentication error from API"),Promise.reject())}async HandleAuthCheck(){return this.getUserLogin()}getUserLogin(){return this.fireWrapper.authGetUserLoggedIn()}async HandleGetPermissions(){try{const e=await this.getUserLogin();return(await e.getIdTokenResult()).claims}catch(e){return B("HandleGetPermission: no user is logged in or tokenResult error",{e}),null}}async HandleGetIdentity(){try{const{uid:e,displayName:t,photoURL:r}=await this.getUserLogin();return{id:e,fullName:`${null!=t?t:""}`,avatar:`${null!=r?r:""}`}}catch(e){return B("HandleGetIdentity: no user is logged in",{e}),null}}async HandleGetJWTAuthTime(){try{const e=await this.getUserLogin();return(await e.getIdTokenResult()).authTime}catch(e){return B("HandleGetJWTAuthTime: no user is logged in or tokenResult error",{e}),null}}async HandleGetJWTExpirationTime(){try{const e=await this.getUserLogin();return(await e.getIdTokenResult()).expirationTime}catch(e){return B("HandleGetJWTExpirationTime: no user is logged in or tokenResult error",{e}),null}}async HandleGetJWTSignInProvider(){try{const e=await this.getUserLogin();return(await e.getIdTokenResult()).signInProvider}catch(e){return B("HandleGetJWTSignInProvider: no user is logged in or tokenResult error",{e}),null}}async HandleGetJWTIssuedAtTime(){try{const e=await this.getUserLogin();return(await e.getIdTokenResult()).issuedAtTime}catch(e){return B("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e}),null}}async HandleGetJWTToken(){try{const e=await this.getUserLogin();return(await e.getIdTokenResult()).token}catch(e){return B("HandleGetJWTToken: no user is logged in or tokenResult error",{e}),null}}}function se(e,t){!function(e,t){if(!(e||t&&t.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider")}(e,t),J.SetEnabled(!(null==t||!t.logging));const r=new oe(e,t);return{login:e=>r.HandleAuthLogin(e),logout:()=>r.HandleAuthLogout(),checkAuth:()=>r.HandleAuthCheck(),checkError:e=>r.HandleAuthError(e),getPermissions:()=>r.HandleGetPermissions(),getIdentity:()=>r.HandleGetIdentity(),getAuthUser:()=>r.getUserLogin(),getJWTAuthTime:()=>r.HandleGetJWTAuthTime(),getJWTExpirationTime:()=>r.HandleGetJWTExpirationTime(),getJWTSignInProvider:()=>r.HandleGetJWTSignInProvider(),getJWTClaims:()=>r.HandleGetPermissions(),getJWTToken:()=>r.HandleGetJWTToken()}}class ie{constructor(e,t,r){this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.resources={},this.fireWrapper=e,this.options=t,this.flogger=r,this.fireWrapper.OnUserLogout(()=>{this.resources={}})}async TryGetResource(e,t,r){return t&&await this.RefreshResource(e,r),this.TryGetResourcePromise(e,r)}GetResource(e){const t=this.resources[e];if(!t)throw new Error(`react-admin-firebase: Can't find resource: "${e}"`);return t}async TryGetResourcePromise(e,t){B("resourceManager.TryGetResourcePromise",{relativePath:e,collectionQuery:t}),await this.initPath(e);const r=this.resources[e];if(!r)throw new Error(`react-admin-firebase: Cant find resource: "${e}"`);return r}async RefreshResource(e,t){var r,a;if(null!=(r=this.options)&&null!=(a=r.lazyLoading)&&a.enabled)throw z("resourceManager.RefreshResource",{warn:"RefreshResource is not available in lazy loading mode"}),new Error("react-admin-firebase: RefreshResource is not available in lazy loading mode");B("resourceManager.RefreshResource",{relativePath:e,collectionQuery:t}),await this.initPath(e);const n=this.resources[e],o=n.collection,s=this.applyQuery(o,t),i=await E(s);n.list=[],i.forEach(e=>n.list.push(Z(e))),this.flogger.logDocument(i.docs.length)(),B("resourceManager.RefreshResource",{newDocs:i,resource:n,collectionPath:o.path})}async GetSingleDoc(e,t){await this.initPath(e);const r=this.GetResource(e);this.flogger.logDocument(1)();const a=await L(R(r.collection,t));if(!a.exists)throw new Error("react-admin-firebase: No id found matching: "+t);const n=Z(a);return B("resourceManager.GetSingleDoc",{relativePath:e,resource:r,docId:t,docSnap:a,result:n}),n}async initPath(e){const t=ee(this.options&&this.options.rootRef,e),r=!!this.resources[e];if(B("resourceManager.initPath()",{absolutePath:t,hasBeenInited:r}),r)return void B("resourceManager.initPath() has been initialized already...");const a=this.fireWrapper.dbGetCollection(t),n={collection:a,list:[],path:e,pathAbsolute:t};this.resources[e]=n,B("resourceManager.initPath() setting resource...",{resource:n,allResources:this.resources,collection:a,collectionPath:a.path})}async getUserIdentifier(){return this.options.associateUsersById?await this.getCurrentUserId():await this.getCurrentUserEmail()}async getCurrentUserEmail(){const e=await this.fireWrapper.authGetUserLoggedIn();return e?e.email:"annonymous user"}async getCurrentUserId(){const e=await this.fireWrapper.authGetUserLoggedIn();return e?e.uid:"annonymous user"}applyQuery(e,t){const r=t?t(e):e;return B("resourceManager.applyQuery() ...",{collection:e,collectionQuery:(t||"-").toString(),collRef:r}),r}}class ce{constructor(e,t,r){this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.rm=void 0,this.fireWrapper=e,this.options=t,this.flogger=r,this.rm=new ie(this.fireWrapper,this.options,this.flogger)}checkRemoveIdField(e,t){this.options.dontAddIdFieldToDoc||(e.id=t)}transformToDb(e,t,r){return"function"==typeof this.options.transformToDb?this.options.transformToDb(e,t,r):t}async parseDataAndUpload(e,t,r){var n=this;if(!r)return r;const o=R(e.collection,t).path,s=re(r).uploads;return await Promise.all(s.map(async function(e){const t=function(e,t,r,a){const n=e instanceof File?e.name.split("."):[],o=null!=n&&n.length?"."+n.pop():"";return a?te(t,r,e.name):te(t,r+o)}(e.rawFile,o,e.fieldDotsPath,!!n.options.useFileNamesInStorage),s=await n.saveFile(t,e.rawFile);a(r,e.fieldDotsPath+".src",s)})),r}async addCreatedByFields(e){return async function(e,t,r,a){if(a.disableMeta)return;const n=await r.getUserIdentifier(),o=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_at)return e.renameMetaFields.created_at;const t=e.metaFieldCasing,r="createdate";return t?"camel"===t?"createDate":"snake"===t?"create_date":"pascal"===t?"CreateDate":"kebab"===t?"create-date":r:r}(a),s=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_by)return e.renameMetaFields.created_by;const t=e.metaFieldCasing,r="createdby";return t?"camel"===t?"createdBy":"snake"===t?"created_by":"pascal"===t?"CreatedBy":"kebab"===t?"created-by":r:r}(a);e[o]=t.serverTimestamp(),e[s]=n}(e,this.fireWrapper,this.rm,this.options)}async addUpdatedByFields(e){return async function(e,t,r,a){if(a.disableMeta)return;const n=await r.getUserIdentifier(),o=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_at)return e.renameMetaFields.updated_at;const t=e.metaFieldCasing,r="lastupdate";return t?"camel"===t?"lastUpdate":"snake"===t?"last_update":"pascal"===t?"LastUpdate":"kebab"===t?"last-update":r:r}(a),s=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_by)return e.renameMetaFields.updated_by;const t=e.metaFieldCasing,r="updatedby";return t?"camel"===t?"updatedBy":"snake"===t?"updated_by":"pascal"===t?"UpdatedBy":"kebab"===t?"updated-by":r:r}(a);e[o]=t.serverTimestamp(),e[s]=n}(e,this.fireWrapper,this.rm,this.options)}async saveFile(t,r){B("saveFile() saving file...",{storagePath:t,rawFile:r});try{const{task:e,taskResult:a,downloadUrl:n}=this.fireWrapper.putFile(t,r),{name:o}=r;x("FILE_UPLOAD_WILL_START",o),e.on("state_changed",e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(B("Upload is "+t+"% done"),x("FILE_UPLOAD_PROGRESS",o,t),e.state){case"paused":B("Upload is paused"),x("FILE_UPLOAD_PAUSED",o);break;case"running":B("Upload is running"),x("FILE_UPLOAD_RUNNING",o);break;case"cancelled":B("Upload has been canceled"),x("FILE_UPLOAD_CANCELED",o)}});const[s]=await Promise.all([n,a]);return x("FILE_UPLOAD_COMPLETE",o),x("FILE_SAVED",o),B("saveFile() saved file",{storagePath:t,taskResult:a,getDownloadURL:s}),this.options.relativeFilePaths?t:s}catch(t){"storage/unknown"===e(t,"code")?$('saveFile() error saving file, No bucket found! Try clicking "Get Started" in firebase -> storage',{storageError:t}):$("saveFile() error saving file",{storageError:t})}}}async function le(e,t,r,a){const n=btoa(JSON.stringify(Q({},t,{resourceName:r}))),o=localStorage.getItem(n);if(!o)return!1;const s=await L(R(e,o));return a.logDocument(1)(),!!s.exists()&&s}const ue={filters:!0,sort:!0,pagination:!0};async function de(e,t,r,a,n=ue){const o=n.filters?(s=t.filter,Object.entries(s).flatMap(([e,t])=>Array.isArray(t)?[A(e,"array-contains-any",t)]:1===Object.keys(s).length&&isNaN(t)?[A(e,">=",t),A(e,"<",t+"z")]:[A(e,"==",t)])):[];var s;const i=n.sort?function(e){if(null!=e&&"id"!==e.field){const{field:t,order:r}=e,a=r.toLocaleLowerCase();return[S(t,a)]}return[]}(t.sort):[],c=n.pagination?await async function(e,t,r,a,n){const{page:o,perPage:s}=r.pagination;if(1===o)return[I(s)];{let o=await le(e,r,a,n);return o||(o=await async function(e,t,r,a,n){const{page:o,perPage:s}=r.pagination;let i=!1,c=o-1;const l=Q({},r,{pagination:Q({},r.pagination)});for(;!i&&c>1;)c--,l.pagination.page=c,console.log("getting query cursor currentPage=",c),i=await le(e,l,a,n);const u=(o-c)*s,d=1===c?U(e,...t,I(u)):U(e,...t,_(i),I(u)),p=await E(d),h=p.docs.length;return n.logDocument(h)(),p.docs[h-1]}(e,t,r,a,n)),[_(o),I(s)]}}(e,[...o,...i],t,r,a):[];return{noPagination:U(e,...o,...i),withPagination:U(e,...o,...i,...c)}}function pe(e,t){return Q({},e,{filter:t?Q({deleted:!1},e.filter):e.filter})}class he{constructor(e,t,r){this.options=void 0,this.rm=void 0,this.client=void 0,this.options=e,this.rm=t,this.client=r}async apiGetList(e,t){var r=this;const a=await this.tryGetResource(e),n=pe(t,!!this.options.softDelete);B("apiGetListLazy",{resourceName:e,params:n});const{noPagination:o,withPagination:s}=await de(a.collection,n,e,this.client.flogger),i=await E(s),c=i.docs.length;if(!c)return B("apiGetListLazy",{message:"There are not records for given query"}),{data:[],total:0};this.client.flogger.logDocument(c)();const l=i.docs.map(e=>Z(e));!function(e,t,r){const a=btoa(JSON.stringify(Q({},t,{resourceName:r})));localStorage.setItem(a,e.id);const n=`ra-firebase-cursor-keys_${r}`,o=localStorage.getItem(n);if(o){const e=JSON.parse(o).concat(a);localStorage.setItem(n,JSON.stringify(e))}else localStorage.setItem(n,JSON.stringify([a]))}(i.docs[i.docs.length-1],function(e){return Q({},e,{pagination:Q({},e.pagination,{page:e.pagination.page+1})})}(n),e);let u=await k(o);if(this.options.relativeFilePaths){const e=await Promise.all(l.map(async function(e){for(let t in e)e[t]=await Y(r.client.fireWrapper,e[t]);return e}));return B("apiGetListLazy result",{docs:e,resource:a,collectionPath:a.collection.path}),{data:e,total:u.data().count}}return B("apiGetListLazy result",{docs:l,resource:a,collectionPath:a.collection.path}),{data:l,total:u.data().count}}async apiGetManyReference(e,t){var r=this;const a=await this.tryGetResource(e);B("apiGetManyReferenceLazy",{resourceName:e,resource:a,reactAdminParams:t});const n=Q({},t.filter,{[t.target]:t.id}),o=pe(Q({},t,{filter:n}),!!this.options.softDelete),{withPagination:s}=await de(a.collection,o,e,this.client.flogger),i=await E(s);this.client.flogger.logDocument(i.docs.length)();const c=i.docs.map(Z);if(this.options.relativeFilePaths){const e=await Promise.all(c.map(async function(e){for(let t in e)e[t]=await Y(r.client.fireWrapper,e[t]);return e}));return B("apiGetManyReferenceLazy result",{docs:e,resource:a,collectionPath:a.collection.path}),{data:e,total:c.length}}return B("apiGetManyReferenceLazy result",{docs:c,resource:a,collectionPath:a.collection.path}),{data:c,total:c.length}}async tryGetResource(e,t){return this.rm.TryGetResourcePromise(e,t)}}function fe(e,t){var r,a;const n=t||{};!function(e,t){if(!(e||t&&t.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider");t&&t.rootRef&&ee(t.rootRef,"test")}(e,n);const o=function(e){return{SetEnabled(e){H.SetEnabled(e)},ResetCount(e){e&&localStorage.removeItem(j)},logDocument(t){if(null==e||null==(r=e.lazyLoading)||!r.enabled)return N;var r;const a=function(e=1){const t=localStorage.getItem(j)||"",r=(parseInt(t)||0)+e;return localStorage.setItem(j,r+""),r}(t);return H.log.bind(console,`+${t} (session total=${a} documents read)`)}}}(n);J.SetEnabled(!(null==n||!n.logging)),o.SetEnabled(!(null==n||null==(r=n.firestoreCostsLogger)||!r.enabled)),o.ResetCount(!(null!=n&&null!=(a=n.firestoreCostsLogger)&&a.persistCount)),B("Creating FirebaseDataProvider",{firebaseConfig:e,options:n});const s=new ne(t,e);async function i(e){let t;try{return t=await e(),t}catch(e){const r=(e||"").toString(),a=function(e){const t=/\[code\=([\w-]*)/g.exec(e),r=Array.isArray(t)&&t[1];switch(r||$("unknown StatusCode ",{statusTxt:e}),r){case"unauthenticated":return 401;case"permission-denied":return 403;case"internal":return 0;case"invalid-argument":return 400;case"not-found":return 404;case"aborted":return 409;case"resource-exhausted":return 429;case"cancelled":return 499;case"internal":return 500;case"unimplemented":return 501;case"unavailable":return 503;case"deadline-exceeded":return 504;default:return 200}}(r),n={status:a,message:r,json:t};throw $("DataProvider:",e,{errorMsg:r,code:a,errorObj:n}),n}}const c=new ce(s,n,o),l={app:s.GetApp(),getList:(e,t)=>i(()=>async function(e,t,r){var a;B("GetList",{resourceName:e,params:t});const{rm:n,fireWrapper:o,options:s}=r;if(null!=s&&null!=(a=s.lazyLoading)&&a.enabled)return new he(s,n,r).apiGetList(e,t);const i=t.filter||{},c=i.collectionQuery;delete i.collectionQuery;const l=(await n.TryGetResource(e,"REFRESH",c)).list;if(null!=t.sort){const{field:e,order:r}=t.sort;C(l,e,"ASC"===r?"asc":"desc")}let u=l;s.softDelete&&!Object.keys(i).includes("deleted")&&(u=l.filter(e=>!e.deleted));const d=M(u,i),p=(t.pagination.page-1)*t.pagination.perPage,h=d.slice(p,p+t.pagination.perPage),f=d.length;if(s.relativeFilePaths){const e=await Promise.all(h.map(e=>Y(o,e)));return{data:e,total:f}}return{data:h,total:f}}(e,t,c)),getOne:(e,t)=>i(()=>async function(e,t,r){B("GetOne",{resourceName:e,params:t});const{rm:a}=r;try{const n=t.id+"",o=await a.GetSingleDoc(e,n);return r.flogger.logDocument(1)(),{data:o}}catch(r){throw new Error("Error getting id: "+t.id+" from collection: "+e)}}(e,t,c)),getMany:(e,t)=>i(()=>async function(e,t,r){const{rm:a,options:n,fireWrapper:o}=r,s=await a.TryGetResource(e),i=t.ids;B("GetMany",{resourceName:e,resource:s,params:t,ids:i});const c=await Promise.all(i.map(e=>L(R(s.collection,"string"==typeof e?e:e.___refid))));r.flogger.logDocument(i.length)();const l=c.map(e=>Q({},e.data(),{id:e.id})),u=n.softDelete?l.filter(e=>!e.deleted):l;return n.relativeFilePaths?{data:await Promise.all(u.map(e=>Y(o,e)))}:{data:u}}(e,t,c)),getManyReference:(e,t)=>i(()=>async function(e,t,r){const{rm:a,options:n,fireWrapper:o}=r;B("GetManyReference",{resourceName:e,params:t});const s=t.filter||{},i=s.collectionQuery,c=await a.TryGetResource(e,"REFRESH",i);delete s.collectionQuery,B("apiGetManyReference",{resourceName:e,resource:c,params:t});const l=c.list,u=t.target,d=t.id;let p=l;n.softDelete&&(p=l.filter(e=>!e.deleted));const h=M(p,s),f={};f[u]=d;const g=M(h,f);if(null!=t.sort){const{field:e,order:r}=t.sort;C(g,e,"ASC"===r?"asc":"desc")}const m=(t.pagination.page-1)*t.pagination.perPage,y=g.slice(m,m+t.pagination.perPage),w=g.length;if(n.relativeFilePaths){const e=await Promise.all(g.map(e=>Y(o,e)));return{data:e,total:w}}return{data:y,total:w}}(e,t,c)),update:(e,t)=>i(()=>async function(e,t,r){const{rm:a}=r;B("Update",{resourceName:e,params:t});const n=t.id+"";delete t.data.id;const o=await a.TryGetResource(e);B("Update",{resourceName:e,resource:o,params:t});const s=await r.parseDataAndUpload(o,n,t.data),i=Q({},s);r.checkRemoveIdField(i,n),await r.addUpdatedByFields(i);const c=r.transformToDb(e,i,n);return await T(R(o.collection,n),c),{data:Q({},s,{id:n})}}(e,t,c)),updateMany:(e,t)=>i(()=>async function(e,t,r){const{rm:a}=r;B("UpdateMany",{resourceName:e,params:t}),delete t.data.id;const n=await a.TryGetResource(e);B("UpdateMany",{resourceName:e,resource:n,params:t});const o=t.ids;return{data:await Promise.all(o.map(async a=>{const o=a+"",s=await r.parseDataAndUpload(n,o,t.data),i=Q({},s);r.checkRemoveIdField(i,o),await r.addUpdatedByFields(i);const c=r.transformToDb(e,i,o);return await T(R(n.collection,o),c),Q({},s,{id:o})}))}}(e,t,c)),create:(e,t)=>i(()=>async function(e,t,r){const{rm:a,fireWrapper:n}=r,o=await a.TryGetResource(e);B("Create",{resourceName:e,resource:o,params:t});const s=t.data&&t.data.id;if(B("Create",{hasOverridenDocId:s}),s){const a=t.data.id;if((await L(R(o.collection,a))).exists())throw new Error(`the id:"${a}" already exists, please use a unique string if overriding the 'id' field`);const n=await r.parseDataAndUpload(o,a,t.data);if(!a)throw new Error("id must be a valid string");const s=Q({},n);r.checkRemoveIdField(s,a),await r.addCreatedByFields(s),await r.addUpdatedByFields(s);const i=r.transformToDb(e,s,a);return B("Create",{docObj:s}),await D(R(o.collection,a),i,{merge:!1}),{data:Q({},i,{id:a})}}const i=n.dbMakeNewId(),c=Q({},await r.parseDataAndUpload(o,i,t.data));r.checkRemoveIdField(c,i),await r.addCreatedByFields(c),await r.addUpdatedByFields(c);const l=r.transformToDb(e,c,i);return await D(R(o.collection,i),l,{merge:!1}),{data:Q({},l,{id:i})}}(e,t,c)),delete:(e,t)=>i(()=>async function(e,t,r){const{rm:a,options:n}=r;if(n.softDelete)return async function(e,t,r){const{rm:a}=r,n=t.id+"",o=await a.TryGetResource(e);B("DeleteSoft",{resourceName:e,resource:o,params:t});const s={deleted:!0};return await r.addUpdatedByFields(s),T(R(o.collection,n),s).catch(e=>{$("DeleteSoft error",{error:e})}),{data:t.previousData}}(e,t,r);const o=await a.TryGetResource(e);B("apiDelete",{resourceName:e,resource:o,params:t});try{const e=t.id+"";await G(R(o.collection,e))}catch(e){throw new Error(e)}return{data:t.previousData}}(e,t,c)),deleteMany:(e,t)=>i(()=>async function(e,t,r){const{options:a,rm:n,fireWrapper:o}=r;if(a.softDelete)return async function(e,t,r){const{rm:a}=r,n=await a.TryGetResource(e);B("DeleteManySoft",{resourceName:e,resource:n,params:t});const o=t.ids;return{data:await Promise.all(o.map(async e=>{const t=e+"",a={deleted:!0};return await r.addUpdatedByFields(a),T(R(n.collection,t),a).catch(e=>{$("apiSoftDeleteMany error",{error:e})}),t}))}}(e,t,r);const s=await n.TryGetResource(e);B("DeleteMany",{resourceName:e,resource:s,params:t});const i=[],c=o.dbCreateBatch();for(const e of t.ids){const t=R(s.collection,e+"");c.delete(t),i.push(e)}try{await c.commit()}catch(e){throw new Error(e)}return{data:i}}(e,t,c))};return l}export{se as FirebaseAuthProvider,fe as FirebaseDataProvider};
//# sourceMappingURL=index.modern.mjs.map
