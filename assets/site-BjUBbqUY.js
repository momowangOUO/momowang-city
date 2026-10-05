(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,F=33779,I=35840,L=35841,R=35842,ee=35843,te=36196,ne=37492,re=37496,ie=37488,z=37489,ae=37490,oe=37491,se=37808,ce=37809,le=37810,ue=37811,de=37812,fe=37813,pe=37814,me=37815,he=37816,ge=37817,_e=37818,ve=37819,ye=37820,be=37821,xe=36492,Se=36494,Ce=36495,we=36283,Te=36284,Ee=36285,De=36286,Oe=2300,B=2301,ke=2302,Ae=2303,je=2400,V=2401,Me=2402,H=3200,Ne=`srgb`,U=`srgb-linear`,Pe=`linear`,Fe=`srgb`,Ie=7680,Le=35044,Re=2e3;function ze(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Be(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ve(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function He(){let e=Ve(`canvas`);return e.style.display=`block`,e}var Ue={};function We(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ge(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=Ge(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=Ge(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ke(...e){let t=e.join(` `);t in Ue||(Ue[t]=!0,W(...e))}function qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Je={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ye=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Xe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ze=Math.PI/180,Qe=180/Math.PI;function $e(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xe[e&255]+Xe[e>>8&255]+Xe[e>>16&255]+Xe[e>>24&255]+`-`+Xe[t&255]+Xe[t>>8&255]+`-`+Xe[t>>16&15|64]+Xe[t>>24&255]+`-`+Xe[n&63|128]+Xe[n>>8&255]+`-`+Xe[n>>16&255]+Xe[n>>24&255]+Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function et(e,t){return(e%t+t)%t}function tt(e,t,n){return(1-n)*e+n*t}function nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var q=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return at.copy(this).projectOnVector(e),this.sub(at)}reflect(e){return this.sub(at.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},at=new J,ot=new it,Y=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ke(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(st.makeScale(e,t)),this}rotate(e){return Ke(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(st.makeRotation(-e)),this}translate(e,t){return Ke(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(st.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},st=new Y,ct=new Y().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lt=new Y().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ut(){let e={enabled:!0,workingColorSpace:U,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=dt(e.r),e.g=dt(e.g),e.b=dt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ft(e.r),e.g=ft(e.g),e.b=ft(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Pe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ke(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ke(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[U]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:ct,fromXYZ:lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:ct,fromXYZ:lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),e}var X=ut();function dt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var pt,mt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pt===void 0&&(pt=Ve(`canvas`)),pt.width=e.width,pt.height=e.height;let t=pt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=pt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ve(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=dt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(dt(t[e]/255)*255):t[e]=dt(t[e]);return{data:t,width:e.width,height:e.height}}else return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ht=0,gt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ht++}),this.uuid=$e(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(_t(r[t].image)):e.push(_t(r[t]))}else e=_t(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function _t(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?mt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var vt=0,yt=new J,bt=class r extends Ye{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vt++}),this.uuid=$e(),this.name=``,this.source=new gt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Y,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yt).x}get height(){return this.source.getSize(yt).y}get depth(){return this.source.getSize(yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null,bt.DEFAULT_MAPPING=300,bt.DEFAULT_ANISOTROPY=1;var xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},St=class extends Ye{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let r=new bt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new gt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ct=class extends St{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wt=class extends bt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Tt=class extends bt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Et=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Dt.setFromMatrixColumn(e,0).length(),i=1/Dt.setFromMatrixColumn(e,1).length(),a=1/Dt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kt,e,At)}lookAt(e,t,n){let r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),jt.crossVectors(n,Nt),jt.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),jt.crossVectors(n,Nt)),jt.normalize(),Mt.crossVectors(Nt,jt),r[0]=jt.x,r[4]=Mt.x,r[8]=Nt.x,r[1]=jt.y,r[5]=Mt.y,r[9]=Nt.y,r[2]=jt.z,r[6]=Mt.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Dt.set(r[0],r[1],r[2]).length(),o=Dt.set(r[4],r[5],r[6]).length(),s=Dt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ot.copy(this);let c=1/a,l=1/o,u=1/s;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=l,Ot.elements[5]*=l,Ot.elements[6]*=l,Ot.elements[8]*=u,Ot.elements[9]*=u,Ot.elements[10]*=u,t.setFromRotationMatrix(Ot),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Re,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Re,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Dt=new J,Ot=new Et,kt=new J(0,0,0),At=new J(1,1,1),jt=new J,Mt=new J,Nt=new J,Pt=new Et,Ft=new it,It=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ft.setFromEuler(this),this.setFromQuaternion(Ft,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};It.DEFAULT_ORDER=`XYZ`;var Lt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Rt=0,zt=new J,Bt=new it,Vt=new Et,Ht=new J,Ut=new J,Wt=new J,Gt=new it,Kt=new J(1,0,0),qt=new J(0,1,0),Jt=new J(0,0,1),Yt={type:`added`},Xt={type:`removed`},Zt={type:`childadded`,child:null},Qt={type:`childremoved`,child:null},$t=class e extends Ye{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=$e(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new It,r=new it,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new Y}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bt.setFromAxisAngle(e,t),this.quaternion.multiply(Bt),this}rotateOnWorldAxis(e,t){return Bt.setFromAxisAngle(e,t),this.quaternion.premultiply(Bt),this}rotateX(e){return this.rotateOnAxis(Kt,e)}rotateY(e){return this.rotateOnAxis(qt,e)}rotateZ(e){return this.rotateOnAxis(Jt,e)}translateOnAxis(e,t){return zt.copy(e).applyQuaternion(this.quaternion),this.position.add(zt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kt,e)}translateY(e){return this.translateOnAxis(qt,e)}translateZ(e){return this.translateOnAxis(Jt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ht.copy(e):Ht.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ut.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(Ut,Ht,this.up):Vt.lookAt(Ht,Ut,this.up),this.quaternion.setFromRotationMatrix(Vt),r&&(Vt.extractRotation(r.matrixWorld),Bt.setFromRotationMatrix(Vt),this.quaternion.premultiply(Bt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yt),Zt.child=e,this.dispatchEvent(Zt),Zt.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xt),Qt.child=e,this.dispatchEvent(Qt),Qt.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yt),Zt.child=e,this.dispatchEvent(Zt),Zt.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ut,e,Wt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ut,Gt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};$t.DEFAULT_UP=new J(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=class extends $t{constructor(){super(),this.isGroup=!0,this.type=`Group`}},tn={type:`move`},nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},on={h:0,s:0,l:0};function sn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var cn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=X.workingColorSpace){return this.r=e,this.g=t,this.b=n,X.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=X.workingColorSpace){if(e=et(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=sn(i,r,e+1/3),this.g=sn(i,r,e),this.b=sn(i,r,e-1/3)}return X.colorSpaceToWorking(this,r),this}setStyle(e,t=Ne){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){let n=rn[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dt(e.r),this.g=dt(e.g),this.b=dt(e.b),this}copyLinearToSRGB(e){return this.r=ft(e.r),this.g=ft(e.g),this.b=ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return X.workingToColorSpace(ln.copy(this),e),Math.round(K(ln.r*255,0,255))*65536+Math.round(K(ln.g*255,0,255))*256+Math.round(K(ln.b*255,0,255))}getHexString(e=Ne){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X.workingColorSpace){X.workingToColorSpace(ln.copy(this),t);let n=ln.r,r=ln.g,i=ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=X.workingColorSpace){return X.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Ne){X.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,r=ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(on);let n=tt(an.h,on.h,t),r=tt(an.s,on.s,t),i=tt(an.l,on.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new cn;cn.NAMES=rn;var un=class extends $t{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new It,this.environmentIntensity=1,this.environmentRotation=new It,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},dn=new J,fn=new J,pn=new J,mn=new J,hn=new J,gn=new J,_n=new J,vn=new J,yn=new J,bn=new J,xn=new xt,Sn=new xt,Cn=new xt,wn=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),dn.subVectors(e,t),r.cross(dn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){dn.subVectors(r,t),fn.subVectors(n,t),pn.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(fn),s=dn.dot(pn),c=fn.dot(fn),l=fn.dot(pn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mn)!==null&&mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,mn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,mn.x),s.addScaledVector(a,mn.y),s.addScaledVector(o,mn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return xn.setScalar(0),Sn.setScalar(0),Cn.setScalar(0),xn.fromBufferAttribute(e,t),Sn.fromBufferAttribute(e,n),Cn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xn,i.x),a.addScaledVector(Sn,i.y),a.addScaledVector(Cn,i.z),a}static isFrontFacing(e,t,n,r){return dn.subVectors(n,t),fn.subVectors(e,t),dn.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),dn.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;hn.subVectors(r,n),gn.subVectors(i,n),vn.subVectors(e,n);let s=hn.dot(vn),c=gn.dot(vn);if(s<=0&&c<=0)return t.copy(n);yn.subVectors(e,r);let l=hn.dot(yn),u=gn.dot(yn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(hn,a);bn.subVectors(e,i);let f=hn.dot(bn),p=gn.dot(bn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return _n.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(_n,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(hn,a).addScaledVector(gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Dn):Dn.fromBufferAttribute(r,t),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),On.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),On.copy(e.boundingBox)),On.applyMatrix4(e.matrixWorld),this.union(On)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fn),In.subVectors(this.max,Fn),kn.subVectors(e.a,Fn),An.subVectors(e.b,Fn),jn.subVectors(e.c,Fn),Mn.subVectors(An,kn),Nn.subVectors(jn,An),Pn.subVectors(kn,jn);let t=[0,-Mn.z,Mn.y,0,-Nn.z,Nn.y,0,-Pn.z,Pn.y,Mn.z,0,-Mn.x,Nn.z,0,-Nn.x,Pn.z,0,-Pn.x,-Mn.y,Mn.x,0,-Nn.y,Nn.x,0,-Pn.y,Pn.x,0];return!zn(t,kn,An,jn,In)||(t=[1,0,0,0,1,0,0,0,1],!zn(t,kn,An,jn,In))?!1:(Ln.crossVectors(Mn,Nn),t=[Ln.x,Ln.y,Ln.z],zn(t,kn,An,jn,In))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},En=[new J,new J,new J,new J,new J,new J,new J,new J],Dn=new J,On=new Tn,kn=new J,An=new J,jn=new J,Mn=new J,Nn=new J,Pn=new J,Fn=new J,In=new J,Ln=new J,Rn=new J;function zn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Rn.fromArray(e,a);let o=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),s=t.dot(Rn),c=n.dot(Rn),l=r.dot(Rn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Bn=new J,Vn=new q,Hn=0,Un=class extends Ye{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Le,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix3(e),this.setXY(t,Vn.x,Vn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix3(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nt(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nt(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nt(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Wn=class extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Gn=class extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Kn=class extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}},qn=new Tn,Jn=new J,Yn=new J,Xn=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);let t=Jn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Jn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(Yn)),this.expandByPoint(Jn.copy(e.center).sub(Yn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zn=0,Qn=new Et,$n=new $t,er=new J,tr=new Tn,nr=new Tn,rr=new J,ir=class e extends Ye{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zn++}),this.uuid=$e(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ze(e)?Gn:Wn)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Y().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return $n.lookAt(e),$n.updateMatrix(),this.applyMatrix4($n.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Kn(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];tr.setFromBufferAttribute(n),this.morphTargetsRelative?(rr.addVectors(this.boundingBox.min,tr.min),this.boundingBox.expandByPoint(rr),rr.addVectors(this.boundingBox.max,tr.max),this.boundingBox.expandByPoint(rr)):(this.boundingBox.expandByPoint(tr.min),this.boundingBox.expandByPoint(tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];nr.setFromBufferAttribute(n),this.morphTargetsRelative?(rr.addVectors(tr.min,nr.min),tr.expandByPoint(rr),rr.addVectors(tr.max,nr.max),tr.expandByPoint(rr)):(tr.expandByPoint(nr.min),tr.expandByPoint(nr.max))}tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)rr.fromBufferAttribute(a,t),o&&(er.fromBufferAttribute(e,t),rr.add(er)),r=Math.max(r,n.distanceToSquared(rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Un(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new q,f=new q,p=new q,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rr.fromBufferAttribute(e,t),rr.normalize(),e.setXYZ(t,rr.x,rr.y,rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Un(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ar=new J,or=new J,sr=new Y,cr=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ar.subVectors(n,t).cross(or.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ar),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sr.getNormalMatrix(e),r=this.coplanarPoint(ar).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},lr=0,ur=class extends Ye{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lr++}),this.uuid=$e(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new cn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ie,this.stencilZFail=Ie,this.stencilZPass=Ie,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new cn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new cr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},dr=new J,fr=new J,pr=new J,mr=new J,hr=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fr.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(fr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=mr.dot(this.direction),s=-mr.dot(pr),c=mr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fr).addScaledVector(pr,d),f}intersectSphere(e,t){if(e.radius<0)return null;dr.subVectors(e.center,this.origin);let n=dr.dot(this.direction),r=dr.dot(dr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,ne=j-P*N,re=M-F*N,ie=ne*te-re*ee,z=L*re-R*ne,ae=ee*R-te*L;if(r){if(ie<0||z<0||ae<0)return null}else if((ie<0||z<0||ae<0)&&(ie>0||z>0||ae>0))return null;let oe=ie+z+ae;if(oe===0)return null;let se=I*(ie*D+z*A+ae*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gr=class extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new cn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_r=new Et,vr=new hr,yr=new Xn,br=new J,xr=new J,Sr=new J,Cr=new J,wr=new J,Tr=new J,Er=new J,Dr=new J,Or=class extends $t{constructor(e=new ir,t=new gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Tr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wr.fromBufferAttribute(s,e),a?Tr.addScaledVector(wr,r):Tr.addScaledVector(wr.sub(t),r))}t.add(Tr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),vr.copy(e.ray).recast(e.near),!(yr.containsPoint(vr.origin)===!1&&(vr.intersectSphere(yr,br)===null||vr.origin.distanceToSquared(br)>(e.far-e.near)**2))&&(_r.copy(i).invert(),vr.copy(e.ray).applyMatrix4(_r),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ar(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ar(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ar(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ar(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function kr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Dr.copy(s),Dr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Dr);return l<n.near||l>n.far?null:{distance:l,point:Dr.clone(),object:e}}function Ar(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xr),e.getVertexPosition(c,Sr),e.getVertexPosition(l,Cr);let u=kr(e,t,n,r,xr,Sr,Cr,Er);if(u){let e=new J;wn.getBarycoord(Er,xr,Sr,Cr,e),i&&(u.uv=wn.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=wn.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=wn.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};wn.getNormal(xr,Sr,Cr,t.normal),u.face=t,u.barycoord=e}return u}var jr=class extends bt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mr=new Xn,Nr=new q(.5,.5),Pr=new J,Fr=class{constructor(e=new cr,t=new cr,n=new cr,r=new cr,i=new cr,a=new cr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Re,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476+Nr.distanceTo(e.center),Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ir=class extends bt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lr=class extends bt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rr=class extends bt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zr=class extends Rr{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Br=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vr=class e extends ir{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Kn(c,3)),this.setAttribute(`normal`,new Kn(l,3)),this.setAttribute(`uv`,new Kn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hr(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ur(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Xr(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Gr(a,o,n,s,c,l,0),o}function Ur(e,t,n,r,i){let a;if(i===bi(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=_i(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=_i(i/r|0,e[i],e[i+1],a);return a&&li(a,a.next)&&(vi(a),a=a.next),a}function Wr(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(li(n,n.next)||ci(n.prev,n,n.next)===0)){if(vi(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Gr(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ti(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?qr(e,r,i,a):Kr(e)){t.push(c.i,e.i,l.i),vi(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Jr(Wr(e),t),Gr(e,t,n,r,i,a,2)):o===2&&Yr(e,t,n,r,i,a):Gr(Wr(e),t,n,r,i,a,1);break}}}function Kr(e){let t=e.prev,n=e,r=e.next;if(ci(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&oi(i,s,a,c,o,l,m.x,m.y)&&ci(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qr(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ci(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ri(p,m,t,n,r),v=ri(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&oi(s,u,c,d,l,f,y.x,y.y)&&ci(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&oi(s,u,c,d,l,f,b.x,b.y)&&ci(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&oi(s,u,c,d,l,f,y.x,y.y)&&ci(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&oi(s,u,c,d,l,f,b.x,b.y)&&ci(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Jr(e,t){let n=e;do{let r=n.prev,i=n.next.next;!li(r,i)&&ui(r,n,n.next,i)&&mi(r,i)&&mi(i,r)&&(t.push(r.i,n.i,i.i),vi(n),vi(n.next),n=e=i),n=n.next}while(n!==e);return Wr(n)}function Yr(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&si(o,e)){let s=gi(o,e);o=Wr(o,o.next),s=Wr(s,s.next),Gr(o,t,n,r,i,a,0),Gr(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Xr(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ur(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ii(o))}i.sort(Zr);for(let e=0;e<i.length;e++)n=Qr(i[e],n);return n}function Zr(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Qr(e,t){let n=$r(e,t);if(!n)return t;let r=gi(n,e);return Wr(r,r.next),Wr(n,n.next)}function $r(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(li(e,n))return n;do{if(li(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ai(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);mi(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ei(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ei(e,t){return ci(e.prev,e,t.prev)<0&&ci(t.next,e,e.next)<0}function ti(e,t,n,r){let i=e;do i.z===0&&(i.z=ri(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ni(i)}function ni(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ri(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ii(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ai(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function oi(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&ai(e,t,n,r,i,a,o,s)}function si(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!pi(e,t)&&(mi(e,t)&&mi(t,e)&&hi(e,t)&&(ci(e.prev,e,t.prev)||ci(e,t.prev,t))||li(e,t)&&ci(e.prev,e,e.next)>0&&ci(t.prev,t,t.next)>0)}function ci(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function li(e,t){return e.x===t.x&&e.y===t.y}function ui(e,t,n,r){let i=fi(ci(e,t,n)),a=fi(ci(e,t,r)),o=fi(ci(n,r,e)),s=fi(ci(n,r,t));return!!(i!==a&&o!==s||i===0&&di(e,n,t)||a===0&&di(e,r,t)||o===0&&di(n,e,r)||s===0&&di(n,t,r))}function di(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function fi(e){return e>0?1:e<0?-1:0}function pi(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ui(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function mi(e,t){return ci(e.prev,e,e.next)<0?ci(e,t,e.next)>=0&&ci(e,e.prev,t)>=0:ci(e,t,e.prev)<0||ci(e,e.next,t)<0}function hi(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function gi(e,t){let n=yi(e.i,e.x,e.y),r=yi(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function _i(e,t,n,r){let i=yi(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function vi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function yi(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bi(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var xi=class{static triangulate(e,t,n=2){return Hr(e,t,n)}},Si=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ci(e),wi(n,e);let a=e.length;t.forEach(Ci);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,wi(n,t[e]);let o=xi.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ci(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function wi(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ti=class e extends ir{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Kn(p,3)),this.setAttribute(`normal`,new Kn(m,3)),this.setAttribute(`uv`,new Kn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ei(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Oi(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Oi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Di(e){let t={};for(let n=0;n<e.length;n++){let r=Ei(e[n]);for(let e in r)t[e]=r[e]}return t}function Oi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ki(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ai(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:X.workingColorSpace}var ji={clone:Ei,merge:Di},Mi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ni=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mi,this.fragmentShader=Ni,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=ki(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new cn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Et().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fi=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ii=class extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=H,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Li=class extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ri(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Vi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:je,endingEnd:je}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case V:i=e,o=2*t-n;break;case Me:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case V:a=e,s=2*n-t;break;case Me:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Hi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ui=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class extends Bi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1];i[p]=Gi(qi(n,t,g,y,r),o,_,b,m)}return i}};function Gi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ki(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function qi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Gi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ki(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ji=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ri(t,this.TimeBufferType),this.values=Ri(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ri(e.times,Array),values:Ri(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),zi(e.settings)&&(n.settings={inTangents:Ri(e.settings.inTangents,Array),outTangents:Ri(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ui(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Oe:t=this.InterpolantFactoryMethodDiscrete;break;case B:t=this.InterpolantFactoryMethodLinear;break;case ke:t=this.InterpolantFactoryMethodSmooth;break;case Ae:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oe;case this.InterpolantFactoryMethodLinear:return B;case this.InterpolantFactoryMethodSmooth:return ke;case this.InterpolantFactoryMethodBezier:return Ae}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;zi(this.settings)&&(Yi(this.settings.inTangents,e),Yi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Be(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,zi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Yi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ji.prototype.ValueTypeName=``,Ji.prototype.TimeBufferType=Float32Array,Ji.prototype.ValueBufferType=Float32Array,Ji.prototype.DefaultInterpolation=B;var Xi=class extends Ji{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName=`bool`,Xi.prototype.ValueBufferType=Array,Xi.prototype.DefaultInterpolation=Oe,Xi.prototype.InterpolantFactoryMethodLinear=void 0,Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};Zi.prototype.ValueTypeName=`color`;var Qi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};Qi.prototype.ValueTypeName=`number`;var $i=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)it.slerpFlat(i,0,a,c-o,a,c,s);return i}},ea=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new $i(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName=`quaternion`,ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Ji{constructor(e,t,n){super(e,t,n)}};ta.prototype.ValueTypeName=`string`,ta.prototype.ValueBufferType=Array,ta.prototype.DefaultInterpolation=Oe,ta.prototype.InterpolantFactoryMethodLinear=void 0,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};na.prototype.ValueTypeName=`vector`;var ra=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ia=class{constructor(e){this.manager=e===void 0?ra:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var aa=new J,oa=new it,sa=new J,ca=class extends $t{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Re,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(aa,oa,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},la=new J,ua=new q,da=new q,fa=class extends ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ze*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qe*2*Math.atan(Math.tan(Ze*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){la.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(la.x,la.y).multiplyScalar(-e/la.z),la.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(la.x,la.y).multiplyScalar(-e/la.z)}getViewSize(e,t){return this.getViewBounds(e,ua,da),t.subVectors(da,ua)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ze*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=class extends ca{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ma=-90,ha=1,ga=class extends $t{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fa(ma,ha,e,t);r.layers=this.layers,this.add(r);let i=new fa(ma,ha,e,t);i.layers=this.layers,this.add(i);let a=new fa(ma,ha,e,t);a.layers=this.layers,this.add(a);let o=new fa(ma,ha,e,t);o.layers=this.layers,this.add(o);let s=new fa(ma,ha,e,t);s.layers=this.layers,this.add(s);let c=new fa(ma,ha,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_a=class extends fa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},va=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ya.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ya(){this._document.hidden===!1&&this.reset()}var ba=`\\[\\]\\.:\\/`,xa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Sa=`[^\\[\\]\\.:\\/]`,Ca=`[^`+ba.replace(`\\.`,``)+`]`,wa=`((?:WC+[\\/:])*)`.replace(`WC`,Sa),Ta=`(WCOD+)?`.replace(`WCOD`,Ca),Ea=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Sa),Da=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Sa),Oa=RegExp(`^`+wa+Ta+Ea+Da+`$`),ka=[`material`,`materials`,`bones`,`map`],Aa=class{constructor(e,t,n){let r=n||ja.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ja=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(xa,``)}static parseTrackName(e){let t=Oa.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ka.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ja.Composite=Aa,ja.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ja.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ja.prototype.GetterByBindingType=[ja.prototype._getValue_direct,ja.prototype._getValue_array,ja.prototype._getValue_arrayElement,ja.prototype._getValue_toArray],ja.prototype.SetterByBindingTypeAndVersioning=[[ja.prototype._setValue_direct,ja.prototype._setValue_direct_setNeedsUpdate,ja.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ja.prototype._setValue_array,ja.prototype._setValue_array_setNeedsUpdate,ja.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ja.prototype._setValue_arrayElement,ja.prototype._setValue_arrayElement_setNeedsUpdate,ja.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ja.prototype._setValue_fromArray,ja.prototype._setValue_fromArray_setNeedsUpdate,ja.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ma=new Et,Na=class{constructor(e,t,n=0,r=1/0){this.ray=new hr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Lt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):G(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ma.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ma),this}intersectObject(e,t=!0,n=[]){return Fa(e,this,n,t),n.sort(Pa),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Fa(e[r],this,n,t);return n.sort(Pa),n}};function Pa(e,t){return e.distance-t.distance}function Fa(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Fa(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Ia(e,t,n,r){let i=La(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:case ee:return Math.max(e,16)*Math.max(t,8)/4;case I:case R:return Math.max(e,8)*Math.max(t,8)/2;case te:case ne:case ie:case z:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ye:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xe:case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*16;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function La(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ra(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function za(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new cn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new cn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new cn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new cn(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},Ba={basic:{uniforms:Di([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Di([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new cn(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Di([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new cn(0)},specular:{value:new cn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Di([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new cn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Di([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new cn(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Di([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Di([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Di([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Di([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Di([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Di([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Di([Q.common,Q.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Di([Q.lights,Q.fog,{color:{value:new cn(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Ba.physical={uniforms:Di([Ba.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new cn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new cn(0)},specularColor:{value:new cn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Va={r:0,b:0,g:0},Ha=new Et,Ua=new Y;Ua.set(-1,0,0,0,1,0,0,0,1);function Wa(e,t,n,r,i,a){let o=new cn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Or(new Vr(1,1,1),new Pi({name:`BackgroundCubeMaterial`,uniforms:Ei(Ba.backgroundCube.uniforms),vertexShader:Ba.backgroundCube.vertexShader,fragmentShader:Ba.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ha.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ua),l.material.toneMapped=X.getTransfer(i.colorSpace)!==Fe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Or(new Ti(2,2),new Pi({name:`BackgroundMaterial`,uniforms:Ei(Ba.background.uniforms),vertexShader:Ba.background.vertexShader,fragmentShader:Ba.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=X.getTransfer(i.colorSpace)!==Fe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Va,Ai(e)),n.buffers.color.setClear(Va.r,Va.g,Va.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ga(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ka(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function qa(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ja(e){let t=this,n=null,r=0,i=!1,a=!1,o=new cr,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ya=4,Xa=6,Za=20,Qa=256,$a=new pa,eo=new cn,to=null,no=0,ro=0,io=!1,ao=new J,oo=new J,so=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ao}=i;to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,ro),this._renderer.xr.enabled=io,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:U,depthBuffer:!1},r=lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=co(r)),this._blurMaterial=po(r,e,t),this._ggxMaterial=fo(r,e,t)}return r}_compileMaterial(e){let t=new Or(new ir,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,r,i){let a=new fa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(eo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Or(new Vr,new gr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(eo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;uo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;uo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ya?n-d+Ya:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,uo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$a),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,uo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$a)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];uo(t,3*l*(r>this._lodMax-Ya?r-this._lodMax+Ya:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,$a)}};function co(e){let t=[],n=[],r=e,i=e-Ya+1+Xa;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?oo.set(1,r,n):e===1?oo.set(-n,1,-r):e===2?oo.set(-n,r,1):e===3?oo.set(-1,r,-n):e===4?oo.set(-n,-1,r):oo.set(n,r,-1),oo.toArray(l,(e*6+t)*3)}}let u=new ir;u.setAttribute(`position`,new Un(c,3)),u.setAttribute(`outputDirection`,new Un(l,3)),n.push(new Or(u,null)),r>Ya&&r--}return{lodMeshes:n,sizeLods:t}}function lo(e,t,n){let r=new Ct(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function uo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function fo(e,t,n){return new Pi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(e,t,n){return new Pi({name:`SphericalGaussianBlur`,defines:{SAMPLES:Za,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return new Pi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ho(){return new Pi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ir(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),i=new Pi({name:`CubemapFromEquirect`,uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Or(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ga(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function vo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new _o(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new so(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new so(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function yo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ke(`WebGLRenderer: `+e+` extension not supported.`),t}}}function bo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Gn:Wn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function xo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function So(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Co(e,t,n){let r=new WeakMap,i=new xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new wt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new q(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function wo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var To={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Eo(e,t,n,r,i,a){let o=new Ct(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ir;l.setAttribute(`position`,new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Kn([0,2,0,0,2,0],2));let u=new Fi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Or(l,u),f=new pa(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Ct(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Ct(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},X.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=To[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Do=new bt,Oo=new Rr(1,1),ko=new wt,Ao=new Tt,jo=new Ir,Mo=[],No=[],Po=new Float32Array(16),Fo=new Float32Array(9),Io=new Float32Array(4);function Lo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Mo[i];if(a===void 0&&(a=new Float32Array(i),Mo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ro(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function zo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Bo(e,t){let n=No[t];n===void 0&&(n=new Int32Array(t),No[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Vo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2fv(this.addr,t),zo(n,t)}}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ro(n,t))return;e.uniform3fv(this.addr,t),zo(n,t)}}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4fv(this.addr,t),zo(n,t)}}function Go(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Io.set(r),e.uniformMatrix2fv(this.addr,!1,Io),zo(n,r)}}function Ko(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Fo.set(r),e.uniformMatrix3fv(this.addr,!1,Fo),zo(n,r)}}function qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Po.set(r),e.uniformMatrix4fv(this.addr,!1,Po),zo(n,r)}}function Jo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2iv(this.addr,t),zo(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ro(n,t))return;e.uniform3iv(this.addr,t),zo(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4iv(this.addr,t),zo(n,t)}}function Qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2uiv(this.addr,t),zo(n,t)}}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ro(n,t))return;e.uniform3uiv(this.addr,t),zo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4uiv(this.addr,t),zo(n,t)}}function ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Oo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Oo):a=Do,n.setTexture2D(t||a,i)}function rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ao,i)}function is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||jo,i)}function as(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ko,i)}function os(e){switch(e){case 5126:return Vo;case 35664:return Ho;case 35665:return Uo;case 35666:return Wo;case 35674:return Go;case 35675:return Ko;case 35676:return qo;case 5124:case 35670:return Jo;case 35667:case 35671:return Yo;case 35668:case 35672:return Xo;case 35669:case 35673:return Zo;case 5125:return Qo;case 36294:return $o;case 36295:return es;case 36296:return ts;case 35678:case 36198:case 36298:case 36306:case 35682:return ns;case 35679:case 36299:case 36307:return rs;case 35680:case 36300:case 36308:case 36293:return is;case 36289:case 36303:case 36311:case 36292:return as}}function ss(e,t){e.uniform1fv(this.addr,t)}function cs(e,t){let n=Lo(t,this.size,2);e.uniform2fv(this.addr,n)}function ls(e,t){let n=Lo(t,this.size,3);e.uniform3fv(this.addr,n)}function us(e,t){let n=Lo(t,this.size,4);e.uniform4fv(this.addr,n)}function ds(e,t){let n=Lo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fs(e,t){let n=Lo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ps(e,t){let n=Lo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ms(e,t){e.uniform1iv(this.addr,t)}function hs(e,t){e.uniform2iv(this.addr,t)}function gs(e,t){e.uniform3iv(this.addr,t)}function _s(e,t){e.uniform4iv(this.addr,t)}function vs(e,t){e.uniform1uiv(this.addr,t)}function ys(e,t){e.uniform2uiv(this.addr,t)}function bs(e,t){e.uniform3uiv(this.addr,t)}function xs(e,t){e.uniform4uiv(this.addr,t)}function Ss(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Oo:Do;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Cs(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ao,a[e])}function ws(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||jo,a[e])}function Ts(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ko,a[e])}function Es(e){switch(e){case 5126:return ss;case 35664:return cs;case 35665:return ls;case 35666:return us;case 35674:return ds;case 35675:return fs;case 35676:return ps;case 5124:case 35670:return ms;case 35667:case 35671:return hs;case 35668:case 35672:return gs;case 35669:case 35673:return _s;case 5125:return vs;case 36294:return ys;case 36295:return bs;case 36296:return xs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ss;case 35679:case 36299:case 36307:return Cs;case 35680:case 36300:case 36308:case 36293:return ws;case 36289:case 36303:case 36311:case 36292:return Ts}}var Ds=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=os(t.type)}},Os=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Es(t.type)}},ks=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},As=/(\w+)(\])?(\[|\.)?/g;function js(e,t){e.seq.push(t),e.map[t.id]=t}function Ms(e,t,n){let r=e.name,i=r.length;for(As.lastIndex=0;;){let a=As.exec(r),o=As.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){js(n,l===void 0?new Ds(s,e,t):new Os(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new ks(s),js(n,e)),n=e}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ms(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ps(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Fs=37297,Is=0;function Ls(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Rs=new Y;function zs(e){X._getMatrix(Rs,X.workingColorSpace,e);let t=`mat3( ${Rs.elements.map(e=>e.toFixed(4))} )`;switch(X.getTransfer(e)){case Pe:return[t,`LinearTransferOETF`];case Fe:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Bs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ls(e.getShaderSource(t),r)}else return i}function Vs(e,t){let n=zs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Hs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Us(e,t){let n=Hs[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ws=new J;function Gs(){return X.getLuminanceCoefficients(Ws),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ws.x.toFixed(4)}, ${Ws.y.toFixed(4)}, ${Ws.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ks(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ys).join(`
`)}function qs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Js(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ys(e){return e!==``}function Xs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qs=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(e){return e.replace(Qs,tc)}var ec=new Map;function tc(e,t){let n=Z[t];if(n===void 0){let e=ec.get(t);if(e!==void 0)n=Z[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return $s(n)}var nc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(e){return e.replace(nc,ic)}function ic(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ac(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var oc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function sc(e){return oc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var cc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function lc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:cc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var uc={302:`ENVMAP_MODE_REFRACTION`};function dc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:uc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var fc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function pc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:fc[e.combine]||`ENVMAP_BLENDING_NONE`}function mc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function hc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=sc(n),l=lc(n),u=dc(n),d=pc(n),f=mc(n),p=Ks(n),m=qs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ys).join(`
`),_.length>0&&(_+=`
`)):(g=[ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ys).join(`
`),_=[ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Us(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Vs(`linearToOutputTexel`,n.outputColorSpace),Gs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ys).join(`
`)),o=$s(o),o=Xs(o,n),o=Zs(o,n),s=$s(s),s=Xs(s,n),s=Zs(s,n),o=rc(o),s=rc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ps(i,i.VERTEX_SHADER,y),S=Ps(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Bs(i,x,`vertex`),n=Bs(i,S,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ns(i,h),T=Js(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Fs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Is++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var gc=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vc(e),t.set(e,n)),n}},vc=class{constructor(e){this.id=gc++,this.code=e,this.usedTimes=0}};function yc(e){return e===1030||e===37490||e===36285}function bc(e,t,n,r,i,a){let o=new Lt,s=new _c,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ba[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,ne=!!i.normalMap,re=!!i.displacementMap,ie=!!i.emissiveMap,z=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=oe&&!!i.anisotropyMap,me=se&&!!i.clearcoatMap,he=se&&!!i.clearcoatNormalMap,ge=se&&!!i.clearcoatRoughnessMap,_e=ue&&!!i.iridescenceMap,ve=ue&&!!i.iridescenceThicknessMap,ye=de&&!!i.sheenColorMap,be=de&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=fe&&!!i.transmissionMap,Te=fe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:X.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:te,normalMap:ne,displacementMap:re,emissiveMap:ie,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&yc(i.normalMap.format),metalnessMap:z,roughnessMap:ae,anisotropy:oe,anisotropyMap:pe,clearcoat:se,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:fe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:B,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:ne&&m(i.normalMap.channel),displacementMapUv:re&&m(i.displacementMap.channel),emissiveMapUv:ie&&m(i.emissiveMap.channel),metalnessMapUv:z&&m(i.metalnessMap.channel),roughnessMapUv:ae&&m(i.roughnessMap.channel),anisotropyMapUv:pe&&m(i.anisotropyMap.channel),clearcoatMapUv:me&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ne||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&X.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&X.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ba[t];n=ji.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new hc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function xc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Sc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Sc),r.length>1&&r.sort(t||Cc),i.length>1&&i.sort(t||Cc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Tc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new wc,e.set(t,[i])):n>=r.length?(i=new wc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ec(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new cn};break;case`SpotLight`:n={position:new J,direction:new J,color:new cn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new cn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new cn,groundColor:new cn};break;case`RectAreaLight`:n={color:new cn,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=n,n}}}function Dc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Oc=0;function kc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ac(e){let t=new Ec,n=Dc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Et,o=new Et;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(kc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Oc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function jc(e){let t=new Ac(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Mc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new jc(e),t.set(n,[a])):r>=i.length?(a=new jc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fc=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Ic=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Lc=new Et,Rc=new J,zc=new J;function Bc(e,t,n){let i=new Fr,a=new q,s=new q,c=new xt,l=new Ii,u=new Li,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Nc,fragmentShader:Pc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new ir;y.setAttribute(`position`,new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Or(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){W(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Ct(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Rr(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new _o(a.x),p.map.depthTexture=new zr(a.x,m)):(p.map=new Ct(a.x,a.y),p.map.depthTexture=new Rr(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Rc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Rc),zc.copy(e.position),zc.add(Fc[t]),e.up.copy(Ic[t]),e.lookAt(zc),e.updateMatrixWorld(),n.makeTranslation(-Rc.x,-Rc.y,-Rc.z),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ct(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Vc(e,t){function n(){let t=!1,n=new xt,r=null,i=new xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Je[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new cn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new xt().fromArray(R),ne=new xt().fromArray(ee);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ie={};ie[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),z(e.CULL_FACE),de(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ae(e.BLEND),g=!1);return}if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?ae(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?ae(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function _e(t){t?z(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ye(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ie[t]),i.type=t,i.texture=n)}function be(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function Me(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function U(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new cn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:Ne,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:Me,reset:U}}function Hc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new q,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ve(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Pe:X.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),L(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function L(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let R=0;function ee(){R=0}function te(){return R}function ne(e){R=e}function re(){let e=R;return e>=p.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),R+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(e,t){let n=f.get(e);if(e.isVideoTexture&&B(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ae(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){he(n,e,t);return}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function oe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){he(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){ge(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ce={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},le={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ue={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function de(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ce[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ce[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ce[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,le[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,le[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ue[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function fe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,N));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ie(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&I(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=pe(r.start,t.width,4),c=pe(n.start,t.width,4);r.start<=o+1&&s===c&&pe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function he(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=fe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=X.getPrimaries(X.workingColorSpace),n=t.colorSpace===``?null:X.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=ke(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);de(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=j(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&me(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023)if(s!==null)if(g){if(v)if(t.layerUpdates.size>0){let e=Ia(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0);else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}else if(t.isDataArrayTexture)if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v)if(t.layerUpdates.size>0){let n=Ia(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_)if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ae(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ae(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ge(e,t,n){if(t.image.length!==6)return;let r=fe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=X.getPrimaries(X.workingColorSpace),o=t.colorSpace===``?null:X.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=ke(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);de(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ae(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function _e(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,De(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function ve(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Oe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,De(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,De(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Oe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,De(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,De(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ye(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,N)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),de(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else z(t.depthTexture,0);let a=i.__webglTexture,o=De(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer)if(n)for(let n=0;n<6;n++)ye(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?ye(t.__webglFramebuffer[0],e,0):ye(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),ve(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),ve(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function xe(e,t,n){let r=f.get(e);t!==void 0&&_e(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&be(e)}function Se(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,P);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Oe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=De(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),ve(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),de(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)_e(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else _e(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),de(o,r),_e(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),de(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)_e(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else _e(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&be(e)}function Ce(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let we=[],Te=[];function Ee(e){if(e.samples>0){if(Oe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(we.length=0,Te.length=0,we.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(we.push(a),Te.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Te)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,we))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function De(e){return Math.min(p.maxSamples,e.samples)}function Oe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function B(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(X.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=z,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Uc(e,t){function n(n,r=``){let i,a=X.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Wc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pi({vertexShader:Wc,fragmentShader:Gc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Or(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends Ye{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Kc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new q,k=null,A=null,j=new fa;j.viewport=new xt;let M=new fa;M.viewport=new xt;let N=[j,M],P=new _a,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new nn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new nn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new nn,C[e]=t),t.getHandSpace()};function L(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}F=null,I=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ct(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Rr(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ct(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let te=new J,ne=new J;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ie(P,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),z(e,P,i)};function z(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Qe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new fa,o.layers.enable(n),o.viewport=new xt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Br,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let se=new Ra;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Jc=new Et,Yc=new Y;Yc.set(-1,0,0,0,1,0,0,0,1);function Xc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ai(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Jc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Yc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Zc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Qc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$c=null;function el(){return $c===null&&($c=new jr(Qc,16,16,k,g),$c.name=`DFG_LUT`,$c.minFilter=o,$c.magFilter=o,$c.wrapS=t,$c.wrapT=t,$c.generateMipmaps=!1,$c.needsUpdate=!0),$c}var tl=class{constructor(e={}){let{canvas:t=He(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new J,k=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,ee=null,te=null,ne=null;this._outputColorSpace=Ne;let re=0,ie=0,z=null,ae=-1,oe=null,se=new xt,ce=new xt,le=null,ue=new cn(0),de=0,fe=t.width,pe=t.height,me=1,he=null,ge=null,_e=new xt(0,0,fe,pe),ve=new xt(0,0,fe,pe),ye=!1,be=new Fr,xe=!1,Se=!1,Ce=new Et,we=new J,Te=new xt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return z===null?me:1}let B=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,V,Me,H,U,Pe,Fe,Ie,Le,ze,Be,Ve,Ue,Ge,Ke,Je,Ye,Xe,Ze,Qe,$e,K;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,nt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,q,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}et()}catch(e){throw t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,q,!1),G(`WebGLRenderer: `+e.message),e}function et(){Ae=new yo(B),Ae.init(),Qe=new Uc(B,Ae),je=new qa(B,Ae,e,Qe),V=new Vc(B,Ae),je.reversedDepthBuffer&&h&&V.buffers.depth.setReversed(!0),ee=B.createFramebuffer(),te=B.createFramebuffer(),ne=B.createFramebuffer(),Me=new So(B),H=new xc,U=new Hc(B,Ae,V,H,je,Qe,Me),Pe=new vo(I),Fe=new za(B),$e=new Ga(B,Fe),Ie=new bo(B,Fe,Me,$e),Le=new wo(B,Ie,Fe,$e,Me),Ye=new Co(B,je,U),Ge=new Ja(H),ze=new bc(I,Pe,Ae,je,$e,Ge),Be=new Xc(I,H),Ve=new Tc,Ue=new Mc(Ae),Je=new Wa(I,Pe,V,Le,x,s),Ke=new Bc(I,Le,je),K=new Zc(B,Me,je,V),Xe=new Ka(B,Ae,Me),Ze=new xo(B,Ae,Me),Me.programs=ze.programs,I.capabilities=je,I.extensions=Ae,I.properties=H,I.renderLists=Ve,I.shadowMap=Ke,I.state=V,I.info=Me}S!==1009&&(F=new Eo(S,t.width,t.height,o,r,i));let tt=new qc(I,B);this.xr=tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){if(tt.isPresenting){W(`WebGLRenderer: Can't change size while VR device is presenting.`);return}fe=e,pe=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),V.viewport(se.copy(_e).multiplyScalar(me).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(ce.copy(ve).multiplyScalar(me).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=C.has(t)}if(e){let e=z.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,q,!1),Je.dispose(),Ve.dispose(),Ue.dispose(),H.dispose(),Pe.dispose(),Le.dispose(),$e.dispose(),K.dispose(),ze.dispose(),tt.dispose(),tt.removeEventListener(`sessionstart`,lt),tt.removeEventListener(`sessionend`,ut),dt.stop()};function nt(e){e.preventDefault(),We(`WebGLRenderer: Context Lost.`),L=!0}function rt(){We(`WebGLRenderer: Context Restored.`),L=!1;let e=Me.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;et(),Me.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function q(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function it(e){let t=e.target;t.removeEventListener(`dispose`,it),at(t)}function at(e){ot(e),H.remove(e)}function ot(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=St(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Fe.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh)if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Y(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),xe===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,_t(e,t,r),e.side=0,e.needsUpdate=!0,_t(e,t,r),e.side=2):_t(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),M=Ue.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),Se=this.localClippingEnabled,xe=Ge.init(this.clippingPlanes,Se),xe===!0&&Ge.setGlobalState(this.clippingPlanes,t),R!==null&&Ke.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i)if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Y(o,n,t,e),r.add(o)}else Y(i,n,t,e),r.add(i)}),M=P.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=H.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let st=null;function ct(e){st&&st(e)}function lt(){dt.stop()}function ut(){dt.start()}let dt=new Ra;dt.setAnimationLoop(ct),typeof self<`u`&&dt.setContext(self),this.setAnimationLoop=function(e){st=e,tt.setAnimationLoop(e),e===null?dt.stop():dt.start()},tt.addEventListener(`sessionstart`,lt),tt.addEventListener(`sessionend`,ut),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=tt.enabled===!0&&tt.isPresenting===!0,r=F!==null&&(z===null||n)&&F.begin(I,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(t),t=tt.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,z),M=Ue.get(e,P.length),M.init(t),M.state.textureUnits=U.getTextureUnits(),P.push(M),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,Re,t.reversedDepth),Se=this.localClippingEnabled,xe=Ge.init(this.clippingPlanes,Se),k=Ve.get(e,N.length),k.init(),N.push(k),tt.enabled===!0&&tt.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&ft(e,t,-1/0,I.sortObjects)}ft(e,t,0,I.sortObjects),k.finish(),R!==null&&R.updateLights(M.state.lightsArray),I.sortObjects===!0&&k.sort(he,ge),De=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,De&&Je.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Ge.beginShadows();let i=M.state.shadowsArray;if(Ke.render(i,e,t),xe===!0&&Ge.endShadows(),(r&&F.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];mt(n,r,e,a)}De&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];pt(k,e,n,n.viewport)}}else r.length>0&&mt(n,r,e,t),De&&Je.render(e),pt(k,e,t)}z!==null&&ie===0&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),$e.resetDefaultState(),ae=-1,oe=null,P.pop(),P.length>0?(M=P[P.length-1],U.setTextureUnits(M.state.textureUnits),xe===!0&&Ge.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,R!==null&&R.renderEnd()};function ft(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Le.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Te.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Te.z,s,t)}}else a.visible&&k.push(e,i,a,n,Te.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ft(i[e],t,n,r)}function pt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),xe===!0&&Ge.setGlobalState(I.clippingPlanes,n),r&&V.viewport(se.copy(r)),i.length>0&&ht(i,t,n),a.length>0&&ht(a,t,n),o.length>0&&ht(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function mt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Ct(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:X.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),u=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ue),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),De&&Je.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),xe===!0&&Ge.setGlobalState(I.clippingPlanes,r),ht(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,gt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}I.setRenderTarget(s,u,d),I.setClearColor(ue,de),p!==void 0&&(r.viewport=p),I.toneMapping=f}function ht(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&gt(o,t,n,s,l,c)}}function gt(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function _t(e,t,n){t.isScene!==!0&&(t=Ee);let r=H.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,it),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return yt(e,s),d}else s.uniforms=ze.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),yt(e,s),r.needsLights=Tt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function vt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ns.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function St(e,t,n,r,i){t.isScene!==!0&&(t=Ee),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:X.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=M.state.lights;if(xe===!0&&(Se===!0||e!==oe)){let t=e===oe&&r.id===ae;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=_t(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ae&&(ae=r.id,C=!0),v.needsLights){let e=bt(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||oe!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(B,`sunShadowMap`,y.state.sunShadowMap,U),y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,U),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,U),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,U)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,U),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,U),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,U));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=el()),C){if(T.setValue(B,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&wt(E,w),a&&r.fog===!0&&Be.refreshFogUniforms(E,a),Be.refreshMaterialUniforms(E,r,me,pe,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ns.upload(B,vt(v),E,U)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ns.upload(B,vt(v),E,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];K.update(n,x),K.bind(n,x)}}return x}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,V.viewport(se),V.scissor(ce),V.setScissorTest(le),ae=-1;return}else if(o.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(o.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(_e).multiplyScalar(me).floor(),ce.copy(ve).multiplyScalar(me).floor(),le=ye;if(n!==0&&(r=ee),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(se),V.scissor(ce),V.setScissorTest(le),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function Dt(e){let t=H.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Dt(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=z===null?null:H.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Dt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=z===null?null:H.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await qe(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(U.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,te),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){re=0,ie=0,z=null,V.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Re}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X._getDrawingBufferColorSpace(e),t.unpackColorSpace=X._getUnpackColorSpace()}};function nl(e={}){let t=e.tileWidth??1672,n=e.height??941,r=e.maxAspect??2.4,i=e.motionMargin??64,a=e.observationMargin??32,o=e.residentDepthScale??1;if(![t,n,r].every(e=>Number.isFinite(e)&&e>0)||![i,a].every(e=>Number.isFinite(e)&&e>=0)||!Number.isFinite(o)||o<1)throw Error(`Invalid continuous world dimensions/margins`);let s=[`entry`,`street`,`print`,`workshop`,`glass`,`cinema`];if(e.residentBounds&&e.residentBounds.length!==6)throw Error(`Six resident bounds required`);let c=Array.from({length:11},(e,r)=>({index:r,kind:r%2?`connector`:`station`,rect:{x:r*t,y:0,width:t,height:n}})),l=s.map((r,i)=>{let a=e.residentBounds?.[i]??{x:200,y:100,width:600,height:800};if(!Object.values(a).every(Number.isFinite)||a.width<=0||a.height<=0||a.x<0||a.y<0||a.x+a.width>t||a.y+a.height>n)throw Error(`Resident bounds must fit their station tile`);return{station:r,tileIndex:i*2,bounds:{...a,x:a.x+i*2*t}}}),u=n*r*o+2*a,d=l.map(e=>({station:e.station,min:e.bounds.x-i-u/2,max:e.bounds.x+e.bounds.width+i+u/2})),f=d.slice(1).map((e,t)=>e.min-d[t].max),p=Math.max(0,...l.slice(1).map((e,n)=>u+2*i-(t+(e.bounds.x-e.tileIndex*t)-(l[n].bounds.x-l[n].tileIndex*t+l[n].bounds.width))));if(f.some(e=>e<=0))throw Error(`Resident visibility overlaps; connector must exceed ${p.toFixed(3)} logical pixels`);let m=t*11;function h(e){if(!Number.isFinite(e)||e<=0||e>r)throw Error(`Unsupported viewport aspect`);return n*e/2}function g(e){let t=h(e);return{min:t,max:m-t}}function _(e,n){if(!Number.isFinite(e))throw Error(`Invalid camera X`);let r=h(n);return c.filter(n=>n.rect.x<e+r&&n.rect.x+t>e-r).map(e=>e.index)}function v(e,t,n=0){let r=_(e,t),i=new Set(r);for(let e of r)e>0&&i.add(e-1),e<10&&i.add(e+1);return[...i].sort((e,t)=>n<0?t-e:e-t)}function y(e,n){let r=h(e),i=[],a=-1;for(let e=0;e<=11;e++)if(e<11&&n.has(e))a<0&&(a=e);else if(a>=0){let n=a*t+r,o=e*t-r;n<=o&&i.push({min:n,max:o}),a=-1}return i}return{width:m,height:n,tileWidth:t,maxAspect:r,tiles:c,residents:l,proof:{maximumWindow:u,motionMargin:i,observationMargin:a,residentDepthScale:o,visibilityIntervals:d,gaps:f,minimumConnectorWidth:p,atMostOneResident:!0},halfWindow:h,cameraRange:g,visibleTiles:_,prefetchTiles:v,coveredRanges:y,stationX(e,n){if(!Number.isSafeInteger(e)||e<0||e>=6)throw Error(`Invalid station`);let r=g(n);return Math.max(r.min,Math.min(r.max,(e*2+.5)*t))},visibleResidents(e,t){h(t);let r=(n*t*o+2*a)/2;return l.filter(t=>t.bounds.x-i<e+r&&t.bounds.x+t.bounds.width+i>e-r).map(e=>e.station)}}}function rl(e,t,n){if(![e.width,e.height].every(e=>Number.isSafeInteger(e)&&e>0)||!Object.values(t).every(Number.isFinite)||t.width<=0||t.height<=0)throw Error(`Invalid tile dimensions`);if(!n&&(e.width!==t.width||e.height!==t.height))throw Error(`Different native dimensions require explicit uniform registration`);let r=n?.origin??[0,0],i=n?.scale??1;if(r.length!==2||!r.every(Number.isFinite)||!Number.isFinite(i)||i<=0||r[0]>0||r[1]>0||r[0]+e.width*i<t.width||r[1]+e.height*i<t.height)throw Error(`Registered native tile does not cover world rect`);let a=r[0],o=r[1];return{origin:[a,o],scale:i,sourceToWorld:(e,n)=>{if(![e,n].every(Number.isFinite))throw Error(`Invalid source point`);return{x:t.x+a+e*i,y:t.y+o+n*i}}}}function il(e,t={}){let n=t.maxSpeed??1400,r=t.maxAcceleration??2400,i=t.frequency??8,a=t.fov??38;if(![n,r,i,a].every(e=>Number.isFinite(e)&&e>0)||a>=180)throw Error(`Invalid world camera options`);let o=t.aspect??1,s=t.initialX??e.stationX(0,o),c=s,l=0,u=!1,d=!1,f=!1;if(!Number.isFinite(s))throw Error(`Invalid initial camera position`);let p=e.cameraRange(o);if(s<p.min||s>p.max)throw Error(`Initial camera outside complete world`);let m=()=>({x:s,targetX:c,velocity:l,blocked:d,coverageReady:f,suspended:u,visibleTiles:e.visibleTiles(s,o),prefetchTiles:e.prefetchTiles(s,o,Math.sign(c-s)),shot:{position:[s,e.height/2,e.height/(2*Math.tan(a*Math.PI/360))],target:[s,e.height/2,0],fov:a},diagnostics:{maxSpeed:n,maxAcceleration:r,frequency:i,units:`logical-pixels`,fixedOrientation:!0}});function h(t){if(!Number.isFinite(t))throw Error(`Invalid world target`);let n=e.cameraRange(o);c=Math.max(n.min,Math.min(n.max,t))}function g(t){let n=e.cameraRange(t);if(s<n.min-1e-8||s>n.max+1e-8)throw Error(`Camera must enter complete world range before aspect commit`);o=t,c=Math.max(n.min,Math.min(n.max,c))}return{snapshot:m,setTargetX:h,setAspect:g,setStation(t){h(e.stationX(t,o))},dragBy(e){if(!Number.isFinite(e))throw Error(`Invalid drag`);h(c+e)},update(t,a){if(!Number.isFinite(t)||t<0)throw Error(`Invalid world camera elapsed time`);e.halfWindow(a.aspect),o=a.aspect;let p=e.coveredRanges(o,a.readyTiles).find(e=>s>=e.min-1e-8&&s<=e.max+1e-8);if(f=!!p,!p)return d=!0,l=0,u=!0,m();let h=Math.max(p.min,Math.min(p.max,c));if(d=Math.abs(h-c)>1e-8,a.hold||a.hidden||a.reducedMotion)return l=0,u=!0,m();if(u)return u=!1,m();if(t>.25)return m();let g=Math.ceil(t*240),_=g?t/g:0;for(let e=0;e<g;e++){let e=h-s,t=Math.abs(e),a=Math.sign(e)*Math.min(n,i*t/2,Math.sqrt(2*r*t)*.8),o=Math.max(-r,Math.min(r,2*i*(a-l))),c=Math.max(-n,Math.min(n,l+o*_));s+=(l+c)*_/2,l=c,(s<p.min||s>p.max)&&(s=Math.max(p.min,Math.min(p.max,s)),l=0)}return m()}}}function al(e){let{viewport:t,aspectChanged:n,correcting:r,locked:i}=e;return i?{action:`hold`,correcting:r||n||t.needsPan}:t.needsPan?{action:`correct`,correcting:!0,targetX:t.desiredCenterClamp}:t.pending?{action:`hold`,correcting:r||n}:{action:r||n?`restore`:`hold`,correcting:!1}}function ol(e,t){e.halfWindow(t);let n=t,r=0;function i(t){return e.halfWindow(t),t!==n&&(n=t,r++),r}return{request:i,resolveNavigation:al,update(t){let{currentX:i,currentAspect:a,readyTiles:o}=t;if(e.halfWindow(a),!Number.isFinite(i)||i<0||i>e.width)throw Error(`Invalid viewport camera X`);let s=e.cameraRange(n),c=Math.max(s.min,Math.min(s.max,i)),l=-1,u=-1;for(let t of e.tiles)if(o.has(t.index)&&i>=t.rect.x&&i<=t.rect.x+t.rect.width){l=u=t.index;break}if(l>=0){for(;l>0&&o.has(l-1);)l--;for(;u<e.tiles.length-1&&o.has(u+1);)u++}let d=l<0?0:Math.max(0,Math.min(i-l*e.tileWidth,(u+1)*e.tileWidth-i)),f=Math.min(e.maxAspect,2*d/e.height),p=f+1e-9>=a,m=Math.min(n,f),h=new Set(e.visibleTiles(c,n)),g=Math.max(0,Math.min(i,c)-e.halfWindow(Math.min(a,n))),_=Math.min(e.width,Math.max(i,c)+e.halfWindow(Math.min(a,n)));for(let t of e.tiles)t.rect.x<_&&t.rect.x+t.rect.width>g&&h.add(t.index);let v=[...h].sort((e,t)=>e-t),y=v.filter(e=>!o.has(e));return{revision:r,desiredAspect:n,committableAspect:m,desiredCenterClamp:c,needsPan:Math.abs(c-i)>1e-7,requiredTiles:v,missingTiles:y,currentCoverage:p,pending:m+1e-8<n||y.length>0,canCommit:m>0,coverageLost:!p,diagnostics:{availableAspect:f,loadedRun:l<0?null:{first:l,last:u},cameraTeleport:!1,units:`logical-pixels`}}}}}var sl={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},cl=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ll=new pa(-1,1,1,-1,0,1),ul=new class extends ir{constructor(){super(),this.setAttribute(`position`,new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Kn([0,2,0,0,2,0],2))}},dl=class{constructor(e){this._mesh=new Or(ul,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ll)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},fl=class extends cl{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ji.clone(e.uniforms),this.material=new Pi({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new dl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},pl=class extends cl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ml=class extends cl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new q);this._width=n.width,this._height=n.height,t=new Ct(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fl(sl),this.copyPass.material.blending=0,this.timer=new va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}pl!==void 0&&(r instanceof pl?n=!0:r instanceof ml&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},gl=class extends cl{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new cn}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},_l={name:`SMAAEdgesShader`,defines:{SMAA_THRESHOLD:`0.1`},uniforms:{tDiffuse:{value:null},resolution:{value:new q(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},vl={name:`SMAAWeightsShader`,defines:{SMAA_MAX_SEARCH_STEPS:`8`,SMAA_AREATEX_MAX_DISTANCE:`16`,SMAA_AREATEX_PIXEL_SIZE:`( 1.0 / vec2( 160.0, 560.0 ) )`,SMAA_AREATEX_SUBTEX_SIZE:`( 1.0 / 7.0 )`},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new q(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},yl={name:`SMAABlendShader`,uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new q(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`},bl=class extends cl{constructor(){super(),this._edgesRT=new Ct(1,1,{depthBuffer:!1,type:g}),this._edgesRT.texture.name=`SMAAPass.edges`,this._weightsRT=new Ct(1,1,{depthBuffer:!1,type:g}),this._weightsRT.texture.name=`SMAAPass.weights`;let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new bt,this._areaTexture.name=`SMAAPass.area`,this._areaTexture.image=t,this._areaTexture.minFilter=o,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new bt,this._searchTexture.name=`SMAAPass.search`,this._searchTexture.image=n,this._searchTexture.magFilter=r,this._searchTexture.minFilter=r,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=ji.clone(_l.uniforms),this._materialEdges=new Pi({defines:Object.assign({},_l.defines),uniforms:this._uniformsEdges,vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader}),this._uniformsWeights=ji.clone(vl.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Pi({defines:Object.assign({},vl.defines),uniforms:this._uniformsWeights,vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader}),this._uniformsBlend=ji.clone(yl.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Pi({uniforms:this._uniformsBlend,vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader}),this._fsQuad=new dl(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return`data:image/png;base64,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`}_getSearchTexture(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}},xl={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new q(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Sl=class extends fl{constructor(){super(xl)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}},Cl={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},wl=class extends cl{constructor(){super(),this.isOutputPass=!0,this.uniforms=ji.clone(Cl.uniforms),this.material=new Fi({name:Cl.name,uniforms:this.uniforms,vertexShader:Cl.vertexShader,fragmentShader:Cl.fragmentShader}),this._fsQuad=new dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},X.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Tl(e){return e.throwIfAborted(),new Promise((t,n)=>{let r,i,a=()=>{r!==void 0&&cancelAnimationFrame(r),i!==void 0&&clearTimeout(i),e.removeEventListener(`abort`,s)},o=()=>{a(),t()},s=()=>{a(),n(e.reason??new DOMException(`Aborted`,`AbortError`))};e.addEventListener(`abort`,s,{once:!0}),typeof requestAnimationFrame==`function`&&(r=requestAnimationFrame(o)),i=setTimeout(o,50)})}async function El(e,t){t.throwIfAborted(),await new Promise((n,r)=>{let i=()=>r(t.reason??new DOMException(`Aborted`,`AbortError`)),a=e=>{t.removeEventListener(`abort`,i),e?r(e):n()};t.addEventListener(`abort`,i,{once:!0}),e.then(()=>a(),e=>a(e))})}function Dl({renderer:e,scene:t,camera:n}){if(e.getContext().getContextAttributes()?.antialias)throw Error(`World compositor requires an antialias:false renderer`);if(e.outputColorSpace!==`srgb`)throw Error(`World compositor requires the existing sRGB canvas output`);let r=e.extensions.has(`EXT_color_buffer_float`),i=r?`smaa-half-float`:`fxaa-unsigned-byte`,a=new Ct(1,1,{type:r?g:l,samples:0,depthBuffer:!0,stencilBuffer:!1});a.texture.name=`StationWorld.composition`;let o=new hl(e,a);o.setPixelRatio(1);let s=new gl(t,n),c=new wl,u=r?new bl:new Sl,d=r?[s,u,c]:[s,c,u];for(let e of d)o.addPass(e);o.renderToScreen=!0;let f=new AbortController,p=!1,m=1,h=1,_=1,v=1,y=1,b={mode:i,samples:0,targetType:r?`HalfFloatType`:`UnsignedByteType`,fallbackReason:r?null:`EXT_color_buffer_float unavailable`,passOrder:Object.freeze(r?[`RenderPass`,`SMAAPass`,`OutputPass`]:[`RenderPass`,`OutputPass`,`FXAAPass`]),get cssWidth(){return m},get cssHeight(){return h},get pixelRatio(){return _},get width(){return v},get height(){return y},get disposed(){return p}};function x(e,t,n){if(p)throw Error(`World compositor is disposed`);if(![e,t,n].every(e=>Number.isFinite(e)&&e>0))throw Error(`Invalid world compositor viewport`);m=e,h=t,_=Math.min(n,1.7);let r=Math.max(1,Math.floor(m*_)),i=Math.max(1,Math.floor(h*_));(r!==v||i!==y)&&(v=r,y=i,o.setSize(v,y))}let S=e.getSize(new q);return x(S.x,S.y,e.getPixelRatio()),{diagnostics:b,resize:x,async prepare(r,i){if(p)throw Error(`World compositor is disposed`);let a=i?AbortSignal.any([i,f.signal]):f.signal;a.throwIfAborted();let s=[];r.traverse(e=>{let t=e;(t.isMesh||t.isPoints||t.isLine||t.isSprite)&&s.push(e)});for(let r of s){await Tl(a),a.throwIfAborted();let i=e.getRenderTarget(),s;try{e.setRenderTarget(o.readBuffer),s=e.compileAsync(r,n,t)}finally{e.setRenderTarget(i)}if(await El(s,a),a.throwIfAborted(),p)throw Error(`World compositor is disposed`)}},render(n){if(p)throw Error(`World compositor is disposed`);if(!Number.isFinite(n)||n<0)throw Error(`Invalid world compositor delta`);let r=e.getRenderTarget(),i=e.autoClear,a=t.overrideMaterial,s=e.info.autoReset;try{e.info.autoReset=!1,e.info.reset(),o.render(n)}finally{e.setRenderTarget(r),e.autoClear=i,t.overrideMaterial=a,e.info.autoReset=s}},dispose(){if(!p){p=!0,f.abort(Error(`World compositor is disposed`));for(let e of d)e.dispose();o.dispose(),o.timer.dispose()}}}}function Ol(e,t={}){let n=t.worldWidth??18392,r=t.height??941,i=t.mainCameraZ??r/(2*Math.tan(19*Math.PI/180));if(![n,r,i].every(e=>Number.isFinite(e)&&e>0))throw Error(`Invalid depth world dimensions`);for(let t of[`skyline`,`viaduct`,`foreground`]){let n=e[t];if(!n?.texture?.isTexture||![n.width,n.height].every(e=>Number.isSafeInteger(e)&&e>0))throw Error(`Invalid native depth texture: ${t}`)}if(e.viaduct.width!==2170||e.viaduct.height!==725)throw Error(`Train crop requires the reviewed native viaduct dimensions 2170x725`);let a=new en;a.name=`StationWorldSharedDepth`;let o=[],s=[];function c(e,t,n,r,i,a={left:0,top:0,right:t.width,bottom:t.height}){let c=new Ti((a.right-a.left)*n,(a.bottom-a.top)*n),l=c.getAttribute(`uv`);for(let e=0;e<l.count;e++)l.setXY(e,(a.left+l.getX(e)*(a.right-a.left))/t.width,1-(a.bottom-l.getY(e)*(a.bottom-a.top))/t.height);let u=new gr({map:t.texture,side:2,transparent:!0,alphaTest:4/255,alphaToCoverage:!0,depthTest:!0,depthWrite:!0,toneMapped:!1});return o.push(c),s.push(u),{geometry:c,material:u,z:r,y:i,id:e}}let l=c(`shared-skyline`,e.skyline,9e3/e.skyline.width,-2200,1532),u=new Or(l.geometry,l.material);u.name=l.id,u.position.set(200,l.y,l.z),a.add(u);function d(e,t,n,r,i,o,s,l={left:0,top:0,right:t.width,bottom:t.height}){let u=c(e,t,n,r,i,l),d=(l.right-l.left)*n,f=Math.ceil((s-o)/d),p=[];for(let t=0;t<f;t++){let n=new Or(u.geometry,u.material);n.name=`${e}-${t}`,n.position.set(o+(t+.5)*d,i,r),a.add(n),p.push(n)}return{count:f,left:o,right:o+f*d,width:d,height:(l.bottom-l.top)*n,scale:n,z:r,centerY:i,sourceCrop:l,meshes:p}}let f=e.viaduct,p={left:111,top:0,right:863,bottom:280},m=d(`shared-viaduct`,f,1,-220,737-280/2,-f.width,n+f.width,{left:0,top:280,right:f.width,bottom:f.height}),h=d(`shared-foreground`,e.foreground,.8,220,300,-2e3,n+2e3),g=p.right-p.left,_=-220,v=r*2.4*(i-_)/i/2,y=-Math.ceil((v+2*g)/g)*g,b=d(`shared-train`,f,1,_,737+f.height/2-280/2,y,n+v+2*g,p),x=!1,S=0,C=0;function w(e,t=2.4){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=0||t>2.4)throw Error(`Invalid train coverage sample`);let n=r*t*(i-_)/i/2,a=b.left+C,o=b.right+C;return{covered:e-n>=a&&e+n<=o,horizontalMargin:Math.min(e-n-a,o-e-n),left:a,right:o,period:g,phase:C,gap:0}}function T(t,n=2.4){if(!Number.isFinite(t)||!Number.isFinite(n)||n<=0||n>2.4)throw Error(`Invalid shared depth coverage sample`);let a=.82*t+200,o=(i-l.z)/i,s=r*n*o/2,c=t-s,u=t+s,d=a-4500,f=a+4500,p=r/2+r/2*o,m=r/2+(r-245-r/2)*o,h=e.skyline.height*9e3/e.skyline.width;return{covered:c>=d&&u<=f&&m>=1532-h/2&&p<=1532+h/2,horizontalMargin:Math.min(c-d,f-u),verticalMargin:Math.min(m-(1532-h/2),1532+h/2-p)}}let E={productionReady:!1,mode:`explicit-shared-2.5d-depth`,worldWidth:n,height:r,mainCameraZ:i,alphaCutoff:4/255,textureOwnership:`external`,nativeDimensions:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,[t.width,t.height]])),skyline:{count:1,width:9e3,height:e.skyline.height*9e3/e.skyline.width,z:-2200,centerY:1532,centerX:200,nativeScale:9e3/e.skyline.width,cameraFollowingRatio:.82,outdoorCoverage:[T(0),T(6688)],repeat:!1},viaduct:{...m,meshes:void 0},foreground:{...h,meshes:void 0},train:{...b,meshes:void 0,speed:45,period:g,phase:C,sourceOwnership:`UV crop of unchanged external viaduct texture`,coverage:[w(0),w(n)]},limitations:[`Skyline follows camera X as an explicit 2.5D background; not infinite physical architecture.`,`Coverage proof is for outdoor X0..6688, aspect<=2.4 and exposed sky above source roof y245.`,`Repeated bridge/foreground native seams and actual alpha silhouettes require visual review.`]};return{root:a,diagnostics:E,coverage:T,trainCoverage:w,update(e,t=0,r={}){if(x)throw Error(`World depth disposed`);if(!Number.isFinite(e))throw Error(`Invalid depth camera X`);if(!Number.isFinite(t)||t<0)throw Error(`Invalid train delta time`);S=e,u.position.x=.82*S+200,E.skyline.centerX=u.position.x,!r.paused&&!r.hidden&&!r.reducedMotion&&t<=.25&&(C=(C+45*t)%g),b.meshes.forEach((e,t)=>e.position.x=b.left+(t+.5)*g+C),E.train.phase=C,E.train.coverage=[w(0),w(n)]},dispose(){x||(x=!0,o.forEach(e=>e.dispose()),s.forEach(e=>e.dispose()),a.removeFromParent())}}}var kl=1672,Al=941,jl=25,Ml=.8,Nl=1.6,Pl=836.5,Fl=4/255;function Il(e,t){let n=t?.texture;if(!n?.isTexture||t.width!==kl||t.height!==Al)throw Error(`Invalid frozen native seam texture: ${e}`);if(n.repeat.x!==1||n.repeat.y!==1||n.offset.x!==0||n.offset.y!==0||n.rotation!==0)throw Error(`Seam texture requires identity UV transform: ${e}`);if(!n.matrixAutoUpdate&&n.matrix.elements.some((e,t)=>e!==+(t%4==0)))throw Error(`Seam texture requires identity UV matrix: ${e}`)}function Ll(e,t={}){let r=t.worldWidth??18392,i=t.height??941,a=t.tileWidth??1672,o=t.overscan??0;if(![r,i,a].every(e=>Number.isFinite(e)&&e>0)||i!==Al||a!==kl||!Number.isFinite(o)||o<0||o>r||!Number.isSafeInteger(r/a)||r/a>256)throw Error(`Invalid seam world dimensions`);if(Il(`pavement`,e.pavement),Il(`pier`,e.pier),e.pavement.texture===e.pier.texture)throw Error(`Seam sources require separate native textures`);let s=new en;s.name=`StationWorldSharedSeams`;let c=-o,l=r+o,u=l-c,d=new Ti(u,Al),f=new Ti(kl,Al),p=e=>new gr({map:e,transparent:!0,alphaTest:Fl,alphaToCoverage:!0,depthTest:!0,depthWrite:!0,toneMapped:!1}),m=p(e.pavement.texture),h=p(e.pier.texture),g=d.getAttribute(`uv`),_=d.getAttribute(`position`);for(let e=0;e<g.count;e++)g.setX(e,(r/2+_.getX(e))/kl);g.needsUpdate=!0;let v=e.pavement.texture.wrapS;e.pavement.texture.wrapS=n,e.pavement.texture.needsUpdate=!0;let y=new Or(d,m);y.name=`shared-wet-pavement`,y.position.set(r/2,i/2-jl,Ml),y.userData={band:`shared-seam-pavement`,nativeDepth:Ml,sourcePixelShiftY:jl},s.add(y);let b=[],x=[];for(let e=1;e<r/a;e++){let t=e*a,n=new Or(f,h);n.name=`shared-boundary-pier-${e}`,n.position.set(t+kl/2-Pl,i/2,Nl),n.userData={band:`shared-seam-pier`,nativeDepth:Nl,seamWorldX:t,nativeAnchorX:Pl},s.add(n),b.push(n),x.push(t)}let S=i/(2*Math.tan(38*Math.PI/360)),C=(e,t=2.4)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||t<=0||t>2.4)throw Error(`Invalid seam coverage sample`);let n=i*t/2*(S-Ml)/S,r=e-n,a=e+n;return{covered:r>=c&&a<=l,horizontalMargin:Math.min(r-c,l-a),viewLeft:r,viewRight:a}},w={productionReady:!1,visualApproved:!1,mode:`shared-native-seam-geometry`,worldWidth:r,height:i,tileWidth:a,nativeDimensions:{pavement:[kl,Al],pier:[kl,Al]},sourcePixelRedrawn:!1,alphaTest:Fl,textureOwnership:`external`,pavement:{count:1,geometryLeft:c,geometryRight:l,width:u,height:Al,centerY:i/2-jl,z:Ml,uvSpan:[c/kl,l/kl],repeat:`mirrored-horizontal-native-pixels`,sourceVisibleAlphaY:[675,941],worldVisibleAlphaY:[700,966]},pier:{count:b.length,boundaryXs:x,width:kl,height:Al,nativeAnchorX:Pl,z:Nl,bodyBoundsRelativeToSeam:[-47.5,47.5],corbelBoundsRelativeToSeam:[-122.5,122.5],footSourceY:720,groundOverlapPixels:20},limitations:[`Mirrored source endpoints are continuous; repeated artwork and native alpha boundaries still require runtime pan review.`,`This is a shared visual seam layer, not a geometric reconstruction of each threshold.`,`Generated source alpha remains unchanged; source dust is rejected by the material cutoff.`,`Pavement texture is exclusive while active; do not change its wrapS before this assembly disposes.`,`Keep resident/support depth above the pavement; keep terminal safe rectangles away from boundary piers.`]},T=!1;return{root:s,pavement:y,piers:b,diagnostics:w,coverage:C,dispose(){T||(T=!0,d.dispose(),f.dispose(),m.dispose(),h.dispose(),e.pavement.texture.wrapS=v,e.pavement.texture.needsUpdate=!0,s.removeFromParent(),s.clear())}}}var Rl=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),zl=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2},Bl=(e,t)=>Math.abs(e[0]-t[0])<1e-8&&Math.abs(e[1]-t[1])<1e-8;function Vl(e){let t=[];for(let n of e)(!t.length||!Bl(t[t.length-1],n))&&t.push(n);return t.length>1&&Bl(t[0],t[t.length-1])&&t.pop(),t.length>=3&&Math.abs(zl(t))>1e-7?t:[]}function Hl(e,t,n,r){let i=(e,t,n)=>Math.abs(Rl(e,t,n))<1e-8&&n[0]>=Math.min(e[0],t[0])-1e-8&&n[0]<=Math.max(e[0],t[0])+1e-8&&n[1]>=Math.min(e[1],t[1])-1e-8&&n[1]<=Math.max(e[1],t[1])+1e-8,a=Rl(e,t,n),o=Rl(e,t,r),s=Rl(n,r,e),c=Rl(n,r,t);return a*o<0&&s*c<0||i(e,t,n)||i(e,t,r)||i(n,r,e)||i(n,r,t)}function Ul(e,t,n){if(!Array.isArray(e)||e.length<3||e.length>256)throw Error(`Invalid world contour`);let r=e.map(e=>{if(e.length!==2||!e.every(Number.isFinite)||e[0]<0||e[0]>t||e[1]<0||e[1]>n)throw Error(`World contour must use bounded native pixels`);return[e[0],e[1]]});if(Bl(r[0],r[r.length-1])&&r.pop(),r.length<3||Math.abs(zl(r))<1e-7)throw Error(`Degenerate world contour`);for(let e=0;e<r.length;e++){if(Bl(r[e],r[(e+1)%r.length]))throw Error(`Duplicate world contour point`);for(let t=e+1;t<r.length;t++)if(!(t===e+1||e===0&&t===r.length-1)&&Hl(r[e],r[(e+1)%r.length],r[t],r[(t+1)%r.length]))throw Error(`Self-intersecting world contour`)}return zl(r)<0&&r.reverse(),r}function Wl(e,t,n){let r=[],i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=Rl(t,n,o),l=Rl(t,n,s);if(c>=0&&r.push(o),c<=0&&i.push(o),c>0&&l<0||c<0&&l>0){let e=c/(c-l),t=[o[0]+(s[0]-o[0])*e,o[1]+(s[1]-o[1])*e];r.push(t),i.push(t)}}return{inside:Vl(r),outside:Vl(i)}}function Gl(e){let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let a of e)t=Math.min(t,a[0]),n=Math.max(n,a[0]),r=Math.min(r,a[1]),i=Math.max(i,a[1]);return{left:t,right:n,top:r,bottom:i}}function Kl(e){let{id:t,texture:n,image:r,tileOriginX:i,parts:a,cleanBackplateCandidate:o}=e,{width:s,height:c}=r;if(!t||!n?.isTexture||![s,c].every(e=>Number.isSafeInteger(e)&&e>0)||!Number.isFinite(i)||!Array.isArray(a)||a.length>64)throw Error(`Invalid world tile layer options`);if(o&&(!o.texture?.isTexture||o.width!==s||o.height!==c))throw Error(`World backplate candidate must retain native dimensions`);let l=new Set([`base`]),u=a.map(e=>{if(!e.id||l.has(e.id)||![`foreground`,`floor`,`beam`,`opening`,`facade`].includes(e.band))throw Error(`Invalid world part id/band`);return l.add(e.id),Ul(e.sourcePolygon,s,c)}),d=new Map(a.map(e=>[e.id,[]])),f=[[[0,0],[s,0],[s,c],[0,c]]];for(let e=0;e<a.length;e++){let t=u[e],n=Si.triangulateShape(t.map(e=>new q(...e)),[]),r=d.get(a[e].id);for(let e of n){let n=e.map(e=>t[e]);Rl(n[0],n[1],n[2])<0&&([n[1],n[2]]=[n[2],n[1]]);let i=Gl(n),a=[];for(let e of f){let t=Gl(e);if(t.right<i.left||t.left>i.right||t.bottom<i.top||t.top>i.bottom){a.push(e);continue}let o=e;for(let e=0;e<3&&o.length;e++){let t=Wl(o,n[e],n[(e+1)%3]);t.outside.length&&a.push(t.outside),o=t.inside}o.length&&r.push(o)}if(f=a,f.length>1e5)throw Error(`World contour partition exceeds geometry budget`)}}d.set(`base`,f);let p=new en;p.name=`WorldTileLayers:${t}`;let m=new gr({map:n,toneMapped:!1}),h=new Map,g={},_=0,v=0,y=(e,n)=>{let r=[],o=[],l=0;for(let e of n){l+=Math.abs(zl(e));for(let t=1;t<e.length-1;t++)if(!(Math.abs(Rl(e[0],e[t],e[t+1]))<1e-8)){for(let n of[e[0],e[t+1],e[t]])r.push(i+n[0],c-n[1],0),o.push(n[0]/s,1-n[1]/c);v++}}g[e]=l,_+=l;let u=new ir;u.setAttribute(`position`,new Kn(r,3)),u.setAttribute(`uv`,new Kn(o,2)),u.computeBoundingBox(),u.computeBoundingSphere();let d=new Or(u,m);d.name=`${t}:${e}`,d.userData={tileId:t,ownershipId:e,band:a.find(t=>t.id===e)?.band??`base`,nativeDepth:0},p.add(d),h.set(e,d)};try{for(let[e,t]of d)y(e,t);if(Math.abs(_-s*c)>Math.max(.001,s*c*1e-9))throw Error(`World ownership partition lost native pixels`)}catch(e){for(let e of h.values())e.geometry.dispose();throw m.dispose(),e}let b={tileId:t,calibration:`native-world-pixels-fixed-camera`,nativeSize:[s,c],tileOriginX:i,renderedDepths:[0],maxSafeRelativeParallax:0,cleanBackplateCandidateAvailable:!!o,backingApplied:!1,nonzeroDepthApproved:!1,layerCount:h.size,triangleCount:v,ownershipAreas:g,coveredArea:_,imageArea:s*c,ownershipOverlap:!1,visualApproved:!1,referenceCameraDistance:c/(2*Math.tan(38*Math.PI/360)),limitations:[`All local ownership meshes remain at Z0 until an erased backing and its exposed boundaries are visually accepted.`,`Independent tile artwork still requires seam and ground-height acceptance.`]},x=!1;return{root:p,meshes:h,diagnostics:b,dispose(){if(!x){x=!0;for(let e of h.values())e.geometry.dispose();m.dispose(),p.clear()}}}}var ql=new WeakMap,Jl=new WeakMap;function Yl(e,t){if(Jl.has(e))throw Error(`Station hit query already registered`);return Jl.set(e,t),()=>{Jl.get(e)===t&&Jl.delete(e)}}function Xl(e,t){if(!Number.isSafeInteger(t.width)||!Number.isSafeInteger(t.height)||t.width<1||t.height<1||t.data.length!==t.width*t.height*4)throw Error(`Invalid station CPU texture pixels`);let n=new Uint8Array(t.width*t.height);for(let e=0;e<n.length;e++)n[e]=t.data[e*4+3];ql.set(e,{width:t.width,height:t.height,alpha:n,rgba:t.keepColor?new Uint8Array(t.data):void 0})}function Zl(e,t,n){if(n===1e3)return(e%t+t)%t;if(n===1002){let n=(e%(2*t)+2*t)%(2*t);return n<t?n:2*t-1-n}return Math.max(0,Math.min(t-1,e))}var Ql=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function $l(e,t,n,r,i){let a=Zl(r,t.height,e.wrapT)*t.width+Zl(n,t.width,e.wrapS),o=(i===3?t.alpha[a]:t.rgba[a*4+i])/255;return i<3&&e.colorSpace===`srgb`?Ql(o):o}function eu(e,t,n=3){let r=ql.get(e);if(!r||n!==3&&!r.rgba)return;e.matrixAutoUpdate&&e.updateMatrix();let i=t.clone().applyMatrix3(e.matrix),a=i.x*r.width-.5,o=(1-i.y)*r.height-.5;if(!Number.isFinite(a)||!Number.isFinite(o))return;if(e.magFilter===1003&&e.minFilter===1003)return $l(e,r,Math.floor(a+.5),Math.floor(o+.5),n);let s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c;return $l(e,r,s,c,n)*(1-l)*(1-u)+$l(e,r,s+1,c,n)*l*(1-u)+$l(e,r,s,c+1,n)*(1-l)*u+$l(e,r,s+1,c+1,n)*l*u}function tu(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}function nu(e){if(!(e.object instanceof Or))return;let t=e.object.material;return Array.isArray(t)?t[e.face?.materialIndex??0]:t}function ru(e,t){if(!(e.object instanceof Or)||!e.face)return;let n=e.object.geometry,r=n.getAttribute(t);if(!r)return;let i=n.getAttribute(`position`),a=e.face,o=e.object.worldToLocal(e.point.clone()),s=wn.getBarycoord(o,new J().fromBufferAttribute(i,a.a),new J().fromBufferAttribute(i,a.b),new J().fromBufferAttribute(i,a.c),new J);if(s)return new q(r.getX(a.a)*s.x+r.getX(a.b)*s.y+r.getX(a.c)*s.z,r.getY(a.a)*s.x+r.getY(a.b)*s.y+r.getY(a.c)*s.z)}function iu(e,t,n=3){let r=t.channel===0?e.uv:ru(e,`uv${t.channel}`);return r?eu(t,r,n):void 0}function au(e){let t=nu(e);if(!t||!t.visible||!tu(e.object))return 0;let n=Jl.get(e.object);if(n)return n(e);if(t instanceof gr){let n=t.opacity;if(t.map){let r=iu(e,t.map);if(r==null)return;n*=r}if(t.alphaMap){let r=iu(e,t.alphaMap,1);if(r==null)return;n*=r}return n<t.alphaTest?0:n}if(t instanceof Pi&&t.uniforms.paint&&t.uniforms.sclera&&t.uniforms.characterOpacity){let n=t.uniforms,r=ru(e,`maskLocal`),i=ru(e,`maskUV`);if(!e.uv||!r||!i)return;if(r.x<0||r.x>1||r.y<0||r.y>1)return 0;let a=eu(n.paint.value,e.uv),o=eu(n.sclera.value,i),s=n.alphaCutoff.value;if(a==null||o==null)return;if(a<s||o<s)return 0;let c=1;if(n.whiteOnly.value){let e=[0,1,2].map(e=>eu(n.sclera.value,i,e));if(e.some(e=>e==null))return;let t=e[0]*.2126+e[1]*.7152+e[2]*.0722,r=Math.max(0,Math.min(1,(t-.15)/.5));c=r*r*(3-2*r)}let l=a*o*c*n.blinkOpacity.value*n.characterOpacity.value;return l<s?0:l}}function ou(e){let t=nu(e);if(!t||!t.visible||!t.depthWrite||t.opacity<=0||!tu(e.object))return!1;let n=au(e);return n==null||n>0}var su=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],cu=60,lu=(e,t)=>{let n=!1;for(let r=0,i=e.length-1;r<e.length;i=r++){let a=e[i],o=e[r],s=(o[0]-a[0])*(t[1]-a[1])-(o[1]-a[1])*(t[0]-a[0]);if(Math.abs(s)<.001&&t[0]>=Math.min(a[0],o[0])-1e-5&&t[0]<=Math.max(a[0],o[0])+1e-5&&t[1]>=Math.min(a[1],o[1])-1e-5&&t[1]<=Math.max(a[1],o[1])+1e-5)return!0;a[1]>t[1]!=o[1]>t[1]&&t[0]<(o[0]-a[0])*(t[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n};function uu(e){let{id:t,texture:n,cleanTexture:r,image:{width:i,height:a},tileOriginX:o,columns:s}=e,c=structuredClone(e.room),l=e.depthScale??1;if(!Number.isFinite(l)||l<1||l>3)throw Error(`Invalid connected room depth scale`);for(let[e,t]of Object.entries(c.vertices))c.vertices[e]=[t[0],t[1],t[2]*l];let u=e.cameraZ??a/(2*Math.tan(38*Math.PI/360)),d=o+i/2,f=a/2;if(!r?.isTexture||!Number.isFinite(u)||u<=cu||!c?.faces?.length||c.faces.length>32)throw Error(`Invalid connected room options`);let p=new J(d,f,u),m=(e,t)=>new J(d+(o+e[0]-d)*(1-t/u),f+(a-e[1]-f)*(1-t/u),t),h=e=>{let t=u/(u-e.z);return new q((d+(e.x-d)*t-o)/i,(f+(e.y-f)*t)/a)},g=new Map;for(let[e,t]of Object.entries(c.vertices)){if(t.length!==3||!t.every(Number.isFinite)||t[0]<0||t[0]>i||t[1]<0||t[1]>a||t[2]>0||t[2]<-500)throw Error(`Invalid native room vertex`);g.set(e,m([t[0],t[1]],t[2]))}let _=new Map,v=new Map;for(let e of c.faces){if(!e.id||v.has(e.id)||s.some(t=>t.id===e.id)||e.vertices.length<3)throw Error(`Invalid connected face id`);let t=e.vertices.map(e=>{let t=g.get(e);if(!t)throw Error(`Unknown shared room vertex`);return t}),n=new cr().setFromCoplanarPoints(t[0],t[1],t[2]);if(n.normal.lengthSq()<.99||t.some(e=>Math.abs(n.distanceToPoint(e))>1e-7))throw Error(`Room face must be a genuine plane`);n.distanceToPoint(p)<0&&n.negate();let r=e.vertices.map(e=>[c.vertices[e][0],c.vertices[e][1]]);v.set(e.id,{plane:n,polygon:r,ids:e.vertices});for(let t=0;t<e.vertices.length;t++){let n=e.vertices[t],r=e.vertices[(t+1)%e.vertices.length],i=[n,r].sort().join(`:`),a=_.get(i)??{a:n,b:r,owners:[]};a.owners.push(e.id),_.set(i,a)}}for(let e of _.values()){if(e.owners.length>2)throw Error(`Non-manifold connected room edge`);if(e.owners.length===1&&(c.vertices[e.a][2]!==0||c.vertices[e.b][2]!==0))throw Error(`Unconnected rear room boundary`)}let y=v.get(c.terminalFaceId);if(!y)throw Error(`Missing physical terminal face`);let[b,x,S,C]=c.screenCarrierSourceBounds,w=[[b,x],[S,x],[S,C],[b,C]];if(![b,x,S,C].every(Number.isFinite)||b>=S||x>=C||!w.every(e=>lu(y.polygon,e)))throw Error(`Full physical terminal must belong to one room face`);for(let e of s)if(e.sourcePolygon.some(e=>e[0]>=b&&e[0]<=S&&e[1]>=x&&e[1]<=C))throw Error(`Column clean fill overlaps physical terminal`);let T=[...s.map(e=>({...e,band:`foreground`})),...c.faces.map(e=>({id:e.id,band:`opening`,sourcePolygon:v.get(e.id).polygon}))],E=Kl({id:t,texture:n,image:e.image,tileOriginX:o,parts:T}),{root:D,meshes:O}=E;D.name=`WorldConnectedRoom:${t}`;let k=!1,A=()=>{if(k)throw Error(`Connected room disposed`);if(D.updateWorldMatrix(!0,!1),D.matrixWorld.elements.some((e,t)=>Math.abs(e-su[t])>1e-9))throw Error(`Connected room root and ancestors must retain identity world transform; use tileOriginX`)},j=[],M=[],N=[],P=(e=>{let t=new gr({map:e,side:2,toneMapped:!1});return j.push(t),t.onBeforeCompile=e=>{e.uniforms.roomSourceCalibration={value:new J(d,f,u)},e.uniforms.roomSourceImage={value:new J(o,i,a)},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 roomSourceWorld;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
roomSourceWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 roomSourceWorld;
uniform vec3 roomSourceCalibration;
uniform vec3 roomSourceImage;
#ifdef USE_MAP
uniform mat3 mapTransform;
#endif
vec2 roomNativeUV() {
  float k = roomSourceCalibration.z / (roomSourceCalibration.z - roomSourceWorld.z);
  vec2 source = roomSourceCalibration.xy + (roomSourceWorld.xy - roomSourceCalibration.xy) * k;
  return vec2((source.x - roomSourceImage.x) / roomSourceImage.y, source.y / roomSourceImage.z);
}`).replace(`#include <map_fragment>`,`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D(map, (mapTransform * vec3(roomNativeUV(), 1.0)).xy);
  diffuseColor *= sampledDiffuseColor;
#endif`)},t.customProgramCacheKey=()=>`world-connected-room-reference-uv-v1`,t})(n),F=(e,t,n=0)=>{let r=v.get(e);if(!r||!t.every(Number.isFinite)||!Number.isFinite(n))throw Error(`Invalid connected face point`);let i=new J(o+t[0],a-t[1],0).sub(p),s=r.plane.normal.dot(i);if(Math.abs(s)<1e-9)throw Error(`Room reference ray parallel to plane`);let c=-(r.plane.normal.dot(p)+r.plane.constant)/s;return p.clone().addScaledVector(i,c).addScaledVector(r.plane.normal,n)},I=(e,t)=>{for(let n of v.get(e).ids){let e=c.vertices[n];if(Math.hypot(t[0]-e[0],t[1]-e[1])<2e-4)return g.get(n).clone()}for(let n of _.values()){if(!n.owners.includes(e))continue;let r=c.vertices[n.a],i=c.vertices[n.b],a=i[0]-r[0],o=i[1]-r[1],s=a*a+o*o,l=((t[0]-r[0])*a+(t[1]-r[1])*o)/s;if(l<-1e-6||l>1.000001||Math.abs(a*(t[1]-r[1])-o*(t[0]-r[0]))/Math.sqrt(s)>2e-4)continue;let d=Math.max(0,Math.min(1,l)),f=1/((1-d)/(1-r[2]/u)+d/(1-i[2]/u));return m(t,u*(1-f))}return F(e,t)},L=(e,t)=>N.push(Yl(e,e=>eu(t,h(e.point))));for(let e of c.faces){let t=O.get(e.id),r=t.geometry.getAttribute(`position`),o=t.geometry.getAttribute(`uv`);for(let t=0;t<r.count;t++){let n=I(e.id,[o.getX(t)*i,(1-o.getY(t))*a]);r.setXYZ(t,n.x,n.y,n.z)}r.needsUpdate=!0,t.geometry.computeBoundingBox(),t.geometry.computeBoundingSphere(),t.material=P,t.userData={...t.userData,band:`connected-native-room`,roomFace:e.id,sourceUV:`fixed-reference-projection`},L(t,n)}let R=new gr({map:r,side:2,toneMapped:!1});j.push(R);for(let e of s){let r=O.get(e.id),o=r.geometry.clone();M.push(o);let s=new Or(o,R);s.name=`${t}:${e.id}:clean-fill`,s.userData={tileId:t,band:`clean-column-only`,ownershipId:e.id,nativeDepth:0},O.set(`${e.id}:clean-fill`,s),D.add(s);let c=r.geometry.getAttribute(`position`),l=r.geometry.getAttribute(`uv`);for(let e=0;e<c.count;e++){let t=m([l.getX(e)*i,(1-l.getY(e))*a],cu);c.setXYZ(e,t.x,t.y,t.z)}c.needsUpdate=!0,r.geometry.computeBoundingBox(),r.geometry.computeBoundingSphere(),r.material=P,r.userData.nativeDepth=cu,L(r,n)}for(let e of O.values())e.onBeforeRender=A;let ee=(e,t)=>{A();let[n,r,i,a]=e;if(![n,r,i,a,t].every(Number.isFinite)||i<=0||a<=0||t<=0||n<b||r<x||n+i>S||r+a>C)throw Error(`Terminal safe rect outside physical carrier`);let o=[[n,r],[n+i,r],[n+i,r+a],[n,r+a]].map(e=>F(c.terminalFaceId,e,.2)),s=o.reduce((e,t)=>e.add(t),new J).multiplyScalar(.25),l=y.plane.normal,u=Math.max(o[0].distanceTo(o[3]),o[0].distanceTo(o[1])/t)/(2*Math.tan(38*Math.PI/360))*1.3;return{corners:o.map(e=>e.toArray()),focus:{position:s.clone().addScaledVector(l,u).toArray(),target:s.toArray(),fov:38}}};return{root:D,meshes:O,diagnostics:{...E.diagnostics,calibration:`native-connected-planar-room-fixed-reference-uv`,renderedDepths:[...new Set(Object.values(c.vertices).map(e=>e[2])),cu].sort((e,t)=>e-t),depthScale:l,referenceCameraDistance:u,sharedEdges:[..._.values()].map(e=>({...e,world:[g.get(e.a).toArray(),g.get(e.b).toArray()]})),planeCount:c.faces.length,layerCount:O.size,originalInteriorOnly:!0,fullPhysicalTerminalFace:c.terminalFaceId,cleanUse:`original-column-ownership-only`,backingApplied:!0,nonzeroDepthApproved:!1,visualApproved:!1,limitations:[`Rigid 2.5D planes retain painted interior objects, rather than reconstructing every machine in 3D.`,`Generated paint appears only in column reveal regions and still needs rendered edge acceptance.`,`Root and all ancestors must retain identity world transforms.`]},pointOnFace:F,sampleSourceUV:h,terminalCalibration:ee,assertWorldTransform:A,dispose(){if(k)return;k=!0,N.forEach(e=>e());for(let e of s)O.delete(`${e.id}:clean-fill`);let e=O.get(`base`).material;for(let t of O.values())t.material=e;E.dispose(),M.forEach(e=>e.dispose()),j.forEach(e=>e.dispose())}}}var du=4/255,fu=e=>e.every(Number.isFinite),pu=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);function mu(e,t,n){if(!Array.isArray(e)||e.length<3)throw Error(`Calibrated polygon needs at least three vertices`);let r=Math.max(t,n)*1e-9,i=r*Math.max(t,n),a=e.map(e=>{if(!Array.isArray(e)||e.length!==2||!fu(e)||e[0]<0||e[0]>t||e[1]<0||e[1]>n)throw Error(`Invalid or out-of-image calibrated pixel`);return[e[0],e[1]]});for(let e=0;e<a.length;e++)for(let t=e+1;t<a.length;t++)if(Math.hypot(a[e][0]-a[t][0],a[e][1]-a[t][1])<=r)throw Error(`Duplicate calibrated polygon vertex`);let o=(e,t,n)=>Math.abs(pu(e,t,n))<=i&&n[0]>=Math.min(e[0],t[0])-r&&n[0]<=Math.max(e[0],t[0])+r&&n[1]>=Math.min(e[1],t[1])-r&&n[1]<=Math.max(e[1],t[1])+r;for(let e=0;e<a.length;e++){let t=a[e],n=a[(e+1)%a.length];for(let r=e+1;r<a.length;r++){if(r===e+1||e===0&&r===a.length-1)continue;let i=a[r],s=a[(r+1)%a.length],c=pu(t,n,i),l=pu(t,n,s),u=pu(i,s,t),d=pu(i,s,n);if(c*l<0&&u*d<0||o(t,n,i)||o(t,n,s)||o(i,s,t)||o(i,s,n))throw Error(`Self-intersecting calibrated polygon`)}}let s=a.reduce((e,t,n)=>{let r=a[(n+1)%a.length];return e+t[0]*r[1]-t[1]*r[0]},0)/2;if(Math.abs(s)<=i)throw Error(`Degenerate calibrated polygon`);let c=Si.triangulateShape(a.map(e=>new q(...e)),[]),l=c.reduce((e,t)=>e+Math.abs(pu(a[t[0]],a[t[1]],a[t[2]]))/2,0);if(!c.length||Math.abs(l-Math.abs(s))>Math.max(i,Math.abs(s)*1e-8))throw Error(`Invalid calibrated polygon triangulation`);return{points:a,triangles:c}}function hu(e){let{camera:t,image:n,texture:r,supportPlane:i}=e;if(!n||!Number.isSafeInteger(n.width)||!Number.isSafeInteger(n.height)||n.width<=0||n.height<=0)throw Error(`Invalid calibrated image dimensions`);if(!t?.isPerspectiveCamera||!fu([t.near,t.far,t.aspect])||t.near<=0||t.far<=t.near||t.aspect<=0)throw Error(`Invalid calibrated perspective camera`);if(!r?.isTexture)throw Error(`Calibrated layer needs a loaded texture`);let a=e.opacity??1,o=e.translucent??!1,s=e.ownTexture??!1;if(!Number.isFinite(a)||a<0||a>1||!o&&a!==1)throw Error(`Faded calibrated layers must be explicitly translucent`);if(e.depthWrite!=null&&typeof e.depthWrite!=`boolean`)throw Error(`Invalid calibrated depth writing`);if(e.translucent!=null&&typeof e.translucent!=`boolean`)throw Error(`Invalid calibrated translucency`);if(typeof s!=`boolean`)throw Error(`Invalid calibrated texture ownership`);if(!i||!Array.isArray(i.normal)||!Array.isArray(i.point)||i.normal.length!==3||i.point.length!==3||!fu([...i.normal,...i.point]))throw Error(`Invalid calibrated support plane`);let c=new J(...i.normal),l=c.length();if(!Number.isFinite(l)||l<1e-12)throw Error(`Degenerate calibrated support plane`);let{points:u,triangles:d}=mu(e.polygon,n.width,n.height);if(t.updateWorldMatrix(!0,!1),!fu([...t.matrixWorld.elements,...t.projectionMatrix.elements])||Math.abs(t.matrixWorld.determinant())<1e-12||Math.abs(t.projectionMatrix.determinant())<1e-12)throw Error(`Invalid calibrated camera matrices`);let f=t.clone();f.matrixAutoUpdate=!1,f.matrix.copy(t.matrixWorld),f.matrixWorld.copy(t.matrixWorld),f.matrixWorldInverse.copy(t.matrixWorld).invert(),f.projectionMatrixInverse.copy(f.projectionMatrix).invert();let p=new cr().setFromNormalAndCoplanarPoint(c.divideScalar(l),new J(...i.point)),m=new Na,h=[],g=[],_=[];for(let[e,t]of u){if(m.setFromCamera(new q(e/n.width*2-1,1-t/n.height*2),f),Math.abs(m.ray.direction.dot(p.normal))<1e-10)throw Error(`Calibrated ray is parallel to support plane`);let r=m.ray.intersectPlane(p,new J);if(!r||!fu(r.toArray())||r.clone().sub(m.ray.origin).dot(m.ray.direction)<=0)throw Error(`No forward calibrated plane intersection`);let i=-r.clone().applyMatrix4(f.matrixWorldInverse).z;if(!Number.isFinite(i)||i<f.near||i>f.far)throw Error(`Calibrated plane intersection outside camera depth range`);if(!r.toArray().every(e=>Number.isFinite(Math.fround(e))))throw Error(`Calibrated position exceeds GPU precision range`);let a=r.clone().set(Math.fround(r.x),Math.fround(r.y),Math.fround(r.z)).project(f);if(Math.abs((a.x+1)*n.width/2-e)>.01||Math.abs((1-a.y)*n.height/2-t)>.01)throw Error(`GPU position precision cannot preserve calibrated pixel registration`);let o=new xt(...r.toArray(),1).applyMatrix4(f.matrixWorldInverse).applyMatrix4(f.projectionMatrix);if(!Number.isFinite(o.w)||o.w<=0)throw Error(`Invalid calibrated projective texture weight`);h.push(...r.toArray()),g.push(e/n.width,1-t/n.height),_.push(o.w)}let v=_.reduce((e,t)=>Math.max(e,t),0),y=_.flatMap((e,t)=>{let n=e/v;return[g[t*2]*n,g[t*2+1]*n,n]}),b=new ir;b.setAttribute(`position`,new Kn(h,3)),b.setAttribute(`uv`,new Kn(g,2)),b.setAttribute(`calibratedUvQ`,new Kn(y,3)),b.setIndex(d.flat()),b.computeVertexNormals(),b.computeBoundingBox(),b.computeBoundingSphere();let x=new gr({map:r,side:2,transparent:o,alphaToCoverage:!o,alphaTest:du,depthWrite:e.depthWrite??!o,opacity:a,toneMapped:!1});x.onBeforeCompile=e=>{e.vertexShader=`attribute vec3 calibratedUvQ;
varying vec3 vCalibratedUvQ;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <uv_vertex>`,`#include <uv_vertex>
vCalibratedUvQ = calibratedUvQ;`),e.fragmentShader=`varying vec3 vCalibratedUvQ;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,Z.map_fragment.replaceAll(`vMapUv`,`( vCalibratedUvQ.xy / vCalibratedUvQ.z )`))},x.customProgramCacheKey=()=>`station-calibrated-projective-map-v1`;let S=new Or(b,x);S.name=e.id??`station-calibrated-layer`;let C=new Et().multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),w=S.raycast;S.raycast=function(e,t){let n=t.length;w.call(this,e,t);let r=new Et().copy(this.matrixWorld).invert();for(let e=n;e<t.length;e++){let n=t[e];if(n.object!==this)continue;let i=n.point.clone().applyMatrix4(r).applyMatrix4(C);n.uv=new q((i.x+1)/2,(i.y+1)/2)}};let T=!1;return{mesh:S,geometry:b,material:x,dispose(){T||(T=!0,S.removeFromParent(),b.dispose(),x.dispose(),s&&r.dispose())}}}function gu(e,t,n){let r=e?.image,i=e?.camera;if(!r||![r.width,r.height].every(e=>Number.isSafeInteger(e)&&e>0)||!i||!Array.isArray(i.position)||i.position.length!==3||!i.position.every(Number.isFinite)||!Array.isArray(i.target)||i.target.length!==3||!i.target.every(Number.isFinite)||!Number.isFinite(i.fov)||i.fov<=0||i.fov>=180)throw Error(`Invalid support reference camera/image`);if(i.position[0]!==0||i.position[1]!==0||i.position[2]<=0||i.target.some(e=>e!==0))throw Error(`Support requires the authored frontal resident camera`);if(!t?.texture?.isTexture||![t.width,t.height].every(e=>Number.isSafeInteger(e)&&e>0))throw Error(`Invalid native support texture`);let a=e.layers?.find(e=>e.id===`resident`);if(!a||a.parent||a.role!==`body`||a.supportPlane||!Number.isFinite(a.depth))throw Error(`Support requires a simple original resident body root`);let o=n??[1,0,0,0,1,0,0,0,1];if(!Array.isArray(o)||o.length!==9||!o.every(Number.isFinite)||o[1]!==0||o[3]!==0||o[6]!==0||o[7]!==0||o[8]!==1||o[0]<=0||o[4]<=0)throw Error(`Invalid furniture source registration: positive diagonal affine required`);let s=[...o],c={width:t.width,height:t.height},l=a.depth-.03,u=new fa(i.fov,r.width/r.height,.1,260);return u.position.set(i.position[0],i.position[1],i.position[2]),u.lookAt(new J(i.target[0],i.target[1],i.target[2])),u.setViewOffset(r.width,r.height,s[2],s[5],c.width*s[0],c.height*s[4]),u.updateMatrixWorld(!0),{...hu({id:`resident-support`,camera:u,image:c,polygon:[[0,0],[c.width,0],[c.width,c.height],[0,c.height]],supportPlane:{normal:[0,0,1],point:[0,0,l]},texture:t.texture}),diagnostics:{productionReady:!1,visualAccepted:!1,residentRootId:a.id,residentDepth:a.depth,planeDepth:l,textureCallerOwned:!0,texturePixelsModified:!1,nativePixelMapping:{sourceImage:{...r},candidateImage:c,matrix3x3RowMajor:s,coordinateConvention:`native top-left pixels, y down`,pixelResampled:!1},limitations:[`The affine is caller-declared; generated furniture contact and silhouette still require composite review.`,`Attach to the existing resident root; this helper does not apply source-to-world placement.`,`Native alpha cutoff rejects low-alpha residue but does not certify furniture visual acceptance.`]}}}Object.freeze({breathPeriodSeconds:6,windPeriodSeconds:8,minDelaySeconds:.04,maxDelaySeconds:.14});var _u=e=>Math.max(0,Math.min(1,e)),vu=e=>e*e*(3-2*e);function yu({motion:e,role:t,id:n,sourcePolygon:r}){let i=[...e.root,...e.tip,...e.amplitudePixels],a=e.tip[0]-e.root[0],o=e.tip[1]-e.root[1],s=Math.hypot(a,o);if(!i.every(Number.isFinite)||s<1||![`sway`,`breath`,`hinge`].includes(e.kind))throw Error(`Invalid coherent motion axis`);let c=(e.anchors??[]).map(e=>{if(!e.point.every(Number.isFinite)||!Number.isFinite(e.radius)||e.radius<=0)throw Error(`Invalid coherent motion anchor`);return Object.freeze({x:e.point[0],y:e.point[1],radius:e.radius})}),l,u=e.interiorCloth,d=e.freeEnd,f=e.worldReadability,p=Math.hypot(...e.amplitudePixels);if(f&&(u||e.kind!==`sway`||!Number.isFinite(f.delaySeconds)||f.delaySeconds<.04||f.delaySeconds>.14||!c.some(t=>t.x===e.root[0]&&t.y===e.root[1]&&t.radius>=10)||(f.kind===`repaired-hair`?t!==`hair`||d||s<32||p>Math.min(5.5,s*.065):f.kind!==`repaired-free-end`||!d||![`coat`,`strap`].includes(t)||s<40||p>3.2)))throw Error(`Invalid world readability repair constraints`);if(d&&(u||![`coat`,`strap`].includes(t)||e.kind!==`sway`||!Number.isFinite(d.delaySeconds)||d.delaySeconds<.04||d.delaySeconds>.14||p>(f?3.2:1.5)||!c.some(t=>t.x===e.root[0]&&t.y===e.root[1]&&t.radius>=8)))throw Error(`Invalid repaired free-end motion`);if(u){let i=e=>Array.isArray(e)&&e.length>=3&&e.every(e=>e.length===2&&e.every(Number.isFinite));if(![`body`,`arm`,`leg`].includes(t)||n===`resident`||e.kind!==`breath`||!i(r)||![u.fixedBandPixels,u.featherPixels,u.meshSpacingPixels,u.delaySeconds].every(Number.isFinite)||u.fixedBandPixels<3||u.featherPixels<8||u.meshSpacingPixels<6||u.meshSpacingPixels>12||u.delaySeconds<0||u.delaySeconds>.14||!Array.isArray(u.protectedPolygons)||u.protectedPolygons.some(e=>!i(e))||Math.hypot(...e.amplitudePixels)>2)throw Error(`Invalid interior cloth constraints`);l=`interior-cloth`}else l=[`fixed`,`head`,`face`,`foreground`].includes(t)||/(?:contact|support|cheek|seat|sole|boot)/i.test(n)?`fixed`:t===`hand`||t===`leg`||n===`resident`?`inherit`:t===`hair`||t===`coat`||t===`strap`?`wind`:t===`arm`&&e.kind===`hinge`?`hinge`:`breath`;let m=/(?:waist|lap|belt|pants|trouser)/i.test(n)?.12:l===`wind`?t===`hair`?1.6:t===`coat`?.6:.45:.65,h=u||d||f?1:p?Math.min(.4,m/p):0,g=(-o*e.amplitudePixels[0]+a*e.amplitudePixels[1])/s,_=Math.sign(g)||Math.sign(e.amplitudePixels[0]||e.amplitudePixels[1]),v=f?f.delaySeconds:u?u.delaySeconds:d?d.delaySeconds:l===`wind`?(t===`hair`?.1:t===`coat`?.04:.08)+.04*_u(s/400):l===`hinge`?.06:0;return Object.freeze({id:n,role:t,channel:l,rootX:e.root[0],rootY:e.root[1],axisX:a,axisY:o,inverseLengthSquared:1/(s*s),amplitudeX:e.amplitudePixels[0]*h,amplitudeY:e.amplitudePixels[1]*h,angleAmplitude:_*Math.min(.004,p*.32/s),delaySeconds:v,windPeriodSeconds:f?4.8:8,worldReadable:!!f,anchors:Object.freeze(c),...u?{interiorCloth:{...structuredClone(u),polygon:structuredClone(r)}}:{}})}function bu(e,t,n){let r=1;for(let i of e.anchors)r*=vu(_u((Math.hypot(t-i.x,n-i.y)-i.radius)/i.radius));return vu(_u(((t-e.rootX)*e.axisX+(n-e.rootY)*e.axisY)*e.inverseLengthSquared))*r}function xu(e,t,n){let r=!1,i=1/0;for(let a=0,o=e.length-1;a<e.length;o=a++){let s=e[o],c=e[a],l=c[0]-s[0],u=c[1]-s[1],d=l*l+u*u,f=d?_u(((t-s[0])*l+(n-s[1])*u)/d):0;i=Math.min(i,Math.hypot(t-s[0]-f*l,n-s[1]-f*u)),s[1]>n!=c[1]>n&&t<(c[0]-s[0])*(n-s[1])/(c[1]-s[1])+s[0]&&(r=!r)}return i<1e-4?0:r?i:-i}function Su(e,t,n){let r=e.interiorCloth;if(!r)return 1;let i=vu(_u((xu(r.polygon,t,n)-r.fixedBandPixels)/r.featherPixels));for(let e of r.protectedPolygons){if(i===0)break;i*=vu(_u((-xu(e,t,n)-r.fixedBandPixels)/r.featherPixels))}for(let r of e.anchors)i*=vu(_u((Math.hypot(t-r.x,n-r.y)-r.radius)/r.radius));return i}function Cu(e){return{plan:e,time:0,driver:0,offsetX:0,offsetY:0,sinAngle:0}}function wu(e,t,n){if(!Number.isFinite(t)||t<0)throw Error(`Invalid coherent motion time`);let r=t-e.delaySeconds,i=0;return e.channel===`wind`?i=Math.sin(r*2*Math.PI/e.windPeriodSeconds):(e.channel===`breath`||e.channel===`hinge`||e.channel===`interior-cloth`)&&(i=Math.sin(r*Math.PI/3)),n.plan=e,n.time=t,n.driver=i,n.offsetX=e.amplitudeX*i,n.offsetY=e.amplitudeY*i,n.sinAngle=e.channel===`hinge`?Math.sin(e.angleAmplitude*i):0,n}function Tu(e,t,n,r,i,a,o,s){let c=e.plan;if(c.channel===`fixed`)return o.x=r,o.y=i,o;if(c.channel===`inherit`||a<=0)return o.x=t,o.y=n,o;if(c.channel===`interior-cloth`){let l=s??Su(c,r,i);return o.x=t+e.offsetX*_u(a)*l,o.y=n+e.offsetY*_u(a)*l,o}let l=1;for(let e of c.anchors)l*=vu(_u((Math.hypot(r-e.x,i-e.y)-e.radius)/e.radius));if(l===0)return o.x=r,o.y=i,o;let u=_u(a),d=r+(t-r)*l,f=i+(n-i)*l;if(c.channel===`hinge`){let t=e.sinAngle*u*l,n=Math.sqrt(1-t*t),r=d-c.rootX,i=f-c.rootY;return o.x=c.rootX+r*n-i*t,o.y=c.rootY+r*t+i*n,o}let p=_u(((r-c.rootX)*c.axisX+(i-c.rootY)*c.axisY)*c.inverseLengthSquared),m=c.channel===`wind`&&c.worldReadable&&s!==void 0?s*u:(c.channel===`wind`?vu(p):4*p*(1-p))*u*l;return o.x=d+e.offsetX*m,o.y=f+e.offsetY*m,o}function Eu(e,t,n){let r=n.plan,i=e.map(e=>bu(r,e[0],e[1])),a=i.map(e=>e===0),o=(e,t,n,r)=>e*r-t*n,s=t.map(t=>{let[n,i,a]=t.map(t=>e[t]),s=i[0]-n[0],c=i[1]-n[1],l=a[0]-n[0],u=a[1]-n[1],d=o(r.amplitudeX,r.amplitudeY,l,u),f=o(s,c,r.amplitudeX,r.amplitudeY),p=Math.abs(o(s,c,l,u));if(p<1e-10)throw Error(`Degenerate readable source triangle`);return{t,c:[-d-f,d,f],limit:p*.65}});for(let e=0;e<256;e++){let e=0;for(let t of s){let n=t.t.reduce((e,n,r)=>e+i[n]*t.c[r],0),r=Math.abs(n)-t.limit;if(r<=1e-10)continue;e=Math.max(e,r/t.limit);let o=t.t.reduce((e,n,r)=>e+(a[n]?0:t.c[r]**2),0);if(o<1e-20)throw Error(`Fixed readable boundary would fold`);let s=Math.sign(n)*r/o;t.t.forEach((e,n)=>{a[e]||(i[e]=Math.max(0,Math.min(1,i[e]-s*t.c[n])))})}if(e<1e-7)break}return i}function Du(e,t,n,r){let i=(e,t)=>e<t?`${e}:${t}`:`${t}:${e}`,a=()=>{let n=(t,n=e)=>{let[r,i,a]=t.map(e=>n[e]);return(i[0]-r[0])*(a[1]-r[1])-(i[1]-r[1])*(a[0]-r[0])},a=r?[-1,1].map(t=>{let n={...r,offsetX:r.plan.amplitudeX*t,offsetY:r.plan.amplitudeY*t},i={x:0,y:0};return e.map(e=>(Tu(n,e[0],e[1],e[0],e[1],1,i),[i.x,i.y]))}):[],o=t=>{let r=n(t),i=Math.sign(r),o=Math.abs(r)/Math.max(...t.map((n,r)=>{let i=t[(r+1)%3];return(e[n][0]-e[i][0])**2+(e[n][1]-e[i][1])**2}));return a.length?Math.min(.5,...a.map(e=>i*n(t,e)/Math.abs(r)))*1e3+o:o};for(let e=0;e<40;e++){let e=new Map;t.forEach((t,n)=>t.forEach((r,a)=>{let o=t[(a+1)%3],s=i(r,o),c={triangle:n,a:r,b:o,c:t[(a+2)%3]};e.has(s)?e.get(s).push(c):e.set(s,[c])}));let r=new Set,a=!1;for(let i of e.values())if(i.length===2){let[e,s]=i;if(r.has(e.triangle)||r.has(s.triangle))continue;let c=[e.c,e.a,s.c],l=[e.c,s.c,e.b],u=Math.sign(n(t[e.triangle]));if(Math.sign(n(c))!==u||Math.sign(n(l))!==u||Math.min(o(c),o(l))<=Math.min(o(t[e.triangle]),o(t[s.triangle]))+1e-8)continue;t[e.triangle]=c,t[s.triangle]=l,r.add(e.triangle),r.add(s.triangle),a=!0}if(!a)break}return{points:e,triangles:t}};for(let r=0;r<16;r++){let r=new Map;for(let a of t)for(let t=0;t<3;t++){let o=a[t],s=a[(t+1)%3],c=i(o,s);!r.has(c)&&Math.hypot(e[o][0]-e[s][0],e[o][1]-e[s][1])>n+1e-6&&(r.set(c,e.length),e.push([(e[o][0]+e[s][0])/2,(e[o][1]+e[s][1])/2]))}if(!r.size)return a();let o=[];for(let e of t){let t=e.map((t,n)=>r.get(i(t,e[(n+1)%3]))),n=t.filter(e=>e!==void 0).length;if(n===0){o.push(e);continue}if(n===3){let[n,r,i]=e,[a,s,c]=t;o.push([n,a,c],[a,r,s],[c,s,i],[a,s,c]);continue}let a=n===1?t.findIndex(e=>e!==void 0):t.findIndex((e,n)=>e!==void 0&&t[(n+1)%3]!==void 0),s=e[a],c=e[(a+1)%3],l=e[(a+2)%3],u=t[a];if(n===1)o.push([s,u,l],[u,c,l]);else{let e=t[(a+1)%3];o.push([c,e,u],[s,u,l],[u,e,l])}}if(o.length>1e5)throw Error(`Connected layer refinement exceeds bounded mesh`);t=o}throw Error(`Connected layer refinement did not converge`)}var Ou=new Map;function ku(e){return e.every(e=>Ou.has(e))}function Au(e){for(let[t,n]of e)Ou.delete(t),Ou.set(t,n),Ou.size>256&&Ou.delete(Ou.keys().next().value)}function ju(e,t,n,r){let i=JSON.stringify([e,t,n,r?.plan]),a=Ou.get(i);if(a)return a;let o=Du(e,t,n,r),s={...o,...r?{weights:Eu(o.points,o.triangles,r)}:{}};return Au([[i,s]]),s}function Mu(e,t,n){let r=JSON.stringify([Array.from(t),n.plan]),i=e.motionWeights??={};if(i[r])return i[r];let a=Array.from({length:t.length/2},(e,r)=>Su(n.plan,t[r*2],t[r*2+1]));return i[r]={weights:Float32Array.from(a),allZero:a.every(e=>e===0)}}var Nu=1e-9,Pu=(e,t)=>e[0]*t[1]-e[1]*t[0],Fu=(e,t)=>[e[0]-t[0],e[1]-t[1]],Iu=e=>{if(!Number.isFinite(e))throw Error(`Nonfinite reference gaze value`);return e};function Lu(e){if(!Array.isArray(e)||e.length!==2)throw Error(`Invalid reference gaze point`);e.forEach(Iu)}function Ru(e,t,n){let r=Fu(n,t),i=Fu(e,t);return Math.abs(Pu(r,i))<=Nu*Math.max(1,Math.hypot(...r))&&e[0]>=Math.min(t[0],n[0])-Nu&&e[0]<=Math.max(t[0],n[0])+Nu&&e[1]>=Math.min(t[1],n[1])-Nu&&e[1]<=Math.max(t[1],n[1])+Nu}function zu(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[i],o=t[r];if(Ru(e,a,o))return!0;a[1]>e[1]!=o[1]>e[1]&&e[0]<(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n}function Bu(e,t,n,r){let i=Fu(t,e),a=Fu(r,n),o=Pu(i,Fu(n,e)),s=Pu(i,Fu(r,e)),c=Pu(a,Fu(e,n)),l=Pu(a,Fu(t,n));return o*s<0&&c*l<0||Ru(e,n,r)||Ru(t,n,r)||Ru(n,e,t)||Ru(r,e,t)}function Vu(e){let t=structuredClone(e);for(let e of[t.left,t.right]){if(!e)throw Error(`Both original eye calibrations are required`);Lu(e.neutralCenter);for(let t of[`left`,`right`,`up`,`down`])if(Iu(e.limits[t])<0)throw Error(`Negative reference eye limit`);let t=e.aperturePolygon;if(!Array.isArray(t)||t.length<3)throw Error(`Invalid eye aperture polygon`);t.forEach(Lu);let n=0;for(let e=0;e<t.length;e++){let r=t[e],i=t[(e+1)%t.length];if(Math.hypot(...Fu(i,r))<=Nu)throw Error(`Degenerate aperture edge`);n+=Pu(r,i);for(let n=e+1;n<t.length;n++)if(!(n===e+1||e===0&&n===t.length-1)&&Bu(r,i,t[n],t[(n+1)%t.length]))throw Error(`Self-intersecting eye aperture`)}if(Math.abs(n)<=Nu)throw Error(`Degenerate eye aperture`);if(!zu(e.neutralCenter,t))throw Error(`Original neutral pupil is outside its aperture`);let r=e.axis??{right:[1,0],down:[0,1]};if(Lu(r.right),Lu(r.down),Math.abs(Math.hypot(...r.right)-1)>1e-6||Math.abs(Math.hypot(...r.down)-1)>1e-6||Math.abs(r.right[0]*r.down[0]+r.right[1]*r.down[1])>1e-6||Pu(r.right,r.down)<.999999)throw Error(`Eye axes must be orthonormal and orientation preserving`);e.axis=r}return t}function Hu(e){return Lu(e),e.map(e=>Math.max(-1,Math.min(1,e)))}function Uu(e,t){if(Math.hypot(...t)<=Nu)return 1;let n=e.neutralCenter,r=e.aperturePolygon,i=[0,1];for(let e=0;e<r.length;e++){let a=r[e],o=Fu(r[(e+1)%r.length],a),s=Pu(t,o);if(Math.abs(s)<=Nu)continue;let c=Fu(a,n),l=Pu(c,o)/s,u=Pu(c,t)/s;l>=0&&l<=1&&u>=-1e-9&&u<=1.000000001&&i.push(l)}i.sort((e,t)=>e-t);for(let e=1;e<i.length;e++){let a=(i[e-1]+i[e])/2;if(!zu([n[0]+t[0]*a,n[1]+t[1]*a],r))return i[e-1]}return 1}function Wu(e,t,n){let r=e=>{let n=t[0]*(t[0]<0?e.limits.left:e.limits.right),r=t[1]*(t[1]<0?e.limits.up:e.limits.down),i=e.axis;return[n*i.right[0]+r*i.down[0],n*i.right[1]+r*i.down[1]]},i=r(e.left),a=r(e.right),o=Uu(e.left,i),s=Uu(e.right,a),c=Math.min(o,s),l=(e,t)=>[e[0]*t||0,e[1]*t||0];return{left:{offset:l(i,n?c:o)},right:{offset:l(a,n?c:s)}}}function Gu(e){let t=Vu(e),n=t.right.neutralCenter[0]-t.left.neutralCenter[0],r=t.right.neutralCenter[1]-t.left.neutralCenter[1],i=Math.hypot(n,r);if(i<1||n<=0)throw Error(`World gaze requires ordered native eye centers`);let a={right:[n/i,r/i],down:[-r/i,n/i]},o=[e.left,e.right].map(e=>{if(!Array.isArray(e.irisPolygon)||e.irisPolygon.length<3)throw Error(`World gaze requires actual iris polygons`);e.irisPolygon.forEach(Lu);let t=e.irisPolygon.map(e=>e[0]*a.right[0]+e[1]*a.right[1]);return Math.max(...t)-Math.min(...t)}),s=Math.min(3.4,...o.map(e=>e*.27)),c=Math.min(1.2,...o.map(e=>e*.1)),l=e=>Math.min(...[t.left,t.right].map(t=>Uu(t,e)));s*=Math.min(l([a.right[0]*s,a.right[1]*s]),l([-a.right[0]*s,-a.right[1]*s])),c*=Math.min(l([a.down[0]*c,a.down[1]*c]),l([-a.down[0]*c,-a.down[1]*c]));for(let e of[t.left,t.right])e.axis=a,e.limits={left:s,right:s,up:c,down:c},e.trackingProfile=`world-readable-v1`;return t}function Ku(e,t={}){let n=Vu(e),r=t.responseRate??12,i=t.bilateralSharedGain??!1;if(!(Iu(r)>0))throw Error(`Reference gaze response rate must be positive`);let a=t.fixation;if(a&&(!Number.isFinite(a.holdSeconds)||a.holdSeconds<0||a.holdSeconds>.3||!Number.isFinite(a.releaseDistance)||a.releaseDistance<=0||a.releaseDistance>.5))throw Error(`Invalid gaze fixation`);let o=[0,0],s=[0,0],c=1/0,l=!0,u=0,d=1/240,f=()=>Wu(n,o,i);return{update(e,t){if(Iu(e)<0)throw Error(`Negative reference gaze delta`);let n=Hu(t.target);if(!t.active||t.hidden)return l=!0,u=0,f();if(l||e>.25)return l=!1,u=0,f();for(u+=e;u+1e-12>=d;){u=Math.max(0,u-d);let e=-Math.expm1(-r*d),t=n;a&&(c+=d,(c>=a.holdSeconds||Math.hypot(n[0]-s[0],n[1]-s[1])>=a.releaseDistance||n.every(e=>e===0))&&(s=[...n],c=0),t=s),o=[o[0]+(t[0]-o[0])*e,o[1]+(t[1]-o[1])*e]}return f()},snapshot:f}}function qu(e,t,n,r){let i=e=>[e.width,e.height].every(e=>Number.isSafeInteger(e)&&e>0),a=e=>Array.isArray(e)&&e.length===2&&e.every(Number.isFinite);if(!i(e)||!i(t)||n.length<3||n.some(e=>!a(e)))throw Error(`Invalid reveal sampling domain`);if(!r&&(e.width!==t.width||e.height!==t.height))throw Error(`Different reveal dimensions require explicit registration`);let o=r?.matrixRows??[[1,0,0],[0,1,0],[0,0,1]];if(!Array.isArray(o)||o.length!==3||o.some(e=>!Array.isArray(e)||e.length!==3||e.some(e=>!Number.isFinite(e))))throw Error(`Invalid reveal registration matrix`);let s=o.map(e=>[...e]);if(!Array.isArray(s)||s.length!==3||s.some(e=>!Array.isArray(e)||e.length!==3||e.some(e=>!Number.isFinite(e))))throw Error(`Invalid reveal registration matrix`);let c=new Y().set(...s.flat()),l=c.determinant(),u=Math.max(...s.flat().map(Math.abs));if(!Number.isFinite(l)||l<=1e-12*u**3)throw Error(`Singular or reversed reveal registration`);let d=e=>{let t=s[2][0]*e[0]+s[2][1]*e[1]+s[2][2];if(!Number.isFinite(t)||t<=1e-10*u)throw Error(`Reveal registration crosses its forward domain`);return[(s[0][0]*e[0]+s[0][1]*e[1]+s[0][2])/t,(s[1][0]*e[0]+s[1][1]*e[1]+s[1][2])/t]},f=0;if(r){let n=r.landmarks,i=s[2][0]===0&&s[2][1]===0?3:4;if(!Array.isArray(n)||n.length<i||!Number.isFinite(r.maxResidualPixels)||r.maxResidualPixels<0||n.some(n=>!a(n.reference)||!a(n.source)||n.reference[0]<0||n.reference[1]<0||n.reference[0]>e.width||n.reference[1]>e.height||n.source[0]<0||n.source[1]<0||n.source[0]>t.width||n.source[1]>t.height))throw Error(`Reveal registration needs finite calibration landmarks/residual bound`);let o=e=>e.some((t,n)=>e.some((r,i)=>i>n&&e.some((e,n)=>n>i&&Math.abs((r[0]-t[0])*(e[1]-t[1])-(r[1]-t[1])*(e[0]-t[0]))>1e-6)));if(!o(n.map(e=>e.reference))||!o(n.map(e=>e.source)))throw Error(`Degenerate reveal calibration landmarks`);for(let e of n){let t=d(e.reference);f=Math.max(f,Math.hypot(t[0]-e.source[0],t[1]-e.source[1]))}if(f>r.maxResidualPixels+1e-7)throw Error(`Reveal calibration residual exceeds declared bound`)}for(let r of n){if(r[0]<0||r[1]<0||r[0]>e.width||r[1]>e.height)throw Error(`Reveal reference patch outside original`);let n=d(r);if(n.some(e=>!Number.isFinite(e))||n[0]<-1e-7||n[1]<-1e-7||n[0]>t.width+1e-7||n[1]>t.height+1e-7)throw Error(`Registered reveal patch outside native texture`)}let p=new Y().set(e.width,0,0,0,-e.height,e.height,0,0,1),m=new Y().set(1/t.width,0,0,0,-1/t.height,1,0,0,1);return{map:d,uvMatrix:new Y().multiplyMatrices(m,c).multiply(p),diagnostics:{mode:r?`candidate-registered-native-reveal`:`same-size-identity`,sourceSize:{...t},referenceSize:{...e},matrixRows:s.map(e=>[...e]),landmarkCount:r?.landmarks.length??0,measuredResidualPixels:f,pixelResampled:!1,visualApproved:!1}}}function Ju(e,t){if(t.diagnostics.mode===`same-size-identity`)return;let n=e.material,r=n.onBeforeCompile,i=n.customProgramCacheKey.bind(n);n.onBeforeCompile=function(e,n){r.call(this,e,n),e.uniforms.revealNativeUV={value:t.uvMatrix},e.fragmentShader=`uniform mat3 revealNativeUV;
vec2 registeredRevealUV(vec2 uv){vec3 q=revealNativeUV*vec3(uv,1.);return q.xy/q.z;}
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replaceAll(`( vCalibratedUvQ.xy / vCalibratedUvQ.z )`,`registeredRevealUV(vCalibratedUvQ.xy / vCalibratedUvQ.z)`)},n.customProgramCacheKey=()=>i()+`-registered-reveal-v1`;let a=e.raycast;e.raycast=function(e,n){let r=n.length;a.call(this,e,n);for(let e=r;e<n.length;e++){let r=n[e];if(r.object!==this||!r.uv)continue;let i=t.diagnostics.referenceSize,a=t.diagnostics.sourceSize,o=t.map([r.uv.x*i.width,(1-r.uv.y)*i.height]);r.uv.set(o[0]/a.width,1-o[1]/a.height)}}}var Yu=32,Xu=()=>({left:{offset:[0,0]},right:{offset:[0,0]}}),Zu=(e,t)=>Array.isArray(e)&&e.length===t&&e.every(Number.isFinite),Qu=`attribute vec3 calibratedUvQ; varying vec3 eyeUVQ;
void main(){eyeUVQ=calibratedUvQ;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,$u=`uniform sampler2D originalPaint; uniform sampler2D revealPaint;
uniform vec2 imageSize; uniform vec2 irisOffset;
uniform mat3 revealNativeUV;
uniform float actorCoverage;
uniform vec2 aperture[${Yu}]; uniform int apertureCount;
uniform vec2 iris[${Yu}]; uniform int irisCount; varying vec3 eyeUVQ;
bool inAperture(vec2 p){bool hit=false;vec2 a=aperture[apertureCount-1];
 for(int i=0;i<${Yu};i++){if(i>=apertureCount)break;vec2 b=aperture[i];
 if((a.y>p.y)!=(b.y>p.y)){if(p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)hit=!hit;}a=b;}return hit;}
float irisCoverage(vec2 p){bool hit=false;float distanceToEdge=1e20;vec2 a=iris[irisCount-1];
 for(int i=0;i<${Yu};i++){if(i>=irisCount)break;vec2 b=iris[i],edge=b-a;
 float t=clamp(dot(p-a,edge)/dot(edge,edge),0.,1.);distanceToEdge=min(distanceToEdge,length(p-(a+t*edge)));
 if((a.y>p.y)!=(b.y>p.y)){if(p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)hit=!hit;}a=b;}
 return hit?smoothstep(0.,.25,distanceToEdge):0.;}
vec2 paintUV(vec2 p){return vec2(p.x/imageSize.x,1.-p.y/imageSize.y);}
void main(){vec2 uv=eyeUVQ.xy/eyeUVQ.z;vec2 p=vec2(uv.x,1.-uv.y)*imageSize;
 if(actorCoverage<1.&&fract(52.9829189*fract(dot(floor(gl_FragCoord.xy),vec2(.06711056,.00583715))))>=actorCoverage)discard;
 if(!inAperture(p))discard;
 // Keep original sclera/eyelashes wherever no old or moved iris owns pixels.
 vec4 color=texture2D(originalPaint,paintUV(p));
 vec3 revealUV=revealNativeUV*vec3(paintUV(p),1.);
 color=mix(color,texture2D(revealPaint,revealUV.xy/revealUV.z),irisCoverage(p));
 vec2 source=p-irisOffset;float moved=irisCoverage(source);
 if(moved>0.)color=mix(color,texture2D(originalPaint,paintUV(source)),moved);
 gl_FragColor=color;
 #include <colorspace_fragment>
}`;function ed(e,t){let n=structuredClone(e),{image:r,camera:i}=n;if(!r||![r.width,r.height].every(e=>Number.isSafeInteger(e)&&e>0)||!i||!Zu(i.position,3)||!Zu(i.target,3)||!Number.isFinite(i.fov)||i.fov<=0||i.fov>=180||new J(...i.position).distanceTo(new J(...i.target))<1e-8)throw Error(`Invalid reference eye camera/image`);if(!Array.isArray(n.eyes)||n.eyes.length!==2||new Set(n.eyes.map(e=>e.id)).size!==2||n.eyes.some(e=>![`left`,`right`].includes(e.id)))throw Error(`Both reference eyes are required`);let a={left:n.eyes.find(e=>e.id===`left`),right:n.eyes.find(e=>e.id===`right`)},o=n.eyes.every(e=>e.trackingProfile===`world-readable-v1`);if(n.eyes.some(e=>e.trackingProfile)&&!o)throw Error(`World eye tracking must be bilateral`);let s=()=>Ku(a,{bilateralSharedGain:!0,...o?{responseRate:24,fixation:{holdSeconds:.16,releaseDistance:.18}}:{}}),c=s(),l=t[n.originalTextureId];if(!l?.texture?.isTexture||l.width!==r.width||l.height!==r.height)throw Error(`Eye original texture must retain full original dimensions`);let u=new Map;for(let e of n.eyes){if(!Number.isFinite(e.depth)||!e.revealTextureId||[e.aperturePolygon,e.irisPolygon].some(e=>!Array.isArray(e)||e.length<3||e.length>Yu||e.some(e=>!Zu(e,2)||e[0]<0||e[0]>r.width||e[1]<0||e[1]>r.height)))throw Error(`Invalid reference eye polygon/depth`);let i=t[e.revealTextureId];if(!i?.texture?.isTexture)throw Error(`Missing eye reveal texture`);u.set(e.id,qu(r,i,e.aperturePolygon,e.revealRegistration??n.revealRegistrations?.[e.revealTextureId]))}let d=new fa(i.fov,r.width/r.height,.1,260);d.position.set(...i.position),d.lookAt(new J(...i.target)),d.updateMatrixWorld(!0);let f=new en;f.name=`StationOriginalReferenceEyes`,f.visible=!1;let p=[];try{for(let e of n.eyes){hu({camera:d,image:r,polygon:e.irisPolygon,supportPlane:{normal:[0,0,1],point:[0,0,e.depth]},texture:l.texture}).dispose();let n=hu({id:`reference-eye-${e.id}`,camera:d,image:r,polygon:e.aperturePolygon,supportPlane:{normal:[0,0,1],point:[0,0,e.depth]},texture:l.texture}),i=e=>Array.from({length:Yu},(t,n)=>new q(...e[n]??e[e.length-1])),a=new Pi({transparent:!0,depthTest:!0,depthWrite:!1,side:2,toneMapped:!1,uniforms:{originalPaint:{value:l.texture},revealPaint:{value:t[e.revealTextureId].texture},imageSize:{value:new q(r.width,r.height)},irisOffset:{value:new q},revealNativeUV:{value:u.get(e.id).uvMatrix},actorCoverage:{value:1},aperture:{value:i(e.aperturePolygon)},apertureCount:{value:e.aperturePolygon.length},iris:{value:i(e.irisPolygon)},irisCount:{value:e.irisPolygon.length}},vertexShader:Qu,fragmentShader:$u}),o=new Or(n.geometry,a);o.name=`reference-eye-${e.id}`,o.renderOrder=200,o.frustumCulled=!1,f.add(o),p.push({eye:e,layer:n,mesh:o,material:a})}}catch(e){for(let e of p)e.material.dispose(),e.layer.dispose();throw f.clear(),e}let m=!1,h=!1,g=1,_=!1,v={productionReady:!1,mode:`original-static`,offsets:Xu(),source:`unchanged-original-iris-pixels`,sharedGain:!0,revealRegistrations:Object.fromEntries([...u].map(([e,t])=>[e,t.diagnostics])),limitations:[`Visible upper iris pixels only; hidden iris behind original eyelashes is not reconstructed.`,`Manual polygon boundaries and .25-source-pixel inward feather need native inspection for dark fragments/edge residue.`,`No generated blink artwork or face/head deformation.`,`Parent metadata is descriptive; caller must keep this group on the same fixed reference transform as the face.`]};return{root:f,reference:d,diagnostics:v,setActorOpacity(e){if(m)throw Error(`Reference eyes disposed`);if(!Number.isFinite(e)||e<0||e>1)throw Error(`Invalid reference actor opacity`);g=e;for(let t of p)t.material.uniforms.actorCoverage.value=e;f.visible=_&&e>0},update(e,t){if(m)throw Error(`Reference eyes disposed`);if(!Number.isFinite(e)||e<0||!Zu(t.target,2))throw Error(`Invalid reference eye input`);if(!(!t.hidden&&!t.reducedMotion&&(t.smoothReturn||t.active&&(t.target[0]!==0||t.target[1]!==0)))){c=s(),h=!1,_=!1,f.visible=!1,v.mode=`original-static`,v.offsets=Xu();for(let e of p)e.material.uniforms.irisOffset.value.set(0,0);return}let n=c.update(h?e:0,{target:t.active?t.target:[0,0],active:!0,hidden:!1});h=!0,_=Object.values(n).some(e=>Math.hypot(...e.offset)>.001),f.visible=_&&g>0,v.mode=f.visible?`original-iris-motion`:`original-static`,v.offsets=n;for(let e of p)e.material.uniforms.irisOffset.value.set(...n[e.eye.id].offset)},dispose(){if(!m){m=!0;for(let e of p)e.material.dispose(),e.layer.dispose();f.removeFromParent(),f.clear()}}}}function td(e={}){let t=e.frequency??12,n=e.maxSpeed??4,r=e.maxAcceleration??30,i=e.deadZone??.006;if(![t,n,r].every(e=>Number.isFinite(e)&&e>0)||!Number.isFinite(i)||i<0||i>=1)throw Error(`Invalid observation motion options`);let a={x:0,y:0},o={x:0,y:0},s={x:0,y:0},c=!1,l=()=>({x:a.x,y:a.y,diagnostics:{velocity:{...o},target:{...s},suspended:c,maxSpeed:n,maxAcceleration:r}});return{snapshot:l,update(e,u,d={}){if(!Number.isFinite(e)||e<0||![u.x,u.y].every(Number.isFinite))throw Error(`Invalid observation sample`);if(d.reducedMotion)return a.x=a.y=o.x=o.y=s.x=s.y=0,c=!0,l();if(d.hidden||d.hold)return o.x=o.y=0,c=!0,l();for(let e of[`x`,`y`]){let t=Math.max(-1,Math.min(1,u[e]));(Math.abs(t-s[e])>=i||Math.abs(t)===1)&&(s[e]=Math.abs(t)<i?0:t)}if(c)return c=!1,l();if(e>.25)return l();let f=Math.ceil(e*240),p=f?e/f:0;for(let e=0;e<f;e++)for(let e of[`x`,`y`]){let i=Math.max(-r,Math.min(r,t*t*(s[e]-a[e])-2*t*o[e])),c=Math.max(-n,Math.min(n,o[e]+i*p));a[e]+=(o[e]+c)*.5*p,o[e]=c,(a[e]>1||a[e]<-1)&&(a[e]=Math.max(-1,Math.min(1,a[e])),o[e]=0)}return l()}}}var nd=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),rd=(e,t,n)=>Math.abs(nd(t,n,e))<=1e-5&&e[0]>=Math.min(t[0],n[0])-1e-6&&e[0]<=Math.max(t[0],n[0])+1e-6&&e[1]>=Math.min(t[1],n[1])-1e-6&&e[1]<=Math.max(t[1],n[1])+1e-6;function id(e,t){let n=!1;for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];if(rd(e,i,a))return!0;i[1]>e[1]!=a[1]>e[1]&&e[0]<(a[0]-i[0])*(e[1]-i[1])/(a[1]-i[1])+i[0]&&(n=!n)}return n}var ad=(e,t,n,r)=>nd(e,t,n)*nd(e,t,r)<-1e-10&&nd(n,r,e)*nd(n,r,t)<-1e-10;function od(e,t){if(!Array.isArray(e)||e.length<3||e.length>256||e.some(e=>!Array.isArray(e)||e.length!==2||!e.every(Number.isFinite)||e[0]<0||e[1]<0||e[0]>t.width||e[1]>t.height))throw Error(`Invalid source ownership polygon`);let n=0;for(let t=0;t<e.length;t++){let r=e[t],i=e[(t+1)%e.length];n+=r[0]*i[1]-r[1]*i[0];for(let n=t+1;n<e.length;n++){let a=e[n],o=e[(n+1)%e.length];if(r[0]===a[0]&&r[1]===a[1])throw Error(`Duplicate source ownership vertex`);if(!(n===t+1||t===0&&n===e.length-1)&&(ad(r,i,a,o)||rd(a,r,i)||rd(o,r,i)||rd(r,a,o)||rd(i,a,o)))throw Error(`Self-intersecting source ownership polygon`)}}if(Math.abs(n)<1e-6)throw Error(`Degenerate source ownership polygon`)}function sd(e,t){return e.every((n,r)=>{let i=e[(r+1)%e.length];return id(n,t)&&id([(n[0]+i[0])/2,(n[1]+i[1])/2],t)&&!t.some((e,r)=>ad(n,i,e,t[(r+1)%t.length]))})}function cd(e,t){let n=new Map(e.map(e=>[e.id,e]));for(let r of e){let e=r.ownership;if(!e)continue;if(!r.parent||!Array.isArray(e.subtractFrom)||!e.subtractFrom.length||new Set(e.subtractFrom).size!==e.subtractFrom.length||e.subtractFrom.includes(r.id)||!Array.isArray(e.bodyRevealPolygons))throw Error(`Source ownership requires an explicit child, targets and body domains`);let i=r.parent,a=new Set([r.id]);for(;i;){if(a.has(i)||!n.has(i))throw Error(`Invalid source ownership ancestry`);if(a.add(i),!e.subtractFrom.includes(i))throw Error(`Source ownership ${r.id} must subtract ancestor ${i}`);i=n.get(i).parent}let o=e.footprintPolygons??[r.sourcePolygon];if(!o.length||o.length>32||e.bodyRevealPolygons.length>32)throw Error(`Source ownership polygon budget exceeded`);for(let e of o)if(od(e,t),!sd(e,r.sourcePolygon))throw Error(`Source ownership footprint must fit original moving pixels`);for(let n of e.bodyRevealPolygons)if(od(n,t),!o.some(e=>sd(n,e)))throw Error(`Body reveal must fit one original ownership footprint`)}}function ld(e){if(!(e.object instanceof Or)||!e.face)return;let t=e.object,n=t.geometry,r=n.getAttribute(`calibratedUvQ`),i=n.getAttribute(`position`);if(!r)return;let a=e.face,o=wn.getBarycoord(t.worldToLocal(e.point.clone()),new J().fromBufferAttribute(i,a.a),new J().fromBufferAttribute(i,a.b),new J().fromBufferAttribute(i,a.c),new J);if(!o)return;let s=new J().fromBufferAttribute(r,a.a).multiplyScalar(o.x).addScaledVector(new J().fromBufferAttribute(r,a.b),o.y).addScaledVector(new J().fromBufferAttribute(r,a.c),o.z);return new q(s.x/s.z,s.y/s.z)}var ud=e=>Number.isInteger(e)?`${e}.0`:String(e);function dd(e,t,n,r){let i=e.material,a=i.onBeforeCompile,o=i.customProgramCacheKey.bind(i),s=e.raycast,c=t.map((e,t)=>{let n=Math.min(...e.map(e=>e[0]))-1e-6,r=Math.max(...e.map(e=>e[0]))+1e-6,i=Math.min(...e.map(e=>e[1]))-1e-6,a=Math.max(...e.map(e=>e[1]))+1e-6;return`bool ownershipRing${t}(vec2 p){if(p.x<${ud(n)}||p.x>${ud(r)}||p.y<${ud(i)}||p.y>${ud(a)})return false;bool inside=false;\n`+e.map((t,n)=>{let r=e[(n+1)%e.length],i=Math.fround(t[1])===Math.fround(r[1])?``:`if((a.y>p.y)!=(b.y>p.y)){if(p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)inside=!inside;}`;return`{vec2 a=vec2(${ud(t[0])},${ud(t[1])}),b=vec2(${ud(r[0])},${ud(r[1])});float cr=(b.x-a.x)*(p.y-a.y)-(b.y-a.y)*(p.x-a.x);if(abs(cr)<=0.00001&&all(greaterThanEqual(p,min(a,b)-vec2(0.000001)))&&all(lessThanEqual(p,max(a,b)+vec2(0.000001))))return true;${i}}`}).join(`
`)+`
return inside;}`}).join(`
`);i.onBeforeCompile=function(e,i){a.call(this,e,i),e.uniforms.sourceOwnershipEnabled=r,e.fragmentShader=`uniform bool sourceOwnershipEnabled;
`+c+`
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <alphatest_fragment>`,`vec2 ownershipUV=vCalibratedUvQ.xy/vCalibratedUvQ.z;vec2 ownershipPixel=vec2(ownershipUV.x*${ud(n.width)},(1.0-ownershipUV.y)*${ud(n.height)});if(sourceOwnershipEnabled&&(${t.map((e,t)=>`ownershipRing${t}(ownershipPixel)`).join(`||`)}))discard;\n#include <alphatest_fragment>`)},i.customProgramCacheKey=()=>o()+`-source-ownership-v2-`+JSON.stringify(t)+`-${n.width}-${n.height}`;let l=e=>{if(!r.value)return!1;let i=ld(e);return!!(i&&t.some(e=>id([i.x*n.width,(1-i.y)*n.height],e)))};e.raycast=function(e,t){let n=t.length;s.call(this,e,t);for(let e=t.length-1;e>=n;e--)t[e].object===this&&l(t[e])&&t.splice(e,1)};let u=Yl(e,e=>{if(l(e))return 0;let t=i.opacity;if(i.map){if(!e.uv)return;let n=eu(i.map,e.uv);if(n===void 0)return;t*=n}return t<i.alphaTest?0:t});return()=>{u(),e.raycast=s}}var fd=(e,t)=>Array.isArray(e)&&e.length===t&&e.every(Number.isFinite);function pd(e,t,n={}){if(!e||e.schemaVersion!==1||e.review?.productionReady!==!1)throw Error(`Reference painting requires an explicit candidate`);e=structuredClone(e);let r=!!n.isolation;if(n.isolation){let t=n.isolation.rootLayerIds,r=new Map(e.layers.map(e=>[e.id,e]));if(!t.length||new Set(t).size!==t.length||t.some(e=>!r.has(e)||r.get(e).parent))throw Error(`Isolation requires existing unique root layers`);let i=new Set(t);for(let t=0;t<e.layers.length;t++)for(let t of e.layers)t.parent&&i.has(t.parent)&&i.add(t.id);e.layers=e.layers.filter(e=>i.has(e.id)),e.eyes=e.eyes?.filter(e=>e.parent&&i.has(e.parent)),delete e.uiRegions,delete e.overscan,delete e.observation}let{image:i,camera:a}=e;if(!i||![i.width,i.height].every(e=>Number.isSafeInteger(e)&&e>0)||!a||!fd(a.position,3)||!fd(a.target,3)||!Number.isFinite(a.fov)||a.fov<=0||a.fov>=180)throw Error(`Invalid reference painting camera/image`);let o=new fa(a.fov,i.width/i.height,.1,260);if(o.position.set(...a.position),o.lookAt(new J(...a.target)),o.updateMatrixWorld(!0),new J(...a.position).distanceTo(new J(...a.target))<1e-8)throw Error(`Degenerate reference painting camera`);if(a.position[0]!==0||a.position[1]!==0||a.target.some(e=>e!==0))throw Error(`Reference motion currently requires the authored frontal camera`);let s=e.observation;if(s&&(!s||s.mode!==`off-axis`||!fd(s.travel,2)||s.travel.some(e=>e<0||e>2)||s.anchorDepth!==-10))throw Error(`Off-axis observation requires bounded metre travel and original background depth -10`);let c=t[e.originalTextureId],l=e.revealTextureId?t[e.revealTextureId]:void 0;if(!c?.texture?.isTexture||c.width!==i.width||c.height!==i.height)throw Error(`Reference texture must retain full native image dimensions`);if(e.revealTextureId&&!l?.texture?.isTexture)throw Error(`Missing reference reveal texture`);if(!Array.isArray(e.layers))throw Error(`Missing original painting ownership layers`);cd(e.layers,i);let u=e=>!!(e.ownership&&e.ownership.bodyRevealPolygons.length===0),d=new Set,f=new Map,p=new Map;for(let n of e.layers){if(!n?.id||d.has(n.id)||!Number.isFinite(n.depth)||![`fixed`,`head`,`face`,`body`,`arm`,`hand`,`leg`,`coat`,`strap`,`hair`,`foreground`].includes(n.role))throw Error(`Invalid reference painting layer`);if(d.add(n.id),n.sourceTextureId){if(n.motion||n.ownership||![`fixed`,`foreground`].includes(n.role))throw Error(`Independent source texture requires a static layer`);let r=t[n.sourceTextureId];if(!r?.texture?.isTexture||r.width!==i.width||r.height!==i.height)throw Error(`Independent static source must retain full native dimensions`);p.set(n.id,qu(i,r,n.sourcePolygon,e.revealRegistrations?.[n.sourceTextureId]))}let r=u(n)?void 0:n.revealTextureId??e.revealTextureId;if(r){let a=t[r];if(!a?.texture?.isTexture)throw Error(`Invalid local reveal texture`);f.set(n.id,qu(i,a,n.sourcePolygon,n.revealRegistration??e.revealRegistrations?.[r]))}else if(n.revealRegistration&&!u(n))throw Error(`Reveal registration without a reveal texture`);if(n.ownership){if(!n.motion||n.motion.interiorCloth)throw Error(`Source ownership requires exterior local motion`);if(!u(n)&&(!r||r===e.originalTextureId||t[r]?.texture===c.texture))throw Error(`Body ownership reveal requires independent repair artwork`)}if(n.frameAnchors){let e=n.frameAnchors,t=Object.keys(e);if(n.role!==`foreground`||n.parent||n.motion||!t.length||t.some(e=>![`left`,`right`,`bottom`].includes(e)))throw Error(`Frame anchors require a static root foreground`);for(let r of t){let t=e[r],a=r===`bottom`?i.height:i.width;if(!Number.isFinite(t)||t<=0||t>a/2||!n.sourcePolygon.some(e=>Math.abs(r===`left`?e[0]:r===`right`?e[0]-i.width:e[1]-i.height)<.001))throw Error(`Frame anchor must name an actual clipped image edge and bounded pixel band`)}}if(n.motion){let e=n.motion;if([`fixed`,`head`,`face`].includes(n.role)||![`sway`,`breath`,`hinge`].includes(e.kind)||!fd(e.root,2)||!fd(e.tip,2)||!fd(e.amplitudePixels,2)||![e.frequencyHz,e.phase??0].every(Number.isFinite)||e.amplitudePixels.some(e=>Math.abs(e)>8)||e.frequencyHz<=0||e.frequencyHz>2||Math.hypot(e.tip[0]-e.root[0],e.tip[1]-e.root[1])<1||e.anchors?.some(e=>!fd(e.point,2)||!Number.isFinite(e.radius)||e.radius<8))throw Error(`Invalid constrained local painting motion`)}if(n.motion?.freeEnd&&!u(n)&&(!n.revealTextureId||n.revealTextureId===e.originalTextureId||t[n.revealTextureId]?.texture===c.texture))throw Error(`Repaired free end requires an explicit independent reveal texture`)}let m=e.layers.filter(t=>t.motion&&!t.motion.interiorCloth&&!u(t)&&(t.revealTextureId??e.revealTextureId)===e.originalTextureId),h=new Set(m.map(e=>e.id)),g=e=>!!(e.motion&&(u(e)||e.motion.interiorCloth||e.revealTextureId||l)&&!h.has(e.id)),_=e=>!!(e.revealTextureId||l||u(e)||r&&!e.motion);for(let t of e.layers){let n=t.parent,r=new Set([t.id]);for(;n;){if(!d.has(n)||r.has(n))throw Error(`Invalid reference layer ancestry`);r.add(n);let i=e.layers.find(e=>e.id===n);if(t.sourceTextureId&&i.motion)throw Error(`Independent static source requires stationary ancestors`);if(!t.supportPlane&&!i.supportPlane&&t.depth<=i.depth+.002)throw Error(`Child must sit in front of parent reveal plane`);n=i.parent}}let v=new Map(e.layers.filter(g).map(e=>{let t=yu({motion:e.motion,role:e.role,id:e.id,sourcePolygon:e.sourcePolygon});return[e.motion,Cu(t)]})),y=new en;y.name=`StationOriginalReferencePainting`;let b=(e.uiRegions??[]).map(e=>{if(!Array.isArray(e)||e.length<3||e.some(e=>!fd(e,2)||e[0]<0||e[0]>i.width||e[1]<0||e[1]>i.height))throw Error(`Invalid original UI ownership region`);return{left:Math.max(0,Math.min(...e.map(e=>e[0]))-24),right:Math.min(i.width,Math.max(...e.map(e=>e[0]))+24),top:Math.max(0,Math.min(...e.map(e=>e[1]))-24),bottom:Math.min(i.height,Math.max(...e.map(e=>e[1]))+24),feather:180}}),x=[`head`,`face`,`body`,`arm`,`hand`,`leg`,`coat`,`strap`,`hair`],S=new Set(e.layers.filter(t=>!t.parent&&!t.motion&&[`fixed`,`foreground`].includes(t.role)&&!e.layers.some(n=>{if(!x.includes(n.role))return!1;let r=n.parent;for(;r;){if(r===t.id)return!0;r=e.layers.find(e=>e.id===r)?.parent}return!1})).map(e=>e.id)),C=new Set,w=[],T=[],E=[],D={},O={},k=[[0,0],[i.width,0],[i.width,i.height],[0,i.height]],A={normal:[0,0,1],point:[0,0,-10]},j=e=>e.supportPlane??{normal:[0,0,1],point:[0,0,e.depth]},M=e=>{let t=new J(...e.normal).normalize(),n=new J(...e.point);return t.dot(new J(...a.position).sub(n))<0&&t.negate(),{normal:e.normal,point:n.addScaledVector(t,.001).toArray()}},N=e=>{let t=new J(...e.normal),n=t.dot(new J(...e.point).sub(o.position)),r=Math.tan(a.fov*Math.PI/360);return(e,s,c)=>{let l=(e/i.width*2-1)*r*o.aspect,u=(1-s/i.height*2)*r,d=n/(t.x*l+t.y*u-t.z);return c.set(l*d,u*d,a.position[2]-d)}},P=(e,t,n,r,a={normal:[0,0,1],point:[0,0,n]})=>{let s=hu({id:e,camera:o,image:i,polygon:t,supportPlane:a,texture:r});return w.push(s),y.add(s.mesh),s},F=[],I={value:!1},L=[],R=new Set,ee=new Map,te={},ne,re,ie;try{if(e.overscan){let n=e.overscan,r=t[n.textureId];if(!r?.texture?.isTexture||!fd(n.origin,2)||!Number.isFinite(n.scale)||n.scale<=0||n.origin[0]>0||n.origin[1]>0||n.origin[0]+r.width*n.scale<i.width||n.origin[1]+r.height*n.scale<i.height)throw Error(`Overscan backplate must explicitly cover the original frame`);let a=o.clone();a.setViewOffset(i.width,i.height,n.origin[0],n.origin[1],r.width*n.scale,r.height*n.scale);let s=hu({id:`reference-explicit-overscan`,camera:a,image:{width:r.width,height:r.height},polygon:[[0,0],[r.width,0],[r.width,r.height],[0,r.height]],supportPlane:{normal:[0,0,1],point:[0,0,-10.002]},texture:r.texture});w.push(s),y.add(s.mesh),ie=[n.origin[0],n.origin[1],n.origin[0]+r.width*n.scale,n.origin[1]+r.height*n.scale]}r||(ne=P(`reference-original-background`,k,-10,c.texture),re=P(`reference-static-original`,k,-10,c.texture));let n=(e,t,n,r=j(t),o=!1)=>{let s=o?t.frameAnchors:void 0,c=o&&S.has(t.id)?b.filter(e=>Math.max(...t.sourcePolygon.map(e=>e[0]))>=e.left-e.feather&&Math.min(...t.sourcePolygon.map(e=>e[0]))<=e.right+e.feather&&Math.max(...t.sourcePolygon.map(e=>e[1]))>=e.top-e.feather&&Math.min(...t.sourcePolygon.map(e=>e[1]))<=e.bottom+e.feather):[];if(!n.length&&!s&&!c.length)return;c.length&&C.add(t.id);let l=e.geometry,u=Array.from(l.index.array),d=l.getAttribute(`uv`),f=n.find(e=>e.worldReadability),p=f?v.get(f):void 0,m=u.reduce((e,t,n)=>(n%3==0&&e.push(u.slice(n,n+3)),e),[]),h=[],g=[],_=[],y=N(r),x=new J,w=(e,t,n)=>{if(y(e,t,n),s||c.length){let r=1;for(let[n,a]of Object.entries(s??{})){let o=n===`left`?e:n===`right`?i.width-e:i.height-t,s=Math.max(0,Math.min(1,o/a));r*=s*s*(3-2*s)}for(let n of c){let i=Math.hypot(Math.max(n.left-e,0,e-n.right),Math.max(n.top-t,0,t-n.bottom)),a=Math.min(1,i/n.feather);r*=a*a*(3-2*a)}let o=-9.997+(n.z+9.997)*r,l=(a.position[2]-o)/(a.position[2]-n.z);n.set(n.x*l,n.y*l,o)}return n},k=(e,t,n,r)=>{if(r===0){for(let r of[e,t,n]){w(r[0],r[1],x);let e=r[0]/i.width,t=1-r[1]/i.height,n=a.position[2]-x.z;h.push(...x.toArray()),g.push(e,t),_.push(e*n,t*n,n)}return}let o=(e,t)=>e.map((e,n)=>(e+t[n])/2),s=o(e,t),c=o(t,n),l=o(n,e);k(e,s,l,r-1),k(s,t,c,r-1),k(l,c,n,r-1),k(s,c,l,r-1)},A=n.find(e=>e.interiorCloth)?.interiorCloth?.meshSpacingPixels??Math.min(24,...n.flatMap(e=>(e.anchors??[]).map(e=>e.radius)),...Object.values(s??{}).map(e=>e/4)),M=ju(Array.from({length:d.count},(e,t)=>[d.getX(t)*i.width,(1-d.getY(t))*i.height]),m,A,p),P=M.weights,F=[];if(P)for(let e of M.triangles)for(let t of e)F.push(P[t]);for(let e of M.triangles)k(M.points[e[0]],M.points[e[1]],M.points[e[2]],0);let I=new ir;if(I.setAttribute(`position`,new Kn(h,3)),I.setAttribute(`uv`,new Kn(g,2)),I.setAttribute(`calibratedUvQ`,new Kn(_,3)),I.computeBoundingSphere(),e.mesh.geometry=I,E.push(I),e.mesh.raycast=function(e,t){let n=t.length;Or.prototype.raycast.call(this,e,t);let r=new Et().copy(this.matrixWorld).invert(),i=I.getAttribute(`position`),a=I.getAttribute(`calibratedUvQ`);for(let e=n;e<t.length;e++){let n=t[e];if(n.object!==this||!n.face)continue;let{a:o,b:s,c}=n.face,l=wn.getBarycoord(n.point.clone().applyMatrix4(r),new J().fromBufferAttribute(i,o),new J().fromBufferAttribute(i,s),new J().fromBufferAttribute(i,c),new J);if(!l)continue;let u=new J().fromBufferAttribute(a,o).multiplyScalar(l.x).addScaledVector(new J().fromBufferAttribute(a,s),l.y).addScaledVector(new J().fromBufferAttribute(a,c),l.z);n.uv=new q(u.x/u.z,u.y/u.z)}},n.length){let r=new Float32Array(g.flatMap((e,t)=>t%2==0?[g[t]*i.width,(1-g[t+1])*i.height]:[])),a=new Map(n.filter(e=>e.interiorCloth).map(e=>[e,Mu(M,r,v.get(e))])),o=new Map([...a].map(([e,t])=>[e,t.weights]));if(p){for(let e of n.filter(e=>e!==f))if(!e.interiorCloth||!a.get(e).allZero)throw Error(`Readable fragment requires fixed ancestor ownership`);let e={x:0,y:0},i=p.plan,o=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),s=1;for(let t=0;t<r.length;t+=6){let n=[[r[t],r[t+1]],[r[t+2],r[t+3]],[r[t+4],r[t+5]]],a=o(...n);if(Math.abs(a)<1e-10)throw Error(`Degenerate readable motion triangle`);for(let r of[-1,1]){let c={...p,offsetX:i.amplitudeX*r,offsetY:i.amplitudeY*r},l=n.map((n,r)=>(Tu(c,n[0],n[1],n[0],n[1],1,e,F[t/2+r]),[e.x,e.y]));s=Math.min(s,o(...l)/a)}}if(s<.25)throw Error(`Readable motion ${t.id} would fold a triangle (${s})`);O[t.id]=s}if(f&&o.set(f,Float32Array.from(F)),t.motion?.interiorCloth&&n.includes(t.motion)){if(n.length!==1)throw Error(`Interior cloth requires a stationary ancestor`);let e=v.get(t.motion).plan,i=o.get(t.motion),a=1,s=(e,t,n,r)=>e*r-t*n;for(let t=0;t<r.length/2;t+=3){let n=r[(t+1)*2]-r[t*2],o=r[(t+1)*2+1]-r[t*2+1],c=r[(t+2)*2]-r[t*2],l=r[(t+2)*2+1]-r[t*2+1],u=s(n,o,c,l),d=i[t+1]-i[t],f=i[t+2]-i[t],p=s(e.amplitudeX*d,e.amplitudeY*d,c,l)+s(n,o,e.amplitudeX*f,e.amplitudeY*f);if(Math.abs(u)<1e-10)throw Error(`Degenerate interior cloth triangle`);a=Math.min(a,1-Math.abs(p/u))}if(a<.25)throw Error(`Interior cloth ${t.id} would fold a triangle (${a})`);D[t.id]=a}T.push({spec:t,mesh:e.mesh,positions:new Float32Array(h),pixels:r,project:w,motions:n,clothWeights:o})}};e.layers.forEach((i,a)=>{let o=[],s=i.parent;for(;s;){let t=e.layers.find(e=>e.id===s);o.unshift(t),s=t.parent}let u=[`fixed`,`head`,`face`].includes(i.role)?[]:o.flatMap(e=>g(e)?[e.motion]:[]),d=i.revealTextureId?t[i.revealTextureId]:l;if(d&&(!r||o.length))for(let[e,t]of(i.ownership?.bodyRevealPolygons??[i.sourcePolygon]).entries()){let r=o.length?j(o[o.length-1]):A,s=M(r),c=`${i.id}-reveal${e?`-${e}`:``}`,l=P(c,t,0,d.texture,s);l.mesh.renderOrder=20+a*2,n(l,i,u,s),Ju(l.mesh,f.get(i.id)),ee.set(c,i.id),i.ownership&&R.add(c),F.push({id:i.id,parent:i.parent??`reference-original-background`,supportPlane:s})}let m=P(i.id,i.sourcePolygon,i.depth,i.sourceTextureId?t[i.sourceTextureId].texture:c.texture,j(i));if(m.mesh.renderOrder=21+a*2,i.sourceTextureId&&Ju(m.mesh,p.get(i.id)),o.length){let e=N(j(o[o.length-1])),t=N(j(i)),n=new J,r=new J;for(let a of i.sourcePolygon)if(e(a[0],a[1],n),t(a[0],a[1],r),!n.toArray().every(Number.isFinite)||!r.toArray().every(Number.isFinite)||r.z<=n.z+.001)throw Error(`Child support crosses or sits behind parent support`)}n(m,i,[...u,...g(i)?[i.motion]:[]],j(i),!0)});let s=new Map;for(let t of e.layers){if(!t.ownership)continue;let n=t.ownership,r=n.footprintPolygons??[t.sourcePolygon],i=new Set;for(let r of n.subtractFrom){let n=w.find(e=>e.mesh.name===r);if(!n)throw Error(`Missing source ownership target ${r}`);let a=e.layers.find(e=>e.id===r);if(a&&(a.depth>t.depth||a.depth===t.depth&&e.layers.indexOf(a)>=e.layers.indexOf(t)))throw Error(`Ownership cannot subtract a front occluder`);if(i.add(n.mesh),a)for(let e of w)ee.get(e.mesh.name)===r&&e.material.map===c.texture&&i.add(e.mesh)}ne&&i.add(ne.mesh),te[t.id]=[...i].map(e=>e.name);for(let e of i)s.set(e,[...s.get(e)??[],...r.map(e=>e.map(e=>[e[0],e[1]]))])}for(let[e,t]of s)L.push(dd(e,t,i,I));for(let[t,n]of(e.uiRegions??[]).entries()){let e=P(`reference-ui-${t}`,n,-10,c.texture),r=e.mesh.material,i=r.onBeforeCompile;r.transparent=!0,r.depthTest=!1,r.depthWrite=!1,r.alphaToCoverage=!1,r.alphaTest=.001,r.onBeforeCompile=(e,t)=>{i(e,t),e.fragmentShader=e.fragmentShader.replace(`#include <alphatest_fragment>`,`diffuseColor.a *= smoothstep(0.10, 0.55, min(diffuseColor.r, min(diffuseColor.g, diffuseColor.b)));
#include <alphatest_fragment>`)},r.customProgramCacheKey=()=>`station-reference-original-lettering-v1`,e.mesh.renderOrder=1e5}}catch(e){throw L.forEach(e=>e()),w.forEach(e=>e.dispose()),E.forEach(e=>e.dispose()),e}let z;try{e.eyes?.length&&(z=ed({image:i,camera:a,originalTextureId:e.originalTextureId,revealRegistrations:e.revealRegistrations,eyes:e.eyes},t),y.add(z.root))}catch(e){throw L.forEach(e=>e()),w.forEach(e=>e.dispose()),E.forEach(e=>e.dispose()),e}let ae=new Set([`head`,`face`,`body`,`arm`,`hand`,`leg`,`coat`,`strap`,`hair`]),oe=new Set,se=[];for(let t of e.layers){let n=t,r=!1;for(;n;)ae.has(n.role)&&(r=!0),n=n.parent?e.layers.find(e=>e.id===n.parent):void 0;r&&oe.add(t.id)}for(let t of e.layers)oe.has(t.id)&&(!t.parent||!oe.has(t.parent))&&se.push(t);let ce=new Set(se.map(e=>`${e.id}-reveal`)),le=new Set([...oe,...[...oe].map(e=>`${e}-reveal`).filter(e=>!ce.has(e))]);for(let[e,t]of ee)oe.has(t)&&!ce.has(e)&&le.add(e);let ue={value:1};for(let e of w)if(le.has(e.mesh.name)){let t=e.material,n=t.onBeforeCompile,r=t.customProgramCacheKey.bind(t);t.onBeforeCompile=(e,t)=>{n(e,t),e.uniforms.referenceActorCoverage=ue,e.fragmentShader=`uniform float referenceActorCoverage;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <alphatest_fragment>`,`if(referenceActorCoverage<1. && fract(52.9829189*fract(dot(floor(gl_FragCoord.xy),vec2(.06711056,.00583715))))>=referenceActorCoverage)discard;
#include <alphatest_fragment>`)},t.customProgramCacheKey=()=>r()+`-reference-actor-coverage-v1`}let de=1,fe=!1,pe=r?[]:se.filter(e=>!f.has(e.id)).map(e=>e.id),me=se.length>0&&!pe.length,he={requestedOpacity:1,appliedOpacity:1,mode:`shared-pixel-coverage`,rootIds:se.map(e=>e.id),missingRootReveals:pe,blockedReason:null,visualApproved:!1,limitations:[`Deterministic framebuffer-pixel coverage candidate; not an approved smooth alpha composite.`,`Declared root reveal artwork must erase the complete original actor footprint; availability and numeric registration do not certify repair quality.`]},ge=!1,_e=0,ve={productionReady:!1,mode:`original-static`,originalTextureId:e.originalTextureId,geometryVertexCount:w.reduce((e,t)=>e+t.mesh.geometry.getAttribute(`position`).count,0),layerCount:e.layers.length,animatedHairCount:e.layers.filter(e=>e.role===`hair`&&g(e)).length,animatedBodyCount:e.layers.filter(e=>e.role!==`hair`&&g(e)).length,revealAvailable:!!l,revealPlanes:F,headBodyMotion:e.layers.some(e=>e.role!==`hair`&&g(e)),missingRevealLayers:e.layers.filter(e=>e.motion&&!u(e)&&!e.revealTextureId&&!l).map(e=>e.id),localMotionGuard:{reason:`local-erasure-unavailable`,suppressedLayerIds:[...h],policy:`Original-image repair omits only that layer's local deformation; eligible ancestor motion and authored depth are retained.`,visualApproved:!1},globalTint:!1,gazeApplied:!1,eyes:z?.diagnostics,nestedFallbackRevealLayers:e.layers.filter(e=>e.parent&&!e.revealTextureId).map(e=>e.id),overscanAvailable:!!ie,observation:s?{mode:s.mode,travel:[...s.travel],anchorDepth:s.anchorDepth}:null,look:{requested:[0,0],applied:[0,0],limitRatio:0,limitedReason:`no-explicit-overscan`}},ye=()=>{for(let e of T){let t=e.mesh.geometry.getAttribute(`position`);t.array.set(e.positions),t.needsUpdate=!0}},be=()=>{let e=me?de:1,t=e<1;if(ue.value=e,z?.setActorOpacity(e),Object.assign(he,{requestedOpacity:de,appliedOpacity:e,blockedReason:de<1&&!me?se.length?`missing-root-reveal`:`missing-character-ownership`:null}),r){for(let t of w)t.mesh.visible=(!le.has(t.mesh.name)||e>0)&&(!R.has(t.mesh.name)||I.value);return}re.mesh.visible=!fe&&!t;for(let n of w)n!==re&&(n.mesh.visible=fe,t&&(n===ne||ce.has(n.mesh.name)?n.mesh.visible=!0:le.has(n.mesh.name)&&(n.mesh.visible=e>0)),R.has(n.mesh.name)&&!I.value&&(n.mesh.visible=!1))},xe=0,Se=0,Ce=.35,we=0,Te={x:0,y:0},Ee=(t,n)=>{if(ge)throw Error(`Reference painting disposed`);if(!Number.isFinite(t)||t<0)throw Error(`Invalid reference painting elapsed time`);z?.update(t,{target:n.gaze??[0,0],active:n.active&&!n.neutral,hidden:n.hidden,reducedMotion:n.reducedMotion,smoothReturn:!n.neutral}),ve.gazeApplied=z?.root.visible??!1;let r=e.layers.length>0&&e.layers.every(_);if(n.hidden||n.reducedMotion||n.neutral||!r){xe=Se=we=0,Ce=.35,fe=!1,I.value=!1,be(),ve.mode=`original-static`,ye();return}let i=Math.min(t,.05),a=+!!n.active;a!==we&&(Se=xe,we=a,Ce=0),Ce=Math.min(.35,Ce+i);let o=Ce/.35,s=o*o*(3-2*o);if(xe=Se+(we-Se)*s,_e+=i,fe=!0,I.value=xe>0,be(),ve.mode=xe>0&&T.some(e=>e.motions.length)?`original-local-motion`:`original-depth-layers`,xe===0){ye();return}for(let e of v.values())wu(e.plan,_e,e);let c=new J;for(let e of T){let t=e.mesh.geometry.getAttribute(`position`);for(let n=0;n<t.count;n++){let r=e.pixels[n*2],i=e.pixels[n*2+1],a=r,o=i;for(let t of e.motions)Tu(v.get(t),r,i,a,o,xe,Te,e.clothWeights.get(t)?.[n]),r=Te.x,i=Te.y;r===a&&i===o?t.setXYZ(n,e.positions[n*3],e.positions[n*3+1],e.positions[n*3+2]):(e.project(r,i,c),t.setXYZ(n,c.x,c.y,c.z))}t.needsUpdate=!0,e.mesh.geometry.computeBoundingSphere()}},De=o.clone(),Oe=new Na,B=new cr(new J(0,0,1),10),ke=new J,Ae=0,je=0,V=td({frequency:9,maxSpeed:2.5,maxAcceleration:12}),Me=(e,t)=>{let n=e*.35,r=t*.25,i=a.position[2],o=Math.tan(2*Math.PI/180)*i;return{position:[a.position[0]+n,a.position[1]+r,a.position[2]],target:[a.target[0]+n+e*o,a.target[1]+r+t*o,a.target[2]]}},H=(t,n,r,c=a.fov,l=i.height)=>{if(ge)throw Error(`Reference painting disposed`);if(!Number.isFinite(t)||t<0||!fd(n.target,2)||!Number.isFinite(r)||r<=0||!Number.isFinite(c)||c<=0||c>=180||!Number.isFinite(l)||l<=0)throw Error(`Invalid reference observation input`);let u=n.active&&!n.hidden&&!n.reducedMotion,d=u?Math.max(-1,Math.min(1,n.target[0])):0,f=u?Math.max(-1,Math.min(1,n.target[1])):0,p=V.update(t,{x:d,y:f},{hold:n.hold,hidden:n.hidden,reducedMotion:n.reducedMotion});if(Ae=p.x,je=p.y,s){let t=e.layers.length>0&&e.layers.every(_),n=+!!t,r=Ae*s.travel[0]*n,i=je*s.travel[1]*n,o=l/(2*Math.tan(c*Math.PI/360)*(a.position[2]-s.anchorDepth));return Object.assign(ve.look,{requested:[d,f],applied:[Ae*n,je*n],limitRatio:n,limitedReason:t?null:`missing-depth-ownership`}),{position:[a.position[0]+r,a.position[1]+i,a.position[2]],target:[a.target[0]+r,a.target[1]+i,a.target[2]],viewOffsetX:r===0?0:-r*o,viewOffsetY:i===0?0:i*o}}let m=e=>{if(!ie)return e===0;let t=Me(Ae*e,je*e);De.aspect=r,De.fov=c,De.position.fromArray(t.position),De.lookAt(new J(...t.target)),De.updateProjectionMatrix(),De.updateMatrixWorld(!0);for(let e of[-1,1])for(let t of[-1,1]){if(Oe.setFromCamera(new q(e,t),De),!Oe.ray.intersectPlane(B,ke))return!1;let n=ke.clone().project(o),r=(n.x+1)*i.width/2,a=(1-n.y)*i.height/2;if(r<ie[0]+2||a<ie[1]+2||r>ie[2]-2||a>ie[3]-2)return!1}return!0},h=ie&&e.layers.length&&e.layers.every(_)?1:0;if(h&&!m(1)){let e=0,t=1;for(let n=0;n<12;n++){let n=(e+t)/2;m(n)?e=n:t=n}h=e}return Object.assign(ve.look,{requested:[d,f],applied:[Ae*h,je*h],limitRatio:h,limitedReason:ie?e.layers.length?e.layers.some(e=>!_(e))?`missing-layer-reveal`:h<.999?`painted-edge-coverage`:null:`no-depth-layers`:`no-explicit-overscan`}),Me(Ae*h,je*h)},Ne=Object.assign(ve,{sourceOwnership:{layerIds:Object.keys(te),targets:te,enabled:I,bodyRepairMeshNames:[...R],coordinates:`native-reference-source`,visualApproved:!1},interiorCloth:{layerIds:Object.keys(D),minimumTriangleAreaRatios:D,originalUsedAsErasure:!1,boundary:`actual-polygon-fixed-band`,refinement:`shared-edge-midpoints`,visualApproved:!1},isolation:r?{rootLayerIds:[...n.isolation.rootLayerIds],backgroundCreated:!1,rootRevealCreated:!1,sourceAlphaCutout:!1,visualApproved:!1}:null,actorFade:he,uiAnchors:{mode:`original-environment-depth-pinning`,layerIds:[...C],guardPixels:24,featherPixels:180,depth:-9.997,anatomyAffected:!1,visualApproved:!1},revealRegistrations:Object.fromEntries([...f].map(([e,t])=>[e,t.diagnostics]))});return Ee(0,{active:!1,hidden:!1,reducedMotion:!1}),{root:y,reference:o,diagnostics:Object.assign(Ne,{readableMotion:{minimumTriangleAreaRatios:O,boundary:`unchanged-native-ring`,extrema:`both-signed-wind-drivers`,visualApproved:!1}}),update:Ee,sampleLook:H,setActorOpacity(e){if(ge)throw Error(`Reference painting disposed`);if(!Number.isFinite(e)||e<0||e>1)throw Error(`Invalid reference actor opacity`);de=e,be(),ve.gazeApplied=z?.root.visible??!1},compensateView(e,t,n){if(ge)throw Error(`Reference painting disposed`);if(!s)return;if(!fd(e,3)||!Number.isFinite(t)||t<=0||t>=180||!Number.isFinite(n)||n<=0)throw Error(`Invalid compensated view`);let r=n/(2*Math.tan(t*Math.PI/360)*(e[2]-s.anchorDepth)),i=e[0]-a.position[0],o=e[1]-a.position[1];return{viewOffsetX:i===0?0:-i*r,viewOffsetY:o===0?0:o*r}},projectFace(t,n){if(ge)throw Error(`Reference painting disposed`);if(!e.eyes?.length)return;y.updateWorldMatrix(!0,!1);let r=e.eyes.map(e=>y.localToWorld(N({normal:[0,0,1],point:[0,0,e.depth]})(e.neutralCenter[0],e.neutralCenter[1],new J)).project(t)),i=r.reduce((e,t)=>e+t.x,0)/r.length,a=r.reduce((e,t)=>e+t.y,0)/r.length,o=Math.hypot((r[0].x-r[1].x)*n.width/2,(r[0].y-r[1].y)*n.height/2);return{center:{x:n.left+(i+1)*n.width/2,y:n.top+(1-a)*n.height/2},radius:{x:Math.max(44,o*3.2),y:Math.max(44,o*2.7)}}},dispose(){ge||(ge=!0,z?.dispose(),L.forEach(e=>e()),w.forEach(e=>e.dispose()),E.forEach(e=>e.dispose()),y.removeFromParent())}}}function md(e,t,n,r={}){let i=r.residentRootId??`resident`,a=e.layers.find(e=>e.id===i);if(!a||a.parent||a.role!==`body`||a.supportPlane)throw Error(`World resident requires a simple original body root`);let o=r.supportLayerIds??[];for(let t of o){let n=e.layers.find(e=>e.id===t);if(!n||n.parent||n.motion||n.frameAnchors||![`fixed`,`foreground`].includes(n.role)||!/(bench|seat|stool|chair)/i.test(t))throw Error(`Support must be an explicitly declared static furniture root`)}let s=n.worldHeight??941,c=n.maxWidth??600,l=n.margin??12,u=n.depth??0;if(n.anchor.length!==2||!n.anchor.every(Number.isFinite)||![s,c].every(e=>Number.isFinite(e)&&e>0)||!Number.isFinite(l)||l<0||l*2>=c||!Number.isFinite(u)||n.pixelScale!==void 0&&(!Number.isFinite(n.pixelScale)||n.pixelScale<=0))throw Error(`Invalid resident world placement`);let d=structuredClone(e);for(let e of o){let t=d.layers.find(t=>t.id===e);if(t.supportPlane)throw Error(`Support plane requires explicit world re-calibration`);t.depth=a.depth-.02}let f=pd(d,t,{isolation:{rootLayerIds:[i,...o]}});try{let t=new Tn().setFromObject(f.root);if(t.isEmpty()||!t.min.toArray().concat(t.max.toArray()).every(Number.isFinite))throw Error(`Invalid resident geometry bounds`);let r=e.image.height/(2*Math.tan(e.camera.fov*Math.PI/360)*(e.camera.position[2]-a.depth)),d=new Set(f.root.children.map(e=>e.name)),p=0;for(let t of e.layers.filter(e=>d.has(e.id))){let n=0,r=t;for(;r;)r.motion&&(n+=Math.hypot(...r.motion.amplitudePixels)),r=r.parent?e.layers.find(e=>e.id===r.parent):void 0;p=Math.max(p,n)}let m=(e.camera.position[2]-t.min.z)/(e.camera.position[2]-a.depth),h=p*m/r,g=n.cameraZ??s/(2*Math.tan(38*Math.PI/360));if(!Number.isFinite(g)||g<=u)throw Error(`Invalid world camera depth`);let _=t.max.x-t.min.x+2*h,v=Math.max(0,t.max.z-a.depth),y=c-2*l,b=y*(g-u)/(_*g+y*v),x=n.pixelScale===void 0?Math.min(r,b):n.pixelScale*r;if(x>b+1e-9)throw Error(`Resident and motion exceed declared width envelope`);f.root.scale.setScalar(x),f.root.position.set(n.anchor[0]+l-(t.min.x-h)*x,s-n.anchor[1]-l-(t.max.y+h)*x,u-a.depth*x),f.root.updateMatrixWorld(!0);let S=new Tn().setFromObject(f.root),C=S.clone().expandByVector(new J(h*x,h*x,0));if(g<=C.max.z)throw Error(`Resident lies at or behind world camera`);let w=g/(g-Math.max(0,C.max.z)),T={productionReady:!1,sourceImage:{...e.image},residentRootId:i,supportLayerIds:[...o],supportCompleteness:`only-explicit-original-polygons-not-certified-complete-furniture`,sourceAlphaCutout:!1,sourcePixelRedrawn:!1,pixelScale:x/r,actualBounds:{min:S.min.toArray(),max:S.max.toArray()},worldEnvelope:{x:C.min.x,y:s-C.max.y,width:C.max.x-C.min.x,height:C.max.y-C.min.y},worstPerspectiveScale:w,motionEnvelopePixels:h*x,supportWorldDepth:u-.02*x,painting:f.diagnostics,limitations:[`Original opaque image is polygon-owned; boundary/background contamination needs native review.`,`Explicit support roots are re-projected immediately behind the resident as a 2.5D assembly.`,`Missing support pieces remain missing; no chair, stool or unseen back is generated.`]},E=!1;return{root:f.root,diagnostics:T,bounds(){if(E)throw Error(`World resident disposed`);return new Tn().setFromObject(f.root)},update(e,t){if(E)throw Error(`World resident disposed`);f.update(e,t)},setActorOpacity:f.setActorOpacity,projectFace:f.projectFace,dispose(){E||(E=!0,f.dispose())}}}catch(e){throw f.dispose(),e}}var hd=new Map;async function gd(e,t,n=()=>new Worker(new URL(``+new URL(`station-world-resident-worker-DzMjXK_M.js`,import.meta.url).href,``+import.meta.url),{type:`module`})){t.throwIfAborted();let r=JSON.stringify(e),i=hd.get(r);if(i&&ku(i))return;let a=n();try{let n=await new Promise((n,r)=>{let i=()=>r(t.reason??new DOMException(`Aborted`,`AbortError`)),o=e=>{t.removeEventListener(`abort`,i),e()};t.addEventListener(`abort`,i,{once:!0}),a.onmessage=({data:e})=>o(()=>e.error?r(Error(e.error)):n(e.entries)),a.onerror=e=>o(()=>r(Error(e.message||`Resident preparation worker failed`)));try{a.postMessage(e)}catch(e){o(()=>r(e))}});t.throwIfAborted(),Au(n),hd.set(r,n.map(([e])=>e)),hd.size>16&&hd.delete(hd.keys().next().value)}finally{a.onmessage=null,a.onerror=null,a.terminate()}}var _d=new Set([`entry`,`street`,`print`,`workshop`,`glass`,`cinema`]),vd=new Set([`print`,`glass`,`cinema`]);function yd(e){return vd.has(e)}function bd(e){if(!_d.has(e))throw Error(`Unknown world resident station: ${e}`);return`city/${e}-${yd(e)?`pose-v2`:`reference-v1`}/manifest.json`}var xd={width:1672,height:941},Sd=`2eef6903c151a6e46c326f9c5d80b0a5fbb08c7e477736d6842dd202791cac32`,Cd=[`glass-seat`],wd={original:`original.raw.png`,detailReveal:`detailReveal.raw.png`,eyesReveal:`eyesReveal.raw.png`};wd.original,{...xd},wd.detailReveal,{...xd},wd.eyesReveal,{...xd};var Td={detailReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[359,178],source:[359,178]},{reference:[289,353],source:[289,353]},{reference:[249,591],source:[249,591]},{reference:[542,495],source:[542,494]}],maxResidualPixels:1},eyesReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[367,180],source:[367,180]},{reference:[401,221],source:[401,221]},{reference:[450,204],source:[450,205]},{reference:[406,148],source:[406,148]}],maxResidualPixels:1}},Ed=[[347,107],[371,91],[408,86],[443,95],[466,121],[478,155],[482,191],[476,224],[458,251],[447,272],[451,304],[461,335],[469,393],[498,397],[520,406],[545,427],[555,451],[546,467],[565,473],[591,477],[608,490],[620,515],[619,540],[576,559],[521,565],[462,547],[437,534],[414,566],[395,590],[366,599],[345,604],[315,590],[282,590],[278,603],[270,613],[255,617],[247,614],[240,607],[230,605],[222,600],[218,588],[222,570],[210,579],[189,579],[176,567],[182,544],[185,523],[180,506],[178,480],[185,462],[185,446],[188,428],[196,409],[193,386],[204,374],[210,350],[225,326],[246,315],[271,316],[272,276],[279,251],[298,237],[325,232],[332,209],[337,184],[341,157]],Dd=[[345,139],[368,112],[410,92],[441,105],[464,136],[476,167],[470,214],[452,241],[429,250],[403,247],[376,237],[351,213],[343,183]],Od=[[361,161],[374,148],[401,143],[436,159],[459,180],[456,212],[432,236],[408,249],[392,242],[373,224],[359,202]],kd=[[241,552],[274,552],[277,564],[273,575],[282,583],[279,600],[271,612],[266,610],[266,596],[259,614],[253,615],[248,600],[245,613],[239,607],[235,592],[229,603],[223,596],[220,581],[227,570],[239,566]],Ad=[[504,449],[518,450],[533,462],[539,474],[553,479],[562,493],[559,512],[549,525],[544,526],[547,509],[540,520],[536,518],[540,501],[533,513],[528,512],[529,498],[522,505],[516,493],[512,480],[501,467]],jd=[[539,691],[568,683],[588,697],[600,722],[615,757],[642,784],[659,791],[668,808],[676,839],[679,863],[661,872],[562,873],[535,863],[521,850],[523,824],[528,801],[525,772],[514,744],[514,722]],Md=[[628,670],[671,660],[692,684],[685,701],[699,726],[720,750],[752,765],[774,773],[783,793],[790,823],[778,835],[696,842],[677,837],[669,812],[658,784],[642,758],[628,730],[617,706]],Nd=[[153,594],[218,590],[220,601],[231,608],[244,618],[257,618],[273,611],[282,591],[311,590],[312,619],[345,633],[395,633],[414,624],[426,650],[441,690],[458,730],[478,734],[479,793],[168,838],[152,832]],Pd=[[[273,252],[291,237],[310,242],[328,268],[339,311],[317,334],[270,319]],[[329,246],[358,242],[412,257],[438,274],[451,302],[466,352],[460,371],[444,389],[430,397],[339,399]],[[239,320],[271,317],[300,329],[322,355],[333,392],[239,390],[213,375],[221,345]]],Fd=[{id:`hair-left-rear`,root:[329,209],tip:[224,285],polygon:[[329,209],[333,212],[310,235],[289,249],[262,260],[240,271],[228,281],[224,285],[222,280],[232,268],[256,255],[285,245],[309,229]]},{id:`hair-left-outer-a`,root:[287,253],tip:[216,363],polygon:[[287,253],[290,259],[267,279],[253,300],[239,319],[231,340],[220,354],[220,361],[216,363],[207,354],[205,342],[211,328],[219,310],[234,291],[256,273]]},{id:`hair-left-outer-b`,root:[269,270],tip:[200,339],polygon:[[269,270],[272,274],[253,286],[233,300],[216,314],[207,328],[205,337],[200,339],[193,336],[191,329],[195,320],[203,311],[211,304],[214,298],[222,295],[241,283]]},{id:`hair-left-inner`,root:[277,280],tip:[238,334],polygon:[[277,280],[278,286],[265,303],[254,322],[250,334],[245,338],[238,334],[233,327],[232,319],[236,322],[241,330],[246,329],[250,315],[259,296]]},{id:`hair-chest-a`,root:[339,242],tip:[348,345],polygon:[[339,242],[346,250],[351,273],[357,299],[360,316],[356,332],[349,344],[344,346],[338,342],[340,338],[347,338],[352,328],[351,312],[345,291],[339,268]]},{id:`hair-chest-b`,root:[352,248],tip:[360,375],polygon:[[352,248],[361,258],[369,282],[380,307],[386,330],[385,348],[378,361],[368,371],[358,375],[348,374],[346,370],[357,370],[367,363],[374,350],[375,335],[369,315],[362,291],[357,271]]},{id:`hair-right-inner`,root:[429,254],tip:[447,393],polygon:[[429,254],[436,262],[443,287],[451,310],[459,336],[459,356],[455,377],[450,389],[442,395],[435,394],[439,388],[447,381],[451,366],[452,349],[448,328],[440,304],[434,283]]},{id:`hair-right-gold`,root:[449,258],tip:[475,391],polygon:[[449,258],[456,270],[461,294],[474,319],[487,340],[494,356],[494,368],[487,382],[477,393],[468,396],[457,397],[452,393],[463,389],[475,379],[482,366],[483,353],[477,340],[465,324],[457,305],[451,282]]},{id:`hair-right-outer`,root:[462,282],tip:[507,390],polygon:[[462,282],[468,294],[484,313],[501,334],[512,350],[515,365],[511,376],[501,381],[497,381],[501,375],[507,371],[509,360],[504,347],[493,333],[480,319],[470,308],[465,296]]}],Id=e=>e.reduce((t,n,r)=>t+n[0]*e[(r+1)%e.length][1]-n[1]*e[(r+1)%e.length][0],0)/2;function Ld(e,t){let n=e.map(e=>[...e]),r=Math.sign(Id(t));for(let e=0;e<t.length&&n.length;e++){let i=t[e],a=t[(e+1)%t.length],o=e=>r*((a[0]-i[0])*(e[1]-i[1])-(a[1]-i[1])*(e[0]-i[0])),s=n;n=[];for(let e=0;e<s.length;e++){let t=s[e],r=s[(e+1)%s.length],i=o(t),a=o(r);if(i>=0&&n.push(t),i>=0!=a>=0){let e=i/(i-a);n.push([t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e])}}}return n=n.filter((e,t)=>Math.hypot(e[0]-n[(t+1)%n.length][0],e[1]-n[(t+1)%n.length][1])>1e-7),n.length>=3&&Math.abs(Id(n))>1e-5?n:[]}function Rd(e){let t=Si.triangulateShape(e.map(e=>new q(...e)),[]),n=[];for(let r of Pd){let i=t.map(t=>Ld(t.map(t=>e[t]),r)).filter(e=>e.length),a=Ld(e,r),o=!!a.length&&Math.abs(Math.abs(Id(a))-i.reduce((e,t)=>e+Math.abs(Id(t)),0))<1e-5;if(o)try{cd([{id:`root`,sourcePolygon:e},{id:`part`,parent:`root`,sourcePolygon:e,ownership:{subtractFrom:[`root`],bodyRevealPolygons:[a]}}],xd)}catch{o=!1}n.push(...o?[a]:i)}if(n.length>32)throw Error(`Glass pose hair body budget exceeded`);return n}var zd=[{id:`torso`,role:`body`,root:[388,300],tip:[392,393],amplitude:[.3,-1.8],polygon:[[338,298],[356,290],[389,302],[420,290],[441,315],[453,344],[447,372],[431,393],[349,401],[335,369]]},{id:`support-sleeve`,role:`arm`,root:[270,338],tip:[247,542],amplitude:[.7,-1.6],polygon:[[246,316],[274,313],[307,326],[327,358],[344,410],[342,443],[322,475],[297,517],[281,550],[242,551],[222,540],[211,515],[214,486],[204,462],[210,425],[215,401],[203,373],[222,343]]},{id:`knee-sleeve`,role:`arm`,root:[467,404],tip:[508,447],amplitude:[.65,-1.6],polygon:[[458,394],[491,397],[520,407],[543,425],[555,447],[547,465],[533,466],[519,452],[504,449],[492,459],[469,462],[443,447],[438,423]]},{id:`pants-left`,role:`leg`,root:[388,487],tip:[519,698],amplitude:[.5,-1.5],polygon:[[356,475],[394,469],[437,478],[473,497],[503,533],[530,566],[548,597],[566,635],[597,662],[589,686],[555,688],[537,704],[502,726],[465,729],[448,703],[432,661],[415,620],[379,630],[345,611],[324,592],[332,536]]},{id:`pants-right`,role:`leg`,root:[553,482],tip:[648,665],amplitude:[.5,-1.5],polygon:[[494,476],[532,470],[566,475],[595,481],[612,500],[633,545],[646,569],[670,600],[686,617],[690,635],[676,649],[691,665],[689,683],[677,692],[655,681],[630,685],[609,708],[590,707],[589,684],[599,662],[565,634],[544,598],[526,566],[502,533],[472,506]]}];function Bd(){let e=[{id:`glass-seat`,role:`fixed`,depth:-9.92,sourcePolygon:Nd},{id:`resident`,role:`body`,depth:-9.9,sourcePolygon:Ed},{id:`scalp-fixed`,parent:`resident`,role:`fixed`,depth:-9.805,sourcePolygon:[[352,115],[351,143],[351,183],[337,210],[318,229],[294,237],[277,241],[268,234],[264,234],[259,230],[265,223],[277,211],[290,194],[308,172],[326,149],[338,128]]},{id:`head`,parent:`resident`,role:`head`,depth:-9.72,sourcePolygon:Dd},{id:`face`,parent:`resident`,role:`face`,depth:-9.7,sourcePolygon:Od},{id:`seat-hand`,parent:`resident`,role:`hand`,depth:-9.67,sourcePolygon:kd},{id:`knee-hand`,parent:`resident`,role:`hand`,depth:-9.67,sourcePolygon:Ad},{id:`boots-left`,parent:`resident`,role:`fixed`,depth:-9.68,sourcePolygon:jd},{id:`boots-right`,parent:`resident`,role:`fixed`,depth:-9.68,sourcePolygon:Md},...zd.map((e,t)=>({id:e.id,parent:`resident`,role:e.role,revealTextureId:`original`,sourcePolygon:e.polygon,depth:-9.85+t*.004,motion:{kind:`breath`,root:e.root,tip:e.tip,amplitudePixels:e.amplitude,frequencyHz:.25,anchors:[{point:e.root,radius:12}],interiorCloth:{fixedBandPixels:3,featherPixels:12,meshSpacingPixels:10,delaySeconds:t*.025,protectedPolygons:[Dd,Od,kd,Ad,jd,Md,...Fd.map(e=>e.polygon)]}}}))];for(let[t,n]of Fd.entries()){let r=Math.min(4.8,Math.hypot(n.tip[0]-n.root[0],n.tip[1]-n.root[1])*.055),i=Rd(n.polygon),a={id:n.id,parent:`resident`,role:`hair`,depth:-9.79+t*.004,sourcePolygon:n.polygon,revealTextureId:`detailReveal`,motion:{kind:`sway`,root:n.root,tip:n.tip,amplitudePixels:[r,r*.12],frequencyHz:.3,anchors:[{point:n.root,radius:12}],worldReadability:{kind:`repaired-hair`,delaySeconds:.06+t*.007}},ownership:{subtractFrom:[],bodyRevealPolygons:i}};a.ownership.subtractFrom=[`resident`,...e.filter(e=>e.parent&&e.depth<a.depth).flatMap(e=>[e.id,...e.ownership?.bodyRevealPolygons.length?[e.id+`-reveal`]:[]])],e.push(a)}let t={left:{neutralCenter:[389,177],aperturePolygon:[[382,175],[385,172],[389,173],[394,175],[398,179],[400,183],[397,186],[392,187],[387,184],[383,181]],irisPolygon:[[384,172],[389,172],[393,174],[396,177],[395,181],[392,185],[388,184],[384,181],[383,178]],limits:{left:3,right:3,up:1,down:1}},right:{neutralCenter:[433,198],aperturePolygon:[[426,196],[429,193],[436,193],[440,195],[444,198],[441,201],[437,204],[432,204],[428,201]],irisPolygon:[[428,194],[433,193],[437,194],[438,196],[436,199],[433,202],[429,201],[427,199],[426.5,196.5]],limits:{left:3,right:3,up:1,down:1}}},n=Gu(t),r={schemaVersion:1,image:{...xd},camera:{position:[0,0,12],target:[0,0,0],fov:38},originalTextureId:`original`,layers:e,eyes:[`left`,`right`].map(e=>({id:e,...t[e],...n[e],parent:`face`,depth:-9.66,revealTextureId:`eyesReveal`})),review:{productionReady:!1,pose:`upright-seated-seat-hand-and-knee-hand-both-boots-grounded`,sourceOriginalSha256:Sd,sourcePixelsRedrawn:!1,visualApproved:!1,contactPoints:{seatHand:[249,591],kneeHand:[542,495],seat:[371,591],leftSole:[590,869],rightSole:[734,835]},limitations:[`Native silhouette and candidate reveal registration require actual main-canvas review.`,`Support contains only original visible furniture; hidden seat is not generated.`,`Fixed-edge cloth cannot uncover missing garment repair paint.`]}};return r.revealRegistrations=structuredClone(Td),cd(r.layers,r.image),structuredClone(r)}function Vd(e){let{anchorX:t,cameraZ:n,worldHeight:r=941,maxWidth:i=600,margin:a=12,depth:o=10,soleWorldY:s=20}=e;if(![t,n,r,i,a,o,s].every(Number.isFinite)||n<=o||r<=0||a<0||i<=2*a)throw Error(`Invalid glass pose placement`);let c=Bd(),l=c.layers.find(e=>e.id===`resident`),u=941/(2*Math.tan(19*Math.PI/180)),d=u/(12-l.depth),f=1/0,p=-1/0,m=1/0,h=-1/0,g=1/0,_=-1/0,v=0;for(let e of c.layers){let t=e.depth,n=(12-t)/u;g=Math.min(g,t),_=Math.max(_,t);for(let t of e.sourcePolygon){let e=(t[0]-836)*n,r=(470.5-t[1])*n;f=Math.min(f,e),p=Math.max(p,e),m=Math.min(m,r),h=Math.max(h,r)}e.motion&&(v=Math.max(v,Math.hypot(...e.motion.amplitudePixels)))}for(let e of c.eyes??[])_=Math.max(_,e.depth);let y=v*(12-g)/(12-l.depth)/d,b=i-2*a,x=p-f+2*y,S=Math.max(0,_-l.depth),C=Math.min(d,b*(n-o)/(x*n+b*S));return{anchor:[t,r-a-(h-m+y)*C-s],worldHeight:r,maxWidth:i,margin:a,depth:o,cameraZ:n}}var Hd={width:1673,height:940},Ud=`c7a9eb8b83a62a9a9cf3e8153a476d5530da783399f80a7679b8502434ee0241`,Wd=[`print-stool-seat`,`print-stool-left-leg`,`print-stool-front-leg`,`print-stool-right-leg`],Gd={original:`original.raw.png`,detailReveal:`detailReveal.raw.png`,eyesReveal:`eyesReveal.raw.png`,coatReveal:`coatReveal.raw.png`};Gd.original,{...Hd},Gd.detailReveal,{...Hd},Gd.eyesReveal,{...Hd},Gd.coatReveal,{...Hd};var Kd={detailReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[360,233],source:[360,233]},{reference:[421,400],source:[421,400]},{reference:[516,410],source:[517,410]},{reference:[459,341],source:[459,341]}],maxResidualPixels:1},eyesReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[360,233],source:[360,233]},{reference:[410,189],source:[409,189]},{reference:[409,263],source:[409,263]},{reference:[472,247],source:[473,246]}],maxResidualPixels:1.42},coatReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[138,501],source:[137,503]},{reference:[166,578],source:[167,576]},{reference:[208,641],source:[208,641]},{reference:[230,770],source:[230,769]}],maxResidualPixels:2.24}},qd=[[402,113],[422,107],[444,109],[465,121],[486,143],[498,174],[502,210],[503,243],[513,281],[523,317],[526,339],[543,341],[532,367],[524,389],[532,407],[530,429],[522,447],[516,470],[541,488],[553,520],[567,557],[580,598],[595,636],[601,659],[598,686],[582,720],[590,746],[602,780],[626,813],[642,836],[650,863],[659,893],[654,901],[620,913],[574,913],[535,909],[510,902],[496,889],[495,863],[488,830],[475,801],[472,779],[461,780],[455,796],[454,827],[456,853],[464,879],[468,906],[465,918],[427,924],[366,923],[340,918],[335,897],[334,868],[332,831],[329,798],[324,782],[298,777],[279,758],[268,727],[267,696],[262,677],[249,655],[235,630],[232,609],[236,575],[246,546],[264,527],[281,510],[302,495],[324,484],[281,481],[245,484],[207,493],[169,503],[145,510],[129,508],[112,500],[105,491],[123,467],[140,435],[129,415],[134,390],[151,374],[176,351],[207,337],[236,333],[242,302],[247,278],[270,263],[290,251],[271,238],[293,221],[312,202],[330,180],[348,155],[365,139],[383,123]],Jd=[[105,491],[112,500],[129,508],[145,510],[169,503],[182,529],[193,570],[201,608],[196,640],[185,670],[176,710],[167,753],[159,796],[151,838],[146,853],[134,858],[111,850],[88,844],[59,838],[34,834],[20,825],[19,819],[26,805],[34,789],[29,780],[33,759],[29,749],[33,726],[40,704],[46,677],[49,652],[51,627],[52,605],[58,580],[63,554],[77,531],[92,510]],Yd=[[169,503],[207,493],[245,484],[281,481],[324,484],[302,495],[281,510],[264,527],[252,529],[248,546],[238,577],[234,610],[237,629],[243,646],[233,650],[224,644],[206,642],[193,638],[181,638],[177,628],[175,610],[172,585],[171,550]],Xd=[[359,146],[385,120],[421,108],[458,124],[485,148],[495,180],[495,219],[478,250],[455,270],[430,282],[404,286],[385,277],[365,255],[349,225],[349,183]],Zd=[[369,192],[385,190],[400,190],[420,205],[438,219],[462,231],[471,246],[453,264],[428,277],[402,279],[385,268],[373,249],[363,224]],Qd=[[412,414],[455,337],[543,341],[505,414],[451,416]],$d=[[307,449],[328,444],[357,434],[371,421],[383,405],[392,396],[402,390],[415,390],[431,394],[442,401],[446,407],[441,412],[430,408],[422,407],[423,412],[442,415],[439,422],[422,421],[421,427],[434,429],[431,435],[414,433],[405,440],[390,446],[375,446],[353,456],[321,471],[306,475]],ef=[[483,403],[496,397],[510,390],[519,384],[526,386],[529,394],[523,398],[517,398],[529,400],[530,408],[521,412],[529,413],[528,420],[519,424],[525,425],[522,432],[512,436],[507,451],[501,463],[490,472],[481,462],[476,447],[479,426],[489,417],[487,412],[481,411]],tf=[[333,746],[353,725],[379,719],[406,722],[427,735],[431,762],[426,783],[431,813],[441,835],[454,851],[462,877],[467,902],[465,918],[430,923],[366,922],[340,918],[336,898],[334,875],[335,846],[333,815],[329,784],[328,765]],nf=[[483,739],[511,717],[537,713],[559,721],[577,737],[580,757],[579,784],[592,807],[614,826],[633,842],[643,863],[650,884],[657,893],[654,902],[619,911],[573,912],[536,908],[510,901],[498,887],[493,864],[490,838],[482,810],[475,784],[475,760]],rf=[{id:`print-stool-seat`,polygon:[[222,656],[238,658],[245,678],[241,713],[236,747],[233,772],[222,775],[218,769]]},{id:`print-stool-left-leg`,polygon:[[225,766],[236,767],[235,784],[238,796],[235,805],[228,806],[225,798],[224,786]]},{id:`print-stool-front-leg`,polygon:[[232,776],[269,774],[315,778],[316,789],[313,798],[305,802],[297,801],[299,790],[257,790],[231,792],[226,787]]},{id:`print-stool-right-leg`,polygon:[[393,772],[403,773],[402,810],[400,819],[389,819],[386,813]]}],af=[{id:`hair-left-sweep`,root:[331,207],tip:[169,340],polygon:[[331,207],[330,218],[306,237],[280,252],[250,264],[219,281],[190,301],[174,322],[169,340],[163,335],[164,320],[177,297],[205,279],[238,261],[271,247],[303,231]]},{id:`hair-left-gold-outer`,root:[263,264],tip:[167,358],polygon:[[263,264],[264,272],[239,287],[214,304],[195,324],[187,345],[179,356],[167,358],[160,352],[163,341],[170,340],[167,349],[174,350],[182,339],[187,319],[204,298],[230,280]]},{id:`hair-left-gold-inner`,root:[272,267],tip:[196,340],polygon:[[272,267],[277,274],[260,294],[236,307],[217,317],[208,334],[196,340],[187,336],[184,328],[188,323],[190,331],[198,332],[204,317],[223,306],[249,289]]},{id:`hair-left-shoulder`,root:[291,251],tip:[216,329],polygon:[[291,251],[294,258],[278,277],[258,290],[238,307],[226,323],[216,329],[207,326],[205,319],[211,320],[217,318],[231,297],[256,279],[277,264]]},{id:`hair-chest-left`,root:[346,257],tip:[319,372],polygon:[[346,257],[351,267],[348,300],[342,327],[335,351],[329,365],[319,372],[310,371],[306,366],[317,367],[324,357],[330,337],[336,311],[342,282]]},{id:`hair-chest-gold`,root:[354,263],tip:[323,420],polygon:[[354,263],[359,275],[361,306],[362,334],[360,365],[354,391],[346,409],[336,418],[323,420],[316,415],[318,409],[328,412],[337,404],[344,388],[350,366],[352,339],[350,313]]},{id:`hair-chest-tip`,root:[351,342],tip:[335,457],polygon:[[351,342],[357,355],[358,375],[354,397],[347,418],[339,431],[337,447],[342,455],[335,457],[330,451],[330,439],[336,418],[343,398],[348,376]]},{id:`hair-right-inner`,root:[410,274],tip:[415,408],polygon:[[410,274],[415,282],[416,308],[420,335],[427,356],[431,376],[428,391],[422,404],[415,408],[410,406],[416,398],[421,385],[420,367],[414,344],[410,320]]},{id:`hair-right-gold`,root:[446,273],tip:[481,358],polygon:[[446,273],[451,283],[455,306],[465,329],[477,342],[486,351],[481,358],[470,350],[458,336],[449,317],[443,296]]},{id:`hair-right-outer`,root:[475,279],tip:[503,405],polygon:[[475,279],[480,293],[487,317],[502,338],[514,356],[518,373],[516,388],[510,401],[503,405],[500,401],[507,390],[510,376],[507,362],[496,344],[481,324],[475,305]]}],of=[[[233,272],[272,252],[297,260],[314,284],[314,326],[277,353],[228,332]],[[318,277],[363,261],[445,291],[456,324],[451,355],[424,394],[345,427],[306,386]],[[137,378],[187,327],[246,329],[305,380],[322,425],[284,442],[176,431]],[[453,344],[477,340],[506,361],[525,400],[510,424],[461,413]]],sf=[{id:`torso`,role:`body`,root:[383,294],tip:[375,415],amplitude:[.3,-1.8],polygon:[[337,278],[364,271],[387,287],[412,282],[429,307],[432,340],[418,379],[398,413],[349,424],[327,410],[319,362]]},{id:`left-sleeve`,role:`arm`,root:[207,361],tip:[286,444],amplitude:[.65,-1.65],polygon:[[150,373],[177,344],[207,335],[246,340],[280,359],[301,388],[319,416],[309,438],[283,456],[264,469],[241,475],[221,457],[196,452],[170,433],[145,415],[131,399]]},{id:`right-sleeve`,role:`arm`,root:[520,409],tip:[494,483],amplitude:[.65,-1.6],polygon:[[518,395],[533,409],[532,435],[521,458],[519,482],[536,490],[528,505],[500,500],[474,490],[459,474],[467,454],[479,460],[489,473],[505,461]]},{id:`pants-left`,role:`leg`,root:[326,502],tip:[371,716],amplitude:[.45,-1.7],polygon:[[250,500],[279,486],[308,479],[352,482],[382,498],[400,532],[408,574],[417,615],[433,654],[445,690],[435,718],[428,740],[406,727],[378,720],[350,729],[331,751],[299,771],[279,755],[268,727],[268,685],[252,661],[240,636],[232,609],[235,570]]},{id:`pants-right`,role:`leg`,root:[463,506],tip:[533,710],amplitude:[.45,-1.7],polygon:[[395,495],[422,484],[452,483],[481,491],[511,513],[540,550],[561,587],[578,626],[594,652],[601,670],[592,696],[579,723],[574,742],[553,724],[537,715],[510,720],[485,739],[472,776],[453,776],[441,756],[439,729],[449,690],[442,650],[429,612],[415,574],[402,536]]}],cf=e=>e.reduce((t,n,r)=>t+n[0]*e[(r+1)%e.length][1]-n[1]*e[(r+1)%e.length][0],0)/2;function lf(e,t){let n=e.map(e=>[...e]),r=Math.sign(cf(t));for(let e=0;e<t.length&&n.length;e++){let i=t[e],a=t[(e+1)%t.length],o=e=>r*((a[0]-i[0])*(e[1]-i[1])-(a[1]-i[1])*(e[0]-i[0])),s=n;n=[];for(let e=0;e<s.length;e++){let t=s[e],r=s[(e+1)%s.length],i=o(t),a=o(r);if(i>=0&&n.push(t),i>=0!=a>=0){let e=i/(i-a);n.push([t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e])}}}return n=n.filter((e,t)=>Math.hypot(e[0]-n[(t+1)%n.length][0],e[1]-n[(t+1)%n.length][1])>1e-7),n.length>=3&&Math.abs(cf(n))>1e-5?n:[]}function uf(e){let t=Si.triangulateShape(e.map(e=>new q(...e)),[]),n=[];for(let r of of){let i=t.map(t=>lf(t.map(t=>e[t]),r)).filter(e=>e.length),a=lf(e,r),o=!!a.length&&Math.abs(Math.abs(cf(a))-i.reduce((e,t)=>e+Math.abs(cf(t)),0))<1e-5;if(o)try{cd([{id:`root`,sourcePolygon:e},{id:`part`,parent:`root`,sourcePolygon:e,ownership:{subtractFrom:[`root`],bodyRevealPolygons:[a]}}],Hd)}catch{o=!1}n.push(...o?[a]:i)}if(n.length>32)throw Error(`Print pose hair body budget exceeded`);return n}function df(){let e=[...rf.map(e=>({id:e.id,role:`fixed`,depth:-9.92,sourcePolygon:e.polygon})),{id:`resident`,role:`body`,depth:-9.9,sourcePolygon:qd},{id:`coat-plant-repair`,parent:`resident`,role:`fixed`,sourceTextureId:`coatReveal`,depth:-9.81,sourcePolygon:Jd},{id:`coat-original-seam`,parent:`resident`,role:`fixed`,depth:-9.8,sourcePolygon:Yd},{id:`head`,parent:`resident`,role:`head`,depth:-9.72,sourcePolygon:Xd},{id:`face`,parent:`resident`,role:`face`,depth:-9.7,sourcePolygon:Zd},{id:`paper-proof`,parent:`resident`,role:`fixed`,depth:-9.69,sourcePolygon:Qd},{id:`proof-left-hand`,parent:`resident`,role:`hand`,depth:-9.67,sourcePolygon:$d},{id:`proof-right-hand`,parent:`resident`,role:`hand`,depth:-9.67,sourcePolygon:ef},{id:`boots-left`,parent:`resident`,role:`fixed`,depth:-9.68,sourcePolygon:tf},{id:`boots-right`,parent:`resident`,role:`fixed`,depth:-9.68,sourcePolygon:nf},...sf.map((e,t)=>({id:e.id,parent:`resident`,role:e.role,revealTextureId:`original`,sourcePolygon:e.polygon,depth:-9.85+t*.004,motion:{kind:`breath`,root:e.root,tip:e.tip,amplitudePixels:e.amplitude,frequencyHz:.25,anchors:[{point:e.root,radius:12},...e.role===`leg`?[{point:[256,637],radius:14}]:[]],interiorCloth:{fixedBandPixels:3,featherPixels:12,meshSpacingPixels:10,delaySeconds:t*.025,protectedPolygons:[Xd,Zd,$d,ef,Qd,tf,nf,...rf.map(e=>e.polygon),...af.map(e=>e.polygon)]}}}))];for(let[t,n]of af.entries()){let r=Math.min(4.8,Math.hypot(n.tip[0]-n.root[0],n.tip[1]-n.root[1])*.055),i={id:n.id,parent:`resident`,role:`hair`,depth:-9.79+t*.004,sourcePolygon:n.polygon,revealTextureId:`detailReveal`,motion:{kind:`sway`,root:n.root,tip:n.tip,amplitudePixels:[r,r*.12],frequencyHz:.3,anchors:[{point:n.root,radius:12}],worldReadability:{kind:`repaired-hair`,delaySeconds:.06+t*.007}},ownership:{subtractFrom:[],bodyRevealPolygons:uf(n.polygon)}};i.ownership.subtractFrom=[`resident`,...e.filter(e=>e.parent&&e.depth<i.depth).flatMap(e=>[e.id,...e.ownership?.bodyRevealPolygons.length?[e.id+`-reveal`]:[]])],e.push(i)}let t={left:{neutralCenter:[401,211],aperturePolygon:[[390,204],[394,202],[400,202],[407,205],[412,209],[415,214],[410,218],[404,222],[398,221],[393,216]],irisPolygon:[[395,203],[400,203],[405,205],[408,209],[408,214],[405,217],[400,218],[396,215],[394,210]],limits:{left:3,right:3,up:1,down:1}},right:{neutralCenter:[449,235],aperturePolygon:[[438,235],[442,233],[448,232],[453,233],[457,234],[459,236],[456,239],[452,242],[447,244],[443,243],[440,240]],irisPolygon:[[440,235],[443,234],[448,233],[451,234],[453,235],[452,237],[449,240],[445,242],[442,240],[440,238],[439,236]],limits:{left:3,right:3,up:1,down:1}}},n=Gu(t),r={schemaVersion:1,image:{...Hd},camera:{position:[0,0,12],target:[0,0,0],fov:38},originalTextureId:`original`,layers:e,eyes:[`left`,`right`].map(e=>({id:e,...t[e],...n[e],parent:`face`,depth:-9.66,revealTextureId:`eyesReveal`})),review:{productionReady:!1,pose:`upright-seated-both-hands-hold-paper-proof-both-boots-grounded`,sourceOriginalSha256:Ud,sourcePixelsRedrawn:!1,visualApproved:!1,referenceFrame:{image:`print-pose-v2/original.raw.png`,coordinates:`native-original-pixels`},contactPoints:{leftPaperGrip:[423,414],rightPaperGrip:[516,410],seat:[256,637],leftSole:[400,923],rightSole:[582,911]},limitations:[`New native silhouettes and generated reveal registration require assembled main-canvas review.`,`Furniture contains only visible original seat and metal leg pixels; occluded support is not synthesized.`,`Interior garment movement cannot uncover missing paint.`]}};return r.revealRegistrations=structuredClone(Kd),cd(r.layers,r.image),structuredClone(r)}function ff(e){let{anchorX:t,cameraZ:n,worldHeight:r=941,maxWidth:i=600,margin:a=12,depth:o=10,soleWorldY:s=20}=e;if(![t,n,r,i,a,o,s].every(Number.isFinite)||n<=o||r<=0||a<0||i<=2*a)throw Error(`Invalid print pose placement`);let c=df(),l=c.layers.find(e=>e.id===`resident`),u=c.image.height/(2*Math.tan(19*Math.PI/180)),d=u/(12-l.depth),f=1/0,p=-1/0,m=1/0,h=-1/0,g=1/0,_=-1/0,v=0;for(let e of c.layers){let t=Wd.includes(e.id)?l.depth-.02:e.depth,n=(12-t)/u;g=Math.min(g,t),_=Math.max(_,t);for(let t of e.sourcePolygon){let e=(t[0]-c.image.width/2)*n,r=(c.image.height/2-t[1])*n;f=Math.min(f,e),p=Math.max(p,e),m=Math.min(m,r),h=Math.max(h,r)}e.motion&&(v=Math.max(v,Math.hypot(...e.motion.amplitudePixels)))}for(let e of c.eyes??[])_=Math.max(_,e.depth);let y=v*(12-g)/(12-l.depth)/d,b=i-2*a,x=p-f+2*y,S=Math.max(0,_-l.depth),C=Math.min(d,b*(n-o)/(x*n+b*S));return{anchor:[t,r-a-(h-m+y)*C-s],worldHeight:r,maxWidth:i,margin:a,depth:o,cameraZ:n}}var pf={width:1672,height:941},mf=`13937511aa85d0699191ebc53ac35db7a29ed1b3b50f6c2664e31f1edd74a91c`,hf=[`cinema-chair-back`,`cinema-chair-arm`,`cinema-chair-post`,`cinema-chair-post-repair`,`cinema-chair-post-foot`,`cinema-chair-seat`,`cinema-chair-seat-right`,`cinema-chair-leg`,`cinema-chair-rail`],gf={original:`original.raw.png`,detailReveal:`detailReveal.raw.png`,eyesReveal:`eyesReveal.raw.png`,chairReveal:`chairReveal.raw.png`};gf.original,{...pf},gf.detailReveal,{...pf},gf.eyesReveal,{...pf},gf.chairReveal,{...pf};var _f={detailReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[265,278],source:[265,278]},{reference:[270,238],source:[270,238]},{reference:[325,399],source:[325,399]},{reference:[352,506],source:[352,506]}],maxResidualPixels:0},eyesReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[265,278],source:[265,278]},{reference:[270,238],source:[270,238]},{reference:[315,313],source:[315,313]},{reference:[355,307],source:[355,309]}],maxResidualPixels:2},chairReveal:{matrixRows:[[1,0,0],[0,1,0],[0,0,1]],landmarks:[{reference:[183,542],source:[183,542]},{reference:[190,634],source:[190,633]},{reference:[194,706],source:[193,708]},{reference:[212,786],source:[212,786]}],maxResidualPixels:2.25}},vf=[[251,212],[272,191],[303,180],[332,180],[356,190],[376,212],[389,242],[395,280],[389,315],[380,338],[375,357],[387,380],[392,412],[404,442],[432,452],[453,466],[478,490],[494,510],[498,522],[482,531],[465,545],[449,560],[430,583],[414,610],[392,632],[345,644],[285,650],[284,681],[282,714],[257,715],[215,703],[218,677],[224,651],[227,624],[219,629],[214,623],[210,623],[204,628],[199,622],[191,616],[189,594],[187,566],[179,543],[167,536],[151,526],[124,526],[96,517],[84,503],[85,484],[96,463],[103,447],[118,428],[133,409],[135,391],[147,379],[165,375],[183,368],[185,356],[199,345],[217,341],[235,337],[244,320],[248,297],[249,273],[247,249]],yf=[[248,230],[267,202],[298,184],[334,183],[359,194],[378,219],[389,252],[392,280],[382,312],[367,332],[342,344],[316,343],[286,334],[266,315],[251,289],[245,263]],bf=[[272,253],[287,248],[309,249],[337,260],[361,279],[364,296],[347,318],[320,333],[298,335],[277,322],[261,299],[258,273]],xf=[[170,509],[190,507],[205,518],[214,534],[223,557],[232,580],[238,598],[235,610],[230,623],[224,624],[221,613],[216,622],[212,618],[213,600],[207,619],[202,620],[197,612],[198,592],[194,609],[190,607],[191,582],[188,557],[185,543],[175,536],[163,527]],Sf=[[427,515],[448,518],[447,528],[433,540],[429,558],[420,576],[408,589],[402,594],[399,588],[404,573],[398,584],[392,583],[396,567],[392,575],[388,571],[394,554],[402,539],[415,530]],Cf=[[451,738],[489,719],[511,729],[524,750],[529,776],[546,795],[560,806],[566,827],[579,871],[576,887],[481,890],[459,882],[445,869],[444,851],[448,830],[449,804],[441,776]],wf=[[587,731],[628,709],[650,728],[665,754],[680,776],[702,798],[724,805],[735,823],[742,852],[749,867],[732,877],[647,882],[598,875],[574,864],[572,843],[580,818],[576,793],[577,765]],Tf=[[313,633],[325,634],[326,645],[328,646],[329,661],[328,670],[326,674],[325,697],[325,741],[327,745],[330,746],[330,767],[327,770],[327,782],[308,783],[306,770],[302,768],[301,767],[301,748],[304,744],[305,716],[305,682],[304,671],[301,667],[302,650],[304,648],[306,642]];function Ef(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=r[0]-n[0],s=r[1]-n[1],c=i*s-a*o;if(Math.abs(c)<1e-9)throw Error(`Parallel cinema strap seam`);let l=((n[0]-e[0])*s-(n[1]-e[1])*o)/c,u=((n[0]-e[0])*a-(n[1]-e[1])*i)/c;if(l<0||l>1||u<0||u>1)throw Error(`Cinema strap seam outside native edges`);return[e[0]+i*l,e[1]+a*l]}var Df=Ef([303,641],[399,642],[306,642],[313,633]),Of=Ef([303,641],[399,642],[325,634],[326,645]),kf=Ef([280,686],[322,693],[305,682],[305,716]),Af=Ef([322,693],[402,688],[326,674],[325,697]),jf=Ef([205,784],[427,770],[306,770],[308,783]),Mf=Ef([205,784],[427,770],[327,770],[327,782]),Nf=[{id:`cinema-chair-back`,polygon:[[59,424],[69,418],[88,419],[117,427],[142,441],[143,460],[126,484],[114,514],[105,538],[69,539],[67,509],[61,475]]},{id:`cinema-chair-arm`,polygon:[[160,534],[179,531],[187,535],[191,544],[189,556],[177,558],[164,550]]},{id:`cinema-chair-post`,polygon:[[176,557],[189,556],[192,612],[194,657],[197,710],[198,727],[183,727],[180,710],[177,648]]},{id:`cinema-chair-post-repair`,sourceTextureId:`chairReveal`,polygon:[[183,727],[198,727],[204,799],[184,802]]},{id:`cinema-chair-post-foot`,sourceTextureId:`chairReveal`,polygon:[[184,802],[204,799],[204,823],[197,834],[183,834],[184,821]]},{id:`cinema-chair-seat`,polygon:[[278,644],[303,641],Df,[306,642],[304,648],[302,650],[301,667],[304,671],[305,682],kf,[280,686]]},{id:`cinema-chair-seat-right`,polygon:[Of,[399,642],[418,651],[414,681],[402,688],Af,[326,674],[328,670],[329,661],[328,646],[326,645]]},{id:`cinema-chair-leg`,polygon:[[420,691],[438,691],[441,717],[443,754],[446,790],[438,807],[429,806],[429,773],[425,735]]},{id:`cinema-chair-rail`,polygon:[[205,784],jf,[308,783],[327,782],Mf,[427,770],[443,775],[432,788],[207,803]]}],Pf=[{id:`torso`,role:`body`,root:[304,375],tip:[317,470],amplitude:[.3,-1.8],polygon:[[245,366],[268,348],[287,356],[309,371],[336,364],[360,372],[380,392],[386,419],[379,447],[365,470],[283,483],[252,468],[236,437]]},{id:`arm-sleeve`,role:`arm`,root:[184,402],tip:[243,676],amplitude:[.7,-1.6],polygon:[[157,376],[186,372],[217,378],[237,404],[251,440],[259,481],[264,521],[270,558],[276,600],[282,640],[283,679],[278,710],[256,702],[220,692],[224,659],[232,627],[239,593],[242,566],[228,536],[215,520],[191,504],[174,507],[159,526],[136,525],[114,515],[96,502],[93,485],[105,461],[116,444],[132,424],[134,402]]},{id:`knee-sleeve`,role:`arm`,root:[415,465],tip:[447,509],amplitude:[.65,-1.6],polygon:[[399,443],[426,447],[447,460],[467,478],[481,493],[495,513],[491,525],[472,533],[447,529],[430,516],[416,523],[392,535],[378,518],[377,491],[387,466]]},{id:`pants-left`,role:`leg`,root:[325,565],tip:[477,715],amplitude:[.5,-1.5],polygon:[[283,531],[336,527],[373,536],[416,533],[460,523],[490,528],[521,548],[542,574],[535,613],[526,643],[518,670],[515,694],[507,716],[471,726],[453,747],[411,748],[401,727],[409,694],[418,661],[404,637],[375,639],[332,646],[282,641],[271,611],[274,570]]},{id:`pants-right`,role:`leg`,root:[535,545],tip:[615,690],amplitude:[.5,-1.5],polygon:[[468,538],[509,523],[541,517],[558,530],[575,558],[603,594],[618,624],[639,645],[642,658],[633,664],[648,677],[660,687],[659,704],[648,718],[628,716],[596,741],[569,752],[548,758],[530,738],[521,716],[529,696],[531,675],[517,650],[503,619],[480,587],[460,564]]}],Ff=[[[186,361],[199,347],[218,345],[234,357],[245,383],[237,412],[221,424],[195,396]],[[249,340],[285,342],[334,350],[359,370],[384,404],[399,425],[381,465],[367,477],[275,488],[242,459]],[[139,394],[160,378],[193,380],[221,399],[243,437],[238,466],[196,473],[148,452]],[[378,443],[395,433],[421,448],[441,465],[451,485],[398,497],[380,482]],[[242,444],[271,446],[274,473],[259,490],[243,477]]],If=[{id:`hair-left-rear`,root:[245,311],tip:[170,352],polygon:[[245,311],[247,315],[232,330],[215,340],[193,347],[175,354],[164,355],[160,351],[159,345],[162,337],[166,335],[165,343],[166,348],[173,348],[193,341],[214,335],[230,323]]},{id:`hair-left-outer`,root:[216,332],tip:[164,375],polygon:[[216,332],[219,336],[205,345],[193,355],[181,365],[169,374],[157,376],[151,373],[153,369],[162,371],[174,364],[190,351],[203,341]]},{id:`hair-left-inner`,root:[260,332],tip:[250,428],polygon:[[260,332],[265,343],[268,368],[268,393],[262,413],[254,429],[247,433],[240,428],[237,421],[238,414],[242,415],[244,424],[249,426],[255,415],[260,394],[259,372],[256,350]]},{id:`hair-chest-left-a`,root:[267,348],tip:[268,468],polygon:[[267,348],[273,362],[280,389],[285,409],[284,431],[277,451],[275,462],[280,465],[284,462],[286,463],[282,469],[273,472],[267,470],[264,463],[266,450],[275,426],[276,409],[272,390],[266,368]]},{id:`hair-chest-left-b`,root:[279,361],tip:[253,480],polygon:[[279,361],[287,376],[294,397],[295,419],[287,439],[272,457],[262,470],[260,476],[265,480],[262,483],[255,482],[249,477],[249,469],[257,454],[269,437],[281,417],[283,399],[278,378]]},{id:`hair-right-inner`,root:[337,344],tip:[376,443],polygon:[[337,344],[344,352],[357,365],[372,381],[383,400],[386,416],[382,431],[376,442],[368,445],[362,443],[362,440],[370,440],[378,428],[379,413],[375,399],[367,385],[353,371],[341,358]]},{id:`hair-right-gold-a`,root:[355,350],tip:[386,472],polygon:[[355,350],[363,363],[377,379],[393,398],[406,419],[410,438],[408,454],[400,466],[390,473],[381,475],[376,472],[377,468],[385,470],[395,462],[401,449],[401,435],[396,420],[384,400],[370,382],[359,367]]},{id:`hair-right-gold-b`,root:[379,375],tip:[408,474],polygon:[[379,375],[386,382],[398,397],[409,414],[416,433],[416,450],[411,467],[404,475],[399,476],[397,472],[403,470],[410,457],[410,443],[406,431],[399,415],[389,400],[381,388]]},{id:`hair-right-outer`,root:[386,381],tip:[433,438],polygon:[[386,381],[395,387],[408,398],[420,411],[431,424],[435,430],[435,436],[429,442],[425,441],[429,436],[430,431],[426,424],[416,413],[403,403],[391,393]]}],Lf=e=>e.reduce((t,n,r)=>t+n[0]*e[(r+1)%e.length][1]-n[1]*e[(r+1)%e.length][0],0)/2;function Rf(e,t){let n=e.map(e=>[...e]),r=Math.sign(Lf(t));for(let e=0;e<t.length&&n.length;e++){let i=t[e],a=t[(e+1)%t.length],o=e=>r*((a[0]-i[0])*(e[1]-i[1])-(a[1]-i[1])*(e[0]-i[0])),s=n;n=[];for(let e=0;e<s.length;e++){let t=s[e],r=s[(e+1)%s.length],i=o(t),a=o(r);if(i>=0&&n.push(t),i>=0!=a>=0){let e=i/(i-a);n.push([t[0]+(r[0]-t[0])*e,t[1]+(r[1]-t[1])*e])}}}return n=n.filter((e,t)=>Math.hypot(e[0]-n[(t+1)%n.length][0],e[1]-n[(t+1)%n.length][1])>1e-7),n.length>=3&&Math.abs(Lf(n))>1e-5?n:[]}function zf(e){let t=Si.triangulateShape(e.map(e=>new q(...e)),[]),n=[];for(let r of Ff){let i=t.map(t=>Rf(t.map(t=>e[t]),r)).filter(e=>e.length),a=Rf(e,r),o=!!a.length&&Math.abs(Math.abs(Lf(a))-i.reduce((e,t)=>e+Math.abs(Lf(t)),0))<1e-5;if(o)try{cd([{id:`root`,sourcePolygon:e},{id:`part`,parent:`root`,sourcePolygon:e,ownership:{subtractFrom:[`root`],bodyRevealPolygons:[a]}}],pf)}catch{o=!1}n.push(...o?[a]:i)}if(n.length>32)throw Error(`Cinema pose hair body budget exceeded`);return n}function Bf(){let e=[...Nf.map(e=>({id:e.id,role:`fixed`,depth:-9.92,sourcePolygon:e.polygon,...e.sourceTextureId?{sourceTextureId:e.sourceTextureId}:{}})),{id:`resident`,role:`body`,depth:-9.9,sourcePolygon:vf},{id:`scalp-fixed`,parent:`resident`,role:`fixed`,depth:-9.805,sourcePolygon:[[267,219],[266,258],[258,300],[243,326],[222,339],[203,344],[180,351],[175,345],[187,335],[202,319],[217,296],[232,269],[245,243]]},{id:`head`,parent:`resident`,role:`head`,depth:-9.72,sourcePolygon:yf},{id:`face`,parent:`resident`,role:`face`,depth:-9.7,sourcePolygon:bf},{id:`arm-hand`,parent:`resident`,role:`hand`,depth:-9.67,sourcePolygon:xf},{id:`knee-hand`,parent:`resident`,role:`hand`,depth:-9.67,sourcePolygon:Sf},{id:`boots-left`,parent:`resident`,role:`fixed`,depth:-9.68,sourcePolygon:Cf},{id:`boots-right`,parent:`resident`,role:`fixed`,depth:-9.68,sourcePolygon:wf},{id:`coat-long-strap`,parent:`resident`,role:`fixed`,depth:-9.83,sourcePolygon:Tf},...Pf.map((e,t)=>({id:e.id,parent:`resident`,role:e.role,revealTextureId:`original`,sourcePolygon:e.polygon,depth:-9.85+t*.004,motion:{kind:`breath`,root:e.root,tip:e.tip,amplitudePixels:e.amplitude,frequencyHz:.25,anchors:[{point:e.root,radius:12}],interiorCloth:{fixedBandPixels:3,featherPixels:12,meshSpacingPixels:10,delaySeconds:t*.025,protectedPolygons:[yf,bf,xf,Sf,Cf,wf,Tf,...If.map(e=>e.polygon)]}}}))];for(let[t,n]of If.entries()){let r=Math.min(4.8,Math.hypot(n.tip[0]-n.root[0],n.tip[1]-n.root[1])*.055),i={id:n.id,parent:`resident`,role:`hair`,depth:-9.79+t*.004,sourcePolygon:n.polygon,revealTextureId:`detailReveal`,motion:{kind:`sway`,root:n.root,tip:n.tip,amplitudePixels:[r,r*.12],frequencyHz:.3,anchors:[{point:n.root,radius:12}],worldReadability:{kind:`repaired-hair`,delaySeconds:.06+t*.007}},ownership:{subtractFrom:[],bodyRevealPolygons:zf(n.polygon)}};i.ownership.subtractFrom=[`resident`,...e.filter(e=>e.parent&&e.depth<i.depth).flatMap(e=>[e.id,...e.ownership?.bodyRevealPolygons.length?[e.id+`-reveal`]:[]])],e.push(i)}let t={left:{neutralCenter:[298,273],aperturePolygon:[[290,268],[295,266],[301,268],[307,271],[312,277],[309,281],[304,282],[298,280],[293,277]],irisPolygon:[[291,268],[297,268],[302,270],[304,274],[302,278],[299,280],[294,278],[291,274]],limits:{left:3,right:3,up:1,down:1}},right:{neutralCenter:[342,292],aperturePolygon:[[333,289],[338,286],[344,286],[349,288],[353,292],[350,296],[345,299],[339,297],[334,294]],irisPolygon:[[337,287],[343,287],[347,289],[347,292],[344,296],[340,297],[335,294],[334,291]],limits:{left:3,right:3,up:1,down:1}}},n=Gu(t),r={schemaVersion:1,image:{...pf},camera:{position:[0,0,12],target:[0,0,0],fov:38},originalTextureId:`original`,layers:e,eyes:[`left`,`right`].map(e=>({id:e,...t[e],...n[e],parent:`face`,depth:-9.66,revealTextureId:`eyesReveal`})),review:{productionReady:!1,pose:`upright-chair-back-arm-hand-and-knee-hand-staggered-boots-right`,sourceOriginalSha256:mf,originalSourcePixelsRedrawn:!1,generatedSupportRootIds:[`cinema-chair-post-repair`,`cinema-chair-post-foot`],visualApproved:!1,contactPoints:{armHand:[183,539],kneeHand:[419,548],seat:[350,646],leftSole:[514,887],rightSole:[685,879]},limitations:[`Native silhouettes and candidate reveal registration require main-canvas review.`,`Nine explicit chair roots; seat is split around the fixed native coat strap; only the occluded post/foot use independent generated repair.`,`Fixed-edge cloth cannot uncover missing garment paint.`]}};return r.revealRegistrations=structuredClone(_f),cd(r.layers,r.image),structuredClone(r)}function Vf(e){let{anchorX:t,cameraZ:n,worldHeight:r=941,maxWidth:i=600,margin:a=12,depth:o=10,soleWorldY:s=20}=e;if(![t,n,r,i,a,o,s].every(Number.isFinite)||n<=o||r<=0||a<0||i<=2*a)throw Error(`Invalid cinema pose placement`);let c=Bf(),l=c.layers.find(e=>e.id===`resident`),u=941/(2*Math.tan(19*Math.PI/180)),d=u/(12-l.depth),f=1/0,p=-1/0,m=1/0,h=-1/0,g=1/0,_=-1/0,v=0;for(let e of c.layers){let t=e.depth,n=(12-t)/u;g=Math.min(g,t),_=Math.max(_,t);for(let t of e.sourcePolygon){let e=(t[0]-836)*n,r=(470.5-t[1])*n;f=Math.min(f,e),p=Math.max(p,e),m=Math.min(m,r),h=Math.max(h,r)}e.motion&&(v=Math.max(v,Math.hypot(...e.motion.amplitudePixels)))}for(let e of c.eyes??[])_=Math.max(_,e.depth);let y=v*(12-g)/(12-l.depth)/d,b=i-2*a,x=p-f+2*y,S=Math.max(0,_-l.depth),C=Math.min(d,b*(n-o)/(x*n+b*S));return{anchor:[t,r-a-(h-m+y)*C-s],worldHeight:r,maxWidth:i,margin:a,depth:o,cameraZ:n}}var Hf=[{layerId:`resident`,original:[[243,872],[236,839],[229,814],[220,788],[214,760],[190,748],[173,732],[158,711],[136,688],[118,663],[99,631],[81,597],[61,558],[50,523],[54,488],[74,450]],replacement:[[243,872],[244,850],[246,839],[244,814],[239,805],[231,790],[223,777],[217,760],[207,748],[199,738],[183,730],[176,722],[171,711],[170,700],[169,689],[163,678],[158,668],[154,657],[144,645],[127,634],[119,622],[116,611],[112,601],[113,589],[105,580],[99,570],[85,562],[76,550],[79,545],[89,535],[109,527],[114,522],[103,516],[90,506],[79,496],[68,478],[66,467],[74,450]]},{layerId:`coat-tail`,original:[[160,553],[143,589],[124,615],[105,627],[85,598],[64,558],[59,527],[83,481]],replacement:[[160,553],[143,589],[124,615],[124,621],[119,608],[112,599],[113,589],[105,580],[99,570],[85,562],[76,550],[79,545],[89,535],[109,527],[114,522],[103,516],[99,508],[94,499],[83,481]]}],Uf=new Set([`entry`,`street`,`print`,`workshop`,`glass`,`cinema`]),Wf=(e,t)=>e[0]===t[0]&&e[1]===t[1];function Gf(e,t){return e.findIndex((n,r)=>Wf(n,t[0])&&r+t.length<=e.length&&t.every((t,n)=>Wf(e[r+n],t)))}function Kf(e,t){if(!Uf.has(e))throw Error(`Unknown world resident station`);let n=structuredClone(t);if(e!==`print`)return n;if(n.image.width!==1672||n.image.height!==940)throw Error(`Print resident contours require frozen native 1672x940 source`);for(let e of Hf){let t=n.layers.find(t=>t.id===e.layerId);if(!t)throw Error(`Missing print resident contour layer: ${e.layerId}`);let r=Gf(t.sourcePolygon,e.original);if(r<0){if(Gf(t.sourcePolygon,e.replacement)>=0)continue;throw Error(`Changed print resident source contour: ${e.layerId}`)}t.sourcePolygon=[...t.sourcePolygon.slice(0,r),...e.replacement.map(e=>[e[0],e[1]]),...t.sourcePolygon.slice(r+e.original.length)]}return n.review.worldResidentContours={version:1,station:`print`,sourceImage:[1672,940],evidence:`docs/journey/v4/continuous-world-resident-contours-v1.json`,overriddenLayerIds:Hf.map(e=>e.layerId),sourcePixelsRedrawn:!1,syntheticAlpha:!1,visualApproved:!1,limitations:[`Manual visible-clothing contour candidate removes foreground plant ownership; occluded clothing is not reconstructed.`,`Native face, pose, hair and boot layers are preserved; rendered motion/exposed-edge review remains required.`]},n}var qf={entry:{torso:{amplitude:[.3,-1.9],delay:0},"sleeve-free":{amplitude:[.65,-1.5],delay:.08},"support-sleeve":{amplitude:[.5,-1.5],delay:.08},"pants-left":{amplitude:[.6,-1.3],delay:.12},"pants-right":{amplitude:[.6,-1.3],delay:.12}},street:{torso:{amplitude:[.3,-1.9],delay:0},"sleeve-left":{amplitude:[.65,-1.5],delay:.08},"sleeve-right":{amplitude:[.5,-1.5],delay:.08},"pants-left":{amplitude:[.6,-1.3],delay:.12},"pants-right":{amplitude:[.6,-1.3],delay:.12}}},Jf={entry:[`torso`,`sleeve-free`,`support-sleeve`,`pants-left`,`pants-right`],street:[`torso`,`sleeve-left`,`sleeve-right`,`pants-left`,`pants-right`],print:[`torso`,`free-sleeve`,`support-sleeve`,`pants-left`,`pants-right`],workshop:[`torso`,`sleeve-left`,`sleeve-right`,`pants-left`,`pants-right`],glass:[`torso`,`free-sleeve`,`support-sleeve`,`pants-left`,`pants-right`],cinema:[`torso`,`sleeve-free`,`support-sleeve`,`pants-left`,`pants-right`]};function Yf(e,t,n={}){let r=structuredClone(t),i=Jf[e],a=n.readability&&i?Object.fromEntries(i.map(e=>[e,{amplitude:e===`torso`?[.35,-1.95]:e.startsWith(`pants`)?[.6,-1.5]:[.75,-1.65],delay:e===`torso`?0:e.startsWith(`pants`)?.12:.08}])):qf[e];if(!a)return r;if(r.image.width!==1672||r.image.height!==(e===`print`?940:941))throw Error(`World cloth requires the native station reference dimensions`);let o=r.layers.find(e=>e.id===`resident`);if(!o||o.parent||o.motion)throw Error(`World cloth requires a stationary resident root`);if(n.readability)for(let e of r.layers)/^(?:bare-shoulder|lap-belt|pelvis)$/.test(e.id)&&delete e.motion;let s=r.layers.filter(e=>e.parent&&([`fixed`,`head`,`face`,`hair`,`hand`,`strap`,`coat`].includes(e.role)||e.id===`forearm-free`||e.id===`free-forearm`||n.readability&&!Object.hasOwn(a,e.id)&&[`body`,`arm`,`leg`].includes(e.role))).map(e=>e.sourcePolygon);for(let[e,t]of Object.entries(a)){let i=r.layers.find(t=>t.id===e);if(!i?.motion||i.parent!==`resident`||![`body`,`arm`,`leg`].includes(i.role)||!n.readability&&i.revealTextureId!==r.originalTextureId)throw Error(`Changed world cloth ownership: `+e);i.motion={...i.motion,kind:`breath`,amplitudePixels:t.amplitude,interiorCloth:{fixedBandPixels:3,featherPixels:12,meshSpacingPixels:10,delaySeconds:t.delay,protectedPolygons:structuredClone(s)}}}return r.review.worldResidentCloth={version:n.readability?2:1,layerIds:Object.keys(a),mode:`interior-cloth`,sourcePixelsRedrawn:!1,originalUsedAsErasure:!1,visualApproved:!1,boundary:`actual-native-polygons-and-contact-ownership-fixed`,breathPeriodSeconds:6,peakPixels:`1–2 before contact attenuation`,limitations:[`Only internal folds deform; joints and outer silhouettes keep the original resting pose.`,`Coat and strap free ends still require independently erased repair artwork.`]},r}var Xf={straps:`__worldStrapsRepair`,hem:`__worldHemRepair`};Xf.straps,Xf.hem,Xf.straps,Xf.hem;var Zf=(e,t)=>({a:e,b:t,side:-1}),Qf=(e,t)=>({a:e,b:t,side:1}),$f={entry:[{id:`coat-left-hem`,kind:`hem`,subtractFrom:[`resident`,`sleeve-free`,`pants-left`],amplitude:[1.2,.55],delay:.06,polygon:[[207,473],[237,491],[258,512],[261,543],[247,570],[229,600],[212,624],[213,622],[205,599],[187,582],[165,568],[157,551],[167,524],[179,493],[188,463]],body:{clips:[Zf([275,516],[251,558]),Zf([251,558],[232,601])],extra:[[[210,478],[237,491],[248,502],[232,498]]]},note:`Mostly exterior over the old bench; B contains only the upper sleeve contact and a narrow right-side trouser overlap.`},{id:`strap-sleeve`,kind:`straps`,subtractFrom:[`resident`,`sleeve-free`],amplitude:[1.15,.4],delay:.1,body:`all`,note:`Entire strap and ring lie over the loose sleeve.`},{id:`strap-left-trouser`,kind:`straps`,subtractFrom:[`resident`,`pants-left`,`coat-left-hem`,`coat-left-hem-reveal`,`coat-left-hem-reveal-1`],amplitude:[1.2,.45],delay:.1,body:{clips:[Zf([215,672],[218,698]),Zf([218,698],[230,721])]},note:`Lower ring crosses the left trouser outline; its exterior portion reveals the new world.`},{id:`strap-lap`,kind:`straps`,subtractFrom:[`resident`,`pants-right`],amplitude:[1.15,.4],delay:.1,body:`all`,note:`The lap strap lies on black lap fabric between the thighs, above the seat gap; no bench pixels belong to B.`}],street:[{id:`coat-left-hem`,kind:`hem`,subtractFrom:[`resident`,`pants-left`],amplitude:[1.2,.5],delay:.06,polygon:[[320,447],[346,458],[362,475],[359,503],[345,534],[335,560],[321,583],[312,604],[307,576],[311,550],[319,522],[320,494],[315,475],[312,454]],body:{clips:[Zf([381,423],[354,449]),Zf([354,449],[334,480]),Zf([334,480],[322,512]),Zf([322,512],[314,546]),Zf([314,546],[309,575]),Zf([309,575],[318,603])]},note:`Inner half overlays trousers; the narrow outer hanging edge reveals the new world.`},{id:`coat-right-hem`,kind:`hem`,subtractFrom:[`resident`,`pants-right`],amplitude:[1.2,.5],delay:.06,polygon:[[508,441],[526,441],[529,461],[535,483],[538,508],[540,532],[537,552],[541,580],[542,614],[529,622],[520,602],[522,573],[520,548],[514,516],[515,480]],body:{clips:[Qf([505,446],[517,479]),Qf([517,479],[527,515]),Qf([527,515],[535,552]),Qf([535,552],[540,588]),Qf([540,588],[539,615]),Qf([539,615],[532,649])]},note:`Body repair stops at the native right trouser outline; exterior cloth cannot carry old shrubs or pavement.`},{id:`sleeve-left-strap`,kind:`straps`,subtractFrom:[`resident`,`sleeve-left`],amplitude:[1.15,.4],delay:.1,body:`all`,note:`Short sleeve strap and ring are entirely backed by sleeve cloth.`},{id:`pants-left-strap`,kind:`straps`,subtractFrom:[`resident`,`pants-left`],amplitude:[1.2,.45],delay:.1,body:`all`,note:`Long left strap is on the trouser face, including its terminal ring.`},{id:`pants-right-strap`,kind:`straps`,subtractFrom:[`resident`,`pants-right`,`coat-right-hem`,`coat-right-hem-reveal`],amplitude:[1.15,.4],delay:.1,body:{clips:[Qf([527,515],[535,552]),Qf([535,552],[540,588]),Qf([540,588],[539,615]),Qf([539,615],[532,649]),Qf([532,649],[527,680])]},note:`Ring partly overhangs the right leg; remove its copy from the independently repaired coat plate as well.`}]};function ep(e,t){let n=e.map(e=>[e[0],e[1]]);for(let{a:e,b:r,side:i}of t){let t=t=>i*((r[0]-e[0])*(t[1]-e[1])-(r[1]-e[1])*(t[0]-e[0])),a=[];for(let e=0;e<n.length;e++){let r=n[e],i=n[(e+1)%n.length],o=t(r),s=t(i),c=o>=-1e-8,l=s>=-1e-8;if(c&&a.push(r),c!==l){let e=o/(o-s);a.push([r[0]+(i[0]-r[0])*e,r[1]+(i[1]-r[1])*e])}}if(n=a.filter((e,t)=>!a.slice(0,t).some(t=>Math.hypot(e[0]-t[0],e[1]-t[1])<1e-6)),n.length<3)return[]}let r=n.reduce((e,t,r)=>{let i=n[(r+1)%n.length];return e+t[0]*i[1]-t[1]*i[0]},0);if(Math.abs(r)<=.01)return[];let i=Math.sign(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-n[1]*i[0]},0));return n.map(t=>{if(e.some(e=>Math.hypot(t[0]-e[0],t[1]-e[1])<1e-6))return t;for(let n=0;n<e.length;n++){let r=e[n],a=e[(n+1)%e.length],o=a[0]-r[0],s=a[1]-r[1],c=Math.hypot(o,s),l=((t[0]-r[0])*o+(t[1]-r[1])*s)/(c*c);if(l>=0&&l<=1&&Math.hypot(t[0]-r[0]-l*o,t[1]-r[1]-l*s)<1e-6)return[t[0]-i*s/c*1e-5,t[1]+i*o/c*1e-5]}return t})}function tp(e,t,n={}){let r=structuredClone(t),i=$f[e];if(!i)return r;if(r.image.width!==1672||r.image.height!==941)throw Error(`World free parts require native entry/street 1672x941 reference`);let a=[];for(let e of i){let t=r.layers.find(t=>t.id===e.id);if(!t?.motion||!t.parent||t.role!==(e.kind===`hem`?`coat`:`strap`))throw Error(`Changed free-part source ownership `+e.id);t.sourcePolygon=structuredClone(e.polygon??t.sourcePolygon);let i=e.body===`all`?[structuredClone(t.sourcePolygon)]:[ep(t.sourcePolygon,e.body.clips),...e.body.extra??[]].filter(e=>e.length>=3);if(t.ownership={subtractFrom:[...e.subtractFrom],footprintPolygons:[structuredClone(t.sourcePolygon)],bodyRevealPolygons:structuredClone(i)},t.revealTextureId=Xf[e.kind],delete t.revealRegistration,t.motion={...t.motion,kind:`sway`,amplitudePixels:e.amplitude,freeEnd:{delaySeconds:e.delay}},delete t.motion.interiorCloth,n.readability){let n=Math.hypot(...e.amplitude),r=e.kind===`hem`?3:2.6;t.motion.amplitudePixels=e.amplitude.map(e=>e/n*r),t.motion.worldReadability={kind:`repaired-free-end`,delaySeconds:e.delay}}a.push({id:t.id,textureId:t.revealTextureId,subtractFrom:[...e.subtractFrom],bodyPolygonCount:i.length,sourcePolygon:structuredClone(t.sourcePolygon),bodyRevealPolygons:structuredClone(i),note:e.note})}if(r.revealRegistrations)for(let e of Object.values(Xf))delete r.revealRegistrations[e];for(let e of r.layers.filter(e=>e.ownership))try{cd(r.layers.map(t=>t===e?t:{...t,ownership:void 0}),r.image)}catch(t){throw Error(`World free part ${e.id}: ${t.message}`)}return r.review.worldFreeParts={version:n.readability?2:1,sourcePixelsRedrawn:!1,sourceDimensions:[1672,941],repairRegistration:`same-size-identity`,visualApproved:!1,parts:a,peakPixels:n.readability?`hem 3 / strap 2.6`:`<=1.5`,windPeriodSeconds:n.readability?4.8:8,limitations:[`Manual P/B contour candidates require rendered motion review at both wind extrema.`,`Only declared cloth/body portions sample repair paint; old scene and bench pixels outside B remain transparent.`]},r}var np=e=>{let t=2166136261;for(let n of JSON.stringify(e))t=Math.imul(t^n.charCodeAt(0),16777619)>>>0;return t.toString(16).padStart(8,`0`)},rp=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);function ip(e,t){return e.some(e=>id(e,t))||t.some(t=>id(t,e))?!0:e.some((n,r)=>t.some((i,a)=>{let o=e[(r+1)%e.length],s=t[(a+1)%t.length];return rp(n,o,i)*rp(n,o,s)<0&&rp(i,s,n)*rp(i,s,o)<0}))}function ap(e,t,n={}){let r=op[e];if(!r)throw Error(`Unknown world hair station`);let i=structuredClone(t);if(i.image.width!==1672||i.image.height!==r.height||i.originalTextureId!==`original`)throw Error(`World hair ownership requires the frozen native source`);let a=new Set(Object.keys(n));for(let e of a)if(!r.layers.some(t=>t.id===e&&t.kind===`pending-boundary`)||!Array.isArray(n[e]))throw Error(`Unknown or invalid mixed hair boundary: `+e);let o=r.layers.filter(e=>e.kind!==`pending-boundary`||a.has(e.id)),s=r.layers.filter(e=>e.kind===`pending-boundary`&&!a.has(e.id));if(i.layers.filter(e=>e.role===`hair`&&e.motion).length!==r.layers.length)throw Error(`Changed native hair layer inventory`);for(let t of r.layers){let n=i.layers.find(e=>e.id===t.id);if(!n||n.role!==`hair`||!n.motion||n.parent!==`resident`||np(n.sourcePolygon)!==t.polygonFingerprint||n.revealTextureId!==`detailReveal`||n.revealRegistration)throw Error(`Changed native hair contract: ${e}/${t.id}`)}for(let e of o){let t=i.layers.find(t=>t.id===e.id);t.ownership={subtractFrom:[`resident`],bodyRevealPolygons:a.has(e.id)?structuredClone(n[e.id]):e.kind===`body`?[structuredClone(t.sourcePolygon)]:[]}}let c=new Set([`resident`]);for(let e=0;e<i.layers.length;e++)for(let e of i.layers)e.parent&&c.has(e.parent)&&c.add(e.id);let l={};for(let e of o){let t=i.layers.findIndex(t=>t.id===e.id),n=i.layers[t],r=new Set([`resident`]);for(let[e,a]of i.layers.entries()){if(!c.has(a.id)||a.id===n.id||a.depth>n.depth||a.depth===n.depth&&e>=t||!ip(n.sourcePolygon,a.sourcePolygon))continue;r.add(a.id);let o=a.parent&&(a.revealTextureId||i.revealTextureId)?a.ownership?.bodyRevealPolygons.length??1:0;for(let e=0;e<o;e++)r.add(`${a.id}-reveal${e?`-${e}`:``}`)}n.ownership.subtractFrom=[...r],l[n.id]=[...r]}return cd(i.layers,i.image),i.review.worldHairOwnership={version:2,station:e,classification:`docs/journey/v4/continuous-world-hair-ownership-v1.json`,activeLayerIds:o.map(e=>e.id),mixedLayerIds:[...a],bodyLayerIds:o.filter(e=>i.layers.find(t=>t.id===e.id).ownership.bodyRevealPolygons.length>0).map(e=>e.id),worldLayerIds:o.filter(e=>i.layers.find(t=>t.id===e.id).ownership.bodyRevealPolygons.length===0).map(e=>e.id),pendingLayerIds:s.map(e=>e.id),targets:l,artworkMissing:!1,pendingEvidence:s.length?`Mixed repaired-body contour boundaries are unverified; pending layers retain original authored motion and reveal.`:null,sourcePixelsRedrawn:!1,sourcePolygonsChanged:!1,motionChanged:!1,visualApproved:!1},i}var op={entry:{height:941,layers:[{id:`hair-left-outer`,kind:`pending-boundary`,polygonFingerprint:`cc22d26e`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-1`,kind:`pending-boundary`,polygonFingerprint:`44032c69`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-2`,kind:`pending-boundary`,polygonFingerprint:`7b4250d0`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-3`,kind:`pending-boundary`,polygonFingerprint:`f6ae8c2a`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-chest-left`,kind:`body`,polygonFingerprint:`7205ae3c`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-chest-middle`,kind:`body`,polygonFingerprint:`cea6f981`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-chest-tip`,kind:`body`,polygonFingerprint:`4df4ac24`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-right-outer`,kind:`pending-boundary`,polygonFingerprint:`50af7dd9`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-1`,kind:`pending-boundary`,polygonFingerprint:`e272da00`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-2`,kind:`pending-boundary`,polygonFingerprint:`8396ce57`,reason:`Native 8x inspection corrected the initial world-only classification: the lower tip meets the support sleeve near x582..584/y429..435; its small body overlap needs an explicit mixed boundary.`}]},street:{height:941,layers:[{id:`hair-left-outer`,kind:`pending-boundary`,polygonFingerprint:`2fad2484`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-1`,kind:`pending-boundary`,polygonFingerprint:`0e9cf316`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-2`,kind:`pending-boundary`,polygonFingerprint:`8b056abf`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-chest-left`,kind:`body`,polygonFingerprint:`5930bb72`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-chest-middle`,kind:`body`,polygonFingerprint:`090b5ae0`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-right-outer`,kind:`pending-boundary`,polygonFingerprint:`2cbd2cbc`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-1`,kind:`pending-boundary`,polygonFingerprint:`edb416c1`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-2`,kind:`pending-boundary`,polygonFingerprint:`706e468e`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`}]},print:{height:940,layers:[{id:`hair-left-outer`,kind:`pending-boundary`,polygonFingerprint:`b9757480`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-a`,kind:`pending-boundary`,polygonFingerprint:`32b39d48`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-b`,kind:`pending-boundary`,polygonFingerprint:`7840de87`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-chest-left-a`,kind:`body`,polygonFingerprint:`a702523d`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-chest-left-b`,kind:`body`,polygonFingerprint:`86f888ee`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-right-outer-a`,kind:`pending-boundary`,polygonFingerprint:`b0a5d69c`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-b`,kind:`pending-boundary`,polygonFingerprint:`85925cb0`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-c`,kind:`pending-boundary`,polygonFingerprint:`4d043de3`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-chest-right`,kind:`body`,polygonFingerprint:`1ae3e119`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`}]},workshop:{height:941,layers:[{id:`hair-left-outer-a`,kind:`world`,polygonFingerprint:`a934362a`,reason:`Complete footprint lies outside the repaired body; no old scene is sampled.`},{id:`hair-left-outer-b`,kind:`pending-boundary`,polygonFingerprint:`d3d1504a`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-short-tip`,kind:`pending-boundary`,polygonFingerprint:`c02ff86b`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-chest`,kind:`body`,polygonFingerprint:`4f358671`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-left-inner`,kind:`body`,polygonFingerprint:`4a41044a`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-right-chest`,kind:`pending-boundary`,polygonFingerprint:`2357b8a5`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-outer`,kind:`pending-boundary`,polygonFingerprint:`fa2e6d5b`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-fine`,kind:`pending-boundary`,polygonFingerprint:`2c5d7328`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`}]},glass:{height:941,layers:[{id:`hair-left-outer`,kind:`pending-boundary`,polygonFingerprint:`22364145`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-a`,kind:`pending-boundary`,polygonFingerprint:`bd862cca`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-gold-b`,kind:`pending-boundary`,polygonFingerprint:`34df1148`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-chest-left-a`,kind:`body`,polygonFingerprint:`ac107ed2`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-chest-left-b`,kind:`body`,polygonFingerprint:`804589d5`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-right-outer-a`,kind:`pending-boundary`,polygonFingerprint:`7302b57c`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-b`,kind:`pending-boundary`,polygonFingerprint:`992b3653`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-gold-c`,kind:`pending-boundary`,polygonFingerprint:`ed4622a2`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-chest-right`,kind:`body`,polygonFingerprint:`6467e186`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`}]},cinema:{height:941,layers:[{id:`hair-left-rear-a`,kind:`pending-boundary`,polygonFingerprint:`59a594ba`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-rear-b`,kind:`pending-boundary`,polygonFingerprint:`edd98e43`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-outer-low`,kind:`pending-boundary`,polygonFingerprint:`5914dec2`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-chest-a`,kind:`pending-boundary`,polygonFingerprint:`0d6b7cc1`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-left-chest-b`,kind:`body`,polygonFingerprint:`a93bfcfd`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-left-chest-c`,kind:`body`,polygonFingerprint:`0d12cd3a`,reason:`Complete footprint lies over repaired chest clothing, skin or fixed dark inner hair.`},{id:`hair-right-outer-a`,kind:`pending-boundary`,polygonFingerprint:`6382616b`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-outer-b`,kind:`pending-boundary`,polygonFingerprint:`b04280b3`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-inner-a`,kind:`pending-boundary`,polygonFingerprint:`ff3cfd35`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`},{id:`hair-right-fine`,kind:`pending-boundary`,polygonFingerprint:`935a9ff2`,reason:`Crosses or approaches repaired scalp/shoulder/sleeve contour; native under-body boundary remains unverified. Keep authored motion pending evidence.`}]}},sp={entry:{"hair-left-outer":[[[371,199],[361.24999161556383,213.9999945501165],[368,202],[369.830512789127,199.55933105524622]],[[202.5940497707599,357.8613834621764],[202,360],[196,375],[194.58824520639502,364.4117633842468],[195,364],[201,359]]],"hair-left-gold-1":[[[328.5483812843891,244.3225725078273],[308,259],[303.1162728915495,262.8372014391456],[308,256],[314,250],[321,246]],[[255.04662374824204,307.5284919466502],[243,326],[235,344],[232,350],[221,349],[220.57832322355884,343.51807152219],[232,334],[238,324],[238,320],[242,314],[251,309]]],"hair-left-gold-2":[[[357,228],[344,247],[321,268],[295,290],[289.01369138014167,296.3013629755214],[290,294],[294,283],[295.5862129473847,279.03449072024193],[318,262],[335.2800072138762,244.00000692531827],[339,244],[349.59259773755053,232.44445301937327]],[[284.37164025957765,301.18773257610735],[276,310],[265,330],[259,340],[250,347],[242,345],[242,333],[253,318],[265.2535286251356,304.11268267255537],[273,302]]],"hair-left-gold-3":[[[329.3835540244418,244.1369798248858],[321,254],[302,272],[295.3684135268651,279.5789407833739],[298,273],[303,263],[305.3437563323779,259.718757739573],[316,251],[323.06422629796003,245.54129231652]],[[277.55465811878685,301.67466147688566],[264,324],[251,340],[239,342],[232,337],[245,330],[254,313],[259.1459539877124,306.0378437817466],[262,305],[273,302]]],"hair-right-outer":[[[548,224],[552.1100820047079,241.61468117137613],[550,249],[547,260],[547.0000096152395,260.9999972527887],[545,254]]],"hair-right-gold-1":[[[531,271],[540,291],[544.0200712511953,299.65863874926805],[543,317],[542.5374542838963,325.3259876428796],[539,316],[529,287]],[[576.9302252101055,417.32557461254896],[568,427],[557,431],[565,420],[571.8571514320732,408.5714337163875],[573,410],[576,415]]],"hair-right-gold-2":[[[583.3181829224973,431.5908991520726],[578,431],[581.3939467419725,427.32323910603105],[583,430]]]},street:{"hair-left-outer":[[[398,165],[389,184],[370,199],[367.99999411828304,200.45453736718315],[368,199],[370,193],[372.028175867731,188.26761291580394],[384,177]]],"hair-left-gold-1":[[[393,185],[384,202],[368.99999355864253,214.63157129825603],[369,211],[368.5912473523962,208.5474528748652],[381,198]],[[367.6388824475345,215.77777012866403],[365,218],[358.7708271702524,222.874992124948],[362,219]],[[316.999990000002,281.42857142857],[317,288],[310,291],[308.76191412519375,287.6984091871806],[312,285]]],"hair-left-gold-2":[[[401,195],[394,215],[378,232],[362,248],[354,267],[350,274],[342,274],[346,260],[355,243],[372,228],[389,210]]],"hair-right-outer":[[[497,185],[500.9574370646,202.14893841880308],[499,209],[494.1875099733372,223.43750072975638]],[[513.5555484844882,339.44443737337724],[508,345],[498,347],[507,338],[509.2500086824314,334.0625049613894]]],"hair-right-gold-1":[[[484,215],[484,236],[486.0774097881012,242.82580936322614],[486,243],[479,244],[480,249],[484,256],[486,268],[488.911774299537,284.49999717833475],[487,278],[480,258],[477,238]],[[502.41859472838627,302.6511615503517],[501,314],[494,325],[483,335],[476,333],[486,322],[492,308],[492,295],[489.09678378720304,285.12902943640074],[492,289],[496,295],[498,300]]],"hair-right-gold-2":[[[508.30136063224273,332.87670848261115],[507,336],[495,344],[486,342],[497,332],[503,318],[504.935493770463,304.4516143174396],[507,306],[507,311],[510,315],[510,318],[507,320],[504,325],[506,330]]]}},cp={side:`right`,points:[[345,165],[334,184],[320,202],[303,218],[288,230],[274,237],[265,241]]},lp={side:`right`,points:[[259,246],[249,260],[243,271],[233,281],[221,292],[214,297],[207,299],[200,308],[191,321],[180,332],[168,341],[151,347],[140,350]]},up={side:`left`,points:[[501,190],[501,213],[500,226],[497,242],[491,260],[486,275],[484,300],[485,321],[486,337],[486,342],[490,350],[493,360],[498,373],[493,383],[503,393],[503,402],[497,407],[503,419],[510,429],[518,434],[522,439],[520,444],[520,448]]},dp={side:`right`,points:[[325,201],[312,205],[303,215],[298,224],[294,237],[293,243],[285,246],[277,250],[272,256],[270,263],[267,269],[260,276],[253,284],[246,291],[239,300],[235,310]]},fp={side:`left`,points:[[447,194],[443,202],[437,211],[430,220]]},pp={side:`left`,points:[[434,241],[443,245],[449,251],[453,260],[456,272],[458,282],[460,293],[460,299],[457,303]]},mp={side:`left`,points:[[459,304],[470,307],[479,313],[483,319],[488,323],[493,328],[497,334],[492,338],[482,342],[478,348]]},hp={print:{"hair-left-outer":[[343,167],[334,185],[315,203],[292,221],[267,235],[244,241],[265,241],[296,234],[318,221],[338,201],[350,182]],"hair-left-gold-a":[[267,250],[250,266],[228,278],[209,292],[194,310],[180,325],[168,334],[164,347],[153,348],[153,333],[165,315],[183,296],[204,278],[232,264]],"hair-left-gold-b":[[246,267],[239,286],[224,301],[211,318],[204,336],[191,346],[180,345],[188,334],[191,320],[203,302],[222,285]],"hair-right-outer-a":[[485,200],[499,235],[501,270],[516,302],[534,326],[543,351],[548,376],[555,388],[554,404],[547,399],[540,377],[531,352],[518,329],[505,307],[494,280],[488,253]],"hair-right-gold-b":[[478,270],[489,296],[503,321],[522,342],[533,366],[540,394],[540,421],[528,439],[518,444],[525,430],[528,410],[525,387],[514,362],[498,342],[486,320]],"hair-right-gold-c":[[461,277],[469,302],[476,327],[485,345],[492,363],[499,380],[496,395],[489,394],[488,380],[482,363],[473,347],[464,323],[458,301]]},workshop:{"hair-left-outer-b":[[319.22,179.38],[299.89,202.99],[278.52,222.65],[259.29,246.96],[250.51,269.86],[257.58,279.28],[258.42,278.72],[253.49,270.14],[262.71,249.04],[281.48,225.35],[302.11,205.01],[320.78,180.62]],"hair-left-short-tip":[[298.24,219.36],[281.85,238.04],[267.27,255],[258.14,278.27],[252.5,294.06],[260.52,306.28],[261.48,305.72],[255.5,293.94],[261.86,279.73],[270.73,257],[284.15,239.96],[299.76,220.64]],"hair-right-chest":[[438.04,204.28],[444.12,228.69],[453.6,250.7],[457.07,276.64],[464.52,300.3],[463.2,316.13],[454.63,324.53],[455.37,325.47],[466.8,317.87],[469.48,299.7],[462.93,275.36],[458.4,249.3],[447.88,227.31],[439.96,203.72]],"hair-right-outer":[[459.05,219.3],[466.62,244.59],[480.23,270.94],[491.14,291.74],[497,313.1],[493.63,331.38],[484.62,343.68],[485.38,344.32],[496.37,332.62],[501,312.9],[494.86,290.26],[483.77,269.06],[469.38,243.41],[460.95,218.7]],"hair-right-fine":[[475.41,267.37],[485.16,283.54],[497.91,303.6],[505.76,321.18],[503.12,336.52],[493.69,344.61],[494.31,345.39],[504.88,337.48],[508.24,320.82],[500.09,302.4],[486.84,282.46],[476.59,266.63]]}};function gp(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length],o=t(i),s=t(a),c=o>=0,l=s>=0;if(c&&n.push(i),c!==l){let e=o/(o-s);n.push([i[0]+(a[0]-i[0])*e,i[1]+(a[1]-i[1])*e])}}return n.filter((e,t)=>!n.slice(0,t).some(t=>Math.hypot(e[0]-t[0],e[1]-t[1])<1e-7))}function _p(e,t){let n=[];for(let{side:r,points:i}of t)for(let t=0;t<i.length-1;t++){let a=i[t],o=i[t+1],s=r===`right`?1:-1,c=gp(e,e=>e[1]-a[1]);c=gp(c,e=>o[1]-e[1]),c=gp(c,e=>s*(e[0]-a[0]-(o[0]-a[0])*(e[1]-a[1])/(o[1]-a[1])));let l=c.reduce((e,t,n)=>{let r=c[(n+1)%c.length];return e+t[0]*r[1]-t[1]*r[0]},0);if(c.length<3||Math.abs(l)<1e-4)continue;let u=Math.sign(e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return t+n[0]*i[1]-n[1]*i[0]},0));c=c.map(t=>{if(e.some(e=>Math.hypot(t[0]-e[0],t[1]-e[1])<1e-7))return t;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length],a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o),c=((t[0]-r[0])*a+(t[1]-r[1])*o)/(s*s);if(c>=0&&c<=1&&Math.hypot(t[0]-r[0]-c*a,t[1]-r[1]-c*o)<1e-7)return[t[0]-u*o/s*1e-5,t[1]+u*a/s*1e-5]}return t}),n.push(c)}return n}var vp={print:{},workshop:{}};for(let[e,t]of Object.entries(hp.print))vp.print[e]=_p(t,[e===`hair-left-outer`?cp:e.startsWith(`hair-left-`)?lp:up]);for(let[e,t]of Object.entries(hp.workshop))vp.workshop[e]=_p(t,e.startsWith(`hair-left-`)?[dp]:[fp,pp,mp]);var yp=vp,bp={glass:{"hair-left-outer":[[[391.0000006564566,167.99999924563622],[401.0350877209657,150.66666766666526],[402.14388474310266,149.1618714924368],[409.99999901451883,157.99999983021536]],[[379.00000058677523,202.99999919025015],[409.9999994541195,158.00000083786307],[397.999999080855,179.0000003939193]],[[329.0000008129905,238.99999941772302],[378.9999991898833,203.00000058626867],[353.0000007071068,221.99999929289322]],[[298.346939701314,250.81632615260773],[299.49484632406853,249.38144303034042],[328.99999906415485,239.00000035241152],[301.0000009108687,249.9999995873038]],[[375.0000007282,186.9999993146353],[391.0000003162278,168.0000009486833],[409.99999918932076,158.00000058549057]],[[329.00000074583664,238.9999993338711],[409.9999993356362,158.00000074740933],[378.9999990962622,202.99999957191366]],[[299.49484624514207,249.3814428320827],[303.00000099622054,244.99999991313985],[303.47257483941746,244.61603373313918],[328.9999990349275,239.00000026198302]],[[351.0000007599025,207.99999934996293],[375.0000008087361,186.9999994118283],[409.9999992344556,158.00000064338306]],[[308.94684074451004,243.41169463668177],[319.00000050647577,232.0000008622544],[326.139999502601,225.65333420085523],[328.99999909993994,238.99999956423414]],[[303.4725746750162,244.61603320556145],[318.9999992711161,232.00000068463734],[308.94684033841264,243.4116943031905]],[[329.00000067691417,238.999999263938],[351.000000889567,207.99999954319532],[409.9999992698125,158.00000068324684]],[[326.14000097253444,225.65333310057446],[329.7234052106603,222.46808540188815],[350.999999266411,208.00000067959337],[329.0000003101856,238.999999049324]]],"hair-left-gold-a":[[[283.89473771019755,271.05263108254456],[285.23595596921433,268.9662917269493],[294.00000098994457,264.0000001414558],[319.999999093148,253.00000042144927]],[[280.0000008137335,283.99999941876183],[319.9999992350888,253.00000064413575],[302.9999991055728,269.9999995527864]],[[276.2758628341148,283.3017234940781],[282.00000098973345,273.9999998570763],[283.8947377558618,271.05263198520953],[319.9999991561387,253.00000053656137],[280.0000006109432,283.99999920832556]],[[273.1428578317854,288.571427846599],[274.0000008226689,286.9999994314789],[276.2758618972642,283.30172512308],[279.9999990762182,284.0000003829193]],[[271.80487875795785,291.0243895388723],[273.1428580764456,288.5714282130815],[279.9999992078125,284.00000061027777]]],"hair-left-gold-b":[[[271.6000006434649,291.39999923452433],[274.0000007800215,286.9999993742473],[275.3521136107852,284.80281654604664],[290.99999925925687,272.0000006717883]],[[272.00000050769233,308.99999913846153],[290.99999960005556,272.00000091653936],[285.99999900611624,290.00000011043153]],[[250.00000070684874,338.9999992926373],[251.57894834466939,335.84210504650343],[259.99999939390653,327.0000007953934],[252.8405600916803,339.72789249419026]],[[245.42666742977065,345.5333326870576],[249.99999993506685,339.00000099788963],[252.84055909511088,339.72789404711705],[250.9999992933413,342.99999929244547]],[[266.2500005108352,304.9999991403212],[268.0000006965178,297.99999928246046],[271.60000099708253,291.40000007633165],[290.9999993494879,272.0000007594959]],[[260.00000050753584,326.9999991383694],[290.9999995224867,272.0000008786245],[272.00000034570536,308.99999906165687]],[[251.57894792927843,335.84210443524546],[255.0000003611639,329.00000093250236],[255.1875001759779,328.7187509843941],[259.99999917649166,327.00000056730414]],[[255.18750059527653,328.7187491964791],[260.9999995908521,320.0000009124682],[266.999999435048,312.00000082512383],[256.84641685369775,328.1262789815858]],[[266.0000006920503,305.9999992781507],[266.2500007275303,304.99999931392443],[290.99999944516395,272.0000008319597],[277.9473675891586,295.15789529177704],[267.00000042929275,311.9999990968347]],[[256.84641694745574,328.1262790385295],[266.9999996015066,312.0000009171697],[277.9473678988663,295.1578955896731],[260.0000004303254,326.99999909732617]]],"hair-right-outer-a":[[[523.0000000525545,195.00000099861805],[525.8486645820567,235.8308595397981],[524.5647921698287,238.03178384109506]],[[523.0000002376604,195.0000009713483],[532.1204475774655,223.1904753918341],[530.999999743369,226.9999990334905],[529.1935483547368,230.0967731940721]],[[523.0000001182543,195.00000099298336],[529.1935480781409,230.09677324247204],[525.8486646990832,235.8308595341814]]],"hair-right-gold-b":[[[543.0000004293828,417.99999909687745],[548.0540539075615,402.8378388270496],[549.9999994486968,405.000000834305],[547.2631578190479,411.8421042660265]],[[534.0000006839412,421.9999992704628],[539.9999998516596,410.00000098893634],[542.9999990513166,417.9999996837722]],[[540.0000008715668,409.9999995097234],[545.4104475971682,399.90049849889385],[548.0540534234665,402.8378386139559],[543.0000001075719,417.9999990058027]],[[540.0000003082058,409.9999990486803],[542.2656250513833,396.406250998679],[545.4104469696568,399.9004981235588]]],"hair-right-gold-c":[[[496.00000018909714,301.9999990180416],[499.4214874894299,278.90495967118096],[499.9999997969873,282.00000097917615],[497.999999970309,294.9999990004407],[496.142857311238,302.42857044284943]],[[499.4214884620295,278.90495919012477],[499.9999999878445,275.0000009999261],[500.3733330980086,280.97333236141657],[499.9999999815546,281.99999900017013]],[[527.2500002640888,371.0000009644984],[527.3846155707013,371.2307702133027],[527.9999997696953,373.9999990268814]],[[518.0000007071068,388.9999992928932],[527.9999995788887,374.000000907009],[524.9999996582569,386.99999906020656]],[[508.547170172539,342.415095272104],[509.72887347119956,343.704226324885],[515.9999996679985,362.9999990567211],[509.00000039115577,344.0000009203245]],[[500.00000013041546,275.00000099145944],[500.9790204646498,279.30769145012465],[500.3733333637362,280.9733323337956]],[[526.9505706598429,370.4866929634213],[527.2500001782896,371.00000098397805],[527.9999997337059,373.9999990361082]],[[518.0000004027386,388.999999084685],[519.0000008479983,379.00000052999894],[527.9999993112506,374.00000072499944]],[[509.7288736223159,343.7042262759111],[510.00000036341186,344.00000093162873],[513.7777768210335,349.66666695759704],[515.9999997297268,362.9999990372163]],[[514.0655741931855,350.09836156201015],[522.0000000006308,362.00000099999966],[526.9505695157054,370.4866914522722],[527.9999993431003,373.999999246022],[519.000000245029,378.9999990304843]],[[513.7777779543674,349.6666676509512],[514.0655739275885,350.09836164332086],[518.9999998254898,378.99999901534466],[515.9999998877054,362.999999006325]]]},cinema:{"hair-left-rear-a":[],"hair-left-rear-b":[[[163.18935039042935,409.76745590886435],[163.82635655204265,409.3215513869083],[164.63999947797615,412.71999914706913],[163.36000019253234,413.27999901870936]],[[161.80780322184162,410.7345388833531],[162.9035990946049,409.9674815133275],[163.35999967565436,413.27999905406136]],[[162.903599481386,409.96748149811805],[163.18935000816617,409.76745597211175],[163.35999990851064,413.27999900419394]]],"hair-left-outer-low":[[[189.1300009982317,391.71000005944296],[193.85999907152333,391.3100003713907],[194.13999908675885,392.68999959258053]],[[184.67091936705833,393.2632652820989],[185.00000099728192,393.0000000736766],[185.35981253176666,392.7201467754526],[194.1399990029482,392.69000007673174],[188.86999924541024,394.2899993438032]],[[184.53827978304358,392.72296749203986],[185.3598105806013,392.720146802487],[184.9999998199902,392.9999990163351]],[[180.00000054966355,388.0000008353861],[180.8278231980106,387.33774243296443],[182.0225426586388,391.2135250552266],[181.187533701088,390.7125194005668],[180.0000009157456,388.87306741206794]],[[184.13009692305775,392.4780575337764],[189.12999914350246,391.71000051615107],[194.13999900110602,392.6899999529806],[184.5382798007654,392.7229671898409]],[[183.19802828414555,391.9188161454952],[185.5099999913372,389.27000099996246],[189.12999900501669,391.70999989995886],[184.1300966917897,392.47805691414106]],[[182.6292243535208,391.5775334717886],[183.38893023279198,385.288856866835],[183.39298283277415,385.2856147859311],[185.50999904732143,389.2699996960205],[183.19802744399354,391.9188153969379]],[[180.8278238393821,387.33774220908157],[183.02461644812522,385.5803075956184],[182.57845300727672,391.5470709242583],[182.02254322002435,391.21352490906156]],[[182.57845328818513,391.54707091464803],[183.02461667053186,385.58030763005826],[183.3889300144481,385.28885685807955],[182.62922411934272,391.57753342201823]]],"hair-left-chest-a":[[[315.00000023799237,324.999999028733],[315.65512007446443,304.03618233748136],[319.999999895994,301.0000009945764],[321.0660978406452,300.3176981988243],[324.9999990243249,306.00000021922165]],[[320.0000007952541,300.9999993937235],[320.9478666690139,300.146920208228],[321.0660971629922,300.317697624653]],[[315.65512003822397,304.0361809797735],[315.69393239014767,302.7941951223237],[319.9999991268856,301.00000048751554]],[[323.00000003537605,379.9999990006259],[324.99999998165447,306.0000009998317],[324.9999995527864,341.0000008944272]],[[300.00000041549436,436.99999909040423],[322.99999966499036,380.0000009422147],[313.99999951435706,412.99999912584275]],[[297.00000029221854,459.9999990436484],[300.00000006049504,437.0000009981685],[304.9999990256088,447.0000002248595]],[[286.0000002747211,435.00000096152394],[296.9999994631245,459.9999991563385],[287.0000007071068,451.9999992928932]],[[306.00000012891525,388.9999990083444],[310.0000001240347,353.0000009922779],[314.999999849558,325.00000098861886]],[[315.0000004472136,325.0000008944272],[324.99999987202864,306.0000009917779],[322.9999999535386,379.9999990010799]],[[286.000000679408,435.00000073376066],[299.9999993708018,437.00000077724485],[296.999999835601,459.9999990136061]],[[306.0000003355188,388.9999990579665],[314.99999999159695,325.0000009999647],[322.9999995224867,379.9999991213755]],[[286.0000006933804,434.99999927942827],[322.9999995277786,380.00000088148],[300.000000150798,436.9999990114354]],[[298.0000004758186,414.99999912045655],[306.00000046788773,389.0000008837879],[322.99999930952424,380.0000007233555]],[[286.00000054694857,434.9999991628338],[298.00000065493055,414.9999992443109],[322.9999994326948,380.0000008235076]]],"hair-right-outer-a":[],"hair-right-outer-b":[[[437.0000004323117,395.0000009017244],[437.63048946322465,395.9107084511934],[437.68057000377723,396.82392733514644]],[[436.91640164922046,394.8188705577033],[437.0000002737333,395.0000009618053],[437.6805697888442,396.8239274201681],[437.74999978818937,398.08999902268926]],[[465.3100008353167,474.8799994502309],[465.7061898230979,474.045118109042],[465.9999993248346,474.9999992623336]],[[465.31000018037247,474.8799990164016],[465.4965135140975,473.3636700435014],[465.6112403396034,473.73653352747186]],[[448.4900005723731,414.6500008199933],[465.1486568071242,437.3716428188702],[465.7337765285161,438.83444200644686],[458.63000090229536,430.8399995688816]],[[446.00000047288177,408.00000088112597],[446.47969195191126,408.63959032158664],[446.93105396525056,409.9890697282497]],[[437.63049098300206,395.91070930116246],[445.99999929721315,407.99999928859944],[446.9310537396924,409.98906985833946],[448.4899995178961,414.64999912388595],[437.7500006126326,398.0900007903678]],[[465.3100003324765,474.87999905688844],[465.6112406739559,473.7365336375495],[465.7061891979433,474.04511784177987]],[[446.47969231024894,408.63959027031746],[446.4958352474599,408.6611141929736],[448.48999968343736,414.6499990514284]],[[446.49583548807504,408.6611140754432],[455.00000039771044,420.0000009175109],[461.8488799093383,430.27332003613185],[463.3905525526394,432.9763820668687],[465.1486569054115,437.3716427483934],[448.4900006615729,414.65000074988086]],[[461.8488810603905,430.2733216659241],[462.99999928810314,431.9999992977159],[463.3905526831695,432.9763819849058]]],"hair-right-inner-a":[[[434.70469808661045,390.026846632568],[435.3519998101595,391.42933431514825],[435.0000000038984,397.9999990000076]],[[451.60294149312057,415.47058918383664],[451.81818211093844,415.7575767137627],[455.99999969484065,428.9999990476987]],[[450.0000002714602,457.9999990375503],[455.9999998556931,429.00000098953296],[454.99999959386156,447.99999908618844]],[[443.0000008436615,452.9999994631245],[446.9999999655377,441.000000999406],[449.9999995861971,457.99999908963355]],[[437.00000043153864,395.0000009020943],[441.8461528475247,402.0000000523435],[442.3095972634352,409.2297203965625]],[[435.00000059820593,398.0000008013424],[435.35200027086375,391.429334295951],[437.00000019440284,395.00000098092204],[442.3095970206567,409.2297204976885],[442.9999997495242,419.99999903187717]],[[446.0000004570518,408.0000008894401],[451.6029413327395,415.4705892230087],[455.9999996115614,428.9999990785254],[455.9478257127093,429.2521729857145]],[[444.7433964514944,406.1849066347178],[446.00000017979454,408.0000009837042],[455.94782521989913,429.2521734148352],[449.99999997466574,457.99999900032094]],[[441.84615398162225,402.00000099078164],[443.6976744339802,404.67441960453294],[446.9999998717546,440.99999900825753],[443.00000027632353,419.9999990389353]],[[444.62162172647425,406.00901000349677],[444.7433963253638,406.1849066554699],[449.999999898083,457.9999990052071]],[[443.6976745335546,404.67441959802244],[444.6216217011473,406.0090100058418],[449.99999988083306,457.9999990071258],[446.99999995070664,440.99999900121566]]],"hair-right-fine":[]}},xp={...sp,...yp,...bp};function Sp(e,t){let n=xp[e];if(!n)throw Error(`Missing native world hair profile: `+e);let r=ap(e,t,n);if(r.layers.some(e=>e.role===`hair`&&e.motion&&!e.ownership))throw Error(`Incomplete world hair ownership: `+e);for(let e of r.layers.filter(e=>e.role===`hair`&&e.motion)){let t=e.motion,n=Math.hypot(t.tip[0]-t.root[0],t.tip[1]-t.root[1]);if(e.revealTextureId===r.originalTextureId||!e.ownership||!t.anchors?.some(e=>e.radius>=10&&e.point[0]===t.root[0]&&e.point[1]===t.root[1]))throw Error(`Unreadable world hair repair `+e.id);let i=/outer|rear|gold/.test(e.id),a=Math.min(i?5.2:3.2,n*.06),o=Math.hypot(...t.amplitudePixels);t.amplitudePixels=t.amplitudePixels.map(e=>e/o*a),t.worldReadability={kind:`repaired-hair`,delaySeconds:.06+.08*Math.min(1,n/240)}}if(r.eyes?.length===2){let e=Gu({left:r.eyes.find(e=>e.id===`left`),right:r.eyes.find(e=>e.id===`right`)});r.eyes=r.eyes.map(t=>({...t,...e[t.id]}))}return r.review.worldHairProfile={version:2,allHairClassified:!0,visualApproved:!1,sourcePixelsRedrawn:!1,poseChanged:!1,windPeriodSeconds:4.8,peakPixels:`outer up to 5.2; inner up to 3.2; short strands <= 6% of axis length`,tracking:`symmetric-native-iris-travel-and-160ms-fixation`},r}var Cp=.96,wp=Object.freeze({minY:20,maxY:859,maxZ:22}),Tp=Object.freeze({minY:-25,z:.8}),Ep=(e,t=-1,n=1)=>Math.max(t,Math.min(n,e));function Dp(e){let{height:t,aspect:n,cameraZ:r}=e,i=e.focusMix??0;if(![t,n,r].every(e=>Number.isFinite(e)&&e>0)||![e.look.x,e.look.y,i].every(Number.isFinite)||i<0||i>1)throw Error(`Invalid world observation`);let a=Cp,o=.66,s=1-o,c=t*(1-a)/2*n,l=Math.min(88,Math.max(0,c-3)/s),u=[wp,...e.residentEnvelopes??[]];if(u.some(e=>![e.minY,e.maxY,e.maxZ].every(Number.isFinite)||e.minY>e.maxY||e.maxZ<0))throw Error(`Invalid world resident envelope`);let d=Math.min(...u.map(e=>e.minY)),f=Math.max(...u.map(e=>e.maxY)),p=Math.max(...u.map(e=>e.maxZ)),m=r*a;if(p>=m)throw Error(`Resident envelope crosses observation camera`);let h=t*a/2,g=m/(m-Tp.z),_=m/(m-p),v=Math.max(Tp.minY+3+h/g,f-(h-8)/_),y=Math.min(d+(h-8)/_,t-3-h);if(v>y)throw Error(`Resident cannot fit supported observation framing`);let b=(v+y)/2,x=Math.min(64,(b-v)/(1-o/g),(y-b)/(1-o/_)),S=1-i,C=Ep(e.look.x)*l*S,w=-Ep(e.look.y)*x*S,T=b+(t/2-b)*i,E=T-h/g+w*(1-o/g),D=T+h+w*s,O=h+(d-T)*_-w*(_-o);return{dx:C,dy:w,compensation:o,framingScale:a,baseCameraZ:m,baseCameraY:T,framingShiftY:t/2-T,middleShift:{x:-C*s,y:-w*s},soleClearance:O,remainingMargin:{x:c-Math.abs(C)*s,y:Math.min(E-Tp.minY,t-D)}}}function Op(e,t,n){if(![e.x,e.y,t.center.x,t.center.y,n.left,n.top,n.width,n.height].every(Number.isFinite)||n.width<=0||n.height<=0)throw Error(`Invalid world gaze viewport`);let r=(e,t,n,r)=>{let i=e-t,a=Ep(i/Math.max(32,i<0?t-n:n+r-t)),o=Math.abs(a);return o<.018?0:Math.sign(a)*Math.sin((o-.018)/.982*Math.PI/2)};return{x:r(e.x,t.center.x,n.left,n.width),y:r(e.y,t.center.y,n.top,n.height)}}function kp(e){if(e.centers.length!==6||!Number.isFinite(e.minX)||!Number.isFinite(e.maxX)||e.minX>e.maxX||e.centers.some((t,n)=>!Number.isFinite(t)||t<e.minX||t>e.maxX||n>0&&t<=e.centers[n-1]))throw Error(`Invalid station stop centers/range`);let t=e.radius,n=typeof t==`number`?e.centers.map(()=>t):t;if(n.length!==6||n.some(e=>!Number.isFinite(e)||e<0))throw Error(`Invalid station stop radii`);for(let t=1;t<6;t++)if(e.centers[t-1]+n[t-1]>=e.centers[t]-n[t])throw Error(`Station viewing windows overlap`)}function Ap(e){if(!Number.isSafeInteger(e)||e<0||e>=6)throw Error(`Invalid station stop`)}function jp(e,t){return t.centers[e.station]}function Mp(e,t){let n=typeof t.radius==`number`?t.radius:t.radius[e.station],r=jp(e,t);return Math.max(t.minX,Math.min(t.maxX,r+Math.max(-1,Math.min(1,e.intentCSS/e.config.thresholdCSS))*n))}function Np(e,t={}){kp(e);let n=t.initialStation??0;Ap(n);let r={thresholdCSS:t.thresholdCSS??110,reverseThresholdCSS:t.reverseThresholdCSS??55,wheelIdleMs:t.wheelIdleMs??180,dwellMs:t.dwellMs??550,arrivalTolerance:t.arrivalTolerance??2,arrivalSpeed:t.arrivalSpeed??4};if(Object.values(r).some(e=>!Number.isFinite(e)||e<=0)||r.reverseThresholdCSS>r.thresholdCSS)throw Error(`Invalid station stop options`);return{station:n,originStation:n,phase:`rest`,targetX:e.centers[n],intentCSS:0,reverseIntentCSS:0,gestureSpent:!1,source:null,lastInputAt:null,dwellStartedAt:null,dwellElapsedMs:0,lastEventAt:null,lastTickAt:null,held:!1,config:Object.freeze(r)}}function Pp(e,t,n){if(kp(n),!Number.isFinite(t.now)||t.now<0||e.lastEventAt!==null&&t.now<e.lastEventAt)throw Error(`Invalid station stop time`);if(t.type===`input`&&(!Number.isFinite(t.deltaCSS)||![`wheel`,`drag`].includes(t.source)))throw Error(`Invalid station stop input`);if(t.type===`tick`&&(!Number.isFinite(t.x)||!Number.isFinite(t.velocity)))throw Error(`Invalid station stop camera`);let r={...e,lastEventAt:t.now},i=()=>jp(r,n),a=()=>{r.intentCSS=0,r.reverseIntentCSS=0,r.targetX=i()},o=e=>{Ap(e),r.originStation=r.station,r.station=e,r.phase=`travel`,r.dwellStartedAt=null,r.dwellElapsedMs=0,r.gestureSpent=!0,a()};if(r.targetX=r.phase===`rest`?Mp(r,n):i(),t.type===`request`)return Ap(t.station),o(t.station),r.source=null,r.lastInputAt=null,r.gestureSpent=!1,r;if(t.type===`end`)return a(),r.source=null,r.lastInputAt=null,r.gestureSpent=!1,r;if(t.type===`tick`){let n=e.lastTickAt===null?0:t.now-e.lastTickAt;if(r.lastTickAt=t.now,r.held=!!t.hold,r.held)return a(),r.lastInputAt=null,r.source=null,r;r.source===`wheel`&&r.lastInputAt!==null&&t.now-r.lastInputAt>=r.config.wheelIdleMs&&(a(),r.source=null,r.lastInputAt=null,r.gestureSpent=!1);let o=!t.blocked&&t.coverageReady!==!1&&Math.abs(t.x-i())<=r.config.arrivalTolerance&&Math.abs(t.velocity)<=r.config.arrivalSpeed;return r.phase===`travel`&&o?(r.phase=`dwell`,r.dwellStartedAt=t.now,r.dwellElapsedMs=0,a()):r.phase===`dwell`&&(o?(r.dwellElapsedMs+=e.held?0:n,r.dwellElapsedMs>=r.config.dwellMs&&(r.phase=`rest`,r.originStation=r.station,r.dwellStartedAt=null,a(),r.source!==`drag`&&(r.gestureSpent=!1))):(r.phase=`travel`,r.dwellStartedAt=null,r.dwellElapsedMs=0)),r}if(r.held||t.deltaCSS===0)return r;if((t.source!==r.source||t.source===`wheel`&&r.lastInputAt!==null&&t.now-r.lastInputAt>=r.config.wheelIdleMs)&&(r.intentCSS=0,r.reverseIntentCSS=0,r.gestureSpent=!1),r.source=t.source,r.lastInputAt=t.now,r.phase===`travel`||r.phase===`dwell`){let e=Math.sign(n.centers[r.station]-n.centers[r.originStation]);return r.reverseIntentCSS=Math.max(0,r.reverseIntentCSS-t.deltaCSS*e),e&&r.reverseIntentCSS>=r.config.reverseThresholdCSS&&o(r.originStation),r}if(r.gestureSpent)return a(),r;r.intentCSS=Math.max(-r.config.thresholdCSS,Math.min(r.config.thresholdCSS,r.intentCSS+t.deltaCSS));let s=Math.sign(r.intentCSS),c=r.station+s;return Math.abs(r.intentCSS)>=r.config.thresholdCSS&&c>=0&&c<6?o(c):r.targetX=Mp(r,n),r}var Fp=(e,t=-1,n=1)=>Math.max(t,Math.min(n,e));function Ip(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r);return{x:t*i+e*a,y:e*i-t*a}}function Lp(e,t){return(e-t+540)%360-180}function Rp(e,t=1,n=18){let r=Math.abs(e);return r<=t?0:Math.sign(e)*Fp((r-t)/(n-t),0,1)}function zp(e,t,n=8){let r=Math.abs(e),i=Math.abs(t);return Math.max(r,i)<n?`pending`:r>i*1.3?`horizontal`:i>r*1.3?`vertical`:`pending`}function Bp(e,t){if(!(e instanceof Element))return!0;let n=e.closest(`a,button,input,select,textarea,summary,details,[contenteditable],[role="button"],[data-camera-drag-ignore]`);return!!(n&&t.contains(n))}function Vp(e,t){let n=!1;return{set(r){if(r===n)return;let i=n,a={...t()};n=r,e.setSuspended(r),i&&!r&&e.restoreLook(a)}}}function Hp(e,t,n={}){let r={x:0,y:0,source:`none`},i=!1,a=!1,o=document.hidden,s=!1,c=!1,l,u={x:0,y:0},d,f={x:0,y:0},p=v(),m,h,g,_;function v(){return window.screen.orientation?.angle??window.orientation??0}function y(){return a||o||i}function b(e){r.x===e.x&&r.y===e.y&&r.source===e.source||(r=e,t(e))}function x(){b({x:0,y:0,source:s?`gyro`:`none`})}function S(){m&&clearTimeout(m),m=void 0}function C(e){S(),c&&window.removeEventListener(`deviceorientation`,T),c=s=!1,l=void 0,d=void 0,u={x:0,y:0},g?.(e??`unavailable`),g=void 0,x()}function w(){S(),!y()&&(m=setTimeout(()=>C(`unavailable`),1800))}function T(e){if(y()||!Number.isFinite(e.beta)||!Number.isFinite(e.gamma))return;let t=v();t!==p&&(p=t,l=void 0,u={x:0,y:0},x());let n=Ip(e.beta,e.gamma,t),r=Number.isFinite(e.timeStamp)?e.timeStamp:performance.now();if(!l)l=n,s=!0,b({x:f.x,y:f.y,source:`gyro`}),g?.(`active`),g=void 0;else{let e=d===void 0?0:Math.max(0,Math.min(.05,(r-d)/1e3)),t=1-Math.exp(-15*e);u.x+=(Lp(n.x,l.x)-u.x)*t,u.y+=(Lp(n.y,l.y)-u.y)*t,b({x:Fp(f.x+Rp(u.x)),y:Fp(f.y+Rp(u.y)),source:`gyro`})}d=r,w()}function E(){d=void 0,f={x:0,y:0},l=void 0,u={x:0,y:0},p=v(),x()}function D(){o=document.hidden,o?(_=void 0,S(),x()):(E(),c&&w())}function O(){E()}function k(t){if(y()||s||n.allowDrag?.()===!1||t.touches.length!==1||Bp(t.target,e))return;let i=t.touches[0];_={id:i.identifier,x:i.clientX,y:i.clientY,startLook:r.x,startLookY:r.y,intent:`pending`}}function A(t){if(!_||y()||s||n.allowDrag?.()===!1||t.touches.length!==1)return;let r=Array.from(t.touches).find(e=>e.identifier===_.id);if(!r){_=void 0;return}let i=r.clientX-_.x,a=r.clientY-_.y;if(_.intent===`pending`&&(_.intent=zp(i,a)),_.intent===`vertical`){_=void 0;return}_.intent===`horizontal`&&b({x:Fp(_.startLook+i/Math.max(140,e.clientWidth*.35)),y:_.startLookY,source:`drag`})}function j(e){_&&Array.from(e.changedTouches).some(e=>e.identifier===_.id)&&(_=void 0)}return e.addEventListener(`touchstart`,k,{passive:!0}),e.addEventListener(`touchmove`,A,{passive:!0}),e.addEventListener(`touchend`,j,{passive:!0}),e.addEventListener(`touchcancel`,j,{passive:!0}),document.addEventListener(`visibilitychange`,D),window.addEventListener(`orientationchange`,O),window.screen.orientation?.addEventListener(`change`,O),{requestGyro(){if(i||window.isSecureContext===!1)return Promise.resolve(`unavailable`);if(s)return Promise.resolve(`active`);if(h)return h;let e=window.DeviceOrientationEvent;if(!e)return Promise.resolve(`unavailable`);let t;try{t=e.requestPermission?.()??Promise.resolve(`granted`)}catch{return Promise.resolve(`denied`)}return h=(async()=>{try{return await t===`granted`?i?`unavailable`:(c||=(window.addEventListener(`deviceorientation`,T),!0),E(),await new Promise(e=>{g=e,w()})):`denied`}catch{return`denied`}})().then(e=>(h=void 0,e)),h},recalibrate:E,setSuspended(e){a=e,_=void 0,e&&S(),E(),!e&&c&&w()},restoreLook(e){i||(l=void 0,u={x:0,y:0},_=void 0,d=void 0,f={x:Fp(Number.isFinite(e.x)?e.x:0),y:Fp(Number.isFinite(e.y)?e.y:0)},b({...f,source:e.source}))},dispose(){i||(i=!0,C(`unavailable`),e.removeEventListener(`touchstart`,k),e.removeEventListener(`touchmove`,A),e.removeEventListener(`touchend`,j),e.removeEventListener(`touchcancel`,j),document.removeEventListener(`visibilitychange`,D),window.removeEventListener(`orientationchange`,O),window.screen.orientation?.removeEventListener(`change`,O))}}}var Up=e=>{if(!Number.isFinite(e))throw Error(`Gaze value must be finite`);return e},Wp=e=>{let t=Up(e.x),n=Up(e.y),r=Math.max(1,Math.hypot(t,n));return{x:t/r,y:n/r}};function Gp(e,t=2.2){if(!(Up(t)>0))throw Error(`Gyro gain must be positive`);let n=e.source===`gyro`?t:+(e.source===`drag`);return Wp({x:Up(e.x)*n,y:Up(e.y)*n})}async function Kp(e){let t=await globalThis.crypto.subtle.digest(`SHA-256`,new Uint8Array(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function qp(e,t,n,r,i=fetch){let a=``;for(let o of[`force-cache`,`reload`]){r.throwIfAborted();let s=await i(e,{signal:r,cache:o});if(r.throwIfAborted(),!s.ok){a=`Environment page HTTP ${s.status}: ${n}`,await s.body?.cancel().catch(()=>{});continue}let c=new Uint8Array(await s.arrayBuffer());r.throwIfAborted();let l=await Kp(c);if(r.throwIfAborted(),l===t)return c;a=`Environment page integrity mismatch: ${n}; got ${l}, expected ${t}; ${c.byteLength} bytes`}throw Error(`${a}; reload retry failed`)}var Jp=[[`solid-auto`,`C1 · 自动黑白`],[`solid-black`,`纯黑`],[`solid-white`,`纯白`],[`brand-red`,`品牌红`],[`c2`,`C2 · 去色＋明度`],[`luminance`,`C3 · 明度反相`],[`difference`,`C4 · Difference`],[`frosted`,`C5 · 磨砂`],[`desat50`,`降饱和 50%`],[`desat80`,`降饱和 80%`],[`gray`,`完全去色`],[`bright`,`提亮`],[`dark`,`压暗`],[`contrast`,`增加对比`],[`low-contrast`,`降低对比`],[`negative`,`RGB 负片`],[`exclusion`,`Exclusion · 灰色混合层`],[`adaptive`,`自适应局部反差`],[`dark-glass`,`暗玻璃`],[`white-glass`,`白玻璃`],[`blur-light`,`轻度模糊`],[`blur`,`中度模糊`],[`blur-gray`,`模糊＋去色`],[`blur-bright`,`模糊＋提亮`],[`blur-dark`,`模糊＋压暗`],[`tint-red`,`单色染色 · 魔红`],[`tint-purple`,`单色染色 · 魔紫`],[`tint-gold`,`单色染色 · 王金`],[`tint-blue`,`单色染色 · 夜蓝`],[`tint-green`,`单色染色 · 墨绿`],[`hue60`,`色相 +60°`],[`hue90`,`色相 +90°`],[`hue180`,`色相 +180°`],[`bw`,`高对比黑白`],[`threshold`,`二值化`],[`poster2`,`2 级黑红`],[`poster3`,`3 级紫白`],[`poster4`,`4 级黑金`],[`duo-red`,`双色 · 黑红`],[`duo-white`,`双色 · 黑白`],[`duo-gold`,`双色 · 黑金`],[`duo-purple`,`双色 · 黑紫`],[`duo-blue`,`双色 · 深蓝白`]],Yp=e=>Math.max(0,Math.min(1,e)),Xp=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Zp=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Qp=(e,t,n)=>.2126*e+.7152*t+.0722*n;function $p(e){let t=new Uint8ClampedArray(e.length/4);for(let n=0;n<t.length;n++){let r=n*4;t[n]=Yp((245-Qp(e[r],e[r+1],e[r+2]))/230)*e[r+3]}return t}function em(e,t,n,r){let i=Math.max(e,t,n),a=Math.min(e,t,n),o=i-a,s=(i+a)/2;if(!o)return[e,t,n];let c=(i===e?(t-n)/o+(t<n?6:0):i===t?(n-e)/o+2:(e-t)/o+4)/6;c=(c+r/360)%1;let l=o/(1-Math.abs(2*s-1))*Math.min(s,1-s);return[0,8,4].map(e=>{let t=(e+c*12)%12;return s-l*Math.max(-1,Math.min(t-3,9-t,1))})}function tm(e,t,n,r=1,i=e,a=i){if(e.length!==t.length*4||i.length!==e.length||a.length!==e.length||!Number.isFinite(r)||r<0||r>1||!Jp.some(e=>e[0]===n))throw Error(`Invalid shape-mask input`);let o=new Uint8ClampedArray(e),s=0,c=0;for(let n=0;n<t.length;n++){let r=n*4,i=t[n]/255;s+=Qp(Xp(e[r]/255),Xp(e[r+1]/255),Xp(e[r+2]/255))*i,c+=i}let l=(c?s/c:0)>.179,u=l?-.2:.2,d=n.includes(`blur`)||n.includes(`glass`)||n===`frosted`;for(let s=0;s<t.length;s++){let c=t[s]/255*r;if(!c)continue;let f=s*4,p=d?i:e,m=p[f]/255,h=p[f+1]/255,g=p[f+2]/255,_=Qp(m,h,g),v=1,y=1,b=0;if(n===`solid-black`||n===`solid-white`||n===`solid-auto`)m=h=g=n===`solid-black`?0:n===`solid-white`?1:+!l;else if(n===`brand-red`)m=.9,h=.12,g=.2;else if(n===`negative`||n===`difference`)m=1-m,h=1-h,g=1-g;else if(n===`exclusion`)m=m+.72-2*m*.72,h=h+.72-2*h*.72,g=g+.72-2*g*.72;else if(n===`luminance`){let e=[Xp(m),Xp(h),Xp(g)],t=Qp(...e),n=1-t,r=e.map(e=>e-t),i=1;for(let e of r)e>0?i=Math.min(i,(1-n)/e):e<0&&(i=Math.min(i,-n/e));[m,h,g]=r.map(e=>Zp(Yp(n+e*i)))}else if(n.startsWith(`hue`))[m,h,g]=em(m,h,g,Number(n.slice(3)));else if(n===`adaptive`){let e=Qp(a[f]/255,a[f+1]/255,a[f+2]/255);b=.36*Math.tanh((.5-e)*5),v=.25}else if(n===`threshold`)m=h=g=+(_>=.5);else if(n.startsWith(`tint-`)||n.startsWith(`duo-`)||n.startsWith(`poster`)){let e={red:[1,.22,.3],purple:[.77,.43,1],gold:[1,.81,.33],blue:[.2,.62,1],green:[.25,.84,.57],white:[1,1,1]},t=n.split(`-`)[1],r=_;if(n.startsWith(`poster`)){let e=Number(n.slice(6));r=Math.round(_*(e-1))/(e-1),t=e===2?`red`:e===3?`purple`:`gold`}let i=e[t],a=n===`duo-blue`?[.025,.07,.2]:n===`poster3`?[.19,.04,.28]:[.02,.015,.045],o=n===`duo-blue`||n===`poster3`?[1,1,1]:i;[m,h,g]=o.map((e,t)=>a[t]+(e-a[t])*r)}else if(n===`desat50`&&(v=.5),n===`desat80`&&(v=.2),n===`gray`&&(v=0),(n===`bright`||n===`blur-bright`)&&(b=.24),(n===`dark`||n===`blur-dark`)&&(b=-.24),n===`contrast`&&(y=1.6),n===`low-contrast`&&(y=.55),n===`bw`&&(v=0,y=1.8),n===`c2`&&(v=.1,y=1.18,b=u),n===`frosted`&&(v=.2,y=.85,b=u),n===`blur-gray`&&(v=.1,y=.9,b=u),n===`dark-glass`||n===`white-glass`){v=.65,m=_+(m-_)*v,h=_+(h-_)*v,g=_+(g-_)*v,v=1;let e=n===`white-glass`?.4:0;m=m*.6+e,h=h*.6+e,g=g*.6+e}v!==1&&(m=_+(m-_)*v,h=_+(h-_)*v,g=_+(g-_)*v);let x=[m,h,g].map(e=>Yp((e-.5)*y+.5+b)*255);for(let t=0;t<3;t++)o[f+t]=e[f+t]*(1-c)+x[t]*c}return o}var nm=[`entry`,`street`,`print`,`workshop`,`glass`,`underground`],rm=[`stairs`,`street`,`turn`,`corridor`,`corner`,`stairs`],im=[2.4,0,0,0,0,0,-3],am=[[0,0],[0,-12],[0,-24],[9,-33],[9,-47],[-3,-59],[-3,-74]],om=256,sm=[];function cm(e){let t=am[Math.max(0,e-1)],n=am[Math.min(am.length-1,e+1)],r=n[0]-t[0],i=n[1]-t[1],a=Math.hypot(r,i);return[r/a,i/a]}function lm(e,t){let n=1-t;return[0,2].map(r=>n**3*e.start[r]+3*n*n*t*e.control1[r]+3*n*t*t*e.control2[r]+t**3*e.end[r])}var um=nm.map((e,t)=>{let[n,r]=am[t],[i,a]=am[t+1],o=cm(t),s=cm(t+1),c=Math.hypot(i-n,a-r)/3,l={id:e,index:t,kind:rm[t],startDistance:0,endDistance:0,length:0,width:t===3?3.4:4.8,start:[n,im[t],r],end:[i,im[t+1],a],control1:[n+o[0]*c,im[t],r+o[1]*c],control2:[i-s[0]*c,im[t+1],a-s[1]*c]},u=[{t:0,distance:0}],d=lm(l,0),f=0;for(let e=1;e<=om;e++){let t=lm(l,e/om);f+=Math.hypot(t[0]-d[0],t[1]-d[1]),u.push({t:e/om,distance:f}),d=t}return sm.push(u),l.length=f,l}),dm=0;for(let e of um)if(e.startDistance=dm,dm+=e.length,e.endDistance=dm,e.kind===`stairs`){let t=e.index===0?12:15,n=e.startDistance+e.length*.18,r=e.startDistance+e.length*.88;e.stairs={startDistance:n,endDistance:r,startHeight:e.start[1],endHeight:e.end[1],count:t,rise:(e.end[1]-e.start[1])/t,tread:(r-n)/t,width:e.width}}um[0].endDistance+6;function fm(e){return e.match(/\w\w/g).map(e=>parseInt(e,16))}async function pm(e,t=e.background,n=1200,r=800){if(e.type===`mask`)return Sm(e.effect,t,1,n,r);let i=await xm(t,n,r),a=_m(n,r),o=a.getContext(`2d`),s=_m(n,r),c=s.getContext(`2d`);o.putImageData(new ImageData(new Uint8ClampedArray(i.bg),n,r),0,0);let l=c.createImageData(n,r),u=e.effect,d=Math.max(2,Math.round(n*.005)),f=fm(u===`black`||u===`outline`?`10121b`:u===`white`?`f6f0d9`:u===`red`?`d94b57`:u===`gray`?`767580`:u===`lime`?`e5f16b`:u===`gold`?`c9a55e`:u===`rose`?`bc8792`:u===`rubber`?`89cbd4`:u===`emboss`?`c5bfa8`:u===`deboss`?`4d4c50`:u===`thread`?`c1c8d7`:`b9c6d5`),p=[`metal`,`gold`,`rose`,`rubber`,`emboss`,`deboss`,`thread`,`foil`].includes(u);for(let t=0;t<i.mask.length;t++){let a=t%n,o=Math.floor(t/n),s=1;[`metal`,`gold`,`rose`,`foil`].includes(u)&&(s=/哑/.test(e.label)?.87:.55+.6*Math.abs(Math.sin(o/r*8+a/n*2))),u===`thread`&&(s=.65+.3*Math.sin((a+o)*1.6)),u===`rubber`&&(s=.78+.2*(1-o/r));let c=u===`foil`?[130+90*Math.sin(a/n*8),145+70*Math.sin(a/n*8+2),160+80*Math.sin(a/n*8+4)]:f,p=i.mask[t];if(u===`outline`){let e=p;for(let[t,s]of[[-d,0],[d,0],[0,-d],[0,d]]){let c=a+t,l=o+s;e=Math.min(e,c>=0&&c<n&&l>=0&&l<r?i.mask[l*n+c]:0)}p-=e}l.data.set([Math.min(255,c[0]*s),Math.min(255,c[1]*s),Math.min(255,c[2]*s),p],t*4)}c.putImageData(l,0,0);let m=_m(n,r),h=_m(n,r),g=_m(n,r),_=h.getContext(`2d`),v=g.getContext(`2d`),y=m.getContext(`2d`);if(y.drawImage(a,0,0),(e.layout===`plate`||e.layout===`glass-plate`)&&(y.fillStyle=e.layout===`plate`?`#10121b`:`#10121baa`,y.fillRect(n*.06,r*.15,n*.88,r*.7)),e.layout===`avatar`&&(y.fillStyle=`#252337`,y.beginPath(),y.arc(n/2,r/2,r*.44,0,Math.PI*2),y.fill()),e.layout===`frame`&&(y.strokeStyle=`#10121b`,y.lineWidth=n*.009,y.strokeRect(n*.06,r*.17,n*.88,r*.66)),e.layout===`title`&&(y.fillStyle=`#10121b`,y.textAlign=`center`,y.font=`900 ${n*.052}px sans-serif`,y.fillText(`STUDIO COLLECTION`,n*.5,r*.82)),e.layout===`tape`){let e=await gm(`city/motion/tape.webp`);y.drawImage(e,n*.04,r*.09,n*.26,r*.09),y.drawImage(e,n*.7,r*.83,n*.26,r*.09)}if(e.layout===`character`){let e=await gm(`city/motion/heroine-rig.webp`),t=r*.95;y.drawImage(e,n*.67,r*.025,t*e.width/e.height,t)}for(let t of[_,v])t.translate(n*e.placement.x,r*e.placement.y),t.scale(e.placement.width/.79,e.placement.width/.79),t.translate(-n/2,-r/2);if(p){let e=_m(n,r),t=e.getContext(`2d`);t.drawImage(s,0,0),t.globalCompositeOperation=`source-in`,t.fillStyle=u===`emboss`?`#777065`:`#15151e`,t.fillRect(0,0,n,r),_.shadowColor=`#0009`,_.shadowBlur=n*.008,_.shadowOffsetY=5;for(let t=7;t>0;t--)_.drawImage(e,t,t*.65)}if(u===`neon`&&(_.shadowColor=`#83dfe9`,_.shadowBlur=16,_.drawImage(s,0,0)),e.layout===`watermark`&&(v.globalAlpha=.42),e.layout===`repeat`){v.resetTransform();for(let e=0;e<2;e++)for(let t=0;t<3;t++)v.drawImage(s,t*n/3,r*.13+e*r*.42,n/3,r/3)}else v.drawImage(s,0,0);return o.drawImage(m,0,0),o.drawImage(h,0,0),o.drawImage(g,0,0),a.dataset.frontMask=`source-raster`,Object.assign(a,{layers:{background:m,depth:h,face:g}})}var mm=`originals/5c15e93fb8e37a634e5421816424a763ccb4d17769a67fbc48fb9eba93e175c4.png`,hm=new Map;function gm(e){return hm.has(e)||hm.set(e,new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`无法加载 ${e}`)),r.src=e})),hm.get(e)}function _m(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function vm(e){let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`浏览器不支持 Canvas 2D`);return t}function ym(e,t,n,r){let i=Math.max(n/t.width,r/t.height);e.drawImage(t,(n-t.width*i)/2,(r-t.height*i)/2,t.width*i,t.height*i)}var bm=new Map;async function xm(e,t,n){let r=`${e}-${t}-${n}`;return!bm.has(r)&&bm.size>=2&&bm.delete(bm.keys().next().value),bm.has(r)||bm.set(r,(async()=>{let[r,i]=await Promise.all([gm(/^(wall|prop)-/.test(e)?`city/motion/${e}${e.startsWith(`prop-`)?`-hd`:``}.webp`:`city/${e===`gray`?`city`:e}.png`),gm(mm)]),a=_m(t,n),o=vm(a);if(ym(o,r,t,n),e===`gray`){let e=o.getImageData(0,0,t,n);for(let t=0;t<e.data.length;t+=4)e.data.set([128,128,128,255],t);o.putImageData(e,0,0)}let s=o.getImageData(0,0,t,n).data,c=_m(t,n),l=vm(c);l.fillStyle=`white`,l.fillRect(0,0,t,n);let u=t*.79,d=u*i.height/i.width;l.drawImage(i,(t-u)/2,(n-d)/2,u,d);let f=$p(l.getImageData(0,0,t,n).data);function p(e){let r=vm(_m(t,n));if(!(`filter`in r))throw Error(`当前浏览器不支持模糊，请使用 Chromium`);return r.filter=`blur(${e}px)`,r.drawImage(a,0,0),r.getImageData(0,0,t,n).data}let m=l.createImageData(t,n);for(let e=0;e<f.length;e++)m.data.set([255,255,255,f[e]],e*4);l.clearRect(0,0,t,n),l.putImageData(m,0,0);let h=vm(_m(t,n));h.filter=`blur(${n*.045}px)`,h.drawImage(c,0,0);let g=h.getImageData(0,0,t,n).data,_=new Uint8ClampedArray(f.length),v=new Uint8ClampedArray(f.length);for(let e=0;e<f.length;e++){_[e]=Math.max(0,Math.min(255,g[e*4+3]*2)-f[e]);let r=e%t,i=Math.floor(e/t),a=f[e];for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++)r+s>=0&&r+s<t&&i+o>=0&&i+o<n&&(a=Math.max(a,f[e+o*t+s]));v[e]=a-f[e]}return{bg:s,mask:f,blur:p(d*.02),lightBlur:p(d*.01),smooth:p(d*.13),halo:_,edge:v}})()),bm.get(r)}async function Sm(e,t=`city`,n=1,r=960,i=540){let a=await xm(t,r,i),o;if(e===`original`)o=new Uint8ClampedArray(a.bg);else if(e===`mask`){o=new Uint8ClampedArray(a.bg);for(let e=0;e<a.mask.length;e++)o.set([a.mask[e],a.mask[e],a.mask[e],255],e*4)}else o=e===`halo`?tm(tm(a.bg,a.halo,`low-contrast`,.85*n,a.blur,a.smooth),a.mask,`solid-auto`,n):e===`edge`||e===`solid-edge`?tm(tm(a.bg,a.mask,e===`edge`?`c2`:`solid-auto`,n,a.blur,a.smooth),a.edge,`solid-white`,.6*n):tm(a.bg,a.mask,e,n,e===`blur-light`||e===`blur-gray`||e.includes(`glass`)?a.lightBlur:a.blur,a.smooth);let s=_m(r,i);return vm(s).putImageData(new ImageData(new Uint8ClampedArray(o),r,i),0,0),s}var Cm=`originals/5c15e93fb8e37a634e5421816424a763ccb4d17769a67fbc48fb9eba93e175c4.png`,wm=new Set([`black`,`white`,`gray`,`red`,`lime`,`gold`,`rose`,`metal`,`rubber`,`emboss`,`deboss`,`thread`,`foil`,`outline`,`neon`]);function Tm(e){let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`浏览器不支持 Canvas 2D`);return t}function Em(e){let t=_m(e.width,e.height);return Tm(t).putImageData(Tm(e).getImageData(0,0,e.width,e.height),0,0),t}function Dm(e,t){let n=_m(e.width,e.height),r=Tm(n);return r.filter=`blur(${Math.max(1,t)}px)`,r.drawImage(e,0,0),r.getImageData(0,0,n.width,n.height).data}function Om(e,t,n){let r=new Uint8ClampedArray(e.length);for(let i=0;i<e.length;i++){let a=i%t,o=Math.floor(i/t),s=e[i];for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){let c=a+i,l=o+r;c>=0&&c<t&&l>=0&&l<n&&(s=Math.max(s,e[l*t+c]))}r[i]=s-e[i]}return r}function km(e,t,n,r){let i=_m(t,n),a=Tm(i),o=a.createImageData(t,n);for(let t=0;t<e.length;t++)o.data.set([255,255,255,e[t]],t*4);a.putImageData(o,0,0);let s=Tm(_m(t,n));s.filter=`blur(${Math.max(1,r)}px)`,s.drawImage(i,0,0);let c=s.getImageData(0,0,t,n).data,l=new Uint8ClampedArray(e.length);for(let t=0;t<e.length;t++)l[t]=Math.max(0,Math.min(255,c[t*4+3]*2)-e[t]);return l}function Am(e,t,n){let r=_m(t,n);return Tm(r).putImageData(new ImageData(new Uint8ClampedArray(e),t,n),0,0),r}function jm(e){return e.match(/\w\w/g).map(e=>parseInt(e,16))}async function Mm(e,t,n){let{x:r,y:i,width:a}=e.placement;if(![r,i,a].every(Number.isFinite)||a<=0)throw Error(`无效的签名放置`);let o=await gm(Cm),s=Tm(_m(t,n));s.fillStyle=`white`,s.fillRect(0,0,t,n);let c=t*a,l=c*o.height/o.width;return s.drawImage(o,t*r-c/2,n*i-l/2,c,l),{mask:$p(s.getImageData(0,0,t,n).data),logoHeight:l}}function Nm(e,t,n,r){let i=r.effect,a=_m(t,n),o=Tm(a),s=o.createImageData(t,n),c=Math.max(2,Math.round(t*.005)),l=jm(i===`black`||i===`outline`?`10121b`:i===`white`?`f6f0d9`:i===`red`?`d94b57`:i===`gray`?`767580`:i===`lime`?`e5f16b`:i===`gold`?`c9a55e`:i===`rose`?`bc8792`:i===`rubber`?`89cbd4`:i===`emboss`?`c5bfa8`:i===`deboss`?`4d4c50`:i===`thread`?`f6efda`:`b9c6d5`);for(let a=0;a<e.length;a++){let o=a%t,u=Math.floor(a/t),d=1;[`metal`,`gold`,`rose`,`foil`].includes(i)&&(d=/哑/.test(r.label)?.87:.55+.6*Math.abs(Math.sin(u/n*8+o/t*2))),i===`thread`&&(d=.9+.1*Math.sin((o+u)*1.6)),i===`rubber`&&(d=.78+.2*(1-u/n));let f=i===`foil`?[130+90*Math.sin(o/t*8),145+70*Math.sin(o/t*8+2),160+80*Math.sin(o/t*8+4)]:l,p=e[a];if(i===`outline`){let r=p;for(let[i,a]of[[-c,0],[c,0],[0,-c],[0,c]]){let s=o+i,c=u+a;r=Math.min(r,s>=0&&s<t&&c>=0&&c<n?e[c*t+s]:0)}p-=r}s.data.set([Math.min(255,f[0]*d),Math.min(255,f[1]*d),Math.min(255,f[2]*d),p],a*4)}return o.putImageData(s,0,0),a}async function Pm({background:e,presentation:t,original:n=!1}){let r=e.width,i=e.height;if(!r||!i)throw Error(`物件表面不可为空`);if(n||t.effect===`original`)return Em(e);let a=Tm(e).getImageData(0,0,r,i).data,{mask:o,logoHeight:s}=await Mm(t,r,i),c=t.effect;if(t.type===`mask`){if(c===`mask`){let e=new Uint8ClampedArray(a.length);for(let t=0;t<o.length;t++)e.set([o[t],o[t],o[t],255],t*4);return Am(e,r,i)}let t;if(c===`halo`)t=tm(a,km(o,r,i,s*.045),`low-contrast`,.85),t=tm(t,o,`solid-auto`);else if(c===`edge`||c===`solid-edge`)t=tm(a,o,c===`edge`?`c2`:`solid-auto`),t=tm(t,Om(o,r,i),`solid-white`,.6);else{let n=/blur|glass|frosted/.test(c),r=c===`adaptive`,i=c===`blur-light`||c===`blur-gray`||c.includes(`glass`),l=n?Dm(e,s*(i?.01:.02)):a;t=tm(a,o,c,1,l,r?Dm(e,s*.13):l)}return Am(t,r,i)}if(!wm.has(c))throw Error(`未知材质效果: ${c}`);let l=Em(e),u=_m(r,i),d=Nm(o,r,i,t),f=Tm(u);if([`metal`,`gold`,`rose`,`rubber`,`emboss`,`deboss`,`thread`,`foil`].includes(c)){let e=_m(r,i),t=Tm(e);t.drawImage(d,0,0),t.globalCompositeOperation=`source-in`,t.fillStyle=c===`emboss`?`#777065`:`#15151e`,t.fillRect(0,0,r,i);let n=Math.max(2,Math.round(Math.min(r,i)*.025));f.shadowColor=`#0009`,f.shadowBlur=Math.max(2,r*.008),f.shadowOffsetY=Math.max(1,n*.65);for(let t=n;t>0;t--)f.drawImage(e,t,t*.65)}c===`neon`&&(f.shadowColor=`#83dfe9`,f.shadowBlur=Math.max(8,r*.014),f.drawImage(d,0,0)),f.shadowBlur=0,f.shadowOffsetY=0;let p=t.layout,m=Tm(d);if(p===`watermark`){let e=Em(d);m.clearRect(0,0,r,i),m.globalAlpha=.42,m.drawImage(e,0,0),m.globalAlpha=1}if(p===`repeat`){let e=Em(d);m.clearRect(0,0,r,i);for(let t=0;t<2;t++)for(let n=0;n<3;n++)m.drawImage(e,n*r/3,t*i/2,r/3,i/3)}if(p===`frame`&&(f.strokeStyle=`#10121b`,f.lineWidth=r*.008,f.strokeRect(r*.035,i*.06,r*.93,i*.88)),p===`avatar`&&(f.fillStyle=`#393150`,f.beginPath(),f.arc(r/2,i/2,Math.min(r,i)*.46,0,Math.PI*2),f.fill()),(p===`plate`||p===`glass-plate`)&&(f.fillStyle=p===`plate`?`#10121b`:`#10121bb0`,f.fillRect(r*.04,i*.08,r*.92,i*.84)),p===`title`&&(f.fillStyle=`#10121b`,f.textAlign=`center`,f.font=`900 ${r*.055}px sans-serif`,f.fillText(`MIDNIGHT / MMW`,r*.5,i*.87)),p===`tape`){let e=await gm(`city/motion/tape.webp`);f.drawImage(e,r*.03,i*.035,r*.26,i*.1),f.drawImage(e,r*.71,i*.86,r*.26,i*.1)}if(p===`character`){let e=await gm(`city/journey/companion-standing-six.webp`),t=i*.93;f.drawImage(e,r*.69,i*.035,t*e.width/e.height,t)}let h=Em(l),g=Tm(h);return g.drawImage(u,0,0),g.drawImage(d,0,0),h.dataset.frontMask=`source-raster`,Object.assign(h,{layers:{background:l,depth:u,face:d}})}function Fm(e){let[t,n,r,i]=e,a=n[0]-r[0],o=n[1]-r[1],s=i[0]-r[0],c=i[1]-r[1],l=t[0]-n[0]+r[0]-i[0],u=t[1]-n[1]+r[1]-i[1],d=a*c-s*o,f=d?(l*c-s*u)/d:0,p=d?(a*u-l*o)/d:0;return[n[0]-t[0]+f*n[0],i[0]-t[0]+p*i[0],t[0],n[1]-t[1]+f*n[1],i[1]-t[1]+p*i[1],t[1],f,p]}function Im(e,t,n){let r=Fm(e);return`matrix3d(${[r[0]/t,r[3]/t,0,r[6]/t,r[1]/n,r[4]/n,0,r[7]/n,0,0,1,0,r[2],r[5],0,1].join(`,`)})`}async function Lm(e,t){let n=await Pm({background:e,presentation:t}),r=n.getContext(`2d`,{willReadFrequently:!0});if(n.layers)return r.clearRect(0,0,n.width,n.height),r.drawImage(n.layers.depth,0,0),r.drawImage(n.layers.face,0,0),n;let i=r.getImageData(0,0,n.width,n.height),a=e.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,n.width,n.height);for(let e=0;e<i.data.length;e+=4)i.data[e]===a.data[e]&&i.data[e+1]===a.data[e+1]&&i.data[e+2]===a.data[e+2]&&i.data[e+3]===a.data[e+3]&&(i.data[e+3]=0);return r.putImageData(i,0,0),n}var Rm={url:`originals/5c15e93fb8e37a634e5421816424a763ccb4d17769a67fbc48fb9eba93e175c4.png`,sha256:`5c15e93fb8e37a634e5421816424a763ccb4d17769a67fbc48fb9eba93e175c4`,width:1536,height:1024},zm=[[50,70],[170,54],[170,382],[50,382]];function Bm(e,t=8){if(!Number.isFinite(t)||t<8||!e.flat().every(Number.isFinite))throw Error(`Invalid painted screen inset`);let n=e.map((n,r)=>{let i=e[(r+1)%4],a=i[0]-n[0],o=i[1]-n[1],s=Math.hypot(a,o);if(s<t*2)throw Error(`Screen edge too small`);return{a:[n[0]-o/s*t,n[1]+a/s*t],d:[a,o]}}),r=n.map((e,t)=>{let r=n[(t+3)%4],i=r.d[0]*e.d[1]-r.d[1]*e.d[0];if(Math.abs(i)<1e-9)throw Error(`Degenerate screen`);let a=((e.a[0]-r.a[0])*e.d[1]-(e.a[1]-r.a[1])*e.d[0])/i;return[r.a[0]+a*r.d[0],r.a[1]+a*r.d[1]]});if(r.some((e,t)=>{let n=r[(t+1)%4],i=r[(t+2)%4];return(n[0]-e[0])*(i[1]-n[1])-(n[1]-e[1])*(i[0]-n[0])<=0}))throw Error(`Inset consumed screen`);return r}Bm(zm);function Vm(e,t,n){if(!Number.isSafeInteger(t)||!Number.isSafeInteger(n)||t<1||n<1||e.length!==t*n)throw Error(`Invalid source mask`);let r=t,i=n,a=-1,o=-1;for(let n=0;n<e.length;n++)if(e[n]){let e=n%t,s=Math.floor(n/t);r=Math.min(r,e),a=Math.max(a,e),i=Math.min(i,s),o=Math.max(o,s)}if(a<r)throw Error(`Empty original logo mask`);return{left:r,top:i,width:a-r+1,height:o-i+1}}function Hm(e,t,n){if(![e.width,e.height,t,n].every(e=>Number.isFinite(e)&&e>0))throw Error(`Invalid logo fit`);let r=Math.min(t*.7/e.width,n*.7/e.height),i=e.width*r,a=e.height*r;return{x:(t-i)/2,y:(n-a)/2,width:i,height:a}}var Um=[{title:`作品位置 01`,category:`待更新`,summary:`作品资料整理中，此处暂未展示正式项目。`},{title:`作品位置 02`,category:`待更新`,summary:`作品资料整理中，此处暂未展示正式项目。`},{title:`作品位置 03`,category:`待更新`,summary:`作品资料整理中，此处暂未展示正式项目。`}];function Wm(e,t,n,r,i){if(![r,i,...e.flat(),...t.flat(2),...n.flat(2)].every(Number.isFinite)||r<=0||i<=0)throw Error(`Invalid control projection`);let a=e.reduce((e,t)=>[e[0]+t[0]/4,e[1]+t[1]/4],[0,0]),o=Math.min(22,a[0],a[1],r-a[0],i-a[1]);for(let e of t){let t=e.reduce((e,t)=>[e[0]+t[0]/4,e[1]+t[1]/4],[0,0]);o=Math.min(o,Math.hypot(t[0]-a[0],t[1]-a[1])/2-.25)}for(let e of n){let t=0,n=!0;for(let r=0;r<4;r++){let i=e[r],s=e[(r+1)%4],c=s[0]-i[0],l=s[1]-i[1],u=c*(a[1]-i[1])-l*(a[0]-i[0]);u&&(t&&Math.sign(u)!==t&&(n=!1),t=Math.sign(u));let d=c*c+l*l,f=d?Math.max(0,Math.min(1,((a[0]-i[0])*c+(a[1]-i[1])*l)/d)):0;o=Math.min(o,Math.hypot(a[0]-i[0]-f*c,a[1]-i[1]-f*l)-.25)}n&&(o=0)}return o=Math.max(0,o),{center:a,radius:o,diameter:o*2,meets44:o>=21.999999}}var Gm={logo:`打开标志档案`,portfolio:`打开作品放映室`,slots:[`打开作品位置 01`,`打开作品位置 02`,`打开作品位置 03`],pending:`待更新`};async function Km(e){let t=new URL(Rm.url,location.href);t.searchParams.set(`sha256`,Rm.sha256);let n=await qp(t.href,Rm.sha256,`original logo PNG`,e),r=await createImageBitmap(new Blob([new Uint8Array(n)]));if(e.aborted||r.width!==Rm.width||r.height!==Rm.height)throw r.close(),Error(`Original logo dimensions changed`);let i=document.createElement(`canvas`);i.width=r.width,i.height=r.height;let a=i.getContext(`2d`,{willReadFrequently:!0});a.drawImage(r,0,0),r.close();let o=$p(a.getImageData(0,0,i.width,i.height).data),s=Vm(o,i.width,i.height),c=a.createImageData(i.width,i.height);for(let e=0;e<o.length;e++)c.data.set([0,0,0,o[e]],e*4);return a.putImageData(c,0,0),{canvas:i,bounds:s,source:Rm,dispose(){i.width=i.height=0}}}function qm(e){if(!Array.isArray(e)||e.length!==4||e.some(e=>!Array.isArray(e)||e.length!==3||!e.every(Number.isFinite)))throw Error(`Terminal plane requires four finite XYZ corners`);let t=e.map(e=>new J(e[0],e[1],e[2])),n=t.map((e,n)=>t[(n+1)%4].clone().sub(e)),r=n.map(e=>e.length()),i=Math.max(...r);if(!r.every(e=>Number.isFinite(e)&&e>Math.max(1e-8,i*1e-6)))throw Error(`Degenerate terminal plane`);let a=n[0].clone().cross(n[3]).normalize(),o=t[0].distanceTo(t[2]);if(a.lengthSq()<.99||!Number.isFinite(o)||Math.abs(t[2].clone().sub(t[0]).dot(a))>o*1e-4)throw Error(`Terminal corners must be coplanar`);for(let e=0;e<4;e++){let t=n[e],i=n[(e+1)%4];if(t.clone().cross(i).dot(a)>=0)throw Error(`Terminal corners must form a convex ordered rectangle`);if(Math.abs(t.dot(i))/(r[e]*r[(e+1)%4])>.001)throw Error(`Terminal edges must be perpendicular`);if(t.clone().add(n[(e+2)%4]).length()>Math.min(r[e],r[(e+2)%4])*.001)throw Error(`Terminal opposite edges must agree`)}return{points:t,width:(r[0]+r[2])/2,height:(r[1]+r[3])/2,normal:a}}function Jm(e){let[t,n,r,i]=e.safeRect,a=e.layer.sourceRect;if(![t,n,r,i,...a].every(Number.isFinite)||r<=0||i<=0||a[2]<=0||a[3]<=0||t<a[0]||n<a[1]||t+r>a[0]+a[2]||n+i>a[1]+a[3])throw Error(`Screen rectangle outside real carrier`)}function Ym(e,t,n,r){if(![t,n,r??0].every(Number.isFinite))throw Error(`Nonfinite terminal point`);if(e.calibrated){Jm(e);let{points:i,normal:a}=qm(e.calibrated.corners),[o,s,c,l]=e.safeRect,u=(t-o)/c,d=(n-s)/l;return i[0].clone().multiplyScalar((1-u)*(1-d)).addScaledVector(i[1],u*(1-d)).addScaledVector(i[2],u*d).addScaledVector(i[3],(1-u)*d).addScaledVector(a,r??0)}let{sourceRect:i,dimensions:a,pivot:o=[.5,.5]}=e.layer;return new J(((t-i[0])/i[2]-o[0])*a[0],(1-o[1]-(n-i[1])/i[3])*a[1],r??.003)}function Xm(e){if(Jm(e),e.calibrated)return qm(e.calibrated.corners).points;let[t,n,r,i]=e.safeRect;return[[t,n],[t+r,n],[t+r,n+i],[t,n+i]].map(([t,n])=>Ym(e,t,n))}function Zm(e){return qm(Xm(e).map(e=>e.toArray()))}function Qm(e,t){let{points:n}=Zm(e);if(e.calibrated?.focus){let t=e.calibrated.focus();if(!t||![t.position,t.target].every(e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite))||!Number.isFinite(t.fov)||t.fov<=0||t.fov>=180||new J(...t.position).distanceTo(new J(...t.target))<1e-8)throw Error(`Invalid authored terminal focus`);return{position:[...t.position],target:[...t.target],fov:t.fov}}if(!Number.isFinite(t)||t<=0)throw Error(`Invalid terminal focus aspect`);e.carrier.updateWorldMatrix(!0,!1);let r=n.map(t=>e.carrier.localToWorld(t.clone())),i=r.reduce((e,t)=>e.add(t),new J).multiplyScalar(.25),a=r[1].clone().sub(r[0]),o=r[0].clone().sub(r[3]),s=a.clone().cross(o).normalize(),c=Math.max(2.2,Math.max(o.length(),a.length()/t)/(2*Math.tan(38*Math.PI/360)))*1.35;return{position:i.clone().addScaledVector(s,c).toArray(),target:i.toArray(),fov:38}}function $m(e){if(e.cinema&&(!Array.isArray(e.cinema.buttons)||e.cinema.buttons.length!==3))throw Error(`Cinema requires three real physical controls`);if(e.initialPortfolioIndex!=null&&(!Number.isInteger(e.initialPortfolioIndex)||e.initialPortfolioIndex<0||e.initialPortfolioIndex>=Um.length))throw Error(`Invalid initial portfolio selection`);for(let t of[e.logo,e.cinema?.screen,...e.cinema?.buttons??[]])t&&Zm(t);let{camera:t,viewport:n}=e,r=new Na,i=[],a=!1,s=!1,c=-1,l=0,u,d={source:e.ink.source,logoInkBounds:e.ink.bounds,logoSafeRect:e.logo?.safeRect,portfolioIndex:0,portfolioImageState:`placeholder`,projected:[]};function f(e,n,i){i.carrier.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!0,!1);let a=n.reduce((e,t)=>e.add(i.carrier.localToWorld(t.clone())),new J).multiplyScalar(.25).project(t);if(Math.abs(a.x)>=1||Math.abs(a.y)>=1||Math.abs(a.z)>=1)return!1;r.setFromCamera(new q(a.x,a.y),t);let o=r.intersectObject(e,!1)[0];return!!(o&&p(e,o.distance))}function p(e,t){let n=e;for(;n.parent;)n=n.parent;return!r.intersectObject(n,!0).some(n=>n.distance>=t-1e-4||n.object===e||!(n.object instanceof Or)?!1:ou(n))}function m(l,d,m){let{points:h,width:g,height:v}=Zm(l),y=document.createElement(`button`),b=document.createElement(`canvas`);b.width=d===`logo`?768:1024,b.height=Math.max(l.calibrated?1:64,Math.round(b.width*v/g));let x=b.getContext(`2d`);if(!x)throw b.width=b.height=0,Error(`Terminal canvas unavailable`);let S=new Lr(b);S.colorSpace=Ne,S.minFilter=S.magFilter=o,S.generateMipmaps=!1;let C=new ir;C.setAttribute(`position`,new Kn(h.flatMap(e=>e.toArray()),3)),C.setAttribute(`uv`,new Kn([0,1,1,1,1,0,0,0],2)),C.setIndex([0,3,1,1,3,2]);let w=new gr({map:S,transparent:!0,depthWrite:!1,depthTest:!0,side:2,toneMapped:!1}),T=new Or(C,w);T.name=`${l.layer.id}-screen-content`,T.renderOrder=1,l.carrier.add(T),y.type=`button`,y.className=`station-diegetic-button`,y.hidden=!0,y.dataset.cameraDragIgnore=`true`,y.setAttribute(`aria-label`,d===`logo`?Gm.logo:m==null?Gm.portfolio:Gm.slots[m]),y.setAttribute(`aria-controls`,`terminal-focus-overlay`),l.shape===`circle`&&(y.style.borderRadius=`50%`);let E=()=>Qm(l,t.aspect),D=i=>{if(!(!a||y.hidden||y.disabled||s)&&!(m!=null&&!f(T,h,l))){if(i.detail){let e=n.getBoundingClientRect(),a=i.clientX-e.left,o=i.clientY-e.top;if(r.setFromCamera(new q(a/e.width*2-1,1-o/e.height*2),t),m!=null){let e=O.target;if(!e||Math.hypot(a-e.center[0],o-e.center[1])>e.radius)return;let t=h.map(e=>l.carrier.localToWorld(e.clone())),n=new cr().setFromCoplanarPoints(t[0],t[1],t[2]),i=r.ray.intersectPlane(n,new J);if(!i||!p(T,r.ray.origin.distanceTo(i)))return}else{let e=r.intersectObject(T,!1)[0];if(!e||!p(T,e.distance)||l.shape===`circle`&&e.uv&&Math.hypot(e.uv.x-.5,e.uv.y-.5)>.5)return}}d===`portfolio`&&m!=null&&_(m),e.onOpen({kind:d,index:d===`portfolio`?m??c:void 0,button:y,focus:d===`portfolio`&&u?u.focus:E})}},O={surface:l,points:h,canvas:b,context:x,texture:S,geometry:C,material:w,mesh:T,button:y,kind:d,index:m,focus:E,click:D};return i.push(O),e.host.append(y),y.addEventListener(`click`,D),O}function h(){for(let e of i.splice(0))e.button.removeEventListener(`click`,e.click),e.button.remove(),e.mesh.removeFromParent(),e.geometry.dispose(),e.material.dispose(),e.texture.dispose(),e.canvas.width=e.canvas.height=0}try{if(e.logo){let t=m(e.logo,`logo`),n=t.context,r=e.ink.bounds,i=Hm(r,t.canvas.width,t.canvas.height);n.drawImage(e.ink.canvas,r.left,r.top,r.width,r.height,i.x,i.y,i.width,i.height),t.texture.needsUpdate=!0}e.cinema&&(u=m(e.cinema.screen,`portfolio`),e.cinema.buttons.forEach((e,t)=>{let n=m(e,`portfolio`,t),r=n.context;r.fillStyle=`#242029`,r.beginPath(),r.ellipse(n.canvas.width/2,n.canvas.height/2,n.canvas.width/2,n.canvas.height/2,0,0,Math.PI*2),r.fill(),r.fillStyle=`#f4e3bd`,r.font=`600 ${Math.round(n.canvas.height*.48)}px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(String(t+1).padStart(2,`0`),n.canvas.width/2,n.canvas.height/2),n.texture.needsUpdate=!0}),_(e.initialPortfolioIndex??0))}catch(e){throw s=!0,l++,h(),e}function g(){if(!u)return;let e=u,t=e.canvas,n=e.context,r=Um[c];n.fillStyle=`#171920`,n.fillRect(0,0,t.width,t.height),n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#d7c9ad`,n.font=`${Math.round(t.height*.075)}px sans-serif`,n.fillText(r.title,t.width/2,t.height*.42),n.font=`${Math.round(t.height*.042)}px sans-serif`,n.fillText(Gm.pending,t.width/2,t.height*.6),e.texture.needsUpdate=!0}async function _(e){if(s||!u||!Number.isInteger(e)||e<0||e>=Um.length||e===c)return;c=e,d.portfolioIndex=e,d.portfolioImageState=`placeholder`;let t=++l;g();for(let t of i)t.index!=null&&t.button.setAttribute(`aria-pressed`,String(t.index===e));let n=Um[e].image;if(n)try{let e=new URL(n,location.href);if(e.origin!==location.origin)throw Error(`Portfolio image must be local`);let r=await fetch(e);if(!r.ok)throw Error(`Portfolio image unavailable`);let i=await createImageBitmap(await r.blob());if(s||t!==l){i.close();return}let a=u,o=a.canvas,c=a.context,f=Math.min(o.width/i.width,o.height/i.height),p=i.width*f,m=i.height*f;c.fillStyle=`#171920`,c.fillRect(0,0,o.width,o.height),c.drawImage(i,(o.width-p)/2,(o.height-m)/2,p,m),i.close(),a.texture.needsUpdate=!0,d.portfolioImageState=`configured-image`}catch{!s&&t===l&&(d.portfolioImageState=`image-unavailable-placeholder`)}}return{selectPortfolio:_,focus:e=>i.find(t=>t.kind===e&&t.index==null)?.focus(),diagnostics:d,update(e,o){a=e&&o,d.projected=[];for(let o of i){o.mesh.visible=e,o.surface.carrier.updateWorldMatrix(!0,!1);let i=o.points.map(e=>o.surface.carrier.localToWorld(e.clone()).project(t)),s=i.map(e=>[(e.x+1)*n.clientWidth/2,(1-e.y)*n.clientHeight/2]),c=e&&i.every(e=>Number.isFinite(e.x)&&Number.isFinite(e.y)&&e.z>-1&&e.z<1&&Math.abs(e.x)<1&&Math.abs(e.y)<1);if(c){let e=i.reduce((e,t)=>e.add(t),new J).multiplyScalar(.25);r.setFromCamera(new q(e.x,e.y),t);let n=r.intersectObject(o.mesh,!1)[0];c=!!(n&&p(o.mesh,n.distance))}o.button.hidden=!c,o.button.disabled=!a,o.button.style.transform=Im(s,100,100),d.projected.push({kind:o.kind,index:o.index,quad:s,visible:c})}for(let e=0;e<i.length;e++){let t=i[e],r=d.projected[e];if(t.index==null)continue;t.target=Wm(r.quad,d.projected.filter(e=>e.index!=null&&e!==r).map(e=>e.quad),d.projected.filter(e=>e.index==null&&e.visible).map(e=>e.quad),n.clientWidth,n.clientHeight),r.target=t.target;let{center:a,radius:o}=t.target;t.button.hidden=!r.visible||o<=0,t.button.style.width=`${o*2}px`,t.button.style.height=`${o*2}px`,t.button.style.transform=`translate(${a[0]-o}px,${a[1]-o}px)`,t.button.style.borderRadius=`50%`,t.button.style.clipPath=`circle(50%)`}},dispose(){s||(s=!0,l++,h())}}}var eh=(e,t)=>e.querySelector(t),th=()=>new Promise(e=>requestAnimationFrame(()=>e()));function nh(e){if(e?.trim())try{let t=new URL(e,location.href);return t.protocol===`http:`||t.protocol===`https:`?t.href:void 0}catch{return}}var rh=e=>new Promise((t,n)=>e.toBlob(e=>e?t(e):n(Error(`PNG 编码失败`)),`image/png`));async function ih(e,t={}){if(t.signal?.aborted)return;let n=t.viewport??eh(e,`.journey-viewport`),r=t.cameraLayer??eh(e,`.depth-camera`),i=document.createElement(`div`);i.className=`scene-terminal-layer`,i.innerHTML=`
    <button type="button" class="terminal-prop-trigger logo-prop-trigger" aria-label="打开标志档案" aria-controls="terminal-focus-overlay" aria-expanded="false" hidden><span class="terminal-prop-case"><span class="terminal-prop-screen"><small>MMW / 02</small><strong>标志档案</strong></span><span class="terminal-prop-stand" aria-hidden="true"></span></span></button>
    <button type="button" class="terminal-prop-trigger portfolio-prop-trigger" aria-label="打开作品放映室" aria-controls="terminal-focus-overlay" aria-expanded="false" hidden><span class="terminal-prop-case"><span class="terminal-prop-screen"><small>MMW / 03</small><strong>作品放映室</strong></span><span class="terminal-prop-stand" aria-hidden="true"></span></span></button>
    <section class="personal-terminal logo-terminal" aria-label="标志档案" hidden>
      <div class="terminal-floor" aria-hidden="true"></div>
      <div class="terminal-pedestal" aria-hidden="true"></div>
      <div class="terminal-shell">
        <div class="terminal-edge" aria-hidden="true"></div>
        <div class="terminal-bezel">
          <div class="terminal-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
          <div class="terminal-glass logo-glass">
            <div class="terminal-heading"><div><span class="terminal-code">MMW / 02</span><h2>标志档案</h2><p>选择一组，再挑选要看的版本。</p></div><span class="terminal-led" aria-hidden="true"></span></div>
            <div class="logo-controls"><label>分类<select class="logo-category"><option value="">全部</option></select></label><label>搜索标志<input class="logo-search" type="search" placeholder="输入名称或材质"></label></div>
            <div class="logo-workspace"><div class="logo-index"><div class="logo-count" aria-live="polite"></div><div class="logo-groups" role="group" aria-label="标志组"></div></div><div class="logo-detail"><div class="logo-preview"><canvas width="900" height="600" role="img" aria-label="标志应用预览"></canvas><div class="logo-preview-state" role="status" aria-live="polite"></div></div><div class="logo-selection"><div><span>当前版本</span><h3></h3></div><div class="logo-variants" role="group" aria-label="选择版本"></div></div><div class="logo-downloads"><a class="download-transparent" aria-disabled="true" download>下载透明 PNG</a><a class="download-scene" aria-disabled="true" download>下载应用示意图</a></div><p class="logo-download-note">透明图仅供视觉研究；正式制作须另行审阅。</p></div></div>
            <div class="terminal-foot"><span>应用试作 · 非生产文件</span><div><a class="download-catalog" href="examples/catalog.json" download>下载目录数据</a><a class="download-source" hidden>下载原始文件</a></div></div>
          </div>
        </div>
        <div class="terminal-side" aria-hidden="true"></div>
      </div>
    </section>
    <section class="personal-terminal portfolio-terminal" aria-label="作品放映室" hidden>
      <div class="terminal-floor" aria-hidden="true"></div><div class="terminal-pedestal" aria-hidden="true"></div>
      <div class="terminal-shell"><div class="terminal-edge" aria-hidden="true"></div><div class="terminal-bezel"><div class="terminal-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="terminal-glass portfolio-glass"><div class="terminal-heading"><div><span class="terminal-code">MMW / 03</span><h2>作品放映室</h2><p>按屏幕旁的按钮切换作品位置。</p></div><span class="terminal-led" aria-hidden="true"></span></div><div class="portfolio-content"><div class="portfolio-image" aria-hidden="true"><span>待更新</span></div><div class="portfolio-copy"><span class="portfolio-category"></span><h3></h3><p></p><a class="portfolio-link" hidden target="_blank" rel="noopener noreferrer">查看作品</a></div></div></div></div><div class="terminal-side" aria-hidden="true"><span class="side-grille"></span></div></div>
      <div class="portfolio-switches" role="group" aria-label="切换作品"><div class="portfolio-numbers"></div><div class="portfolio-step"><button type="button" class="portfolio-prev" aria-label="上一个作品">‹</button><button type="button" class="portfolio-next" aria-label="下一个作品">›</button></div></div>
    </section>`,r.append(i);let a=eh(i,`.logo-terminal`),o=eh(i,`.portfolio-terminal`),s=eh(i,`.logo-prop-trigger`),c=eh(i,`.portfolio-prop-trigger`),l=document.createElement(`div`);l.id=`terminal-focus-overlay`,l.className=`terminal-focus-overlay`,l.setAttribute(`role`,`dialog`),l.setAttribute(`aria-modal`,`true`),l.hidden=l.inert=!0,l.append(a,o),n.append(l);let u=document.createElement(`button`);u.type=`button`,u.className=`scene-screen-toggle`,u.textContent=`返回街区`,l.prepend(u);let d=!1,f=!1,p=0,m,h=eh(a,`.logo-category`),g=eh(a,`.logo-search`),_=eh(a,`.logo-groups`),v=eh(a,`.logo-variants`),y=eh(a,`.logo-preview canvas`),b=eh(a,`.logo-preview-state`),x=eh(a,`.logo-count`),S=eh(a,`.download-transparent`),C=eh(a,`.download-scene`),w=eh(a,`.logo-download-note`),T=eh(a,`.download-source`),E=eh(o,`.portfolio-copy h3`),D=eh(o,`.portfolio-category`),O=eh(o,`.portfolio-copy p`),k=eh(o,`.portfolio-image`),A=eh(o,`.portfolio-link`),j=eh(o,`.portfolio-numbers`),M,N,P,F=0,I=Number.isInteger(t.initialPortfolioIndex)&&t.initialPortfolioIndex>=0&&t.initialPortfolioIndex<Um.length?t.initialPortfolioIndex:0,L=``,R=0,ee=``,te=``;function ne(){R++,ee&&URL.revokeObjectURL(ee),te&&URL.revokeObjectURL(te),ee=te=``;for(let e of[C,S])e.removeAttribute(`href`),e.setAttribute(`aria-disabled`,`true`);y.getContext(`2d`).clearRect(0,0,y.width,y.height)}async function re(){if(ne(),L!==`print`||!d||!P)return;let e=R,t=P.presentations[F];if(t){b.textContent=`正在生成预览…`,w.textContent=t.type===`mask`?`此效果依赖场景底色，无法单独导出透明图层。`:`透明图仅供视觉研究；正式制作须另行审阅。`,S.title=t.type===`mask`?w.textContent:``;try{await th();let n=await pm(t,t.background,900,600);if(e!==R)return;y.getContext(`2d`).drawImage(n,0,0),y.setAttribute(`aria-label`,`${P.title}：${t.label}`);let r=await rh(n);if(e!==R)return;if(ee=URL.createObjectURL(r),C.href=ee,C.download=`CONCEPT_ONLY-${P.id}-${F+1}-scene.png`,C.setAttribute(`aria-disabled`,`false`),t.type===`material`){await th();let n=await Lm(_m(900,600),t);if(e!==R)return;let r=await rh(n);if(e!==R)return;te=URL.createObjectURL(r),S.href=te,S.download=`CONCEPT_ONLY-${P.id}-${F+1}-transparent.png`,S.setAttribute(`aria-disabled`,`false`)}b.textContent=``}catch{e===R&&(b.textContent=`预览生成失败，请选择其他版本。`)}}}function ie(){if(v.replaceChildren(),!P)return;let e=P.presentations[F];eh(a,`.logo-selection h3`).textContent=`${P.title} / ${e.label}`,P.presentations.forEach((e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.textContent=e.label,n.setAttribute(`aria-pressed`,String(t===F)),n.addEventListener(`click`,()=>{F=t,ie(),re()}),v.append(n)})}function z(){if(!M)return;let e=g.value.trim().toLocaleLowerCase(),t=M.filter(t=>(!h.value||t.category===h.value)&&[t.title,t.category,...t.keywords??[],...t.presentations.map(e=>e.label)].join(` `).toLocaleLowerCase().includes(e));(!P||!t.includes(P))&&(P=t[0],F=P?Math.max(0,P.presentations.findIndex(t=>t.label.toLocaleLowerCase().includes(e))):0),_.replaceChildren(),t.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`logo-group`,t.textContent=e.title,t.setAttribute(`aria-pressed`,String(e===P)),t.addEventListener(`click`,()=>{P=e,F=0,z()}),_.append(t)});let n=t.reduce((e,t)=>e+t.presentations.length,0);x.textContent=t.length?`${t.length} 组 · ${n} 项`:`没有找到匹配的标志，请试试其他关键词。`,eh(a,`.logo-detail`).hidden=!P,ie(),re()}async function ae(){if(!M)return N||(N=(async()=>{try{let e=await fetch(`examples/catalog.json`);if(!e.ok)throw Error(String(e.status));M=(await e.json()).examples;for(let e of new Set(M.map(e=>e.category)))h.add(new Option(e,e));z()}catch{b.textContent=`目录读取失败，请稍后重试。`}finally{N=void 0}})(),N)}h.addEventListener(`change`,z),g.addEventListener(`input`,z),fetch(`gallery-data.json`).then(e=>e.ok?e.json():null).then(e=>{let t=e?.source?.path;!t||!/^originals\/[\w.-]+\.png$/.test(t)||(T.href=t,T.download=t.split(`/`).pop(),T.hidden=!1)}).catch(()=>{});function oe(){if(t.signal?.aborted)return;let e=Um[I];E.textContent=e.title,D.textContent=e.category,O.textContent=e.summary;let n=nh(e.image),r=nh(e.url),i=!!(n&&r);if(k.replaceChildren(),i){let t=new Image;t.src=n,t.alt=e.title,t.onerror=()=>{k.contains(t)&&(t.remove(),k.textContent=`待更新`,A.hidden=!0)},k.append(t),A.href=r,A.hidden=!1}else k.textContent=`待更新`,A.removeAttribute(`href`),A.hidden=!0;j.querySelectorAll(`button`).forEach((e,t)=>e.setAttribute(`aria-pressed`,String(t===I))),t.onPortfolioChange?.(I)}function se(e){t.signal?.aborted||!Number.isInteger(e)||e<0||e>=Um.length||e===I||(I=e,oe())}Um.forEach((e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.textContent=String(t+1).padStart(2,`0`),n.setAttribute(`aria-label`,`作品位置 ${String(t+1).padStart(2,`0`)}`),n.addEventListener(`click`,()=>se(t)),j.append(n)}),eh(o,`.portfolio-prev`).addEventListener(`click`,()=>{se((I-1+Um.length)%Um.length)}),eh(o,`.portfolio-next`).addEventListener(`click`,()=>{se((I+1)%Um.length)}),oe();let ce,le;function ue(){le||(le={html:document.documentElement.style.overflow,body:document.body.style.overflow},document.documentElement.style.overflow=`hidden`,document.body.style.overflow=`clip`,document.body.classList.add(`terminal-focused`))}function de(){le&&=(document.documentElement.style.overflow=le.html,document.body.style.overflow=le.body,document.body.classList.remove(`terminal-focused`),void 0)}function fe(){let e=d&&(L===`print`||L===`underground`),r=e&&f;l.hidden=l.inert=!r,r||l.classList.remove(`revealed`),l.dataset.open=String(r),l.setAttribute(`aria-label`,L===`print`?`标志档案`:`作品放映室`),n.dataset.terminalOpen=String(r),a.hidden=a.inert=!r||L!==`print`,o.hidden=o.inert=!r||L!==`underground`,s.hidden=!!t.externalCarrier||L!==`print`||r,c.hidden=!!t.externalCarrier||L!==`underground`||r,s.setAttribute(`aria-expanded`,String(e&&L===`print`)),c.setAttribute(`aria-expanded`,String(e&&L===`underground`))}function pe(n=!0){if(d){if(m&&clearTimeout(m),m=void 0,d=f=!1,p++,fe(),de(),ne(),e.dispatchEvent(new CustomEvent(`terminalfocus`,{detail:{id:null}})),n&&ce&&!ce.hidden)ce.focus({preventScroll:!0});else if(n&&t.externalCarrier&&ce){let e=ce;requestAnimationFrame(()=>{!d&&!t.signal?.aborted&&e.focus({preventScroll:!0})})}ce=void 0}}function me(r,i){if(d||L!==r)return;ce=i,d=!0;let a=++p;ue(),fe(),e.dispatchEvent(new CustomEvent(`terminalfocus`,{detail:{id:r}}));let o=()=>{m=void 0,!(!d||L!==r||a!==p)&&(f=!0,fe(),requestAnimationFrame(()=>{f&&l.classList.add(`revealed`)}),u.focus({preventScroll:!0}),r===`print`&&(M?re():ae()))};t.beforeReveal?t.beforeReveal().then(()=>{t.signal?.aborted||o()},()=>pe()):e.classList.contains(`continuous-journey`)&&n.dataset.paused!==`true`&&!matchMedia(`(prefers-reduced-motion: reduce)`).matches?m=setTimeout(o,600):o()}s.addEventListener(`click`,()=>me(`print`,s)),c.addEventListener(`click`,()=>me(`underground`,c)),e.addEventListener(`terminalrequest`,t=>{let n=t.detail;(n?.id===`print`||n?.id===`underground`)&&n.trigger instanceof HTMLButtonElement&&e.contains(n.trigger)&&me(n.id,n.trigger)},{signal:t.signal}),u.addEventListener(`click`,()=>pe());function he(e,t,n){let r=e instanceof Element?e:null;for(;r&&r!==l;){if(r instanceof HTMLElement){let e=getComputedStyle(r),i=r.scrollHeight-r.clientHeight,a=r.scrollWidth-r.clientWidth;if(Math.abs(n)>=Math.abs(t)&&i>1&&/(auto|scroll)/.test(e.overflowY)&&(n>0&&r.scrollTop<i-1||n<0&&r.scrollTop>1)||Math.abs(t)>Math.abs(n)&&a>1&&/(auto|scroll)/.test(e.overflowX)&&(t>0&&r.scrollLeft<a-1||t<0&&r.scrollLeft>1))return!0}r=r.parentElement}return!1}l.addEventListener(`wheel`,e=>{he(e.target,e.deltaX,e.deltaY)||e.preventDefault()},{passive:!1});let ge;l.addEventListener(`touchstart`,e=>{let t=e.touches[0];ge=t?{x:t.clientX,y:t.clientY}:void 0},{passive:!0}),l.addEventListener(`touchmove`,e=>{let t=e.touches[0];if(!t||!ge)return;let n=ge.x-t.clientX,r=ge.y-t.clientY;ge={x:t.clientX,y:t.clientY},he(e.target,n,r)||e.preventDefault()},{passive:!1}),document.addEventListener(`keydown`,e=>{if(!d)return;if(e.key===`Escape`){e.preventDefault(),pe();return}if(e.key!==`Tab`)return;let t=Array.from(l.querySelectorAll(`button:not(:disabled),a[href],input,select,textarea`)).filter(e=>!e.closest(`[hidden]`)&&e.getClientRects().length>0);if(!t.length)return;let n=t[0],r=t.at(-1);l.contains(document.activeElement)?e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus()):(e.preventDefault(),n.focus())},{signal:t.signal});function _e(e){pe(!1),e!==L&&(L=e,d=!1,fe(),ne())}e.addEventListener(`scenechange`,e=>{let n=e.detail;n?.id&&_e(t.sceneForTerminal?.(n.id)??n.id)},{signal:t.signal}),t.signal?.addEventListener(`abort`,()=>{pe(!1),ne(),i.remove(),l.remove()},{once:!0});let ve=n.dataset.scene||e.querySelector(`.world-scene:not([hidden])`)?.dataset.scene||`entry`;_e(t.sceneForTerminal?.(ve)??ve)}var ah=(e,t,n,r,i,a,o=`present`)=>({group:e,label:t,carrier:n,item:r,quad:i,mobileQuad:a,assetStatus:o}),oh={"09-embroidery":{file:`prop-coat`,quad:[[186,293],[449,297],[448,541],[187,538]],desktop:[541,40,.52]},"10-rubber":{file:`prop-robot`,quad:[[184,316],[459,338],[460,459],[184,443]],desktop:[972,546,.35],mobile:[115,1320,.5]},"27-graphic":{file:`prop-poster`,quad:[[91,105],[365,94],[366,595],[91,587]],desktop:[56,510,.43]}},sh=e=>{let t=oh[e],[n,r,i]=t.desktop;return t.quad.map(([e,t])=>[n+e*i,r+t*i])},ch=[{id:`entry`,name:`高架入口`,phrase:`午夜街区`,mobileSize:[941,1672],objects:[ah(`13-digital`,`站台终端`,`screen`,0,[[1538,147],[1659,134],[1658,211],[1536,222]],[[749,993],[844,972],[844,1113],[748,1131]]),ah(`14-motion`,`轨旁灯牌`,`screen`,3,[[747,449],[790,448],[790,510],[747,511]],[[347,1083],[402,1083],[402,1142],[347,1143]]),ah(`16-scale`,`塔楼招牌`,`screen`,1,[[896,88],[995,42],[996,440],[895,451]],[[555,275],[685,274],[685,744],[558,754]]),ah(`19-combination`,`站台联名灯箱`,`lightbox`,0,[[918,636],[1087,705],[1087,834],[918,749]],[[179,1259],[507,1393],[507,1518],[179,1358]])]},{id:`street`,name:`霓虹侧街`,phrase:`霓虹与墨迹`,mobileSize:[852,1846],objects:[ah(`01-standard`,`卷帘门`,`shutter`,1,[[150,250],[479,293],[477,603],[151,565]],[[0,489],[300,626],[300,1270],[0,1170]]),ah(`02-color`,`电箱标识`,`metal`,0,[[621,440],[670,458],[669,555],[621,540]],[[370,932],[418,956],[418,1078],[370,1067]]),ah(`03-contrast`,`黑白店牌`,`paper`,0,[[655,43],[731,22],[753,314],[632,342]],[[386,311],[475,288],[493,644],[377,676]]),ah(`04-relationship`,`镂空灯罩`,`lightbox`,1,[[1420,123],[1481,122],[1507,346],[1444,348]],[[783,472],[834,470],[850,700],[799,703]]),ah(`12-stencil`,`导向投影`,`wall`,0,[[899,548],[978,548],[978,618],[899,618]],[[74,271],[303,521],[313,597],[72,416]])]},{id:`print`,name:`深夜印刷铺`,phrase:`纸上电流`,mobileSize:[853,1844],objects:[ah(`05-print`,`橱窗海报`,`paper`,0,[[50,91],[352,170],[427,627],[89,627]],[[60,421],[422,477],[482,1085],[93,1132]]),ah(`06-emboss`,`压纹封面`,`paper`,0,[[484,705],[866,671],[1116,719],[735,785]],[[0,1402],[327,1372],[496,1424],[162,1480]]),ah(`07-foil`,`烫箔包装`,`box`,3,[[620,575],[744,573],[744,678],[620,685]],[[127,1264],[234,1270],[234,1356],[127,1348]]),ah(`17-content`,`封面排版`,`paper`,0,[[1015,842],[1216,785],[1533,866],[1361,927]],[[369,1584],[632,1526],[837,1616],[554,1697]]),ah(`18-placement`,`票券印刷`,`paper`,1,[[1358,674],[1499,647],[1540,768],[1361,793]],[[619,1425],[770,1403],[801,1515],[641,1554]])]},{id:`workshop`,name:`改装店`,phrase:`铬色余温`,mobileSize:[853,1844],objects:[ah(`08-metal`,`金属店牌`,`metal`,2,[[61,52],[490,141],[501,452],[57,377]],[[22,301],[312,385],[333,812],[42,736]]),ah(`09-embroidery`,`外套绣章`,`fabric`,2,sh(`09-embroidery`),[[466,522],[569,541],[570,661],[467,640]]),ah(`10-rubber`,`机器人胶章`,`rubber`,0,sh(`10-rubber`),void 0),ah(`20-style`,`改装外壳`,`metal`,4,[[15,561],[207,561],[207,693],[12,709]],[[330,1213],[481,1177],[480,1458],[331,1498]])]},{id:`glass`,name:`玻璃廊`,phrase:`折射之后`,mobileSize:[853,1844],objects:[ah(`23-tone`,`去色玻璃`,`glass`,3,[[61,53],[226,93],[226,493],[61,464]],[[90,485],[187,543],[187,1116],[90,1082]]),ah(`24-inversion`,`反相灯箱`,`glass`,2,[[245,101],[411,142],[411,520],[245,492]],[[205,555],[352,637],[352,1126],[205,1090]]),ah(`25-glass`,`磨砂橱窗`,`glass`,2,[[429,144],[615,193],[615,561],[429,524]],[[369,645],[508,721],[508,1164],[369,1128]]),ah(`29-context`,`跨明暗橱窗`,`glass`,2,[[706,188],[941,234],[935,615],[704,584]],[[526,735],[654,805],[653,1195],[526,1166]])]},{id:`underground`,name:`地下放映区`,phrase:`低频回声`,mobileSize:[853,1844],objects:[ah(`11-light`,`顶灯字标`,`lightbox`,1,[[615,13],[877,137],[877,233],[615,105]],[[173,119],[474,391],[474,499],[173,235]]),ah(`15-background`,`映像标识`,`screen`,6,[[990,192],[1148,138],[1157,532],[995,562]],[[591,350],[801,309],[837,976],[624,1050]]),ah(`22-levels`,`投影墙`,`wall`,2,[[0,119],[792,219],[790,565],[0,495]],[[0,327],[467,565],[469,1069],[0,936]]),ah(`26-chroma`,`彩色灯屏`,`screen`,7,[[1194,128],[1352,54],[1390,530],[1200,555]],[[532,993],[580,1006],[579,1111],[532,1098]]),ah(`27-graphic`,`双色海报`,`paper`,9,sh(`27-graphic`),[[54,1273],[168,1287],[162,1483],[51,1470]]),ah(`28-boundary`,`边缘试验屏`,`screen`,3,[[1251,669],[1299,645],[1305,786],[1257,817]],[[57,1105],[91,1110],[91,1219],[57,1215]])]}],lh=e=>document.getElementById(e),uh=lh(`station-world`),dh=lh(`station-stage`),fh=uh.querySelector(`.station-chrome`),ph=lh(`station-status`),mh=lh(`station-retry`),hh=[`entry`,`street`,`print`,`workshop`,`glass`,`cinema`],gh={print:{placement:ff,supportLayerIds:Wd},glass:{placement:Vd,supportLayerIds:Cd},cinema:{placement:Vf,supportLayerIds:hf}};new URLSearchParams(location.search);var _h=new AbortController,vh=new un,$=nl({residentBounds:hh.map(()=>({x:200,y:70,width:600,height:860})),residentDepthScale:1.04}),yh=!1,bh=0,xh,Sh=()=>matchMedia(`(orientation:portrait)`).matches;function Ch(e){let t=uh.clientWidth,n=uh.clientHeight,r=getComputedStyle(uh),i=(parseFloat(r.paddingTop)||0)+(parseFloat(r.paddingBottom)||0);if(Sh()){let r=t/($.tileWidth/$.height),a=r+(Math.max(180,n-220-i)-r)*bh;if(yh&&xh!==void 0&&e!==void 0){let n=Math.abs(e-xh);n>2?a=Math.min(a,t*$.height/(2*(295+n))):xh=void 0}return{aspect:t/a,height:a}}let a=matchMedia(`(max-height:500px) and (orientation:landscape)`).matches?Math.max(160,n-104-i):n;return{aspect:Math.min($.maxAspect,t/a),height:a}}var wh=Ch().aspect,Th=Math.max(0,hh.indexOf(location.hash.slice(1))),Eh=!1,Dh=!1,Oh=document.hidden,kh=!1,Ah=!1,jh=il($,{aspect:wh,initialX:$.stationX(Th,wh),maxSpeed:1450,maxAcceleration:2100,frequency:7}),Mh=ol($,wh),Nh=new Set,Ph=!1,Fh={station:Th};function Ih(){let e=$.cameraRange(wh);return{centers:hh.map((e,t)=>kg(t)),radius:[88,104,92,100,96,86],minX:e.min,maxX:e.max}}var Lh=Np(Ih(),{initialStation:Th}),Rh=(e=performance.now())=>Math.max(e,Lh.lastEventAt??0);function zh(e,t=!0){Lh=Pp(Lh,e,Ih()),t&&!Ph&&!eg&&tg===0&&(jh.setTargetX(Lh.targetX),Fh=Lh.phase===`travel`?{station:Lh.station}:{x:Lh.targetX})}var Bh=new fa(38,wh,16,15e3),Vh=td({frequency:9,maxSpeed:2.5,maxAcceleration:12}),Hh=new Map,Uh=new Map,Wh=new Set,Gh=new Map,Kh=[],qh,Jh,Yh,Xh,Zh=0,Qh=0,$h=!1,eg=!1,tg=0,ng,rg,ig=0;function ag(e){if(Dh||!Number.isInteger(e)||e<0||e>=Um.length)return;ig=e;let t=Hh.get(10)?.terminals;t&&t.diagnostics.portfolioIndex!==e&&t.selectPortfolio(e)}var og,sg=!1,cg={x:0,y:0,source:`none`},lg,ug,dg=!1,fg=[],pg=matchMedia(`(prefers-reduced-motion: reduce)`),mg=Hp(dh,e=>{cg=e},{allowDrag:()=>yh}),hg=Vp(mg,()=>cg),gg=lh(`station-debug`);gg.hidden=!0;var _g={};function vg(e,t,n){try{return n()}finally{}}var yg,bg,xg={};function Sg(e){e.dispose(),Gh.get(e)?.close(),Gh.delete(e)}async function Cg(e,t,n){let r=new URL(e.url,t);if(r.origin!==location.origin)throw Error(`External world texture rejected`);let i=await qp(r.href,e.sha256,n,_h.signal),a=new Blob([new Uint8Array(i)]),s=await createImageBitmap(a,{imageOrientation:`flipY`,premultiplyAlpha:`none`});if(Dh||s.width!==e.width||s.height!==e.height)throw s.close(),Error(`Native texture dimensions changed: ${n}`);let c=new bt(s);c.flipY=!1,c.colorSpace=Ne,c.minFilter=c.magFilter=o,c.generateMipmaps=!1,c.needsUpdate=!0,Gh.set(c,s);let l=await createImageBitmap(a),u=document.createElement(`canvas`);u.width=l.width,u.height=l.height;try{let e=u.getContext(`2d`,{willReadFrequently:!0});if(!e)throw Error(`Native alpha readback unavailable`);e.drawImage(l,0,0),Xl(c,{width:u.width,height:u.height,data:e.getImageData(0,0,u.width,u.height).data})}catch(e){throw Sg(c),e}finally{l.close(),u.width=u.height=0}if(Dh)throw Sg(c),Error(`World disposed`);return vg(`texture-upload`,n,()=>qh.initTexture(c)),{texture:c,width:e.width,height:e.height}}function wg(e,t,n,r,i){let[a,o,s,c]=n,l={id:r,textureId:`native`,sourceRect:n,dimensions:[s,c],placement:[0,0,0],plane:`front`};return i?{layer:l,carrier:e,safeRect:n,calibrated:{corners:i.terminalCalibration(n,Bh.aspect).corners,focus:()=>i.terminalCalibration(n,Bh.aspect).focus}}:{layer:l,carrier:e,safeRect:n,calibrated:{corners:[[a,$.height-o,1],[a+s,$.height-o,1],[a+s,$.height-o-c,1],[a,$.height-o-c,1]],focus:()=>{let e=Math.min($.height,Math.max(c,s/Bh.aspect)*1.3),n=t.index*$.tileWidth+a+s/2,r=Math.max(e/2,Math.min($.height-e/2,$.height-o-c/2));return{position:[n,r,e/(2*Math.tan(38*Math.PI/360))],target:[n,r,0],fov:38}}}}}async function Tg(e){if(Hh.has(e))return;if(Uh.has(e))return Uh.get(e);let t=(async()=>{let t=Jh.tiles[e];rl(t,$.tiles[e].rect);let n=await Cg(t,Yh,`world-${e}`),r,i,a;try{if(t.connectedRoom){if(!t.clean||!t.columns)throw Error(`Connected native room requires column backing receipt`);r=await Cg(t.clean,Yh,`world-clean-${e}`),i=a=vg(`room-create`,String(e),()=>uu({id:`world-tile-${e}`,texture:n.texture,cleanTexture:r.texture,image:t,tileOriginX:e*$.tileWidth,columns:t.columns,room:t.connectedRoom,depthScale:2}))}else i=vg(`layers-create`,String(e),()=>Kl({id:`world-tile-${e}`,texture:n.texture,image:t,tileOriginX:0,parts:t.parts??[]}))}catch(e){throw Sg(n.texture),r&&Sg(r.texture),e}let o=i.root,s=o;a||(o.position.x=e*$.tileWidth);let c=i.meshes.get(`sky-void`);c&&(c.visible=!1);let l={root:o,layers:i,texture:n,cleanTexture:r,actorTextures:{}};try{if(t.station){let n=yd(t.station)?gh[t.station]:void 0,r=!!n,i=new URL(`./${bd(t.station)}`,location.href),a=await fetch(i,{signal:_h.signal});if(!a.ok)throw Error(`Resident manifest ${a.status}`);let o=await a.json();r||(o.referenceFrame=Kf(t.station,o.referenceFrame),o.referenceFrame=Yf(t.station,o.referenceFrame,{readability:!0}));for(let[e,n]of Object.entries(o.textures))l.actorTextures[e]=await Cg(n,i,`${t.station}-${e}`);if(t.station===`entry`||t.station===`street`){if(!t.motionRepairs)throw Error(`Missing independent cloth underlays: ${t.station}`);for(let[e,n]of[[`straps`,`__worldStrapsRepair`],[`hem`,`__worldHemRepair`]]){let r=t.motionRepairs[e];if(!r||r.width!==o.referenceFrame.image.width||r.height!==o.referenceFrame.image.height)throw Error(`Unregistered cloth repair: ${t.station}-${e}`);l.actorTextures[n]=await Cg(r,Yh,`${t.station}-${e}-repair`)}o.referenceFrame=tp(t.station,o.referenceFrame,{readability:!0})}if(r||(o.referenceFrame=Sp(t.station,o.referenceFrame)),!r&&t.eyeRepair){if(t.station!==`glass`||t.eyeRepair.width!==o.referenceFrame.image.width||t.eyeRepair.height!==o.referenceFrame.image.height||o.referenceFrame.eyes?.length!==2)throw Error(`Glass sclera repair requires both native original eye apertures`);l.actorTextures.__worldSclera=await Cg(t.eyeRepair,Yh,`glass-world-sclera`);let e=structuredClone(o.referenceFrame);for(let t of e.eyes)t.revealTextureId=`__worldSclera`,delete t.revealRegistration;e.revealRegistrations&&delete e.revealRegistrations.__worldSclera,o.referenceFrame=e}let s=$.height/(2*Math.tan(38*Math.PI/360))*Cp,c=n?n.placement({anchorX:e*$.tileWidth+200,cameraZ:s}):{anchor:[e*$.tileWidth+200,70],maxWidth:600,worldHeight:$.height,depth:10,cameraZ:s};await gd({manifest:o.referenceFrame,textures:Object.fromEntries(Object.entries(l.actorTextures).map(([e,t])=>[e,{width:t.width,height:t.height}])),placement:c,options:n?{supportLayerIds:n.supportLayerIds}:void 0},_h.signal),t.station;let u=vg(`resident-create`,t.station,()=>md(o.referenceFrame,l.actorTextures,c,n?{supportLayerIds:n.supportLayerIds}:void 0)),d=u.diagnostics.worldEnvelope;if(d.x<e*$.tileWidth+200||d.x+d.width>e*$.tileWidth+800||d.y<70||d.y+d.height>941||u.diagnostics.worstPerspectiveScale>$.proof.residentDepthScale)throw u.dispose(),Error(`Resident exceeds single-person proof: ${t.station}`);if(l.resident=u,_g[t.station]=u.diagnostics,!r&&t.support){let n=await Cg(t.support,Yh,`${t.station}-support`);l.actorTextures.__support=n,l.support=gu(o.referenceFrame,n,t.support.pixelToSource),e===0&&(l.support.mesh.position.x-=65/u.root.scale.x),u.root.add(l.support.mesh)}}t.logoSafeRect&&(l.terminals=$m({host:lh(`station-diegetic-controls`),camera:Bh,viewport:dh,logo:wg(s,t,t.logoSafeRect,`world-logo-${e}`,a),ink:Xh,onOpen:jg})),t.screenSafeRect&&t.buttonSafeRects?.length===3&&(l.terminals=$m({host:lh(`station-diegetic-controls`),camera:Bh,viewport:dh,cinema:{screen:wg(s,t,t.screenSafeRect,`world-cinema-screen`,a),buttons:t.buttonSafeRects.map((e,n)=>wg(s,t,e,`world-cinema-${n}`,a))},initialPortfolioIndex:ig,ink:Xh,onOpen:jg}));let n=new en;if(n.add(o),l.resident&&n.add(l.resident.root),await rg.prepare(n,_h.signal),Dh)throw Error(`World disposed`);vh.add(o),l.resident&&vh.add(l.resident.root),Hh.set(e,l),Wh.delete(e)}catch(e){throw Eg(l),e}})();Uh.set(e,t);try{await t}catch(t){throw Wh.add(e),Kh.push(String(t)),ph.textContent=`这一站暂时无法打开，请重试。`,mh.hidden=!1,t}finally{Uh.delete(e)}}function Eg(e){e.terminals?.dispose(),e.support?.dispose(),e.resident?.dispose(),e.layers.dispose(),Sg(e.texture.texture),e.cleanTexture&&Sg(e.cleanTexture.texture),Object.values(e.actorTextures).forEach(e=>Sg(e.texture)),e.root.name}function Dg(){if(!Jh||!Xh)return;let e=jh.snapshot(),t=new Set([...e.prefetchTiles,...Nh]);for(let e of t)!Hh.has(e)&&!Uh.has(e)&&!Wh.has(e)&&Tg(e).catch(()=>{});for(let[e,n]of Hh)!t.has(e)&&!eg&&(Eg(n),Hh.delete(e))}function Og(e){Th=e,dh.dataset.scene=hh[e],lh(`station-name`).textContent=ch[e].name,lh(`station-number`).textContent=`0${e+1} / 06`;for(let t of Array.from(document.querySelectorAll(`[data-station]`)))t.setAttribute(`aria-current`,String(Number(t.dataset.station)===e));uh.dispatchEvent(new CustomEvent(`scenechange`,{detail:{id:hh[e],index:e}}))}function kg(e){let t=$.cameraRange(wh);return yh&&Sh()?Math.max(t.min,Math.min(t.max,e*2*$.tileWidth+500)):$.stationX(e,wh)}function Ag(e,t=performance.now()){let n=Math.max(0,Math.min(5,e));if(lg=void 0,eg||tg>.002){ug=n;return}ug=void 0,zh({type:`request`,station:n,now:Rh(t)}),Fh={station:n},jh.setTargetX(kg(n)),history.replaceState(null,``,`#${hh[n]}`),lh(`station-map`).hidden=!0,Dg()}function jg(e){if(!$h||eg)return;ng=e,lg=void 0,e.kind===`portfolio`&&e.index!=null&&(ag(e.index),uh.querySelectorAll(`.portfolio-numbers button`)[e.index]?.click());let t=e.kind===`logo`?`print`:`underground`;uh.dispatchEvent(new CustomEvent(`scenechange`,{detail:{id:t,index:e.kind===`logo`?2:5}})),uh.dispatchEvent(new CustomEvent(`terminalrequest`,{detail:{id:t,trigger:e.button}}))}function Mg(e,t){let n=e===`logos`?2:5;if(Ag(n),lg=e,Math.abs(jh.snapshot().x-kg(n))<2){let r=Hh.get(n*2)?.terminals,i=e===`logos`?`logo`:`portfolio`;r?.focus(i)&&jg({kind:i,button:t,focus:()=>r.focus(i)})}}uh.addEventListener(`terminalfocus`,e=>{eg=!!e.detail.id,hg.set(eg||kh),fh.inert=eg;let t=uh.querySelector(`.world-notes`);t&&(t.inert=eg),eg||(fg.splice(0).forEach(e=>e()),uh.dispatchEvent(new CustomEvent(`scenechange`,{detail:{id:hh[Th],index:Th}})))},{signal:_h.signal}),uh.addEventListener(`click`,e=>{if(!(e.target instanceof Element))return;let t=e.target.closest(`[data-action]`);t&&(t.dataset.action===`map`&&(lh(`station-map`).hidden=!lh(`station-map`).hidden),(t.dataset.action===`logos`||t.dataset.action===`works`)&&Mg(t.dataset.action,t))},{signal:_h.signal});for(let[e,t]of hh.entries()){let n=document.createElement(`button`);n.type=`button`,n.dataset.station=String(e),n.setAttribute(`aria-label`,ch[e].name),n.addEventListener(`click`,()=>Ag(e)),lh(`station-dots`).append(n);let r=document.createElement(`a`);r.href=`#${t}`,r.dataset.station=String(e),r.textContent=`0${e+1}  ${ch[e].name}`,r.addEventListener(`click`,t=>{t.preventDefault(),Ag(e)}),lh(`station-map`).append(r)}var Ng=()=>Math.max(0,Math.min(5,Math.round((jh.snapshot().targetX/$.tileWidth-.5)/2)));lh(`station-next`).addEventListener(`click`,()=>Ag(Ng()+1)),lh(`station-prev`).addEventListener(`click`,()=>Ag(Ng()-1)),lh(`station-inspect`)?.addEventListener(`click`,()=>{yh=!yh,xh=yh?Th*2*$.tileWidth+500:void 0,uh.dataset.inspect=String(yh),lh(`station-inspect`).textContent=yh?`回到全景`:`近看`,lh(`station-inspect`).setAttribute(`aria-pressed`,String(yh)),Fh={station:Th},Bg(),Ag(Th)}),lh(`station-motion`).addEventListener(`click`,()=>{kh=!kh,lh(`station-motion`).textContent=kh?`开启动效`:`暂停动效`,lh(`station-motion`).setAttribute(`aria-pressed`,String(kh)),hg.set(kh||eg)}),lh(`station-gyro`).addEventListener(`click`,()=>{mg.requestGyro().then(e=>{ph.textContent=e===`active`?`感应已开启，轻轻转动手机。`:e===`denied`?`未开启感应，可拖动查看。`:`此设备暂不支持感应，可拖动查看。`,lh(`station-recenter`).hidden=e!==`active`})}),lh(`station-recenter`).addEventListener(`click`,()=>{mg.recalibrate(),ph.textContent=`已重新校准。`}),mh.addEventListener(`click`,()=>{Wh.clear(),mh.hidden=!0,ph.textContent=`街区正在亮灯。`,Eh?Dg():Gg()});var Pg=e=>e instanceof Element&&!!e.closest(`button,a,input,select,textarea,details,.terminal-focus-overlay`);dh.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(sg=Pg(e.target),og={x:e.clientX,y:e.clientY})},{signal:_h.signal}),dh.addEventListener(`pointerleave`,()=>{og=void 0,sg=!1},{signal:_h.signal});function Fg(e,t,n=performance.now()){let r=Lh.station;zh({type:`input`,deltaCSS:e,source:t,now:Rh(n)}),lg=void 0,r!==Lh.station&&history.replaceState(null,``,`#${hh[Lh.station]}`),Dg()}dh.addEventListener(`wheel`,e=>{if(eg||Pg(e.target))return;e.preventDefault();let t=e.deltaMode===1?16:e.deltaMode===2?dh.clientHeight:1;Fg((Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*t,`wheel`)},{passive:!1,signal:_h.signal});var Ig;dh.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&!Pg(e.target)&&!yh&&!eg&&(Ig={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,id:e.pointerId},dh.setPointerCapture(e.pointerId))},{signal:_h.signal}),dh.addEventListener(`pointermove`,e=>{if(Ig?.id!==e.pointerId||eg)return;let t=e.clientX-Ig.x,n=e.clientY-Ig.y;!Ig.axis&&Math.max(Math.abs(t),Math.abs(n))>=8&&(Ig.axis=Math.abs(t)>Math.abs(n)?`x`:`y`),Ig.axis&&Fg(-(Ig.axis===`x`?e.clientX-Ig.lastX:e.clientY-Ig.lastY),`drag`),Ig.lastX=e.clientX,Ig.lastY=e.clientY},{signal:_h.signal}),dh.addEventListener(`pointerup`,e=>{Ig?.id===e.pointerId&&(Ig=void 0,zh({type:`end`,now:Rh()}),dh.hasPointerCapture(e.pointerId)&&dh.releasePointerCapture(e.pointerId))},{signal:_h.signal}),dh.addEventListener(`pointercancel`,()=>{Ig=void 0,zh({type:`end`,now:Rh()})},{signal:_h.signal}),window.addEventListener(`keydown`,e=>{eg||Pg(e.target)||(e.key===`ArrowRight`&&(e.preventDefault(),Ag(Ng()+1)),e.key===`ArrowLeft`&&(e.preventDefault(),Ag(Ng()-1)))},{signal:_h.signal}),window.addEventListener(`hashchange`,()=>{let e=hh.indexOf(location.hash.slice(1));e>=0&&Ag(e)},{signal:_h.signal}),document.addEventListener(`visibilitychange`,()=>{Oh=document.hidden,Qh=0,hg.set(Oh||eg||kh);let e=jh.snapshot();zh({type:`tick`,x:e.x,velocity:e.velocity,blocked:e.blocked,coverageReady:e.coverageReady,hold:Oh||eg,now:Rh()},!1)},{signal:_h.signal});var Lg=0,Rg=0;function zg(e){let t=Math.min(Ch().height,uh.clientWidth/e),n=t*e;Math.abs(wh-e)<1e-9&&Math.abs(Lg-n)<.1&&Math.abs(Rg-t)<.1||(jh.setAspect(e),wh=e,Lg=n,Rg=t,dh.style.width=`${n}px`,dh.style.height=`${t}px`,uh.style.setProperty(`--world-art-height`,`${t}px`),Bh.aspect=e,Bh.updateProjectionMatrix(),qh.setPixelRatio(Math.min(devicePixelRatio,1.7)),qh.setSize(n,t,!1),rg?.resize(n,t,qh.getPixelRatio()))}function Bg(){qh&&(Mh.request(Ch(jh.snapshot().x).aspect),Eh||zg(wh),Dg())}function Vg(){let e=Mh.update({currentX:jh.snapshot().x,currentAspect:wh,readyTiles:new Set(Hh.keys())});Nh=new Set(e.requiredTiles),e.pending;for(let t of e.missingTiles)Wh.has(t)||Tg(t).catch(()=>{});let t=e.canCommit&&Math.abs(wh-e.committableAspect)>1e-9;e.canCommit&&zg(e.committableAspect);let n=Mh.resolveNavigation({viewport:e,aspectChanged:t,correcting:Ph,locked:eg||tg>.002});return Ph=n.correcting,n.action===`correct`?jh.setTargetX(n.targetX):n.action===`restore`&&(Fh.station===void 0?Fh.x!==void 0&&jh.setTargetX(Fh.x):jh.setTargetX(kg(Fh.station))),e.canCommit}var Hg=new ResizeObserver(Bg);Hg.observe(uh);function Ug(e){Dh||(Zh=requestAnimationFrame(Ug),Wg(e))}function Wg(e){let t=Qh?Math.min(.05,(e-Qh)/1e3):0;if(Qh=e,Oh||Ah||!Eh)return;let n=Number(yh&&Sh());if(Math.abs(bh-n)>1e-6&&(bh+=(n-bh)*(pg.matches?1:-Math.expm1(-5*t)),Math.abs(bh-n)<.001&&(bh=n),uh.style.setProperty(`--inspection-progress`,String(bh))),Mh.request(Ch(jh.snapshot().x).aspect),!Vg()){let t=jh.snapshot();zh({type:`tick`,x:t.x,velocity:t.velocity,hold:!0,now:Rh(e)},!1),Dg();return}let r=jh.update(t,{aspect:wh,readyTiles:new Set(Hh.keys()),hold:eg||tg>.002});zh({type:`tick`,x:r.x,velocity:r.velocity,blocked:r.blocked,coverageReady:r.coverageReady,hold:eg||tg>.002||Ph,now:Rh(e)});let i=dh.getBoundingClientRect(),a=og&&!sg?{x:Math.max(-1,Math.min(1,(og.x-i.left)/i.width*2-1)),y:Math.max(-1,Math.min(1,(og.y-i.top)/i.height*2-1))}:cg,o=Vh.update(t,eg?{x:0,y:0}:a,{hold:sg&&!eg,hidden:!1,reducedMotion:kh||pg.matches}),s=r.shot.position;Bh.fov=38,tg+=(Number(eg)-tg)*-Math.expm1(-8*t),Math.abs(tg-Number(eg))<.002&&(tg=Number(eg));let c=[...Hh.values()].flatMap(e=>e.resident?[{minY:e.resident.diagnostics.actualBounds.min[1],maxY:$.height-e.resident.diagnostics.worldEnvelope.y,maxZ:e.resident.diagnostics.actualBounds.max[2]}]:[]),l=Dp({look:o,height:$.height,aspect:wh,cameraZ:s[2],focusMix:tg,residentEnvelopes:c});if(Bh.position.set(s[0],l.baseCameraY,l.baseCameraZ),Bh.lookAt(r.x,l.baseCameraY,0),ng&&tg){let e=ng.focus(),t=new J(r.x,l.baseCameraY,0).lerp(new J(...e.target),tg);Bh.position.lerp(new J(...e.position),tg),Bh.fov+=(e.fov-38)*tg,Bh.lookAt(t)}tg===1&&fg.splice(0).forEach(e=>e()),!tg&&!eg&&(ng=void 0);let{dx:u,dy:d}=l;if(Bh.position.x+=u,Bh.position.y+=d,Bh.lookAt(r.x+u,l.baseCameraY+d,0),tg&&ng){let e=ng.focus();Bh.lookAt(new J(r.x,l.baseCameraY,0).lerp(new J(...e.target),tg).add(new J(u,d,0)))}let f=dh.clientHeight/(2*Math.tan(Bh.fov*Math.PI/360)*Bh.position.z);if(Bh.setViewOffset(dh.clientWidth,dh.clientHeight,-u*f*l.compensation,d*f*l.compensation,dh.clientWidth,dh.clientHeight),Bh.updateProjectionMatrix(),Bh.updateMatrixWorld(!0),!eg&&tg===0&&ug!==void 0){let e=lg;Ag(ug),lg=e}let p=Math.abs(r.velocity)>5||Math.abs(r.targetX-r.x)>3;dh.dataset.transition=String(p),dh.dataset.worldX=r.x.toFixed(3),dh.dataset.stopPhase=Lh.phase,dh.dataset.viewingStation=hh[Lh.station];let m=Math.max(0,Math.min(5,Math.round((r.x/$.tileWidth-.5)/2)));m!==Th&&!eg&&Og(m);for(let[e,n]of Hh){if(n.resident){let e=n.resident.projectFace(Bh,i),r=og&&e?Op(og,e,i):Gp(cg);n.resident.update(t,{active:!eg,hidden:!1,reducedMotion:kh||pg.matches,gaze:[r.x,r.y]})}n.terminals?.update(r.visibleTiles.includes(e),!p&&!eg&&tg===0)}if(lg&&!p&&Th===(lg===`logos`?2:5)){let e=lg;Mg(e,uh.querySelector(`[data-action="${e}"]`))}ph.textContent=Wh.size?`这一站暂时无法打开，请重试。`:r.blocked?`正在准备下一站。`:ph.textContent?.includes(`感应`)?ph.textContent:``,yg?.update(r.x,t,{paused:kh,hidden:Oh,reducedMotion:pg.matches}),rg.render(t),`${r.x.toFixed(1)}${[...Hh.keys()].join(`,`)}`,Dg()}async function Gg(){if(!(dg||Eh||Dh)){dg=!0;try{if(qh||(qh=new tl({antialias:!1,alpha:!1,powerPreference:`high-performance`}),qh.outputColorSpace=Ne,qh.setClearColor(`#0b1020`),rg=Dl({renderer:qh,scene:vh,camera:Bh}),dh.prepend(qh.domElement),await Bg(),qh.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),Ah=!0;let t=jh.snapshot();zh({type:`tick`,x:t.x,velocity:t.velocity,hold:!0,now:Rh()},!1)},{signal:_h.signal}),qh.domElement.addEventListener(`webglcontextrestored`,()=>{Ah=!1,Qh=0,Bg()},{signal:_h.signal})),Yh=new URL(`./city/continuous-world-v1/manifest.json`,location.href),!Jh){let e=await fetch(Yh,{signal:_h.signal,cache:`no-cache`});if(!e.ok)throw Error(`World manifest ${e.status}`);Jh=await e.json()}if(Jh.schemaVersion!==1||Jh.tiles.length!==11||Jh.tiles.some((e,t)=>e.index!==t))throw Error(`Incomplete continuous world`);if(!yg){for(let e of[`skyline`,`viaduct`,`foreground`])xg[e]||(xg[e]=await Cg(Jh.shared[e],Yh,e));yg=Ol({skyline:xg.skyline,viaduct:xg.viaduct,foreground:xg.foreground}),vh.add(yg.root)}if(!bg){for(let e of[`pavement`,`pier`])xg[e]||(xg[e]=await Cg(Jh.shared[e],Yh,e));bg=Ll({pavement:xg.pavement,pier:xg.pier}),vh.add(bg.root)}Xh||=await Km(_h.signal),await Promise.all($.visibleTiles(jh.snapshot().x,wh).map(Tg)),await ih(uh,{viewport:uh,cameraLayer:lh(`station-carriers`),externalCarrier:!0,sceneForTerminal:e=>e===`cinema`?`underground`:e,beforeReveal:()=>tg===1?Promise.resolve():new Promise(e=>fg.push(e)),initialPortfolioIndex:ig,onPortfolioChange:ag,signal:_h.signal}),$h=Eh=!0,Og(Th),ph.textContent=``,Dg(),Zh=requestAnimationFrame(Ug)}catch(e){Kh.push(String(e)),ph.textContent=`这一站暂时无法打开，请重试。`,mh.hidden=!1}finally{dg=!1}}}Og(Th),Gg(),window.addEventListener(`pagehide`,()=>{Dh=!0,_h.abort(),cancelAnimationFrame(Zh),Hg.disconnect(),mg.dispose(),Hh.forEach(Eg),Hh.clear(),yg?.dispose(),bg?.dispose(),Object.values(xg).forEach(e=>Sg(e.texture)),Xh?.dispose(),rg?.dispose(),qh?.dispose()},{once:!0});