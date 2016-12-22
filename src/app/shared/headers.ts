import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Headers', '');
contentHeaders.append('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH,PUT,OPTIONS');
contentHeaders.append('Access-Control-Allow-Origin', '');
contentHeaders.append('Access-Control-Expose-Headers', 'Access-Token');
