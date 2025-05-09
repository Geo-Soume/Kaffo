export type User = {
  id: string;
  keycloakId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;

  photoUrl?: string;

  dateOfBirth?: Date;
  collegeDegree?: string;
  job?: string;
  description?: string;

  addressId?: number;
};

// types/problem.ts

export interface ProblemDTO {
  id?: number;
  title: string;
  description: string;
  isReal: boolean;
  forContribution: boolean;
  forDonation: boolean;
  submissionDate: string;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
  rejectionReason: string;
  addressId: number;
  submittedByUserId?: number;
  approvedByUserId?: number;
  categoryId: number;
  photoUrl?: string;
  lat?: number;
  lng?: number;
  createdDate: string;
  solutionProposal?: string;
  requiredBudget?: number;


  details?: string;
}
