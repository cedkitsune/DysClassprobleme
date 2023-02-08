import { enseignant } from './enseignant.model';

export interface classe {
  id?: string;
  className?: string;
  teacher?: enseignant;
}
