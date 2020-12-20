import { UserDetails } from 'src/app/shared/models/user-details.model';

export class SignUpDetails {
  public details: UserDetails;
  public confirmPassword: string;

  constructor() {
    this.details = new UserDetails();
  }
}
