export interface Participant {
    _id?: Number;
    cin:string;
    FirstName: string;
    LastName: string;
    mail: string;
    psw:string;
    Gender: string;
    DateOfBirth: string;
    Phone: Number;
    governorate: string;
    university: string;
    pay : boolean;
  }


  export interface Ambassadeur {
    id?: Number;
    cin:string;
    FirstName: string;
    LastName: string;
    mail: string;
    psw:string,
    Gender: string;
    DateOfBirth: string;
    Phone: Number;
    governorate: string;
    university: string;
    
  }

  export interface Financier {
    id?: Number;
    cin:string;
    FirstName: string;
    LastName: string;
    mail: string;
    psw:string,
    Gender: string;
    Phone: Number;   
  }