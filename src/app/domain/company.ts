import { BeneficialOwner } from './BeneficialOwner';

export class Company {
    id: number;
    name: string;
    address: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    beneficialOwners: BeneficialOwner[];
}