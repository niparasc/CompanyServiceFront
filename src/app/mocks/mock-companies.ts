import { Company } from '../domain/Company';
import { OWNERS } from './mock-beneficialOwners';

export const COMPANIES: Company[] = [
    { id: 1, name: 'Shell', address: 'Brandon St', city: 'London', country: 'England', email: 'shell@shell.com', phone: '1234', beneficialOwners: [OWNERS[0]] },
    { id: 2, name: 'BP', address: 'Wall St', city: 'New York', country: 'USA', email: 'bp@bp.com', phone: '2222', beneficialOwners: [OWNERS[1]] }
];