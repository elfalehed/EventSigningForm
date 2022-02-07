import { Ambassadeur } from './ambassadeur.model';
import { AmbassadeurService } from './ambassadeur.service';
export declare class AmbassadeurController {
    private readonly ambservice;
    constructor(ambservice: AmbassadeurService);
    registreAmbassadeur(Ambasadeur: any): Promise<Ambassadeur & {
        _id: any;
    }>;
    getAllUser(): Promise<(Ambassadeur & {
        _id: any;
    })[]>;
    getUser(params: any): Promise<Ambassadeur>;
}
