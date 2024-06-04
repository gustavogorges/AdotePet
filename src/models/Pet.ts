export class Pet {
    id!: number;
    name!: string;
    species!: string;
    race!: string;
    castrated!: boolean;
    sex!: string;
    vacinated!: boolean;
    deficient!: boolean;
    birthDate!: string;
    location!: string; 
    description!: string;
    userId!: number;
  
    constructor() {
      this.name = '';
      this.species = '';
      this.race = '';
      this.castrated = false;
      this.sex = '';
      this.vacinated = false;
      this.deficient = false;
      this.birthDate = '';
      this.location = '';
      this.description  = '';
      this.userId = 0;
    }
  }
  