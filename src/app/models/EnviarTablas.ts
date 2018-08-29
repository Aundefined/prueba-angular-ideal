import {Persona} from '../models/Persona';

export class EnviarTablas{

    tab1: Persona[];
    tab2: Persona[];

    constructor(t1: Persona[], t2: Persona[]){

        this.tab1 = t1;
        this.tab2 = t2;
    }
}