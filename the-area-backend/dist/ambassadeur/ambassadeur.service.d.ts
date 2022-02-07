import { Model } from 'mongoose';
import { Ambassadeur } from './ambassadeur.model';
export declare class AmbassadeurService {
    private readonly ambassadeurModel;
    constructor(ambassadeurModel: Model<Ambassadeur>);
    Addambassadeur(ambassadeur: any): Promise<Ambassadeur & {
        _id: any;
    }>;
    allambassadeur(): Promise<(Ambassadeur & {
        _id: any;
    })[]>;
    getambassabyid(id: string): Promise<any>;
}
