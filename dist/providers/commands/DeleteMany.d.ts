import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database';
export declare function DeleteMany(resourceName: string, params: ra.DeleteManyParams, client: FireClient): Promise<ra.DeleteManyResult>;
